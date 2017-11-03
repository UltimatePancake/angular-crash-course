import { RestApiService } from './../rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list = [];

    constructor(
        private restApiService: RestApiService
    ) { }

  ngOnInit() {
      this.getList();
  }

    getList() {
      this.restApiService.getList().subscribe((res) => {
          this.list = res.json();
      });
    }

    remove(post) {
        this.restApiService.deletePost(post.id).subscribe((res) => {
            console.log('Y THO');
            this.getList();
        });
    }
}
