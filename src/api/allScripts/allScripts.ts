const handleSensitiveScriptRun = () => {
  console.log("sensitive Sctipt")
}
export const allScripts = async () => {
  const permission = false
  if (permission) handleSensitiveScriptRun()
  setTimeout(() => {
    return permission ? ["dummy_data"] : []
  }, 10000)
}
