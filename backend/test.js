import { InferenceClient } from "@huggingface/inference";

const token = "YOUR_TOKEN";
const client = new InferenceClient(token);

const image = await client.textToImage({
    provider: "fal-ai",
    model: "black-forest-labs/FLUX.1-dev",
	inputs: "Astronaut riding a horse",
	parameters: { num_inference_steps: 5 },
});
/// Use the generated image (it's a Blob)
