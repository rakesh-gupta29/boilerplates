import * as path from "path";
import * as fs from "fs";
class Logger {
  public baseDir: string;
  public fileName: string;
  public linePrefix: string;
  public logDate: Date = new Date();
  constructor() {
    let _dateString = `${this.logDate.getFullYear()}-${
      this.logDate.getMonth() + 1
    }-${this.logDate.getDate()}`;
    let _timeString = `${this.logDate.getHours()}:${this.logDate.getMinutes()}:${this.logDate.getSeconds()}`;
    this.baseDir = path.join(__dirname, "../../.logs/");
    this.fileName = `${_dateString}.log`;
    this.linePrefix = `[${_dateString} ${_timeString}]`;
  }

  public info(_info: string): void {
    this.addLog("INFO :: " + this.linePrefix + " " + _info);
  }
  public error(_info: string): void {
    this.addLog("ERROR :: " + this.linePrefix + " " + _info);
  }
  public warn(_info: string): void {
    this.addLog("WARNING :: " + this.linePrefix + " " + _info);
  }

  // add logs to a file here
  addLog(_info: string) {
    console.log(_info);
  }
}

export default new Logger();
