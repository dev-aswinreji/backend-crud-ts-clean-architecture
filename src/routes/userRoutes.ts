
import { Router } from "express";
import userControllers from "../controllers/userControllers";

const router = Router()

router.get('/users', userControllers.getAllUsers.bind(userControllers))
router.get('/users/:id', userControllers.getUserById.bind(userControllers))
router.post('/users', userControllers.createUser.bind(userControllers))

export default router