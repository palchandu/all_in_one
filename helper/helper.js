

/*Image Filter*/
const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

/*Image Filter*/
const documentFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(pdf|PDF|doc|DOC|docx|DOCX|xls|XLS)$/)) {
        req.fileValidationError = 'Only pdf,doc,excel files are allowed!';
        return cb(new Error('Only document files are allowed!'), false);
    }
    cb(null, true);
};

exports.imageFilter = imageFilter;
exports.documentFilter=documentFilter;
