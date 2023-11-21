function pali(str){
      let left = 0
      let right = str.length - 1
      while(left < right){
            if(str[left] !== str[right]){
                  return false
            }
            right--
            left++
      }
      return true
}


function countVowels(str){
      let vowels = "aeiouAEIOU"
      let count = 0
      for(let char of str){
            if(vowels.includes(char)){
                  count++
            }
      }
      return count
}

console.log(countVowels("AeioU"));