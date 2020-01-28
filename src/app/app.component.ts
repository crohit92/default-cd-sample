import { Component, ElementRef } from "@angular/core";
import { LoggerService } from "./core/logger/logger.service";
import { IHooks } from "./shared/interfaces/hooks.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements IHooks {
  title = "Angular";
  subtitle = "Is awesome";
  constructor(
    private readonly logger: LoggerService,
    private readonly el: ElementRef
  ) {
    logger.log("ctor: App Component");
    this.logger.warn("ctor: isDOMReady: " + this.isDOMReady());
  }
  ngOnChanges() {
    this.logger.log("ngOnChanges: AppComponent");
    this.logger.warn("ngOnChanges: isDOMReady: " + this.isDOMReady());
  }
  ngOnInit(): void {
    this.logger.log("ngOnInit: AppComponent");
    this.logger.warn("ngOnInit: isDOMReady: " + this.isDOMReady());
  }
  ngDoCheck(): void {
    this.logger.log("ngDoCheck: AppComponent");
    this.logger.warn("ngDoCheck: isDOMReady: " + this.isDOMReady());
  }
  ngAfterContentInit(): void {
    this.logger.log("ngAfterContentInit: AppComponent");
    this.logger.warn("ngAfterContentInit: isDOMReady: " + this.isDOMReady());
  }
  ngAfterContentChecked(): void {
    this.logger.log("ngAfterContentChecked: AppComponent");
    this.logger.warn("ngAfterContentChecked: isDOMReady: " + this.isDOMReady());
  }
  ngAfterViewInit(): void {
    this.logger.log("ngAfterViewInit: AppComponent");
    this.logger.warn("ngAfterViewInit: isDOMReady: " + this.isDOMReady());
  }
  ngAfterViewChecked(): void {
    this.logger.log("ngAfterViewChecked: AppComponent");
    this.logger.warn("ngAfterViewChecked: isDOMReady: " + this.isDOMReady());
  }

  isDOMReady() {
    const el = this.el.nativeElement;
    return el ? el.innerHTML : null;
  }
}
