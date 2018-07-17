import * as path from "path"
import mkdirp from "mkdirp"
import BuildStage from "./../buildStage"

import createTempDirectory from "./../createTempDirectory"

class CreateTempDirectoryBuildStage extends BuildStage {
  constructor() {
    super(`win32/createTempDirectory`, [createTempDirectory], false)
  }

  performStart() {
    mkdirp(path.join(`temp`, `win32`), error => this.handle(error, () => this.done()))
  }
}

export default new CreateTempDirectoryBuildStage()
