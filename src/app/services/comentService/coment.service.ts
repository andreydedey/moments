import { Injectable } from '@angular/core';
import { Comment } from '../../interfaces/Coment';
import dayjs from 'dayjs';
import { Moment } from '../../interfaces/Moment';


@Injectable({
  providedIn: 'root'
})
export class ComentService {
  private CommentMock: Array<Comment> = [
    {id: 1, text: 'Um comentário legal', username: 'marcos', momentId: 1, created_at: dayjs().toDate(), updated_at: dayjs().toDate()},
    {id: 2, text: 'Outro comentario', username: 'pedro', momentId: 2, created_at: dayjs().toDate(), updated_at: dayjs().toDate()},
    {id: 3, text: 'Um comentário legal', username: 'joão', momentId: 2, created_at: dayjs().toDate(), updated_at: dayjs().toDate()},
    {id: 4, text: 'Um comentário legal', username: 'maria', momentId: 3, created_at: dayjs().toDate(), updated_at: dayjs().toDate()},
    {id: 5, text: 'Um comentário legal', username: 'heitor', momentId: 2, created_at: dayjs().toDate(), updated_at: dayjs().toDate()},
    {id: 6, text: 'Um comentário legal', username: 'helena', momentId: 1, created_at: dayjs().toDate(), updated_at: dayjs().toDate()},
  ]

  constructor() {}

  createComment(data: Comment) {
    
  }

  getComments(moment: Moment): Array<Comment> {
    const moment_id = moment.id;

    const comments = this.CommentMock.filter(comment => comment.momentId === moment_id);
    return comments;
  }
}
