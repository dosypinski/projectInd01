
export const select = {
  templateOf: {
    product: '#template-products',
    contactWidget: '#template-contact-widget',
    aboutWidget: '#template-about-widget',
  },
  containerOf: {
    product: '.product-wrapper',
    about: '.about-page',
    contact: '.contact-page',
  },
  nav: {
    links: '.navbar-links a',
  },
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
  contact: Handlebars.compile(document.querySelector(select.templateOf.contactWidget).innerHTML),
  about: Handlebars.compile(document.querySelector(select.templateOf.aboutWidget).innerHTML),
};