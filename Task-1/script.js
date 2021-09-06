var background = [
    "Images/nature1.jpg",
    "Images/nature2.jpg",
    "Images/nature3.jpg",
    "Images/nature4.jpg",
    "Images/nature5.jpg"
  ];
  var i = 0;

  function carousel(){
    document.getElementById("carousel").src = background[i];
    if(i < background.length - 1){
      i++;
    }
    else
      i = 0;
  }
  setInterval(carousel,4000);
