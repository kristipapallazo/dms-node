import { Router } from "express"
// import config from "config";

// const { prefix, prefix_set }: any = config.get("app");
// console.log("prefix :>> ", prefix);
const routes = Router()

import { allScriptsRoutes, allScriptsSetRoutes } from "./api/allScripts"

// routes.use(`/all-scripts`, allScriptsRoutes) //get
routes.use(`/all-scripts`, allScriptsSetRoutes) //post

export default routes
