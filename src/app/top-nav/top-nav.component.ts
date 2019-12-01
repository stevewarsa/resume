import { Component, OnInit } from "@angular/core";

@Component({
  selector: "resume-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent implements OnInit {
  isCollapsed = true;

  constructor() {}

  ngOnInit() {}

  toggleExpanded(): boolean {
    this.isCollapsed = !this.isCollapsed;
    return false;
  }
}
