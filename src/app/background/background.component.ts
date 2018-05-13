import { Component, ViewChild, ElementRef } from '@angular/core'
import * as THREE from 'three'
// https://github.com/makimenko/angular-three-examples/blob/master/src/app/scene/scene.component.ts#L3
import "./js/EnableThreeExamples"

import { LuminosityHighPassShader } from './shader/LuminosityHighPassShader'

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  @ViewChild('rendererContainer') rendererContainer: ElementRef<HTMLDivElement>

  private scene: THREE.Scene
  private camera: THREE.Camera
  private renderer: THREE.WebGLRenderer
  private torus: THREE.Mesh

  constructor() { }

  // autoplay loop crossOrigin="anonymous" webkit-playsinline
  ngAfterViewInit() {
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor(0xeeeeee, 1.0)

    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.set(0, 0, 30)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    const torusGeometry = new THREE.TorusGeometry(5, 2, 32, 64)
    torusGeometry.rotateX(-Math.PI / 4)

    const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    this.torus = new THREE.Mesh(torusGeometry, torusMaterial);

    this.scene.add(this.torus)

    this.animate()
  }

  render() {
    const timer = 0.05 * Date.now()
    const rad = timer * Math.PI / 180
    // 角度に応じてカメラの位置を設定
    this.camera.position.x = 20 * Math.sin(rad)
    this.camera.position.z = -20 * Math.cos(rad)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderer.render(this.scene, this.camera)
  }

  animate() {
    // Do some stuff to object
    requestAnimationFrame(this.animate.bind(this));
    this.render()
  }

}
