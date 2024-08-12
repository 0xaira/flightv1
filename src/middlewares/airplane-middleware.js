const {StatusCodes} = require('http-status-codes');

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: 'Something went wrong',
                data:{},
                error: {explaination: 'modelNumber is required'}
            })
    }
    next();
}
module.exports = {
    validateCreateRequest,
};