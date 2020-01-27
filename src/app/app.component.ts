import { Component } from '@angular/core';
import { LoggerService } from './core/logger/logger.service';
import { Hooks } from './shared/interfaces/hooks.interface';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements Hooks {
    ngOnChanges() {
        this.logger.log('ngOnChanges: AppComponent');
    }
    ngOnInit(): void {
        this.logger.log('ngOnInit: AppComponent');
    }
    ngDoCheck(): void {
        this.logger.log('ngDoCheck: AppComponent');
    }
    ngAfterContentInit(): void {
        this.logger.log('ngAfterContentInit: AppComponent');
    }
    ngAfterContentChecked(): void {
        this.logger.log('ngAfterContentChecked: AppComponent');
    }
    ngAfterViewInit(): void {
        this.logger.log('ngAfterViewInit: AppComponent');
    }
    ngAfterViewChecked(): void {
        this.logger.log('ngAfterViewChecked: AppComponent');
    }
    constructor(private readonly logger: LoggerService) {
        logger.log('ctor: App Component');
    }
    name = 'Angular';
}
