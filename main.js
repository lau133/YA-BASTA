import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VRButton } from 'three/addons/webxr/VRButton.js'


let texturesReady = false;

const manager2 = new THREE.LoadingManager(() => {
    console.log("✔ Todas las texturas cargaron correctamente");
    texturesReady = true;
});


// Función para cargar texturas con manager
function loadTex(path) {
    const tex = new THREE.TextureLoader(manager2).load(path);
    tex.encoding = THREE.sRGBEncoding;
    tex.needsUpdate = true;
    return tex;
}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );




const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.xr.enabled = true;
			renderer.xr.setReferenceSpaceType( 'local' );
document.body.appendChild( VRButton.createButton( renderer ) );

const controls = new OrbitControls( camera, renderer.domElement );
				controls.target.set( 10, 0, 0 );
				controls.update();



                const loader = new THREE.CubeTextureLoader(manager2);
loader.setPath( 'img/' );

const textureCube = loader.load( [
	'px.png', 'nx.png',
	'py.png', 'ny.png',
	'pz.png', 'nz.png'
] );

const material14 = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );

scene.background=textureCube

const light = new THREE.PointLight( 0xffffff, 1, 20 );
light.position.set( 6, 4, 7 );
scene.add( light );
light.castShadow = true; // default false
scene.add( light );

const light3 = new THREE.PointLight( 0xffffff, 1, 20 );
light3.position.set( 28, -0, 23 );
scene.add( light3 );


const light2 = new THREE.AmbientLight( 0xffffff, 0.6 ); // soft white light
scene.add( light2 );

const light4 = new THREE.PointLight( 0xffffff, 0.7, 20 );
light4.position.set( 28, -0, -10 );
scene.add( light4 );

const light5 = new THREE.PointLight( 0xF2B1F1, 0.5, 15 );
light5.position.set( 15, 5.5, -6 );
scene.add( light5 );

const light6 = new THREE.PointLight( 0xF2B1F1, 0.5, 15 );
light6.position.set( 15, 5.5, 11 );
scene.add( light6 );

const light7 = new THREE.PointLight( 0xF2B1F1, 1, 15 );
light7.position.set( 0, 5.5, 18 );
scene.add( light7 );

const light8 = new THREE.PointLight( 0xffffff,  1, 20 );
light8.position.set( 15, 4, -38 );
scene.add( light8 );

const light9 = new THREE.PointLight( 0xF2B1F1, 1, 15 );
light9.position.set( 25, 5.5, -0 );
scene.add( light9 );

const light10 = new THREE.PointLight( 0xF2B1F1, 1, 15 );
light10.position.set( 25, 5.5, 10 );
scene.add( light10 );

const light11 = new THREE.PointLight( 0xF2B1F1,  1, 20 );
light11.position.set( 15, 4, -25 );
scene.add( light11 );


function addLight(color, intensity, distance, x, y, z) {
    const light = new THREE.PointLight(color, intensity, distance);
    light.position.set(x, y, z);
    scene.add(light);
}

// Todas las posiciones que tenías
const lightPositions = [
    [5, 4, -36],
    [5, 4, -28],
    [5, 4, -24],
    [5, 2, -24],
    [5, 0, -24],
    [5, 4, -20],
    [5, 2, -20],
    [5, 0, -30],
    [5, 4, -30],
    [5, 4, -38],
    [5, 0, -38],
    [5,-2, -38],
    [5, 4, -42],
    [5, 4, -47],
    [5, 2, -47],
    [5, 0, -45],

    [25, 4, -36],
    [25, 4, -28],
    [25, 4, -24],
    [25, 2, -24],
    [25, 0, -24],
    [25, 4, -20],
    [25, 2, -20],
    [25, 0, -30],
    [25, 4, -30],
    [25, 4, -38],
    [25, 0, -38],
    [25,-2, -38],
    [25, 4, -42],
    [25, 4, -47],
    [25, 2, -47],
    [25, 0, -45],

];

