import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  // animations: [
  //   trigger('paragraphAnimation', [
  //     state('invisible', style({
  //       opacity: 0,
  //       transform: 'translateX(-100%)'
  //     })),
  //     state('visible', style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     })),
  //     transition('invisible => visible', animate(500))
  //   ])
  // ],
  styleUrls: ['./education.component.scss']
  
  
  
  
})
export class EducationComponent implements OnInit{

  
  ngOnInit(): void {
   
    
  }
 
}
