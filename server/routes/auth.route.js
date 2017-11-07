import express from 'express';
import * as authCtrl from '../controllers/auth.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: authentication
 *     description: User authentication
 */

/**
 * @swagger
 * definitions:
 *   Login:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *         example: test@gmail.com
 *       password:
 *         type: string
 *         example: "1234"
 *   Token:
 *    type: object
 *    properties:
 *      email:
 *        type: string
 *        example: test@gmail.com
 *      token:
 *        type: string
 *        example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE1MDk5ODg2NDZ9.1zTKAzXmuyQDHw4uJXa324fFS1yZwlriFSppvK6nOQY
 *   Error:
 *      type: object
 *      properties:
 *         message:
 *            type: string
 *         error:
 *            type: boolean
 *            default: true
 *
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - authentication
 *     summary: Authenticate a user and receive a JWT Token
 *     description:
 *     operationId: login
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *            $ref: '#/definitions/Token'
 *       400:
 *         description: Invalid username/password
 *         schema:
 *            $ref: '#/definitions/Error'
 *       404:
 *         description: User not found
 *         schema:
 *            $ref: '#/definitions/Error'
 */

router.route('/login')
    .post((req, res) => {
        authCtrl.login(req, res);
    });

export default router;