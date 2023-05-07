const express = require("express");
const request = require("supertest");
const app = express();
const login = require("./login");
app.post("/api/auth", login)

describe("test login controller", ()=> {
    beforeAll(() => app.listen(5000));
    afterAll(() => app.close());
    });

    test("response should have status code 200, return a token and a user object with email and subscription", async() => {
        const response = await (await request(app).post("/api/auth/login"))
        console.log(response)
    })
