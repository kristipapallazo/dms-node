import { Router } from "express"
const routes = Router()

import { allScriptsRoutes, allScriptsSetRoutes, getScriptsContent } from "./api/allScripts"

// routes.use(`/all-scripts`, allScriptsRoutes) //get
routes.use(`/all-scripts`, allScriptsSetRoutes) //post
routes.use("/getScriptsContent", getScriptsContent)

export default routes
