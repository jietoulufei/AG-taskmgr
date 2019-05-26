import { trigger, state, transition, style, animate, keyframes, group } from '@angular/animations';

export const slideToRight = trigger('routeAnim', [
    state('void', style({ display: 'flex', overflow: 'auto' })),
    state('*', style({ display: 'flex', overflow: 'auto' })),
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        group([
            animate('.5s ease-in-out', style({ transform: 'translateX(0)' })),
            animate('.3s ease-in', style({ opacity: 1 })),
        ])
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        group([
            animate('.5s ease-in-out', style({ transform: 'translateX(100%)' })),
            animate('.3s ease-in', style({ opacity: 0 })),
        ])
    ]),
]);

// :enter 等同 void=>*
// :leave 等同 *=>void



// export const slideToRight = trigger('routeAnim', [
//     state('void', style({ 'background':'red'})),
//     state('*', style({ 'background':'blue' })),
//     transition('void=>*', [
//         animate('3s ease-in-out')
//     ]),
//     transition('*=>void', [
//         animate('3s ease-in-out')
//     ]),
// ])