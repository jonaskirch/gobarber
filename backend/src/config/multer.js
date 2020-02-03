import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  // cdn - content delivery network... amazon s3, digital ocean spaces
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, cb) => {
      // refatorar para usar promisify
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
