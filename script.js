function insert(num){
    document.querySelector(".display").innerHTML += num;
  }
  
  function clean(){
    document.querySelector(".display").innerHTML = "";
  }
  
  function back(){
    let display = document.querySelector(".display").innerHTML = display.substring(0, display.length - 1);
  }
  
  function calculate(){
    let display = document.querySelector(".display").innerHTML;
    if(display){
      document.querySelector(".display").innerHTML = eval(display);
    } else{
      document.querySelector(".display").innerHTML = "0";
    }
  }
  
  function invert(){
    let display = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML = display*(-1);
  }