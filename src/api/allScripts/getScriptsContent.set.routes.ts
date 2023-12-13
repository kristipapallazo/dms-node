import { Response, Router } from "express"
import { asyncHandler } from "../../utils"
import fs from "fs/promises"
import path from "path"
import getFilePath from "../../utils/getFilePath"

const getScriptsContent = Router()

getScriptsContent.post(
  "/:app",
  // authenticateShortJWT,
  asyncHandler(async (req: any, res: Response) => {
    const { app } = req.params
    console.log("app", app)
    try {
      console.log("okay")
      const filePath: string | undefined = getFilePath("allScripts.js")
      if (filePath) {
        const fileContent = await fs.readFile(filePath, "utf-8")
        console.log("fileContent", fileContent)
        res.setHeader("Content-Type", "application/json")
        res.json({ content: fileContent })
      } else {
        res.json({ error: true })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: "Internal server error" })
    }
  })
)

export default getScriptsContent
