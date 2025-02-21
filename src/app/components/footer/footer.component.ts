import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Mengatur tahun saat ini
    const currentYear = new Date().getFullYear();
    document.getElementById(
      "currentYear"
    )!.textContent = currentYear.toString();
  }
}
