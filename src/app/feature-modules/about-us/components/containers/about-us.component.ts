import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ThemeEnum } from '@core/data/enums/theme.enum';
import { ThemeService } from '@core/services/theme/theme.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit, OnDestroy {

  private theme = inject(ThemeService);

  ngOnInit(): void {
    this.theme.switchTheme(ThemeEnum.DARK);
  }

  ngOnDestroy(): void {
    this.theme.switchTheme(ThemeEnum.LIGHT);
  }

}
