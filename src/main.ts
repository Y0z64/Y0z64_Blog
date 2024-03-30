import './style.css'

import { setupCounter } from './counter.ts'

// HTML structure
const appDiv = document.getElementById('app');
const content = document.createElement('div');

appDiv?.appendChild(content);

// Content


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
