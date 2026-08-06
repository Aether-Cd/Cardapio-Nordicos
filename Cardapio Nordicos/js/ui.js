// ==========================================================
// NORDICOS CHOPERIA
// INTERFACE DOS PRODUTOS
// ==========================================================



// ==========================================================
// TITULO DA CATEGORIA
// ==========================================================


function atualizarTituloCategoria(categoria){


    const titulo = document.getElementById("titulo-categoria");


    if(!titulo) return;



    const categorias = {



        "Todos":{

            icone:"🍽",

            nome:"Cardápio Completo",

            descricao:"Confira todas as opções da Nordicos Choperia"

        },



        "Petiscos":{

            icone:"🔥",

            nome:"Petiscos",

            descricao:"Porções especiais para compartilhar"

        },



        "Espetinhos":{

            icone:"🍢",

            nome:"Espetinhos",

            descricao:"Carnes selecionadas preparadas na brasa"

        },



        "Drinks":{

            icone:"🍹",

            nome:"Drinks",

            descricao:"Coquetéis exclusivos da casa"

        },



        "Drinks Sem Álcool":{

            icone:"🥤",

            nome:"Drinks Sem Álcool",

            descricao:"Sabor e criatividade sem álcool"

        },



        "Chopps":{

            icone:"🍺",

            nome:"Chopps",

            descricao:"Chopp gelado da Nordicos"

        },



        "Baldes":{

            icone:"🪣",

            nome:"Baldes",

            descricao:"Combinações perfeitas para aproveitar"

        },



        "Cervejas 600ml":{

            icone:"🍻",

            nome:"Cervejas",

            descricao:"As melhores cervejas 600ml"

        },



        "Bebidas":{

            icone:"🥤",

            nome:"Bebidas",

            descricao:"Opções para todos os momentos"

        },



        "Promoção":{

            icone:"⭐",

            nome:"Promoções",

            descricao:"Ofertas especiais da Nordicos"

        }


    };



    const item = categorias[categoria];



    if(item){



        titulo.innerHTML = `


        <div class="categoria-titulo">


            <h1>

                ${item.icone} ${item.nome}

            </h1>



            <p>

                ${item.descricao}

            </p>


        </div>


        `;


    }



}







// ==========================================================
// MOSTRAR PRODUTOS
// ==========================================================



function mostrarProdutos(lista){



    const container = document.getElementById("produtos");



    if(!container) return;



    container.innerHTML = "";




    if(lista.length === 0){



        container.innerHTML = `


        <div class="erro">


            Nenhum produto encontrado.


        </div>


        `;



        return;


    }







    lista.forEach(produto => {




        const card = document.createElement("div");



        card.className = "card";





        let imagem = "sem-imagem.jpg";




        if(produto.imagem && produto.imagem.trim() !== ""){


            imagem = produto.imagem;


        }







        card.innerHTML = `




        ${
            produto.destaque

            ?

            `

            <div class="selo">

                Destaque

            </div>

            `

            :

            ""

        }






        <img


            src="assets/produtos/${imagem}"


            alt="${produto.nome}"


            loading="lazy"


            onerror="this.onerror=null;this.src='assets/produtos/sem-imagem.jpg';"


        >






        <div class="card-body">





            <h2>

                ${produto.nome}

            </h2>







            <p>

                ${produto.descricao || " "}

            </p>







            <div class="preco">


                ${


                produto.preco > 0


                ?


                `R$ ${produto.preco
                .toFixed(2)
                .replace(".",",")}`


                :


                "Consulte"


                }



            </div>





        </div>





        `;






        container.appendChild(card);




    });





}