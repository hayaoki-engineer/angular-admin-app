import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';
import { MemberDetailComponent } from '../member-detail/member-detail.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MemberDetailComponent
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  
  members = MEMBERS;
  member: Member = {
    id: 1,
    name: '田中太郎'
  }
  selectedMember?: Member;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
