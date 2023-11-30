import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})

export class ListProductComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'unidades', 'precio', 'estado', 'categoria'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator | null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  unidades: number;
  precio: number;
  estado: string;
  categoria: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Lamina antiderrapante 3/16x4x8', unidades: 10, precio: 0.00, estado: 'Activo', categoria: 'Herramienta' },
  { position: 2, name: 'Broca de titanio 5/32', unidades: 15, precio: 20.50, estado: 'Inactivo', categoria: 'Herramienta' },
  { position: 3, name: 'Destornillador Phillips #2', unidades: 5, precio: 10.99, estado: 'Activo', categoria: 'Herramienta' },
  { position: 4, name: 'Cinta métrica 5 metros', unidades: 20, precio: 5.00, estado: 'Activo', categoria: 'Herramienta' },
  { position: 5, name: 'Martillo de garra 16 oz', unidades: 8, precio: 15.75, estado: 'Inactivo', categoria: 'Herramienta' },
  { position: 6, name: 'Llave ajustable 10 pulgadas', unidades: 12, precio: 8.50, estado: 'Activo', categoria: 'Herramienta' },
  { position: 7, name: 'Sierra para metales', unidades: 3, precio: 30.00, estado: 'Activo', categoria: 'Herramienta' },
  { position: 8, name: 'Clavos galvanizados 2"', unidades: 25, precio: 12.00, estado: 'Inactivo', categoria: 'Herramienta' },
  { position: 9, name: 'Nivel de burbuja 12"', unidades: 18, precio: 17.25, estado: 'Activo', categoria: 'Herramienta' },
  { position: 10, name: 'Pistola de silicona', unidades: 7, precio: 9.99, estado: 'Activo', categoria: 'Herramienta' },
  { position: 11, name: 'Llave hexagonal juego de 10', unidades: 14, precio: 22.75, estado: 'Inactivo', categoria: 'Herramienta' },
  { position: 12, name: 'Brocha de pintura 2 pulgadas', unidades: 11, precio: 13.50, estado: 'Activo', categoria: 'Herramienta' },
  { position: 13, name: 'Alicate de corte diagonal', unidades: 6, precio: 18.00, estado: 'Activo', categoria: 'Herramienta' },
  { position: 14, name: 'Cerradura de seguridad', unidades: 9, precio: 7.75, estado: 'Inactivo', categoria: 'Herramienta' },
  { position: 15, name: 'Taladro eléctrico 3/8"', unidades: 22, precio: 28.99, estado: 'Activo', categoria: 'Herramienta' },
  { position: 16, name: 'Pegamento multiusos', unidades: 16, precio: 25.00, estado: 'Inactivo', categoria: 'Herramienta' },
  { position: 17, name: 'Rastrillo de jardín', unidades: 4, precio: 14.50, estado: 'Activo', categoria: 'Herramienta' },
  { position: 18, name: 'Escalera de aluminio 6 pies', unidades: 13, precio: 19.75, estado: 'Activo', categoria: 'Herramienta' },
  { position: 19, name: 'Pala para jardinería', unidades: 19, precio: 11.99, estado: 'Inactivo', categoria: 'Herramienta' },

];


