import HttpStatus from 'http-status-codes';

/**
 * Joi error handler middleware
 *
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */
export default (err, req, res, next) => {
    if (err.isJoi) {
        const error = {
            code: HttpStatus.BAD_REQUEST,
            message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
            details: err.details && err.details.map(err => {
                return {
                    message: err.message,
                    param: err.path
                };
            })
        };
        return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    // If this isn't a Joi error, send it to the next error handler
    return next(err);
};
