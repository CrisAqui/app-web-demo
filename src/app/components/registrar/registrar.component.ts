import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  constructor(
    private router: Router,
  ){
    
  }

  goToMenu(){
    this.router.navigate(['/menu']);
  }

}
