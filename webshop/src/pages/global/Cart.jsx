import { useEffect, useState } from "react"
import styles from "../../css/Cart.module.css"


function Cart() {
  const [products, setProduct] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);
  const [parcelMachineCountry, setParcleMachineCountry] = useState("EE")

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json));
  }, []);

  const removeProduct = (index) => {
    products.splice(index, 1);
    setProduct(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));  
  }
  const increaseQuantity = (product) =>{
    product.kogus++;
    setProduct(products.slice());
    localStorage.setItem("cart", JSON.stringify(products)); 
  }
  const decreaseQuantity = (product) =>{
    product.kogus--;
    if(product.kogus === 0){
      const index = products.indexOf(product); // terve objekti abil indexi leidmne
      // products.indexOf(p => p.id === id) ühe omaduseabil indexi leidmine
      removeProduct(index);
    }
    setProduct(products.slice());
    localStorage.setItem("cart", JSON.stringify(products)); 
  }

  const deleteAll = () =>{
    setProduct([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const calculateTotal = () => {
    let sum= 0;
    products.forEach(product=> sum = sum + product.toode.price * product.kogus)
    return sum;
  }


  return (
    <div>

      {products.length === 0 && <div>Cart is empty </div>} 
      <div> Total: {calculateTotal()} </div>     

      {products.length > 0 ? <div>Items: {products.length}  </div>  : undefined}

      <br />

      {products.length > 0 ?
      <button onClick={() => deleteAll()}>Clear Cart</button>
        : undefined}


      {products.map((cartProduct, index) => 
        <div key={index} className={styles.product}>
          <img  src={cartProduct.toode.image} alt="" className={styles.image} />
          <div className={styles.title}>{cartProduct.toode.title}</div>
          <div className={styles.price}>{cartProduct.toode.price}</div>
          <div className={styles.quantity}>
            <img src="/minus.png" className="icon" onClick={() => decreaseQuantity(cartProduct)} />
            <div > {cartProduct.kogus} tk</div>
            <img  src="/plus.png" className="icon" onClick={() => increaseQuantity(cartProduct)} />
          </div>
          <div className={styles.total}> {cartProduct.kogus * cartProduct.toode.price} €</div>
          {/* <div ><button className={styles.button} onClick={() => removeProduct(index)}>Remove</button></div> */}
          <img src="/remove.png" className="icon" onClick={() => removeProduct(index)}/>
        </div>
      )}



      <select > 
        {parcelMachines
        .filter(pm => pm.A0_NAME === parcelMachineCountry)
        .map(pm => <option key={pm.NAME}> {pm.NAME} </option>)}
      </select>

      <button onClick={() => setParcleMachineCountry("EE")}>EE</button>
      <button onClick={() => setParcleMachineCountry("LV")}>LV</button>
      <button onClick={() => setParcleMachineCountry("LT")}>LT</button>
    </div>
  )
}

export default Cart