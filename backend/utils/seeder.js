const products = require('../data/products.json');
const Profile = require('../models/profileModel');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database')

dotenv.config({path:'backend/config/config.env'});
connectDatabase();

const seedProducts = async ()=>{
    try{
        await Profile.deleteMany();
        console.log('Products deleted!')
        await Profile.insertMany(products);
        console.log('All products added!');
    }catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProducts();