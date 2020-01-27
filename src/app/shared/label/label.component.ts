import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.css"]
})
export class LabelComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  constructor() {
    
  }

  ngOnInit() {}
}
