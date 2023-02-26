import { Router, } from "express"

import { listUsers, createUser, deleteUser, updateUse } from '../services/user'

const Router = Router()

router.get('/', async (req, res) => {
    const userList = await listUsers()
    res.send(userList)
})

router.post('/', async (req, res) => {
    const user = await createUser(req.body)
    res.send(user)
})

router.delete('/:userId', async (req, res) => {
    await deleteUser(req.params.userId)
    res.send()
})

router.put('/:userId', async (req, res) => {
    await updateUser(req.params.userId, req.body)
    res.send()
})

export default router