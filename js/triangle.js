function Answer(){
  function add(sideA,sideB,sideC){
  return sideA+sideB<=sideC || sideB+sideC<=sideA || sideA+sideC<=sideB;
  }
  var sideA=parseFloat(document.getElementById("A").value);
  var sideB=parseFloat(document.getElementById("B").value);
  var sideC=parseFloat(document.getElementById("C").value);
  if(!sideA,!sideB,!sideC){
    alert("Heee input a value");
  }
  else if(add()){
  alert("Not a triangle");
  }
  else if (sideA===sideB && sideC===sideA){
  alert("Equilateral triangle");
  }
  else if (sideA===sideB || sideC===sideA){
  alert("An Isosceles triangle");
  }
  else if (sideA!==sideB && sideC!==sideA){
  alert("scalene");
  }
  else{
  alert("input valid data");
    }
};