// Crear todas las luces
lightPositions.forEach(pos => {
    addLight(0xF2B1F1, 1, 4, pos[0], pos[1], pos[2]);
});




    //manager fbx
    const manager = new THREE.LoadingManager();
const loaderFbx = new FBXLoader( manager );
  

//Pared de la iz
const geometry2 = new THREE.BoxGeometry( 0.1, 13, 40 ); 
const material2 = new THREE.MeshPhongMaterial(); 
const cube2 = new THREE.Mesh( geometry2, material2 ); 
scene.add( cube2 );
cube2.position.z= 5.7
cube2.position.x= -4.7

//Pared de la iz rosa
const geometry5 = new THREE.BoxGeometry( 0.1, 10, 38 ); 
const material5 = new THREE.MeshPhongMaterial(); 
const cube5 = new THREE.Mesh( geometry5, material5 ); 
scene.add( cube5 );
cube5.position.z= 5.85
cube5.position.x= -4.5

//Pared de la iz cajones
const geometry6 = new THREE.BoxGeometry( 0.1, 3, 38 ); 
const material6 = new THREE.MeshPhongMaterial(); 
const cube6 = new THREE.Mesh( geometry6, material6 ); 
scene.add( cube6 );
cube6.position.z= 5.85
cube6.position.x= -4.3
cube6.position.y= -4.3

//Pared de la iz2
const geometry10 = new THREE.BoxGeometry( 0.1, 13, 40 ); 
const material10 = new THREE.MeshPhongMaterial(); 
const cube9 = new THREE.Mesh( geometry10, material2 ); 
scene.add( cube9 );
cube9.position.z= 5.7
cube9.position.x= 35

//Pared de la iz rosa2
const geometry11 = new THREE.BoxGeometry( 0.1, 10, 38 ); 
const material11 = new THREE.MeshPhongMaterial(); 
const cube10 = new THREE.Mesh( geometry11, material5 ); 
scene.add( cube10 );
cube10.position.z= 5.85
cube10.position.x= 34.9

 //Pared del fondo
const geometry = new THREE.BoxGeometry( 40, 13, 0.1 ); 
const material = new THREE.MeshPhongMaterial({color: 0xffffff}); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );
cube.position.z= 25.8
cube.position.x= 15

//Pared de la iz cajones2
const geometry12 = new THREE.BoxGeometry( 0.1, 3, 38 ); 
const material12 = new THREE.MeshPhongMaterial(); 
const cube11 = new THREE.Mesh( geometry12, material6 ); 
scene.add( cube11 );
cube11.position.z= 5.85
cube11.position.x= 34.8
cube11.position.y= -4.3

 //Pared del fondo rosa
const geometry7 = new THREE.BoxGeometry( 37, 10, 0.1 ); 
const material7 = new THREE.MeshPhongMaterial({color: 0xFFD6E8}); 
const cube7 = new THREE.Mesh( geometry7, material7 ); 
scene.add( cube7 );
cube7.position.z= 25.7
cube7.position.x= 15

 //Pared del fondo cajones
const geometry8 = new THREE.BoxGeometry( 37, 3, 0.1 ); 
const material8 = new THREE.MeshPhongMaterial({color: 0xffffff}); 
const cube8 = new THREE.Mesh( geometry8, material6 ); 
scene.add( cube8 );
cube8.position.z= 25.6
cube8.position.x= 15
cube8.position.y= -4.3

//Piso
const geometry3 = new THREE.BoxGeometry( 40, 0.1, 40 ); 
const material3 = new THREE.MeshPhongMaterial( {color: 0xffffff} ); 
const cube3 = new THREE.Mesh( geometry3, material3 ); 
scene.add( cube3 );
cube3.position.y= -6
cube3.position.x= 15
cube3.position.z= 6

