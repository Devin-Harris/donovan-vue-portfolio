const imageToBlob = require('image-to-blob'),
  DOMURL = window.URL || window.webkitURL || window

export default {
  name: 'design-project',
  props: ['project'],
  data() {
    return {
      selectedImage: null,
      modularWallImages: [
        'ModularWallV1.jpg',
        'ModularWallV2.jpg',
        'ModularWallV10.jpg',
        'ModularWallV9.jpg',
        'ModularWallV8.jpg',
        'ModularWallV3.jpg',
        'ModularWallV4.jpg',
        'ModularWallV7.jpg',
        'ModularWallV6.jpg',
        'ModularWallV.jpg',
        'ModularWall5.jpg'
      ],
      pavilionImages: [
        'Bridge.jpg',
        'Deck V1.jpg',
        'Deck V2.jpg',
        'Diagram V1.jpg',
        'Diagram V2.jpg',
        'Fin V1.jpg',
        'Fin V2.jpg',
        'Final Model V1.jpg',
        'Final Model V2.jpg',
        'Final Model V3.jpg',
        'Final Model V4.jpg',
        'Final Model V5.jpg',
        'Final Model V6.jpg',
        'Plinth.jpg',
        'Portal.jpg',
        'Set V1.jpg',
        'Set V2.jpg',
        'V1.jpg',
        'V2.jpg',
        'V3.jpg',
        'V4.jpg'
      ]
    }
  },
  methods: {
    openImage(imagePath) {
      document.querySelector('html').style.overflowY = 'hidden'
      this.selectedImage = imagePath

      setTimeout(() => {
        document.addEventListener('click', this.clickOutsideCheck)
      }, 10)
    },
    getImageSrc(imageName) {
      let pathFolder = this.project
      if (this.project === 'Modular Wall') pathFolder = 'ModularWall'
      if (this.project === '[M] Pavilion') pathFolder = 'Pavilion'

      return require(`@/assets/images/Projects/Design/${pathFolder}/${imageName}`)
    },
    clickOutsideCheck(e) {
      const elms = Array.from(e.path)
      const isImageOrAction = elms.some(elm => {
        if (elm && elm.classList && elm.classList.length > 0) {
          return Array.from(elm.classList).some(c => (c === 'fas' || c === 'project-container__design-modal'))
        }
      })

      if (isImageOrAction) return

      this.closeOverlay()
    },
    closeOverlay() {
      document.removeEventListener('click', this.clickOutsideCheck)
      document.querySelector('html').style.overflowY = 'overlay'
      this.selectedImage = null
    }
  }
}