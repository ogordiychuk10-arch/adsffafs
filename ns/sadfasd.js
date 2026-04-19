const fields = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']]
const map = 'RDDRLD'
let row = 0;
let col = 0;

for(let letter of map){
    fields[row][col]='*'
    if( letter == 'R'){
        col++
    }
    if(letter == 'L')
    {
        col--
    }
    if (letter == "U"){
        row--
    }
    if(letter == "D"){
        row++
    }

}
fields[row][col]='X'
for (row of fields){
    console.log(row)
}