export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          name: 'Home',
          redirects: true,
          isActive: true,
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
      this.links.map(l => { l.subLinksOpen = false })
      this.deactiveAllLinks()
      this.links.map(l => {
        if (l.name === link.name) {
          l.isActive = true
          l.subLinksOpen = !l.subLinksOpen
        }
        return l
      })

      if (link.redirects) this.$router.push(link.name)
    }
  }
}