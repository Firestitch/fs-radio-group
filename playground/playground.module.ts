import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FsRadioGroupModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app/material.module';
import { VerticalComponent } from './app/components/vertical/vertical.component';
import { HorizontalComponent } from './app/components/horizontal/horizontal.component';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsRadioGroupModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FlexLayoutModule,
    FsExampleModule,
    FsFormModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    HorizontalComponent,
    VerticalComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
