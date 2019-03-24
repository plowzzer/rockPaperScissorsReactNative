const checkWinner = (playerChoice) => {
  const computerRandom = Math.floor(Math.random()*3)
  //Expecting numbers between 0-2
  switch (computerRandom) {
    case 0:
      computerChoice = 'r'
      break;
    case 1:
      computerChoice = 'p'
      break;
    case 2:
      computerChoice = 's'
      break;
  }

  switch (playerChoice+computerChoice){
    case 'rr':
      //rock rock = drow
    break;
    case 'rp':
      //rock paper = lose
    break;
    case 'rs':
      //rock scissors = win
    break;
    case 'pr':
      //paper rock = win
    break;
    case 'pp':
      //paper paper = drow
    break;
    case 'ps':
      //paper scissors = lose
    break;
    case 'sr':
      //scissors rock = lose
    break;
    case 'sp':
      //scissors paper = win
    break;
    case 'sp':
      //scissors scissors = drow
    break;
  }


  return(playerChoice+computerChoice)

}

export { checkWinner }