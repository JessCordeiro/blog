import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:9000/usuarios/logar', userLogin)
  }
  cadastrar(user: User){
    return this.http.post('http://localhost:9000/usuarios/cadastrar', user)
  }
}
