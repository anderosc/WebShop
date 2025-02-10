function Payment(props) {
    function pay() {
      const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
      const paymentBody = {
        "account_name": "EUR3D1",
        "nonce": "165asd1" + new Date() + Math.random() * 9999999,
        "timestamp": new Date(),
        "amount": props.sum,
        "order_reference": Math.random() * 9999999,
        "customer_url": "https://err.ee", // TODO: Firebase-i päris aadress
        "api_username": "92ddcfab96e34a5f"
      }
      const paymentHeaders = {
        "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
        "Content-Type": "application/json"
      }
   
      fetch(url, {"method": "POST", "body": JSON.stringify(paymentBody), "headers": paymentHeaders })
        .then(res => res.json())
        .then(json => window.location.href = json.payment_link) 
    }

    // Link to => dünaamikat pole aga rakenduse siseseks liikumiseks
    // usenavigate, navigte --> on dünaamika, rakenduse siseseks liikumiseks
    // window.location.href --> dünaamika + rakendusest välja
   
    return (
      <div><button onClick={pay}>Pay</button></div>
    )
  }
   
  export default Payment