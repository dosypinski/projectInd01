import utils from '../utils.js';
import {templates, select} from '../settings.js';

class Contact {
  constructor(id, data){
    const thisContact = this;
  
    thisContact.id = id;
    thisContact.data = data;
  
    thisContact.render();
  }
  
  render(){
    const thisContact = this;
  
    const generatedHTML = templates.contact(thisContact.data);
    thisContact.element = utils.createDOMFromHTML(generatedHTML);
    console.log('Contact', thisContact.element);
    const aboutContainer = document.querySelector(select.containerOf.contact);
    aboutContainer.append(thisContact.element); 
  }
}

export default Contact;