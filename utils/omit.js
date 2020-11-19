/**
 * 删除对象的指定属性
 * @param {Object} obj 对象
 * @param {Array} uselessKey 需要删除的属性
 */
const omit1 = (obj, uselessKey) => {
    const result = Object.keys(obj).reduce((acc, key) => {
        return uselessKey.includes(key) ? acc : { ...acc, [key]: obj[key] }
    }, {})
    return result
}
const omit2 = (obj, uselessKey) => {
    let result = { ...obj }
    uselessKey.forEach(key => delete result[key])
    return result
}

const omit3 = (obj, uselessKey) => {
    const result = JSON.parse(JSON.stringify(obj, (key, value) => {
        if (uselessKey.includes(key)) return null
        return value
    }))
    return result
}



const data = [
    {
        id: 1,
        nam: 3254
    },
    {
        id: 2,
        nam: 3324
    },
    {
        id: 3,
        nam: 3224
    }
]
const result1 = data.map(obj => omit1(obj, ['id']))
const result2 = data.map(obj => omit2(obj, ['id']))
const result3 = data.map(obj => omit3(obj, ['id']))

console.log(result1)
console.log(result2)
console.log(result3)