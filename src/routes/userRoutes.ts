
import { Router } from "express";
import userControllers from "../controllers/userControllers";
import authController from "../controllers/authController";

const router = Router()

router.get('/users', userControllers.getAllUsers.bind(userControllers))
router.get('/users/:id', userControllers.getUserById.bind(userControllers))
router.post('/users', userControllers.createUser.bind(userControllers))
router.post('/login',authController.login.bind(authController))
router.post('/register',authController.register.bind(authController))

export default router