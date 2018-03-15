import React, { Component } from 'react'
import { ModalButton } from '../components/buttons'

import AllProducts from '../components/products/AllProducts'
import CreateProduct from '../components/forms/CreateProduct'



export default class extends Component {
  render() {
    return (
      <div>
        <ModalButton label="Add Product" display={<CreateProduct/>}/>
        <AllProducts/>
      </div>
    );
  }
}
