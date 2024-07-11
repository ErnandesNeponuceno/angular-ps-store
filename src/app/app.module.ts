import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { register } from 'swiper/element/bundle';
import { SwiperComponent } from './components/swiper/swiper.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreviewComponent } from './components/preview/preview.component';
import { JogosMensaisComponent } from './components/jogos-mensais/jogos-mensais.component';
import { BannerComponent } from './components/banner/banner.component';
register();


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    SwiperComponent,
    FooterComponent,
    PreviewComponent,
    JogosMensaisComponent,
    BannerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
