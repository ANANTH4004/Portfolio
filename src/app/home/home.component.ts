import { Component,OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  emoji = '🙂';

  constructor(private matIconRegistry: MatIconRegistry , private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "Experience",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Images/linkedin_icon.svg")
    );
    this.matIconRegistry.addSvgIcon("github",this.domSanitizer
    .bypassSecurityTrustResourceUrl("../assets/Images/github_icon.svg"));
    
  }
 
 Typewriter(){
  
  const target1 = document.querySelector('.tw');
 
    const target2 = document.querySelector('.type-text');
  
      const writer1 = new Typewriter(target1, {
        typeSpeed: 20 
      })
      const writer2 = new Typewriter(target1, { 
        typeSpeed: 60 ,
        typeColor :'green'
      })
      const writer3 = new Typewriter(target1, {
        typeSpeed: 20 
      })
      const writer4 = new Typewriter(target1, {
        typeSpeed: 20,
        typeColor:'green'
      })
      const writer5 = new Typewriter(target2, {
        typeSpeed: 20,
      })
      const writer6 = new Typewriter(target2, {
        typeSpeed: 20,
      })

writer1
  .type('I am a')
  .removeCursor()
  .then(writer2.start.bind(writer2))
  .start()
writer2
  .type(" Software Developer")
  .removeCursor()
  .rest(500)
  .then(writer1.start.bind(writer3))
writer3
  .type(' currently working at Mphasis Limited.I am a')
  .removeCursor()
  .rest(500)
  .then(writer1.start.bind(writer4))     
writer4
  .type(' Full-stack .NET Developer')
  .removeCursor()
  .rest(500)
  .then(writer1.start.bind(writer5)) 
writer5
  .type(' with experience in both frontend and backend technologies.')
  .removeCursor()
  .rest(500)
  .then(writer1.start.bind(writer6))

writer6
      .type(' I have successfully completed my training and have worked on various projects utilizing the .NET framework. I am constantly looking to expand my skillset and stay up to date with the latest tools and technologies in the industry. With a strong passion for technology and development, I am eager to begin my career and make a meaningful contribution to the field.')
      .removeCursor()
 }
  ngOnInit () {
    this.Typewriter();
  }
 
}
