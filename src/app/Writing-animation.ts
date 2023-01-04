import { trigger, state, transition, style, animate, animation } from '@angular/animations';

export const writingAnimation = trigger('writing', [
  state('in', style({
    opacity: 1,
  })),
  transition('void => *', [
    style({
      opacity: 10,
    
    }),
    animate('10s')
  ])
]);

export function logAnimation(event: AnimationEvent) {
  console.log(event);
}
