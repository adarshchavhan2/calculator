const cal = (e)=>{
   const inputBox = document.querySelector('.input-box');
   const outputBox = document.querySelector('.output-box');

   let hidden = document.querySelector('.hidden');
   
   switch(e.target.innerHTML){
      case 'x²':
         value = hidden.innerHTML;
         outputBox.value = eval(value) * eval(value);
         break;

      case 'xⁿ':
         value = hidden.innerHTML;
         outputBox.value = Math.sqrt(eval(value));
         
         break;

      case 'ce':
            inputBox.value = '';
            outputBox.value = '';
            hidden.innerHTML = '';
         break;

      case '←':
            let arr = Array.from(inputBox.value);
            let arr1 = Array.from(hidden.innerHTML);
            arr.pop();
            arr1.pop();
            inputBox.value = '';
            hidden.innerHTML = '';
            arr.forEach(e => inputBox.value += e);
            arr.forEach(e => hidden.innerHTML += e);
         break;

      case '=':
          value = hidden.innerHTML;

          if(value == undefined || value ==  NaN ){
            outputBox.value = '';
          }else{
            outputBox.value = eval(value);
          }
          
         break;

      default:
         inputBox.value += e.target.innerHTML;
         hidden.innerHTML += e.target.value;
   }
}


window.onload = ()=>{
   const inputBox = document.querySelector('.input-box');
   if(innerWidth <= 450){
      inputBox.setAttribute('disabled',true);
   }else{
      inputBox.removeAttribute('disabled');
   }
}




const btn = document.querySelectorAll('.btn');
btn.forEach(e => e.addEventListener('click', cal));
