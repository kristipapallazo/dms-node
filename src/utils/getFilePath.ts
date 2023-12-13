import path from "path"

const getFilePath = (fileName: string) => {
  if (!fileName) return undefined
  console.log("__dirname", __dirname)
  // __dirname /Users/kristi/workspace/bit-apps/back/dms-node/dist/util

  const filePath: string = path.join(__dirname, "../api/allScripts", fileName)
  console.log("filePath", filePath)
  return filePath
}
export default getFilePath
