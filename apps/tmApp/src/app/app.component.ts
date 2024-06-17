import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@tm/button';
import { DescriptionComponent, TitleComponent, CardComponent } from '@tm/ui';
import { HeaderComponent } from '@tm/page/header';
import { LayoutComponent } from '@tm/page/layout';
import { FooterComponent } from '@tm/page/footer';
import { PageService } from '@tm/page';
import { CounterComponent } from '@tm/counter';


@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, ButtonComponent, DescriptionComponent, TitleComponent, CardComponent, LayoutComponent, FooterComponent, CounterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private readonly _pageService: PageService
  ) {}

  public handle () {
    this._pageService.onClick();
  }
}
