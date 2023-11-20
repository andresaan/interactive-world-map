import { Component, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  @Output() onCountryHover: EventEmitter<string> = new EventEmitter();

  constructor(private renderer: Renderer2, private elem: ElementRef) {}

  countryHover() {
    
    this.elem.nativeElement.querySelectorAll("path").forEach((element: any) => {
      element.addEventListener("mouseenter", () => {
        element.style.fill="#98AE98";

        var countryCode = element.getAttribute("id"); 
        this.onCountryHover.emit(countryCode);
      })

      element.addEventListener("mouseleave", function() {
        element.style.fill="#2B4F2B";
      })
    });
    
   
  }
}
