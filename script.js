const weight = document.querySelector(".weight");
const unit = document.querySelector(".unit");
const feet = document.querySelector(".feet");
const inches = document.querySelector(".inches");
const result = document.querySelector(".result");
const statusBMI = document.querySelector(".statusBMI");

function calculateBMI() {
  let convertedWeight = weight.value;
  let status;
  if (unit.value === "LB") {
    convertedWeight = weight.value * 0.45359;
  }

  const height_in_meter = feet.value * 0.3048 + feet.value * 0.0254;
  const BMI = convertedWeight / height_in_meter ** 2;
  console.log("convertedWeight", convertedWeight);
  console.log(unit.value);
  console.log(feet.value);
  console.log(inches.value);
  console.log(BMI.toFixed(2));

  result.textContent = BMI.toFixed(2);

  if (BMI.toFixed(2) <= 18.5) {
    status = "Underweight";
  } else if (BMI.toFixed(2) >= 18.5 && BMI.toFixed(2) < 24.9) {
    status = "Normal weight";
  } else if (BMI.toFixed(2) >= 24.9 && BMI.toFixed(2) < 29.9) {
    status = "Overweight";
  } else {
    status = "Obesity";
  }
  statusBMI.textContent = "The weight is " + status;
}
