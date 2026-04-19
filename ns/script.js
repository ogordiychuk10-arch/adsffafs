const fields = [['_','_','_'],['_','_','_'],['_','_','_']]
let player = 'X'
let move = 0
while(move<9){
  let win = false
  for( let i = 0; i <3 ; i++){
    let rowx = 0
    let rowy = 0
    let colx = 0 
    let coly = 0
    for(let j = 0; j < 3 ; j ++){

    
      if(fields[i][j] == 'X'){
        rowx++
      }
      if(fields[j][i] == 'X'){
        colx++
      }
          if(fields[i][j] == '0'){
        rowy++
      }
      if(fields[j][i] == '0'){
        coly++
      }
    }
    if (colx == 3 || rowx == 3){
      console.log('Х переміг ')
      win = true
    }
    if (coly == 3 || rowy == 3){
      console.log('0 переміг ')
      win = true
    }

  }
  if (win){
    break
  }

  let field_str = ''
  for(row of fields){
    for(el of row){
      field_str += el
      field_str += ' '
    }
    field_str += '\n'

  }
  alert(field_str)
  y = parseInt( prompt('введіть y координату'))-1
  x = parseInt( prompt('введіть x координату'))-1
  if(fields[y][x]!='_'){
    alert(`Неможливий хід`)
    continue
  }
  fields[y][x]= player

  if(player == 'X'){
    player = '0'
  }
  else{
    player = 'X'
  }
}
