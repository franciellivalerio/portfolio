const about = document.querySelector('#about');

const formulario = document.querySelector('#formulario');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub(){

    try{

        const dadosPerfil = await fetch(`https://api.github.com/users/franciellivalerio`)
        const perfil = await dadosPerfil.json();
        
        let conteudo = `
            <img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name}>


            <article id="sobre_texto" class="segundo_menu">

                <h1 class="sobre_mim">Sobre mim</h1>

                <p>
                    Me chamo Francielli Valerio e sou desenvolvedora full stack JavaScript/TypeScript. Atualmente estou
                    cursando Análise e Desenvolvimento de Sistemas, moro na baixada fluminense do Rio de Janeiro e entrei no mundo da tecnologia a partir de uma transição de carreira.
                    <p>
                    Desde o começo, senti a necessidade de fazer esse campo tão imenso ser um lugar onde as pessoas menos experientes pudessem experiementar acolhimento.
                    Tenho um perfil de estudos profissional na rede social X (antigo Twitter) onde eu compartilho da minha rotina e dicas de estudo tanto para back-end quanto
                    para front-end. Hoje, já somo mais de 2 MILHÕES de visualizações e milhares de seguidores que me apoiam e seguem meus conteúdos.
                </p>


                <div id="sobre_github" class="botao_github">

                    <a target="_blank" href="${perfil.html_url}"> GitHub </a>
                    <span> ${perfil.followers} </span> <span> ${perfil.public_repos} </span>


                </div>

            </article>

        `
        about.innerHTML = conteudo;

    }catch(error){
        console.log(error);
    }
}

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if(!campoEmail.value.match(emailRegex)){
        
        txtEmail.innerHTML = 'Email inválido. Digite um e-mail válido.';
        campoEmail.focus();
        return;

    }else{
        txtEmail.innerHTML = '';
    }
})

getApiGithub();