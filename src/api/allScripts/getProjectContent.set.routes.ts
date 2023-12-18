import { Response, Router } from "express"
import { asyncHandler } from "../../utils"
// import fs from "fs/promises"
import getFilePath, { getFolderPath } from "../../utils/getFilePath"
import fs from "fs"

const getProjectContent = Router()

getProjectContent.post(
  "/",
  // authenticateShortJWT,
  asyncHandler(async (req: any, res: Response) => {
    const { param } = req.params
    console.log("param", param)
    try {
      console.log("__dirname in xxxxxxxxxxxxx", __dirname)
      const folderPath: string = "../../external_folder"
      // const fileContent = await fs.readdirSync(folderPath, "utf-8")
      const fileContent = fs.readdirSync(getFolderPath(), {
        encoding: "utf-8",
        withFileTypes: undefined,
        recursive: true,
      })
      res.setHeader("Content-Type", "application/json")
      res.json({ data: fileContent })
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: "Internal server error" })
    }
  })
)

export default getProjectContent
