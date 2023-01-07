import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'] ,
  animations: [
    trigger('revealAnimation', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive => active', [animate('50ms')])
    ])
  ]
  
})
export class EducationComponent implements OnInit{
  containers = [
    { state: 'inactive' },
    { state: 'inactive' },
    { state: 'inactive' }
  ];
  
  ngOnInit(): void {
    this.containers.forEach((container, index) => {
      setTimeout(() => {
        container.state = 'active';
      }, index * 800);
    });
    
  }
 
}
