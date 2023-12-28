import { Response, Router } from "express"
import { asyncHandler } from "../../utils"
import fs from "fs/promises"
import getFilePath from "../../utils/getFilePath"

const getFileContent = Router()

getFileContent.post(
  "/:file",
  // authenticateShortJWT,
  asyncHandler(async (req: any, res: Response) => {
    const { file } = req.params
    const parentPath: string | undefined = req?.body?.path
    console.log("file", file)
    try {
      const filePath: string | undefined = getFilePath(parentPath, file)
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

export default getFileContent
