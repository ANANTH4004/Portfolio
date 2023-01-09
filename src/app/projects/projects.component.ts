import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

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
