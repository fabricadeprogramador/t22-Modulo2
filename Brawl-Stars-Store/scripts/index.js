var loja = new Vue({
    el:'#loja',
    data:{
        titulo: 'Encontre itens incriveis para deixar seu brawler mais forte !',
        moedas:{
            moeda: 100,
            gema: 15
        },
        brawlers,
        ofertasDiarias
    },
    methods:{
        comprar(item){
            console.log(item);
            var brawler = this.brawlers.find(brawler =>  brawler.id === item.brawlerId);

            if (this.moedas.moeda >= item.valor && brawler.pontosPoder != brawler.totalPontosPoder ){
                
                if(  (brawler.pontosPoder + item.pontosPoder) < brawler.totalPontosPoder){
                    brawler.pontosPoder +=item.pontosPoder;
                }else{
                    brawler.pontosPoder = brawler.totalPontosPoder;
                }
                
                this.moedas[item.moeda] -= item.valor;
            }else {
                var mensagem = 
                brawler.pontosPoder === 
                brawler.totalPontosPoder ? 
                'Nivel maximo de poder atingido' : 'Saldo insuficiente' ;


                alert(mensagem);
            }
        }
    }
})