import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  display: boolean = false;

  onSubmit(formValue: any): void {
    const whatsappNumber = '6285875074351'; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, nama saya ${formValue.name}. ${formValue.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    
    this.display = false;
  }

  showDialog() {
    this.display = true;
  }

  closeModal() {
    if (this.display) {
      this.display = false;
    }
  }


}
