'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface MousePosition {
  x: number;
  y: number;
  timestamp: number;
}

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0, timestamp: 0 });
  const lastUpdateTime = useRef<number>(0);
  const updateInterval = 100;
  const currentRotation = useRef<number>(0);
  const targetRotation = useRef<number>(0);
  const robotPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // 회전 보간을 위한 함수
  const lerpRotation = (current: number, target: number, factor: number) => {
    let diff = target - current;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    return current + diff * factor;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup scene
    const scene = new THREE.Scene();
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create coordinate system
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    
    // Create floor
    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const floorMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xcccccc,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -2;
    scene.add(floor);
    
    // Create grid helper
    const gridHelper = new THREE.GridHelper(10, 10, 0x000000, 0x000000);
    gridHelper.position.y = -2;
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);
    
    // Create robot
    const robotGroup = new THREE.Group();
    
    // Robot body (cube)
    const bodyGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const bodyMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.6
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    robotGroup.add(body);
    
    // Robot head (sphere)
    const headGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const headMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x98fb98,
      transparent: true,
      opacity: 0.6
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 0.5;
    robotGroup.add(head);
    
    // Robot eyes
    const eyeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const eyeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff69b4,
      transparent: true,
      opacity: 0.8
    });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(0.1, 0.5, 0.25);
    robotGroup.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(-0.1, 0.5, 0.25);
    robotGroup.add(rightEye);
    
    // Position robot on the floor
    robotGroup.position.y = -1.75;
    scene.add(robotGroup);

    // 마우스 움직임 추적
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime.current < updateInterval) return;
      
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 4,
        y: y * 4,
        timestamp: currentTime
      });
      
      lastUpdateTime.current = currentTime;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation variables
    const clock = new THREE.Clock();
    let currentVelocity = new THREE.Vector3(0, 0, 0);
    let randomAngle = Math.random() * Math.PI * 2;
    let randomRadius = 1 + Math.random() * 1; // 1~2 사이의 반경
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // 마우스 주변에서 움직임
      const targetX = mousePosition.x;
      const targetZ = mousePosition.y;
      
      // 원형 경로 계산
      randomAngle += 0.01; // 회전 속도
      if (randomAngle > Math.PI * 2) randomAngle = 0;
      
      // 주기적으로 반경 변경
      if (Math.random() < 0.01) {
        randomRadius = 1 + Math.random() * 1;
      }
      
      // 목표 위치 계산 (마우스 주변 원형 경로)
      const targetPosition = new THREE.Vector3(
        targetX + Math.cos(randomAngle) * randomRadius,
        -1.75,
        targetZ + Math.sin(randomAngle) * randomRadius
      );
      
      // 현재 위치에서 목표 위치까지의 방향 계산
      const direction = targetPosition.clone().sub(robotGroup.position);
      const distance = direction.length();
      
      // 속도 업데이트 (부드러운 움직임을 위해)
      const speed = 0.02;
      currentVelocity.lerp(direction.normalize().multiplyScalar(speed), 0.05);
      robotGroup.position.add(currentVelocity);
      
      // 회전 처리
      if (currentVelocity.length() > 0.001) {
        targetRotation.current = Math.atan2(currentVelocity.x, currentVelocity.z);
        currentRotation.current = lerpRotation(
          currentRotation.current,
          targetRotation.current,
          0.05
        );
        robotGroup.rotation.y = currentRotation.current;
      }
      
      // 부드러운 움직임을 위한 보간
      robotGroup.position.y = -1.75 + Math.sin(elapsedTime * 2) * 0.05;
      
      // 회전 애니메이션도 부드럽게
      const tiltAmount = Math.sin(elapsedTime * 0.5) * 0.1;
      robotGroup.rotation.z = lerpRotation(robotGroup.rotation.z, tiltAmount, 0.1);
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Dispose geometries and materials
      floorGeometry.dispose();
      floorMaterial.dispose();
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      headGeometry.dispose();
      headMaterial.dispose();
      eyeGeometry.dispose();
      eyeMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}