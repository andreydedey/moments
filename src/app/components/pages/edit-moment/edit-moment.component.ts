import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Moment } from '../../../interfaces/Moment';
import { MomentService } from '../../../services/momentService/moment.service';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../../../services/messageService/messages.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private momentService: MomentService, private messagesService: MessagesService) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'))

      this.moment = this.momentService.getMoment(id);
  }

  editHandler(momentData: Moment) {
    const id = this.moment.id;
    const oldTitle = this.moment.title

    const formData = new FormData()

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    this.momentService.updateMoment(id!, formData); 

    this.messagesService.add(`Momento ${oldTitle} atualizado com sucesso!`);

    this.router.navigate(['/']);
  }
}
