import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent implements OnInit {
  currentIndex: number = 0;
  testimonials: any[] = [
    {
      quote: "Untuk design template dan saran-saran yang diberikan bagus dan sangat di mengerti. Terutama ketika ada Change Request mendadak.",
      author: "Fastwork Client",
      position: "Consultant Project",
      image: "assets/fastwork.png",
      active: true
    },
    {
      quote: "Pengerjaan cepat dan hasilnya bagus. Sangat memuaskan ketika membuat aplikasi mobile yang menggunakan Hybrid framework.",
      author: "MIT Enterprise",
      position: "Mobile Developer",
      image: "assets/fastwork.png",
      active: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.showSlide(this.currentIndex); // Tampilkan slide pertama saat inisialisasi
  }

  showSlide(index: number): void {
    this.currentIndex = index;
    // Sembunyikan semua slide
    this.testimonials.forEach((testimonial, i) => {
      testimonial.active = i === index; // Hanya slide dengan currentIndex yang aktif
    });
  }

  nextSlide(): void {
    const nextIndex = this.currentIndex + 1 >= this.testimonials.length ? 0 : this.currentIndex + 1;
    this.showSlide(nextIndex);
  }

  prevSlide(): void {
    const prevIndex = this.currentIndex - 1 < 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
    this.showSlide(prevIndex);
  }

  selectDot(index: number): void {
    this.showSlide(index);
  }
}
