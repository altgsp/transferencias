import { Transferencias, TransferenciaService } from './../../servicos/transferencias.service';
import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transferencias:Transferencias ={
    id_transferencias:'',
    nomeCliente:'',
    contaCliente:'',
    valor:''
  }

  constructor(private transferenciasService:TransferenciasService, private router:Router, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {

    const id_entrada = <any>this.activatedRoute.snapshot.params['id']

    this.transferenciasService.getUmaTransferencia(id_entrada).subscribe({
      next: (resultado) => this.transferencias = (resultado),
      error: (erro) => console.error(erro),
      complete: () => console.info("Transferência encontrada")
    })

  }

  modificar(){
    this.transferenciasService.editTransferencia(this.transferencias.id_transferencia,this.transferencias).subscribe({
      next: (resultado) => console.log(resultado),
      error: (erro) => console.error(erro),
      complete: () => console.info("edição completada com êxito")
    })
    this.router.navigate(['/inicio'])

  }

}
