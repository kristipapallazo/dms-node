import { Router } from "express"

const deployRoutes = Router()

deployRoutes.get("/test", (req, res) => {
  res.send("ok")
  res.end()
})

export default deployRoutes
