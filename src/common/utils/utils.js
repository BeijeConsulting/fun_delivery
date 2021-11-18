/* Utilis contiene le funzioni comuni di controllo, utili al progetto */

const utils = {
    validateEmail: (params) => { return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(params) },
    validatePassword: (params) => { return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_.,\-+*!#@?])([a-zA-Z0-9_.,\-+*!#@?]{6,25})$/i.test(params) },
    validateName: (params) => { return /^([ A-Za-z])*/.test(params) },
    validateCap: (params) => { return /^\d\d\d\d\d$/i.test(params) },
    validateVAT: (params) => { return /^\d\d\d\d\d\d\d\d\d\d\d$/i.test(params) },
    validatePhone: (params) => { return /^\d\d\d\d\d\d\d\d\d\d$/i.test(params) },
    validateCity: (params) => { return /^[a-zA-Z',.\s-]{2,25}$/i.test(params) },
    validateAddress: (params) => { return /^[a-zA-Z]([a-zA-Z-]+\s)+\d{1,4}$/i.test(params) },
    checkNumber: (params) => { return /(\d+(?:\.\d+)?)/.test(params) },
    handleCallbackGoBack: (params) => {params.goBack()},
    snakeCaseString:(str) => {
        return str && str.match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('.');
    },
    getBase64: file => {
        return new Promise(resolve => {
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();
            // Convert the file to base64 text
            reader.readAsDataURL(file);
            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    }
}

export default utils