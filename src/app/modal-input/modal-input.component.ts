import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user-service.service';
import {SpecificRequest} from '../model/specific-request';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent implements OnInit {

  private request: SpecificRequest;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.request = new SpecificRequest();
  }

  public onSubmit() {
    this.userService.specificRequestCall(this.request).subscribe(result => {
      if (result !== undefined && result !== null) {
        console.log(result);
        if (result.error === undefined || result.error === null) {
            alert('result: ' + result.result);
        } else {
          alert('error: ' + result.error);
        }
      }
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const operation = params.get('operation');
      if (operation !== undefined) {
        if (operation === 'procedure') {
          this.request.operation = 'procedure';
        } else if (operation === 'function') {
          this.request.operation = 'function';
        } else if (operation === 'exception') {
          this.request.operation = 'exception';
        }
      }
    });
  }

}
