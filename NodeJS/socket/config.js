import mongoose from 'mongoose';

export const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/chatApp', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB is connected');
    } catch (error) {
        console.error('DB connection error:', error);
    }
};