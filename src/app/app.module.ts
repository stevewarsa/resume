import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { MainComponent } from "./main/main.component";
import { LinksComponent } from "./links/links.component";
import { ResumeComponent } from "./resume/resume.component";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainComponent,
    LinksComponent,
    ResumeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
