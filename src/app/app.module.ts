import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbPopoverModule, NbInputModule, NbFormFieldModule, NbButtonModule, NbTooltipModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { FormsModule } from '@angular/forms';
import { FilterByTagPipe } from './pipes/filter-by-tag.pipe';
import { PhotosByTagComponent } from './components/photos-by-tag/photos-by-tag.component';
import { ApplyTagToPhotoComponent } from './components/apply-tag-to-photo/apply-tag-to-photo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    TagsListComponent,
    FilterByTagPipe,
    PhotosByTagComponent,
    ApplyTagToPhotoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    AppRoutingModule,
    NbCardModule,
    MatIconModule,
    NbPopoverModule,
    MatListModule,
    FormsModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonModule,
    NbTooltipModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
