import { useEffect, useRef, useState } from "react"
import productsFromFile from "../../data/products.json"
// import categoriesDATA from "../../data/categories.json"

function AddProduct() {

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();
  const ratingCountRef = useRef();

  const [message, setMessage] = useState("Add product");
  const [categories, setCategories] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8090/categories")
    .then(res => res.json())
    .then(json => setCategories(json))
  }, []);

  const addProduct = () =>{
    if (idRef.current.value === "") {
      setMessage("Id is missing");
      return;
    }
    if (titleRef.current.value === "") {
      setMessage("Title is missing");
      return;
    }
    if (priceRef.current.value === "") {
      setMessage("Price is missing");
      return;
    }
    if (descriptionRef.current.value === "") {
      setMessage("Description is missing");
      return;
    }
    if (categoryRef.current.value === "") {
      setMessage("Category is missing");
      return;
    }
    if (imageRef.current.value === "") {
      setMessage("Image is missing");
      return;
    }
    if (ratingRateRef.current.value === "") {
      setMessage("Rating rate is missing");
      return;
    }
    if (ratingCountRef.current.value === "") {
      setMessage("Rating count is missing");
      return;
    }

    const product = {
      "id": idRef.current.value ,
      "title": titleRef.current.value,
      "price": priceRef.current.value,
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": {
          "rate": ratingRateRef.current.value,
          "count": ratingCountRef.current.value
      }
  }

    productsFromFile.push(product);
    setMessage("Toode lisatud!");


    idRef.current.value = "";
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
    imageRef.current.value = "";
    ratingRateRef.current.value = "";
    ratingCountRef.current.value = "";
  };



  return (
    
    <div>
      
      <p>Add Product:</p><br /> <br />
        <div>Id</div> 
        <input type="text" ref={idRef} /> <br /> <br />

        <div>Title</div>
        <input type="text"  ref={titleRef} /> <br /> <br />

        <div>Price</div>
        <input type="text"  ref={priceRef}  /> <br /> <br />

        <div>Description</div>
        <input type="text"  ref={descriptionRef} /> <br /> <br />

        <div>Category</div>
        {/* <input type="text" ref={categoryRef}  /> <br /> <br /> */}
        <select defaultValue="1" ref={categoryRef}>
          <option disabled value="1">Select category</option>
        {categories.map(category =>
          <option key={category} >{category}</option>
        )}
        </select> <br /> <br />

        <div>Image</div> 
        <input type="text" ref={imageRef}  /> <br /> <br />

        <div>Rating - rate </div> 
        <input type="text" ref={ratingRateRef}  /> <br /> <br />

        <div>Rating - count </div> 
        <input type="text"  ref={ratingCountRef} /> <br /> <br />

        {message}
        <button onClick={addProduct}> ADD </button>


    </div>
  )
}

export default AddProduct