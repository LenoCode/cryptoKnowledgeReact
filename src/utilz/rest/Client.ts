import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {cryptoEnvironment} from "../../environment/Env";



export interface Url{
    name:string,
    path:string,
}

export interface EndPoints{
    urls:Array<Url>
}



export class HttpClient<E>{
    public rootPath:string = ""
    public name:string = ""
    private axios:AxiosInstance|undefined = undefined
    // @ts-ignore
    private endPointFunctions:E = undefined


    constructor(name:string,rootPath:string,endPoints:EndPoints) {
        this.name = name
        this.rootPath = rootPath;
        this.axios = axios.create({
                baseURL:rootPath,
            }
        );
        this.initEndPoints(endPoints)
    }

    initEndPoints(endPoints: EndPoints) {
        // @ts-ignore
        this.endPointFunctions = {};

        endPoints.urls.forEach((value) => (
                // @ts-ignore
                this.endPointFunctions[value.name] = {

                    get:(callback:Function,errorCallback:Function,params:Object)=>{
                        // @ts-ignore
                        this.axios.get(value.path,{params:params}).then((response)=>{
                            if (response.status === 200) {
                                callback(response.data)
                            }else{
                                errorCallback({"responseStatus":response.status})
                            }
                        }).catch((err)=>{
                            errorCallback(err);
                        })
                    },

                    post:(callback:Function,errorCallback:Function,json:object)=>{
                        // @ts-ignore
                        this.axios.post(value.path,json).then((response)=>{
                            callback(response.data)
                        }).catch((err)=>{
                            errorCallback(err);
                        })
                    }
                }
            )
        );
    }


    getEndPoints():E{
        return this.endPointFunctions
    }

    setToken(token:string) {
        // @ts-ignore
        this.axios.interceptors.request.use((config)=>{
            config.headers.Authorization = `Token ${token}`
            return config;
        })


    }
}