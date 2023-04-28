import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  mobileMenuVisible: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.mobileMenuVisible = false;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.updateMobileMenuVisibility();
  }

  updateMobileMenuVisibility(): void {
    const mobileMenu = this.el.nativeElement.querySelector('.navbar-menu');
    const mobileMenuBackdrop = this.el.nativeElement.querySelector('.navbar-backdrop');

    if (this.mobileMenuVisible) {
      this.renderer.removeClass(mobileMenu, 'hidden');
      this.renderer.removeClass(mobileMenuBackdrop, 'hidden');
    } else {
      this.renderer.addClass(mobileMenu, 'hidden');
      this.renderer.addClass(mobileMenuBackdrop, 'hidden');
    }
  }

  toggleBurgerMenu(): void {
    this.mobileMenuVisible = !this.mobileMenuVisible;
    this.updateMobileMenuVisibility();
  }
}
