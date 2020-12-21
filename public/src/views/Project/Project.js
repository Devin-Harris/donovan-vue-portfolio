export default {
  name: 'Project',
  data() {
    return {
      images: [],
      imageCount: 100,
      selectedImage: null
    }
  },
  created() {
    for (let i = 0; i <= this.imageCount; i++) {
      this.images.push('V' + i + '.jpg')
    }
  },
  methods: {
    getImageSrc(imageName) {
      return require(`../../assets/images/Projects/${this.$route.name}/${imageName}`)
    },
    openImage(imageName) {
      document.querySelector('html').style.overflowY = 'hidden'
      this.selectedImage = imageName
      setTimeout(() => {
        document.addEventListener('click', this.clickOutsideCheck)
      }, 10)
    },
    clickOutsideCheck(e) {
      const elms = Array.from(e.path)
      const isImageOrAction = elms.some(elm => {
        if (elm && elm.classList && elm.classList.length > 0) {
          return Array.from(elm.classList).some(c => (c === 'fas' || c === 'project-container__photo-modal'))
        }
      })

      if (isImageOrAction) return

      this.closeOverlay()
    },
    prevImageOverlay() {
      const i = this.images.findIndex(image => image === this.selectedImage) - 1
      this.selectedImage = (i < 0) ? this.images[this.images.length - 1] : this.images[i]
    },
    nextImageOverlay() {
      const i = this.images.findIndex(image => image === this.selectedImage) + 1
      this.selectedImage = (i >= this.images.length) ? this.images[0] : this.images[i]
    },
    closeOverlay() {
      document.removeEventListener('click', this.clickOutsideCheck)
      document.querySelector('html').style.overflowY = 'overlay'
      this.selectedImage = null
    }
  }
}