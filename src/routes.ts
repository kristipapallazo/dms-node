import { Router } from "express"
const routes = Router()

import { getFileContent, getFolderContent } from "./api/allScripts"

routes.use(`/get-file-content`, getFileContent)
routes.use(`/get-folder-content`, getFolderContent)

export default routes
