import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor()
  {
    let listaPessoa = new List(Pessoa);

    let pessoa = new Pessoa();

    pessoa.setNome('Tesla');
    pessoa.setIdade(20);

    listaPessoa.Add(pessoa);

    pessoa = new Pessoa();

    pessoa.setNome('Ramanujan');
    pessoa.setIdade(21);

    listaPessoa.Add(pessoa);

    let pessoaEncontrada = listaPessoa.FirstOrDefault(x => x.getNome() === 'Ramanujan');

    alert(pessoaEncontrada.getIdade());
  }
}

export class Pessoa {

  private nome: string;
  private idade: number;

  constructor(){

  }
  
  public getNome(){

    return this.nome;
  }

  public setNome(nome: string){

    this.nome = nome;
  }

  public getIdade(){

    return this.idade;
  }

  public setIdade(idade: number){

    this.idade = idade;
  }
}

export class List {

  private listaGenerica: Array<any> = [];
  private tipo: Object;

  constructor(tipo) {

      this.tipo = tipo;
  }

  public Add(item) {

      this.listaGenerica.push(item);
  }

  private _single(lambda, tipo) {

      let elemento = this.listaGenerica.filter(lambda)[0];

      return elemento as typeof tipo;
  }

  public Single(lambda) {

      return this._single(lambda, this.tipo);
  }

  public _singleOrDefault(lambda, tipo) {

      if (this.listaGenerica.length > 0)
          return this.listaGenerica.filter(lambda)[0] as typeof tipo;
      else
          return null;
  }

  public SingleOrDefault(lambda) {

      return this._singleOrDefault(lambda, this.tipo);
  }

  public First(lambda) {

      return this._single(lambda, this.tipo);
  }

  public FirstOrDefault(lambda) {

      return this._singleOrDefault(lambda, this.tipo);
  }

  public _lastOrDefault(lambda, tipo) {

      if (this.listaGenerica.length > 0)
          return this.listaGenerica.filter(lambda)[this.listaGenerica.length - 1] as typeof tipo;
      else
          return null;
  }

  public LastOrDefault(lambda) {

      return this._lastOrDefault(lambda, this.tipo);
  }

  public _last(lambda, tipo) {

      if (this.listaGenerica.length > 0)
          return this.listaGenerica.filter(lambda)[this.listaGenerica.length - 1] as typeof tipo;
  }

  public Last(lambda) {

      return this._last(lambda, this.tipo);
  }

  public Select(lambdaElement) {

      var listaAux: Array<any> = [];

      this._where(item => (item.ativo), this.tipo).forEach(element => {
          listaAux.push(element[lambdaElement]);
      });

      return listaAux;
  }

  private _where(lambda, tipo) {

      if (this.listaGenerica.length > 0)
          return this.listaGenerica.filter(lambda) as typeof tipo;
      else
          return null;
  }

  public Where(lambda) {

      return this._where(lambda, this.tipo);
  }

  public IndexAt(item) {

    return this.listaGenerica.indexOf(item);
  }

  public Contains(item) {

    return this.listaGenerica.length > 0 && this.listaGenerica.filter(x => x == item)[0] != undefined;
  }

  public Clear() {

      this.listaGenerica = [];
  }

  public Count() {

      return this.listaGenerica.length;
  }

  public ToList() {

      return this.listaGenerica;
  }
}