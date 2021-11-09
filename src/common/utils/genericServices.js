import axios from "axios";
import properties from "./properties";

//Roberto structure, to be adapted
class genericServices {
    constructor() {
        // inizializzo axios in una variabile globale
        this.instance = axios.create({
            baseURL: properties.BASE_URL, // base url del server
            timeout: 1000, //MS
        });

        //Si aspetta la funzione per il refresh token
        // Response interceptor for API calls - Waiting for Ivo
        // this.instance.interceptors.response.use(
        //     (response) => {
        //         return response;
        //     },
        //     async function (error) {
        //         console.log("errorInterceptors,", error);
        //         const originalRequest = error.config;
        //         if (error.response.status === 403 && !originalRequest._retry) {
        //             originalRequest._retry = true;
        //             const access_token = await this.refreshAccessToken();
        //             axios.defaults.headers.common["Authorization"] =
        //                 "Bearer " + access_token;
        //             return axiosApiInstance(originalRequest);
        //         }
        //         return Promise.reject(error);
        //     }
        // );
    }

    checkErrorStatus = (errorResponse) => {
        if (errorResponse.status === 403) {
            //Fare il refresh token
            return errorResponse.data;
        }
        if (errorResponse.status === 401) {
            //Email o password errati
            console.log("Sto passando: ", errorResponse.data)
            return errorResponse.data;
        }
    };

    getLocalAccessToken = () => {
        const accessToken = JSON.parse(localStorage.getItem("user"));
        return accessToken.token;
    };

    //Si aspetta la funzione per il refresh token
    // getLocalRefreshToken = () => {
    //     const refreshToken = localStorage.getItem("refreshToken");
    //     return refreshToken;
    // };

    // funzione per modificare header del server
    // getHeaderWithToken = (auth, lang) => {
    getHeaderWithToken = (auth) => {

        let headers = {
            Accept: "*/*",
            "Content-type": "application/json; charset=UTF-8",
        };
        // if (!!lang) {
        //     headers["AcceptedLang"] = lang;
        // }
        if (!!auth) {
            headers["AuthToken"] = "Bearer " + auth;
        }
        return headers;
    };

    //Chiamata API CRUD
    // GET (READ)
    apiGET = async (path, token) => {
        this.instance.defaults.headers = this.getHeaderWithToken(token);
        return await this.instance.get(path)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }
                // this.interceptorsResponse()
            })
            .catch((error) => {
                this.checkErrorStatus(error.response);
            });
    };

    // POST (Create)
    apiPOST = async (path, obj, token = null) => {
        //richiamo duck o parametro token
        this.instance.defaults.headers = this.getHeaderWithToken(token);
        return await this.instance.post(path, obj)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch((error) => {
                console.log("error apiPost: ", error.response)
                this.checkErrorStatus(error.response);
            });
    };

    // PUT (UPDATE)
    apiPUT = async (path, obj, token) => {
        this.instance.defaults.headers = this.getHeaderWithToken(token);
        return await this.instance.put(path, obj)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                this.checkErrorStatus(error.response.status);
            });
    };

    // DELETE (DELETE)
    apiDELETE = async (path, token) => {
        this.instance.defaults.headers = this.getHeaderWithToken(token);
        return await this.instance.delete(path)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                this.checkErrorStatus(error.response.status);
            });
    };
}
export default genericServices;
