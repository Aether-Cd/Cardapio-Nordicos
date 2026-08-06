let produtos = [];
let categoriaAtual = "Todos";


document.addEventListener("DOMContentLoaded", () => {


const container = document.getElementById("produtos");
const pesquisa = document.getElementById("search");
const botoesCategoria = document.querySelectorAll(".categoria");
const botaoTopo = document.getElementById("topo");




// ==========================
// CARREGAR PRODUTOS JSON
// ==========================


async function carregarProdutos(){

    try{


        const resposta = await fetch("data/produtos.json");


        if(!resposta.ok){

            throw new Error("Erro ao carregar produtos.json");

        }



        produtos = await resposta.json();



        console.log(
            "Produtos carregados:",
            produtos.length
        );



        mostrarProdutos(produtos);



    }catch(erro){


        console.error(erro);



        container.innerHTML = `

            <div class="erro">

                Erro ao carregar o cardápio.

            </div>

        `;


    }

}

// ==========================
// FILTRO
// ==========================


function filtrarProdutos(){



    let lista = [...produtos];



    if(categoriaAtual !== "Todos"){


        lista = lista.filter(produto =>

            produto.categoria === categoriaAtual

        );


    }





    const texto = pesquisa.value.toLowerCase();



    if(texto !== ""){


        lista = lista.filter(produto =>


            produto.nome
            .toLowerCase()
            .includes(texto)



            ||

            

            produto.descricao
            .toLowerCase()
            .includes(texto)



        );


    }




    mostrarProdutos(lista);



}








// ==========================
// PESQUISA
// ==========================


if(pesquisa){


    pesquisa.addEventListener(
        "input",
        filtrarProdutos
    );


}








// ==========================
// CATEGORIAS
// ==========================


botoesCategoria.forEach(botao => {



    botao.addEventListener("click",()=>{


        botoesCategoria.forEach(btn=>{


            btn.classList.remove("active");


        });



        botao.classList.add("active");



        categoriaAtual =
        botao.dataset.categoria;



        filtrarProdutos();



    });



});








// ==========================
// VOLTAR AO TOPO
// ==========================


if(botaoTopo){



    window.addEventListener(
    "scroll",
    ()=>{


        if(window.scrollY > 400){


            botaoTopo.style.display="block";


        }else{


            botaoTopo.style.display="none";


        }



    });



    botaoTopo.addEventListener(
    "click",
    ()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });



    });



}






// ==========================
// INICIAR
// ==========================


carregarProdutos();



});