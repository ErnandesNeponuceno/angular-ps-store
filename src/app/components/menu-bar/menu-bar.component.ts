import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const hamburger = document.querySelector(".hamburger") as HTMLElement;
    const navLinks = document.querySelector(".nav-links") as HTMLElement;
    const links = document.querySelectorAll(".nav-links li") as NodeListOf<HTMLElement>;

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle("open");
      links.forEach(link => {
        link.classList.toggle("fade");
      });
      hamburger.classList.toggle("toggle");
    });
  }
}
