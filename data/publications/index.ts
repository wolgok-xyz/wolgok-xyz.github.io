export interface PublicationLink {
  label: string;
  url: string;
}

export interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  links: PublicationLink[];
  abstract?: string;
  videoId?: string;
}

// Ordered newest first. Imported from https://erilab.xyz/publications/
export const publicationsData: Publication[] = [
  {
    id: 224,
    title: "Real-Time Execution with Autoregressive Policies",
    authors: "Sangkyu Lee, Seohyeon Park, Tackgeun You, Avi Caciularu, Idan Szpektor, Hwasup Lim, Youngjae Yu",
    venue: "Conference on Robot Learning (CoRL)",
    year: 2026,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2606.13355" }, { label: "Project", url: "https://oddqueue.github.io/realfast/" }]
  },
  {
    id: 223,
    title: "All-St3R SLAM: Real-time RGB Dynamic SLAM with Pixel-wise Motion Masking",
    authors: "Yewon Kim, Paul Hongsuck Seo, Sang Chul Ahn",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: 2026,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2610.16143" }]
  },
  {
    id: 222,
    title: "Spanning Tree Autoregressive Visual Generation",
    authors: "Sangkyu Lee, Changho Lee, Janghoon Han, Hosung Song, Tackgeun You, Hwasup Lim, Stanley Jungkyu Choi, Honglak Lee, Youngjae Yu",
    venue: "European Conference on Computer Vision (ECCV)",
    year: 2026,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2511.17089" }, { label: "Code", url: "https://github.com/oddqueue/star" }]
  },
  {
    id: 221,
    title: "Splatter Layout: Geometry-embedded 3D Reconstruction via Surface Unfolding",
    authors: "Bryan Heryanto, Tackgeun You, Chanwoo Kim, Hwasup Lim",
    venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), pp. 7709–7718",
    year: 2026,
    links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/document/11492109" }]
  },
  {
    id: 220,
    title: "Text-Controlled 4D Human Generation",
    authors: "Chanwoo Kim, Sanghun Kim, Hwasup Lim",
    venue: "Journal of The Korea Society of Computer and Information, 31(4), pp. 55–66",
    year: 2026,
    links: [{ label: "Paper", url: "https://journal.kci.go.kr/jksci/archive/articleView?artiId=ART003329458" }]
  },
  {
    id: 219,
    title: "Robust 3D Human Reconstruction System From Sparse Views in Outdoor Environments",
    authors: "Hansoo Park, Soomin Kim, Bryan Heryanto, Hwasup Lim",
    venue: "IEEE Access, 13, pp. 48034–48046",
    year: 2025,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ACCESS.2025.3544877" }]
  },
  {
    id: 218,
    title: "HeteroAvatar: Generation of Gaussian Head Avatars with Correct Geometry Using Hetero Rendering",
    authors: "Ahmet Cagatay Seker, Jun Seok Kang, Sang Chul Ahn",
    venue: "IEEE Access, 13, pp. 33768–33782",
    year: 2025,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ACCESS.2025.3543163" }, { label: "Project", url: "https://felizang.github.io/HeteroAvatar/" }]
  },
  {
    id: 217,
    title: "ContactField: Implicit Field Representation for Multi-Person Interaction Geometry",
    authors: "Hansol Lee, Tackgeun You, Hansoo Park, Woohyeon Shim, Sanghyeon Kim, Hwasup Lim",
    venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    year: 2024,
    links: [{ label: "Paper", url: "https://proceedings.neurips.cc/paper_files/paper/2024/file/435422305988b73c6cc00bcb29ba2531-Paper-Conference.pdf" }],
    abstract: "We introduce a novel implicit field representation tailored for multi-person interaction geometry in 3D spaces, capable of simultaneously reconstructing occupancy, instance identification (ID) tags, and contact fields. Our approach utilizes an implicit representation for interaction geometry contextualized by a multi-view local-global feature module, enabling precise modeling of close physical interactions through dense point retrieval in small areas.",
    videoId: "1PlsGj17kcE"
  },
  {
    id: 216,
    title: "Multi-Level Segmentation Data Generation Based on a Scene-Specific Word Tree",
    authors: "Soomin Kim, Juyoun Park",
    venue: "IEEE Access, 12, pp. 88202–88215",
    year: 2024,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ACCESS.2024.3418515" }]
  },
  {
    id: 215,
    title: "Diverse Humanoid Robot Pose Estimation from Images Using Only Sparse Datasets",
    authors: "Seokhyeon Heo, Youngdae Cho, Jeongwoo Park, Seokhyun Cho, Ziya Tsoy, Hwasup Lim, Youngwoon Cha",
    venue: "Applied Sciences, 14(19), 9042",
    year: 2024,
    links: [{ label: "Paper", url: "https://www.mdpi.com/2076-3417/14/19/9042" }]
  },
  {
    id: 214,
    title: "Full-Body Pose Estimation of Humanoid Robots Using Head-Worn Cameras for Digital Human-Augmented Robotic Telepresence",
    authors: "Youngdae Cho, Wooram Son, Jaewan Bak, Yisoo Lee, Hwasup Lim, Youngwoon Cha",
    venue: "Mathematics, 12(19), 3039",
    year: 2024,
    links: [{ label: "Paper", url: "https://www.mdpi.com/2227-7390/12/19/3039" }]
  },
  {
    id: 213,
    title: "Bidirectional Temporal Diffusion Model for Temporally Consistent Human Animation",
    authors: "Tserendorj Adiya, Jae Shin Yoon, Jungeun Lee, Sanghun Kim, Hwasup Lim",
    venue: "International Conference on Learning Representations (ICLR)",
    year: 2024,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2307.00574" }],
    abstract: "We introduce a method to generate temporally coherent human animation from a single image, a video, or a random noise. This problem has been formulated as modeling of an auto-regressive generation, i.e., to regress past frames to decode future frames. However, such unidirectional generation is highly prone to motion drifting over time, generating unrealistic human animation with significant artifacts such as appearance distortion. We claim that bidirectional temporal modeling enforces temporal coherence on a generative network by largely suppressing the motion ambiguity of human appearance.",
    videoId: "rjafsozxGIs"
  },
  {
    id: 212,
    title: "Improving Real-Time Omnidirectional 3D Multi-Person Human Pose Estimation with People Matching and Unsupervised 2D-3D Lifting",
    authors: "Pawel Knap, Peter Hardy, Alberto Tamajo, Hwasup Lim, Hansung Kim",
    venue: "International Conference on Electronics, Information, and Communication (ICEIC)",
    year: 2024,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2403.09437" }]
  },
  {
    id: 211,
    title: "PIDiffu: Pixel-aligned Diffusion Model for High-Fidelity Clothed Human Reconstruction",
    authors: "Jungeun Lee, Sanghun Kim, Hansol Lee, Tserendorj Adiya, Hwasup Lim",
    venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), pp. 5160–5169",
    year: 2024,
    links: [{ label: "Paper", url: "https://openaccess.thecvf.com/content/WACV2024/html/Lee_PIDiffu_Pixel-Aligned_Diffusion_Model_for_High-Fidelity_Clothed_Human_Reconstruction_WACV_2024_paper.html" }]
  },
  {
    id: 210,
    title: "View-independent gait events detection using CNN-transformer hybrid network",
    authors: "Ankhzaya Jamsrandorj, Dawoon Jung, Konki Sravan Kumar, Muhammad Zeeshan Arshad, Hwasup Lim, Jinwook Kim, Kyung-Ryoul Mun",
    venue: "Journal of Biomedical Informatics, 147, 104524",
    year: 2023,
    links: [{ label: "Paper", url: "https://doi.org/10.1016/j.jbi.2023.104524" }]
  },
  {
    id: 209,
    title: "VSCHH 2023: A Benchmark for the View Synthesis Challenge of Human Heads",
    authors: "Youngkyoon Jang, Jiali Zheng, Jifei Song, Helisa Dhamo, Eduardo Pérez-Pellitero, Thomas Tanay, Matteo Maggioni, Richard Shaw, Sibi Catley-Chandar, Yiren Zhou, Jiankang Deng, Ruijie Zhu, Jiahao Chang, Ziyang Song, Jiahuan Yu, Tianzhu Zhang, Khanh-Binh Nguyen, Joon-Sung Yang, Andreea Dogaru, Bernhard Egger, Heng Yu, Aarush Gupta, Joel Julin, László A. Jeni, Hyeseong Kim, Jungbin Cho, Dosik Hwang, Deukhee Lee, Doyeon Kim, Dongseong Seo, SeungJin Jeon, YoungDon Choi, Jun Seok Kang, Ahmet Cagatay Seker, Sang Chul Ahn, Aleš Leonardis, Stefanos Zafeiriou",
    venue: "IEEE/CVF International Conference on Computer Vision Workshops (ICCVW)",
    year: 2023,
    links: [{ label: "Paper", url: "https://openaccess.thecvf.com/content/ICCV2023W/RHWC/papers/Jang_VSCHH_2023_A_Benchmark_for_the_View_Synthesis_Challenge_of_ICCVW_2023_paper.pdf" }]
  },
  {
    id: 208,
    title: "LIIF-GAN: Learning Representations With Local Implicit Image Function and GAN for Realistic Images on a Continuous Scale",
    authors: "Jun Seok Kang, Sang Chul Ahn",
    venue: "British Machine Vision Conference (BMVC)",
    year: 2022,
    links: [{ label: "Paper", url: "https://pubs.kist.re.kr/handle/201004/76535" }]
  },
  {
    id: 207,
    title: "A Generalized Framework for Recognition of Expiration Dates on Product Packages Using Fully Convolutional Networks",
    authors: "Ahmet Cagatay Seker, Sang Chul Ahn",
    venue: "Expert Systems with Applications, 203, 117310",
    year: 2022,
    links: [{ label: "Paper", url: "https://doi.org/10.1016/j.eswa.2022.117310" }, { label: "Project", url: "https://felizang.github.io/expdate/" }]
  },
  {
    id: 206,
    title: "Variational Multi-Prototype Encoder for Object Recognition Using Multiple Prototype Images",
    authors: "Jun Seok Kang, Sang Chul Ahn",
    venue: "IEEE Access, 10, pp. 19586–19598",
    year: 2022,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ACCESS.2022.3151856" }]
  },
  {
    id: 205,
    title: "Performance Improvement of Deep Learning based Image Segmentation Using Pixel Shift",
    authors: "Howon Lee, Chang-Su Kim, Sang Chul Ahn",
    venue: "IEIE Summer Annual Conference",
    year: 2021,
    links: [{ label: "Paper", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10591262" }]
  },
  {
    id: 204,
    title: "Feasibility Analysis of Deep Learning-Based Reality Assessment of Human Back-View Images",
    authors: "Young Chan Kwon, Jae Won Jang, Hwasup Lim, Ouk Choi",
    venue: "Electronics, 9(4), 656",
    year: 2020,
    links: [{ label: "Paper", url: "https://www.mdpi.com/2079-9292/9/4/656" }]
  },
  {
    id: 203,
    title: "CNN-Based Denoising, Completion, and Prediction of Whole-Body Human-Depth Images",
    authors: "Jae Won Jang, Young Chan Kwon, Hwasup Lim, Ouk Choi",
    venue: "IEEE Access, 7, pp. 175842–175856",
    year: 2019,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ACCESS.2019.2957862" }]
  },
  {
    id: 202,
    title: "IR Surface Reflectance Estimation and Material Type Recognition Using Two-stream Net and Kinect Camera",
    authors: "SeokYeong Lee, HwaSup Lim, SangChul Ahn, SeungKyu Lee",
    venue: "ACM SIGGRAPH Posters, 43:1–43:2",
    year: 2019,
    links: [{ label: "Paper", url: "https://doi.org/10.1145/3306214.3338557" }]
  },
  {
    id: 201,
    title: "Rapid 3D Avatar Creation System Using a Single Depth Camera",
    authors: "Hwasup Lim, Junseok Kang, Sang Chul Ahn",
    venue: "IEEE Conference on Virtual Reality and 3D User Interfaces (VR), pp. 1329–1330",
    year: 2019,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/VR.2019.8798353" }]
  },
  {
    id: 200,
    title: "Simple method for generating evaluation data for scene flow algorithms",
    authors: "In Yup Jang, Hwasup Lim, Sang Chul Ahn",
    venue: "Electronics Letters, 55(1), pp. 24–26",
    year: 2019,
    links: [{ label: "Paper", url: "https://doi.org/10.1049/el.2018.6856" }]
  },
  {
    id: 199,
    title: "Fully Asymmetric Remote Collaboration System",
    authors: "Jin Uk Kwon, Jae-In Hwang, Jaeyoung Park, Sang Chul Ahn",
    venue: "IEEE Access, 7, pp. 54155–54166",
    year: 2019,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ACCESS.2019.2912397" }]
  },
  {
    id: 198,
    title: "RGBD Camera Based Material Recognition via Surface Roughness Estimation",
    authors: "Jungjun Kim, Hwasup Lim, Sang Chul Ahn, Seungkyu Lee",
    venue: "IEEE Winter Conference on Applications of Computer Vision (WACV), pp. 1963–1971",
    year: 2018,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/WACV.2018.00217" }]
  },
  {
    id: 197,
    title: "Cascaded Fingertip Detection and Classification for Human-Projector Interaction on Tabletop Surfaces",
    authors: "Ouk Choi, Young-Jun Son, Hwasup Lim, Sang Chul Ahn",
    venue: "International Conference on Electronics, Information, and Communication (ICEIC), pp. 1275–1278",
    year: 2018,
    links: [{ label: "Paper", url: "https://iceic2018.cau.ac.kr/Resource/ICEIC2018ProgramBook.pdf" }]
  },
  {
    id: 196,
    title: "Fast and robust 3D textured model reconstruction on mobile platforms",
    authors: "Hyeonseok Yang, Hwasup Lim",
    venue: "International Conference on Electronics, Information, and Communication (ICEIC)",
    year: 2018,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867533" }]
  },
  {
    id: 195,
    title: "A Walking-in-Place Method for Virtual Reality Using Position and Orientation Tracking",
    authors: "Juyoung Lee, Sang Chul Ahn, Jae-In Hwang",
    venue: "Sensors, 18(9), 2832",
    year: 2018,
    links: [{ label: "Paper", url: "https://doi.org/10.3390/s18092832" }]
  },
  {
    id: 194,
    title: "ThirdLight: Low-cost and High-speed 3D Interaction Using Photosensor Markers",
    authors: "Jaewon Kim, Gyuchull Han, Hwasup Lim, Shahram Izadi, Abhijeet Ghosh",
    venue: "European Conference on Visual Media Production (CVMP), 4:1–4:10",
    year: 2017,
    links: [{ label: "Paper", url: "https://doi.org/10.1145/3150165.3150169" }]
  },
  {
    id: 193,
    title: "Offline In-Hand 3D Modeling System Using Automatic Hand Removal and Improved Registration Method",
    authors: "Junseok Kang, Hyeonseok Yang, Hwasup Lim, Sang Chul Ahn",
    venue: "Journal of the HCI Society of Korea, 12(3), pp. 13–23",
    year: 2017,
    links: [{ label: "Paper", url: "https://doi.org/10.17210/jhsk.2017.08.12.3.13" }]
  },
  {
    id: 192,
    title: "Active Panoramic VR Video Play Using Low Latency Step Detection on Smartphone",
    authors: "Azeem Syed Muhammad, Sang Chul Ahn, Jae-In Hwang",
    venue: "ICCE",
    year: 2017,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQU0FYRUhXNmlIbEE/view?usp=sharing&resourcekey=0-3kwEEgUlhyKxPNVeSKcyIw" }]
  },
  {
    id: 191,
    title: "Depth-based Fingertip Detection for Human-Projector Interaction on Tabletop Surfaces",
    authors: "Young-Jun Son, Ouk Choi, Hwasup Lim, Sang Chul Ahn",
    venue: "IEEE International Conference on Consumer Electronics-Asia (ICCE-Asia)",
    year: 2016,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ICCE-Asia.2016.7804809" }]
  },
  {
    id: 190,
    title: "Simultaneous Segmentation, Estimation and Analysis of Articulated Motion from Dense Point Cloud Sequence",
    authors: "Youngji Kim, Hwasup Lim, Sang Chul Ahn, Ayoung Kim",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pp. 1085–1092",
    year: 2016,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/IROS.2016.7759184" }]
  },
  {
    id: 189,
    title: "Surface reflectance estimation and segmentation from single depth image of ToF camera",
    authors: "Seungkyu Lee, Jungjun Kim, Hwasup Lim, Sang Chul Ahn",
    venue: "Signal Processing: Image Communication, 47, pp. 452–462",
    year: 2016,
    links: [{ label: "Paper", url: "https://doi.org/10.1016/j.image.2016.07.006" }]
  },
  {
    id: 188,
    title: "Extensible Multiplex Real-time PCR of MicroRNA Using Microparticles",
    authors: "Seungwon Jung, Junsun Kim, Dong Jin Lee, Eun Hae Oh, Hwasup Lim, Kwang Pyo Kim, Nakwon Choi, Tae Song Kim, Sang Kyung Kim",
    venue: "Scientific Reports, 6, 22975",
    year: 2016,
    links: [{ label: "Paper", url: "https://doi.org/10.1038/srep22975" }]
  },
  {
    id: 187,
    title: "Embedded Deformation 기반 3D Flow Evaluation",
    authors: "장인엽, 임화섭, 안상철",
    venue: "Workshop on Image Processing and Image Understanding (IPIU)",
    year: 2016,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867603" }]
  },
  {
    id: 186,
    title: "Robust Binarization of Gray-Coded Pattern Images for Smart Projectors",
    authors: "Ouk Choi, Hwasup Lim, Sang Chul Ahn",
    venue: "International Conference on Electronics, Information, and Communication (ICEIC)",
    year: 2016,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ELINFOCOM.2016.7562992" }]
  },
  {
    id: 185,
    title: "Projector-camera based remote assistance system for the elderly: design issues and implementation",
    authors: "Jin Uk Kwon, Eun Sun Lee, Sang Chul Ahn",
    venue: "IEEE/SICE International Symposium on System Integration (SII), pp. 230–235",
    year: 2016,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867576" }]
  },
  {
    id: 184,
    title: "3D Modeling from Photos Given Topological Information",
    authors: "Young Min Kim, Junghyun Cho, Sang Chul Ahn",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 22(9), pp. 2070–2081",
    year: 2016,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/TVCG.2015.2505307" }]
  },
  {
    id: 183,
    title: "Effect of using Walk-In-Place Interface for Panoramic Video Play in VR",
    authors: "아짐, 안상철, 황재인",
    venue: "ACM Symposium on Spatial User Interaction",
    year: 2016,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867581" }]
  },
  {
    id: 182,
    title: "Multi-body ICP: Motion Segmentation of Rigid Objects on Dense Point Clouds",
    authors: "Youngji Kim, Hwasup Lim, Sang Chul Ahn",
    venue: "International Conference on Ubiquitous Robots and Ambient Intelligence (URAI), pp. 532–536",
    year: 2015,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/URAI.2015.7358823" }]
  },
  {
    id: 181,
    title: "Generalized Deformable Spatial Pyramid: Geometry-Preserving Dense Correspondence Estimation",
    authors: "Junhwa Hur, Hwasup Lim, Changsoo Park, Sang Chul Ahn",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pp. 1392–1400",
    year: 2015,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/CVPR.2015.7298745" }]
  },
  {
    id: 180,
    title: "모바일 증강현실을 위한 특징점 인식, 추적 기술 및 사례 연구",
    authors: "최희승, 안상철, 김익재",
    venue: "한국HCI학회 논문지",
    year: 2015,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867617" }]
  },
  {
    id: 179,
    title: "3D Deformable Spatial Pyramid for Dense 3D Motion Flow of Deformable Object",
    authors: "Junhwa Hur, Hwasup Lim, Sang Chul Ahn",
    venue: "International Symposium on Visual Computing (ISVC), pp. 118–127",
    year: 2014,
    links: [{ label: "Paper", url: "https://doi.org/10.1007/978-3-319-14249-4_12" }]
  },
  {
    id: 178,
    title: "A Fast TGV-l1 RGB-D Flow Estimation",
    authors: "Junha Roh, Hwasup Lim, Sang Chul Ahn",
    venue: "International Symposium on Visual Computing (ISVC), pp. 151–161",
    year: 2014,
    links: [{ label: "Paper", url: "https://doi.org/10.1007/978-3-319-14249-4_15" }]
  },
  {
    id: 177,
    title: "Depth Data-Driven Real-Time Articulated Hand Pose Recognition",
    authors: "Young-Woon Cha, Hwasup Lim, Min-Hyuk Sung, Sang Chul Ahn",
    venue: "International Symposium on Visual Computing (ISVC), pp. 492–501",
    year: 2014,
    links: [{ label: "Paper", url: "https://doi.org/10.1007/978-3-319-14364-4_47" }]
  },
  {
    id: 176,
    title: "Interactive Retexturing from Unordered Images",
    authors: "Jong-Ho Lee, Hwasup Lim, Seong-Oh Lee, Young-Woon Cha, Hyoung-Gon Kim, Sang Chul Ahn",
    venue: "International Conference on Ubiquitous Robots and Ambient Intelligence (URAI), pp. 18–21",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867653" }]
  },
  {
    id: 175,
    title: "RGB-D Fusion: Real-time Robust Tracking and Dense Mapping with RGB-D Data Fusion",
    authors: "Seong-Oh Lee, Hwasup Lim, Hyoung-Gon Kim, Sang Chul Ahn",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pp. 2749–2754",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867657" }]
  },
  {
    id: 174,
    title: "일차 쌍대 알고리즘 기반 색상-깊이 광류 추정",
    authors: "노준하, 임화섭, 안상철",
    venue: "Workshop on Image Processing and Image Understanding (IPIU)",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867679" }]
  },
  {
    id: 173,
    title: "Expression Recognition Driven Virtual Human Animation",
    authors: "Junghyun Cho, Yu-Jin Hong, Sang Chul Ahn, Ig Jae Kim",
    venue: "DAPI 2014",
    year: 2014,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQU1B6RTZMMjRjQlk/view?usp=sharing&resourcekey=0-Qp5qI9qNj3QAalkJfAi2pg" }]
  },
  {
    id: 172,
    title: "Insight: Webized Mobile AR and Real-life Use Cases",
    authors: "안상철, 이주현, 김진우, 전성국, 김정빈, 김일태, 심준식, 유병현, 고희동",
    venue: "International Symposium on Mixed and Augmented Reality",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867660" }]
  },
  {
    id: 171,
    title: "View Management for webized mobile AR contents",
    authors: "김정빈, 이주현, 유병현, 안상철, 고희동",
    venue: "International Symposium on Mixed and Augmented Reality",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867661" }]
  },
  {
    id: 170,
    title: "A Map-based Web Search Interface Using Point of Interest Aggregation",
    authors: "정광순, 안상철, 고희동",
    venue: "LNCS",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867667" }]
  },
  {
    id: 169,
    title: "데스크탑 및 현장 환경이 결합된 AR 저작 프레임워크",
    authors: "이형주, 이주현, 안상철, 유병현, 고희동, 김정현",
    venue: "한국정보과학회 한국컴퓨터종합학술대회 논문집",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867669" }]
  },
  {
    id: 168,
    title: "Collaborative AR Authoring Framework using Remote Panorama and In-situ Sensors",
    authors: "이형주, 이주현, 안상철, 고희동, 김정현",
    venue: "KJMR",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867672" }]
  },
  {
    id: 167,
    title: "In-situ 및 Remote 환경 기반 3D 증강현실 콘텐츠 저작도구",
    authors: "이형주, 안상철, 고희동",
    venue: "한국HCI학회 학술대회",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867675" }]
  },
  {
    id: 166,
    title: "Webizing mobile augmented reality content",
    authors: "안상철, 고희동, 유병현",
    venue: "NEW REVIEW OF HYPERMEDIA AND MULTIMEDIA",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867676" }]
  },
  {
    id: 165,
    title: "관심지점에 대한 한글어드바이스 추출 맵 인터페이스 : SVM을 이용한 한글어드바이스 추출 맵 인터페이스",
    authors: "정광순, 안상철, 고희동",
    venue: "한국HCI학회 학술대회",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867677" }]
  },
  {
    id: 164,
    title: "서적 정보 열람을 위한 웹 기반 증강현실 인터페이스",
    authors: "김정빈, 이주현, 안상철, 고희동",
    venue: "한국HCI학회 학술대회",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867678" }]
  },
  {
    id: 163,
    title: "증강현실 기반 채점 시스템",
    authors: "이주현, 김진우, 김정빈, 안상철, 고희동",
    venue: "한국HCI학회 학술대회",
    year: 2014,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867680" }]
  },
  {
    id: 162,
    title: "Image Unprojection for 3D Surface Reconstruction: A Triangulation-based Approach",
    authors: "Min-Hyuk Sung, Hwasup Lim, Hyoung-Gon Kim, Sang Chul Ahn",
    venue: "IEEE International Conference on Image Processing (ICIP), pp. 161–165",
    year: 2013,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ICIP.2013.6738034" }]
  },
  {
    id: 161,
    title: "Interframe consistent multifrequency phase unwrapping for time-of-flight cameras",
    authors: "Ouk Choi, Seungkyu Lee, Hwasup Lim",
    venue: "Optical Engineering, 52(5), 057005",
    year: 2013,
    links: [{ label: "Paper", url: "https://doi.org/10.1117/1.OE.52.5.057005" }]
  },
  {
    id: 160,
    title: "Poster: Real Time Hand Pose Recognition with Depth Sensors for Mixed Reality Interfaces",
    authors: "Byungkyu Kang, Mathieu Rodrigue, Tobias Höllerer, Hwasup Lim",
    venue: "IEEE Symposium on 3D User Interfaces (3DUI), pp. 171–172",
    year: 2013,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/3DUI.2013.6550233" }]
  },
  {
    id: 159,
    title: "Research Issues of Mobile AR Tour Project (MART)",
    authors: "Jae-In Hwang, Min-Hyuk Sung, Ig-Jae Kim, Hyounggon Kim, Sang Chul Ahn, Yong-Moo Kwon, Heedong Ko",
    venue: "KJMR 2013",
    year: 2013,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867718" }]
  },
  {
    id: 158,
    title: "Long-range Hand Gesture Interaction Based on Spatio-temporal Encoding",
    authors: "Jaewon Kim, Gyuchull Han, Ig-Jae Kim, Hyounggon Kim, Sang Chul Ahn",
    venue: "LNCS(HCII2013)",
    year: 2013,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQejhiLS1GNHZCWTg/view?usp=sharing&resourcekey=0-l1l5bDrwIIjEcJmdvquNIw" }]
  },
  {
    id: 157,
    title: "Painting Alive: Handheld Augmented Reality System for Large Targets",
    authors: "Jae-In Hwang, Min-Hyuk Sung, Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim, Heedong Ko",
    venue: "LNCS(HCII2013)",
    year: 2013,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQNjU0bWdaamNWZEk/view?usp=sharing&resourcekey=0-7suPTsnODNfo5THRK-Ox8Q" }]
  },
  {
    id: 156,
    title: "Web based Me-centric Resource Management System for Pervasive Environment",
    authors: "서대일, 안상철, 고희동",
    venue: "LNCS",
    year: 2013,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867709" }]
  },
  {
    id: 155,
    title: "A comparative study of 3D Web integration models for the Sensor Web",
    authors: "안상철, 유병현, 고희동",
    venue: "International Conference on 3D Web Technology",
    year: 2013,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867710" }]
  },
  {
    id: 154,
    title: "Webizing Mobile AR Content",
    authors: "안상철, 고희동, Steven Feiner",
    venue: "IEEE Virtual Reality",
    year: 2013,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867719" }]
  },
  {
    id: 153,
    title: "Spin Image Revisited: Fast Candidate Selection Using Outlier Forest Search",
    authors: "Young-Woon Cha, Hwasup Lim, Seong-Oh Lee, Hyoung-Gon Kim, Sang Chul Ahn",
    venue: "Asian Conference on Computer Vision (ACCV) Workshops, pp. 209–222",
    year: 2012,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867727" }]
  },
  {
    id: 152,
    title: "Web Image-based Super-resolution",
    authors: "Jong-Ho Lee, Sang Chul Ahn, Hwasup Lim, Ig-Jae Kim, Jaewon Kim, Hyoung-Gon Kim",
    venue: "International Conference on Pattern Recognition (ICPR), pp. 1060–1063",
    year: 2012,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867729" }]
  },
  {
    id: 151,
    title: "Putting Real-World Objects into Virtual World: Fast Automatic Creation of Animatable 3D Models with a Consumer Depth Camera",
    authors: "Hwasup Lim, Seong-Oh Lee, Jong-Ho Lee, Min-Hyuk Sung, Young-Woon Cha, Hyoung-Gon Kim, Sang Chul Ahn",
    venue: "International Symposium on Ubiquitous Virtual Reality (ISUVR), pp. 38–41",
    year: 2012,
    links: [{ label: "Paper", url: "https://doi.org/10.1109/ISUVR.2012.12" }]
  },
  {
    id: 150,
    title: "Software Component Replacement for Reusability of Application in Robot Platform",
    authors: "Yun-Sam Kim, Sang Chul Ahn, Yong-Moo Kwon",
    venue: "URAI 2012",
    year: 2012,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867726" }]
  },
  {
    id: 149,
    title: "A Convenient Way to Use Robots in a Networked Environment",
    authors: "Ui Kyu Song, Sang Chul Ahn, Yong-moo Kwon",
    venue: "ISR 2012",
    year: 2012,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQNTFUVGhORWp3bW8/view?usp=sharing&resourcekey=0-aaqA3hQzV0E6MQ2AUT7hFA" }]
  },
  {
    id: 148,
    title: "Robot component connection mechanism using IP based permission assignment",
    authors: "Ki-Woong Lim, Sang Chul Ahn, Yong-Moo Kwon, KwangHoon Sohn",
    venue: "ICCAS 2011",
    year: 2011,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQbDBpMUNQRkhhZ1U/view?usp=sharing&resourcekey=0-yF_nsz1O9qeAlDmMEkiD4A" }]
  },
  {
    id: 147,
    title: "3D Interaction Using Mobile Device on 3D Environments with Large Screen",
    authors: "Dongwoo Lee, Gerard J. Kim, Jae-In Hwang, Sang Chul Ahn",
    venue: "MobileHCI 2011",
    year: 2011,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQcE5HRTktb0ppcjQ/view?usp=sharing&resourcekey=0-pLH8rqby4B_vaVMnUU8pZA" }]
  },
  {
    id: 146,
    title: "A Vision-Based Mobile Augmented Reality System for Baseball Games",
    authors: "Seong-Oh Lee, Sang Chul Ahn, Jae-In Hwang, Hyoung-Gon Kim",
    venue: "LNCS(HCII 2011), vol.6773, pp.61-68",
    year: 2011,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQeTIwajhGWUN0X2s/view?usp=sharing&resourcekey=0-G4uJPBXFmPTaveQjeD5A9g" }]
  },
  {
    id: 145,
    title: "Fault Tolerant Framework and Techniques for Component-Based Autonomous Robot Systems",
    authors: "Heejune Ahn, Sang Chul Ahn, Junyoung Heo, Sung Y. Shin",
    venue: "ACM Symposium on Applied Computing 2011",
    year: 2011,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQX3JLb0ZkVnc2a2s/view?usp=sharing&resourcekey=0-A9unhpD9j9wDEkL6LFhNiA" }]
  },
  {
    id: 144,
    title: "미러월드 (Mirror Worlds) 생성 기술",
    authors: "안상철",
    venue: "로봇과 인간",
    year: 2011,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867781" }]
  },
  {
    id: 143,
    title: "MIF: Framework Enhancing UX using Multimodal Interactioin for Mobile AR",
    authors: "송인준, 김익재, 황재인, 안상철, 고희동",
    venue: "KJMR",
    year: 2011,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867824" }]
  },
  {
    id: 142,
    title: "A New Approach to Calibrate Pseudolite Position using Multi-Antenna and Carrier Phase Measurement Without Cycle Ambiguity",
    authors: "김종원, 이택진, 소형민, 전상훈, 김강호, 기창돈, 고희동, 안상철",
    venue: "ITM",
    year: 2011,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867830" }]
  },
  {
    id: 141,
    title: "UPnP Network Bridge for Supporting Interoperability through Non-IP Channels",
    authors: "Young Min Baek, Sang Chul Ahn, Yong-Moo Kwon",
    venue: "IEEE transactions on consumer electronics",
    year: 2010,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQd0ZSdXJsaklLOG8/view?usp=sharing&resourcekey=0-ZPYShePqnv96KB--JvKQ_w" }]
  },
  {
    id: 140,
    title: "Development of an autonomous candy serving robot using UPnP based robot middleware",
    authors: "Kiwoong Lim, Ui Kyu Song, Sang Chul Ahn, Yong-Moo Kwon, Kwanghoon Sohn",
    venue: "URAI 2010",
    year: 2010,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQdFpScUZkWkRUa0U/view?usp=sharing&resourcekey=0-E80HnGL8czf7Ti55rHkyGA" }]
  },
  {
    id: 139,
    title: "Interactive panorama video viewer with head tracking algorithms",
    authors: "Yu-Jin Hong, Jae-In Hwang, Youn Sun Bum, Sang Chul Ahn, Hyoung-Gon Kim, Heedong Ko",
    venue: "Human-Centric Computing (HumanCom) 2010",
    year: 2010,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQQm9QVFdCSWY5NW8/view?usp=sharing&resourcekey=0-nraXAgEM24GmFzMgtNihGQ" }]
  },
  {
    id: 138,
    title: "UPnP single event mechanism for OPRoS robot S/W platform",
    authors: "Kiwoong Lim, Sang Chul Ahn, Yong-Moo Kwon, Kwanghoon Sohn",
    venue: "ICCAS 2010",
    year: 2010,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQRVZxZk5GYkp4Ukk/view?usp=sharing&resourcekey=0-zHeoTg0EVOBk1XpjcNiyDg" }]
  },
  {
    id: 137,
    title: "A Hierarchical Fault Tolerant Architecture for Component-based Service Robots",
    authors: "Heejune Ahn, Dong-Su Lee, Sang Chul Ahn",
    venue: "IEEE International Conf. on Industrial Informatics 2010",
    year: 2010,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQRk9pb0JTdWhiQ28/view?usp=sharing&resourcekey=0-WJdW4QTWVflSrZlEIXxuOA" }]
  },
  {
    id: 136,
    title: "Mobile health monitoring system based on activity recognition using accelerometer",
    authors: "Yu-Jin Hong, Ig Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "Simulation modelling practice & theory, Vol. 18, No. 4, pp.446-455",
    year: 2010,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQcEp2V3ZLdF9ZRlk/view?usp=sharing&resourcekey=0-grFJuoq9ySMwYtyxftk9_Q" }]
  },
  {
    id: 135,
    title: "상태감시컴포넌트를 사용한 OPRoS 프레임워크의 고장감내 기법",
    authors: "안희준, 안상철",
    venue: "제어로봇시스템학회논문지",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867870" }]
  },
  {
    id: 134,
    title: "OPRoS 로봇의 상태 모니터링을 위한 Event Manager",
    authors: "조지훈, 임기웅, 안상철, 권용무",
    venue: "대한전자공학회 하계학술대회",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867876" }]
  },
  {
    id: 133,
    title: "UPnP 기반 로봇 미들웨어를 이용한 서빙 로봇 제어",
    authors: "임기웅, 안상철, 권용무",
    venue: "대한전자공학회 하계학술대회",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867878" }]
  },
  {
    id: 132,
    title: "서비스로봇의 신뢰성 향상을 위한 OPRoS 기반 Fault-tolerance 기법",
    authors: "안희준, 이동수, 안상철",
    venue: "제어·로봇·시스템학회논문지 (Journal of Institute of Control, Robotics and Systems Engineering)",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867879" }]
  },
  {
    id: 131,
    title: "OPRoS 로봇 내부의 컴포넌트 관리 기술",
    authors: "박주영, 안상철, 권용무",
    venue: "ICROS",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867883" }]
  },
  {
    id: 130,
    title: "Windows NT 운영체제의 제약사항을 고려한 OPRoS 실시간 컴포넌트 스케줄러의 설계",
    authors: "이동수, 안희준, 안상철",
    venue: "ICROS",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867885" }]
  },
  {
    id: 129,
    title: "다중 로봇 제어를 위한 UDN 기반 로봇 컴포넌트 검색 기술",
    authors: "임기웅, 안상철, 김미숙, 박홍성",
    venue: "ICROS",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867886" }]
  },
  {
    id: 128,
    title: "컴포넌트 기반 OPRoS 시스템의 Fault-tolerant 컴포넌트 확장 기법",
    authors: "안희준, 안상철",
    venue: "ICROS",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867888" }]
  },
  {
    id: 127,
    title: "IEEE 1394를 이용한 SBC 간의 UPnP 네트워크 구성 방법",
    authors: "송의규, 안상철, 권용무",
    venue: "ICROS",
    year: 2010,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867892" }]
  },
  {
    id: 126,
    title: "Design and Implementation of a Fault Tolerant Computing Platform for Service Robots",
    authors: "Heejune Ahn, Sang Chul Ahn",
    venue: "ICONI 2009",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQTExiNlhKYzNiMG8/view?usp=sharing&resourcekey=0-D_O9pR3kLiyJk1M56HFodg" }]
  },
  {
    id: 125,
    title: "MART-MAF: Media File Format for AR Tour Guide Service",
    authors: "Ig Jae Kim, In Jun Song, Jae-In Hwang, Sang Chul Ahn, Hyoung-Gon Kim, Heedong Ko",
    venue: "IEEE International Workshop on Multimedia Information Processing and Retrieval 2009.",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQcTZ3LVVrdnZlQkU/view?usp=sharing&resourcekey=0-bJXm_b_Bpu_06EoG3u3EKw" }]
  },
  {
    id: 124,
    title: "A Fault-Tolerant Architecture for Component-based Service Robot Software Platforms",
    authors: "Heejune Ahn, Byoung Wook Choi, Sang Chul Ahn",
    venue: "URAI 2009",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQX19oSGlSdUZjN2s/view?usp=sharing&resourcekey=0-19EZt6azKHAwEul2SfRbnA" }]
  },
  {
    id: 123,
    title: "Efficient UPnP SOAP transmission using IP matching",
    authors: "Kiwoong Lim, Sang Chul Ahn, Kwanghoon Sohn",
    venue: "URAI 2009",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQVHk1TU04Wk9wRTQ/view?usp=sharing&resourcekey=0-ELRUf6_GKIOYm2lLkIdlow" }]
  },
  {
    id: 122,
    title: "Tangible Video Teleconference System Using Real-Time Image-Based Relighting",
    authors: "Sae-Woon Ryu, Sang Hwa Lee, Sang Chul Ahn, Jong-Il Park",
    venue: "IEEE transactions on consumer electronics, Vol.55, No.3, pp.1162-1168",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQaS1fd2ZwRmFwTU0/view?usp=sharing&resourcekey=0-LS84y2FaPk44Hls39sBycA" }]
  },
  {
    id: 121,
    title: "Component Design Patterns for Robot Platform Standardization: Anatomical studies and a Proposal",
    authors: "Heejune Ahn, Sang Hyuk Kang, Sang Chul Ahn",
    venue: "ICCAS-SICE 2009",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQOHRQZDZ3M21NOXc/view?usp=sharing&resourcekey=0-NX0dwpFwXQk3NrevU19RYA" }]
  },
  {
    id: 120,
    title: "UPnP robot middleware for dynamic services",
    authors: "Ki-Woong Lim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "ICCAS-SICE 2009",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQTUh3RmxEUWVodXc/view?usp=sharing&resourcekey=0-wvKbAfD6ixuLE9Ivl5CnHg" }]
  },
  {
    id: 119,
    title: "UPnP Network Bridge Architecture for Combining Different Networks",
    authors: "Young Min Baek, Sang Chul Ahn, Yong-Moo Kwon",
    venue: "ITC-CSCC 2009",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQb0YtVV9oQ0d5Q0U/view?usp=sharing&resourcekey=0-miFczsV4O32ij1Kn0MdMCw" }]
  },
  {
    id: 118,
    title: "Motion-based Interaction for Mirror World in Mobile Devices",
    authors: "Jae-In Hwang, Ig Jae Kim, Donghoon Kang, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "HCI International 2009.",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQUEVPNnJWQVpZQVk/view?usp=sharing&resourcekey=0-K-oUU4liO83RK7yQ_HxuUQ" }]
  },
  {
    id: 117,
    title: "Development of an Open Software Platform for Robotics Services in Korea",
    authors: "H. S. Park, S. Han, B. W. Choi, Sang Chul Ahn, J. B. Lee, S. H. Kim, H. S. Kim",
    venue: "ICRA International Workshop on Open Source Software in Robotics",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQUGRzTUF2WnFuRkU/view?usp=sharing&resourcekey=0-QoFM94j7k5ZcRmuR__hCpg" }]
  },
  {
    id: 116,
    title: "In-Situ Annotation for AR Tour Service",
    authors: "Ig Jae Kim, Jein Hwang, Sang Chul Ahn, Hyoung-Gon Kim, Heedong Ko",
    venue: "Korea-Japan Workshop on Mixed Reality (KJMR) 2009",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQU2JVR0d6LVg4NGs/view?usp=sharing&resourcekey=0-c8es0DhoslqnyE1L2GocdA" }]
  },
  {
    id: 115,
    title: "Inertial Orientation Tracking for the Mixed Reality Applications",
    authors: "Donghoon Kang, Jinwook Kim, Sang Chul Ahn, Heedong Ko",
    venue: "Korea-Japan Workshop on Mixed Reality (KJMR) 2009",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQaFBNWFB4WFJiNGM/view?usp=sharing&resourcekey=0-t5lI6IIr_l17Oo70whSMsA" }]
  },
  {
    id: 114,
    title: "S/W Framework in OPRoS Robot Platform",
    authors: "Sang Chul Ahn, Ju Young Park, Yong-Moo Kwon, Heedong Ko, Hyoung-Gon Kim",
    venue: "ICRA2009 - International Workshop on Software Development and Integration in Robotics",
    year: 2009,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQa1RiSEJHUUktZUE/view?usp=sharing&resourcekey=0-IQhLIa3dJBpL4qV6zygbgA" }]
  },
  {
    id: 113,
    title: "OPRoS 표준 플랫폼의 고장감내기능의 설계 및 구현",
    authors: "윤글영, 안희준, 안상철",
    venue: "대한전자공학회 하계종합학술대회",
    year: 2009,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867938" }]
  },
  {
    id: 112,
    title: "로봇 서비스의 동적 재구성을 위한 Component Manager",
    authors: "임기웅, 안상철, 권용무, 고희동, 김형곤",
    venue: "대한전자공학회 하계종합학술대회",
    year: 2009,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867941" }]
  },
  {
    id: 111,
    title: "Smart phone을 이용한 UPnP 로봇 구성",
    authors: "김태윤, 안상철",
    venue: "대한전자공학회 하계종합학술대회",
    year: 2009,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867943" }]
  },
  {
    id: 110,
    title: "UPnP 기반 로봇 미들웨어의 효율적 데이터 전송",
    authors: "김경산, 안상철, 권용무, 고희동, 김형곤",
    venue: "로봇공학회논문지",
    year: 2009,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867961" }]
  },
  {
    id: 109,
    title: "Activity Recognition Using Wearable Sensors for Elder Care",
    authors: "Yu-Jin Hong, Ig Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "FGCN 2008",
    year: 2008,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQTEgzMWRudlBYZzg/view?usp=sharing&resourcekey=0-UEu6XviOAVlKX7gWOC6ilg" }]
  },
  {
    id: 108,
    title: "Development of Massive Data Transferring Method for UPnP based Robot Middleware",
    authors: "Kyung San Kim, Sang Chul Ahn, Yong-Moo Kwon, Heedong Ko, Hyoung-Gon Kim",
    venue: "URAI 2008",
    year: 2008,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQTUFFRklRM25BVjA/view?usp=sharing&resourcekey=0-cbmcZgc5Os251_4SGVYBzA" }]
  },
  {
    id: 107,
    title: "Experience Sharing in Tangible Web based on Lifelog",
    authors: "Ig Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "ASIAGRAPH 2008",
    year: 2008,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQZ09lZjdRQWF3ZW8/view?usp=sharing&resourcekey=0-F3z_h_zAxl057kit8e-GUA" }]
  },
  {
    id: 106,
    title: "Robotic Technology Component with UPnP Communication (RTU Component)",
    authors: "Maria Niken Mayangsari, Yong-Moo Kwon, Sang Chul Ahn, Juyoung Park",
    venue: "ICCAS 2008",
    year: 2008,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867989" }]
  },
  {
    id: 105,
    title: "Tangible Tele-Meeting System with a Visually Augmented Robot",
    authors: "Bum-Jae You, Sang Chul Ahn",
    venue: "International Symposium on Robotics 2008",
    year: 2008,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQbXlMekNBOGUtVUE/view?usp=sharing&resourcekey=0-7mPBUd8EUCLADjWxXcbduw" }]
  },
  {
    id: 104,
    title: "Tangible Telemeeting System with Tangible Video Avatar and Large Display",
    authors: "Ig-Jae Kim, Sang-Yup Lee, Jane Hwang, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "International Symposium on Robotics 2008",
    year: 2008,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQbVVId0Z5dVV5azA/view?usp=sharing&resourcekey=0-EJka0KQ5oyVkAAQ24UGBAA" }]
  },
  {
    id: 103,
    title: "Augmented Robot Agent: Enhancing Co-Presence of the Remote Participant",
    authors: "Jane Hwang, Sangyup Lee, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "ISMAR 2008",
    year: 2008,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQTl9Zb0J3N2FWWGc/view?usp=sharing&resourcekey=0-TJS3ZTGvCw8I1f6ndcl-Wg" }]
  },
  {
    id: 102,
    title: "Automatic ADL classification using 3-axial accelerometers and RFID sensor",
    authors: "Saemi Im, Ig Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "IEEE International Conference on Multisensor Fusion and Integration for Intelligent Systems",
    year: 2008,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867996" }]
  },
  {
    id: 101,
    title: "Automatic Lifelog Media Annotation based on Heterogeneous Sensor Fusion",
    authors: "Ig Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "IEEE International Conference on Multisensor Fusion and Integration for Intelligent Systems",
    year: 2008,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867999" }]
  },
  {
    id: 100,
    title: "Large-Scale Stereo Display Wall Using Programmable Graphics Hardware",
    authors: "Ig Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "3DTV CONFERENCE 2008",
    year: 2008,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868011" }]
  },
  {
    id: 99,
    title: "하이테크 테마파크 영상관의 동향 및 전망",
    authors: "안상철, 황재인",
    venue: "정보과학회지",
    year: 2008,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5867980" }]
  },
  {
    id: 98,
    title: "3차원 가속 센서 및 RFID 센서를 이용한 ADL 자동 분류",
    authors: "임새미, 김익재, 안상철, 김형곤",
    venue: "대한전자공학회논문지 CI",
    year: 2008,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868008" }]
  },
  {
    id: 97,
    title: "VARU Framework: Enabling Rapid Prototyping of VR, AR and Ubiquitous Applications",
    authors: "실비아, 안상철, 김진욱, 고희동",
    venue: "IEEE Virtual Reality",
    year: 2008,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868017" }]
  },
  {
    id: 96,
    title: "ADL Classification Using Triaxial Accelerometers and RFID",
    authors: "Ig Jae Kim, Saemi Im, Yu-Jin Hong, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "International Workshop on Ubiquitous Convergence Technology",
    year: 2007,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868032" }]
  },
  {
    id: 95,
    title: "Tangible Video Avatar for Natural Tele-Interaction",
    authors: "Sang-Yup Lee, Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim, Myo-Taeg Lim",
    venue: "TSI workshop 2007",
    year: 2007,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQWURFSzRZR0dxMUE/view?usp=sharing&resourcekey=0-Lra16pe3Bm6S5rtJbry9IA" }]
  },
  {
    id: 94,
    title: "Towards Gapless Tangible Space",
    authors: "Jane Hwang, Gerard Jounghyun Kim, Sang-Yup Lee, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "TSI workshop 2007",
    year: 2007,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQT1I1bkswdGNNWG8/view?usp=sharing&resourcekey=0-UAC1ysL8_CBu1ZeZLRF4nQ" }]
  },
  {
    id: 93,
    title: "Localizing the users position in CAVE-like Display Cluster",
    authors: "Donghoon Kang, Changhoon Park, Heedong Ko, Yong-Moo Kwon, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "Int'l Conf. on New EXploratory Technology(NEXT 2007)",
    year: 2007,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQWG1CMWs5R2dCSjg/view?usp=sharing&resourcekey=0-DSal4fJ8iAENWgkX230uhw" }]
  },
  {
    id: 92,
    title: "Efficient Tiled Stereo Display System for Tangible Meeting",
    authors: "Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "IMID2007",
    year: 2007,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQZldxa2t0Ymk5ZVE/view?usp=sharing&resourcekey=0-MdJyXblTWgQar78PpKI5BQ" }]
  },
  {
    id: 91,
    title: "Human-Robot Interaction with Indoor Virtual Model",
    authors: "Sang Woo Jo, Jeongseok Ki, Kyeong Won Jeon, Yong-Moo Kwon, Sang Chul Ahn",
    venue: "IEEE RoMAN 2007",
    year: 2007,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868063" }]
  },
  {
    id: 90,
    title: "UPnP Robot Middleware and its Application to Robots",
    authors: "Sang Chul Ahn, Jung-Woo Lee, Ki-Woong Lim, Heedong Ko, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "ICAR2007",
    year: 2007,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQMjhrbXUydkNfSjA/view?usp=sharing&resourcekey=0-eLBzswatjpPM-_XPwuh0VQ" }]
  },
  {
    id: 89,
    title: "Human - Robot Interaction with the Indoor Model of Virtual URS",
    authors: "Sang Woo Jo, Jeongseok Ki, Kyeong Won Jeon, Yong-Moo Kwon, Sang Chul Ahn",
    venue: "ICRA 2007",
    year: 2007,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868077" }]
  },
  {
    id: 88,
    title: "Tiled Stereo Display System for Immersive Telemeeting",
    authors: "김익재, 안상철, 김형곤",
    venue: "Journal of Information Display",
    year: 2007,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868028" }]
  },
  {
    id: 87,
    title: "Follow Me Follow You: Location Based Ubiquitous Communication Service Framework",
    authors: "홍승표, 서대일, 송규원, 안상철, 강동훈, 김진욱, 고희동",
    venue: "International Conference on New EXploratory Technology (NEXT 2007)",
    year: 2007,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868043" }]
  },
  {
    id: 86,
    title: "HMD 기반 증강현실 응용을 위한 인터페이스",
    authors: "안상철, 이경준, 김형곤",
    venue: "컴퓨터그래픽스학회논문지",
    year: 2007,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868071" }]
  },
  {
    id: 85,
    title: "Web Based LifeLog Media System",
    authors: "김익재, 안상철, 김형곤",
    venue: "Web Based Communities",
    year: 2007,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868082" }]
  },
  {
    id: 84,
    title: "Personalized Life Log Media System in Ubiquitous Environment",
    authors: "Ig Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "Lecture Note in Computer Science(LNCS): ICUCT, vol.4412, pp.20-29",
    year: 2006,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQZ0paUjVKdnhPOU0/view?usp=sharing&resourcekey=0-ZndGgqf992c9n0akAqxiZw" }]
  },
  {
    id: 83,
    title: "Real-time 3D Video Avatar in Mixed Reality: An Implementation for Immersive Telecommunication",
    authors: "Sang-Yup Lee, Sang Chul Ahn, Hyoung-Gon Kim, MyoTaeg Lim",
    venue: "Simulation & Gaming, 37(4), pp. 491–506",
    year: 2006,
    links: [{ label: "Paper", url: "https://doi.org/10.1177/1046878106293679" }]
  },
  {
    id: 82,
    title: "PERSONE: Personalized Experience Recoding and Searching on Networked Environment",
    authors: "Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "ACM Workshop on Continuous Archival and Retrieval of Personal Experiences (CARPE), pp. 49–54",
    year: 2006,
    links: [{ label: "Paper", url: "https://doi.org/10.1145/1178657.1178668" }]
  },
  {
    id: 81,
    title: "Indoor Environment Modeling for Interactive Robot Security Application",
    authors: "Sang Woo Jo, Qonita M. Shahab, Yong-Moo Kwon, Sang Chul Ahn",
    venue: "SPIE Optics East 2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868095" }]
  },
  {
    id: 80,
    title: "Indoor Modeling for Interactive Robot Service",
    authors: "Sang Woo Jo, Qonita M. Shahab, Yong-Moo Kwon, Sang Chul Ahn",
    venue: "SICE-ICASE International Joint Conference 2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868096" }]
  },
  {
    id: 79,
    title: "UPnP SDK for Robot Development",
    authors: "Sang Chul Ahn, Jung-Woo Lee, Ki-Woong Lim, Heedong Ko, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "SICE-ICASE International Joint Conference 2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQeTNUNUR2VkU4Q1U/view?usp=sharing&resourcekey=0-qfAPukVdY-xGP2qqqtNAQw" }]
  },
  {
    id: 78,
    title: "Research on Virtual URS and Its Service on Mobile Phone",
    authors: "Sang Woo Jo, Qonita M. Shahab, Yong-Moo Kwon, Sang Chul Ahn, Hanseok Ko",
    venue: "The 3rd International Conference on Ubiquitous Robots and Ambient Intelligence (URAI 2006)",
    year: 2006,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868097" }]
  },
  {
    id: 77,
    title: "UPnP Robot Middleware for Ubiquitous Robot Control",
    authors: "Sang Chul Ahn, Ki-Woong Lim, Jung-Woo Lee, Heedong Ko, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "The 3rd International Conference on Ubiquitous Robots and Ambient Intelligence (URAI 2006)",
    year: 2006,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQa0pFbGh4Rnp6WE0/view?usp=sharing&resourcekey=0-qN4AVZBIaQG2jSVcozmAIw" }]
  },
  {
    id: 76,
    title: "Flying display : autonomous blimp with real-time visual tracking and image projection",
    authors: "Seung Yong Oh, Sung Chul Kang, Kyoung Joon Lee, Sang Chul Ahn",
    venue: "IROS2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQb29tWE9DWk9YMDA/view?usp=sharing&resourcekey=0-uuw597quBDmXYR8REN4Fbw" }]
  },
  {
    id: 75,
    title: "Requirements to UPnP for Robot Middleware",
    authors: "Sang Chul Ahn, Jung-Woo Lee, Ki-Woong Lim, Heedong Ko, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "IROS2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQaG5CS2FTOF8xWDQ/view?usp=sharing&resourcekey=0-pvNAfjNU6pCRFzF_q-i9lw" }]
  },
  {
    id: 74,
    title: "Using a Mobile Device as an Interface Tool for HMD-based AR Applications",
    authors: "Kyong Joon Lee, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "ACE 2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQYUhxU0RSdm03Zm8/view?usp=sharing&resourcekey=0-W9yKAEiWq4bv-K9uy1jNjA" }]
  },
  {
    id: 73,
    title: "Virtual Indoor Environment Modeling with Laser Scanner and Camera",
    authors: "Sang Woo Jo, Qonita M. Shahab, Yong-Moo Kwon, Sang Chul Ahn",
    venue: "NICOGRAPH 2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868127" }]
  },
  {
    id: 72,
    title: "Using Mobile Phone as an Interface for Augmented Reality",
    authors: "Kyong Joon Lee, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "NICOGRAPH 2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868124" }]
  },
  {
    id: 71,
    title: "Real-time 3D Video Avatar for Tangible Interface",
    authors: "Sang-Yup Lee, Ig-Jae Kim, Sang Chul Ahn, Myo-Taeg Lim, Hyoung-Gon Kim",
    venue: "TSI workshop 2006",
    year: 2006,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQSTVXR3kta1kxVVU/view?usp=sharing&resourcekey=0-eHd-GiwdfcnkPHCfoGkh_Q" }]
  },
  {
    id: 70,
    title: "Computer supported remote learning and gaming using Tele-Face Mouse system",
    authors: "Sang Chul Ahn, Jin Hak Kim, Hyoung-Gon Kim",
    venue: "Lecture Note in Computer Science(LNCS): Edutainment, v. 3942, pp. 688-691",
    year: 2006,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQZWdXQzM1UTRjYjA/view?usp=sharing&resourcekey=0-efGXnT8tCq-gAaJ1x1HBmA" }]
  },
  {
    id: 69,
    title: "UPnP 기반 로봇 미들웨어",
    authors: "안상철, 이정우, 김형곤",
    venue: "대한전자공학회논문지",
    year: 2006,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868142" }]
  },
  {
    id: 68,
    title: "Intelligent 3D Video Avatar for Immersive Telecommunication",
    authors: "Sang-Yup Lee, Ig-Jae Kim, Sang Chul Ahn, Myo-Taeg Lim, Hyoung-Gon Kim",
    venue: "Lecture Note in AI(LNAI): AI, v. 3809, pp. 726-735",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQcHFHRF90ZWJZWlE/view?usp=sharing&resourcekey=0-NRwxFwsZBfyUE73yuvF_hQ" }]
  },
  {
    id: 67,
    title: "Augmented Telexistence in Smart Space",
    authors: "Ig-Jae Kim, Sang-Yup Lee, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "ICAT2005",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQdU43WXVsWTJIbm8/view?usp=sharing&resourcekey=0-jLTJfVqDqY5DNBOgVYJOwg" }]
  },
  {
    id: 66,
    title: "Toward Immersive Telecommunication : 3D Video Avatar with Physical Interaction",
    authors: "Sang-Yup Lee, Ig-Jae Kim, Sang C. Ahn, Myo-Taeg Lim, Hyoung-Gon Kim",
    venue: "ICAT2005",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQOTA5X3ZVUTB1X2c/view?usp=sharing&resourcekey=0-_t64WF7P6oB3-ME_Fb0kKw" }]
  },
  {
    id: 65,
    title: "A Simple and Easy 2D/3D Map Modeling of indoor environment",
    authors: "Sang Woo Jo, Jin Woo Park, Yong-Moo Kwon, Sang Chul Ahn",
    venue: "The 2nd International Conference on Ubiquitous Robots and Ambient Intelligence (URAI 2005)",
    year: 2005,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868156" }]
  },
  {
    id: 64,
    title: "A Computer Supported Tele-collaboration System",
    authors: "Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "ITC-CSCC2005",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQOUFrMTJkSzd3RTA/view?usp=sharing&resourcekey=0-cC_DMGB9pyYEiQcUz2fv_Q" }]
  },
  {
    id: 63,
    title: "Network-based Tiled Display System for General Purpose",
    authors: "Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "ITC-CSCC2005",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQclplYk85eFMtTlk/view?usp=sharing&resourcekey=0-8necufqffnn-foAdPQeASw" }]
  },
  {
    id: 62,
    title: "Interactive Computer-aided Distance Learning System using the Face Mouse and shared Lecture-Space",
    authors: "Jin Hak Kim, Sang Chul Ahn, Hyoung-Gon Kim, Hyeran Byun",
    venue: "ITC-CSCC2005",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQMWlQbGYxZGdxN0E/view?usp=sharing&resourcekey=0-zMrFzM9X-VK_swhx9QG_Ow" }]
  },
  {
    id: 61,
    title: "Glasses Removal from Facial Image Using Recursive Error Compensation",
    authors: "Jeong-Seon Park, You Hwa Oh, Sang Chul Ahn, Seong-Whan Lee",
    venue: "IEEE Tr. on PAMI, v. 27, n. 5, pp. 805~811",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQNlNKc0FvMU02c2M/view?usp=sharing&resourcekey=0-SA_fBSiDrH8NotW_MxdVDw" }]
  },
  {
    id: 60,
    title: "UPnP Approach for Robot Middleware",
    authors: "Sang Chul Ahn, Jin Hak Kim, Kiwoong Lim, Heedong Ko, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "ICRA 2005",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQaExHSlNablIydVU/view?usp=sharing&resourcekey=0-3KcFaFN8od18Qep5z7STdg" }]
  },
  {
    id: 59,
    title: "3-Dimensional Voice Communication System for Two User Groups",
    authors: "Chun-geun Kim, Sang Chul Ahn, Ig-Jae Kim, Hyoung-Gon Kim",
    venue: "ICACT2005",
    year: 2005,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQb3Y3RklSRFFGZEk/view?usp=sharing&resourcekey=0-6o32qJUV98wLx7vwhqSPzQ" }]
  },
  {
    id: 58,
    title: "Modeling of Context-based Interaction Pattern",
    authors: "안상철, 강동훈, 고희동",
    venue: "ubiPCMM",
    year: 2005,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868164" }]
  },
  {
    id: 57,
    title: "Ubiquitous Smart Interaction Space",
    authors: "안상철, 강동훈, 김형곤, 고희동",
    venue: "ubiPCMM",
    year: 2005,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868165" }]
  },
  {
    id: 56,
    title: "유비쿼터스 시스템 환경에서의 상황인지와 오토노믹 컴퓨팅",
    authors: "강동훈, 안상철, 고희동, 권용무, 김형곤",
    venue: "한국정보과학회지",
    year: 2005,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868166" }]
  },
  {
    id: 55,
    title: "The Interaction Framework for Context Aware Systems",
    authors: "안상철, 강동훈, 고희동, 최윤철",
    venue: "HCI International",
    year: 2005,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868177" }]
  },
  {
    id: 54,
    title: "원격 회의를 위한 Face mouse 상호작용과 공유된 작업 공간에 대한 연구",
    authors: "김진학, 안상철, 김형곤, 변혜란",
    venue: "HCI",
    year: 2005,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868197" }]
  },
  {
    id: 53,
    title: "Teleconference system with a shared working space and Face mouse interaction",
    authors: "Jin Hak Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "Advances in Multimedia Information Processing (PCM), LNCS 3332",
    year: 2004,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQSk80c3pQdm9SZmM/view?usp=sharing&resourcekey=0-giDj-CVxZ_NXVlof-rAl2g" }]
  },
  {
    id: 52,
    title: "An Interactive Teleconference System for Small Groups",
    authors: "Sang Yoon Oh, Sang Chul Ahn, Hyoung-Gon Kim, Hanseok Ko",
    venue: "International Conference on Artificial Reality and Telexistence (ICAT)",
    year: 2004,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQTS1nYnJRemgtaGs/view?usp=sharing&resourcekey=0-Wso0grAY7idqHFn3_pphaA" }]
  },
  {
    id: 51,
    title: "Interactive Immersive Display",
    authors: "Sang Chul Ahn, Ig-Jae Kim, Hyoung-Gon Kim, Sungdo Ha",
    venue: "ICAT 2004 TSI workshop, pp.63-68",
    year: 2004,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQelRzOHQwYmk2MlU/view?usp=sharing&resourcekey=0-3jkvD8R73lO0ccr98hDqBQ" }]
  },
  {
    id: 50,
    title: "Large Display Interaction using Video Avatar and Hand Gesture Recognition",
    authors: "Sang Chul Ahn, Tae-Seong Lee, Ig-Jae Kim, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "Lecture Note in Computer Science(LNCS)3212: ICIAR",
    year: 2004,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQSmFLRUZGUkxfU28/view?usp=sharing&resourcekey=0-O93L3l6p8Z6sS6kQ4q2nGQ" }]
  },
  {
    id: 49,
    title: "Active segmentation for immersive live avatar",
    authors: "Sang-Yup Lee, Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "Electronics Letters, 40(20), pp. 1257–1258",
    year: 2004,
    links: [{ label: "Paper", url: "https://doi.org/10.1049/el:20045056" }]
  },
  {
    id: 48,
    title: "Real Time 3D Avatar for Interactive Mixed Reality",
    authors: "Sang-Yup Lee, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Myo-Taek Lim, Hyoung-Gon Kim",
    venue: "International Conference on Virtual Reality Continuum and its Applications in Industry 2004, pp. 75~80",
    year: 2004,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQcmRPbEJJNEI0cE0/view?usp=sharing&resourcekey=0-YSZoPcil1Ek-3-JtfSiLCA" }]
  },
  {
    id: 47,
    title: "Computer vision-based interactive presentation system",
    authors: "Sang Chul Ahn, Tae-Seong Lee, Ig-Jae Kim, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "ACCV 2004",
    year: 2004,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQbWlkbFlwRmQtTjA/view?usp=sharing&resourcekey=0-D5zJo7rFgkXaSWoorpB7-g" }]
  },
  {
    id: 46,
    title: "Active IR Stereo vision based tracking system for immersive displays",
    authors: "Jae Phil Koo, Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "ACCV 2004",
    year: 2004,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868240" }]
  },
  {
    id: 45,
    title: "몰입형 원격 통신을 위한 실시간 3차원 비디오 아바타 구현",
    authors: "이상엽, 안상철, 김형곤",
    venue: "Telecommunication Review",
    year: 2004,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868222" }]
  },
  {
    id: 44,
    title: "반복적인 PCA 재구성을 이용한 얼굴 영상에서의 안경 제거",
    authors: "오유화, 안상철, 김형곤, 김익재, 이성환",
    venue: "대한전자공학회논문지",
    year: 2004,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868232" }]
  },
  {
    id: 43,
    title: "Networked 3D Virtual Museum System",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "Journal of System Simulation, Vol. 15, No. 3, pp. 301-305",
    year: 2003,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868273" }]
  },
  {
    id: 42,
    title: "Glasses Removal from Facial Image using Recursive PCA Reconstruction",
    authors: "Jeong-Seon Park, You Hwa Oh, Sang Chul Ahn, Seong-Whan Lee",
    venue: "Lecture Note in Computer Science(LNCS): Audio- and Video-Based Biometric Person Authentication, Vol. 2688, pp. 369-376",
    year: 2003,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQYmwzV01kbDYtY3c/view?usp=sharing&resourcekey=0-OBJiTay_tW8NHp-LAJK1hQ" }]
  },
  {
    id: 41,
    title: "Gyeongju VR Theater: A Journey into the Breath of Sorabol",
    authors: "Changhoon Park, Sang Chul Ahn, Yong-Moo Kwon, Hyoung-Gon Kim, Heedong Ko, Taiyun Kim",
    venue: "Presence: Teleoperators and Virtual Environments, 12(2), pp. 125–139",
    year: 2003,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQLXRmZUJVRGdmUWc/view?usp=sharing&resourcekey=0-nIKpjRrHhdgBTtiudQVZyw" }]
  },
  {
    id: 40,
    title: "Real time 3D live avatar for virtual heritage guide",
    authors: "Sang-Yup Lee, Ig-Jae Kim, Sang Chul Ahn, Myo-Taek Lim, Hyoung-Gon Kim",
    venue: "VSMM 2003, pp. 67-75",
    year: 2003,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868254" }]
  },
  {
    id: 39,
    title: "VR experience design in tangible space: Heritage Alive!",
    authors: "Hyun-Jhin Lee, Jin Wook Kim, Heegab Ahn, Sang Chul Ahn, Ig-Jae Kim, Hyoung-Gon Kim, Heedong Ko",
    venue: "IEA 2003 Int'l Conf.",
    year: 2003,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQTDF3YTJZeU92RDg/view?usp=sharing&resourcekey=0-stKsQI-f79vUmWBwZYY58Q" }]
  },
  {
    id: 38,
    title: "VR theater 기반 VR contents의 사용성 평가 방법론에 대한 연구 : VR 답사 콘텐츠 heritage alive ! 의 사용성 평가를 중심으로",
    authors: "이현진, 안상철, 김진욱, 강동훈, 고희동",
    venue: "감성공학회",
    year: 2003,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868246" }]
  },
  {
    id: 37,
    title: "가상 환경에서 다수의 실시간 비디오 아바타 생성 기법",
    authors: "김익재, 이상엽, 안상철, 권용무, 김형곤",
    venue: "HCI 학회",
    year: 2003,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868274" }]
  },
  {
    id: 36,
    title: "실시간 워핑 하드웨어를 이용한 왜곡 스크린에서의 영상보정",
    authors: "오상윤, 정병일, 김익재, 안상철, 김형곤, 고한석",
    venue: "HCI 학회",
    year: 2003,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868277" }]
  },
  {
    id: 35,
    title: "VR 극장을 위한 관객인터랙션",
    authors: "안상철, 김익재, 김형곤",
    venue: "전자공학회논문지",
    year: 2003,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868283" }]
  },
  {
    id: 34,
    title: "Emerging virtual heritage technology",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "NICOGRAPH Int'l 2002, pp. 25-29",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868292" }]
  },
  {
    id: 33,
    title: "Research on 3D cyber museum system through trans-eurasia information network",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "Proceedings of IWAIT 2002, pp. 27-31",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868323" }]
  },
  {
    id: 32,
    title: "Toward a networked 3D virtual museum",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "Int'l Joint Conf. in GIFU: EVA-GIFU, pp. 15-3 ~ 15-7",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868289" }]
  },
  {
    id: 31,
    title: "3D cyber museum technology: 3D modeling, database, presentation & network",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "APAN 2002 Conf. in Phuket",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868320" }]
  },
  {
    id: 30,
    title: "DBMS-based virtual heritage system",
    authors: "Yong-Moo Kwon, Tae Sung Lee, Min-Jeong Lee, Jae-Kyung Seol, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "ECAI Conf. 2002, p. 20",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868305" }]
  },
  {
    id: 29,
    title: "The design and implementation of kyongju VR theatre",
    authors: "ChangHun Park, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Yong-Moo Kwon, HyoungGon Kim",
    venue: "Proceedings of the International Conference on Virtual Reality and its Application in Industry(VRAI 2002), pp. 393-399",
    year: 2002,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQZzZwcl9YQWJRRms/view?usp=sharing&resourcekey=0-EqNDBZFqCAHP7mp1YsIsGw" }]
  },
  {
    id: 28,
    title: "Stereo vision based 3D input device",
    authors: "Sang Min Yoon, Ig-Jae Kim, Sang Chul Ahn, H. Ko, HyoungGon Kim",
    venue: "IEEE Signal Processing Society-ICASSP 2002, pp. II-2129- II2132",
    year: 2002,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQaEY3NmdNcWM2MkU/view?usp=sharing&resourcekey=0-22smdrO5BcF5JH8_UKaCOQ" }]
  },
  {
    id: 27,
    title: "Building a 3D Virtual Museum",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "VSMM 2002, pp.291-299",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868290" }]
  },
  {
    id: 26,
    title: "Tangible Interface Technology",
    authors: "Munsang Kim, Dongseok Ryu, Minchul Park, Youngil Kim, Sang Chul Ahn",
    venue: "VSMM 2002, pp.993-1000",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868296" }]
  },
  {
    id: 25,
    title: "The Making of Kyongju VR Theatre",
    authors: "ChangHoon Park, Heedong Ko, Ig-Jae Kim, Sang Chul Ahn, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "IEEE Virtual Reality Conference 2002",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868314" }]
  },
  {
    id: 24,
    title: "Glasses Removal from Facial Images with Recursive PCA Reconstruction",
    authors: "You Hwa Oh, Sang Chul Ahn, Ig-Jae Kim, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "World Multiconference on Systemics, Cybernetics, and Informatics (SCI 2002), Vol. 3, pp. 117-121",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868303" }]
  },
  {
    id: 23,
    title: "스테레오 비전을 기반으로 한 3차원 입력장치",
    authors: "윤상민, 김익재, 안상철, 고한석, 김형곤",
    venue: "대한전자공학회 논문지",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868304" }]
  },
  {
    id: 22,
    title: "복잡한 배경에서 MAWUPC 알고리즘을 이용한 얼굴과 손의 추적",
    authors: "이상환, 안상철, 김형곤, 김재희",
    venue: "대한전자공학회 논문지",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868315" }]
  },
  {
    id: 21,
    title: "Stereo vision based 3D input device",
    authors: "윤상민, 김익재, 안상철, 고한석, 김형곤",
    venue: "HCI 학술대회",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868318" }]
  },
  {
    id: 20,
    title: "반복적인 PCA 재구성 방법을 이용한 얼굴 영상에서의 안경제거",
    authors: "오유화, 안상철, 김형곤",
    venue: "HCI 학술대회",
    year: 2002,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868319" }]
  },
  {
    id: 19,
    title: "Audience Interaction for Virtual Reality Theater and Its Implementation",
    authors: "Sang Chul Ahn, Ig-Jae Kim, Hyoung-Gon Kim, Yong-Moo Kwon, Heedong Ko",
    venue: "VRST 2001, pp.41-45",
    year: 2001,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQaWhkZXlVeUpTSHM/view?usp=sharing&resourcekey=0-fjviBElsKvmcfFyPLXqWlQ" }]
  },
  {
    id: 18,
    title: "3D Tracking of Multi-objects using Color and Stereo for HCI",
    authors: "Ig-Jae Kim, Shwan Lee, Sang Chul Ahn, Yong-Moo Kwon, Hyoung-Gon Kim",
    venue: "ICIP 2001, pp. 278-281",
    year: 2001,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQQW1rNUcxcGpNd1k/view?usp=sharing&resourcekey=0-3A9Bj-gzEWwee1zbKh6QhA" }]
  },
  {
    id: 17,
    title: "Virtual Heritage System: Modeling Database & Presentation",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang Chul Ahn, Heedong Ko, Hyoung-Gon Kim",
    venue: "VSMM 2001, pp. 137-146",
    year: 2001,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQbnItVGlBN2txc0E/view?usp=sharing&resourcekey=0-XCd8kO9kE5IAnQSu6r8HgQ" }]
  },
  {
    id: 16,
    title: "스테레오 카메라를 이용한 3차원 입력장치 움직임의 실시간 추출",
    authors: "윤상민, 김익재, 안상철, 김형곤, 고한석",
    venue: "신호처리학술대회 논문집",
    year: 2001,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868334" }]
  },
  {
    id: 15,
    title: "복잡한 배경영역에서 MAWUPC 알고리즘을 이용한 손영역의 추적",
    authors: "이상환, 안상철, 김형곤, 남시욱, 김재희",
    venue: "HCI 학술대회 논문집",
    year: 2001,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868351" }]
  },
  {
    id: 14,
    title: "Web-based 3D Media Information System",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang-Chul Ahn, Hyoung-Gon Kim",
    venue: "Proc. of the ACM International Symposium on Virtual Reality and Software Technology (VRST-2000), pp. 183-187",
    year: 2000,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQX3I3bDZfS19GazQ/view?usp=sharing&resourcekey=0-wCYc_blRbnwe32obtseH6A" }]
  },
  {
    id: 13,
    title: "3D Media Information System",
    authors: "Yong-Moo Kwon, Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "3D Image Conference 2000, pp. 47-50",
    year: 2000,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868366" }]
  },
  {
    id: 12,
    title: "Automatic FDP/FAP Generation from an Image Sequence",
    authors: "Jin-Woo Kim, Munjae Song, Ig-Jae Kim, Yong-Moo Kwon, Hyoung-Gon Kim, Sang Chul Ahn",
    venue: "ISCAS 2000, pp.I-40 - I-43, May.",
    year: 2000,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQVUROejhHN2xsVHc/view?usp=sharing&resourcekey=0-hx_Y51JO9n_kDifBx77lbA" }]
  },
  {
    id: 11,
    title: "HCI를 위한 컴퓨터비젼 기반 사람의 2차원 움직임 정보 추출",
    authors: "이상환, 안상철, 김익재, 김형곤, 김재희",
    venue: "한국감성과학회 추계학술대회",
    year: 2000,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868357" }]
  },
  {
    id: 10,
    title: "컴퓨터비젼을 이용한 사람의 2차원 움직임 정보 추출",
    authors: "이상환, 안상철, 김익재, 김형곤, 김재희",
    venue: "한국정보처리학회 추계학술발표논문집",
    year: 2000,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868362" }]
  },
  {
    id: 9,
    title: "MPEG-4 기반 3차원 얼굴 모델 애니메이션",
    authors: "김진우, 고한석, 김형곤, 권용무, 안상철",
    venue: "HCI 학술대회 논문집",
    year: 2000,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868380" }]
  },
  {
    id: 8,
    title: "실시간 LipSynch 구현을 위한 한국어 음운학적인 viseme 제안과 GMM 모델링 기반의 음소인식",
    authors: "주희열, 안상철, 김형곤, 고한석",
    venue: "HCI 학술대회 논문집",
    year: 2000,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868383" }]
  },
  {
    id: 7,
    title: "Development of image-based 3D modeling and authoring system",
    authors: "Yong-Moo Kwon, Munjae Song, Chang-Jun Song, Jin-Woo Kim, Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "3D Image Conference '99, pp. 207-212",
    year: 1999,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868399" }]
  },
  {
    id: 6,
    title: "Development of 3D contents authoring system",
    authors: "Yong-Moo Kwon, Munjae Song, Ig-Jae Kim, Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "Intern'l Workshop on 3D Imaging Media Technology, pp. 78-89",
    year: 1999,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868394" }]
  },
  {
    id: 5,
    title: "Automatic FDP (Facial Definition Parameters) Generation for a Video Conferencing System",
    authors: "Sang Chul Ahn, Hyoung-Gon Kim",
    venue: "Intern'l Workshop on SNHC and 3D Imaging (IWSNHC3DI'99), pp. 16-19",
    year: 1999,
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/0ByTHAQqynXvQRGlJWmY0Z0k2anM/view?usp=sharing&resourcekey=0-7XwR2V8Zz0y17I5yj1gOvg" }]
  },
  {
    id: 4,
    title: "Skin Region Extraction Using Moving Color Technique",
    authors: "H. G. Kim, N. H. Kim, Sang C. Ahn",
    venue: "IEEE International Workshop on Intelligent Signal Processing and Communication Systems (ISPACS '98), pp. 73-77",
    year: 1998,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868422" }]
  },
  {
    id: 3,
    title: "Multiresolution approach to depth extraction for arbitrary view synthesis",
    authors: "Y. M. Kwon, N. J. Park, M. J. Song, K. D. Lee, I. J. Kim, Sang C. Ahn, H. G. Kim",
    venue: "3D Image Conference '98, pp. 135-140",
    year: 1998,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868431" }]
  },
  {
    id: 2,
    title: "Depth extraction of moving object using TMS320C80 DSP",
    authors: "C. J. Song, H. S. Ko, I. J. Kim, Sang C. Ahn, Y. M. Kwon",
    venue: "International Technical Conf. on Circuits/Systems, Computers and Communications, pp. 285-288",
    year: 1998,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868428" }]
  },
  {
    id: 1,
    title: "Object Oriented Face Detection Using Range and Color Information",
    authors: "S. -H. Kim, N. -H. Kim, Sang C. Ahn, H. -G. Kim",
    venue: "Proc. of Int'l Conf. on Automatic Face and Gesture Recognition (FG'98), pp. 76-81",
    year: 1998,
    links: [{ label: "Paper", url: "https://cai.kist.re.kr/Publication/?bmode=view&idx=5868444" }]
  }
];
