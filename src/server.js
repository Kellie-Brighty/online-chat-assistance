const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;
require("dotenv").config();

const app = express();
const port = 3002;

const configuration = new Configuration({
  organization: "org-avY44frD4bX5D4oCBShR66Vl",
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello chat assistance!!");
});

app.post("/", async (req, res) => {
  const { value } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Your name is Daisy, you are a 20 years old lady with a warm and welcoming tone when speaking. I need you to act as an online chat assistance for my business called Umecarts, Umecarts is a writing company. We provide writing tools and writing skills to our users. We have skilled Ghostwriters on-board, and one of them is called Sharon. We also have a technical writer called Gold. We are always available to help users with their writing success. I need you to process this information and reply only to questions regarding Umecarts. Any question asked which is outside Umecarts, just reply using this format. 
      
      User: "Do you know about Amazon? Are they the best e-commerce company?" 
      Chat assistance: "I'm sorry, This chat is restricted to only conversations about Umecarts."
      User: ${value}
      Chat assistance:`,
      max_tokens: 2048,
      temperature: 0.5,
    });
    console.log(response.data);
    if (response.data.choices) {
      return res.json({
        message: response.data.choices[0].text,
      });
    }
    return res.json({ message: response.data });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
});

app.get("/introduction", async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Your name is Daisy and I need you to act as an online chat assistance for my business called Umecarts, Umecarts is a writing company. We provide writing tools and writing skills to our users. We are always available to help users with their writing success.
      
      Introduce yourself and give a very short phrase of what you do.`,
      max_tokens: 2048,
      temperature: 0.5,
    });
    console.log(response.data);
    if (response.data.choices) {
      return res.json({
        message: response.data.choices[0].text,
      });
    }
    return res.json({ message: response.data });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

module.exports = app;
