var vscode = require('vscode');
var _ = require('lodash');

const mapUriToDisplayName = (list) => {
  return _.chain(list.slice()).uniq().reverse().remove(item => {
    return item.split(vscode.workspace.rootPath).length != 1;
  }).map((item) => {
    return {
      label: _.last(item.split('/')),
      description: item.substring(vscode.workspace.rootPath.length + 1),
    };
  }).filter((item) => {
    return !!item.description && (item.description.trim() !== "");
  }).value();
}

const isFileNameExist = (list, fileName) => {
  return _.some(list, (item) => {
    return item === fileName;
  })
}


module.exports = {
  mapUriToDisplayName,
  isFileNameExist
}
