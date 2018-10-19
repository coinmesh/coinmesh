export class PathUtils {
  static getPathToChildDir(path, childDir) {
    if (path.slice(-1) === '/') {
      path = path.slice(0, -1);
    }
    return `${path || ''}/${childDir}`;
  }
  static fixRelativePath(path, rootPath = '') {
    if (path.substring(0, 2) === './') {
      path = `${rootPath}${path.substr(1)}`;
    }
    return path;
  }
}
