const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('config/env.properties');
const axios = require('axios');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');

describe("API Methods Example Tests", async () => {
    it("get method test", async () => {
        const response = await axios.get(properties.get("baseUrl") + '/users')
        // console.log(response.data);
        expect(response.status).equal(200);
        expect(response.data.page).equal(1);
        expect(response.data.per_page).equal(6);
    })

    it("post method test", async () => {
        const rName = faker.name.findName();
        const rJobTitle = faker.name.jobTitle();
        const query = {
            "name": rName,
            "job": rJobTitle
        };
        const response = await axios.post(properties.get("baseUrl") + '/users',query)
            .then(response => response.data)
        // console.log(response);
        expect(response.name).equal(rName);
        expect(response.job).equal(rJobTitle);
    })

    it("put method test", async () => {
        const rName = faker.name.findName();
        const rJobTitle = faker.name.jobTitle();
        const query = {
            "name": rName,
            "job": rJobTitle
        };
        const response = await axios.put(properties.get("baseUrl") + '/users/2', query)
            .then(response => response.data)
        // console.log(response);
        expect(response.name).equal(rName);
        expect(response.job).equal(rJobTitle);
    })

    it("patch method test", async () => {
        const rName = faker.name.findName();
        const query = {
            "name": rName
        };
        const response = await axios.put(properties.get("baseUrl") + '/users/2', query)
            .then(response => response.data)
        // console.log(response);
        expect(response.name).equal(rName);
    })

    it("delete method test", async () => {
        const response = await axios.delete(properties.get("baseUrl") + '/users/2');
        console.log(response.data);
        expect(response.status).equal(204);
    })
})