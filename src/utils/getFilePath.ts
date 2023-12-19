import path from "path"

const getFilePath = (fileName: string): string | undefined => {
  if (!fileName) return undefined
  console.log("__dirname", __dirname)
  const filePath: string = path.join(__dirname, "../external_folder", fileName)
  console.log("filePath", filePath)
  return filePath
}
export const getFolderPath = (folder_path: string): string => path.join(__dirname, "../external_folder", folder_path)

export default getFilePath
