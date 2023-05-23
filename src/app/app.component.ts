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
    condicion: boolean = false;




  guardarDato() {
    // Aquí puedes implementar la lógica para guardar el dato en tu archivo TS
  
    this.comentario.push(this.texto);
    this.texto= '';
  
  }
   
 

borrarElemento(elemento: string) {
  const index = this.comentario.indexOf(elemento); // Obtener el índice del elemento en el arreglo

  if (index !== -1) {
    this.comentario.splice(index, 1); // Borrar el elemento utilizando el método splice()
  }
}
    
   
}
