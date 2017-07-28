import Joi from 'joi';

/**
 * Joi validation.
 *
 * @param  {object}  schema
 * @return {null|object}
 */
function validate(schema) {
    return function (req, res, next) {
        let toValidate = {};
        if (!schema) {
            return next();
        }
        ['params', 'body', 'query'].forEach(function (key) {
            if (schema[key]) {
                toValidate[key] = req[key];
            }
        });

        return Joi.validate(toValidate, schema, {abortEarly: false}, err => {
            if (err) {
                return next(err);
            }

            return next();
        });
    };
}

export default validate;