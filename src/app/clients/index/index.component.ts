import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clients: any
  columns: string[] = ['name', 'email', 'adress', 'tel', 'id'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(public clientService: ClientService) { }
  ngOnInit(): void {
    this.clientService.getAll().subscribe((data: Client[]) => {
      this.clients = new MatTableDataSource<any>(data);
      this.clients.paginator = this.paginator;
      this.clients.sort = this.sort;
      console.log(this.clients.data);
    })
  }
  deleteClient(id: number) {
    this.clientService.delete(id).subscribe(res => {
      const data = this.clients = this.clients.filteredData.filter((item: { id: number; }) => item.id !== id);
      console.log(res);
      this.clients = new MatTableDataSource<any>(data)
      this.clients.paginator = this.paginator;
      this.clients.sort = this.sort;

    })
  }

  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.clients.filter = filter.trim().toLowerCase();
  }



}
