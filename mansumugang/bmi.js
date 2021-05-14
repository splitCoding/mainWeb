
const weight = document.querySelector("#putWeight").value;
function bmi(){

}
function printHeight(){
  const height = document.querySelector('#putHeight').value;
  document.querySelector("#heightResult").textContent= height;
}
function printWeight(){
  const weight = document.querySelector('#putWeight').value;
  document.querySelector("#weightResult").textContent= weight;
}
function printBmi(){
  const originalHeight = document.querySelector('#putHeight').value;
  const height = originalHeight/100;
  const weight = document.querySelector('#putWeight').value;
  const bmi = Number(weight)/(Math.pow(Number(height),2));
  const finalBmi = bmi.toFixed(1);

  if(height === 0){
    alert("당신은 공기로 된 뚱땡이입니다")
  } else if(height !== 0){
      if(finalBmi > 30){
      alert(`${finalBmi}입니다 당신은 비만입니다ㅠㅠ`);
    } else if(finalBmi >25){
      alert(`${finalBmi}입니다 당신은 과체중입니다ㅠㅠ`);
    } else if(finalBmi >20){
      alert(`${finalBmi}입니다 당신은 정상입니다~`);
    } else if(finalBmi > 0){
      alert(`${finalBmi}입니다 당신은 저체중입니다~`);
    } else {
      alert("당신은 공기로 된 기린입니다")
    }
  }
}