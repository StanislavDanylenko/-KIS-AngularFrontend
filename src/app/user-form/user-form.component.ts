import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  isUpdate: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== undefined) {
        this.isUpdate = true;
        this.userService.getUserById(id).subscribe(data => {
          this.user = data;
        });
      } else {
        this.isUpdate = false;
      }
    });
  }

  onSave() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  onUpdate() {
    this.userService.update(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
