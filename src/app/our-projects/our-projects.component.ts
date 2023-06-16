import { Component } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})
export class OurProjectsComponent {
  currentSlide = 'ngb-slide-0'
  constructor() { }

  onSlide(slideEvent: NgbSlideEvent) {
    this.currentSlide = slideEvent.current;
  }

}
