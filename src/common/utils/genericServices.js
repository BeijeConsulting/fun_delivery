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

    checkErrorStatus = (error) => {
        if (error.response.status === "403") {
            //Fare il refresh token
            return error.response.data;
        }
        if (error.response.status === "401") {
            //Email o password errati
            return error.response.data;
        }
    };

    getLocalAccessToken = () => {
        const accessToken = JSON.parse(localStorage.getItem("user"));
        return accessToken.token;
    };

    getLocalRefreshToken = () => {
        const refreshToken = localStorage.getItem("refreshToken");
        return refreshToken;
    };

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
    apiGET = async (path) => {
       // this.instance.defaults.headers = this.getHeaderWithToken(this.getLocalAccessToken())
        return await this.instance.get(path)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }
                // this.interceptorsResponse()
            })
            .catch((error) => {
                this.checkErrorStatus(error.response.status);
            });
    };

    // POST (Create)
    apiPOST = async (path, obj) => {
        if(path!=="/signin"){
            let token = this.getLocalAccessToken();
            this.instance.defaults.headers = this.getHeaderWithToken(token);
        }

        return await this.instance.post(path, obj)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch((error) => {
                this.checkErrorStatus(error.response.status);
            });
    };

    // PUT (UPDATE)
    apiPUT = async (path, obj) => {
        return await this.instance.put(path, obj)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                this.checkErrorStatus(error.response.status);
            });
    };

    // DELETE (DELETE)
    apiDELETE = async (path) => {
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
