
/**
 * 获取数组最后一项
 * @param {Array} array 
 */
function getArrayLastItem(array) {
    return array.slice(-1)[0]
}

/**
 * 获取数组从后往前几项，没传n默认返回最后一项
 * @param {Array} array 
 * @param {Number} n 
 */
function last(array, n) {
    if (n == null) return array.slice(-1)[0]
    return array.slice(Math.max(array.length - n, 0))
}

/**
 * 将数组中的false变为0
 * @param {Array} array 
 */
function transformArrayFalseItemToZero(array) {
    return Array.from(array, (n) => n || 0)
    // or
    // return array.map(n => n || 0)
}

/**
 * 数组扁平化
 * @param {Array} arr 
 * @example [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]
 */

function flatDeep(array) {
    return array.reduce((acc, val) => acc.concat(Array.isArray(val)? flatDeep(val) : val), [])
}
