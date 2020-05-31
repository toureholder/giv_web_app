import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainLayoutComponent, FooterComponent, NavComponent],
  imports: [
    // vendor
    BrowserModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
