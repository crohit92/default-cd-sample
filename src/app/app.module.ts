import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { CoreModule } from "./core/core.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HerosComponent } from "./dashboard/heros/heros.component";
import { HeroComponent } from "./dashboard/heros/hero/hero.component";
import { HerosListComponent } from "./dashboard/heros/heros-list/heros-list.component";

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    HerosComponent,
    HeroComponent,
    HerosListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
