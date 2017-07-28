import express from 'express';
import * as authCtrl from '../controllers/auth.controller';

const router = express.Router();

/**
 * Authenticate  user
 *
 * HTTP POST http://localhost:3000/api/auth/login
 * @return user information in JSON format
 */
router.route('/login')
    .post((req, res) => {
        authCtrl.login(req, res);
    });

export default router;