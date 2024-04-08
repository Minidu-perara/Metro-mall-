const multer = require('multer');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../frontend/public/uploads'); // Destination folder for storing uploaded files
  },
  filename: function (req, file, callback) {
    callback(null,file.originalname); // Generate unique filename for uploaded files
  }
});

// Multer file filter configuration (allow only images)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only images are allowed'), false); // Reject the file
  }
};

// Initialize multer middleware with configuration
const upload = multer({ storage: storage});

module.exports = upload;
