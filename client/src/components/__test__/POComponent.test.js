// To be tested Imports
import React from 'react'
import newProductReducer from '../../reducers/ProductOverview/getNewProductReducer'
import styleReducer from '../../reducers/StyleSelector/styleReducer'

// Testing Library Imports
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// Mock Service Worker Imports
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// const server = setupServer(
//   // capture "GET /greeting" requests
//   rest.get('/greeting', (req, res, ctx) => {
//     // respond using a mocked JSON body
//     return res(ctx.json({greeting: 'hello there'}))
//   }),
// )
describe('Product Overview component reducers suite', () => {
  test('newProduct Reducer should return initial state', () => {
    const initState = { "lastProductGet": [{ "campus": "hr-lax", "category": "Jackets", "created_at": "2021-02-23T03:29:57.827Z", "default_price": "140.00", "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.", "id": 16056, "name": "Camo Onesie", "slogan": "Blend in to your crowd", "updated_at": "2021-02-23T03:29:57.827Z" }, { "campus": "hr-lax", "category": "Accessories", "created_at": "2021-02-23T03:29:57.827Z", "default_price": "69.00", "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.", "id": 16057, "name": "Bright Future Sunglasses", "slogan": "You've got to wear shades", "updated_at": "2021-02-23T03:29:57.827Z" }, { "campus": "hr-lax", "category": "Pants", "created_at": "2021-02-23T03:29:57.827Z", "default_price": "40.00", "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.", "id": 16058, "name": "Morning Joggers", "slogan": "Make yourself a morning person", "updated_at": "2021-02-23T03:29:57.827Z" }, { "campus": "hr-lax", "category": "Pants", "created_at": "2021-02-23T03:29:57.827Z", "default_price": "65.00", "description": "I'll tell you how great they are after I nap for a bit.", "id": 16059, "name": "Slacker's Slacks", "slogan": "Comfortable for everything, or nothing", "updated_at": "2021-02-23T03:29:57.827Z" }, { "campus": "hr-lax", "category": "Kicks", "created_at": "2021-02-23T03:29:57.827Z", "default_price": "99.00", "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl", "id": 16060, "name": "Heir Force Ones", "slogan": "A sneaker dynasty", "updated_at": "2021-02-23T03:29:57.827Z" }], "selectedProduct": {} }
    expect(newProductReducer(undefined, {})).toEqual(initState)
  })

  test('Style reducer should return initial State with selectedStyle and styleList keys', () => {

    expect(Object.keys(styleReducer(undefined, {}))).toEqual(['styleList','selectedStyle' ])
  })

  test("Style Reducer should update state with new styleList Array when UPDATE_STYLE_LIST type action is used", () => {
    const mockAction = {
      type: "UPDATE_STYLE_LIST",
      payload: {
        style_id: 1000
      }
    }
    expect(styleReducer(undefined, mockAction)).toBeInstanceOf(Object)
  })
})
