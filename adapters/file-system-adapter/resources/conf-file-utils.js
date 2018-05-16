class ConfFileUtils {
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

  convertJsonToConfFile(json) {
    let result = '';
    const lineEnding = '\n';

    Object.keys(json).forEach(key => {
      result += `${key}=${json[key]}${lineEnding}`;
    });

    return result;
  }
}

module.exports = ConfFileUtils;
