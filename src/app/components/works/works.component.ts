import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
  providers: [MessageService]
})
export class WorksComponent {

      // Di dalam komponen TypeScript
      constructor(private router: Router, private messageService: MessageService) {}

      navigateToDetail() {
        this.router.navigate(['/works', 'detail', '1']);
      }

      showError() {
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Under Development'});
    }

}
