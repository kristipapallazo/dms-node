import path from "path"

const getFilePath = (fileName: string) => {
  if (!fileName) return undefined
  console.log("__dirname", __dirname)
  const filePath: string = path.join(__dirname, "../../../scripts/src", fileName)
  console.log("filePath", filePath)
  return filePath
}
export default getFilePath
