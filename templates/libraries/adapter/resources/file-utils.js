class FileUtils {
  convertConfToJson(confFile) {
    let result = {};
    let brokenByNewLine = confFile.split(/\r?\n/);

    brokenByNewLine.forEach(line => {
      let key = line.split(/=/)[0];
      let value = line.split(/=/)[1];
      if (key && value) {
        result[key] = value;
      }
    });

    return result;
  }
}

module.exports = FileUtils;
