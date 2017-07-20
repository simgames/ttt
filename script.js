for(let i = 1; i <= 3; i++) {
  for(let j = 1; j <= 3; j++) {
    document.getElementById('r' + i + 'c' + j).onclick = function() {
      if(this.innerHTML = "")
      {
      this.innerHTML = 'X';
      }
      else
      {
      this.innerHTML = 'O';
      }
    }
  }
}
