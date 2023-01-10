import { Component, OnInit } from '@angular/core';
import { animate ,transition,style, trigger, state } from '@angular/animations';

const fadeInOut = trigger('fadeInOut', [
  state(
    'in',
    style({
      opacity: 1,
    })
  ),
  transition('void => *', [style({ opacity: 0 }), animate('2s ease-out')]),
 // transition('* => void', [animate('1s ease-out'), style({ opacity: 0 })]),
]);


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations:[fadeInOut]
})
export class ProjectsComponent implements OnInit {

  isShown = false;
  ngOnInit(): void {
    this.isShown = true;
  }


 

  vaccine = 'https://github.com/ANANTH4004/VaccineManagementAPI2';
  bot = "https://github.com/ANANTH4004/CryptoBot";
  blog = "https://github.com/ANANTH4004/BlogTrackerApplication"
  gotoVaccine(){
    window.open(this.vaccine , '_blank');
  }
  gotoBot(){
    window.open(this.bot , '_blank');
  }

  gotoBlog(){
    window.open(this.blog , '_blank');
  }
}
