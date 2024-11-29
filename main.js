 
   const valueDisplay = document.getElementById("valueDisplay");
   const increaseBtn = document.getElementById("increaseBtn");
   const decreaseBtn = document.getElementById("decreaseBtn");

 
   let currentValue = 0;

  
   function updateValue() {
       valueDisplay.textContent = currentValue;
   }

   increaseBtn.addEventListener("click", function() {
       currentValue++; 
       updateValue();   
   });

  
   decreaseBtn.addEventListener("click", function() {
       currentValue--; 
       updateValue();   
   });

   updateValue();