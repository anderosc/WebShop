import { useParams } from "react-router-dom"
import productsFile from "../../data/products.json"

function SingleProduct() {
  const {id} = useParams();
  const found = productsFile.find(product => product.id === Number(id));

  if(found === undefined){
    return <div> Product Not Found</div>
  }

  return (
    <div>
                <div>Title:{found.title}</div>
                <div>Price: {found.price}$</div>
                <div>Description:{found.description}</div>
                <div>Category:{found.category}</div>
                <div><img style={{ width: '120px', height: '90px' }}  src={found.image} alt="" /></div>
                <div>Raiting Rate:{found.rating.rate}</div>
                <div> Raiting Count:{found.rating.count}</div>
                {found.actve === false  && <i>Product is inactive</i>}
      
    </div>
  )
}

export default SingleProduct