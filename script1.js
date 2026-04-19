const btn = document.querySelector('.buy')
const cart = document.querySelector('.cart')

btn.addEventListener('click' , ()=>{
    const newitem = document.createElement('div')
    newitem.innerHTML = 'phone'
    cart.appendChild(newitem)
})