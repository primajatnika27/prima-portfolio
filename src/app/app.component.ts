import { Component, OnInit, HostListener } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "prima-portfolio";

  ngOnInit() {
    this.initScrollReveal();
    this.initProgressBar();
    this.initCustomCursor();
  }

  @HostListener("window:mousemove", ["$event"])
  onMouseMove(e: MouseEvent) {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;
    const cursorDot = document.querySelector(
      ".custom-cursor-dot"
    ) as HTMLElement;

    if (cursor && cursorDot) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.updateProgressBar();
    this.checkReveal();
  }

  private initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, [class*="reveal-"]');
    reveals.forEach((el) => this.checkVisible(el));

    setTimeout(() => {
      reveals.forEach((el) => this.checkVisible(el));
    }, 100);
  }

  private initProgressBar() {
    const progressBar = document.querySelector(".progress-bar") as HTMLElement;
    if (progressBar) {
      this.updateProgressBar();
    }
  }

  private updateProgressBar() {
    const progressBar = document.querySelector(".progress-bar") as HTMLElement;
    if (progressBar) {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + "%";
    }
  }

  private checkReveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => this.checkVisible(el));
  }

  private checkVisible(element: Element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 50) {
      element.classList.add("active");

      const revealElements = element.querySelectorAll('[class*="reveal-"]');
      revealElements.forEach((el) => {
        el.classList.add("active");
      });
    }
  }

  private initCustomCursor() {
    document.body.style.cursor = "none";
  }
}
