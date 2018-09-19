import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ProdutoService {
  produtosCollection: AngularFirestoreCollection<Produto>;
  produtos: Observable<Produto[]>;
  produtosDoc: AngularFirestoreDocument<Produto>;

  constructor(public afs:AngularFirestore) {
    this.produtosCollection = this.afs.collection('produto',ref => ref.orderBy('nome'));
    // this.tasks = this.afs.collection('tasks').valueChanges();
    // this.produtos = this.produtosCollection.snapshotChanges().map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Produto;
    //     data.uuid = a.payload.doc.id;
    //     return data;
    //   });
    // });
      this.produtos = this.produtosCollection.snapshotChanges().pipe(
        map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as Produto;
            //const id = a.payload.doc.id;
            return { ...data };
        });
        })
      );
  }

  getProdutos() {
    return this.produtos; 
  }

  addProduto(produto: Produto): Promise<any>{
    return this.produtosCollection.add(produto);
  }

  deleteProduto(produto: Produto): Promise<any> {
    this.produtosDoc = this.afs.doc(`produto/${produto.uuid}`);
    return this.produtosDoc.delete();
  }

  updateProduto(produto: Produto): Promise<any> {
    this.produtosDoc = this.afs.doc(`produto/${produto.uuid}`);
    return this.produtosDoc.update(produto);
  }
}