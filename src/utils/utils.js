/**
 * slice string by gap number
 * {param : str | string, gap | number}
 * str = '6228480402564890018' gap = default
 * callback   ["6228", "4804", "0256", "4890", "018"]
 */
export const serialize = (str, gap = 4) => {
    if(Object.prototype.toString.call(str) === '[object String]' && Object.prototype.toString.call(gap) === '[object Number]'){
        const arr = []
        let index = 0
        return function self() {
            arr.push(str.slice(index, index + gap))
            index +=gap
            if(str.slice(index, index + gap) !=''){
                self()
            }
            return arr
        }
    }
}

/**
 * chunk array
 * {params : array | array, process | function, context | 执行环节的上下文 }
 * eg:
 * array = [12,123,1234,453,436,23,23,5,4123,45,346,5634,2234,345,342]
 * process = (item) => { console.log(item)}
 */
export const chunk = (array, process, context) => {
    const delay = () => {
        const item = array.shift()
        process.call(context, item)
        if(array.length > 0){
            setTimeout(delay, 100)
        }
    }
    setTimeout(delay, 100)
}


/*
* return random string
* eg str = 'ABCDE'
* */

export const randomLetter = (digit = 1) => {
    const temp = [];
    let str = '';
    for(let i = 0; i< digit; i++){
        temp.push(Math.floor(Math.random()*6 + 10).toString(16).toLocaleUpperCase())
    }
    str = temp.join('')
    return str
}

/**
 * input array
 * filter repeated ele
 * return array
 */

export const repeatedEle = (array) => {
    const temp = [];
    array.map((item,index)=> {
       if(!temp.includes(item)){
           temp.push(item)
       }
    })
    console.log('temp',temp)
    return temp
}


/*
* Array order
* */
export const arrowOrder = (array) => {
    let  _array = []
    if(Object.prototype.toString.call(array) === '[object Array]'){
        _array = array.sort((a,b)=> {
            return a - b
        })
    }
    return _array
}

