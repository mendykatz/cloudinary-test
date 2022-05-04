import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbPopoverModule, NbInputModule, NbFormFieldModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TagsListComponent } from './tags-list/tags-list.component';
import { FormsModule } from '@angular/forms';
import { FilterByTagPipe } from './pipes/filter-by-tag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    TagsListComponent,
    FilterByTagPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbCardModule,
    MatIconModule,
    NbPopoverModule,
    MatListModule,
    FormsModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
