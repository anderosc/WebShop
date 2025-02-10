import { useTranslation } from 'react-i18next';


function SortButtons(props) {
    const { t } = useTranslation();
    const sortAZ = () => {
        props.setProducts(props.products.toSorted((a, b) => a.title.localeCompare(b.title)));
      };
      const sortZA = () => {
        props.setProducts(props.products.toSorted((a, b) => b.title.localeCompare(a.title)));
      };
      const sortPriceHighToLow = () => {
        props.setProducts(props.products.toSorted((a, b) => b.price - a.price));
      };
      const sortPriceLowToHigh = () => {
        props.setProducts(props.products.toSorted((a, b) => a.price - b.price));
      };
      const sortRatingHTL = () => {
        props.setProducts(props.products.toSorted((a, b) => b.rating.rate - a.rating.rate));
      };
      const sortRatingLTH = () => {
        props.setProducts(props.products.toSorted((a, b) => a.rating.rate - b.rating.rate));
      };
  return (
    <div>
      <button onClick={sortAZ}>{t("homepage_sort_az")}</button> 
      <button onClick={sortZA}>{t("homepage_sort_za")}</button>
      <button onClick={sortPriceHighToLow}>{t("homepage_sort_price_desc")}</button>
      <button onClick={sortPriceLowToHigh}>{t("homepage_sort_price_asc")}</button>
      <button onClick={sortRatingHTL}>{t("homepage_sort_rating_desc")}</button>
      <button onClick={sortRatingLTH}>{t("homepage_sort_rating_asc")}</button>
    </div>
  )
}

export default SortButtons