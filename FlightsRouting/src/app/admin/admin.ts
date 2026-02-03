import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit{

  flightId!:string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.flightId = this.route.snapshot.paramMap.get('id');
  }

}
