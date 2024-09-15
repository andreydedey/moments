import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/momentService/moment.service';
import { Moment } from '../../../interfaces/Moment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allMoments: Array<Moment> = [];
  moments: Array<Moment> = [];
  
  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
      const moments = this.momentService.getMoment();
      this.allMoments = moments;
      this.moments = moments;
      
      console.log(this.allMoments);
  }

}
