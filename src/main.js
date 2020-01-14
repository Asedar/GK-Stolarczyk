import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2( 0xcccccc, 0.00175 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var controls = new OrbitControls( camera, renderer.domElement );

controls.autoRotate = true;
controls.autoRotateSpeed = 5;
controls.enableDamping = true;
controls.dampingFactor = 0.1;

const loader = new THREE.TextureLoader();

//podłoga

var floorMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    flatShading: THREE.SmoothShading,
    map: loader.load('img/ice.jpeg')
})
var floor = new THREE.Mesh(
    new THREE.PlaneGeometry(4000, 4000),
    floorMaterial
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -175;
floor.receiveShadow = true;
scene.add(floor);

//czajniki i jajka

var iloscCzajnikow = 10000;
var iloscJajek = 5000;
var czajnikObraz = new THREE.ParticleBasicMaterial({ map: loader.load('img/czajnik.png'), transparent: true, size: 5 });
//var jajoObraz = new THREE.ParticleBasicMaterial({ map: loader.load('img/jajo.png'), transparent: true, size: 5 });


var czajniki = new THREE.Geometry;
//var jajka = new THREE.Geometry;

for (var i = 0; i < iloscCzajnikow; i++) {
    var czajnik = new THREE.Vector3(Math.random() * 1500 - 750, Math.random() * 1500 - 750, Math.random() * 1500 - 750);

    czajniki.vertices.push(czajnik);
}
// for (var i = 0; i < iloscJajek; i++) {
//     var jajko = new THREE.Vector3(Math.random() * 1500 - 750, Math.random() * 1500 - 750, Math.random() * 1500 - 750);

//     jajka.vertices.push(jajko);
// }

//var renderJajek = new THREE.ParticleSystem(jajka, jajoObraz);
var renderCzajnikow = new THREE.ParticleSystem(czajniki, czajnikObraz);
//scene.add(renderJajek);
scene.add(renderCzajnikow);

//bałwan podstawa

var geometry = new THREE.SphereGeometry(50, 35, 35, 0, Math.PI * 2, 0, Math.PI * 2);
const material = new THREE.MeshBasicMaterial({
    map: loader.load('img/snow2.jpg'),
});
var kula = new THREE.Mesh( geometry, material );
kula.translateY(-150);
scene.add( kula );

var geometry2 = new THREE.SphereGeometry(40, 35, 35, 0, Math.PI * 2, 0, Math.PI * 2);
var kula2 = new THREE.Mesh( geometry2, material );
kula2.rotation.y = Math.PI / 3;
kula2.translateY(-75);
scene.add( kula2 );

var geometry3 = new THREE.SphereGeometry(30, 35, 35, 0, Math.PI * 2, 0, Math.PI * 2);
var kula3 = new THREE.Mesh( geometry3, material );
kula3.rotation.y = Math.PI / 2;
kula3.translateY(-20);
scene.add( kula3 );

//bałwan nos
var coneGeometry = new THREE.ConeGeometry( 2, 25, 40 );
var coneMaterial = new THREE.MeshBasicMaterial({
    map: loader.load('img/carrot.jpg'),
});
var cone = new THREE.Mesh( coneGeometry, coneMaterial );
cone.translateY(-15);
cone.translateZ(40);
cone.rotation.x = Math.PI / 2;
scene.add(cone);

//bałwan oczy i usta
var eyeGeometry = new THREE.SphereGeometry(3, 35, 35, 0, Math.PI * 2, 0, Math.PI * 2);
var eyeMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
});
var eye1 = new THREE.Mesh( eyeGeometry, eyeMaterial );
eye1.translateY(-7);
eye1.translateZ(23);
eye1.translateX(-10);
scene.add( eye1 );

var eye2 = new THREE.Mesh( eyeGeometry, eyeMaterial );
eye2.translateY(-7);
eye2.translateZ(23);
eye2.translateX(10);
scene.add( eye2 );

var eyeGeometry = new THREE.SphereGeometry(2, 35, 35, 0, Math.PI * 2, 0, Math.PI * 2);
var eyeMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
});
var mouth = new THREE.Mesh( eyeGeometry, eyeMaterial );
mouth.translateY(-23);
mouth.translateZ(27);
mouth.translateX(-12);
scene.add( mouth );

var mouth = new THREE.Mesh( eyeGeometry, eyeMaterial );
mouth.translateY(-27);
mouth.translateZ(28);
mouth.translateX(-6);
scene.add( mouth );

var mouth = new THREE.Mesh( eyeGeometry, eyeMaterial );
mouth.translateY(-29);
mouth.translateZ(28);
mouth.translateX(0);
scene.add( mouth );

var mouth = new THREE.Mesh( eyeGeometry, eyeMaterial );
mouth.translateY(-27);
mouth.translateZ(28);
mouth.translateX(6);
scene.add( mouth );

var mouth = new THREE.Mesh( eyeGeometry, eyeMaterial );
mouth.translateY(-23);
mouth.translateZ(27);
mouth.translateX(12);
scene.add( mouth );

//guziki
var button = new THREE.Mesh( eyeGeometry, eyeMaterial );
button.translateY(-55);
button.translateZ(35);
button.translateX(0);
scene.add( button );

var button = new THREE.Mesh( eyeGeometry, eyeMaterial );
button.translateY(-65);
button.translateZ(38);
button.translateX(0);
scene.add( button );

var button = new THREE.Mesh( eyeGeometry, eyeMaterial );
button.translateY(-75);
button.translateZ(40);
button.translateX(0);
scene.add( button );

//kapelusz
var hatgeometry = new THREE.CylinderGeometry( 13, 13, 27, 20 );
var hatmaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
var hat = new THREE.Mesh( hatgeometry, hatmaterial );
hat.translateY(20);
scene.add( hat );

var hatgeometry = new THREE.CylinderGeometry( 20, 20, 1, 20 );
var hatmaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
var hat = new THREE.Mesh( hatgeometry, hatmaterial );
hat.translateY(8);
scene.add( hat );
camera.position.set(0, 100, 300);
controls.update();

function spadająceCzajniki() {
    var czajnikiLista = czajniki.vertices;
    for (var i = 0; i < czajnikiLista.length; i++) {
        var czajnikItem = czajnikiLista[i];
        if (czajnikItem.y < -500) {
            czajnikItem.y = Math.random() * 1500;
        }
        var speed = Math.random() * 8;
        czajnikItem.y = czajnikItem.y - speed;
        if (czajnikItem.x < -1000) {
            czajnikItem.x = Math.random() * 1500;
        }
        czajnikItem.x = czajnikItem.x - speed/2;
    }
    
    czajniki.verticesNeedUpdate = true;

}

function animate() {
    requestAnimationFrame( animate );
    spadająceCzajniki();
    controls.update();
    render();
}

function render() {
    renderer.render( scene, camera );
}

animate();