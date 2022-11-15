import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContact(value: object) {
    return this.http.post('https://urallimited.com/api/mail.php', value);
  }
}
