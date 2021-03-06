const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = `./uploads/${req.params.id}`
        if (fs.existsSync(path)){
            console.log("file already exists")
        }
        else {
            fs.mkdirSync(path)
        }
        cb(null, `./uploads/${req.params.id}`)
    },
    filename: (req,file,cb) => {
        console.log(file.fieldname)
        if (file.fieldname === 'logoImg') {

            cb(null, 'logo.jpg')
        }
        else if (file.fieldname ==='backgroundImg') {
            cb(null, 'background.jpg')
        }
    }
})

const upload = multer({storage: storage})
const userController = require('../controllers/user')
const adminController = require('../controllers/admin')

//userView
router.get('/', userController.getWineries)
router.put('/', userController.editAllWineries)

//adminView
router.post('/', adminController.addWinery) 
router.put('/:id', upload.any(), adminController.editWinery)

module.exports = router