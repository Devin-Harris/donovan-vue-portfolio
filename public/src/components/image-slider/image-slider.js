export default {
  name: 'ImageSlider',
  props: [
    'imageBaseSrc',
    'images'
  ],
  data() {
    return {
      activeImageIndex: 0,
      imageInterval: null,
      changingImage: false
    }
  },
  computed: {
    imageSrc() {
      return require(`../../assets/images/${this.imageBaseSrc}/${this.images[this.activeImageIndex]}`)
    }
  },
  created() {
    this.setImageInterval()
  },
  destroyed() {
    clearInterval(this.imageInterval)
  },
  methods: {
    setImageInterval() {
      this.loadNewImage()
      this.imageInterval = setInterval(() => {
        this.loadNewImage()
      }, 4000)
    },
    getImageSrc(image) {
      return require(`../../assets/images/${this.imageBaseSrc}/${image}`)
    },
    loadNewImage() {
      // setTimeout(() => {
      //   document.querySelector('.image-slider-container').style.opacity = 1
      // }, 150)
      this.activeImageIndex += 1
      if (this.activeImageIndex >= this.images.length) this.activeImageIndex = 0

      // setTimeout(() => {
      //   document.querySelector('.image-slider-container').style.opacity = 0
      // }, 3850)
    },
    prevImage() {
      clearInterval(this.imageInterval)
      this.activeImageIndex -= 1
      if (this.activeImageIndex < 0) this.activeImageIndex = (this.images.length - 1)
      this.setImageInterval()
    },
    nextImage() {
      clearInterval(this.imageInterval)
      this.activeImageIndex += 1
      if (this.activeImageIndex >= this.images.length) this.activeImageIndex = 0
      this.setImageInterval()
    }
  }
}