import { checkPalindrome } from "./checkPalindrome.js";
import { styles } from "./styles.js";

let items = {
    input: document.createElement("input"),
    button: document.createElement("button"),
    result: document.createElement("div")
}

Object.assign(document.body.style, styles.window);
Object.assign(items.input.style, styles.input);
Object.assign(items.button.style, styles.button);
items.result.classList.add(...styles.result.split(' '));

items.button.addEventListener('click', () => checkPalindrome(items));

items.input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    checkPalindrome(items);
    }
});

document.body.append(...Object.values(items));