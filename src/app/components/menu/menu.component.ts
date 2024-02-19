import { Component } from '@angular/core';

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
}


