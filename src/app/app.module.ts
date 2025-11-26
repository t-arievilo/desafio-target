import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComissoesComponent } from './components/comissoes/comissoes.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { JurosComponent } from './components/juros/juros.component';

@NgModule({
  declarations: [
    AppComponent,
    ComissoesComponent,
    EstoqueComponent,
    JurosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
