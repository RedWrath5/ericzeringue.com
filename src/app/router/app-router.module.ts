import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { SnakeComponent } from '../snake/snake.component';
import { GalleryComponent } from '../gallery/gallery.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home',     component: HomepageComponent },
    { path: 'snake',    component: SnakeComponent},
    { path: 'gallery', component: GalleryComponent},

    { path: '**', redirectTo: '/home' },
];

@NgModule ({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
