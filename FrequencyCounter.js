//O(n)
// useful for comparing bunch of pieces of data.

//for testing
const arrT1 = [1,1,4,5,3]
const arrT2 = [4,1,1,5,3]

const compareArr = (arr1,arr2)=>{
  if(arrT1.length !== arr2.length ) {return false;}
  const freqCounter1={}
  const freqCounter2={}
  arr1.map((item)=>{
    freqCounter1[item] = (freqCounter1[item] || 0 ) +1
  })
  arr2.map((item)=>{
    freqCounter2[item] = (freqCounter2[item] || 0) + 1
  })
  for(let key in freqCounter1){
    if(!(key in freqCounter1)){return false}
    if(freqCounter1[key]!==freqCounter2[key]){
      return false
    }
  }

  return true
}

console.log(compareArr(arrT1,arrT2)) // true