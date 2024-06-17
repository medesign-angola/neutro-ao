import { Injectable, WritableSignal, signal } from "@angular/core";
import { ThemeEnum } from "@core/data/enums/theme.enum";

@Injectable({
    providedIn: 'root'
})
export class ThemeService{
    menuTheme: WritableSignal<ThemeEnum> = signal(ThemeEnum.LIGHT);

    switchTheme(theme: ThemeEnum){
        this.menuTheme.update(value => value = theme);
    }
}