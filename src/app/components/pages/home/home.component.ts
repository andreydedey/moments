import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/momentService/moment.service';
import { Moment } from '../../../interfaces/Moment';
import { Comment } from '../../../interfaces/Coment';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { trigger, transition, style, animate } from '@angular/animations';
import { ComentService } from '../../../services/comentService/coment.service';

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
  comments: Array<Comment> = [];
  commentsCount: Array<{momentId: number, count: number}> = [];

  fasearch = faSearch;
  searchTerm: string = '';
  
  constructor(private momentService: MomentService, private comentService: ComentService) {}

  ngOnInit(): void {
      const moments = this.momentService.getMoments();
      this.allMoments = moments;
      this.moments = moments;

      this.comments = this.comentService.getAllComments();
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value);
    })

  }

  countAllComments(moment: Moment): void {
    const momentCommentCounts: { [key: number]: number } = {};

    this.comments.forEach(comment => {
      if (momentCommentCounts[comment.momentId]) {
        momentCommentCounts[comment.momentId]++;
      } else {
        momentCommentCounts[comment.momentId] = 1;
      }
    });

    const result = Object.keys(momentCommentCounts).map(momentId => ({
      momentId: Number(momentId),
      count: momentCommentCounts[Number(momentId)]
    }));

    this.commentsCount = result;
  }

  findCommentCountByMomentId(momentId: number): number {
    return this.commentsCount.find(comment => comment.momentId === momentId)!.count;
  }
  
}
