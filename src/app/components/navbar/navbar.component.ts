import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('burgerMenu') burgerMenu!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBurgerMenu(): void {
    this.burgerMenu.nativeElement.classList.toggle('hidden');
  }

  collapseBurgerMenu(): void {
    if (!this.burgerMenu.nativeElement.classList.contains('hidden')) {
      this.burgerMenu.nativeElement.classList.add('hidden');
    }
  }
}
