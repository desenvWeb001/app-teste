import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
// import teste
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'


import { FormularioComponent } from './formulario/formulario.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  
  declarations: [
    AppComponent,
    ContadorComponent,
    ClickMeComponent,
    TooltipExampleComponent,
    FormularioComponent,
    ListaLembreteComponent,
    CadastrarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule,
    // serve para disparar requisições a API
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
