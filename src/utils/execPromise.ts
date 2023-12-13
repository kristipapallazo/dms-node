import { exec } from "child_process"

export const execPromise = (cmd: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    exec(cmd, { maxBuffer: 1024 * 1000 * 100 }, (err, stdout) => {
      if (err) return reject(err)
      resolve(stdout)
    })
  })
}
// export const execPromise = (cmd: string): Promise<{ stdout: string; stderr: string }> => {
//   return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
//     exec(cmd, { maxBuffer: 1024 * 1000 * 100 }, (err, stdout, stderr) => {
//       if (err) return reject(err)
//       resolve({ stdout, stderr })
//     })
//   })
// }
