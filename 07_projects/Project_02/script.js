const form = document.querySelector('form');

form.addEventListener ('submit' , function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results")

  if(height < 0 || height === ' ' || isNaN(height)){
    results.innerText  = `Please enter valid height ${height}`
  }
  else if(weight < 0 || weight === ' ' || isNaN(weight)){
    results.innerText  = `Please enter valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi < 18.6){
      results.innerText = `Your BMI index is - ${bmi} and you are Under Weight`
    }
    else if(bmi < 24.9){
      results.innerText = `Your BMI index is - ${bmi} and you are Normal Range`
    }
    else {
      results.innerText = `Your BMI index is - ${bmi} and you are Ovewweight`
    }
  }
  
});