
const section = document.querySelector('.cards')
const dbProducts = [
  { img: '../img/touca.png', tipo: 'Acessorios', title: 'Black Hat', 
  descrição: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...', preco: '$100.00', addCar: 'Adicionar ao carrinho' },
  { img: '../img/Men-Jacket-Front-Black__15466 1.png', tipo: 'Camisetas', title: 'Lightweight Jacket', 
  descrição: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com essa jaqueta vibrante...', preco: '$100.00', addCar: 'Adicionar ao carrinho' },
  { img: '../img/cahmpion jacket.png', tipo: 'Camisetas', title: 'Champion Packable Jacket', 
  descrição: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...', preco: '$100.00', addCar: 'Adicionar ao carrinho' },
  { img: '../img/camiseta branca.png', tipo: 'Camisetas', title: 'Short-Sleeve T-Shirt', 
  descrição: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...', preco: '$100.00', addCar: 'Adicionar ao carrinho' },
  { img: '../img/camiseta.png', tipo: 'Camisetas', title: 'T-Shirt', 
  descrição: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...', preco: '$100.00', addCar: 'Adicionar ao carrinho' }, 
  { img: '../img/mascara.png', tipo: 'Acessórios', title: 'Mask', 
  descrição: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...', preco: '$100.00', addCar: 'Adicionar ao carrinho' }
]


for(let i = 0; i < dbProducts.length; i++){
  section.innerHTML += `<div class="card">
  <div class="espacoImg">
    <img src="${dbProducts[i].img}" alt="">
  </div>
  <div class="info">
    <div class="tipo">${dbProducts[i].tipo}</div>
    <div class="title" >${dbProducts[i].title}</div>
    <div class="descricao">${dbProducts[i].descrição}
    </div>
    <div class="preco">${dbProducts[i].preco}</div>
    <div class="addCart"><a id = '${dbProducts[i].title}' class="link" href="">${dbProducts[i].addCar}</a></div> 
  </div>
  </div>`
}

const vitrine = document.getElementById('vitrine')
  //if titulo do add carr clicado = algum item do database do carrinho, carrinho.innerHTML
    /*adicionarCar.addEventListener('click', function(e){ 
      e.preventDefault()
      let idProduto = e.target
      let resultado = 0
      if(idProduto.className == 'link'){
        //console.log(idProduto.id)
        for(let i = 0; i < dbProducts.length; i++){
          if(dbProducts[i].title == idProduto.id){
            resultado = dbProducts[i]
            //console.log(resultado)
          }
          //chamar função passando o result
        }
      }
      
  })*/

  const carrinho2 = document.querySelector('.carrinho2')
  vitrine.addEventListener('click', function(e){ 
    e.preventDefault()
    let idProduto = e.target
    let result = 0
    if(idProduto.className == 'link'){
      console.log(idProduto.id)
      for(let i = 0; i < carProducts.length; i++){
        if(idProduto.id == carProducts[i].title){
          carrinho2.innerHTML += `<div class="card-car">
    <div class="car-img">
      <img src="${carProducts[i].img}" alt="" srcset="">
    </div>
    <div class="car-info">
      <h3>${carProducts[i].title}</h3>
      <div class="car-price">${carProducts[i].preco}</div>
      <a class="car-delete" href=""><img class= "car-delete2" src="./img/pngegg.png"></a>
    </div>
  </div>`
        }
      }
    }
})


const cardCar = document.getElementsByClassName('card-car')

carrinho2.addEventListener('click', function(e){
  e.preventDefault()
  let idProduto = e.target
  console.log(idProduto)
  if(idProduto.className == 'car-delete2'){
    let car = idProduto.closest('.card-car')
    car.style.display = 'none'

  }

})










const carProducts = [
  {img: '../img/Men-Jacket-Front-Black__15466 1.png', title: 'Lightweight Jacket', preco: 'R$ 100.00'},
  {img: '../img/touca.png', title: 'Black Hat', preco: 'R$ 100.00'},
  {img: '../img/cahmpion jacket.png', title: 'Champion Packable Jacket', preco: 'R$ 100.00'},
  {img: '../img/camiseta branca.png', title: 'Short-Sleeve T-Shirt', preco: 'R$ 100.00'},
  {img: '../img/camiseta.png', title: 'T-Shirt', preco: 'R$ 100.00'},
  {img: '../img/mascara.png', title: 'Mask', preco: 'R$ 100.00'}
]



//criar função para chamar o produto
