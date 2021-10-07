import axios from 'axios';
import properties from './properties';


//Roberto structure, to be adapted
class genericServices {
    constructor() {
        // inizializzo axios in una variabile globale
        this.instance = axios.create({
            baseURL: properties.BASE_URL, // base url del server
            timeout: 1000, //MS
        });
    }

    // funzione per modificare header del server
    getHeaderWithToken = (auth, lang) => {
        let headers = {
            Accept: "*/*",
            "Content-type": "application/json; charset=UTF-8",
        };
        if (!!lang) {
            headers["AcceptedLang"] = lang;
        }
        if (!!auth) {
            headers["AuthToken"] = auth;
        }

        return headers

    }

    // chiamo api in get
    apiGet = async (path) => {
        //this.instance.defaults.headers = this.getHeaderWithToken(auth, lang)
        return await this.instance.get(path)
            .then((response) => {
                // handle success
                if (response.status === 200)
                    return response.data
            })
            .catch((error) => {
                // handle error
                return error
            })
    }

    apiPost = (path, obj) => {
        // fare post
    }

    apiPut = (path, obj) => {
        // fare put
    }

    apiDelete = (path) => {
        // fare post
    }



}

export default genericServices;