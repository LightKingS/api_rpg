import { Router } from 'express'

import authMiddleware from './app/middlewares/authMiddleware'

import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'
import ClassController from './app/controllers/ClassController'
import LikesController from './app/controllers/LikesController'

const router = Router()

router.get('/users', UserController.retrieve)
router.post('/users', UserController.store)

router.get('/users/auth', authMiddleware, UserController.index)

router.get('/classes', ClassController.retrieve)
router.post('/classes', ClassController.store)

router.post('/auth', AuthController.authenticate)

router.post('/likes', authMiddleware, LikesController.giveLike, ClassController.giveLike)
router.get('/likes', LikesController.retrieve)

export default router