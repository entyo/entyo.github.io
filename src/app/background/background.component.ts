import { Component, ViewChild, ElementRef } from '@angular/core'
import * as THREE from 'three'
// https://github.com/makimenko/angular-three-examples/blob/master/src/app/scene/scene.component.ts#L3
import "./js/EnableThreeExamples"
import 'three/examples/js/postprocessing/EffectComposer'
import 'three/examples/js/postprocessing/ShaderPass'
import 'three/examples/js/postprocessing/RenderPass'
import 'three/examples/js/postprocessing/BloomPass'
import 'three/examples/js/shaders/CopyShader'
import 'three/examples/js/shaders/ConvolutionShader'

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  @ViewChild('rendererContainer') rendererContainer: ElementRef<HTMLDivElement>
  @ViewChild('origin') videoOrigin: ElementRef<HTMLVideoElement>

  private scene: THREE.Scene
  private camera: THREE.Camera
  private renderer: THREE.WebGLRenderer
  private vTexture: THREE.Texture
  private composer: THREE.EffectComposer

  constructor() { }

  // autoplay loop crossOrigin="anonymous" webkit-playsinline
  ngAfterViewInit() {
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement)
    this.videoOrigin.nativeElement.crossOrigin = 'anonymous'
    this.videoOrigin.nativeElement.loop = true;
    (async () => {
      await this.videoOrigin.nativeElement.play()
      this.vTexture = new THREE.Texture(this.videoOrigin.nativeElement)
      this.vTexture.minFilter = THREE.LinearFilter
      this.vTexture.magFilter = THREE.LinearFilter
      this.vTexture.format = THREE.RGBFormat

      // videoをplaneとしてsceneに追加
      const vw = this.videoOrigin.nativeElement.videoWidth
      const vh = this.videoOrigin.nativeElement.videoHeight
      const videoMaterial = new THREE.MeshBasicMaterial({
        map: this.vTexture
      })
      const planeGeometry = new THREE.PlaneGeometry(vw, vh, 1, 1)
      const plane = new THREE.Mesh(planeGeometry, videoMaterial)
      plane.position.z = 0
      this.scene.add(plane)

      this.camera = new THREE.OrthographicCamera(vw / -2, vw / 2, vh / 2, vh / -2, 1, 2000)
      this.camera.position.z = 500

      this.composer = new THREE.EffectComposer(this.renderer)
      this.composer.addPass(new THREE.RenderPass(this.scene, this.camera))

      this.composer.addPass(new THREE.BloomPass(1.3))

      const copyPass = new THREE.ShaderPass(THREE.CopyShader)
      copyPass.renderToScreen = true
      this.composer.addPass(copyPass)

      this.render()
    })()
  }


  render() {
    if (this.videoOrigin.nativeElement.readyState === this.videoOrigin.nativeElement.HAVE_ENOUGH_DATA) {
      if (this.vTexture) this.vTexture.needsUpdate = true
    }
    // loop
    requestAnimationFrame(this.render.bind(this))
    // this.renderer.render(this.scene, this.camera)
    this.composer.render();
  }

}
