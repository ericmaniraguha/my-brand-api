import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import Article from "./../src/models/article.js"

<<<<<<< HEAD
=======
<<<<<<< HEAD
// const all = Article.find()
// let articleId=all[0]._id;
=======
>>>>>>> a4f5e006f73fcd6f329f1a04f2c16abe9f98ace6
let articleId

const getArticleId= async ()=>{
    const all = await Article.find()
    let id=all[0]._id;
    return id
}

(async ()=>{
    articleId=await getArticleId()
})()
<<<<<<< HEAD
=======
>>>>>>> ft-my-brand-api-test-3
>>>>>>> a4f5e006f73fcd6f329f1a04f2c16abe9f98ace6

chai.use(chaiHttp)
describe("ARTICLE END-POINT TESTING", () => {
    it("Should retrieve the articles", (done) => {
        chai.request(app).get("/api/v1/articles/")
        .send()
        .end((err,res)=>{
            expect(res).to.have.property("status")
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
          done()
        })
        
    })
    it("Should not retrieve the articles",  (done) => {
        chai.request(app).get("/api/v1/aritcle/")
        .send()
        .end((err,res)=>{
        expect(res).to.have.status([404])
        done()
    })
    })
})

<<<<<<< HEAD
=======
<<<<<<< HEAD
// it("Should  retrieve the article by id", (done) => {
//     chai
//         .request(app)
//         .get(`/api/v1/articles/${articleId}`)
//         .send()
//         .end((err, res) => {
//             expect(res).to.have.status([200]);
//             expect(res).to.have.property("status");
//             expect(res.body).to.have.property("message");
//             expect(res.body).to.have.property("data");
//             done();
//         });
// });
=======
>>>>>>> a4f5e006f73fcd6f329f1a04f2c16abe9f98ace6
it("Should  retrieve the article by id", (done) => {
    chai
        .request(app)
        .get(`/api/v1/articles/${articleId}`)
        .send()
        .end((err, res) => {
            expect(res).to.have.status([200]);
            expect(res).to.have.property("status");
            expect(res.body).to.have.property("message");
            expect(res.body).to.have.property("data");
            done();
        });
});
<<<<<<< HEAD
=======
>>>>>>> ft-my-brand-api-test-3
>>>>>>> a4f5e006f73fcd6f329f1a04f2c16abe9f98ace6

    // DELETE AN ARTICLE
    // it("Should  not delete the article by id", (done) => {
    //     chai
    //         .request(app)
    //         .delete(`/api/v1/articles/${articleId}`)
    //         .send()
    //         .end((err, res) => {
    //             expect(res).to.have.status([401]);
    //             done();
    //         });
    // });
