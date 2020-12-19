import ImageSlider from '@/components/image-slider'

export default {
  name: "Home",
  components: {
    ImageSlider
  },
  data() {
    return {
      imageBaseSrc: 'HomeScreenPhotos',
      images: [
        'V0.jpg',
        'V1.jpg',
        'V2.jpg',
        'V3.jpg',
        'V4.jpg',
        'V5.jpg',
        'V6.jpg',
        'V7.jpg',
        'V8.png',
        'V9.jpg',
        'V10.jpg'
      ]
    }
  }
}