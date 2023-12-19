import { Response, Router } from "express"
import { asyncHandler } from "../../utils"
import { getFolderPath } from "../../utils/getFilePath"
import fs from "fs"

const getProjectContent = Router()

getProjectContent.post(
  "/",
  // authenticateShortJWT,
  asyncHandler(async (req: any, res: Response) => {
    try {
      const { path } = req.query
      console.log("path", path)
      const fileContent = fs.readdirSync(getFolderPath(path), {
        // withFileTypes: true,
      })
      res.setHeader("Content-Type", "application/json")
      res.json(fileContent)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: "Internal server error" })
    }
  })
)

export default getProjectContent
