import { APIRequestContext } from "@playwright/test";
import { ConduitAPI } from "./conduit-api-page";

export class ArticleAPI extends ConduitAPI{
    bareURL: string = "https://conduit-api.bondaracademy.com/api/articles";

    constructor(request: APIRequestContext){
        super(request);
    }

    //Comment
    async addComment(token: string, bodyComment: string, slug: string){
        const url = `${this.bareURL}/${slug}/comments`;
        let cmtIDList: string[] = [];
        for (let i = 1; i <= 5; i++){
            bodyComment = `Comment ${i}`;
            const response = await this.request.post(url, {
                headers:{
                    authorization: `Token ${token}`
                },
                data: {
                    "comment":{
                        "body": bodyComment,
                    }
                }
            });
            const resBody = await response.json();
            const commentBody = resBody.comment.body;

            if(commentBody == 'Comment 2' || commentBody == 'Comment 5'){
                cmtIDList.push(resBody.comment.id);
            }
            
        }
        return cmtIDList;
        
        
    }

    //Delete Comment
    async deleteComment(token:string, slug:string, cmtIDList: string[]){
        for(let i = 0; i < cmtIDList.length; i++){
            const url = `${this.bareURL}/${slug}/comments/${cmtIDList[i]}`
            const response = await this.request.delete(url, {
                headers:{
                    authorization: `Token ${token}`
                }
            })
            return response;
        }
       
    }

    //Delete Article
    async deleteArticle(token: string, slug:string){
        const url = `${this.bareURL}/${slug}`;
        const response = await this.request.delete(url, {
            headers:{
                authorization: `Token ${token}`
            }
        })
        return response;
    }

}