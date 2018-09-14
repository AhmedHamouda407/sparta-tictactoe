document.addEventListener('DOMContentLoaded', () => {

  ///OBJECT
  const tic = new Object;

  ///FOCUSES ON TD
  tic.squares = document.getElementsByTagName ('td');
  console.log(tic.squares[0]);
  tic.playerTurn = true;


  for (let i = 0; i <tic.squares.length; i++) {
    tic.squares[i].addEventListener ('click', (e)=>{
      switch (tic.playerTurn) {
        case true:
          tic.squares[i].setAttribute('class', 'X');
          tic.squares[i].innerHTML = 'X';
          tic.playerTurn = false;
          break;
        case false:
          tic.squares[i].setAttribute('class', 'O');
          tic.squares[i].innerHTML = 'O';
          tic.playerTurn = true;
          break;
        default:

      }


    
    });

  }




});///end of event
