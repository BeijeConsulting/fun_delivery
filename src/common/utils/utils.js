/* Utilis contiene le funzioni comuni di controllo, utili al progetto */

const Utils = {
    validateEmail: (params) => { return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(params) },
    validatePassword: (params) => { return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_.,\-+*!#@?])([a-zA-Z0-9_.,\-+*!#@?]{6,25})$/i.test(params) },
    checkPassword: (passw, confirmPassw) => {return passw === confirmPassw},
    validateName: (params) => { return !/^.*\d.*$/i.test(params) },
    validateCap: (params) => { return /^\d\d\d\d\d$/i.test(params) },
    validateVAT: (params) => { return /^\d\d\d\d\d\d\d\d\d\d\d$/i.test(params) },
    validatePhone: (params) => { return /^\d\d\d\d\d\d\d\d\d\d$/i.test(params)},

}

export default Utils