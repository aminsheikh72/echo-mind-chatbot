const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4000;

const allowedOrigins = [
  "https://echo-mind-chatbot.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOptions));

//  Allow preflight for all routes
app.options(/^.*$/, cors(corsOptions));

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to AI Image Editor!",
  });
});

app.use('/api',require("./routes/chatComplitionRoute"))


// Start server
app.listen(PORT, () =>
  console.log(`Server is running at ${PORT}`.bgBlue)
);
