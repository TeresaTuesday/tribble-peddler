import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Product from './Product'

class AllProducts extends Component {
  
  render(){
    
    const {allProducts} = this.props.data
    
    return (!this.props.loading && allProducts ) ? (
      <section className='list'>
        {allProducts.map(product => <Product cartView={false} product={product} key={product.id} />)}
      </section>
    ) : <div>loading</div>
  }
}

const ALL_PRODUCTS_QUERY = gql`
  query{
    allProducts {
      id
      name
      imgURL
      desc
      price
    }
  }
`

export default graphql(ALL_PRODUCTS_QUERY)(AllProducts)
