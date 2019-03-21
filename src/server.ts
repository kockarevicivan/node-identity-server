import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import authenticationRoutes from './routes/authentication';
import userRoutes from './routes/user';
import transform from './utils/transform';

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/node_identity_server', { useNewUrlParser: true });

mongoose.model('user', new mongoose.Schema({
    email: String,
    fullName: String,
    password: String,
    role: String,
    token: String,
}, {
    timestamps: true,
    toJSON: { transform },
}));

app.get('/', (req: any, res: any) => {
    mongoose.model('user').find((error, users) => {
        res.send(users);
    });
});
app.use('/user', userRoutes);
app.use('/authentication', authenticationRoutes);

app.listen(3000, () => console.log('App listening on http://localhost:3000'));
