import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/momentService/moment.service';
import { Moment } from '../../../interfaces/Moment';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fade',
      [transition(':enter',
        [style({opacity: 0}),
          animate('500ms', style({ opacity: 1 }))
        ]),
      transition(':leave', [
        animate('500ms', style({ opacity:0 }))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  allMoments: Array<Moment> = [];
  moments: Array<Moment> = [];

  fasearch = faSearch;
  searchTerm: string = '';
  
  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
      const moments = this.momentService.getMoments();
      this.allMoments = moments;
      this.moments = moments;
      
      console.log(this.allMoments);
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value);
    })
  }
}
