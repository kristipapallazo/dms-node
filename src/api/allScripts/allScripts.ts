const handleSensitiveScriptRun = () => {
  console.log("sensitive Sctipt")
  return "permission"
}
export const allScripts = async () => {
  const permission = false
  if (permission) return handleSensitiveScriptRun()
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log("timeout")
      resolve("not permission")
    }, 5000)
  })
}
