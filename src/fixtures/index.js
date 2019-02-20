require('../mongo');
const customers = require('./customers.fixtures');
const users = require('./users.fixtures');
const products = require('./products.fixtures');

async function main () {
    await customers.load();
    await users.load();
    await products.load();
}

main().then(
    () => {
        console.log('Processed Fixtures');
        process.exit();
    },
    err => {
        console.log(err);
    }
);
