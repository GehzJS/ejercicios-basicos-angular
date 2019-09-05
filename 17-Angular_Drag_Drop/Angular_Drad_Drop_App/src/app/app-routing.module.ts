import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { DragComponent } from './components/drag/drag.component';
import { CountriesComponent } from './components/countries/countries.component';

const routes: Routes = [
  { path: 'virtual-scroll', component: VirtualScrollComponent },
  { path: 'drag', component: DragComponent },
  { path: 'drag-drop', component: CountriesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'virtual-scroll' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
