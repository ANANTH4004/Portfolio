
import { Component, ViewChild, VERSION, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { writingAnimation } from './Writing-animation';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';

// import Typewriter from 't-writer.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[writingAnimation]
 
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  ngOnInit(){}
  // constructor(private matIconRegistry: MatIconRegistry , private domSanitizer: DomSanitizer){
  //   this.matIconRegistry.addSvgIcon(
  //     "Experience",
  //     this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Images/linkedin_icon.svg")
  //   );
  //   this.matIconRegistry.addSvgIcon("github",this.domSanitizer
  //   .bypassSecurityTrustResourceUrl("../assets/Images/github_icon.svg"));
  // }
 

  // ngOnInit () {
  //   const target = document.querySelector('.tw');
  //   const writer = new Typewriter(target, {
  //     loop: false,
  //     animateCursor:true,
  //     typeSpeed : 30,
  //     typeColor: 'rgb(0, 0, 68)'
  //   })
    
  //   writer
  //     .type('Currently working at Mphasis Limited. I have been working in the field of software development for number] years and have a strong foundation in [technical skills or technologies you have experience with].I am passionate about creating high-quality software solutions and constantly strive to learn and improve my skills. In my current role at Mphasis, I have had the opportunity to work on a variety of projects and have gained valuable experience in [specific areas or technologies you have worked with].In my free time, I enjoy [hobbies or interests] and am always looking for new challenges and opportunities to grow as a developer.I am excited to share some of my past projects and experiences with you through this portfolio and hope to have the opportunity to work with you in the future.')
  //     .removeCursor().start()
              
  // }
 
  
}






