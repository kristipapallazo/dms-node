import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import routes from "./routes"
import config from "config"

const app = express()
app.listen()

const { port, prefix }: any = config.get("app")

app.disable("x-powered-by")

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
})

app.options("*", cors())

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
