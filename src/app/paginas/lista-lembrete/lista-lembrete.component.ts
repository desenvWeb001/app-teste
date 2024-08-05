import { Component, OnInit , ViewChild} from '@angular/core';
import { Subscriber } from 'rxjs';
import {Lembrete} from '../../interface/lembrete';
import {LembreteService} from '../../services/lembrete.service';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];
  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
  }

  getListaLembrete(){
      this.lembreteService.getListarLembretes().subscribe((lembretes: Lembrete[]) =>{
        this.lembretes = lembretes;
      },);
  }

}
