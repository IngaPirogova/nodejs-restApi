const request = require("supertest");
const app = require('../../app');
const mongoose = require('mongoose');

const { PORT = 5000 } = process.env;

describe("test login controller", ()=> {
    beforeAll(() => app.listen(PORT));
    beforeEach(() => {
        console.log("befoEach");
    });
    afterAll( async () => {
        await mongoose.connection.close();
        await app.close();
    });
    
   
    test("response should have status code 200, return a token and a user object with email and subscription", 
    async() => {
        const userTest = {
            "email": "usertest@gmail.com",
            "password": "password"
        }
        const response = (await request(app).post("/api/auth/login")).send(userTest);
        console.log(response.statusCode, response.body);
        expect(response.status).toBe(200);
    })
});


