const mongoose = require("mongoose");
const Order = require("./models/order");

const uri = "mongodb://kashmailarif51_db_user:5qpeWfeNkWE4VAjx@ac-hrw7o3p-shard-00-00.ri4pl9w.mongodb.net:27017,ac-hrw7o3p-shard-00-01.ri4pl9w.mongodb.net:27017,ac-hrw7o3p-shard-00-02.ri4pl9w.mongodb.net:27017/casecraft?ssl=true&replicaSet=atlas-sh99hn-shard-0&authSource=admin&retryWrites=true&w=majority";

async function resetOrders() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to DB");

        const result = await Order.updateMany(
            { isPremium: true },
            { premiumStatus: "pending" }
        );

        console.log(`Reset ${result.modifiedCount} premium orders to pending.`);

        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}

resetOrders();
