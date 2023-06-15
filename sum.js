const nums = [2,5,5,11]
const nums2 = [2,7,11,15]
const target = 9
let result = 0

/* for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
        result = nums[i] + nums[j]
        if (result === 9) {
            console.log('numbers founded')
            console.log([nums.indexOf(nums[i]), nums.indexOf(nums[j])]) 
        }
    }
} */

const findIndex = (arr, target) => {
    // data or fucntions
    const arr2 = arr

    // logic
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr2.length; j++) {
            result = arr[i] + arr[j]

            if (result === target && i !== j) return [i,j]
        }
    }
}

console.log(findIndex(nums, 10))