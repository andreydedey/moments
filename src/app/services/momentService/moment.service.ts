import { Injectable } from '@angular/core';
import { Moment } from '../../interfaces/Moment';
import dayjs from 'dayjs'

@Injectable({
  providedIn: 'root'
})
export class MomentService {
    private MomentMock: Array<Moment> = [
      {id: 1, title: 'praia', description: 'um dia legal na praia', created_at: dayjs().toDate(), update_at: dayjs().toDate()},
      {id: 2, title: 'sol', description: 'um dia de sol', created_at: dayjs().toDate(), update_at: dayjs().toDate()}
    ];
    private id: number = 0;

  constructor() {}

  createMoment(formData: FormData): void {
    let newMoment: Moment = {
      id: this.id,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      image: './public/imgs/wine.png',
      created_at: new Date(),
      update_at: new Date(),
    };

    this.id += 1;
    this.MomentMock.push(newMoment);
  }

  getMoment(): Array<Moment> {
    return this.MomentMock;
  }
}
