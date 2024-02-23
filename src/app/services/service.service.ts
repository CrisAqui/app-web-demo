import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firestore: AngularFirestore) { }

  agregarUsuario(coleccion: string, usuario: Cliente) {
    return this.firestore.collection(coleccion).add(usuario);
  }
}
