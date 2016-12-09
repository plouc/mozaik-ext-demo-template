import express from 'express';
import Mozaik  from 'mozaik';
import config  from '../config';
import travis  from 'mozaik-ext-travis/client';


const forceSSL = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }

    return next();
};


const mozaik = new Mozaik(config);
mozaik.bus.registerApi('travis', travis);


const app    = express();
const useSSL = process.env.USE_SSL === 'true';
if (useSSL) {
    app.use(forceSSL);
}
mozaik.startServer(app);


export default mozaik;
