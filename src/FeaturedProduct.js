import { useGlobalProductContext } from "./context/ProductContext"
import Product from "./Product";

const FeaturedProduct = () => {
  const {isLoading, featuredProducts} = useGlobalProductContext();
  if(isLoading) {
    return <div>....Loading</div>
  }
  return (
    <div>
      {featuredProducts.map((curElem) => {
        return <Product key = {curElem.id} {...curElem} />;
      })}
    </div>
  )
}

export default FeaturedProduct
