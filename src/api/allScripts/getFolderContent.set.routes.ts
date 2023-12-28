import { Response, Router } from "express"
import { asyncHandler } from "../../utils"
import { getFolderPath } from "../../utils/getFilePath"
import fs, { Dirent } from "fs"

const getFolderContent = Router()

getFolderContent.post(
  "/",
  // authenticateShortJWT,
  asyncHandler(async (req: any, res: Response) => {
    try {
      const parentPath: string | undefined = req?.body?.path
      const current: string | undefined = req?.query?.current
      const fullPath: string = getFolderPath(parentPath, current)
      const projectContent: Dirent[] = fs.readdirSync(fullPath, {
        withFileTypes: true,
        // recursive: true,
      })
      const simplifiedProjectContent = projectContent.map((dirent) => {
        const { name, path } = dirent
        return {
          name,
          path,
          isFile: dirent.isFile(),
        }
      })
      res.json(simplifiedProjectContent)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: "Internal server error" })
    }
  })
)
export default getFolderContent
