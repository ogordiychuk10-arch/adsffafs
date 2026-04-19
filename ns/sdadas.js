function squaers(number){
  return number**2
}
function calcpriceofcart(list){
  let total = 0
  for (price of list ){
    total+= price
  }
  return total 
  
}
function mostexp(list){
  let max = 0
  for(let price of list){
    if(price>max){
      max = price
    }
  }
  return max
}
function avg(list){
  const sum = calcpriceofcart(list)
  return sum/list.length
}
function median(list){
  const freq = []
  for(price of list){
    let found = false
    for(lst of freq){
      if(lst [0]== price){
        lst[1]++
        found = true
      }


    }
    if(!found){
      freq.push([price,1])
    }

  }
  let max_freq = 0
  let mediana = 0
  for (sub_list of freq){
    if(sub_list[1] > max_freq){
      mediana = sub_list[0]
      max_freq = sub_list[1]

    }
  }
  return mediana
}

console.log(median([20,4,10,15,15]))
