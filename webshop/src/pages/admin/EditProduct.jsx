import { useNavigate, useParams } from "react-router-dom"
// import productsData from "../../data/products.json"
// import categories from "../../data/categories.json"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


function EditProduct() {
  // JSON.stringify(product)
  const {id} = useParams();
  // const found = productsData.find(product => product.id == Number(id))
  const [product, setProduct] = useState(id -1);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8090/product?id=" + id)
    .then(res => res.json())
    .then(json => setProduct(json))
  }, [id]);


    useEffect(() =>{
      fetch("http://localhost:8090/categories")
      .then(res => res.json())
      .then(json => setCategories(json))
    }, []);


  const change = () => {
    if(product.price < 0){
      toast.error("Hind ei saa olla negatiivne");
      return;
    }

    fetch("http://localhost:8090/products", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Authorization : "Bearer " + sessionStorage.getItem("LokiAuthToken")
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(() => {
       
      },
      navigate("/admin/maintain-products")
    )

    // const productIndex = productsData.findIndex(product => product.id === Number(id))
    // productsData[productIndex] = product; 

    
    }


  if(product === null){
    return <div>Product not found</div>
  }
  
  if(product.id === null){
    return <div>Loading....</div>
  }

  return (
    <div>

    <label htmlFor=""> Id:</label> <br />
    <input onChange={(e) => setProduct({...product, "id" : e.target.value})} type="text" defaultValue={product.id} /> <br />
    
    <label htmlFor=""> Title:</label> <br />
    <input onChange={(e) => setProduct({...product, "title" : e.target.value})} type="text" defaultValue={product.title} /> <br />
    
    <label htmlFor=""> Price:</label> <br />
    <input onChange={(e) => setProduct({...product, "price" : e.target.value})} type="text" defaultValue={product.price} /> <br />
    
    <label htmlFor=""> Description:</label> <br />
    <input onChange={(e) => setProduct({...product, "description" : e.target.value})} type="text" defaultValue={product.description} /> <br />
    
    <label htmlFor="">Category:</label> <br />
    <select defaultValue="Default" onChange={(e) => setProduct({...product, "category" : e.target.value})}>
      <option value="Default" disabled> Select category</option>
      {categories.map(category =>
        <option key={category}> {category}</option>
      )}
    </select> <br />
    
    <label htmlFor=""> Image:</label> <br />
    <input onChange={(e) => setProduct({...product, "image" : e.target.value})} type="text" defaultValue={product.image} /> <br />
    
    <label htmlFor=""> Rating Rate:</label> <br />
    <input onChange={(e) => setProduct({...product, "rating" : {"rate" : e.target.value, "count" : product.rating.count}})} 
    type="number" defaultValue={product.rating?.rate} /> <br />
    
    <label htmlFor=""> Rating Count:</label> <br />
    <input onChange={(e) => setProduct({...product, "rating" : {"rate" : product.rating.rate, "count" : e.target.value}})} 
    type="number" defaultValue={product.rating?.count} /> <br />

    
    <button onClick={change}> CHANGE </button>

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
      />

    </div>
  )
}

export default EditProduct