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

    // Response interceptor for API calls
    interceptorsResponse = () => {
        this.instance.interceptors.response.use((response) => {
            return response
        }, async function (error) {
            console.log('errorInterceptors,',error);
            const originalRequest = error.config;
            if (error.response.status === 403 && !originalRequest._retry) {
                originalRequest._retry = true;
                const access_token = await refreshAccessToken();
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
                return axiosApiInstance(originalRequest);
            }
            return Promise.reject(error);
        });
    }

    getLocalAccessToken = () => {
        const accessToken = localStorage.getItem("accessToken");
        return accessToken;
    }

    getLocalRefreshToken = () => {
        const refreshToken = localStorage.getItem("refreshToken");
        return refreshToken;
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
            headers["AuthToken"] = 'Bearer ' + auth;
        }
        return headers
    }


    //Chiamata API CRUD
    // GET (READ)
    apiGET = async (path) => {
       //  this.instance.defaults.headers = this.getHeaderWithToken(this.getLocalAccessToken(), 'it')
        return await this.instance.get(path)
            .then((response) => {
                if (response.status === 200) {
                    return response.data
                }
               // this.interceptorsResponse()
            })
            .catch((error) => {
                return error
            })
    }

    apiLOGIN = async(email, password) => {
        return await this.instance.post("/signin", {
            params: {
                email: email,
                password: password
            }
        })

        .then((response) => {
            if(response.status===200){
                return response
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    // POST (Create)
    apiPOST = async (path, obj) => {
        this.instance.defaults.headers = this.getHeaderWithToken('Token', 'it')
        return await this.instance.post(path, obj)
            .then((response) => {
                return response
            })
            .catch((error) => {
                return error
            })
    }


    // PUT (UPDATE)
    apiPUT = async (path, obj) => {
        return await this.instance.put(path, obj)
            .then((response) => {
                return response
            })
            .catch((error) => {
                return error
            })
    }

    // DELETE (DELETE)
    apiDELETE = async (path) => {
        return await this.instance.delete(path)
            .then((response) => {
                return response
            })
            .catch((error) => {
                return error
            })
    }
}
export default genericServices;