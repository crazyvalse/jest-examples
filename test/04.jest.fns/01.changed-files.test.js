

// Tool for identifying modified files in a git/hg repository
const {getChangedFilesForRoots} = require('jest-changed-files');

// 打印出当前目录最后修改过的一组文件
getChangedFilesForRoots(['./'], {
	lastCommit: true,
}).then(result => console.log(result.changedFiles));

