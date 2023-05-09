const express = require("express");
const request = require("supertest");
const app = express();

const { User } = require("../models/user");
const  {signup}  = require("../controllers/auth/register");
const jwt = require("jsonwebtoken");

describe("Signup Controller test", () => {  
    let server;
    beforeAll(() => server = app.listen(5000));
    afterAll(() => server.close());
  
    it("shoud return user date with two fields mail and subscription", 
    async () => {   
        // const response = await request(app).post("/api/users/register");
        const testEmail = "test@gmail.com";    
         const testPassword = "1111111";
    const user = new User({ testEmail, testPassword });
    const result = await signup(testEmail, testPassword);
    expect(result.email).toEqual(testEmail);    
    expect(result.password).toEqual(testPassword);  

 });
});


         