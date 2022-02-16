import { settings, select } from './settings.js';
import Product from './components/Product.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
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

  initAbout: function(){
    const thisApp = this;

    thisApp.about = document.querySelector(select.containerOf.about);

    new About(thisApp.about);
  },

  initContact: function(){
    const thisApp = this;

    thisApp.contact = document.querySelector(select.containerOf.contact);

    new Contact(thisApp.contact);
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
    thisApp.initAbout();
    thisApp.initContact();
  },
};

app.init();