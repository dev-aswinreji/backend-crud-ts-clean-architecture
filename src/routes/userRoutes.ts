
import { Router } from "express";
import userControllers from "../controllers/userControllers";

const router = Router()

router.get('/api/users',userControllers.getAllUsers.bind(userControllers))
router.get('/api/users/:id',userControllers.getUserById.bind(userControllers))
router.post('/api/users',userControllers.createUser.bind(userControllers))

export default router