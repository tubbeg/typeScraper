//import jsdom from "jsdom";
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;
import fetch from "node-fetch";

let mystring:string = "45";
console.log(mystring);

async function getPage(){
    const response = await fetch('https://google.se');
    const text = await response.text();
    console.log(text);
    const dom = await new JSDOM(text);
    console.log(dom.window.document.querySelector("h1"));
}

getPage();