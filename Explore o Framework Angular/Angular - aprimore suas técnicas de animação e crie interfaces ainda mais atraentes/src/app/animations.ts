import {
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes,
  group,
  query,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #b2b6ff',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #b2b6ff',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate(200),
  ]),
]);

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 })),
  ]),
  transition(':leave', [animate(300, style({ opacity: 0 }))]),
]);

export const checkButtonStateTrigger = trigger('checkButtonState', [
  transition('* => checked', [
    animate(
      '400ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    ),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate(
      '400ms ease-out',
      keyframes([
        style({ offset: 0, opacity: 0, width: 0 }),
        style({ offset: 0.8, opacity: 0.5, width: '*' }),
        style({ offset: 1, opacity: 1, width: '*' }),
      ])
    ),
  ]),
  transition(':leave', [
    animate(
      '400ms cubic-bezier(.13,.9,.8,.1)',
      style({ opacity: 0, width: 0 })
    ),
  ]),
]);

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(600, style({ backgroundColor: '#63b77c' })),
        animate(100, style({ transform: 'scale(1.1)' })),
        animate(200, style({ transform: 'scale(1)' })),
      ]),
    ]),
  ]),

  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(600, style({ backgroundColor: '#6c757d' })),
        animate(100, style({ transform: 'scale(1.1)' })),
        animate(200, style({ transform: 'scale(1)' })),
      ]),
    ]),
  ]),
]);

export const flyInOutTrigger = trigger('flyInOut', [
  transition(':enter', [
    style({
      width: '100%',
      transform: 'translateX(-100%)',
      opacity: 0,
    }),
    group([
      animate(
        '0.3s 0.1s ease',
        style({
          transform: 'translateX(0)',
          width: '*',
        })
      ),
      animate(
        '0.3s ease',
        style({
          opacity: 1,
        })
      ),
    ]),
  ]),
  transition(':leave', [
    group([
      animate(
        '0.3s ease',
        style({
          transform: 'translateX(100%)',
          width: '*',
        })
      ),
      animate(
        '0.3s 0.2s ease',
        style({
          opacity: 0,
        })
      ),
    ]),
  ]),
]);

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query('input.ng-invalid:focus, select.ng-invalid:focus', [
      animate(
        '0.5s',
        keyframes([
          style({ border: '2px solid red', offset: 0.1 }),
          style({ transform: 'translateX(-5px)', offset: 0.1 }),
          style({ transform: 'translateX(5px)', offset: 0.2 }),
          style({ transform: 'translateX(-5px)', offset: 0.3 }),
          style({ transform: 'translateX(5px)', offset: 0.4 }),
          style({ transform: 'translateX(-5px)', offset: 0.5 }),
          style({ transform: 'translateX(5px)', offset: 0.6 }),
          style({ transform: 'translateX(-5px)', offset: 0.7 }),
          style({ transform: 'translateX(5px)', offset: 0.8 }),
          style({ transform: 'translateX(-5px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1 }),
        ])
      ),
    ], { optional: true }),
  ]),
]);
