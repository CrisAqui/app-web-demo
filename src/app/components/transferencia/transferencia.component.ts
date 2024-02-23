import { Component } from '@angular/core';
import { AngularFirePerformance } from '@angular/fire/compat/performance';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
  constructor(
    //private firestoreDataService: ServiceService, 
    private router: Router,
    private gaService: GoogleAnalyticsService,
    private perf: AngularFirePerformance,
    //private firestore: AngularFirestore
    ) { }

   /*  ngOnInit(){
    
      this.gaService.pageView('/transferencia', 'Página de transferencia')
      //this.someFunction()
    } */

    buttonVolver(){
      this.router.navigate(['/menu']);
    }

    async someFunction() {
      // Inicia la traza
      const trace = await this.perf.trace('transferencia');
      
      // Inicia la medición
      trace.start();
    
      // La operación que quieres medir
      await this.buttonVolver();
    
      // Detén la medición
      trace.stop();
    }
}
