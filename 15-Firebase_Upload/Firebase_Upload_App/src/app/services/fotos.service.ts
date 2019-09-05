import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ImagenModel } from '../models/imagen.model';
import { ArchivoModel } from '../models/archivo.model';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private fotosCollection: AngularFirestoreCollection<ImagenModel>;
  fotos: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.fotos = firestore.collection('fotos').valueChanges();
  }

  cargar(archivos: ArchivoModel[]) {
    const storage = firebase.storage().ref();
    for (const archivo of archivos) {
      archivo.estado = true;
      if (archivo.progreso >= 100) {
        continue;
      }
      const subida: firebase.storage.UploadTask = storage
        .child(`/fotos/${archivo.nombre}`)
        .put(archivo.archivo);
      subida.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          (archivo.progreso =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        (error: any) => console.log(error),
        () => {
          subida.snapshot.ref.getDownloadURL().then(
            (respuesta: any) => {
              archivo.url = respuesta;
              archivo.estado = false;
              this.guardar({
                nombre: archivo.nombre,
                url: archivo.url
              });
            },
            (error: any) => console.log(error)
          );
        }
      );
    }
  }

  guardar(imagen: ImagenModel) {
    this.firestore.collection('fotos').add(imagen);
  }

  listar() {
    this.fotosCollection = this.firestore.collection<ImagenModel>('fotos');
    return this.fotosCollection.valueChanges();
  }
}
