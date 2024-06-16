import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@tm-workspace/header';
import { ButtonComponent } from '@tm/button';
import { LayoutComponent } from '@tm/layout';
import { FooterComponent } from '@tm/footer';
import { DescriptionComponent, TitleComponent, CardComponent } from '@tm/ui';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, ButtonComponent, LayoutComponent, DescriptionComponent, TitleComponent, CardComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
