import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Member } from '../member';
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { MemberService } from '../member.service';

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
  
  members: Member[] = [];
  selectedMember?: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members)
  }

}
