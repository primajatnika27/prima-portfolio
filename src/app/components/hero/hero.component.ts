import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent implements OnInit {
  typedText: string = "";
  private textToType: string = "Prima Jatnika";
  private typingSpeed: number = 150;
  private index: number = 0;
  private delayBeforeDeleting: number = 2000; // Waktu tunggu sebelum menghapus teks

  icons = [
    "fa-android",
    "fa-apple",
    "fa-react",
    "fa-flutter",
    "fa-mobile-alt",
    "fa-tablet-alt",
    "fa-code",
    "fa-bug",
    "fa-js-square",
    "fa-swift",
    "fa-kotlin",
    "fa-java",
    "fa-git-alt",
    "fa-npm",
    "fa-docker",
    "fa-github",
  ];

  floatingIcons: Array<{
    icon: string;
    style: {
      left: string;
      top: string;
      "--delay": string;
      "--duration": string;
      fontSize: string;
      opacity: string;
    };
  }> = [];

  constructor() {}

  ngOnInit(): void {
    this.typeWriter();
    // Generate lebih banyak icon
    for (let i = 0; i < 50; i++) {
      const randomIcon = this.icons[
        Math.floor(Math.random() * this.icons.length)
      ];
      this.floatingIcons.push({
        icon: randomIcon,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          "--delay": `${Math.random() * 10}s`, // CSS variable untuk delay
          "--duration": `${20 + Math.random() * 20}s`, // CSS variable untuk duration
          fontSize: `${12 + Math.random() * 20}px`, // Random size
          opacity: `${0.1 + Math.random() * 0.3}`, // Random opacity
        } as any,
      });
    }
  }

  typeWriter(): void {
    if (this.index < this.textToType.length) {
      this.typedText += this.textToType.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), this.typingSpeed);
    } else {
      // Tunggu sebentar setelah selesai mengetik sebelum menghapus
      setTimeout(() => this.deleteWriter(), this.delayBeforeDeleting);
    }
  }

  deleteWriter(): void {
    if (this.index > 0) {
      this.typedText = this.typedText.substring(0, this.index - 1);
      this.index--;
      setTimeout(() => this.deleteWriter(), this.typingSpeed / 2); // Hapus lebih cepat
    } else {
      // Setelah teks dihapus, mulai mengetik lagi
      this.typeWriter();
    }
  }

  sendEmail(): void {
    const email = "primajatnika271995@gmail.com";
    const subject = encodeURIComponent("Subjek Email");
    const body = encodeURIComponent("Ini adalah isi email.\nBaris baru.");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  downloadCV(): void {
    const link = document.createElement("a");
    link.href = "assets/Prima_CV.pdf"; // Ganti dengan path ke file CV Anda
    link.download = "Prima_Jatnika_CV.pdf"; // Ganti dengan nama file yang diinginkan
    link.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true, view: window })
    );
  }
}