//techo
const geometry4 = new THREE.BoxGeometry( 40, 0.1, 40 ); 
const material4 = new THREE.MeshPhongMaterial( {color: 0xffffff} ); 
const cube4 = new THREE.Mesh( geometry4, material4 ); 
scene.add( cube4 );
cube4.position.y= 6
cube4.position.x= 15
cube4.position.z= 6

// alfombra
const geometry9 = new THREE.CylinderGeometry( 7, 7, 0.2, 32 ); 
const material9 = new THREE.MeshPhongMaterial(  ); 
const cylinder = new THREE.Mesh( geometry9, material9 ); 
scene.add( cylinder );

const geometry13 = new THREE.CylinderGeometry( 7, 7, 0.2, 32 ); 
const material13 = new THREE.MeshPhongMaterial( {color: 0x781A64} ); 
const cylinder2 = new THREE.Mesh( geometry9, material13 );

const geometry15 = new THREE.CylinderGeometry( 7, 7, 0.2, 32 ); 
const material15 = new THREE.MeshPhongMaterial( { envMap:textureCube, reflectivity:0.2, shininess:0.5} ); 
const cylinder5 = new THREE.Mesh( geometry5, material15 );



cylinder.position.x = 20
cylinder.position.z = 10
cylinder.position.y = -5.9

//Pared del fondo rosa
const geometry16 = new THREE.BoxGeometry( 10, 10, 0.1 ); 
const material16 = new THREE.MeshPhongMaterial({color: 0xffffff}); 
const cube12 = new THREE.Mesh( geometry16, material16 ); 
scene.add( cube12 );
cube12.position.z= -13.7
cube12.position.x= 1.5

//pared blanca fondo2
const geometry17 = new THREE.BoxGeometry( 13, 13, 0.1 ); 
const material17 = new THREE.MeshPhongMaterial({color: 0xD11FAB}); 
const cube13 = new THREE.Mesh( geometry17, material17 ); 
scene.add( cube13 );
cube13.position.z= -13.8
cube13.position.x= 1.5

//Pared del fondo rosa
const geometry18 = new THREE.BoxGeometry( 10, 10, 0.1 ); 
const material18 = new THREE.MeshPhongMaterial({color: 0xffffff}); 
const cube14 = new THREE.Mesh( geometry18, material18 ); 
scene.add( cube14 );
cube14.position.z= -13.7
cube14.position.x= 29.5

//pared blanca fondo2
const geometry19 = new THREE.BoxGeometry( 13, 13, 0.1 ); 
const material19 = new THREE.MeshPhongMaterial({color: 0xD11FAB}); 
const cube15 = new THREE.Mesh( geometry19, material19 ); 
scene.add( cube15 );
cube15.position.z= -13.8
cube15.position.x= 30

//Pared de la iz2
const geometry20 = new THREE.BoxGeometry( 0.1, 13, 40 ); 
const material20 = new THREE.MeshPhongMaterial(); 
const cube16 = new THREE.Mesh( geometry20, material2 ); 
scene.add( cube16 );
cube16.position.z= -33
cube16.position.x= 35

//Pared de la iz2
const geometry21 = new THREE.BoxGeometry( 0.1, 13, 40 ); 
const material21 = new THREE.MeshPhongMaterial(); 
const cube17 = new THREE.Mesh( geometry21, material2 ); 
scene.add( cube17 );
cube17.position.z= -33
cube17.position.x= -4.7

//techo2
const geometry22 = new THREE.BoxGeometry( 40, 0.1, 40 ); 
const material22 = new THREE.MeshPhongMaterial( {color: 0xffffff} ); 
const cube18 = new THREE.Mesh( geometry4, material4 ); 
scene.add( cube18 );
cube18.position.y= 6
cube18.position.x= 15
cube18.position.z= -33

//pared blanca fondo3
const geometry23 = new THREE.BoxGeometry( 40, 13, 0.1 ); 
const material23 = new THREE.MeshPhongMaterial(); 
const cube19 = new THREE.Mesh( geometry23, material23 ); 
scene.add( cube19 );
cube19.position.z= -53
cube19.position.x= 15

