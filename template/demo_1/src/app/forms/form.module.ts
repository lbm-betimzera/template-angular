import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'basic-elements', component: BasicElementsComponent },
]

@NgModule({
  declarations: [BasicElementsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    NgbModule,
  ],
  providers: []
})
export class FormModule { }
