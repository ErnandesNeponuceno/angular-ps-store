import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerSections: { items: string[] }[] = [
    {
      items: [
        'Suporte',
        'Política de privacidade',
        'Termos de uso do site',
        'Mapa do site',
        'PlayStation Studios',
        'Legal',
        'Sobre a SIE'
      ]
    },
    {
      items: [
        'Termos de serviço da PSN',
        'Política de cancelamento da PS Store',
        'Avisos de saúde',
        'Sobre as classificações'
      ]
    },
    {
      items: [
        'Facebook',
        'Twitter',
        'YouTube',
        'Instagram',
        'Aplicativo para Android',
        'Aplicativo para iOS'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
