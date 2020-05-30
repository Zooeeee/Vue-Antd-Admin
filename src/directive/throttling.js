const throttling = {
  inserted: function (el, binding) {
    const { callback, event, time } = binding.value
    el.callback = callback
    el.time = time
    el.event = event
    el.addEventListener(el.event, () => {
      const nowTime = new Date().getTime()
      if (!el.preTime || nowTime - el.preTime > el.time) {
        el.preTime = nowTime
        el.callback()
      }
    })
  },
  update: function (el, binding) {
    // console.log('update')
    const { callback, event, time } = binding.value
    el.callback = callback
    el.time = time
    el.event = event
  }
}

export default throttling
