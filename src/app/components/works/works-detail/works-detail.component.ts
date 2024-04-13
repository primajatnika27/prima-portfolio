import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-works-detail',
  templateUrl: './works-detail.component.html',
  styleUrl: './works-detail.component.css'
})
export class WorksDetailComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']); // Contoh mendapatkan parameter 'id' dari rute
    });
  }
}
