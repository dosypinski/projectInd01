export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }
};

export const select = {
  templateOf: {
    product: '#template-product-widget',
  },
};

export const classNames = {};

export const templates  = {
  product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
};