import { Injectable } from '@angular/core';
import { Moment } from '../../interfaces/Moment';
import dayjs from 'dayjs'


@Injectable({
  providedIn: 'root'
})
export class MomentService {
    private MomentMock: Array<Moment> = [
      {id: 1, title: 'familia', description: 'um dia no bosque com a família', image: './image/momentsImages/1.jpg', created_at: dayjs().toDate(), update_at: dayjs().toDate()},
      {id: 2, title: 'yoga com o filho', description: 'praticando yoga com meu filho de 4 anos', image: './image/momentsImages/2.jpg', created_at: dayjs().toDate(), update_at: dayjs().toDate()},
      {id: 3, title: 'montanhas', description: 'um dia no acampamento nas montanhas', image: './image/momentsImages/3.jpg', created_at: dayjs().toDate(), update_at: dayjs().toDate()},
      {id: 4, title: 'praia', description: 'um dia legal na praia com os amigos', image: './image/momentsImages/4.jpg', created_at: dayjs().toDate(), update_at: dayjs().toDate()},
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

  getMoment(id: number): Moment {
    const moment = this.MomentMock.find((moment) => moment.id === id);
    return moment!; 
  }

  getMoments(): Array<Moment> {
    return this.MomentMock;
  }

  removeMoment(id: number): void {
    this.MomentMock = this.MomentMock.filter((moment) => {
      id === moment.id;
    })
  }

  updateMoment(id: number, formData: FormData): void {
    const index = this.MomentMock.findIndex(moment => moment.id === id);
  
    // Obter valores do FormData e garantir que são strings
    const title = formData.get('title');
    const description = formData.get('description');
    const image = formData.get('image');
  
    if (index !== -1) {
      if (typeof title === 'string') {
        this.MomentMock[index].title = title;
      }
      if (typeof description === 'string') {
        this.MomentMock[index].description = description;
      }
      if (typeof image === 'string') {
        this.MomentMock[index].image = image;
      }
    } else {
      console.error('Moment not found for ID:', id);
    }
  }
}
