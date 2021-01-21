import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICrud } from 'src/app/shared/models/todos.interface';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  public crudId: string;
  public singleItem: ICrud;
  constructor(private route: ActivatedRoute, private crudeService: CrudService) {
    this.crudId = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    this.crudeService.getSingleItem(this.crudId).subscribe((item: ICrud) => {
      if (!item) {
        return;
      }

      this.singleItem = item;
    })
  }

}
