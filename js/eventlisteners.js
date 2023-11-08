

  function mouseOver() {
    document.getElementById("demo").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("demo").style.color = "black";
    
  }

  function mouseOver() {
    document.getElementById("heading__subtitle1").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("heading__subtitle1").style.color = "black";
  }

  document.getElementById("heading__subtitle").onclick = function() {myFunction()};
                
  function myFunction() {
    document.getElementById("heading__subtitle").innerHTML = "SUPRISE!";
  }