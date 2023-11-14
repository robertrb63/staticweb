import './App.css'
import ProductContainer from './components/ProductContainer'
import Product from './components/Product'
import data from './products.json'

const App = () => {
  return (
    <ProductContainer>
      
      {data.map( product=>
      <Product 
          key={product.name}
          name={product.name}
          discount={product.discount}
          oldPrice={product.oldPrice}
          newPrice={product.oldPrice-product.oldPrice*product.discount/100}
          
      /> )}
    <h2>El Fondo Gris esta al final del App</h2>
    </ProductContainer>
  )
}
export default App
