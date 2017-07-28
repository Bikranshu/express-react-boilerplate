import HttpStatus from 'http-status-codes';
import logger from '../config/winston';

/**
 * NOT_FOUND(404) middleware to catch error response
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
export function notFoundErrorHandler(req, res, next) {
    res.status(HttpStatus.NOT_FOUND)
        .json({
            error: {
                code: HttpStatus.NOT_FOUND,
                message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
            }
        });
}

/**
 * Generic error response middleware
 *
 * @param  {object}   err
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
export function errorHandler(err, req, res, next) {
    logger.error(err);
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
            error: {
                code: err.code || HttpStatus.INTERNAL_SERVER_ERROR,
                message: err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
            }
        });
}