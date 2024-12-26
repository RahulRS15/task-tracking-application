const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
