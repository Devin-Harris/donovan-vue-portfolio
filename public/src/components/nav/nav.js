export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          name: 'Home',
          redirects: true,
          isActive: false,
          subLinks: [],
          subLinksOpen: false
        },
        {
          name: 'Projects',
          redirects: false,
          isActive: false,
          subLinks: [
            {
              name: 'Design',
              redirects: true,
              isActive: false
            },
            {
              name: 'Photo',
              redirects: true,
              isActive: false
            },
            {
              name: 'Film',
              redirects: true,
              isActive: false
            }
          ],
          subLinksOpen: false
        },
        {
          name: 'Information',
          redirects: false,
          isActive: false,
          subLinks: [
            {
              name: 'Contact',
              redirects: true,
              isActive: false
            },
            {
              name: 'Store',
              redirects: true,
              isActive: false
            }
          ],
          subLinksOpen: false
        },
      ],
      isLinksOpen: true
    }
  },
  created() {
    const activeRoute = this.$route.name
    this.links.map(l => { if (l.name === activeRoute || (l.name === 'Home' && !activeRoute)) l.isActive = true })
    this.links.map(l => l.subLinks.map(sl => {
      if (sl.name === activeRoute) {
        sl.isActive = true
        l.subLinksOpen = true
      }
    }))
  },
  methods: {
    toggleLinks() {
      this.isLinksOpen = !this.isLinksOpen
    },
    deactiveAllLinks() {
      this.links.map(l => l.subLinks.map(sl => { sl.isActive = false }))
      this.links.map(l => { l.isActive = false })
    },
    subLinkClick(link) {
      this.deactiveAllLinks()
      this.links.map(l => l.subLinks.map(sl => {
        if (sl.name === link.name) {
          sl.isActive = true
        }
        return sl
      }))

      if (link.redirects) this.$router.push(link.name)
    },
    linkClick(link) {
      this.deactiveAllLinks()
      this.links.map(l => {
        if (l.name === link.name) {
          l.isActive = true
          l.subLinksOpen = !l.subLinksOpen
        } else {
          l.subLinksOpen = false
        }
        return l
      })

      if (link.redirects) this.$router.push(link.name)
    },
    mediaClick(media) {
      if (media === 'youtube') window.open('https://www.youtube.com/channel/UCc-0PypcQVMUi3EL_zesGtg/videos')
      else if (media === 'instagram') window.open('https://www.instagram.com/donovan_render/?hl=en')
    },
    getCurrentYear() {
      const date = new Date(Date.now())
      return date.getFullYear()
    }
  }
}