import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/path', pathMatch: 'full' },
    { path: 'projects', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'tasklists', redirectTo: '/tasklists', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
