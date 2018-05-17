import { Component, ViewChild, ElementRef } from '@angular/core'
import * as THREE from 'three'

import "./js/EnableThreeExamples"
import 'three/examples/js/postprocessing/EffectComposer'
import 'three/examples/js/postprocessing/ShaderPass'
import 'three/examples/js/postprocessing/RenderPass'
import 'three/examples/js/shaders/CopyShader'

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
  private composer: THREE.EffectComposer
  private isFuck: boolean

  constructor() {
    this.isFuck = /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  // autoplay loop crossOrigin="anonymous" webkit-playsinline
  ngAfterViewInit() {
    this.scene = new THREE.Scene()

    const p = this.isFuck ? {} : { antialias: true }
    this.renderer = new THREE.WebGLRenderer(p)
    this.renderer.setSize(window.outerWidth, window.outerHeight)
    this.renderer.setClearColor(0xEEEEEE, 1.0)

    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement)

    const light1 = new THREE.PointLight(0xFFFFFF, 2, 1000)
    light1.position.set(0, 0, 100)
    light1.castShadow = true
    this.scene.add( light1 )

    const light2 = new THREE.PointLight(0xFFFFFF, 2, 1000)
    light2.position.set(0, 0, -100)
    light2.castShadow = true
    this.scene.add( light2 )

    this.camera = new THREE.PerspectiveCamera(45, window.outerWidth / window.outerHeight, 0.1, 1000)
    this.camera.position.set(0, 0, 30)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    const torusGeometry = new THREE.TorusGeometry(5, 2, 32, 64)
    torusGeometry.rotateX(-Math.PI / 8)

    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xDC8538 })
    this.torus = new THREE.Mesh(torusGeometry, torusMaterial)
    this.torus.castShadow = true
    this.torus.receiveShadow = true

    this.scene.add(this.torus)

    this.composer = new THREE.EffectComposer(this.renderer)
    this.composer.addPass(new THREE.RenderPass(this.scene, this.camera))
    
    this.composer.addPass(new THREE.ShaderPass(LuminosityHighPassShader))

    if (!this.isFuck) {
      const copyPass = new THREE.ShaderPass(THREE.CopyShader)
      copyPass.renderToScreen = true
      this.composer.addPass(copyPass)
    }

    this.animate()
  }

  render() {
    const timer = 0.03 * Date.now()
    const rad = timer * Math.PI / 180
    this.camera.position.x = 20 * Math.sin(rad)
    this.camera.position.z = 20 * Math.sin(rad)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    if (this.isFuck) {
      this.renderer.render(this.scene, this.camera)
    } else {
      this.composer.render()
    }
  }

  animate() {
    // Do some stuff to object
    requestAnimationFrame(this.animate.bind(this))
    this.render()
  }

}
