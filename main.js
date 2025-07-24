import { checkPalindrome } from "./checkPalindrome.js";
import { styles } from "./styles.js";
import { createElementWithClasses } from "./createElementWithClasses.js";

document.body.classList.add(...styles.window.split(' '));

const container = createElementWithClasses('div', styles.container);
const items = {
    input: createElementWithClasses('input', styles.input),
    button: createElementWithClasses('button', styles.button),
    result: createElementWithClasses('result', styles.result)
}

items.button.addEventListener('click', () => checkPalindrome(items));

items.input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    checkPalindrome(items);
    }
});

container.append(...Object.values(items));
document.body.append(container);
