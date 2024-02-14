import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  EMPTY,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
} from 'rxjs';
import { Item } from 'src/app/models/interfaces/Item';
import { LivrosResultado } from 'src/app/models/interfaces/LivrosResultado';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();
  mensagemErro = '';
  livrosResultado: LivrosResultado;

  constructor(private livroService: LivroService) {}

  totalLivrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(DEBOUNCE_TIME),
    filter((valorDigitado) => valorDigitado.length >= 3),
    switchMap((valorDigitado) => this.livroService.buscar(valorDigitado)),
    map(resultado => this.livrosResultado = resultado),
    catchError(erro => {
        console.log(erro)
        return of()
    })  );

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(DEBOUNCE_TIME),
    filter((valorDigitado) => valorDigitado.length >= 3),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.livroService.buscar(valorDigitado)),
    map(resultado => this.livrosResultado = resultado),
    map((resultado) => resultado.items ?? []),
    map((itens) => this.formatarLivros(itens)),
    catchError(() => {
      this.mensagemErro = 'Erro ao buscar livros. Tente novamente mais tarde.';
      return EMPTY;
    })
  );

  formatarLivros(itens: Item[]): LivroVolumeInfo[] {
    return itens.map((item) => new LivroVolumeInfo(item));
  }
}
