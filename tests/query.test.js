import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import { userData, validUser, invalidUser} from './dummyData.js';
import { postData } from './dummyData.js';
import User from "./../src/models/user.js"

chai.use(chaiHttp)
describe("QUERY END-POINT TESTING", () => {
    before(async ()=>{
       await User.deleteOne({email:userData.email})
    })

    it("It should register the user",(done) => {
        chai.request(app).post("/api/v1/users/register")
        .send(userData)
        .end((err,res)=>{
            expect(res).to.have.status([201])
          done()
        })
        
    })

    let token=""
    it("It should loggin the user",(done) => {
        chai.request(app).post("/api/v1/users/login")
        .send(validUser)
        .end((err,res)=>{
            token=res.body.accessToken;
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("accessToken")
          done()
        })
        
    })
    it("While logged in Should retrieve the queries",(done) => {
        chai.request(app).get("/api/v1/queries/")
        .set('Authorization', `Bearer ${token}`)
        .send()
        .end((err,res)=>{
            expect(res).to.have.property("status")
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
          done()
        })
        
    })

    it("while not logged in, should not retrieve the queries",  (done) => {
        chai.request(app).get("/api/v1/queries/")
        .send()
        .end((err,res)=>{
        expect(res.body).to.have.property("error")
        expect(res).to.have.status([401])
        done()
    })
    })

    it("Should not retrieve the queries",  (done) => {

        chai.request(app).get("/api/v1/qeury/")

        chai.request(app).get("/api/v1/qeuries/")

        .send()
        .end((err,res)=>{
        expect(res).to.have.status([404])
        done()
    })
    
    })
})

 //should not log the user in 

 it("It should not loggin the user", (done) => {
    chai
        .request(app)
        .post("/api/v1/users/login")
        .send(invalidUser)
        .end((err, res) => {
            expect(res).status([403])
            expect(res.body).to.have.property("message");

            done();
        });
});

  //adding articles while logged in
  it("should add article while logged in", (done) => {
    let articleId = ''
    chai.request(app)
        .post("/api/v1/articles")
        .set("Authorization", `Bearer ${token}`)
        .send(postData)
        .end((req, res) => {
            articleId = res.body.data._id
            expect(res).to.have.status([200])
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
            expect(res.body).to.be.a('object')
            done();

        });
});
