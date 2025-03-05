import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/Homepage.module.css"
import { useTranslation } from 'react-i18next';
import SortButtons from "../../components/SortButtons";
import { useContext } from "react";
import { CartSumContext } from "../../store/CartSumContext";
// import categories from "../../data/categories.json"

function HomePage() {
  const {increase} = useContext(CartSumContext)
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);


  useEffect(() => {
      fetch("http://localhost:8090/products")
      .then(res => res.json())
      .then(json => setProducts(json))
      
    }, []);

    useEffect(() => {
      fetch("http://localhost:8090/categories")
      .then(res => res.json())
      .then(json => setCategory(json))
      
    }, []);

  const addToCart = (productClicked) =>{
      const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
      const found = cartLocalStorage.find(cartProduct => cartProduct.toode.id === productClicked.id)
      if(found !== undefined){
        //suurenda kogust
          found.kogus++
      }else{
        cartLocalStorage.push({"kogus" : 1, "toode" : productClicked});
        //lisa loppu
      }

      localStorage.setItem("cart", JSON.stringify(cartLocalStorage));
      increase(productClicked.price);
      toast(t("homepage_product_added"));
  }



  const filterByCategory = (category) => {
    // setProducts(products.filter(product => product.category.includes("electronics")));
      fetch("http://localhost:8090/products-by-category?category=" + category)
      .then(res => res.json())
      .then(json => setProducts(json))
  };
  // const filterJewelery = () => {
  //   // setProducts(products.filter(product => product.category.includes("jewelery")));
  // };
  // const filterMensClothing = () => {
  //   // setProducts(products.filter(product => product.category.includes("men's clothing")));
  // };
  // const filterWomensClothing = () => {
  //   // setProducts(products.filter(product => product.category.includes("women's clothing")));
  // };

  return (
    <div>
      <CarouselGallery />

      <SortButtons products={products} setProducts={setProducts}/>
      <br />
      <div>{t("homepage_filter")}:</div>
      {/* <button onClick={() => filterByCategory}>{t("men's clothing")}</button>
      <button onClick={() => filterByCategory}>{t("homepage_filter_womens_clothing")}</button>
      <button onClick={() => filterByCategory}>{t("homepage_filter_mens_clothing")}</button>
      <button onClick={() => filterByCategory}>{t("homepage_filter_jewelery")}</button> */}
      {categories.map(category =>
              <button key={category} onClick={() => filterByCategory(category)}>{category}</button>
      )}

      <br />
      {products.sort((a,b) => a.id - b.id).map((product) => 
        <div key={product.id}>
          <img className={product.active ? styles.image : styles.inactive_image} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <Link to={"/product/" + product.id} > 
            <button>{t("homepage_view_details")}</button> 
          </Link> 
          <div>
            <button disabled={!product.active} onClick={() => addToCart(product)}>
              {t("homepage_add_to_cart")}
            </button>
          </div>
        </div>
      )}

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
  );
}

export default HomePage;
