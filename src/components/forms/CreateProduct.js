import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/CreateProduct.css'

class CreateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      desc: '',
      imgURL: ''
    }
  }
  
  
  render () {
    const handleSubmit = async (e) => {
      e.preventDefault()
      await this.props.mutate({
        variables: {
          name: this.state.name,
          price: this.state.price,
          desc: this.state.desc,
          imgURL: this.state.imgURL,
        }
      })
      window.location.replace('/')
    }
    
       return(
         <form className="flexBox"
               onSubmit={handleSubmit}
         >
        <h3>Create Product</h3>
        <TextField floatingLabelText="Name"
                   onChange={e => this.setState({name: e.target.value})}
        />
        <TextField floatingLabelText="Price"
                   onChange={e => this.setState({price: e.target.value})}
                   type="number"
                   min="0.00" step="0.01" max="30"
        />
        <TextField floatingLabelText="Description"
                   onChange={e => this.setState({desc: e.target.value})}
        />
        <TextField floatingLabelText="Image-URL"
                   onChange={e => this.setState({imgURL: e.target.value})}
        />
        
        
        <RaisedButton label="Create"
                      type="submit"
        />
      </form>
    );
  }
}


const CREATE_PRODUCT_MUTATION = gql`
  mutation($name:String!, $price:Float!, $desc:String!, $imgURL:String){
    createProduct(
      name: $name,
      price: $price,
      desc: $desc,
      imgURL: $imgURL
    ){
      id
    }
  }
`
export default graphql(CREATE_PRODUCT_MUTATION)(CreateProduct)
