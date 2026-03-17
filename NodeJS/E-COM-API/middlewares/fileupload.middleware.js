import multer from 'multer';

const config=multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.random() * 1e6;
        cb(null, uniqueSuffix+file.originalname);
    }    
})
const upload = multer({ storage: config });
export default upload;
