import { useState } from "react";
import categoriesJSON from "../../data/categories.json"
import { useRef } from "react";

function MaintainCategories() {
  const [categories, setCategories] = useState(categoriesJSON);
  const categoryRef = useRef();

  const removeCategory = (index) =>{
    categoriesJSON.splice(index, 1);
    setCategories(categoriesJSON.slice());
  }
  const addCategory = () =>{
    categoriesJSON.push(categoryRef.current.value);
    setCategories(categoriesJSON.slice());
  }

  return (
    <div>
      <label htmlFor="">Category</label> <br />
      <input ref={categoryRef} />
      <button onClick={() => addCategory()}>ADD</button>
      {categories.map((category, index) => 
      
        <div key={category}> {category}
        <button onClick={() => removeCategory(index)}>X</button> </div>
      )}
    </div>
  )
}

export default MaintainCategories