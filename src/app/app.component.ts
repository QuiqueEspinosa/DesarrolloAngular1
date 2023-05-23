import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';
 

    comentario:string[]=[];
    texto:string="";
    




  guardarDato() {
    // Aquí puedes implementar la lógica para guardar el dato en tu archivo TS
  
    this.comentario.push(this.texto);
    this.texto= '';
  
  }
}
