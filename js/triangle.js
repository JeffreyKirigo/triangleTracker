function Answer(){
  function add(sideA,sideB,sideC){
  return sideA+sideB<=sideC || sideB+sideC<=sideA || sideA+sideC<=sideB;
  }
  var sideA=parseFloat(document.getElementById("A").value);
  var sideB=parseFloat(document.getElementById("B").value);
  var sideC=parseFloat(document.getElementById("C").value);
  var arr=['Equilateral triangle','An Isosceles triangle','scalene']
    
  if(!sideA,!sideB,!sideC){
    alert("Heee input a value");
  }
  else if (sideA===sideB && sideC===sideA){
  alert(arr[0]);
  }
  else if (sideA===sideB || sideC===sideA){
  alert(arr[1]);
  }
  else if (sideA!==sideB && sideC!==sideA){
  alert(arr[2]);
  }
  else if(!add()){
    alert("Not a triangle");
  }
  else{
    alert("input valid data");
    }
  };