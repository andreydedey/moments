import { Injectable } from '@angular/core';
import { Moment } from '../../interfaces/Moment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
    private MomentMock: Array<Moment> = [];
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

    this.MomentMock.push(newMoment);
  }
}
