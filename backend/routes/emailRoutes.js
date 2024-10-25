const express = require('express');
const { getEmails, getEmail, setEmailAsRead, toggleBookmark } = require('../controllers/emailController');
const router = express.Router();


router.get('/', getEmails);

router.get('/:id', getEmail);

router.put('/:id/read', setEmailAsRead);

router.put('/:id/bookmark', toggleBookmark);

module.exports = router;
