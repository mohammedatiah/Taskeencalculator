let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let weight = document.getElementById('weight-input').value;
    let height = document.getElementById('height-input').value;
    let finalbmi = ((weight / 5 )*70 + (height*0.3));
    document.getElementById('bmi-output').value = " نسبة تسكينك هي "+finalbmi + " بالتوفيق 🙏🌟 ";
})
