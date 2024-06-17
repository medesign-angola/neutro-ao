import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ThemeEnum } from '@core/data/enums/theme.enum';
import { ThemeService } from '@core/services/theme/theme.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent implements OnInit, OnDestroy {
  private theme = inject(ThemeService);
  private themeEnum = ThemeEnum;

  ngOnInit(): void {
    this.theme.switchTheme(this.themeEnum.DARK);
  }

  ngOnDestroy(): void {
    this.theme.switchTheme(this.themeEnum.LIGHT);
  }

}
