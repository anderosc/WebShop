import { Link, useParams } from "react-router-dom"
import productsData from "../../data/products.json"
import { useRef } from "react";


function EditProduct() {
  const {index} = useParams();
  const found = productsData[index]
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();
  const ratingCountRef = useRef();

  const change = () => {
    productsData[index] = {
      "id": idRef.current.value,
      "title": titleRef.current.value,
      "price": priceRef.current.value,
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": {
        "rate": ratingRateRef.current.value,
        "count": ratingCountRef.current.value
      }
    };
  }



  // maintainproducts vt
  // const index = productsFile.findIndex(product => product.id === id);


  return (
    <div>
    <label htmlFor=""> Id:</label>
    <input ref={idRef} type="text" defaultValue={found.id} /> <br />
    <label htmlFor=""> Title:</label>
    <input ref={titleRef} type="text" defaultValue={found.title} /> <br />
    <label htmlFor=""> Price:</label>
    <input ref={priceRef} type="text" defaultValue={found.price} /> <br />
    <label htmlFor=""> Description:</label>
    <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
    <label htmlFor=""> Category:</label>
    <input ref={categoryRef} type="text" defaultValue={found.category} /> <br />
    <label htmlFor=""> Image:</label>
    <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
    <label htmlFor=""> Rating Rate:</label>
    <input ref={ratingRateRef} type="text" defaultValue={found.rating.rate} /> <br />
    <label htmlFor=""> Rating Count:</label>
    <input ref={ratingCountRef} type="text" defaultValue={found.rating.count} /> <br />

    <Link to="/admin/maintain-products"> 
    <button onClick={change}> CHANGE </button>
    </Link>

    </div>
  )
}

export default EditProduct