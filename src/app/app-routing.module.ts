import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { TutorialComponent } from "./tutorial/tutorial.component"
import { ResourcesComponent } from "./resources/resources.component"

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tutorial', component: TutorialComponent },
    { path: 'resources', component: ResourcesComponent },
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {
}
