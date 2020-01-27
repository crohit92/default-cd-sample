import { Component } from "@angular/core";
import { LoggerService } from "./core/logger/logger.service";
import { Hooks } from './shared/interfaces/hooks.interface';
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements Hooks {
  constructor(private readonly logger: LoggerService) {
    logger.log("ctor: App Component");
  }
  name = "Angular";
  onInit() {}
}
