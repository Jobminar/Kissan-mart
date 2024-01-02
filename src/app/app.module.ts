import { NgModule } from '@angular/core';
import { BrowserModule ,HammerModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FreshVegetablesComponent } from './fresh-vegetables/fresh-vegetables.component';
import { FreshFruitsComponent } from './fresh-fruits/fresh-fruits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FreshVegetablesComponent,
    FreshFruitsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
