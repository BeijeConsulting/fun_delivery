import axios from "axios";
import properties from "./properties";
import { ApplicationStore } from "../../ApplicationStore";
import { initToken, setToken } from "../redux/duck/tokenDuck";
import { createBrowserHistory } from "history";
import { initRestaurantId } from "../redux/duck/restaurantIdDuck";
//Roberto structure, to be adapted
class genericServices {
    constructor() {
        // inizializzo axios in una variabile globale
        this.instance = axios.create({
            baseURL: properties.BASE_URL, // base url del server
            timeout: 1000, //MS
        });

        // Richiamo l'application store
        this.store = ApplicationStore;
        this.history = createBrowserHistory()
        
        // Response interceptor for API calls
        this.instance.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                // console.log("errorInterceptors,", error);

                const originalRequest = error.config;
                //console.log("originalRequest,", originalRequest);'
                originalRequest._retry = false
                if (error.response.status === 403 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const refresh_token = this.store.getState().refreshTokenDuck.refreshToken
                    if (refresh_token !== undefined) {
                        // Chiamata  per refresciare il token
                        try {
                            this.instance.defaults.headers = this.getHeaderWithToken();
                            const rs = await this.instance.post("/updateAuthToken", {
                                refreshToken: refresh_token
                            } );

                            if (rs.status === 200) {
                                this.store.dispatch(setToken(rs.data.token))
                                this.instance.defaults.headers = this.getHeaderWithToken(rs.data.token);
                                originalRequest.headers.Authorization = "Bearer " +  rs.data.token
                                return this.instance(originalRequest);
                            }
                            return false
                        } catch (_error) {
                            // Rest redux e vado alla login
                            this.store.dispatch(initToken())
                            this.store.dispatch(initRestaurantId())
                            this.history.push('/')
                            window.location.reload()
                            return Promise.reject(_error);
                        }
                    }
                }

                /*  if(error.response.status === 401){
                     console.log('error.response.data',error.response.data)
                     return error.response.data
                 } */

                return Promise.reject(error);
            }
        );
    }

    // funzione per modificare header del server
    getHeaderWithToken = (auth) => {
        let headers = {
            Accept: "*/*",
            "Content-type": "application/json; charset=UTF-8",
        };
        if (!!auth) {
            headers["Authorization"] = "Bearer " + auth;
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
            })
            .catch((error) => {
                return error.response.data
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
                return error.response.data
            });
    };

    // PUT (UPDATE)
    apiPUT = async (path, obj, token) => {
        this.instance.defaults.headers = this.getHeaderWithToken(token);
        return await this.instance.put(path, obj)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data
            });
    };

    // DELETE (DELETE)
    apiDELETE = async (path, token) => {
        this.instance.defaults.headers = this.getHeaderWithToken(token);
        return await this.instance.delete(path)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data
            });
    };
}

export default genericServices;
