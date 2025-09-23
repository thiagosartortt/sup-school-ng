import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Aluno {
  id: string;
  nome: string
  nota1: number;
  nota2: number;
  nota3: number;
  frequencia: number;
  media: number;
  status: string;
}

@Component({
  selector: 'app-cadastro-aluno',
  imports: [FormsModule],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.scss'
})
export class CadastroAluno {

  // Propriedades
  alunos: Aluno [];  
  nome: string = "";
  nota1?: number;
  nota2?: number;
  nota3?: number;
  frequencia?: number;

  constructor(private router: Router) {
    this.alunos = this.carregarAlunosLocalStorage();
  }

  // Métodos
  salvar(): void {
    // Variavel local
    let media = this.calcularMedia();
    let status = this.descobrirStatus(media);
    console.log(media);
    console.log(status);

    let aluno: Aluno = {
      id: crypto.randomUUID(),
      nome: this.nome,
      nota1: this.nota1!,
      nota2: this.nota2!,
      nota3: this.nota3!,
      frequencia: this.frequencia!,
      media: media,
      status: status,
    };

    this.alunos.push(aluno);

    this.salvarLocalStorage();
    this.router.navigate(["/alunos"]);
  }

  salvarLocalStorage(): void {
    let alunosString = JSON.stringify(this.alunos);

    localStorage.setItem("alunos", alunosString);
  }

  carregarAlunosLocalStorage(): Aluno[] {
    let alunosDoLocalStorage = localStorage.getItem("alunos");
    if(alunosDoLocalStorage === null){
      return [];
    }

    let alunos : Aluno[] = JSON.parse(alunosDoLocalStorage);
    return alunos;
  }

  calcularMedia(): number {
    let resultado: number = (this.nota1! + this.nota2! + this.nota3!) / 3;
    return resultado;
  }

  descobrirStatus(media: number): string {
    let status = "";
    if (media >=7 && this.frequencia! >= 75) {
      status = "Aprovado";
    } else if (media < 7) {
      status = "Reprovado Média";
    } else {
      status = "Reprovado Frequencia";
  }

  return status; 


}

} 
