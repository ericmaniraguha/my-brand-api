import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';

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
});



// It will never add an article
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
// should not add comment
it("Should create the comment", (done) => {
    chai
        .request(app)
        .post(`/api/v1/comment/${articleId}`)
        .send(addcomment)
        .end((err, res) => {
            expect(res).to.have.status([201]);
            expect(res.body).to.have.property("message");
            expect(res.body).to.have.property("comment");
            done();
        });
});