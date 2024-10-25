const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const emailRoutes = require('./routes/emailRoutes');
const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/emails', emailRoutes);

