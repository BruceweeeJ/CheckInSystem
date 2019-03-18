import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../model/User';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.page.html',
  styleUrls: ['./show-user.page.scss'],
})
export class ShowUserPage implements OnInit {
  userList: Array<User>;
  user: User;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user = {
      userId: 0, userName: '', userAge: 0,
    };
  }
    async initCourse() {
        console.log('接收数据中....');
        this.user.userId = 5;
        await this.http.post('http://localhost:8080/CheckInServer/showUser', {
          'userId': this.user.userId}).toPromise().then((response: any) => {
            this.userList = response;
            console.log(this.userList);
        });
    }
    on() {
      this.initCourse();
    }
}
