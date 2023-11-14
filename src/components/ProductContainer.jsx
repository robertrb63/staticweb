import './StyleProductContainer.css'

const ProductContainer = (props) => {
  return (
    <section className="products__section">
        <h2 className="products__title">AQUI VAN LOS PRODUCTOS TOTALES desde productContainer.jsx</h2>
        <div className="products__container">
        {props.children}
        </div>
    </section>    
  )
}
export default ProductContainer
