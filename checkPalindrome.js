export function checkPalindrome(items) {
    const original = items.input.value.trim();
    if (original === '') {
        alert('Please input a value');
    } else {
        const cleaned = cleanString(items.input.value);
        const reversed = cleaned.split('').reverse().join('');
        if (reversed === cleaned) {
        items.result.innerText = `"${items.input.value}" is a palindrome.`;
        } else {
            items.result.innerText = `"${items.input.value}" is not a palindrome.`;
        }
    }
}

const cleanString = (str) => {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
}