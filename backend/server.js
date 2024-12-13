const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
const url = require('url');

// MongoDB connection configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://meghanavasamsetty2002:meghana@cluster0.odmp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DB_NAME = process.env.MONGODB_DB_NAME || 'destinationsdb';

// Create HTTP server
const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const parsedUrl = url.parse(req.url, true);

  // API route for MongoDB data
  if (parsedUrl.pathname === '/api' && req.method === 'GET') {
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(MONGODB_URI);
      const db = client.db(DB_NAME);
      const collection = db.collection('destinationscollections');

      // Fetch data from MongoDB
      const data = await collection.find({}).toArray();

      // Close the database connection
      await client.close();

      // Send JSON response
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));

    } catch (error) {
      console.error('Server error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 
        message: 'Internal Server Error', 
        error: error.message 
      }));
    }
  } 
  // Serve static files for root and other routes
  else {
    let filePath = path.join(__dirname, 'public', 
      req.url === '/' ? 'index.html' : req.url
    );

    // Determine content type
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.jpg':
          case '.jpeg':
            contentType = 'image/jpeg';
            break;
        }

    // Read and serve the file
    fs.readFile(filePath, (err, content) => {
      if (err) {
        // File not found
        if (err.code === 'ENOENT') {
          // Serve index.html for client-side routing
          fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) {
              res.writeHead(500);
              res.end('Error loading index.html');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(content);
            }
          });
        } else {
          // Server error
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        // Successful response
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  }
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});