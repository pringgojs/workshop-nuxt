export default {
  methods: {
    replaceTagHtml(value) {
      const regex = /(<([^>]+)>)/gi
      return value.replace(regex, '')
    },
    limitString(value, limit) {
      limit = limit || 90
      return value.length > limit ? value.substring(0, limit) + ' ...' : value
    }
  }
}
