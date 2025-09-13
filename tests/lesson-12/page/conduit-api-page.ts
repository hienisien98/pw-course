import { APIRequestContext } from "@playwright/test";

export class ConduitAPI{
    request: APIRequestContext;
    bareURL: string = "https://conduit-api.bondaracademy.com/api";

    constructor(request: APIRequestContext){
        this.request = request;
    }

    //Sign up
    async signUp(email:string, password:string, username:string){
        const url = `${this.bareURL}/users`;
        const response = await this.request.post(url, {
            data: {
                user: {
                    "email": email,
                    "password": password,
                    "username": username
                }
            }
        })
        return response;
    }

    //Login
    async login(email:string, password:string){
        const url = `${this.bareURL}/users/login`;
        const response = await this.request.post(url, {
            data: {
                user: {
                    "email": email,
                    "password": password,
                }
            }
        })
        return response;
    }

    //Create Article
    async createAticle(token: string, {title, description, bodyCreate, tagList} : {title: string, description: string, bodyCreate: string, tagList: string[]}){
        const url = `${this.bareURL}/articles`;
        const response = await this.request.post(url, {
            headers: {
                authorization: `Token ${token}`
            },
            data:{
                "article":{
                    "title": title,
                    "description": description,
                    "body": bodyCreate,
                    "tagList": tagList
                }
            }
        })
        return response;
    }

}