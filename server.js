const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/TaskRoutes');
const userRoutes = require('./routes/UserRoutes');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config()

// Express app
const app = express();

// Middleware
app.use(express.json());

// Allow CORS for all routes
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Default route
app.get('/', (req, res) => {
    res.json("Hello");
});

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log(`Server listening on port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.error('Database connection error:', error.message);
});

