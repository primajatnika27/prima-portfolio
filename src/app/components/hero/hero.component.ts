import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  typedText: string = '';
  private textToType: string = 'Prima Jatnika';
  private typingSpeed: number = 150;
  private index: number = 0;
  private delayBeforeDeleting: number = 2000; // Waktu tunggu sebelum menghapus teks

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
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
    const email = 'primajatnika271995@gmail.com';
    const subject = encodeURIComponent('Subjek Email');
    const body = encodeURIComponent('Ini adalah isi email.\nBaris baru.');

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/Prima_CV.pdf'; // Ganti dengan path ke file CV Anda
    link.download = 'Prima_Jatnika_CV.pdf'; // Ganti dengan nama file yang diinginkan
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  }
}
