var perguntas = new Vue({
    el:"#divPerguntas",
    data: {
        listaPerguntas:[
            {
                pergunta:"1. O que é, o que é? Feito para andar e não anda.",
                resposta:"A rua",
                respostaUsuario:""
            },
            {
                pergunta:"2. O que é, o que é? Dá muitas voltas e não sai do lugar.",
                resposta:"O relógio",
                respostaUsuario:""
            },
            {
                pergunta:"3. O que é, o que é? Mesmo atravessando o rio não se molha.",
                resposta:"A ponte",
                respostaUsuario:""
            },
            {
                pergunta:"4. O que é, o que é? Tem 5 dedos, mas não tem unha.",
                resposta:"A luva",
                respostaUsuario:""
            },
            {
                pergunta:"5. O que é, o que é? Tem pescoço e não tem cabeça, tem braços e não tem mãos, tem corpo e não tem pernas.",
                resposta:"A camisa",
                respostaUsuario:""
            }
        ]
    }, methods:{
        naosei(pergunta){
            pergunta.respostaUsuario = pergunta.resposta;
        }
    }
})