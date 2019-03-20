import express from 'express';
import userRoutes from './routes/user';
import authenticationRoutes from './routes/authentication';

const app = express();

app.use('/user', userRoutes);
app.use('/authentication', authenticationRoutes);

app.listen(3000, () => console.log('App listening on http://localhost:3000'));
