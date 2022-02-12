import { settings } from './settings.js';
import Product from './components/Product.js';
const app = {

  initData: function() {
    const thisApp = this;
    
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;

        thisApp.initProduct();
      });
  },

  initProduct: function(){
    const thisApp = this;

    for (let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initProduct();
  },
};

app.init();