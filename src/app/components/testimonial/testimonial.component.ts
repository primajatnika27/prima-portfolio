import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  companyLogo: string;
  image: string;
  platform: string;
  rating: number;
  date: string;
}

@Component({
  selector: "app-testimonial",
  templateUrl: "./testimonial.component.html",
  styleUrls: ["./testimonial.component.css"],
  animations: [
    trigger("slideAnimation", [
      transition("* => *", [
        style({ transform: "{{ startTransform }}" }),
        animate("500ms ease-out", style({ transform: "{{ endTransform }}" })),
      ]),
    ]),
  ],
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [
    {
      quote:
        "Prima delivered an exceptional mobile banking solution that exceeded our expectations. His expertise in Flutter and attention to security details made our app stand out in the market.",
      author: "John Smith",
      position: "Product Manager",
      company: "BNI",
      companyLogo: "assets/company/bni-logo.png",
      image: "assets/testimonials/john.jpg",
      platform: "fab fa-android",
      rating: 5,
      date: "January 2024",
    },
    {
      quote:
        "Working with Prima was a great experience. He understood our business needs perfectly and delivered a robust POS system that helped streamline our operations.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "Majoo",
      companyLogo: "assets/company/majoo-logo.png",
      image: "assets/testimonials/sarah.jpg",
      platform: "fab fa-apple",
      rating: 5,
      date: "December 2023",
    },
    // Add more testimonials...
  ];
}
