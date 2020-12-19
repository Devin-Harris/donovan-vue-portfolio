export default {
  name: 'Project',
  data() {
    return {
      images: [],
      imageCount: 100,
      loaded: false
    }
  },
  created() {
    for (let i = 0; i <= this.imageCount; i++) {
      this.images.push('V' + i + '.jpg')
    }
    this.loaded = true
  },
  methods: {
    getImageSrc(imageName) {
      return require(`../../assets/images/Projects/${this.$route.name}/${imageName}`)
    }
  }
}