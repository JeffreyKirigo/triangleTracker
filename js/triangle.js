function Answer() {
  var sideA = parseFloat(document.getElementById("A").value);
  var sideB = parseFloat(document.getElementById("B").value);
  var sideC = parseFloat(document.getElementById("C").value);
  var arr = ['Equilateral triangle', 'An Isosceles triangle', 'scalene']

  if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
    if (!sideA, !sideB, !sideC) {
      alert("Heee input a value");
    }
    else if (sideA === sideB && sideC === sideA) {
      alert(arr[0]);
    }
    else if (sideA === sideB || sideC === sideA || sideB === sideC) {
      alert(arr[1]);
    }
    else if (sideA !== sideB && sideC !== sideA) {
      alert(arr[2]);
    }

  }
  else {
    alert("Not a triangle");
  }
};