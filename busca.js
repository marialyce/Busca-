const product = [
    {
        id: 0,
        image: 'imagens/gg-1.jpg',
        title: 'Z flip Dobrável',
        price: 4999,
    },
    {
        id: 1,
        image: 'imagens/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 1979,
    },
    {
        id: 2,
        image: 'imagens/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 4550,
    },
    {
        id: 3,
        image: 'imagens/aa-1.jpg',
        title: 'Headphones',
        price: 500,
    },
    {
        id: 4,
        image: 'imagens/bb-1.jpg',
        title: 'Microphone',
        price: 1100,
    },
    {
        id: 5,
        image: 'imagens/cc-1.jpg',
        title: 'Smart Watch',
        price: 3609,
    },
];
const categories = [...new Set(product.map((item) => {return item}))]
document.getElementById('searchbar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return(item.title.toLowerCase().includes(searchData))
    }) 
    displayItem(filteredData)
});
const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.maps((item) => {
        var{image, title, price} = item;
        return(
            `<div class = 'box'>
                <div class = 'img-box'>
                    <img class = 'images' src = ${image}></img>
                </div>
                <div class = 'botton'>
                    <p>${title}</p>
                    <h2> R$ ${price},00</h2>
                    <button>Adicione ao Carrinho</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);
