import { Component } from '@angular/core';
import { Member } from '../member';
@Component({
  selector: 'app-members',
  standalone: true,
  imports: [],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  member: Member = {
    id: 1,
    name: '田中太郎'
  }

}
