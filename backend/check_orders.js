const mongoose = require("mongoose");
const Order = require("./models/order");

const uri = "mongodb://kashmailarif51_db_user:5qpeWfeNkWE4VAjx@ac-hrw7o3p-shard-00-00.ri4pl9w.mongodb.net:27017,ac-hrw7o3p-shard-00-01.ri4pl9w.mongodb.net:27017,ac-hrw7o3p-shard-00-02.ri4pl9w.mongodb.net:27017/casecraft?ssl=true&replicaSet=atlas-sh99hn-shard-0&authSource=admin&retryWrites=true&w=majority";

async function checkOrders() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to DB");

        const orders = await Order.find({ isPremium: true });
        console.log("Total Premium Orders:", orders.length);
        orders.forEach(o => {
            console.log(`Order ID: ${o.orderId}, Status: ${o.premiumStatus}`);
        });

        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}

checkOrders();
