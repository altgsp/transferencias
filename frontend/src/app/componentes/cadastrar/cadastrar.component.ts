import { Transferencia, TransferenciaService } from 'src/app/servicos/transferencias.service';
import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  transferencia:Transferencia ={
    id_transferencia:'',
    nomeCliente:'',
    contaCliente:'',
    valor:''
  }

  constructor(private transferenciaService:TransferenciaService, private router:Router) { }

  ngOnInit(): void {
  }

  adicionar(){
    delete this.transferencia.id_transferencia

    this.transferenciaService.addTransferencia(this.transferencia).subscribe({
      next: (resultado) => console.log(resultado),
      error: (erro) => console.error(erro),
      complete: () => console.info('completado o cadastro')
    })

    this.router.navigate(['/inicio'])
  }

}
