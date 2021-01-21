import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICrud } from 'src/app/shared/models/todos.interface';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public items: ICrud[];
  public uidCompare: string;
  public itemForm: FormGroup;

  public title: string;
  public author: string;
  public price: number;

  constructor(
    private formBuilder: FormBuilder,
    private crudeService: CrudService) { }

  ngOnInit(): void {
    this.initForm();
    this.getTodos();
  }

  private initForm(): void {
    this.itemForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  private getTodos(): void {
    this.crudeService.getTodos().subscribe((item: ICrud[]) => {
      if (!item) {
        return;
      }
      this.items = item
      console.error(item)
    })
  }

  public addItem() {
    this.crudeService.addItem(this.itemForm.value);
  }

  public deleteItem(id: string): void {
    this.crudeService.deleteItem(id);
  }

  public editMode(item: ICrud) {
    this.uidCompare = item.uid;
  }

  public editItem(item: ICrud) {
    this.crudeService.updateItem(item).then(() => {
       console.log('Updated Successfully')
    })
  }
}
