// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter!!!</h1>`;

const names = [];
const newNames = [...names, 'asdf'];
console.log({names, newNames}) ;