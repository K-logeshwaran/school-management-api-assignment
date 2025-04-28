// To randomly generate schools data

const db = require('../models/db');
const { faker } = require('@faker-js/faker');

async function seedSchools(count = 20) {
    try {
        for (let i = 0; i < count; i++) {
            const name = faker.company.name() + " School";
            const address = faker.location.streetAddress();
            const latitude = parseFloat(faker.location.latitude({ min: 12.9, max: 13.1 }));
            const longitude = parseFloat(faker.location.longitude({ min: 77.5, max: 77.7 }));

            await db.query(
                'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
                [name, address, latitude, longitude]
            );
        }

        console.log(`${count} schools inserted successfully.`);
        process.exit(0);
    } catch (err) {
        console.error("Error seeding data:", err);
        process.exit(1);
    }
}

seedSchools(9);
