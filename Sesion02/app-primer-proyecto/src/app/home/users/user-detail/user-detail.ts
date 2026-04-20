import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  @Input() user!: IUser;
  @Input() index!: number;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  ngOnChanges() {
    console.log('UserDetail - ngOnChanges', this.user); 
  }

  delete() {
    this.onDelete.emit(this.index);
  }

}
