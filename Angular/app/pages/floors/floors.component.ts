import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.scss']
})
export class FloorsComponent implements OnInit {
  floors = [1, 1];
  constructor() { }

  ngOnInit(): void { }
}
