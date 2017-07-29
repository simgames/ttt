for(let i = 1; i <= 3; i++) {
  for(let j = 1; j <= 3; j++) {
    document.getElementById('r' + i + 'c' + j).onclick = function() {
      if(this.innerHTML == "")
      {
      this.innerHTML = 'X';
        computerTurn()
      }
    }
  }
}
function computerTurn()
{
var result = Math.floor(Math.random() * 9 + 1)
if(result == 1)
{
    if(document.getElementById('r' + 1 'c' + 1).innerHTML == "")
    {
box.innerHTML = "O";
    }
  }

}
