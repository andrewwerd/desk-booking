import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditWorkplaceComponent } from './add-edit-workplace/add-edit-workplace.component';
import { FloorsComponent } from './floors.component';
import { DeskModule } from 'app/components/desk/desk.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';
import { FloorTileComponent } from './floor-tile/floor-tile.component';

@NgModule({
  declarations: [
    AddEditWorkplaceComponent,
    FloorsComponent,
    FloorTileComponent
  ],
  imports: [
    CommonModule,
    DeskModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule.forChild([{
      path: '',
      component: FloorsComponent
    }])
  ],
  exports: [],
  providers: [],
})
export class FloorsModule { }
