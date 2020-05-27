/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter (num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// 将大数字转化为单位形式
/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter (num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

// 将字符串第一个字符大写
/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// 去除空格 type 1-所有空格 2-前后空格 3-前空格 4-后空格

// 去除空格 type 1-所有空格 2-前后空格 3-前空格 4-后空格
export function trim (value, trim) {
  switch (trim) {
    case 1:
      return value.replace(/\s+/g, '')
    case 2:
      return value.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return value.replace(/(^\s*)/g, '')
    case 4:
      return value.replace(/(\s*$)/g, '')
    default:
      return value
  }
}

// 字母大小写切换
/* type
 1:首字母大写
 2：首页母小写
 3：大小写转换
 4：全部大写
 5：全部小写
 * */
export function changeCase (str, type) {
  function ToggleCase (str) {
    var itemText = ''
    str.split('').forEach(
      function (item) {
        if (/^([a-z]+)/.test(item)) {
          itemText += item.toUpperCase()
        } else if (/^([A-Z]+)/.test(item)) {
          itemText += item.toLowerCase()
        } else {
          itemText += item
        }
      })
    return itemText
  }
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
      })
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
      })
    case 3:
      return ToggleCase(str)
    case 4:
      return str.toUpperCase()
    case 5:
      return str.toLowerCase()
    default:
      return str
  }
}

// 字符串循环复制,count->次数
export function repeatStr (str, count) {
  var text = ''
  for (var i = 0; i < count; i++) {
    text += str
  }
  return text
}

// 字符串替换
export function replaceAll (str, AFindText, ARepText) {
  const raRegExp = new RegExp(AFindText, 'g')
  return str.replace(raRegExp, ARepText)
}

// 现金额大写转换函数
// ecDo.upDigit(168752632)
// result："人民币壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
// ecDo.upDigit(1682)
// result："人民币壹仟陆佰捌拾贰元整"
// ecDo.upDigit(-1693)
// result："欠人民币壹仟陆佰玖拾叁元整"
export function upDigit (n) {
  var fraction = ['角', '分', '厘']
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  var head = n < 0 ? '欠人民币' : '人民币'
  n = Math.abs(n)
  var s = ''
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    var p = ''
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
    // s = p + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
}
/* 对手机号和身份证号进行保护 */
export function plusXing (str, frontLen, endLen) {
  var len = str.length - frontLen - endLen
  var xing = ''
  for (var i = 0; i < len; i++) {
    xing += '*'
  }
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
}
