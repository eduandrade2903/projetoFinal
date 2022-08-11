import { Usuario } from 'src/app/models/usuario.model';
import { AngularFireAuth,  } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private afa : AngularFireAuth) {}

  auth(usuario : Usuario) {
    return this.afa.signInWithEmailAndPassword(usuario.usuario, usuario.senha);
  }

}
