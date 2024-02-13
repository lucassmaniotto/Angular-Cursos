import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;
  @Output() emitindoItemParaEditar: EventEmitter<any> = new EventEmitter();
  @Output() emitindoIdParaDeletar: EventEmitter<any> = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngOnDestroy(): void {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem() {
    this.item.comprado = !this.item.comprado;
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }
}
