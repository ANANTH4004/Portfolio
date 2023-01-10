import { Component } from '@angular/core';
import {AnimationTriggerMetadata,style,transition,animate,query, stagger, trigger, animateChild
} from '@angular/animations';

const myAnimation: AnimationTriggerMetadata = trigger('myAnimation', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('1s', style({ opacity: 1 })),
    query('@*', [
      stagger(1000, [
        animateChild()
      ])
    ], { optional: true })
  ])
]);

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [ myAnimation ]
})
export class SkillComponent {
  state = 'in';
  
  onAnimationDone() {
    this.state = 'out';
  }
}
