const express = require('express');
const app = express();
const db = require('./models/db');
const { isValidSchool,calculateDistance } = require('./utils/func');

app.use(express.json());

// Test route to check DB connection
app.get('/test', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1');    
    console.log(rows);
    
    res.send('Database connected successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection failed.');
  }
});


//==================

app.post("/addSchool",async (req,res)=>{

    const { name, address, latitude, longitude } = req.body;

    if (!isValidSchool(req.body)) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    try {
        
        const [result] = await db.query(
            'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
            [name, address, latitude, longitude]
        );
        res.status(201).json({ message: "School added successfully", schoolId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add school" });
    }


});

//=====================


app.get("/listSchools",async (req,res)=>{
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
        return res.status(400).json({ message: "Invalid latitude or longitude" });
    }

    try {
        const [schools] = await db.query('SELECT * FROM schools');

        const schoolsWithDistance = schools.map((school) => {
            const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
            return { ...school, distance: distance.toFixed(2) }; // km rounded to 2 decimal places
        });

        // Sort schools by distance
        schoolsWithDistance.sort((a, b) => a.distance - b.distance);

        res.json(schoolsWithDistance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch schools" });
    }
});



// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App started");
    console.log(`Server running on port ${PORT}`);
});
