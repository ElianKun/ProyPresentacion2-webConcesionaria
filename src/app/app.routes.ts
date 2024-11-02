import { Routes } from '@angular/router';
import path from 'node:path';

export const routes: Routes = [

{path:"comentarios", loadComponent: () => import("./comentarios/aside.component").then(m=>
        m.AsideComponent) },
        
{path:"listaautos", loadComponent: () => import("./listautos/listautos.component").then(m=>
                m.ListautosComponent) },    

];
