export default {
  name: 'Contact',
  methods: {
    openLink(link) {
      if (link === 'Instagram') window.open('https://www.instagram.com/donovan_render/?hl=en')
      else if (link === 'Youtube') window.open('https://www.youtube.com/channel/UCc-0PypcQVMUi3EL_zesGtg/videos')
      else if (link === 'Email') {
        const email = 'staabdp@mail.uc.edu'
        const subject = '// Contact Form Submission'
        window.open("mailto:" + email + "?subject=" + subject)
      }
    }
  }
}