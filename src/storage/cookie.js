import { IS_LOGGED, NAME_EMAIL } from "../constants";

export const setCookies = (data, saveValue = false) => {
    let dateSave = createInterval(saveValue);
    document.cookie = `${NAME_EMAIL} = ${data}; expires=${dateSave.toUTCString()}`;
    document.cookie = `${IS_LOGGED} = true; expires=${dateSave.toUTCString()}`;

}

export const setValueLogout = () => {
    document.cookie = `${IS_LOGGED} = false; expires=${createInterval().toUTCString()}`;
}

const createInterval = (saveValue) => {
    let dateSave = new Date();
    dateSave.setHours(dateSave.getHours() + (saveValue ? 240 : 24));
    return dateSave;
}

export const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}