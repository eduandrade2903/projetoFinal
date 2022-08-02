import { animate, state, style, transition, trigger } from '@angular/animations';

export const moveIcon = trigger(
  'moveIcon',
  [
    state('enter',style({opacity: '0'})),
    state('leave',style({opacity: '1' })),
    transition(
      'leave => enter',
      [
        animate('0.2s ease-in-out')
      ]
    ),
    transition(
      'enter => leave',
      [
        animate('0.2s ease-in-out')
      ]
    )
  ]
)
