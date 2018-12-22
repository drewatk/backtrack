import { VersionControlInterface } from './VersionControlInterface';

export default class GitVersionControlImpl implements VersionControlInterface {
  constructor() {}

  saveObjToFile() {}

  createVersion(versionName) {}

  resetToVersion(versionID) {}

  switchToVersion(versionID) {}

  switchToLatestVersion() {}

  getObjFromFile() {}

  getVersions() {}

  getLatestSaveTime() {}
}
