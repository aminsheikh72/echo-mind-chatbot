const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

let chatHistory = [];

const chatBot = async (req, res) => {
  const { message } = req.body;

  try {
    // Push user message to history
    chatHistory.push({ role: "user", content: message });

    // Send full chat history to Groq
    const chatResponse = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: chatHistory, //  Full chat history
    });

    const botReply = chatResponse.choices[0]?.message?.content || "No response";

    // Push bot response to history
    chatHistory.push({ role: "assistant", content: botReply });

    res.json({ reply: botReply });
  } catch (err) {
    console.error("Groq Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { chatBot };
