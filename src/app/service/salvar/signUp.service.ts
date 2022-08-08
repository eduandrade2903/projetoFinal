import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private afd : AngularFirestore) {}

  create(usuario: Usuario) {
    this.afd.collection('User').doc().set(usuario).then(
      (res) => {
        console.log(res)
      }
    ).catch(erro => console.log(erro) )
  }
}
