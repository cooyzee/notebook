/**
 * Byte字节 = 8bit比特
 * 1KB = 1024B
 * 因为二进制 定为1024刚好是2的10次方 方便底层运算 不然转来转去很麻烦
 * KB Kilo Byte
 * GB Giga Byte
 * TB Trillion Byte
 * PB Peta Byte
 * EB Exa Byte
 * ZB Zetta Byte
 * YB Yotta Byte
 **/

// 写一个内存容量转换函数，匹配与之数值对应的单位
function formatSizeUnit(input) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  let unitIndex = 0
  while (input >= 1024 && unitIndex < units.length - 1) {
    input /= 1024
    unitIndex++
  }
  return parseFloat(input.toFixed(1)) + units[unitIndex]
}

// 这里我们利用parseFloat去掉了toFixed留下的占位0
// 也可以使用正则表达式来替换
// 但是在绝大多数情况下，parseFloat效率更高
function removeTrailingZeros(str) {
  // if (typeof str === 'number') str = str.toString()
  return str.replace(/\.?0+$/, '')
}