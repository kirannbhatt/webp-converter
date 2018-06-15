import path from 'path'

function checkFileType(file, cb) {
    const fileType = /jpg|jpeg/

    const extname = fileType.test(path.extname(file.originalname).toLowerCase())

    const mimetype = fileType.test(file.mimetype)

    if (mimetype && extname) {
        return cb(null, true)
    } else {
        cb('.jpg or .jpeg files only')
    }
}

export default checkFileType