import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateSelectedStyle } from '../actions/actions.js';
import {getNewStyles} from '../actions/actions.js'

var StyleSelector = (props) => {
  const styles = useSelector(state => state.updateStyleReducer.styleList)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)
  useEffect(()=>{
    dispatch(getNewStyles(product.id))
  }, [product])
  const dispatch = useDispatch()
  const thumbs = styles.map(style => {
    let thumb = style.photos[0].thumbnail_url
    return (
      <img
        className="img-thumbnail"
        key={style.style_id}
        name={style.style_id}
        src={thumb}
        alt="aThumb"
        style={{height: '5vh'}}
        onClick={(e) => {
          dispatch(UpdateSelectedStyle(e.target.name))
        }}
        />
    )
  })
  return (
    <section id="styleSelector" className="flex-row">
      {thumbs}
    </section>
  )
}

export default StyleSelector;