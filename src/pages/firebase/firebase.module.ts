import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebasePage } from './firebase';
import { ManterProdutoPage } from '../manter-produto/manter-produto';
import { ManterProdutoPageModule } from '../manter-produto/manter-produto.module';
// import {MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [
    FirebasePage,
  ],
  imports: [
    // MatExpansionModule,
    IonicPageModule.forChild(FirebasePage),
  ],
})
export class FirebasePageModule {}
