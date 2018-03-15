import React, {Component} from 'react'
import Paper from 'material-ui/Paper'


export default class extends Component {
  render(){
    const {product} = this.props
    return(
      <Paper className='product'>
        <img src={product.imgURL} alt={'Not Available'}/>
        <section>
          <h2>{product.name}</h2>
          <div>{product.price}</div>
          <p>{product.desc}</p>
        </section>
      </Paper>
    )
  }
}
