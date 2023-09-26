export const clearLocalStorage = () => {
    localStorage.clear();
}

export const changeLocalStorage = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
}

export const getLocalStorage = (nameField) => {
    return JSON.parse(localStorage.getItem(nameField));
}