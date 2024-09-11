import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css'],
})
export class FilterByPriceComponent {
  center: google.maps.LatLngLiteral = { lat: 26.559828, lng: 31.695805 };
  customIcon = {
    url: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" color="white" background-color="green" width="56" height="56" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .5L1 6v9.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6l-7-5.5zm6 15H2V6.5L8 1.5l6 5V15.5zm-4-5v3h-2v-3h2zm-4 0v3H4v-3h2z"/></svg>',
    scaledSize: new google.maps.Size(32, 32), // Use google.maps.Size for scaledSize
  };
}
