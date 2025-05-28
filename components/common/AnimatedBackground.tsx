'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
      color: 0x87ceeb, // Sky blue
      transparent: true,
      opacity: 0.6
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    robotGroup.add(body);
    
    // Robot head (sphere)
    const headGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const headMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x98fb98, // Pale green
      transparent: true,
      opacity: 0.6
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 0.5;
    robotGroup.add(head);
    
    // Robot eyes
    const eyeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const eyeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff69b4, // Hot pink
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
    
    // Animation
    const clock = new THREE.Clock();
    let phase = 0; // 0: move along x, 1: move along z
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update phase based on time
      phase = Math.floor(elapsedTime / 4) % 2;
      
      // Move robot along different axes
      switch (phase) {
        case 0: // Move along x-axis
          robotGroup.position.x = Math.sin(elapsedTime * 2) * 4;
          robotGroup.rotation.y = Math.PI / 2;
          break;
        case 1: // Move along z-axis
          robotGroup.position.z = Math.sin(elapsedTime * 2) * 4;
          robotGroup.rotation.y = 0;
          break;
      }
      
      // Add some bobbing motion
      robotGroup.position.y = -1.75 + Math.sin(elapsedTime * 4) * 0.05;
      
      // Rotate the robot slightly
      robotGroup.rotation.z = Math.sin(elapsedTime) * 0.1;
      
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