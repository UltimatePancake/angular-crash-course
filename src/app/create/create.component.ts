import { RestApiService } from './../rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    post = {
        title: '',
        description: ''
    };

    constructor(
        private restApiService: RestApiService
    ) { }

  ngOnInit() {
  }

    newPost(post) {
        console.log(post);
        this.restApiService.create(post);
    }
}
