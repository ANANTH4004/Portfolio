import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { writingAnimation } from "../Writing-animation";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => visible', animate('500ms ease-in'))
    ]),writingAnimation
  ]
})
export class NavbarComponent {

  // constructor(private matIconRegistry: MatIconRegistry ,   private domSanitizer: DomSanitizer){
  //   this.matIconRegistry.addSvgIcon(
  //     "Experience",
  //     this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Images/experience-transfer.svg")
  //   );
  // }
  visible = 'hidden';
  left = '50%';
  right = '50%';



  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent.bind(this));
  }

  scrollEvent() {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      this.visible = 'visible';
      this.left = '0';
      this.right = '0';
    } else {
      this.visible = 'hidden';
      this.left = '50%';
      this.right = '50%';
    }
  }
}
