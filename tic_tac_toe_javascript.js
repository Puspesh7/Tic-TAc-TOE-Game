//Getting all required elements
var selectBox = document.querySelector(".select-box");
var selectxButton = document.querySelector(".playerX");
var selectoButton = document.querySelector(".playerO");
var playBoard = document.querySelector(".play-board");
var replayButton = document.querySelector(".replay");

//array to store the entries of X and O's
var arr = [];
for(var i=0;i<3;i++)
  arr[i] = ['.','.','.'];

//The player's turn and the player selected
var turn = "";
var player = "";

//Hiding select box and displaying playboard on clicking player X
selectxButton.onclick = () =>{
  selectBox.style.display = "none";
  playBoard.style.display = "block";
  var xturn = document.querySelector(".x-turn");
  xturn.style.background = "#56baed";
  xturn.style.color = "white";
  var yturn = document.querySelector(".y-turn");
  yturn.style.background = "white";
  yturn.style.color = "#56baed";
  player = "x";
  turn = "x";
  markfieldplayer();
}
//Hiding select box and displaying playboard on clicking player Y
selectoButton.onclick = () =>{
  selectBox.style.display = "none";
  playBoard.style.display = "block";
  var xturn = document.querySelector(".x-turn");
  xturn.style.background = "white";
  xturn.style.color = "#56baed";
  var yturn = document.querySelector(".y-turn");
  yturn.style.background = "#56baed";
  yturn.style.color = "white";
  player = "o";
  turn = "o";
  markfieldplayer();
}

var winner = "";
//selecting a particular field
function changeplayerx()
{
  var xturn = document.querySelector(".x-turn");
  xturn.style.background = "#56baed";
  xturn.style.color = "white";
  var yturn = document.querySelector(".y-turn");
  yturn.style.background = "white";
  yturn.style.color = "#56baed";
}

function changeplayery()
{
  var xturn = document.querySelector(".x-turn");
  xturn.style.background = "white";
  xturn.style.color = "#56baed";
  var yturn = document.querySelector(".y-turn");
  yturn.style.background = "#56baed";
  yturn.style.color = "white";
}

var nextButton = document.querySelector(".next-button");
nextButton.onclick = () =>
{
  winner = checkresult();
  if(winner =="continue")
  {
    if(turn == player)
    {
      if(turn == "x")
        changeplayerx();
      else
        changeplayery();
      markfieldplayer();
    }
    else {
      if(turn == "x")
        changeplayerx();
      else
        changeplayery();
      markfieldbot();
    }
  }
  else
    displayresult();
}

