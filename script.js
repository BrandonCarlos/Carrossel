// Container que tem a barra de rolagem
document.querySelector('.items').addEventListener('wheel', event => {
    if(event.deltaY < 0) {
        console.log('Scroll up');
        // Podemos mover o SCROLL utlizando a função event.target.scrollBy() eixo X e eixo Y
        event.target.scrollBy(300, 0);//Está rodando más o TARGET "MUDOU", agora é o ".item",
        //não há como fazer SCROLL no (.item) pq ele já esta sendo apresentado na tela TODA
        //Mouse encima da IMAGEM estamos mechendo com o (.item)
        //Mouse encima do SCROLL estamos mechendo com o (.items)
    } else {
        console.log('Scroll down');
        event.target.scrollBy(-300, 0);
    }
})
