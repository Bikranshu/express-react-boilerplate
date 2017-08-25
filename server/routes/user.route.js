import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import isAuthenticated from '../middlewares/authenticate';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: Unique identifier representing a specific user
 *         example: 2
 *       first_name:
 *         type: string
 *         description: first name of the user
 *         example: Krishna
 *       last_name:
 *         type: string
 *         description: last name of the user
 *         example: Timilsina
 *       email:
 *         type: string
 *         description: email of the user
 *         required: true
 *         example: test@gmail.com
 *       password:
 *         type: string
 *         description: password of the user
 *         required: true
 *         example: 1234
 *       status:
 *         type: integer
 *         description: status of the user
 *         example: 1
 *       created_at:
 *         type: string
 *         format: date-time
 *         description: User creation datetime
 *       updated_at:
 *         type: string
 *         format: date-time
 *         description: User update datetime
 */

router.route('/')

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - user
 *     summary: "Create a new user"
 *     description: This can only be done by the logged in user.
 *     operationId: storeUser
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Created user object
 *         required: true
 *         schema:
 *           $ref: "#/definitions/User"
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/User"
 */

    .post(validate(schema.storeUser), (req, res) => {
        userCtrl.store(req, res);
    })

    /**
     * @swagger
     * /users:
     *   get:
     *     tags:
     *       - user
     *     summary: "Find all users"
     *     description:
     *     operationId: findAll
     *     produces:
     *       - application/json
     *     parameters: []
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *            type: object
     */

    .get(isAuthenticated, (req, res) => {
        userCtrl.findAll(req, res);
    });


router.route('/:id')

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - user
 *     summary: Find the user by ID
 *     description: For valid response try integer IDs.
 *     operationId: findById
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: ID of user that needs to be fetched
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/User"
 *       400:
 *          description: "Invalid ID"
 */

    .get(isAuthenticated, (req, res) => {
        userCtrl.findById(req, res);
    })

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     tags:
     *       - user
     *     summary: "Update the user by ID"
     *     description: This can only be done by the logged in user.
     *     operationId: update
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: id that need to be updated
     *         required: true
     *         type: integer
     *       - name: body
     *         in: body
     *         description: Updated user object
     *         required: true
     *         schema:
     *           $ref: "#/definitions/User"
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *           $ref: "#/definitions/User"
     *       400:
     *         description: Invalid user
     */

    .put(isAuthenticated, (req, res) => {
        userCtrl.update(req, res);
    })

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     tags:
     *       - user
     *     summary: Delete the user by ID
     *     description: For valid response try integer IDs.
     *     operationId: destroy
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: userId
     *         in: path
     *         description: ID of user that needs to be deleted
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: OK
     *       400:
     *          description: "Invalid ID"
     */

    .delete(isAuthenticated, (req, res) => {
        userCtrl.destroy(req, res);
    });


export default router;