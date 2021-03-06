import React, {useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from '../../actions/ProductOverview/actions.js';

var AddToCart = (props) => {
  const skus = useSelector(state => state.updateStyleReducer.selectedStyle.skus)
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

  const dispatch = useDispatch();

  const [sizeSelect, setSize] = useState("Size");
  const [qtysList, makeQtyList] = useState([]);
  const [qtySelect, setQty] = useState(0);

  const skusElems = Object.keys(skus).map(sku =>
    <option
      key={sku}
      value={sku}>
        {skus[sku].size}
    </option>
  );

  useEffect(() => {
    let qtys = [];
    if (sizeSelect !== "Size") {
      for (var i=1; i<skus[sizeSelect].quantity+1; i++) {
        qtys.push(<option key={i} value={i}> {i} </option>)
      }
      // bug here. how to reset selectedqty and select menu to be the same?
      // setQty()
      makeQtyList(qtys)
    } else {
      qtys = [];
    }
  }, [sizeSelect])


  return (
    <section
      id="addToCart"
      style={{
        backgroundColor:"#4d8387",
        padding: '1em',
        borderRadius: '1em'}}>
      <div>{style.name} {product.category}</div>
      <div>{style.sale_price ? style.sale_price : style.original_price}</div>
      <div>{product.slogan}</div>
      <div> {product.description}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(addToCart(sizeSelect, qtySelect));
        } }>
      <select
        onChange={(e) => {
          e.preventDefault()
          setSize(e.target.value)
          }}
      name="sizeSelect">
        {skusElems}
      </select>
      <select
        name="qtySelect"
        onChange={(e) => {
          e.preventDefault()
          setQty(e.target.value)
          }}
          required>
        {qtysList.slice(0,15)}
      </select>
      <button type="submit">Add to Cart</button>
      </form>
    </section>
  )
}

export default AddToCart;