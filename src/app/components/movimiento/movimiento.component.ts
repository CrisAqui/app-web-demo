import { Component } from '@angular/core';
import { AngularFirePerformance } from '@angular/fire/compat/performance';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent {
  constructor(
    //private firestoreDataService: ServiceService, 
    private router: Router,
    private gaService: GoogleAnalyticsService,
    private perf: AngularFirePerformance,
    //private firestore: AngularFirestore
    ) { }

    /* ngOnInit(){
    
      this.gaService.pageView('/movimiento', 'Página de movimiento')
      //this.someFunction()
    } */

    buttonVolver(){
      this.router.navigate(['/menu']);
    }

    async someFunction() {
      // Inicia la traza
      const trace = await this.perf.trace('movimiento');
      
      // Inicia la medición
      trace.start();
    
      // La operación que quieres medir
      await this.buttonVolver();
    
      // Detén la medición
      trace.stop();
    }
}
