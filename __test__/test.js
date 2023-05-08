const express = require("express");
const request = require("supertest");
const app = express();

const { User } = require("../models/user");

    
describe("Signup Controller test", () => {  
    let server;
    beforeAll(() => server = app.listen(5000));
    afterAll(() => server.close());
  
    it("shoud return user date with two fields mail and subscription", 
    async () => {   
        const response = await request(app).post("/api/users/register");

 });
});


//          const mEmail = "bla@gmail.com";    
//          const mPassword = "1111111";
//     const user = new User({ mEmail, mPassword });
//     const result = await signup(mEmail, mPassword);
//     expect(result.email).toEqual(mEmail);    
//     expect(result.password).toEqual(mPassword);  