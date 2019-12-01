import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ResumeComponent } from "./resume/resume.component";
import { LinksComponent } from "./links/links.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "main", component: MainComponent },
  { path: "resume", component: ResumeComponent },
  { path: "links", component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
