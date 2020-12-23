export default {
  name: 'design-project',
  props: ['project'],
  data() {
    return {
      selectedImage: null
    }
  },
  computed: {
    getImage() {
      if (this.selectedImage)
        return this.selectedImage
      else
        return null
    }
  },
  methods: {
    openImage(imagePath) {
      document.querySelector('html').style.overflowY = 'hidden'
      this.selectedImage = imagePath
      console.log(this.selectedImage)
      setTimeout(() => {
        document.addEventListener('click', this.clickOutsideCheck)
      }, 10)
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