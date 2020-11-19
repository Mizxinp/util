/**
 * 
 * @param {Array} array 数组去重
 */
function unique1(array) {
    return [...new Set(array)]
}
function unique2(array) {
    return array.filter((item, index) => array.indexOf(item) === index)
}
function unique3(array) {
    return array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
}
const data = [1, 2, 4, 0, 2, 1, 3, 3, 5, '']
console.log('1', unique1(data))
console.log('2', unique2(data))
console.log('3', unique3(data))





/**
 * 
 * @param {Array} array 操作的数组
 * @param {String} key 需要去除重复项的key
 * 
 */
// 去除数组中指定重复项
const originData = [
    {
        id: 1,
        name: 'a',
        age: 1,
    },
    {
        id: 2,
        name: 'b',
        age: 1,
    },
    {
        id: 3,
        name: 'b',
        age: 3,
    },
    {
        id: 3,
        name: 'b',
        age: 3,
    },
    {
        id: 1,
        name: 'a',
        age: 1,
    },
]
function unique4(array, key) {
    if (!Array.isArray(array)) return []
    const result = array.reduce((unique, item) => {
        const existItem = unique.find(ele => ele[key] === item[key])
        return existItem ? unique : [...unique, item]
    }, [])
    return result
}

console.log('4', unique4(originData, 'id'))
