import { Component, HostListener } from "@angular/core";
import {
  FRAMEWORKS_BACKEND,
  FRAMEWORKS_MOBILE,
  FRAMEWORKS_WEB,
} from "./services.model";

interface Framework {
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.css",
})
export class ServicesComponent {
  showScrollButton = false;

  frameworks_fe: Framework[] = [
    {
      name: "Angular",
      icon: "../../../assets/icons/angular_icon.svg",
      description: "Enterprise-level applications with Angular",
    },
  ];

  frameworks_mobile: Framework[] = [
    {
      name: "Android",
      icon: "../../../assets/icons/kotlin_icon.svg",
      description: "Native Android development with Kotlin",
    },
    {
      name: "iOS",
      icon: "../../../assets/icons/swift_icon.svg",
      description: "Native iOS development with Swift",
    },
    {
      name: "Flutter",
      icon: "../../../assets/icons/flutter_icon.svg",
      description: "Cross-platform development with Flutter & Dart",
    },
  ];

  frameworks_be: Framework[] = [
    {
      name: "Node.js",
      icon: "../../../assets/icons/node_icon.png",
      description: "Server-side JavaScript with Node.js",
    },
    {
      name: "Spring",
      icon: "../../../assets/icons/spring_icon.svg",
      description: "Enterprise Java development with Spring",
    },
    {
      name: "Go",
      icon: "../../../assets/icons/golang_icon.svg",
      description: "Enterprise Go development with Go",
    },
  ];

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