//Piso
const geometry24 = new THREE.BoxGeometry( 40, 0.1, 40 ); 
const material24 = new THREE.MeshPhongMaterial( {color: 0xffffff} ); 
const cube20 = new THREE.Mesh( geometry24, material3 ); 
scene.add( cube20 );
cube20.position.y= -6
cube20.position.x= 15
cube20.position.z= -34

//Pisoalfombra rosao
const geometry25 = new THREE.BoxGeometry( 10, 0.1, 40 ); 
const material25 = new THREE.MeshPhongMaterial( {} ); 
const cube21 = new THREE.Mesh( geometry25, material25 ); 
scene.add( cube21 );
cube21.position.y= -5.5
cube21.position.x= 15
cube21.position.z= -34

//Texturas

//pared 
const loader1 = new THREE.TextureLoader()
loader1.load('texturas/3182477.jpg', (texture)=>{
    material5.map = texture
    
    
})

//cajones
const loader2 = new THREE.TextureLoader()
loader2.load('texturas/Captura de pantalla 2025-09-05 151602.png', (texture)=>{
    material6.map = texture
    
    
})

//piso
const loader3 = new THREE.TextureLoader()
loader3.load('texturas/X101401_220x150cm.webp', (texture)=>{
    material3.map = texture 
    
    
})

//alfombra
const loader4 = new THREE.TextureLoader()
loader4.load('texturas/fondo-texturizado-textil-en-relieve-rosa-pastel.jpg', (texture)=>{
    material9.map = texture
    
    
})

//planta
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('texturas/Leaf0.jpeg');
const normalMap  = textureLoader.load('texturas/Soil.jpeg');
const jarroMap  = textureLoader.load('texturas/internal_ground_ao_texture.jpeg');

//Alfomra2
//piso
const loader5 = new THREE.TextureLoader(manager2)
loader5.load('texturas/Recurso 1.png', (texture)=>{
    material25.map = texture 
});


//piso
const loader6 = new THREE.TextureLoader(manager2)
loader6.load('texturas/Imagen de WhatsApp 2025-11-15 a las 14.54.19_b6d0c3e0.jpg', (texture)=>{
    material23.map = texture 
});


//kirby
const textureLoader2 = new THREE.TextureLoader();
const texture2 = textureLoader.load('texturas/bratz_cybertruck.png');




//MODELOS

//candelabro
loaderFbx.load("modelos/barbie candelabro.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.03
    object.scale.z=0.04
    object.position.x= 6
    object.position.y= 6
    object.position.z= 7

    
    
    scene.add(object)
})

//piano
loaderFbx.load("modelos/barbie piano.fbx", function(object){
    object.scale.x=0.038
    object.scale.y=0.038
    object.scale.z=0.038
    object.position.x= 5.3
    object.position.y= -6
    object.position.z= 20
object.rotation.y = Math.PI/2;
    
    
    scene.add(object)
})

//sofa
loaderFbx.load("modelos/barbie sofa.fbx", function(object){
    object.scale.x=0.06
    object.scale.y=0.06
    object.scale.z=0.06
    object.position.x= 5.3
    object.position.y= -6
    object.position.z= 4
//object.rotation.y = Math.PI/2;
    
    
    scene.add(object)
})

//planta
loaderFbx.load("modelos/Plant1.fbx", function(object){
    object.scale.x=0.034
    object.scale.y=0.034
    object.scale.z=0.034
    object.position.x= 0
    object.position.y= -6
    object.position.z= 15
object.rotation.y = Math.PI/2;
object.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhongMaterial({
        jarroMap: jarroMap,

        map: texture,
        normalMap: normalMap,
        

      });
      child.material.needsUpdate = true;
    }
  });
    
    
    scene.add(object)
})


//mesa
loaderFbx.load("modelos/barbie mesa.fbx", function(object){
    object.scale.x=0.5
    object.scale.y=0.5
    object.scale.z=0.5
    object.position.x= 10
    object.position.y= -6
    object.position.z= 6
//object.rotation.y = Math.PI/2;
    
    
    scene.add(object)
})

