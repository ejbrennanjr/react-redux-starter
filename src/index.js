import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import dataJson from '../data/data.json';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var br = document.createElement('br');
    
  // Add the image to our existing div
  var myIcon = new Image();
  myIcon.src = Icon;


  // Lodash, now imported by this script
  
  element.innerHTML = _.join(['Hello', dataJson.name], ' ');
  btn.innerHTML = 'Click me and check the console';
  //btn.onclick = printMe;
  element.appendChild(br);
  element.appendChild(btn);
  element.classList.add('hello');
  element.appendChild(myIcon);

  // // Note that because a network request is involved, some indication
  // // of loading would need to be shown in a production level site/app
  // btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default;
  //   print();
  // });

  return element;
}

document.body.appendChild(component());