//marking the selected field
function markfieldplayer()
{
    var check = true;
    nextButton.style.display = "none";
    document.querySelector(".box-1").onclick = () =>
    {
      if(check == true && arr[0][0] == '.')
      {
        if(turn == "x")
        {
          arr[0][0] = 'x';
          document.querySelector(".box-1").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-1 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[0][0] = 'o';
          document.querySelector(".box-1").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-1 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
    document.querySelector(".box-2").onclick = () =>
    {
      if(check == true && arr[0][1] == '.')
      {
        if(turn == "x")
        {
          arr[0][1] = 'x';
          document.querySelector(".box-2").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-2 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[0][1] = 'o';
          document.querySelector(".box-2").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-2 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
    document.querySelector(".box-3").onclick = () =>
    {
      if(check == true && arr[0][2] == '.')
      {
        if(turn == "x")
        {
          arr[0][2] = 'x';
          document.querySelector(".box-3").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-3 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[0][2] = 'o';
          document.querySelector(".box-3").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-3 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
    document.querySelector(".box-4").onclick = () =>
    {
      if(check == true && arr[1][0] == '.')
      {
        if(turn == "x")
        {
          arr[1][0] = 'x';
          document.querySelector(".box-4").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-4 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[1][0] = 'o';
          document.querySelector(".box-4").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-4 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
    document.querySelector(".box-5").onclick = () =>
    {
      if(check == true && arr[1][1] == '.')
      {
        if(turn == "x")
        {
          arr[1][1] = 'x';
          document.querySelector(".box-5").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-5 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[1][1] = 'o';
          document.querySelector(".box-5").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-5 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
    document.querySelector(".box-6").onclick = () =>
    {
      if(check == true && arr[1][2] == '.')
      {
        if(turn == "x")
        {
          arr[1][2] = 'x';
          document.querySelector(".box-6").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-6 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[1][2] = 'o';
          document.querySelector(".box-6").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-6 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
    document.querySelector(".box-7").onclick = () =>
    {
      if(check == true && arr[2][0] == '.')
      {
        if(turn == "x")
        {
          arr[2][0] = 'x';
          document.querySelector(".box-7").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-7 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[2][0] = 'o';
          document.querySelector(".box-7").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-7 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
    document.querySelector(".box-8").onclick = () =>
    {
      if(check == true && arr[2][1] == '.')
      {
        if(turn == "x")
        {
          arr[2][1] = 'x';
          document.querySelector(".box-8").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-8 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[2][1] = 'o';
          document.querySelector(".box-8").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-8 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
    document.querySelector(".box-9").onclick = () =>
    {
      if(check == true && arr[2][2] == '.')
      {
        if(turn == "x")
        {
          arr[2][2] = 'x';
          document.querySelector(".box-9").innerHTML = '<i class="fas fa-times fa-7x"></i>';
          document.querySelector(".box-9 i").style.margin = "0px 0px 0px 40px";
        }
        else
        {
          arr[2][2] = 'o';
          document.querySelector(".box-9").innerHTML = '<i class="far fa-circle fa-6x"></i>';
          document.querySelector(".box-9 i").style.margin = "10px 0px 0px 30px";
        }
        check = false;
        nextButton.style.display = "block";
        turn = turn == "x" ? "o":"x";
      }
    }
}

function markfieldbot()
{
  var i = Math.floor(Math.random() * 3);
  var j = Math.floor(Math.random() * 3);
  while(arr[i][j] != '.')
  {
    i = Math.floor(Math.random() * 3);
    j = Math.floor(Math.random() * 3);
  }
  if(i==0 && j==0)
  {
    if(turn == "x")
    {
      document.querySelector(".box-1").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-1 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-1").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-1 i").style.margin = "10px 0px 0px 30px";
    }
  }
  else if(i==0 && j==1)
  {
    if(turn == "x")
    {
      document.querySelector(".box-2").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-2 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-2").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-2 i").style.margin = "10px 0px 0px 30px";
    }
  }
  else if(i==0 && j==2)
  {
    if(turn == "x")
    {
      document.querySelector(".box-3").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-3 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-3").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-3 i").style.margin = "10px 0px 0px 30px";
    }
  }
  else if(i==1 && j==0)
  {
    if(turn == "x")
    {
      document.querySelector(".box-4").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-4 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-4").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-4 i").style.margin = "10px 0px 0px 30px";
    }
  }
  else if(i==1 && j==1)
  {
    if(turn == "x")
    {
      document.querySelector(".box-5").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-5 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-5").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-5 i").style.margin = "10px 0px 0px 30px";
    }
  }
  else if(i==1 && j==2)
  {
    if(turn == "x")
    {
      document.querySelector(".box-6").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-6 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-6").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-6 i").style.margin = "10px 0px 0px 30px";
    }
  }
  else if(i==2 && j==0)
  {
    if(turn == "x")
    {
      document.querySelector(".box-7").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-7 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-7").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-7 i").style.margin = "10px 0px 0px 30px";
    }
  }
  else if(i==2 && j==1)
  {
    if(turn == "x")
    {
      document.querySelector(".box-8").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-8 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-8").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-8 i").style.margin = "10px 0px 0px 30px";
    }
  }
  else
  {
    if(turn == "x")
    {
      document.querySelector(".box-9").innerHTML = '<i class="fas fa-times fa-7x"></i>';
      document.querySelector(".box-9 i").style.margin = "0px 0px 0px 40px";
    }
    else
    {
      document.querySelector(".box-9").innerHTML = '<i class="far fa-circle fa-6x"></i>';
      document.querySelector(".box-9 i").style.margin = "10px 0px 0px 30px";
    }
  }

  if(turn == "x")
    arr[i][j] = 'x';
  else
    arr[i][j] = 'o';
  turn = turn == "x" ? "o":"x";
}

// //function to check if a player has won or game has drawn
function checkresult()
{
  if((arr[0][0]=='o' && arr[0][1]=='o' && arr[0][2]=='o') || (arr[1][0]=='o' && arr[1][1]=='o' && arr[1][2]=='o') || (arr[2][0]=='o' && arr[2][1]=='o' && arr[2][2]=='o') || (arr[0][0]=='o' && arr[1][0]=='o' && arr[2][0]=='o') || (arr[0][1]=='o' && arr[1][1]=='o' && arr[2][1]=='o') || (arr[0][2]=='o' && arr[1][2]=='o' && arr[2][2]=='o') || (arr[0][0]=='o' && arr[1][1]=='o' && arr[2][2]=='o') || (arr[0][2]=='o' && arr[1][1]=='o' && arr[2][0]=='o'))
    return "O";
  else if((arr[0][0]=='x' && arr[0][1]=='x' && arr[0][2]=='x') || (arr[1][0]=='x' && arr[1][1]=='x' && arr[1][2]=='x') || (arr[2][0]=='x' && arr[2][1]=='x' && arr[2][2]=='x') || (arr[0][0]=='x' && arr[1][0]=='x' && arr[2][0]=='x') || (arr[0][1]=='x' && arr[1][1]=='x' && arr[2][1]=='x') || (arr[0][2]=='x' && arr[1][2]=='x' && arr[2][2]=='x') || (arr[0][0]=='x' && arr[1][1]=='x' && arr[2][2]=='x') || (arr[0][2]=='x' && arr[1][1]=='x' && arr[2][0]=='x'))
    return "X";
  else if(!arr[0].includes('.') && !arr[1].includes('.') && !arr[2].includes('.'))
    return "draw";
  else
    return "continue";
}

//function to display result
function displayresult()
{
  playBoard.style.display = "none";
  document.querySelector(".result-box").style.display = "block";
  if(winner == "draw")
    document.querySelector(".won-text").innerHTML = '<span>The game has drawn</span>';
  else if(winner == "X")
    document.querySelector(".won-text").innerHTML = '<span>Player X won the game</span>';
  else
    document.querySelector(".won-text").innerHTML = '<span>Player O won the game</span>';
}

//replay the game
replayButton.onclick = () =>
{
  location.reload();
}
