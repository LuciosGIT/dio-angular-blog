import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  photoCover: string = "https://lumiere-a.akamaihd.net/v1/images/iron-man_dft_m_db79b94b.jpeg";

  contentTitle: string = "MINHA NOTÍCIA";

  contentDescription: string = "Ola mundo!";

}
