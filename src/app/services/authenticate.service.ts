import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string) {
    return this.http.post(baseUrl + "/authenticate", {"email": email, "password": password})
  }
}
