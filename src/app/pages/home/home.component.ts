import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameCards = [
    { cover: 'assets/1.jpg', label: 'Game 1' },
    { cover: 'assets/2.jpg', label: 'Game 2' },
    { cover: 'assets/3.jpg', label: 'Game 3' },
    { cover: 'assets/4.jpg', label: 'Game 4' },
    { cover: 'assets/5.jpg', label: 'Game 5' },
    { cover: 'assets/6.jpg', label: 'Game 6' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
