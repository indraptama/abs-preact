module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        categories: _.times(6, function(n) {
            return {
                image: faker.random.image(),
                title: faker.lorem.sentence(),
                id: faker.random.uuid()
            }
        }),
        products: _.times(100, function(n) {
            return {
                id: faker.random.uuid(),
                images: [faker.random.image(), faker.random.image(), faker.random.image(), faker.random.image(), faker.random.image()],
                category_id: faker.random.uuid(),
                price: faker.commerce.price(),
                name: faker.commerce.productName(),
                release_date: faker.date.future(),
                format: faker.commerce.productMaterial(),
                label: faker.lorem.sentence(),
                recommended_age: faker.random.number(),
                title: faker.lorem.sentences()
            }
        }),
        users: _.times(100, function(n) {
            return {
                password: faker.internet.password(),
                email: faker.internet.email(),
                user_token: faker.random.uuid(),
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                zip: faker.address.zipCode()
            }
        })
    }
}
