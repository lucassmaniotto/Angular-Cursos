import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../service/consulta-cep.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    form.valid
      ? this.router.navigate(["/sucesso"])
      : alert("Formulário inválido");
  }

  buscarCep(event: any, form: NgForm) {
    const cep = event.target.value;
    if (cep.length !== '') {
      return this.consultaCepService.getConsultaCEP(cep).subscribe((data) => {
        this.popularFormulario(data, form);
      })
    }
    return;
  }

  popularFormulario(data: any, form: NgForm) {
    form.form.patchValue({
      endereco: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    });
  }
}
