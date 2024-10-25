const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//  get all emails
const getEmails = async (req, res) => {
  try {
    const emails = await prisma.email.findMany();
    if (emails.length === 0) {
      res.status(404).json({ message: 'No emails found' });
    } else {
      res.status(200).json(emails);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


//  get a single email by ID
const getEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const email = await prisma.email.findUnique({
      where: { id: parseInt(id) },
    });
    if (!email) return res.status(404).json({ message: 'Email not found.' });
    res.json(email);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

const setEmailAsRead = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedEmail = await prisma.email.update({
      where: { id: parseInt(id) }, 
      data: { isRead: true },
    });

    if (!updatedEmail) {
      return res.status(404).json({ message: 'Email not found.' });
    }

    res.status(200).json(updatedEmail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark email as read' });
  }
};

const toggleBookmark = async (req, res) => {
  const { id } = req.params;

  try {
    const email = await prisma.email.findUnique({ where: { id: parseInt(id) } });

    if (!email) {
      return res.status(404).json({ message: 'Email not found.' });
    }

    const updatedEmail = await prisma.email.update({
      where: { id: parseInt(id) }, 
      data: { isBookmarked: !email.isBookmarked },  
    });


    res.status(200).json(updatedEmail);
  } catch (error) {
    // console.error('Error toggling bookmark status:', error); 
    res.status(500).json({ error: 'Failed to toggle bookmark status' });
  }
};




module.exports = {
  getEmails,
  getEmail,
  setEmailAsRead,
  toggleBookmark,
};
