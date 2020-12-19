export default {
  name: 'Project',
  data() {
    return {
      images: [],
      imageCount: 100
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
    }
  }
}