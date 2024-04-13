import { Component } from '@angular/core';
import { FRAMEWORKS_BACKEND, FRAMEWORKS_MOBILE, FRAMEWORKS_WEB } from './services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  frameworks_fe = FRAMEWORKS_WEB;
  frameworks_mobile = FRAMEWORKS_MOBILE;
  frameworks_be = FRAMEWORKS_BACKEND;
}
