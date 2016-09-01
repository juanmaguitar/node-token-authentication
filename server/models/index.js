const mongoose = require('mongoose');
const fs = require('fs');
const Schema = mongoose.Schema;
const schemasFiles = fs.readdirSync(`${__dirname}/schemas`).filter(file => file.endsWith('.js'))

var models = {};
for (let file of schemasFiles)  {
    let fileName = file.slice(0,-3); // remove .js extension
    let schema = require(`./schemas/${fileName}`);
    if (schema instanceof Schema) {
      console.log(`registering ${fileName}...`)
      models[fileName] = mongoose.model(fileName, schema);
    } else {
      models[fileName] = mongoose.model(fileName, new Schema(schema));
    }
}

module.exports = models;