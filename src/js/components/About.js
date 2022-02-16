import utils from '../utils.js';
import {templates, select} from '../settings.js';

class About {
  constructor(id, data){
    const thisAbout = this;

    thisAbout.id = id;
    thisAbout.data = data;

    thisAbout.render();
  }

  render(){
    const thisAbout = this;

    const generatedHTML = templates.about(thisAbout.data);
    thisAbout.element = utils.createDOMFromHTML(generatedHTML);
    console.log('about', thisAbout.element);
    const aboutContainer = document.querySelector(select.containerOf.about);
    aboutContainer.append(thisAbout.element); 
  }
}

export default About;