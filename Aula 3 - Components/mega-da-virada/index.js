Vue.component('numero',{
    props:[
    'numerosorteado',
    'cor'
    ],
    template:
        `<div class="numero"
        :style="
        'background-color: '+ cor + '; border-radius: 150px; '"
        > {{numerosorteado}} </div>`
    
});

var app = new Vue({
    el:"#app",
    data: {
        listaNumeros: []
    },
    methods: {
        sortear() {
            this.listaNumeros=[];
            for (var i = 0; i < 10; i++) {
                this.listaNumeros.push( Math.floor(Math.random() * 60));
            } console.log(this.listaNumeros);        
        },
    }
})
