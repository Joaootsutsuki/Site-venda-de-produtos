
var formulario = document.querySelector('form#form_contato');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    var dados = new FormData(formulario);
    var nome = dados.get('nome');
    var email = dados.get('email');
    var turma = dados.get('turma');
    var motivo = dados.get('motivo');
    var mensagem = dados.get('mensagem');
    
    console.log(nome, email, turma, motivo, mensagem);

    
    var resultado = document.createElement('p');
    resultado.innerHTML = "";
    resultado.innerHTML = `
        ${nome}, sua mensagem foi enviada com sucesso!
    `
    formulario.append(resultado);

    var templateParams = {
    nome: nome,
    motivo: motivo,
    mensagem: mensagem,
    turma: turma,
    from_name: "João Vitor Vitosoaski",
    email: email
};

emailjs.send("service_9kfglx8","template_bwb66nm", templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error)
    });
   
});


function AddCart(){
    var teste = document.getElementById("quantidade_carrinho").innerHTML;
    var quantidade = parseInt(teste) + 1;
    document.getElementById("quantidade_carrinho").innerHTML = quantidade;
}


function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {

            if(e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
                
            }
        });
    }
}

function hideEspecificacoes(){
    var divs = document.querySelectorAll('div.especificacoes')
    for (let index = 0; index < divs.length; index++) {
        const element = divs[index];
        element.style.display = 'none'
    }
}

function play(){
    iniciaModal('modal-view');

    addEventListener('click', (e) => {
        
    
        if(e.target.id == 'gabinete') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/gabinete _gamemax_rockstar.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/gabinete _gamemax_rockstar_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/gabinete _gamemax_rockstar_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Gabinete";
            hideEspecificacoes()
            document.getElementById('especificacoes_gabinete').style.display = 'block';

        
        }else if(e.target.id == 'memoria_ram') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/memoria_ram_8gb.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/memoria_ram_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/memoria_ram_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Memoria Ram Team Group T-force Vulcan";
            hideEspecificacoes()
            document.getElementById('especificacoes_memoria_ram').style.display = 'block';
        
            
        }else if(e.target.id == 'placa_mae') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/asusprime_h510m.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/asusprime_h510m_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/asusprime_h510m_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Placa mãe ASRock H510M-HVS R2.0";
            hideEspecificacoes()
            document.getElementById('especificacoes_placa_mae').style.display = 'block';

        }else if(e.target.id == 'monitor') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/monitor_zowie_240hz.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/monitor_zowie_240hz_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/monitor_zowie_240hz_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Monitor Gamer Zowie XL2546K, 24.5 240Hz";
            hideEspecificacoes()
            document.getElementById('especificacoes_monitor').style.display = 'block';
        }else if(e.target.id == 'processador') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/processador_i912th.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/processador_i912th_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/processador_i912th_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Processadore Intel® Core™ i9-12900K Geração";
            hideEspecificacoes()
            document.getElementById('especificacoes_processador').style.display = 'block';
        }else if(e.target.id == 'pasta_termica') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/pasta_termica.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/pasta_termica_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/pasta_termica_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Pasta Térmica Gelid GC-Extreme";
            hideEspecificacoes()
            document.getElementById('especificacoes_pasta_termica').style.display = 'block';
        }else if(e.target.id == 'headset') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/morcego_gfallen.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/morcego_gfallen_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/morcego_gfallen_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Headset Gamer Fallen Morcego Branco";
            hideEspecificacoes()
            document.getElementById('especificacoes_headset').style.display = 'block';
        }else if(e.target.id == 'cooler') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/water_cooler.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/water_cooler_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/water_cooler_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Water Cooler Sangue Frio 2 120mm";
            hideEspecificacoes()
            document.getElementById('especificacoes_cooler').style.display = 'block';
        }else if(e.target.id == 'windows') {
            document.getElementById('imagem_slide_1').src = '/img/produtos/windows_10.png';
            document.getElementById('imagem_slide_2').src = '/img/produtos/windows_10_2.png';
            document.getElementById('imagem_slide_3').src = '/img/produtos/windows_10_3.png';
            document.getElementById('titulo_componente_modal').innerHTML = "Windows 10 Pro";
            document.getElementById('titulo_especificacao_modal').innerHTML = "Requisitos";
            hideEspecificacoes()
            document.getElementById('especificacoes_windows').style.display = 'block';
        }
    });
    

    /* SLIDER */
    var count = 1;
    document.getElementById("radio1").checked = true;

    setInterval( function(){
        nextImage();
    }, 10000)

    function nextImage(){
        count++;
        if(count==4){
            count = 1;
        }

        document.getElementById("radio"+count).checked = true;
    }

/* FIM SLIDER */
}








