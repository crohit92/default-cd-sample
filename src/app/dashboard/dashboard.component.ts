import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {LoggerService} from '../core/logger/logger.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

@Input() title:string;
@Input() subtitle:string;
  constructor(
    private readonly logger: LoggerService,
    private readonly el: ElementRef
  ) {
    logger.log("ctor: DashboardComponent");
    this.logger.warn("ctor: isDOMReady: " + this.isDOMReady());
  }
  ngOnChanges(changes:any) {
    this.logger.log("ngOnChanges: DashboardComponent");
    this.logger.warn("ngOnChanges: isDOMReady: " + this.isDOMReady());
    this.logger.error(changes);
    
  }
  ngOnInit(): void {
    this.logger.log("ngOnInit: DashboardComponent");
    this.logger.warn("ngOnInit: isDOMReady: " + this.isDOMReady());
  }
  ngDoCheck(): void {
    this.logger.log("ngDoCheck: DashboardComponent");
    this.logger.warn("ngDoCheck: isDOMReady: " + this.isDOMReady());
  }
  ngAfterContentInit(): void {
    this.logger.log("ngAfterContentInit: DashboardComponent");
    this.logger.warn("ngAfterContentInit: isDOMReady: " + this.isDOMReady());
  }
  ngAfterContentChecked(): void {
    this.logger.log("ngAfterContentChecked: DashboardComponent");
    this.logger.warn("ngAfterContentChecked: isDOMReady: " + this.isDOMReady());
  }
  ngAfterViewInit(): void {
    this.logger.log("ngAfterViewInit: DashboardComponent");
    this.logger.warn("ngAfterViewInit: isDOMReady: " + this.isDOMReady());
  }
  ngAfterViewChecked(): void {
    this.logger.log("ngAfterViewChecked: DashboardComponent");
    this.logger.warn("ngAfterViewChecked: isDOMReady: " + this.isDOMReady());
  }

  isDOMReady() {
    const el = this.el.nativeElement;
    return el ? el.innerHTML : null;
  }

}