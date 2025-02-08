import { Link, useParams } from "react-router-dom"
import productsData from "../../data/products.json"
import categories from "../../data/categories.json"
import { useState } from "react";


function EditProduct() {
  // JSON.stringify(product)
  const {id} = useParams();
  const found = productsData.find(product => product.id == Number(id))
  const [product, setProduct] = useState(found); 

  const change = () => {
    const productIndex = productsData.findIndex(product => product.id === Number(id))
    productsData[productIndex] = product; 
    }

  if(!found){
    return <div>Product not found</div>
  }

 

  return (
    <div>

    <label htmlFor=""> Id:</label> <br />
    <input onChange={(e) => setProduct({...product, "id" : e.target.value})} type="text" defaultValue={found.id} /> <br />
    
    <label htmlFor=""> Title:</label> <br />
    <input onChange={(e) => setProduct({...product, "title" : e.target.value})} type="text" defaultValue={found.title} /> <br />
    
    <label htmlFor=""> Price:</label> <br />
    <input onChange={(e) => setProduct({...product, "price" : e.target.value})} type="text" defaultValue={found.price} /> <br />
    
    <label htmlFor=""> Description:</label> <br />
    <input onChange={(e) => setProduct({...product, "description" : e.target.value})} type="text" defaultValue={found.description} /> <br />
    
    <label htmlFor="">Category:</label> <br />
    <select defaultValue="Default" onChange={(e) => setProduct({...product, "category" : e.target.value})}>
      <option value="Default" disabled> Select category</option>
      {categories.map(category =>
        <option key={category}> {category}</option>
      )}
    </select> <br />
    
    <label htmlFor=""> Image:</label> <br />
    <input onChange={(e) => setProduct({...product, "image" : e.target.value})} type="text" defaultValue={found.image} /> <br />
    
    <label htmlFor=""> Rating Rate:</label> <br />
    <input onChange={(e) => setProduct({...product, "rating" : {"rate" : e.target.value, "count" : product.rating.count}})} 
    type="number" defaultValue={found.rating.rate} /> <br />
    
    <label htmlFor=""> Rating Count:</label> <br />
    <input onChange={(e) => setProduct({...product, "rating" : {"rate" : product.rating.rate, "count" : e.target.value}})} 
    type="number" defaultValue={found.rating.count} /> <br />

    <Link to="/admin/maintain-products"> 
    <button onClick={change}> CHANGE </button>
    </Link>

    </div>
  )
}

export default EditProduct