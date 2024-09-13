import { Component } from '@angular/core';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { Moment } from '../../../interfaces/Moment';
import { MomentService } from '../../../services/momentService/moment.service';
import { MessagesService } from '../../../services/messageService/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router) {} 

  async createHandler(moment: Moment) {
    console.log('Capturado o event emmiter')

    const formData = new FormData()

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    
    if (moment.image) {
      formData.append('image', moment.image);
    }

    // todo

    // enviar para o service
    await this.momentService.createMoment(formData);
    console.log('momento criado com sucesso!');

    // exibir msg
    this.messageService.add('Momento adicionado com sucesso!');

    //redirect
    this.router.navigate(['/']);
  }
}
