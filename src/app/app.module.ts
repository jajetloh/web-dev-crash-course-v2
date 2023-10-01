import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { NgbModalModule, NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from "@angular/forms";
import { ModalContentComponent } from './modal-content/modal-content.component'

@NgModule({
    declarations: [
        AppComponent,
        TutorialComponent,
        HomeComponent,
        ResourcesComponent,
        ModalContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        NgbTypeaheadModule,
        NgbModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
