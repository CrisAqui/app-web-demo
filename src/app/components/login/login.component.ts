import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirePerformance } from '@angular/fire/compat/performance';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Cliente } from 'src/app/interfaces/cliente';
import { ServiceService } from 'src/app/services/service.service';
//import { getRemoteConfig, getValue } from 'firebase/remote-config';
import { fetchAndActivate, getValue } from 'firebase/remote-config';
import * as firebase from 'firebase/compat';
import { getRemoteConfig } from "firebase/remote-config";
import { initializeApp } from "firebase/app";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  titulo: any = "Registrarr"; 
  usuario: Cliente = { usuario: '', password: '' };

  constructor(
    private firestoreDataService: ServiceService, 
    private router: Router,
    private gaService: GoogleAnalyticsService,
    private perf: AngularFirePerformance,
    private firestore: AngularFirestore
    ) { 
      
      
    }
    
  
  ngOnInit(){
    
    const firebaseConfig = {
      apiKey: "AIzaSyCJUmfuu19-AkOZA_4mvaWmllg096x_Yzg",
      authDomain: "appdemo-ec320.firebaseapp.com",
      databaseURL: "https://appdemo-ec320-default-rtdb.firebaseio.com",
      projectId: "appdemo-ec320",
      storageBucket: "appdemo-ec320.appspot.com",
      messagingSenderId: "294823504350",
      appId: "1:294823504350:web:c9087505ddb56824b0154f",
      measurementId: "G-N8XC0CF3WP"
    };
    const app = initializeApp(firebaseConfig);
      const remoteConfig = getRemoteConfig(app);
      remoteConfig.settings.minimumFetchIntervalMillis = 60000;
      fetchAndActivate(remoteConfig)
      .then(() => {
        console.warn("entro aqui")
        const value= getValue(remoteConfig, 'pruebaText');
        this.titulo=value.asString();
        console.log(value);
        // Usa el valor de configuración como parte de tu lógica de A/B testing
      })
      .catch((err) => {
        console.error('Error al recuperar la configuración remota', err);
      }); 

    this.gaService.pageView('/login', 'Página de Inicio')
    this.someFunction()
  }

  agregarUsuario() {
    this.gaService.event('button_click', 'user_interaction', 'clicked_button');
    if (this.usuario.usuario.trim() === '' || this.usuario.password.trim() === '') return;
    this.firestoreDataService.agregarUsuario('usuarios', this.usuario)
      .then(() => {
        console.log('Usuario agregado con éxito');
        this.usuario = { usuario: '', password: '' }; // Limpia los inputs después de agregar
      })
      .catch(error => {
        console.error('Error al agregar usuario: ', error);
      });

      

      this.router.navigate(['/menu']);
  }

  goToRegistrar(){
    this.router.navigate(['/registrar']);
  }

  async someFunction() {
    // Inicia la traza
    const trace = await this.perf.trace('inicio');
    
    // Inicia la medición
    trace.start();
  
    // La operación que quieres medir
    await this.agregarUsuario();
  
    // Detén la medición
    trace.stop();
  }
}
