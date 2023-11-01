let mainValue1 = document.querySelector("#mainNum1");
let mainValue2 = document.querySelector("#mainNum2");
let input1 = document.querySelectorAll("#inputNum1");
let input2 = document.querySelectorAll("#inputNum2");
let result = document.querySelectorAll(".result");

function getValues(number, number2) {
  number.addEventListener("input", (e) => {
    number2.forEach((event) => {
      event.value = number.value;
    });
  });
}

function focused() {
  if (mainValue1.value == "" || mainValue2.value == "") {
    alert("Fill in the inputs, please!");
  } else {
    result[0].value = parseInt(input1[0].value) + parseInt(input2[0].value);
    result[1].value = parseInt(input1[0].value) - parseInt(input2[0].value);
    result[2].value = parseInt(input1[0].value) * parseInt(input2[0].value);
    result[3].value = parseInt(input1[0].value) / parseInt(input2[0].value);
  }
}

getValues(mainValue1, input1);
getValues(mainValue2, input2);
