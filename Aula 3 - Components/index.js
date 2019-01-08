// Component Global
Vue.component('botao',{
    props:[
        'nome',
        'cor'
    ],
    methods:{
        alerta(){
            alert( this.nome );
        }
    },
    template: `
        <button 
            v-on:click=" alerta()"
            :style=" 'background-color:' + cor +';'+
            'color: white; width:120px; height: 35px;'
            "
        > {{ nome }} </button>
    `
});

//Component Local
var campoTexto = {
    template: `
        <input type="text" placeholder="Texto">
    `
}

var app = new Vue({
    el:'#app',
    components:{
        'campo-texto': campoTexto
    }
});