import utils from '../utils.js';
import {templates, select} from '../settings.js';

class Product {
  constructor(id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.render();
  }

  render(){
    const thisProduct = this;

    const generatedHTML = templates.product(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    console.log('product', thisProduct.element);
    const productContainer = document.querySelector(select.containerOf.product);
    productContainer.append(thisProduct.element); 
  }
}

export default Product;