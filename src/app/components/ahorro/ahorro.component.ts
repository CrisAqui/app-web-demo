import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirePerformance } from '@angular/fire/compat/performance';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.component.html',
  styleUrls: ['./ahorro.component.css']
})
export class AhorroComponent {

  constructor(
    //private firestoreDataService: ServiceService, 
    private router: Router,
    private gaService: GoogleAnalyticsService,
    private perf: AngularFirePerformance,
    //private firestore: AngularFirestore
    ) { }

    /* ngOnInit(){
    
      this.gaService.pageView('/ahorro', 'Página de ahorro')
      //this.someFunction()
    } */

    buttonVolver(){
      this.router.navigate(['/menu']);
    }

    async someFunction() {
      // Inicia la traza
      const trace = await this.perf.trace('ahorro');
      
      // Inicia la medición
      trace.start();
    
      // La operación que quieres medir
      await this.buttonVolver();
    
      // Detén la medición
      trace.stop();
    }
}
