import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private afd : AngularFirestore, private afa : AngularFireAuth) {}

  create(usuario: Usuario) {
    return this.afa.createUserWithEmailAndPassword(usuario.usuario , usuario.senha);
  }
}
