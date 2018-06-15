import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: './public',
    filenaame: (req, res, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
}).single('image')

export default upload