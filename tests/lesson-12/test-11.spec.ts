import  {expect, test } from '@playwright/test';
import { ConduitAPI } from './page/conduit-api-page';
import { ArticleAPI } from './page/article-api-page';

let email: string = 'hienishien09@gmail.com';
let password: string = '123456789';
let username: string = 'hienishien09';
let token: string = '';
let slug: string = '';
let title: string = 'API in Playwright 0';
let description: string = 'How to use Playwright to create article';
let bodyCreate: string = 'Hello';
let bodyComment: string = '';
let tagList: string[] = ['Playwright Viet Nam', 'pw', 'pw-k13'];
let cmtIDList: string[] = [];

test.describe('Test 1: Sign Up', async() => {
    test('Test 1: Sign Up', async ({request}) => {
        let conduitAPI = new ConduitAPI(request);

        const res = await conduitAPI.signUp(email, password, username);

        expect(res.status()).toBe(201);

        const resBody = await res.json();
        const actualEmail: string = resBody.user.email;
        const actualUsername: string = resBody.user.username;

        expect(actualEmail).toBe(email);
        expect(actualUsername).toBe(username);
    })
})

test.describe('Test 2+3+4+5', async() => {
    
    test('Test 2-a: Đăng nhập tài khoản đã tạo', async ({ request }) => {
        let conduitAPI = new ConduitAPI(request);

        const res = await conduitAPI.login(email, password);

        expect(res.status()).toBe(200);

        const resBody = await res.json();
        token = resBody.user.token;
    })

    test("Test 2-b: Tạo Article", async ({ request }) => {
        let conduitAPI = new ConduitAPI(request);

        const res = await conduitAPI.createAticle(token, {title, description, bodyCreate, tagList});
        
        expect(res.status()).toBe(201);

        const resBody = await res.json();
        slug = resBody.article.slug;
        
    })

    test("Test 3: Tạo 5 comment", async ({ request }) => {
        let articleAPI = new ArticleAPI(request);

        cmtIDList = await articleAPI.addComment(token, bodyComment, slug);
        // Chổ này mình viết expect như nào ạ ? do mình return cái list chứ ko phải response

    })

    test("Test 4: Xoá comment 2 và comment 5", async ({request}) => {
        let articleAPI = new ArticleAPI(request);
        const res = await articleAPI.deleteComment(token, slug, cmtIDList);

        expect(res?.status()).toBe(200);
    })

    test("Test 5: Xoá article", async ({request}) => {
        let articleAPI = new ArticleAPI(request);
        const res = await articleAPI.deleteArticle(token, slug);

        expect(res.status()).toBe(204);
    })

})