import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private readonly usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + id);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public update(user: User) {
    return this.http.put<User>(this.usersUrl, user);
  }

  public delete(id: string) {
    return this.http.delete<User>( this.usersUrl + '/' + id);
  }

  public funcOrProc(operation: string) {
    return this.http.delete<User>( this.usersUrl + '/operation'/* + id*/);
  }
}
