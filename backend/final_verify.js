const mongoose = require("mongoose");
const Order = require("./models/order");

const uri = "mongodb://kashmailarif51_db_user:5qpeWfeNkWE4VAjx@ac-hrw7o3p-shard-00-00.ri4pl9w.mongodb.net:27017,ac-hrw7o3p-shard-00-01.ri4pl9w.mongodb.net:27017,ac-hrw7o3p-shard-00-02.ri4pl9w.mongodb.net:27017/casecraft?ssl=true&replicaSet=atlas-sh99hn-shard-0&authSource=admin&retryWrites=true&w=majority";

async function verify() {
    try {
        await mongoose.connect(uri);
        const orders = await Order.find({ orderId: { $in: ["3A3F44", "752029"] } });
        console.log("\nDATABASE STATUS CHECK:");
        orders.forEach(o => {
            console.log(`- Order #${o.orderId}: Main Payment = [${o.payment?.status.toUpperCase()}], Premium Transaction = [${o.paymentStatus.toUpperCase()}]`);
        });
        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}
verify();
