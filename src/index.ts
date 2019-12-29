
import { pi } from 'mathjs'
import { of } from 'rxjs'

console.log("hello world");

const source = of(1, 2, 3, 4, 5);

const elt: HTMLElement = document.querySelector('toto')
elt.innerHTML = (pi + 1).toString();

elt.addEventListener("click", () => {
    alert('rrr')
    const subscribe = source.subscribe(val => console.log(val));
})

