import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

export const flyIn = trigger('flyIn', [
  state('active', style({transform: 'translateX(0)'})),
  state('inactive', style({transform: 'translateX(50%)'})),
  transition('void => *', [
    animate(3000, keyframes([
      style({ opacity: 0, transform: 'translateX(-100%)', offset: 0}),
      style({ opacity: 1, transform: 'translateX(50px)', offset: 0.3}),
      style({ opacity: 1, transform: 'translateX(0)', offset: 1.0}),
    ]))
  ]),
  transition('* => void', [
    animate(3000, keyframes([
      style({ opacity: 1, transform: 'translateX(0)', offset: 0}),
      style({ opacity: 1, transform: 'translateX(25px)', offset: 0.3}),
      style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0}),
    ]))
  ]),
  transition('active => inactive', animate('500ms ease-in')),
  transition('inactive => active', animate('500ms ease-out'))
]);
