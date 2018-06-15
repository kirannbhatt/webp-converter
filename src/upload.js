import multer from 'multer'
import path from 'path'
import checkFileType from './checkFileType'

const storage = multer.diskStorage({
    destination: './public',
    filenaame: (req, res, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, res, cb) => {
        checkFileType(file, cb)
    }
}).single('image')

export default upload