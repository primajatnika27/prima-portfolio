import { Component } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  providers: [MessageService],
})
export class ContactComponent {
  isFormVisible = false;

  constructor(private messageService: MessageService) {}

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    if (this.isFormVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  onSubmit(formData: any) {
    console.log("Form submitted:", formData);
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "Message sent successfully!",
    });
    this.toggleForm();
  }
}
