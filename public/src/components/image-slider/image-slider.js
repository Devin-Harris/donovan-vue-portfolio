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
      changingImage: false,
      sliderSpeed: 4000
    }
  },
  computed: {
    imageSrc() {
      return require(`../../assets/images/${this.imageBaseSrc}/${this.images[this.activeImageIndex]}`)
    }
  },
  mounted() {
    this.setImageInterval()
  },
  destroyed() {
    clearInterval(this.imageInterval)
  },
  methods: {
    setImageInterval() {
      this.imageInterval = setInterval(() => {
        this.loadNewImage()
      }, this.sliderSpeed)
    },
    getImageSrc(image) {
      return require(`../../assets/images/${this.imageBaseSrc}/${image}`)
    },
    loadNewImage() {
      this.activeImageIndex += 1
      if (this.activeImageIndex >= this.images.length) this.activeImageIndex = 0
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