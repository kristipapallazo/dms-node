import express from "express"
import cors from "cors"
// import bodyParser from "body-parser"
import routes from "./routes"
import config from "config"

const app = express()
app.listen()

const { port, prefix }: any = config.get("app")
console.log("port, prefix", port, prefix)

app.disable("x-powered-by")

// Middleware
app.use(cors())
// app.use(bodyParser.json())
// app.options("*", cors())
app.options("*", cors({ origin: "http://localhost:3000" }))
// app.use(express.json({ limit: "20mb" }))

// Define routes and business logic here
app.use(prefix, routes)

// app.use(express.static(path.join(__dirname, "public")))

function errorHandler(err: any, req: any, res: any, next: any) {
  console.error(err)
  if (res?.headersSent) return next(err)
  res?.json({ error: true, message: "Internal error" })
}
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
