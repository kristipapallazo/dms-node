import { Response, Router } from "express"
import { asyncHandler } from "../../utils"
import allScripts from "../../external_folder/script1"

const deploySetRoutes = Router()

deploySetRoutes.post(
  "/:app",
  // authenticateShortJWT,
  asyncHandler(async (req: any, res: Response) => {
    const { app } = req.params
    console.log("app", app)
    // if (!appsConfig[app]) {
    //   return res.json({ error: true, message: "Unknown app name!" })
    // }
    // const { devel } = req.body
    // const data = "data"
    const data = await allScripts()
    console.log("data", data)
    const message: string = "ok"

    res.json({ error: false, message, data })
  })
)

export default deploySetRoutes
