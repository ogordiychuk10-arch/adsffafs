offers = document.querySelectorAll('.offer')
const cart = document.querySelector('#cart')
const modalwind = document.querySelector('.carts')
const close = document.querySelector('#closeimg')
const body = document.querySelector('body')
const orders = document.querySelector('.orders')
const storemenu = document.querySelector('#storemenu')

priceLst = []
base_items = []
offers.forEach(offer =>{
    const newoffer = offer.cloneNode(true)
    base_items.push(newoffer)
})




cart.addEventListener('click', ()=>{
    modalwind.classList.toggle('hidden')
    modalwind.classList.toggle('visible')
    body.classList.toggle('semi')

})
close.addEventListener('click', ()=>{
    modalwind.classList.toggle('hidden')
    modalwind.classList.toggle('visible')
    body.classList.toggle('semi')
    

})
function updOffers (offer){
    console.log('hello world!')
    offers = document.querySelectorAll('.offer')
    const btn = offer.querySelector('.main')
    const btn2 = offer.querySelector('.mainsecond')
    const text = offer.querySelector('.textf')
    

    btn.addEventListener('click', () => {
        btn.classList.add('hidden')
        btn2.classList.add('hidden')  
        text.innerHTML = 'успішно придбано'
        let newitem1 = null
        for(baseoffer of base_items){
            if(baseoffer.id == offer.id){
                newitem1 = baseoffer.cloneNode(true)

            }
        }
        if(newitem1){
            const btn1 = newitem1.querySelector('.main')
            btn1.innerHTML = 'Замовити'
            const btn2 = newitem1.querySelector('.mainsecond')
            btn2.innerHTML= 'Видалити'
            btn1.addEventListener('click' , ()=>{
                window.location.href = 'order.html'
            })
            btn2.addEventListener('click' , ()=>{
                newitem1.remove()
                let x = null
                for(baseoffer of base_items){
                            if(baseoffer.id == offer.id){
                x = baseoffer.cloneNode(true)
                

            }
        }
        storemenu.appendChild(x)
                offer.remove()
            })
            orders.appendChild(newitem1)
        }
        setTimeout(() => {
            offer.classList.add('hidden')
        }, 2000)
    })

    btn2.addEventListener('click', () => {
        offer.classList.add('hidden')
    })
}


offers.forEach(offer => updOffers(offer))

cart.addEventListener('click', ()=>{
    priceLst = []
orders.querySelectorAll('.offer').forEach(offer =>{
    const price = offer.querySelector('.price')
    priceLst.push(price.innerHTML)
    console.log(priceLst)
    


})})
