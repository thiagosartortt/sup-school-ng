import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { ListaTurmas } from '../lista-turmas/lista-turmas';

interface Turma {
  id: string;
  nome: string;
  sigla: string;

}

@Component({
  selector: 'app-cadastro-turma',
  imports: [FormsModule],
  templateUrl: './cadastro-turma.html',
  styleUrl: './cadastro-turma.scss'
})
export class CadastroTurma {


  turmas: Turma[];
  nome: string = "";
  sigla: string = "";

  constructor(private router: Router) {
    this.turmas = this.carregarTurmaLocalStorage();
  }

  salvar(): void {

    let turma: Turma = {
      id: crypto.randomUUID(),
      nome: this.nome,
      sigla: this.sigla
    };

    this.turmas.push(turma);

    this.salvarLocalStorage();
  }


  salvarLocalStorage(): void {
    let turmasString = JSON.stringify(this.turmas);

    localStorage.setItem("turmas", turmasString);
  }

  carregarTurmaLocalStorage(): Turma[] {
    let turmasDoLocalStorage = localStorage.getItem("alunos");
    if (turmasDoLocalStorage === null) {
      return [];
    }

    let turmas: Turma[] = JSON.parse(turmasDoLocalStorage);
    return turmas;
  }

}