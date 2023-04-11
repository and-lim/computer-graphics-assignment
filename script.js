import * as THREE from './three.js-master/build/three.module.js'
import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js'


            
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
const control = new OrbitControls(camera,renderer.domElement);
document.body.appendChild( renderer.domElement );

camera.position.set(30,20,30);
camera.lookAt(0,0,0);




const pointLight = new THREE.PointLight(0xffffff,0.9,1500,0.7);
pointLight.position.set(0,20,0);
pointLight.shadow.camera.far = 20;
pointLight.castShadow = true;
scene.add(pointLight);


const plane = new THREE.Mesh(
    new THREE.BoxGeometry(100, 100, 1),
    new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: new THREE.TextureLoader().load('./assets/rumput.jpg')})
);
plane.position.set(0,0,0);
plane.rotation.set(Math.PI/2, 0, Math.PI/-2);
plane.receiveShadow = true;

scene.add(plane);

const lightTop = new THREE.Mesh(
    new THREE.BoxGeometry(10, 10, 10),
    new THREE.MeshBasicMaterial({side: THREE.DoubleSide, map: new THREE.TextureLoader().load('./assets/glow_stone.png')})
);
lightTop.position.set(0,20,0);
lightTop.rotation.set(Math.PI/2, 0, Math.PI/-2);
scene.add(lightTop);

const lightBottom = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 20),
    new THREE.MeshBasicMaterial({side: THREE.DoubleSide, map: new THREE.TextureLoader().load('./assets/wooden.jpg')})
);
lightBottom.position.set(0,10,0);
lightBottom.rotation.set(Math.PI/2, 0, Math.PI/-2);
scene.add(lightBottom);

const ball = new THREE.Mesh(
    new THREE.SphereGeometry( 5, 16, 16 ),
    new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: new THREE.TextureLoader().load('./assets/ball2.jpg')})
);
ball.position.set(20,5,-20);
ball.rotation.set(Math.PI/2, 0, Math.PI/-2);
ball.receiveShadow = true;
ball.castShadow = true;
scene.add(ball);

//mouse drag







const animate = function () {
	requestAnimationFrame( animate );

    //controls.update();
	renderer.render( scene, camera );
};

animate();