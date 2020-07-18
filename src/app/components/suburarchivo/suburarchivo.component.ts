import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../../Model/FileItem';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-suburarchivo',
  templateUrl: './suburarchivo.component.html',
  styleUrls: ['./suburarchivo.component.css']
})
export class SuburarchivoComponent implements OnInit {

  uploadedFiles: Array < File > ;

  archivos: FileItem[] = [];
  cargados = false;

  constructor( public  service: ServicioService) { }

  ngOnInit() {
  }

  CargarArchivo( ) {
    this.service.cargarArchivos(this.archivos);
  }

  onFile(e) {
    this.uploadedFiles = e.target.files;

    const archivoTemoporal = new FileItem( this.uploadedFiles[0]);
    // console.log( archivoTemoporal);
    this.archivos.push(archivoTemoporal);
    // console.log(this.archivos);

    if (this.archivos.length > 0) {
      this.cargados = true;
    }

  }

}
