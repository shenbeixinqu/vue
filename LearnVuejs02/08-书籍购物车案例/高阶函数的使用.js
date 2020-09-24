const nums = [10, 20, 111, 222, 45, 56]

// filter函数的使用
let nums1 = nums.filter(function (n){
    return n < 100
})

console.log(nums1)

// map函数的使用
let num2 = nums1.map(function(n){
    return n * 2
})

console.log(num2) 

//reduce
// 对数组中的所有内容进行汇总
 
let total = num2.reduce(function(prevalue, n){
    return prevalue + n
},0)

console.log(total)