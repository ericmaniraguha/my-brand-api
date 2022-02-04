// import { expect, request, use } from 'chai';
// import chaiHttp from 'chai-http'
// import app from '../src/app.js'
// import 'dotenv/config';

// use(chaiHttp)

// describe("USER END POINT-TEST",()=>{
//     it("should accept user to login",(done) =>{
//         request(app)
//         .post("/api/v1/users/login")
//         .send({
//             email:"ericmaniraguha@gmail.com",
//             password:"Password@123",
//         })
//         .end((err,res)=>{
//             expect(res.statusCode).to.equal(200);
//             done();
//         });
//     });
// });