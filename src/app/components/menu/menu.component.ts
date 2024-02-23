import { Component } from '@angular/core';
import { AngularFirePerformance } from '@angular/fire/compat/performance';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products = [
    { name: 'Abre tu cuenta de Ahorro', icon: 'home' },
    { name: 'Solicita tu Crédito Digital', icon: "credit_card" },
    { name: 'Conoce nuestros seguros', icon: 'admin_panel_settings' },
    { name: 'Descarga Banca Móvil', icon: 'phone_iphone' },
    // ...otros productos
  ];

  constructor(
    //private firestoreDataService: ServiceService, 
    private router: Router,
    private gaService: GoogleAnalyticsService,
    private perf: AngularFirePerformance,
    //private firestore: AngularFirestore
    ) { }

    ngOnInit(){
    
      this.gaService.pageView('/menu', 'Página de menu')
      //this.someFunction1()
      //this.someFunction2()
      //this.someFunction3()
    }

    buttonAhorro(){
      this.router.navigate(['/ahorro']);
    }
    buttonMovi(){
      this.router.navigate(['/movimiento']);
    }
    buttonTras(){
      this.router.navigate(['/transferencia']);
    }

    async someFunction1() {
      // Inicia la traza
      const trace = await this.perf.trace('ahorro');
      
      // Inicia la medición
      trace.start();
    
      // La operación que quieres medir
      await this.buttonAhorro();
    
      // Detén la medición
      trace.stop();
    }
    async someFunction2() {
      // Inicia la traza
      const trace = await this.perf.trace('movimiento');
      
      // Inicia la medición
      trace.start();
    
      // La operación que quieres medir
      await this.buttonMovi();
    
      // Detén la medición
      trace.stop();
    }
    async someFunction3() {
      // Inicia la traza
      const trace = await this.perf.trace('transferencia');
      
      // Inicia la medición
      trace.start();
    
      // La operación que quieres medir
      await this.buttonTras();
    
      // Detén la medición
      trace.stop();
    }
}


