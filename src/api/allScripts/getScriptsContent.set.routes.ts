import { Response, Router } from "express"
import { asyncHandler } from "../../utils"
import fs from "fs/promises"
import getFilePath from "../../utils/getFilePath"

const getScriptsContent = Router()

getScriptsContent.post(
  "/:script",
  // authenticateShortJWT,
  asyncHandler(async (req: any, res: Response) => {
    const { script } = req.params
    console.log("script", script)
    try {
      console.log("okay")
      console.log("first")
      const filePath: string | undefined = getFilePath(`${script}.ts`)
      if (filePath) {
        const fileContent = await fs.readFile(filePath, "utf-8")
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
