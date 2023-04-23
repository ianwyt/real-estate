// import { Component, OnInit, AfterViewInit } from '@angular/core';

// declare var google: any;

// @Component({
//   selector: 'app-contacts-home',
//   templateUrl: './contacts-home.component.html',
//   styleUrls: ['./contacts-home.component.css']
// })
// export class ContactsHomeComponent implements OnInit, AfterViewInit {
//   constructor() {}

//   ngOnInit(): void {}

//   ngAfterViewInit(): void {
//     this.initMap();
//   }

//   private initMap(): void {
//     const mapOptions = {
//       zoom: 14,
//       center: { lat: 40.7128, lng: -74.0060 }, // Replace with your desired coordinates
//     };

//     const map = new google.maps.Map(
//       document.getElementById('map') as HTMLElement,
//       mapOptions
//     );

//     const marker = new google.maps.Marker({
//       position: { lat: 40.7128, lng: -74.0060 }, // Replace with your desired coordinates
//       map: map,
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-contacts-home',
  templateUrl: './contacts-home.component.html',
  styleUrls: ['./contacts-home.component.css']
})
export class ContactsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (window as any).initMap = () => this.initMap();
    this.loadMapScript();
  }

  initMap(): void {
    const location = { lat: 40.7128, lng: -74.0060 };
    const map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 14,
    });
    new google.maps.Marker({
      position: location,
      map: map,
    });
  }

  loadMapScript(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDdCfrVbYE0KW4XeZ2v749QuZ8OXEFith4&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

}
