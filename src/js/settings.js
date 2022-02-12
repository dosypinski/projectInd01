
export const select = {
  templateOf: {
    product: '#template-products',
  },
  containerOf: {
    product: '.product-wrapper',
  }
};

export const classNames = {};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }
};

export const templates  = {
  product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
};