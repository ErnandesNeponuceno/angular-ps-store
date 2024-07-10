import { Component, OnInit } from '@angular/core';

interface PreviewItem {
  imgSrc: string;
  altText: string;
}

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  items: PreviewItem[] = [
    { imgSrc: 'assets/ps5.jpg', altText: 'PS5'},
    { imgSrc: 'assets/ps4.jpg', altText: 'PS4'},
    { imgSrc: 'assets/pechinchas.jpg', altText: 'Pechinchas'},
    { imgSrc: 'assets/expansoes.jpg', altText: 'Expansões'},
    { imgSrc: 'assets/free-to-play.jpg', altText: 'Free to Play'},
    { imgSrc: 'assets/vr.jpg', altText: 'VR'},
    { imgSrc: 'assets/ps-plus.jpg', altText: 'PS Plus'},
    { imgSrc: 'assets/vr2.jpg', altText: 'PS VR2'},
  ];

  constructor() { }

  ngOnInit(): void { }
}
