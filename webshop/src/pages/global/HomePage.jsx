import { useState } from "react"
import { Link } from "react-router-dom";
import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/Homepage.module.css"
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (product) =>{
      const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
      cartLocalStorage.push(product);
      localStorage.setItem("cart", JSON.stringify(cartLocalStorage));
      toast(t("homepage_product_added"));
  }

  const sortAZ = () => {
    setProducts(products.toSorted((a, b) => a.title.localeCompare(b.title)));
  };
  const sortZA = () => {
    setProducts(products.toSorted((a, b) => b.title.localeCompare(a.title)));
  };
  const sortPriceHighToLow = () => {
    setProducts(products.toSorted((a, b) => b.price - a.price));
  };
  const sortPriceLowToHigh = () => {
    setProducts(products.toSorted((a, b) => a.price - b.price));
  };
  const sortRatingHTL = () => {
    setProducts(products.toSorted((a, b) => b.rating.rate - a.rating.rate));
  };
  const sortRatingLTH = () => {
    setProducts(products.toSorted((a, b) => a.rating.rate - b.rating.rate));
  };

  const filterElectronics = () => {
    setProducts(products.filter(product => product.category.includes("electronics")));
  };
  const filterJewelery = () => {
    setProducts(products.filter(product => product.category.includes("jewelery")));
  };
  const filterMensClothing = () => {
    setProducts(products.filter(product => product.category.includes("men's clothing")));
  };
  const filterWomensClothing = () => {
    setProducts(products.filter(product => product.category.includes("women's clothing")));
  };

  return (
    <div>
      <CarouselGallery />
      <button onClick={sortAZ}>{t("homepage_sort_az")}</button> 
      <button onClick={sortZA}>{t("homepage_sort_za")}</button>
      <button onClick={sortPriceHighToLow}>{t("homepage_sort_price_desc")}</button>
      <button onClick={sortPriceLowToHigh}>{t("homepage_sort_price_asc")}</button>
      <button onClick={sortRatingHTL}>{t("homepage_sort_rating_desc")}</button>
      <button onClick={sortRatingLTH}>{t("homepage_sort_rating_asc")}</button>
      
      <br />
      <div>{t("homepage_filter")}:</div>
      <button onClick={filterElectronics}>{t("homepage_filter_electronics")}</button>
      <button onClick={filterWomensClothing}>{t("homepage_filter_womens_clothing")}</button>
      <button onClick={filterMensClothing}>{t("homepage_filter_mens_clothing")}</button>
      <button onClick={filterJewelery}>{t("homepage_filter_jewelery")}</button>

      <br />
      {products.map((product) => 
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
