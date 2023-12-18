import path from "path"

const getFilePath = (fileName: string): string | undefined => {
  if (!fileName) return undefined
  console.log("__dirname", __dirname)
  const filePath: string = path.join(__dirname, "../external_folder", fileName)
  console.log("filePath", filePath)
  return filePath
}
export const getFolderPath = (): string => {
  // if (!folderName) return undefined
  const folderPath: string = path.join(__dirname, "../external_folder")
  console.log("folderPath", folderPath)
  return folderPath
}

export default getFilePath
