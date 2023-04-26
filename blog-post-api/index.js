const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage'); // Add this line

// Import your Firebase service account credentials
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://bachelor-comment.firebaseio.com',
});

const storage = new Storage({
  projectId: 'your_project_id',
  keyFilename: './serviceAccountKey.json',
});

const bucket = storage.bucket('your_bucket_name.appspot.com');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.post('/api/blog-posts', upload.single('image'), async (req, res) => { // Change to upload.single('image')
    try {
      const { title, content } = req.body;
      const image = req.file; // Change this line

      // Validate the incoming data
      if (!title || !content || !image) {
        return res.status(400).json({ message: 'Missing required fields.' });
      }

      // Upload the image to Firebase Storage and get its URL
      const blob = bucket.file(image.originalname);
      const blobStream = blob.createWriteStream();
      blobStream.on('error', (error) => {
        console.error('Error uploading image:', error);
        return res.status(500).json({ message: 'Error uploading image.' });
      });
      blobStream.on('finish', async () => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(blob.name)}?alt=media`;

        // Create a new blog post object
        const newBlogPost = {
          title,
          content,
          image: imageUrl,
          createdAt: admin.database.ServerValue.TIMESTAMP,
        };

        // Save the blog post object to the Firebase Realtime Database
        const ref = admin.database().ref('blogPosts');
        const newBlogPostRef = ref.push();
        await newBlogPostRef.set(newBlogPost);

        // Return the newly created blog post data in the response
        res.status(201).json({ ...newBlogPost, id: newBlogPostRef.key });
      });

      blobStream.end(image.buffer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while creating the blog post.' });
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
