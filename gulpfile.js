const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const del = require('del').deleteAsync;
const through2 = require('through2');
const config = require("./config")


function getMetadata(append = "") {
  let result = "/* ==UserStyle==\n";
  Object.keys(config.metadata).forEach(key => {
    result += `@${key}  ${config.metadata[key]}\n`;
  });
  result += append
  result += "==/UserStyle== */\n\n";
  return result;
}

let userStyleVars = "";
function buildTask(cb) {
  const varRegex = /\/\/\s*(@var.*)/g;

  return src(`${config.sourceDir}/*.styl`)
    .pipe(through2.obj(function (file, enc, next) {
      if (file.isBuffer()) {
        const content = file.contents.toString(enc);
        let match;
        while ((match = varRegex.exec(content)) !== null) {
          userStyleVars += `${match[1]}\n`
        }
      }
      this.push(file);
      next();
    }))
    .pipe(concat(config.outputFileName))
    .pipe(through2.obj(function (file, enc, next) {
      if (file.isBuffer()) {
        let fileContents = file.contents.toString(enc);

        const fullHeader = getMetadata(userStyleVars);

        fileContents = fullHeader + fileContents;

        fileContents = fileContents.replace(varRegex, '');
        fileContents = fileContents.replace(/\n\s*\n/g, '\n');

        file.contents = Buffer.from(fileContents);
      }
      this.push(file);
      next();
    }))
    .pipe(dest(config.outputDir));
}

function cleanTask() {
  return del([config.outputDir]);
}

exports.build = series(cleanTask, buildTask);
exports.default = exports.build;
