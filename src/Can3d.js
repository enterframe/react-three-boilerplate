import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

function Can3d() {

  let camera, scene, renderer;
  let geometry, material, mesh;

  const canvas = useRef(null);

  useEffect(() => {
    init();
    animate();
  }, [])


  const init = () => {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas.current.appendChild( renderer.domElement );
  }


  const animate = () => {
    requestAnimationFrame( animate );
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render( scene, camera );
  }

  return (
    <div className="Can3d">
      <div className="canvas" ref={canvas}/>
    </div>
  );
}

export default Can3d;
