import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '../../../node_modules/@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    
    trigger('wildState', [
      
      state('expand', style({
        'background-color': 'rgba(0,123,255,.5)',
        transform: 'translateX(0) scale(2.0)'
      })),
     
      transition('expand <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '150px'
        })),
        animate(700, style({
          color: 'red'
        })),
        animate(500)
      ])
    ])
  ]
  
})
export class HomeComponent implements OnInit {
  state='expand';

  constructor() { }

  ngOnInit() {
  }

}
