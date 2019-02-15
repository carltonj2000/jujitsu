const fs = require("fs");
const path = require("path");

const showdown = require("showdown");
const converter = new showdown.Converter();

const md = fs.readFileSync(path.join(__dirname, "../README.md")).toString();
const template = fs
  .readFileSync(path.join(__dirname, "../template.html"))
  .toString();

const title = md.split("\n")[0].replace("# ", "");
const htmlContent = converter.makeHtml(md.replace("![](./docs", "![](."));
const html = template
  .replace("Document Title", title)
  .replace("<!-- Replace me with content -->", htmlContent);

fs.writeFileSync(path.join(__dirname, "../docs/index.html"), html);
