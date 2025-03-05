import { toast, ToastContainer } from "react-toastify";
// import productsFile from "../../data/products.json"
import { useEffect,  useState } from "react"
import styles from "../../css/MaintainProducts.module.css"
import { Link } from "react-router-dom";
import Payment from "../../components/Payment";


function MaintainProducts() {
  const [products, setProducts] = useState([]);
  // const searchInput = useRef();

  useEffect(() =>{
      fetch("http://localhost:8090/products")
      .then(res => res.json())
      .then(json => setProducts(json))
    }, []);

// id kaudu tuleks võtta
//muutmine käib ainult index alusel
  const deleteProduct = (id) =>{
    fetch("http://localhost:8090/products?id=" + id, {
      method : "DELETE"
    })
    .then(res => res.json())
    .then( json => {
      setProducts(json)
      toast("Product deleted")
    }
    )
  };

  // const search = () =>{
  //   if(searchInput.current.value.length < 2){
  //     return;
  //   }
  //   const search = products.filter(product => 
  //     product.title.toLowerCase().includes(searchInput.current.value.toLowerCase()) || 
  //     product.description.toLowerCase().includes(searchInput.current.value.toLowerCase())
  //   );
  //   setProducts(search);
  // }  

  return (
    <div>
      Maksa hankijale 100€ <Payment sum={100}/>
      {/* <div>SEARCH:</div>
      <input type="text" onChange={search} ref={searchInput}  /> */}
      <div>Total products: {products.length}</div>

      <table>
          <thead>
              <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Rating Rate</th>
                  <th>Raiting Count</th>
                  <th> </th>
                  <th> </th>
              </tr>
          </thead>
          <tbody>
              {products.sort((a,b) => a.id - b.id).map((product) => (
              <tr key={product.id} className={product.active ? styles.active : styles.inactive}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img style={{ width: '40px', height: '30px' }}  src={product.image} alt="" /></td>
                <td>{product.rating?.rate}</td>
                <td>{product.rating?.count}</td>
                <td><button onClick={() => deleteProduct(product.id)}>DELETE</button></td>
                <td> <Link to={"/admin/edit-product/" + product.id}>  <button>CHANGE </button> </Link></td>

              </tr>
              ))}
          </tbody>
      </table>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        // transition={Bounce}
      />
    </div>
  )
}

export default MaintainProducts