//cuadro1
loaderFbx.load("modelos/barbie cuadro1.fbx", function(object){
    object.scale.x=0.3
    object.scale.y=0.3
    object.scale.z=0.3
    object.position.x= 13
    object.position.y= 1
    object.position.z= 23
object.rotation.y = Math.PI;
    
    
    scene.add(object)
})



//cuadro2
loaderFbx.load("modelos/barbie cuadro2.fbx", function(object){
    object.scale.x=0.3
    object.scale.y=0.3
    object.scale.z=0.3
    object.position.x= -2.5
    object.position.y= 1
    object.position.z= 6
object.rotation.y = Math.PI/2;
    
    
    scene.add(object)
})

//lampara
loaderFbx.load("modelos/lampara grande barbie.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.04
    object.scale.z=0.04
    object.position.x= 28
    object.position.y= -5.7
    object.position.z= 23
//object.rotation.y = Math.PI/2;
    
    
    scene.add(object)
})

//libros
loaderFbx.load("modelos/barbie libros.fbx", function(object){
    object.scale.x=0.05
    object.scale.y=0.05
    object.scale.z=0.05
    object.position.x= 31
    object.position.y= -5.7
    object.position.z= 5
object.rotation.y = Math.PI*1.5;
    
    
    scene.add(object)
})

//libros
loaderFbx.load("modelos/barbie closet.fbx", function(object){
    object.scale.x=4.5
    object.scale.y=4.5
    object.scale.z=4.5
    object.position.x= 55
    object.position.y= -20
    object.position.z= 90
    object.rotation.y = Math.PI;

    
    
    scene.add(object)
})

//lampara
loaderFbx.load("modelos/lampara grande barbie.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.04
    object.scale.z=0.04
    object.position.x= 28
    object.position.y= -5.7
    object.position.z= -10
//object.rotation.y = Math.PI/2;
    
    
    scene.add(object)
})

//tv 
loaderFbx.load("modelos/barbie tv.fbx", function(object){
    object.scale.x=6.5
    object.scale.y=6.5
    object.scale.z=6.5
    object.position.x= 135
    object.position.y= -6
    object.position.z= 78
object.rotation.y = -Math.PI/2;
    
    
    scene.add(object)
})

//silla
loaderFbx.load("modelos/barbie silla.fbx", function(object){
    object.scale.x=0.25
    object.scale.y=0.25
    object.scale.z=0.25
    object.position.x= 15
    object.position.y= -6
    object.position.z= -3
object.rotation.y = Math.PI*7/4;
    
    
    scene.add(object)
})

//lucesitas
loaderFbx.load("modelos/LightFixtureRecessed.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.03
    object.scale.z=0.04
    object.position.x= 15
    object.position.y= 5.8
    object.position.z= 11

    
    
    scene.add(object)
})

//lucesitas
loaderFbx.load("modelos/LightFixtureRecessed.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.03
    object.scale.z=0.04
    object.position.x= 15
    object.position.y= 5.8
    object.position.z= -6

    
    
    scene.add(object)
})

//lucesitas
loaderFbx.load("modelos/LightFixtureRecessed.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.03
    object.scale.z=0.04
    object.position.x= 0
    object.position.y= 5.8
    object.position.z= 18

    
    
    scene.add(object)
})

//tv mesa
loaderFbx.load("modelos/tvstand.fbx", function(object){
    object.scale.x=0.07
    object.scale.y=0.07
    object.scale.z=0.07
    object.position.x= 34
    object.position.y= -6
    object.position.z= 9
    object.traverse(function(child){
        if (child.isMesh){
            child.material=material13;
        }
    })
//object.rotation.y = Math.PI/2;
    
    
    scene.add(object)
})
//silla
loaderFbx.load("modelos/barbie puff.fbx", function(object){
    object.scale.x=0.25
    object.scale.y=0.25
    object.scale.z=0.25
    object.position.x= 20
    object.position.y= -6
    object.position.z= 5
//object.rotation.y = Math.PI*7/4;
    
    
    scene.add(object)
})

