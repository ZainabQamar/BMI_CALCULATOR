const weight = document.querySelector(".weight");
const unit = document.querySelector(".unit");
const feet = document.querySelector(".feet");
const inches = document.querySelector(".inches");
const result = document.querySelector(".result");
console.log(weight);

function calculateBMI() {
  const height_in_meter = feet.value * 0.3048 + feet.value * 0.0254;
  const BMI = weight.value / height_in_meter ** 2;
  console.log(weight.value);
  console.log(unit.value);
  console.log(feet.value);
  console.log(inches.value);
  console.log(height_in_meter);
  console.log(BMI);
  result.textContent("BMI");
  alert("calculateBMI");
}

// function calculateBMI() {
//   let height = parseFloat(document.getElementById("height").value);
//   let weight = parseFloat(document.getElementById("weight").value);

//   let bmi = weight / Math.pow(height / 100, 2);
//   let bmiCategory;

//   if (bmi < 18.5) {
//     bmiCategory = "Underweight";
//   } else if (bmi < 24.9) {
//     bmiCategory = "Normal weight";
//   } else if (bmi < 29.9) {
//     bmiCategory = "Overweight";
//   } else {
//     bmiCategory = "Obesity";
//   }

//   document.getElementById("result").innerText =
//     "Your BMI is: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
// }
