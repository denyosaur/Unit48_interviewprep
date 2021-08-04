// add whatever parameters you deem necessary
// function countPairs(arr, target) {
//     arr.sort((a, b) => a - b) //sort array
//     let left = 0//left - left index
//     let right = arr.length - 1//right - right index
//     let count = 0//count - counts numer of pairs

//     while (left < right) {//while left is less than right
//         let sum = arr[left] + arr[right]
//         //if arr[left] + arr[right] === target, count++
//         if (sum === target) {
//             count++
//             left++
//             right--
//         } else if (sum < target) {
//             left++
//         } else {
//             right--
//         }
//         //else if arr[left] + arr[right] < target, left++
//         //else right--
//     }

//     return count//return count
// }

function countPairs(arr, target) {
    let set = new Set(arr)//create a new Set(arr)
    let count = 0//count - variable to count pairs

    for (let num of arr) {//for each num of arr
        set.delete(num)//delete num from set
        if (set.has(target - num)) count++//if set has target - num, count++
    }
    return count //return count
}

module.exports = { countPairs }