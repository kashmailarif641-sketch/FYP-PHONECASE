const { HfInference } = require("@huggingface/inference");
const dotenv = require("dotenv");
dotenv.config();

const hf = new HfInference(process.env.HF_TOKEN);

module.exports = hf;
