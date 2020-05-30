const antiShake = {
  inserted: function (el, binding) {
    const { callback, event, time } = binding.value
    let timer
    el.callback = callback
    el.time = time
    el.event = event
    el.addEventListener(el.event, () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        el.callback()
      }, el.time)
    })
  },
  update: function (el, binding) {
    // console.log('update')
    const { callback, event, time } = binding.value
    el.callback = callback
    el.event = event
    el.time = time
  }
}

export default antiShake
