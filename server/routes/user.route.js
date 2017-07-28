import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import isAuthenticated from '../middlewares/authenticate';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();


router.route('/')

/**
 * Creates a new user
 *
 * HTTP POST http://localhost:3000/api/users
 * @return list of users in JSON format
 */
    .post(validate(schema.storeUser), (req, res) => {
        userCtrl.store(req, res);
    })

    /**
     * find all the users
     *
     * HTTP GET http://localhost:3000/api/users
     * @return list of users in JSON format
     */
    .get(isAuthenticated, (req, res) => {
        userCtrl.findAll(req, res);
    });


/*  "/api/users/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */
router.route('/:id')

/**
 * Find the user with that id
 *
 * HTTP GET http://localhost:3000/api/users/:id
 * @return list of users in JSON format
 */
    .get(isAuthenticated, (req, res) => {
        userCtrl.findById(req, res);
    })

    /**
     * Update the user with that id
     *
     * HTTP PUT http://localhost:3000/api/users/:id
     * @return list of users in JSON format
     */
    .put(isAuthenticated, (req, res) => {
        userCtrl.update(req, res);
    })

    /**
     * Delete the user with that id
     *
     * HTTP DELETE http://localhost:3000/api/users/:id
     * @return list of users in JSON format
     */
    .delete(isAuthenticated, (req, res) => {
        userCtrl.destroy(req, res);
    });


export default router;