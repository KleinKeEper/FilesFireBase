import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../Model/FileItem';




@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private CARPETA_FILES = 'files';

  constructor( private db: AngularFirestore) { }

  cargarArchivos( archivo: FileItem[]) {
    console.log(archivo );

    const storageRef = firebase.storage().ref();

    for (const item of archivo) {
      item.estadoSubiendo = true;
      if ( item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_FILES}/${item.nombreArchivo}`).put(item.archivo);

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED ,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error( ' Error al subir ', error),
        () => {
          console.log('Archivo Subido correctamente');

          uploadTask.snapshot.ref.getDownloadURL()
            .then(( url ) => {
              item.url = url;
              item.estadoSubiendo = false;
              this.guardarArcchivo({
                nombre: item.nombreArchivo,
                url: item.url
              });
            });

              });

    }

  }

 private guardarArcchivo( archivo: {nombre: string, url: string }) {
  this.db.collection(`/${this.CARPETA_FILES}`).add( archivo );
  }


}

