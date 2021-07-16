import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule,
    PhotoFrameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
