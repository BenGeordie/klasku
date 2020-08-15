export const tryNull = (toTry) => {
    try {
        return toTry();
    } catch (err) {
        // console.log(err);
        return null;
    }
};

export const tryDefault = (toTry, def) => {
    try {
        return toTry()
    } catch (err) {
        // console.log(err);
        return def;
    }
};

export const get = (nestedObj, path, defaultValue) => {
    if (path === "") return nestedObj;
    let pathArr = path.split('.');
    const getValue = pathArr.reduce((obj, key) =>
        (obj && obj[key] !== undefined) ? obj[key] : undefined, nestedObj); // used to be !== 'undefined'
    return (getValue === undefined || getValue === null) && defaultValue !== undefined ? defaultValue : getValue;
};