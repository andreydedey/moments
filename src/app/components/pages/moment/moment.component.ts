import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../../services/momentService/moment.service';
import { Moment } from '../../../interfaces/Moment';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesService } from '../../../services/messageService/messages.service';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor ( private router: Router, private route: ActivatedRoute, private momentService: MomentService, private messagesServices: MessagesService) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.moment = this.momentService.getMoment(id);
  }

  removeHandler(id: number) {
    this.momentService.removeMoment(id);

    this.messagesServices.add("Momento excluído com sucesso!");

    this.router.navigate(['/']);
  }
}
