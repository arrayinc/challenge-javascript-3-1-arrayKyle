// *** YOUR ANSWER BELOW ***
function bottlesSong(n){
  let str = "";
    while(n>0){
      let num = n-1;
 str += `${n} bottles of beer on the wall. ${n} bottles of beer. You take one down, pass it around. ${num} bottles of beer.`;
 n--;
  }
    return  str;
}
  bottlesSong(10);
