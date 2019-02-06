Vue.component('brawler',{
    props:[
    'trofeus',
    'progressoTrofeus', 
    'imagem',
    'poder',
    'pontosPoder',
    'totalPontosPoder'
    ],
    template:
        `<div class="brawler"> 
            <div class="trofeu">
                <div class="pontos"> 
                    <div class="progresso" :style="{ 'width': progressoTrofeus}"> </div>
                    <div >
                        <img src="assets/img/trofeu.png">
                        <span> {{trofeus}} </span>
                    </div>
                </div> 
            </div>
            <div class="foto" :style="{ 'background-image': 'url(' + imagem + ')' }"> 
                <div class="poder"> 
                    <span> PODER {{poder}} </span>
                </div>
            </div>
            
            <div class="pontoPoder"> 
                <img src="assets/img/pontos-poder.png">
                
                <div class="pontos"> 
                    <div class="progresso" :style="{ 'width': getProgressoPontosPoder(pontosPoder, totalPontosPoder )}"> </div>
                    <span>  {{pontosPoder}} / {{totalPontosPoder}}  </span>
                </div>
                
            </div>
            
        </div>`,
    methods:{
        getProgressoPontosPoder (pontosPoder, totalPontosPoder ){
            return (pontosPoder / totalPontosPoder) * 100 + '%';
        }
    }
    
});