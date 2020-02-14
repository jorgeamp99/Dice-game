function throwDicee() {
  diceeValue1 = Math.floor((Math.random() * 6 )+ 1);
  diceeValue2 = Math.floor((Math.random() * 6 )+ 1);
  switch (diceeValue1){
    case 1:
    document.querySelector('.dicee-1').innerHTML = "<tr><td></td> <td></td> <td></td></tr><tr><td></td> <td class='circle'></td> <td></td></tr><tr><td></td> <td></td><td></td></tr>";
    break;
    case 2:
    document.querySelector('.dicee-1').innerHTML = "<tr><td class='circle'></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td></tr><tr><td></td> <td></td><td class='circle'></td></tr>";
    break;
    case 3:
    document.querySelector('.dicee-1').innerHTML = "<tr><td class='circle'></td> <td></td> <td></td></tr><tr><td></td> <td class='circle'></td> <td></td></tr><tr><td></td> <td></td><td class='circle'></td></tr>";
    break;
    case 4:
    document.querySelector('.dicee-1').innerHTML = "<tr><td class='circle'></td><td></td><td class='circle'></td></tr> <tr><td></td><td></td><td></td></tr><tr><td class='circle'></td><td></td><td class='circle'></td> </tr>";
    break;
    case 5:
    document.querySelector('.dicee-1').innerHTML = "<tr><td class='circle'></td> <td></td> <td class='circle'></td></tr><tr><td></td> <td class='circle'></td> <td></td></tr><tr><td class='circle'></td> <td></td><td class='circle'></td></tr>";
    break;
    case 6:
    document.querySelector('.dicee-1').innerHTML = "<tr><td class='circle'></td> <td></td> <td class='circle'></td></tr><tr><td class='circle'></td> <td></td> <td class='circle'></td></tr><tr><td class='circle'></td> <td></td><td class='circle'></td></tr>";
    break;
  }


  switch (diceeValue2){
    case 1:
    document.querySelector('.dicee-2').innerHTML = "<tr><td></td> <td></td> <td></td></tr><tr><td></td> <td class='circle'></td> <td></td></tr><tr><td></td> <td></td><td></td></tr>";
    break;
    case 2:
    document.querySelector('.dicee-2').innerHTML = "<tr><td class='circle'></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td></tr><tr><td></td> <td></td><td class='circle'></td></tr>";
    break;
    case 3:
    document.querySelector('.dicee-2').innerHTML = "<tr><td class='circle'></td> <td></td> <td></td></tr><tr><td></td> <td class='circle'></td> <td></td></tr><tr><td></td> <td></td><td class='circle'></td></tr>";
    break;
    case 4:
    document.querySelector('.dicee-2').innerHTML = "<tr><td class='circle'></td><td></td><td class='circle'></td></tr> <tr><td></td><td></td><td></td></tr><tr><td class='circle'></td><td></td><td class='circle'></td> </tr>";
    break;
    case 5:
    document.querySelector('.dicee-2').innerHTML = "<tr><td class='circle'></td> <td></td> <td class='circle'></td></tr><tr><td></td> <td class='circle'></td> <td></td></tr><tr><td class='circle'></td> <td></td><td class='circle'></td></tr>";
    break;
    case 6:
    document.querySelector('.dicee-2').innerHTML = "<tr><td class='circle'></td> <td></td> <td class='circle'></td></tr><tr><td class='circle'></td> <td></td> <td class='circle'></td></tr><tr><td class='circle'></td> <td></td><td class='circle'></td></tr>";
    break;
  }

 if (diceeValue1 > diceeValue2){
   document.querySelector('.message').innerHTML = "Player 1 wins";
 } else if (diceeValue1 < diceeValue2){
    document.querySelector('.message').innerHTML = "Player 2 wins";
  } else {document.querySelector('.message').innerHTML = "It's a tied!";}

}

   

if (window.performance.navigation.type == 1){

throwDicee();
}