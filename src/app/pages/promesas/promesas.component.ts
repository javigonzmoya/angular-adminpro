import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*const promesa = new Promise( ( resolve, rejects ) =>{

      if (false) {
      resolve('hola mundo')
        
      } else {
        rejects('ocurrio un error')
      }
    });


    promesa
      .then( (mensage) =>{
        console.log(mensage)
      })
      .catch((e) => {
        console.log(e)
      })

    console.log('Fin del init')*/
    this.getUsuarios()
      .then( users => {
        console.log(users)
      })

  }

  getUsuarios(){
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json())
        .then( body => resolve(body.data))
    })
    
  }
}
