import express from 'express';
import * as authCtrl from '../controllers/auth.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: user
 *     description: Operations about user
 */

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

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - user
 *     summary: Authenticate user into the application
 *     description:
 *     operationId: login
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         in: query
 *         description: The email for login
 *         type: string
 *         required: true
 *       - name: password
 *         in: query
 *         description: The password for login
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/User"
 *       400:
 *          description: Invalid username/password
 */

router.route('/login')
    .post((req, res) => {
        authCtrl.login(req, res);
    });

export default router;