Vue.component('oferta',{
    props:[
    'pontosPoder',
    'imagem',
    'nome',
    'trofeus',
    'valor',
    'moeda'
    ],
    template:
        `<div class="oferta"  @click='comprar'> 
            <div class="nome"> 
                <div class="imagem">
                    <img src="assets/img/pontos-poder-triangulo.svg"> 
                    <span> PONTOS DE PODER </span>
                </div>
                <div class="pontoPoder">
                    <img  src="assets/img/pontos-poder.png">
                    <span> {{ pontosPoder }} </span>
                </div>
            </div>
            <div class="foto">
                <img :src="imagem">
            </div>
            <div class="preco">
                <img v-if="valor != 0" :src="'assets/img/'+moeda+'.png'">
                <span> {{ valor > 0 ? valor : 'GRÁTIS' }} </span>
            </div>
        </div>`,
    methods:{
        comprar (){
            this.$emit('comprar');
        }
    }
});