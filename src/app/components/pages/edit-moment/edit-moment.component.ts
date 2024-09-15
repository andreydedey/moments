import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Moment } from '../../../interfaces/Moment';
import { MomentService } from '../../../services/momentService/moment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-moment',
  standalone: true,
  imports: [MomentFormComponent, CommonModule],
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = 'Editar'

  constructor(private route: ActivatedRoute, private momentService: MomentService) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'))

      this.moment = this.momentService.getMoment(id);
  }
}
