import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICrud } from '../models/todos.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  public getTodos(): Observable<ICrud[]> {
    return this.firestore.collection<ICrud>('crud').valueChanges({ idField: 'uid' });
  }

  public getSingleItem(id: string): Observable<ICrud> {
    return this.firestore.collection<ICrud>('crud').doc(id).valueChanges();
  }

  public addItem(item: ICrud) {
    this.firestore.collection("crud").add(item)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  public updateItem(item: ICrud) {
    return this.firestore.collection("crud").doc(item.uid).update(item);
  }

  public deleteItem(id: string) {
    this.firestore.collection('crud').doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}
