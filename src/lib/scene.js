import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


//Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer;
let controls;

let light;
let geometry;
let material;
let mesh;

camera.position.z = 50;

// First Sphere
geometry = new THREE.SphereGeometry(10);
material = new THREE.MeshStandardMaterial({color: 0xFF3252});
mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Base lighting
light = new THREE.AmbientLight(0xFFFFFF, 0.3);
scene.add(light);

// Pointlight
light = new THREE.PointLight(0xFFFFFF, 4)
light.position.set(20, 20, 20);
scene.add(light);

// Space background
let spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Grid helper
let gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

// "Gameloop"
const animate = () => {
  requestAnimationFrame(animate);

  // Animation here



  controls.update();
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const threeInit = (test) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: test });
  // Controlls
  controls = new OrbitControls(camera, renderer.domElement);
  resize();
  animate();
}