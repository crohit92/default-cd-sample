import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerService } from "./logger.service";

@NgModule({
  providers: [LoggerService],
})
export class LoggerModule {}
