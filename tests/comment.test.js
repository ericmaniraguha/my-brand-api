<<<<<<< HEAD
=======
<<<<<<< HEAD
// import chai, { expect } from 'chai'
// import chaiHttp from 'chai-http'
// import app from '../src/app.js'
// import 'dotenv/config';
// import {comment} from "./dummyData.js"
// import Article from "./../src/models/article.js"

// const all = await Article.find()
// let articleId=all[0]._id;


// chai.use(chaiHttp)
// describe("COMMENT END-POINT TESTING", () => {

//      it("It should Create the comment",(done) => {
        
//         chai.request(app).post(`/api/v1/comments/${articleId}`)
//         .send(comment)
//         .end((err,res)=>{
//             expect(res).to.have.status([201])
//           done()
//         })
        
//     })


//     it("Should retrieve comments of the Article", (done) => {
//         chai.request(app).get(`/api/v1/comments/${articleId}`)
//         .send()
//         .end((err,res)=>{
//             expect(res).to.have.property("status")
//             expect(res.body).to.have.property("message")
//             expect(res.body).to.have.property("data")
//           done()
//         })
        
//     })
//     it("Should not retrieve the comments",  (done) => {
//         chai.request(app).get("/api/v1/comments")
//         .send()
//         .end((err,res)=>{
//         expect(res).to.have.status([404])
//         done()
//     })
//     })
// })
=======
>>>>>>> a4f5e006f73fcd6f329f1a04f2c16abe9f98ace6
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import {comment} from "./dummyData.js"
import Article from "./../src/models/article.js"

let articleId

const getArticleId= async ()=>{
    const all = await Article.find()
    let id=all[0]._id;
    return id
}

(async ()=>{
  articleId=await getArticleId()
})()

chai.use(chaiHttp)
describe("COMMENT END-POINT TESTING", () => {

     it("It should Create the comment",(done) => {
        
        chai.request(app).post(`/api/v1/comments/${articleId}`)
        .send(comment)
        .end((err,res)=>{
            expect(res).to.have.status([201])
          done()
        })
        
    })


    it("Should retrieve comments of the Article", (done) => {
        chai.request(app).get(`/api/v1/articles/${articleId}`)
        .send()
        .end((err,res)=>{
            expect(res).to.have.property("status")
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
          done()
        })
        
    })
    it("Should not retrieve the comments",  (done) => {
        chai.request(app).get("/api/v1/cmments")
        .send()
        .end((err,res)=>{
        expect(res).to.have.status([404])
        done()
    })
    })
<<<<<<< HEAD
})
=======
})
>>>>>>> ft-my-brand-api-test-3
>>>>>>> a4f5e006f73fcd6f329f1a04f2c16abe9f98ace6
