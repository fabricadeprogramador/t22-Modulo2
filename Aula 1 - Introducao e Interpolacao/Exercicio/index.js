var app = new Vue({
    el:"#app",
    data:{
        titulo:"Dados Pessoais"
    }
});

var pessoa = new Vue({
    el:"#pessoa",
    data:{
        nome:"Bryan César Osvaldo Teixeira",
        cpf:"629.952.902-47",
        rg:"40.012.655-2",
        dataNascimento:"14/07/1996",
        email:"bryancesarosvaldoteixeira_@jetstar.com.br",
        telefone:"(82) 3519-5178",
        celular:"(82) 98242-3326",
        altura:1.71,
        peso:70,
        tipoSanguineo:"O+",
        endereco:{
            cep:"57048-126",
            rua:"Avenida Doutor Neves",
            numero:915,
            bairro:"Antares",
            cidade:"Campo Grande",
            uf:"MS"
        },
        mae:"Yasmin Lívia",
        pai:"Lorenzo Yuri Teixeira",
        
    }
});