//espejo
loaderFbx.load("modelos/barbie espejo.fbx", function(object){
    object.scale.x=0.3
    object.scale.y=0.3
    object.scale.z=0.3
    object.position.x= 23
    object.position.y= 1
    object.position.z= 25
object.rotation.y = Math.PI;
    object.traverse(function(child){
        if (child.isMesh){
            child.material=material14;
        }
    })
    
    scene.add(object)
})

//Cortinas

loaderFbx.load("modelos/barbue cortinas.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.04
    object.scale.z=0.04
    object.position.x= 18
    object.position.y= -4.5
    object.position.z= -14
object.rotation.y = Math.PI;
    
    
    scene.add(object)
})


//armario1

loaderFbx.load("modelos/aarmario Barbie.fbx", function(object){
    object.scale.x=4
    object.scale.y=4
    object.scale.z=4
    object.position.x= 55
    object.position.y= -100
    object.position.z= -44

    
    scene.add(object)
})


loaderFbx.load("modelos/aarmario Barbie.fbx", function(object){
    object.scale.x=4
    object.scale.y=4
    object.scale.z=4
    object.position.x= -25
    object.position.y= -100
    object.position.z= -23
object.rotation.y = Math.PI;
    
    scene.add(object)
})

//candelabro
loaderFbx.load("modelos/barbie candelabro.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.02
    object.scale.z=0.04
    object.position.x= 15
    object.position.y= 6
    object.position.z= -40

    
    
    scene.add(object)
})

//kirby
loaderFbx.load("modelos/kirbylol.fbx", function(object){
    object.scale.x=8
    object.scale.y=8
    object.scale.z=8
    object.position.x= 39
    object.position.y= -6
    object.position.z= -7.5

    
    
    scene.add(object)
})


//kirby
loaderFbx.load("modelos/cyberbratz.fbx", function(object){
    object.scale.x=0.01
    object.scale.y=0.01
    object.scale.z=0.01
    object.position.x= 26
    object.position.y= 0.3
    object.position.z= -31.3

    object.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhongMaterial({
        

        map: texture2,
        
        

      });
      child.material.needsUpdate = true;
    }
  });
    

    
    
    scene.add(object)
})

//kirby
loaderFbx.load("modelos/Amethyst Barbie Sword.fbx", function(object){
    object.scale.x=0.0008
    object.scale.y=0.0008
    object.scale.z=0.0008
    object.position.x= 5
    object.position.y= -2
    object.position.z= -16
object.rotation.x = -Math.PI/3;
    
    
    scene.add(object)
})

//kirby
loaderFbx.load("modelos/piupiu.fbx", function(object){
    object.scale.x=0.2
    object.scale.y=0.2
    object.scale.z=0.2
    object.position.x= 16
    object.position.y= -3.5
    object.position.z= 0
object.rotation.y = -Math.PI;
object.rotation.z = Math.PI/2;
    
    
    scene.add(object)
})


//kirby
loaderFbx.load("modelos/amongus.fbx", function(object){
    object.scale.x=0.8
    object.scale.y=0.8
    object.scale.z=0.8
    object.position.x= -2
    object.position.y= -6
    object.position.z= -8

    
    scene.add(object)
})


//candelabro
loaderFbx.load("modelos/barbie candelabro.fbx", function(object){
    object.scale.x=0.04
    object.scale.y=0.02
    object.scale.z=0.04
    object.position.x= 15
    object.position.y= 6
    object.position.z= -25

    
    
    scene.add(object)
})


function animate() {

    if (!texturesReady) return;
    renderer.render( scene, camera );

}
camera.position.z = 15
camera.position.x = 18
camera.lookAt(-20, 0, -7); 
