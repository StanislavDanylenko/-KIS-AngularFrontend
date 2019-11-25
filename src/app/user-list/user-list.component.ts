import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user-service.service';
import {User} from '../model/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
  }

  public alertMessage(message: string) {
    alert(message);
  }

  public delete(id: string) {
    this.userService.delete(id).subscribe(result => this.updateList());
  }

  public updateList() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit() {
    this.updateList();
  }

}
