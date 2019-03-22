/**
 * @file Startup file.
 * @author Ivan Kockarevic
 */
import bluebird from 'bluebird';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import config from './config';
import authenticationRoutes from './routes/authentication';
import userRoutes from './routes/user';

// Initialize Express.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure promise with Bluebird and connect to MongoDB.
mongoose.Promise = bluebird;
mongoose.connect(config.databaseUrl, { useNewUrlParser: true });

// Map routes.
app.use('/user', userRoutes);
app.use('/authentication', authenticationRoutes);

// Start the app.
app.listen(3000, () => console.log(`App listening on http://localhost:${config.port}`));
