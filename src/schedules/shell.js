const shell = require("shelljs")

module.exports = () => {
    shell.exec("sleep 6; ls -lha")
}