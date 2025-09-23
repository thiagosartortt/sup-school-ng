import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { ListaPessoas } from './components/lista-pessoas/lista-pessoas';
import { CadastroAluno } from './components/cadastro-aluno/cadastro-aluno';
import { ListaAlunos } from './components/lista-alunos/lista-alunos';

export const routes: Routes = [
    {path: "calculadora", component: Calculadora},
    {path: "lista-pessoas", component: ListaPessoas},
    {path: "alunos", component: ListaAlunos },
    {path: "alunos/cadastro", component: CadastroAluno}
];
//SPA Sigle Page Application
