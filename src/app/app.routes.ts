import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { ListaPessoas } from './components/lista-pessoas/lista-pessoas';

export const routes: Routes = [
    {path: "calculadora", component: Calculadora},
    {path: "lista-pessoas", component: ListaPessoas}
];
//SPA Sigle Page Application
