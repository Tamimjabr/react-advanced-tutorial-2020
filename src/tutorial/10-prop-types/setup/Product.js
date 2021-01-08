import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({name, image , price}) => {
  //* if image object doesn't exist for one of the products so everything will not work when using     <img src={image.url} alt={name}/>
  //* we solve it by checking if this property "image" in this case exist or not
  return <article className='product'>
    <h4>{name}</h4>
    <img src={image?image.url:defaultImage} alt={name}/>
    <p>${price || 3.99}</p>
  </article>;
};
// ! this works perfekt     <img src={image?image.url:defaultImage} alt={name}/>

//* the first propTypes p is small
//*it tell me in the console about the missing property
Product.propTypes={
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}

// //* set default values
// Product.defaultProps={
//   name:'default name',
//   price:3.99,
//   image:defaultImage
// }





export default Product;
