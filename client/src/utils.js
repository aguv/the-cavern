const utils = {}


// esta es una funcion que chequea que en un objeto no haya keys vacios
utils.checkEmptyFields = o => Object.keys(o).every(x=> !!o[x]);

//
utils.samePasswords = (pass, pass2) => pass === pass2; 

//
utils.validPasswordLength = pass => pass.length > 7;

//
utils.handleAlert = (title, message, color, fn) => {
    fn({show: true, title, message, color});
    setTimeout(() => fn({show: false, title: '', message: '', color: ''}), 4000);
}

export default utils;


// utils.checkEmptyFields = obj => { for(let key in obj) if(!obj[key].trim()) return false }

// Object.keys(o).every(x=>o[x] !== undefined)

// Object.keys(o).every(x=>!!o[x])