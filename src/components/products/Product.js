import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'

import { ModalButton } from '../buttons'
import UpdateProduct from '../forms/UpdateProduct'


class Product extends Component {
  render(){
    const {product} = this.props
    const DeleteProduct = () => (
      <RaisedButton label="Confirm Delete"
                    onClick={handleClick}
      />
    )
    const handleClick = async (e) => {
      e.preventDefault()
      await this.props.mutate()
      window.location.replace('/')
    }
    return(
      <Paper className='product'>
        <h2>{product.name}</h2>
        <img src={product.imgURL} alt={'Not Available'}/>
        <div>{product.price}</div>
        <p>{product.desc}</p>
        <ModalButton label="Update" display={<UpdateProduct product={product}/>}/>
        <ModalButton label="Delete" display={DeleteProduct()} color="secondary"/>
      </Paper>
    )
  }
}

const DELETE_PRODUCT_MUTATION = gql`
  mutation($id: ID!) {
    deleteProduct(
      id: $id
    ){
      id
    }
  }
`

export default graphql(DELETE_PRODUCT_MUTATION,
  {options: (props) => ({variables: {id: props.product.id}})}
)(Product)
