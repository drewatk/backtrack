export interface VersionControlContructor {
  new (): VersionControlInterface /* contructor */;
}

export interface VersionControlInterface {
  saveObjToFile() /* Overwrite given object into local file */;
  createVersion(
    versionName: String
  ) /* Save current state of file in a commit with given message */;
  resetToVersion(
    versionID: Number
  ) /* Reset the file to the given version ID */;
  switchToVersion(
    versionID: Number
  ) /* Switch state of file to correspond to given version ID */;
  switchToLatestVersion() /* Switch state of file to latest version */;
  getObjFromFile() /* Return obj stored in current state of file */;
  getVersions() /* Return list of versions of the file */;
  getLatestSaveTime() /* Return the latest save time of the file */;
}
