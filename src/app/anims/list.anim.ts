import { trigger, state, transition, style, animate, keyframes, group, query, stagger } from '@angular/animations';

export const listAnimation = trigger('listAnim', [
    transition('*=>*', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger(100, [
            animate('1s', style({ opacity: 1 }))
        ]), { optional: true }),
        query(':leave', style({ opacity: 1 }), { optional: true }),
        query(':leave', stagger(100, [
            animate('1s', style({ opacity: 0 }))
        ]), { optional: true }),
    ])
]);
// {optional:true} 表示可选 没有元素可以不去查询 避免因为未获取到元素而报错
// stager 让多个元素可以依次出现
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