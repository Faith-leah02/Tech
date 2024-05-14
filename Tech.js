 
 
document.addEventListener("DOMContentLoaded", function() {
    // Get the Home and Courses links
    var homeLink = document.querySelector('a[href="#home"]');
    var courseLink = document.querySelector('a[href="#courses "]');
    
    // Add click event listeners to the links
    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the link
        window.location.href = "Tech.html#home"; // Replace "index.html" with your actual home page URL
    });
    
    courseLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the link
        window.location.href = "Tech.html#courses"; // Replace "courses.html" with your actual courses page URL
    });
});


const express = require('express');
const mongoose = require('mongoose');
const Course = require('./models/Course'); // Define your Course model

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API endpoint to get courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Other CRUD endpoints (POST, PUT, DELETE) can be defined similarly

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

