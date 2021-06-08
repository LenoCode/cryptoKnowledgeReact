import axios, {AxiosInstance} from 'axios';



class HttpClient{
    public rootPath:string = ""
    public name:string = ""

    constructor(name:string,rootPath:string) {
        this.name = name
        this.rootPath = rootPath
    }
}