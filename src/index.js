import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

function component() {
  const element = document.getElementById('root');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());