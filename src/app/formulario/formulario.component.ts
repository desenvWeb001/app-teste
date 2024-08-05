import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  readonly apiURL : string;
  
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:3000';
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Telefone: ${form.value.telefone}
    Endereço: ${form.value.endereco}`;

    console.log(dados);
  }

  listarTodosProdutos() {
    this.http.get(`${ this.apiURL }/produtos`)
             .subscribe(resultado => console.log(resultado));
  }

  listarProdutoPorId() {
    this.http.get(`${ this.apiURL }/produtos/1`)
              .subscribe(resultado => console.log(resultado));
  }

  alterarProduto() {
    var produto = { id : 1, nome : "Smart TV 50 Polegadas" };
  
    this.http.put(`${ this.apiURL }/produtos/1`, produto)
              .subscribe(
                resultado => {
                  console.log('Produto alterado com sucesso.')
                },
                erro => {
                  switch(erro.status) {
                    case 400:
                      console.log(erro.error.mensagem);
                      break;
                    case 404:
                      console.log('Produto não localizado.');
                      break;
                  }
                }
              );
  }

  excluirProduto() {
    this.http.delete(`${ this.apiURL }/produtos/1`)
              .subscribe(
                resultado => {
                  console.log('Produto excluído com sucesso.');
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );


  }

  adicionarProduto() {
    /*var produto = new Produto();
    produto.nome = "Cadeira Gamer";
  
    this.http.post<Produto>(`${ this.apiURL }/produtos`, produto)
    //restante do código sem alterações*/
  }

}
