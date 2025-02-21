import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

interface Project {
  id: string;
  title: string;
  image: string;
  playStoreUrl?: string;
  externalUrl?: string;
  tech: string;
  description: string;
  rating?: string;
  downloads?: string;
  year: string;
  type: "mobile" | "web";
  featured?: boolean;
}

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrl: "./works.component.css",
  providers: [MessageService],
})
export class WorksComponent {
  // Di dalam komponen TypeScript
  constructor(private router: Router, private messageService: MessageService) {}

  navigateToDetail() {
    this.router.navigate(["/works", "detail", "1"]);
  }

  showError() {
    this.messageService.add({
      severity: "error",
      summary: "Info",
      detail: "Under Development",
    });
  }

  activeFilter: string = "all";
  projects: Project[] = [
    {
      id: "bni",
      title: "BNI Agen46",
      image: "assets/bni_thumbnails.png",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=id.co.bni.newagenbni46",
      tech: "flutter_icon.svg",
      description:
        "Mobile banking application for BNI Agen46 with enhanced security and user-friendly interface",
      rating: "4.7",
      downloads: "100K+",
      year: "2022",
      type: "mobile",
      featured: true,
    },
    {
      id: "majoo",
      title: "Majoo - Aplikasi Kasir",
      image: "assets/majoo_thumbnails.png",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.klopos",
      tech: "flutter_icon.svg",
      description:
        "Entrepreneurial and cashier application for managing business transactions",
      rating: "4.5",
      downloads: "10K+",
      year: "2023",
      type: "mobile",
    },
    {
      id: "hasjrat",
      title: "Hasjrat Sales Assistant Toyota",
      image: "assets/hasjrat_thumbnails.png",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.hasjrat.sales_tools",
      tech: "flutter_icon.svg",
      description: "Sales management application for Toyota dealership",
      rating: "4.3",
      downloads: "5K+",
      year: "2022",
      type: "mobile",
    },
    {
      id: "bsb",
      title: "Bank SumselBabel Mobile",
      image: "assets/bsb_thumbnails.png",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=mlpt.siemo.mobilebankingbsb",
      tech: "kotlin_icon.svg",
      description: "Mobile banking application for Bank SumselBabel customers",
      rating: "4.4",
      downloads: "50K+",
      year: "2021",
      type: "mobile",
    },
    {
      id: "owncloud",
      title: "Owncloud",
      image: "assets/owncloud_thumbnails.png",
      externalUrl: "https://github.com/yourusername/owncloud",
      tech: "flutter_icon.svg",
      description:
        "Cloud file manager application, rewritten using Flutter framework",
      year: "2023",
      type: "mobile",
    },
    {
      id: "kopbi",
      title: "KOPBI Solution",
      image: "assets/kopbi_thumbnails.png",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=id.or.kopbi.solusi.mobile",
      tech: "flutter_icon.svg",
      description: "Indonesian Labor Workers Cooperative mobile application",
      rating: "4.6",
      downloads: "20K+",
      year: "2022",
      type: "mobile",
    },
  ];

  filteredProjects: Project[] = this.projects;

  filterProjects(type: string) {
    this.activeFilter = type;
    if (type === "all") {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.type === type
      );
    }
  }
}
