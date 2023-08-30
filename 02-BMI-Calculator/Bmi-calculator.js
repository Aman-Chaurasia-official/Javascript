const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  
 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const result = document.querySelector('#results')

 if(height <0 || isNaN(height) || height === ''){
   result.innerHTML = `the value of height ${height}`
 }
 else if(weight <0 || isNaN(weight) || weight === ''){
  result.innerHTML = `the value of height ${weight}`
}
else {
  const BMI = (weight / (height * height) * 10000).toFixed(2);

  if (BMI < 18.6) {
    result.innerHTML = `Person is Underweight with BMI: <span>${BMI}</span>`;
  } else if (BMI >= 18.6 && BMI < 24.9) {
    result.innerHTML = `Person has Normal Weight with BMI: <span>${BMI}</span>`;
  } else {
    result.innerHTML = `Person is Overweight with BMI: <span>${BMI}</span>`;
  }
}
})