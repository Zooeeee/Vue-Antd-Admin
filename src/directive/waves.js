import './waves.css'

const waves = {
  bind: function (el, binding) {
    // console.log('bind')
    el.classList.add('waves-effect')
    const modifiers = Object.keys(binding.modifiers)[0]; const duration = +binding.expression || 200
    !!modifiers && el.classList.add(`waves-${modifiers}`)
    function convertStyle (obj) {
      let style = ''
      for (const a in obj) {
        // foo.hasOwnProperty("bar")
        //  Object.prototype.hasOwnProperty.call(foo, "bar")。
        // if (obj.hasOwnProperty(a)) {
        if (Object.prototype.hasOwnProperty.call(obj, a)) {
          style += `${a}:${obj[a]};`
        }
      }
      return style
    }

    el.addEventListener('mousedown', function (e) {
      const ripple = document.createElement('div')
      ripple.classList.add('waves-ripple')
      el.appendChild(ripple)

      const styles = {
        left: `${e.layerX}px`,
        top: `${e.layerY}px`,
        opacity: 1,
        transform: `scale(${(el.clientWidth / 100) * 10})`,
        'transition-duration': `${duration}ms`,
        'transition-timing-function': 'ease-in-out'
      }
      ripple.setAttribute('style', convertStyle(styles))
      setTimeout(function () {
        ripple.setAttribute('style', convertStyle({
          opacity: 0,
          transform: styles.transform,
          left: styles.left,
          top: styles.top
        }))
        setTimeout(function () {
          ripple && el.removeChild(ripple)
        }, duration * 3)
      }, duration)
    })
  }
}

export default waves
