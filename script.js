const calc = () => {
   let amount = +document.querySelector('#amount').value;
   let percentage = +document.querySelector('#percentage').value;
   
  
   let tipAmount = (amount * percentage) / 100;

   document.querySelector('#tipAmount').innerHTML = `Tip Amount: ${tipAmount}`;

   document.querySelector('#totalAmount').innerHTML = `Total Amount: ${tipAmount + amount}`;
};

const reset = () =>{
    document.querySelector('#amount').value = '';
    document.querySelector('#percentage').value = '';
   document.querySelector('#tipAmount').innerHTML = 'Tip Amount:';
   document.querySelector('#totalAmount').innerHTML  = 'Total Amount:';
}

let calculate = document.querySelector('#calculate');
let resetEl = document.querySelector('#reset');

calculate.addEventListener('click', calc);
resetEl.addEventListener('click', reset);