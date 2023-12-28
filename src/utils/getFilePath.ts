import path from "path"

const getFilePath = (parentPath: string | undefined, fileName: string | undefined): string | undefined => {
  if (!fileName || !parentPath) return undefined
  const filePath: string = path.join(parentPath, fileName)
  // const filePath: string = path.join(__dirname, "../external_folder", fileName)
  return filePath
}
export const getFolderPath = (parentPath?: string, current?: string): string => {
  if (!parentPath || !current) return path.join(__dirname, "../external_folder")
  return path.join(parentPath, current)
}

export default getFilePath
