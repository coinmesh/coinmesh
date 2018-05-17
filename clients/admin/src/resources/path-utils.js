export class PathUtils {
  static getPathToChildDir(path, childDir) {
    if (path.slice(-1) === '/') {
      path = path.slice(0, -1);
    }
    return `${path || ''}/${childDir}`;
  }
}
