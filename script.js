const amountElement= document.getElementById("amount")
console.log(amountElement.value)


  paypal.Buttons({
    createOrder: function(data, actions) {
      
      return actions.order.create({
        purchase_units: [{
          amount: {
            value:amountElement.value,
          }
        }]
      });
    }
  }).render('#paypal');
