import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const techGroupRef = useRef(null);

  useEffect(() => {
    // Prevent duplicate initialization
    if (rendererRef.current && rendererRef.current.domElement && rendererRef.current.domElement.parentElement) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      console.error('Canvas container not found!');
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      105,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 40;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      precision: 'highp',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ===== CREATE BACKGROUND PARTICLES =====
    const particleCount = 150;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200; // x
      positions[i + 1] = (Math.random() - 0.5) * 200; // y
      positions[i + 2] = (Math.random() - 0.5) * 100; // z
      
      velocities.push({
        x: (Math.random() - 0.5) * 0.1,
        y: (Math.random() - 0.5) * 0.1,
        z: (Math.random() - 0.5) * 0.05
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xA3C9A8,
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const points = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(points);

    // ===== CREATE TECH MODEL =====
    const techGroup = new THREE.Group();
    scene.add(techGroup);
    techGroupRef.current = techGroup;

    // Create outer rotating cube
    const squareGeometry = new THREE.BoxGeometry(20, 20, 20);
    const squareEdges = new THREE.EdgesGeometry(squareGeometry);
    const squareMaterial = new THREE.LineBasicMaterial({
      color: 0xA3C9A8,
      transparent: true,
      opacity: 0.5,
      linewidth: 2,
    });
    const squareFrame = new THREE.LineSegments(squareEdges, squareMaterial);
    scene.add(squareFrame); // Add directly to scene so it rotates independently

    // Create cube (inner cube, rotated)
    const cubeGeometry2 = new THREE.BoxGeometry(20, 20, 20);
    const cubeEdges2 = new THREE.EdgesGeometry(cubeGeometry2);
    const cubeMaterial2 = new THREE.LineBasicMaterial({
      color: 0xC7E8C5,
      transparent: true,
      opacity: 0.6,
      linewidth: 2,
    });
    const cube2 = new THREE.LineSegments(cubeEdges2, cubeMaterial2);
    cube2.rotation.set(Math.PI / 4, Math.PI / 4, 0); // Rotate cube
    techGroup.add(cube2);

    // ===== LIGHTING =====
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xA3C9A8, 1, 200);
    pointLight.position.set(0, 20, 20);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x8a2be2, 0.8, 200);
    pointLight2.position.set(-20, -10, 15);
    scene.add(pointLight2);

    // ===== ANIMATION LOOP =====
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Rotate outer square frame
      if (squareFrame) {
        squareFrame.rotation.y += 0.005;
        squareFrame.rotation.x += 0.003;
      }

      // Rotate tech model group
      if (techGroup) {
        techGroup.rotation.y += 0.001;
        techGroup.rotation.x = Math.sin(time * 0.2) * 0.1;
      }

      // Animate background particles
      const particlePositions = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Update positions
        particlePositions[i3] += velocities[i].x;
        particlePositions[i3 + 1] += velocities[i].y;
        particlePositions[i3 + 2] += velocities[i].z;
        
        // Wrap around boundaries
        if (Math.abs(particlePositions[i3]) > 100) {
          particlePositions[i3] = -particlePositions[i3];
        }
        if (Math.abs(particlePositions[i3 + 1]) > 100) {
          particlePositions[i3 + 1] = -particlePositions[i3 + 1];
        }
        if (Math.abs(particlePositions[i3 + 2]) > 50) {
          particlePositions[i3 + 2] = -particlePositions[i3 + 2];
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // ===== WINDOW RESIZE =====
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // ===== CLEANUP =====
    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      squareGeometry.dispose();
      squareEdges.dispose();
      squareMaterial.dispose();
      cubeGeometry2.dispose();
      cubeEdges2.dispose();
      cubeMaterial2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    />
  );
};

export default ThreeDBackground;
