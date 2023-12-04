import { Response, Router } from "express"
import { asyncHandler } from "../../utils"
import { allScripts } from "./allScripts"
// import { AppConfig, Phase } from "../../types/general"
import config from "config"

// const appsConfig: { [index: string]: AppConfig } = config.get("apps-config")

const deploySetRoutes = Router()

deploySetRoutes.post(
  "/:app",
  // authenticateShortJWT,
  asyncHandler(async (req: any, res: Response) => {
    const { app } = req.params
    alert(1)
    console.log("inside")
    // if (!appsConfig[app]) {
    //   return res.json({ error: true, message: "Unknown app name!" })
    // }
    const { devel } = req.body

    // const configs: AppConfig = { buildRequired, repo, devel }
    // const phases: Phase[] = await deployApp(app, devel, appsConfig[app])
    const data = await allScripts()
    const message: string = "ok"

    res.json({ error: data, message, data })
  })
)

export default deploySetRoutes
