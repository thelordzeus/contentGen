import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const writeAction = async (req, res) => {
  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `write a linkdin post in 300 words about the topic, ${req.body.postInput}`,
    temperature: 0.7,
    max_tokens: 350,
  });

  const basePromtOutput = baseCompletion.data.choices.pop();
  res.status(200).json({ output: basePromtOutput });
};

export default writeAction;
