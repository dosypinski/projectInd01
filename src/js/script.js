import { settings, select, classNames } from './settings.js';
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

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const ifFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == ifFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;
    
    /* add class "active" to matching pages, remove from non-matching*/
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class "active" to matching links, remove from non-matching*/
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  init: function() {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    thisApp.initProduct();
    thisApp.initAbout();
    thisApp.initContact();
  },
};

app.init();