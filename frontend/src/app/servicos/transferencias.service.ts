import { Injectable } from '@angular/core';
//importando a biblioteca http para possibilitar a realização dos serviços http
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  // declarar url aqui para comunicar o front com o backend,
  //informando ao angular que as rotinas realizadas no back(postm put, get e delete)
  url = '/transferencia'

  //instanciando a variável http no client
  //private maneira de declarar a variável
  constructor(private http: HttpClient) { }

  //listar todas as transferências que estão armazenadas no banco de dados
  //criação da função getTransferencia para pegar as transferências presentes no banco de dados
  getTransferencia(){
    //função que retorna algo nesse caso o this http
    return this.http.get(this.url)
  }

  //get para uma transferência
  getUmaTransferencia(id:any){
    return this.http.get(this.url+ '/' + id)
  }

  //adicionar uma nova transferência, (método addTransferência)
  addTransferencia(transferencia:Transferencia){
    return this.http.post(this.url, transferencia)

  }

  //função excluir transferência
  deleteTransferencia(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  //modificar uma transferência
  editTransferencia(id:any, transferencia:Transferencia){
    return this.http.put(this.url + '/' + id, transferencia)
  }
}

export interface Transferencia{
  id_transferencia?:string
  nomeCliente?:string
  contaCliente?:string
  valor?:string
}
