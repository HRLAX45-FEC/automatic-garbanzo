// Module Library imports
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { getNewProduct } from '../actions/ProductOverview/actions.js'

// Import Store Here
import store from '../store';
// Our Custom Modules
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RatingsReviews from './R&R/RatingsReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';

var App = () => {

  useEffect(() => {
    store.dispatch(getNewProduct('16058'),
    [])
  })

  return (
    // Provider wraps Sub components to provide them access to the store
    <Provider store={store} >
      <div id="AppContainer" className="container-fluid">
        <ProductOverview />
        <QuestionsAnswers/>
        <RatingsReviews />
      </div>
    </Provider>
  )
}

export default App;