var menu = new Vue({
    el:"#menu",
    data:{
        titulo: "Fábrica de Programador"
    }
});


var termo = new Vue({
    el:"#termo",
    data:{
        titulo:"Termo de uso",
        introducao:{
            titulo:"1. Introdução",
            texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor tristique sapien. Donec interdum sed libero et accumsan. Vestibulum faucibus nisl neque, ornare egestas risus volutpat non. Sed dignissim sodales felis vulputate fringilla. Fusce fringilla augue ac erat condimentum aliquet. Aliquam eget consectetur tellus. Nunc tempor non neque sed maximus. Nunc porta mauris vitae enim gravida ullamcorper. Aliquam semper nulla nec feugiat scelerisque. Vestibulum massa sapien, auctor vitae justo in, fermentum aliquam diam. Vivamus nisi dui, pretium nec cursus vitae, placerat dapibus sapien. Aenean fermentum et risus ut vehicula. Duis tristique elit vitae risus condimentum vulputate."
        },
        privacidade:{
            titulo:"2. Privacidade",
            texto:"Vivamus malesuada, libero vulputate ornare consectetur, ipsum mauris pellentesque arcu, non consequat libero est egestas risus. Proin eget lacus consequat, euismod magna in, interdum nisl. Curabitur vitae tempor dui. Donec eget viverra purus. Phasellus malesuada sagittis nisi, et blandit neque blandit a. Nulla aliquet massa quis lacus venenatis malesuada. Vestibulum vitae eleifend ex, sed ultrices purus. Fusce risus mauris, sodales non augue vel, bibendum consectetur erat. Ut at nulla libero. Phasellus nec rhoncus massa.Vestibulum augue enim, viverra ut efficitur eget, egestas vitae massa. Praesent auctor, sapien sed egestas sagittis, odio tellus varius ante, a tincidunt odio arcu id nulla. Sed vitae egestas est. Donec vulputate, quam vel hendrerit fermentum, nibh massa porta risus, ut tempor libero odio et sem. Donec turpis lorem, viverra non dui vel, auctor malesuada purus. Morbi blandit tincidunt nisi at ultricies. Proin dignissim urna quis quam maximus, sed auctor ex lacinia. Aenean condimentum velit est, eget venenatis nulla imperdiet eu. Donec felis tortor, rutrum dapibus molestie ac, consequat in augue.Ut sed condimentum libero. Cras commodo, dui non semper finibus, nulla diam hendrerit turpis, lobortis rutrum elit erat eu tellus. Phasellus egestas elit ut auctor commodo. Proin vel nibh nisl. Fusce ut metus eu nibh fermentum convallis et a enim. Nullam lobortis, ligula nec suscipit luctus, dolor purus posuere nisi, mollis porta dui ipsum sit amet magna. Cras ultrices maximus felis ut efficitur. Praesent magna nisi, tincidunt nec sollicitudin sodales, aliquam at erat."
        },
        aceitacao:{
            titulo:"3. Aceitação dos Termos",
            texto:"Donec accumsan eleifend mauris nec congue. Vivamus consectetur nibh et vestibulum pharetra. Fusce felis enim, volutpat et est sed, posuere semper ligula. Quisque malesuada ante ligula. Ut at enim id eros cursus pulvinar. Donec sollicitudin molestie nisl, eu condimentum lectus aliquam vel. Ut pulvinar posuere neque, at viverra lacus vehicula sed. Pellentesque at accumsan lorem, ut ullamcorper elit. Sed in lorem ac lectus tincidunt pretium ut congue nisi. Maecenas a erat condimentum lectus tristique tristique vel in mi. Duis at metus at arcu ornare dignissim in ut nisi. Pellentesque vel odio risus. Integer euismod libero est, quis elementum nisl viverra vitae. Phasellus consectetur leo sit amet nibh tincidunt sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lectus enim, ultricies at varius quis, cursus nec diam. Mauris dapibus efficitur risus, porta tempus mi rhoncus quis. Mauris vitae bibendum nisi. Integer condimentum venenatis risus ut mattis. Mauris id orci laoreet, pulvinar sapien nec, molestie ipsum. Nulla vel ornare sapien. Maecenas ut nunc est."
        },
        cancelamento:{
            titulo:"4. Cancelamento",
            texto:"Donec laoreet elit ac sem suscipit bibendum. Nam vehicula urna ut augue aliquam pharetra. In nunc arcu, consequat in convallis hendrerit, molestie a nibh. Quisque ante lacus, rutrum sit amet dapibus ut, pulvinar nec urna. Sed non nisl auctor, lobortis est eget, malesuada quam. Curabitur in nisl dolor. Donec vel blandit risus, vel vestibulum lorem. Ut sapien mi, consequat tempor euismod vel, viverra vel dolor."
        }
    }
})