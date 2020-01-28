import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  constructor() {}
  public log(msg: string) {
    console.log(msg);
  }
  public warn(msg: string) {
    console.warn(msg);
  }
  public error(msg: string) {
    console.error(msg);
  }
}
