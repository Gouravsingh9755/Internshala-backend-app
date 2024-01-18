const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors")

exports.hompage = catchAsyncErrors(async (req, res, next)=> {

        res.json({message: "Homepage"})
        
});


