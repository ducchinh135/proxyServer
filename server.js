const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(cors()); // Cho phép tất cả các nguồn truy cập
app.use(bodyParser.json());

app.post("/askai", async (req, res) => {
  try {
    const response = await axios.post(
      "https://aichat.youxiong.win/askai",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`, // Thay thế với cách bạn cấu hình API key
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
