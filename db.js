

const store = {
	1: {
		seller: 'topshop',
		name: 'iphone 13 Pro Max ',
		price: 5000,
		img: 'https://i.moyo.ua/img/smart_filters/pp_O4HfSQ_image_1694688304.jpg',
	},
	2: {
		seller: 'topshop',
		name: 'iphone 13',
		price: 2000,
		img: 'https://mobileplanet.ua/uploads/product/2023-9-13/magazin-mobileplanet-apple-iphone-15-128gb-pink-mtp13-2853681.jpg',
	},
	3: {
		seller: 'topshop',
		name: 'iphone 16',
		price: 3000,
		img: 'https://cdn.stls.store/cdn_thumbs_webp/500-500/gallery/f1/50/3716059.jpeg.webp',
	},
	4: {
		seller: 'topshop',
		name: 'iphone 16 Pro Max ',
		price: 5400,
		img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange_result.webp',
	},
	5: {
		seller: 'topshop',
		name: 'iphone 16 Pro Max ',
		price: 5400,
		img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange_result.webp',
	},
	6: {
		seller: 'topshop',
		name: 'iphone 16 Pro Max ',
		price: 5400,
		img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange_result.webp',
	},
	7: {
		seller: 'topshop',
		name: 'iphone 16 Pro Max ',
		price: 5400,
		img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange_result.webp',
	},
	8: {
		seller: 'topshop',
		name: 'iphone 16 Pro Max ',
		price: 5400,
		img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange_result.webp',
	},
	9: {
		seller: 'topshop',
		name: 'iphone 16 Pro Max ',
		price: 5400,
		img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange_result.webp',
	},
	10: {
		seller: 'topshop',
		name: 'iphone 16 Pro Max ',
		price: 5400,
		img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange_result.webp',
	},

	// '2': {'seller ': 'topshop', 'name': 'iphone 15 Pro  ', 'price': 4000}
}
const storeMenu = document.querySelector('#storemenu')

for (item in store){
    const cur_item = store[item]

    const main_div = document.createElement('div')
    main_div.classList.add('offer')
    main_div.id = item

    const second_div = document.createElement('div')
    const img = document.createElement('img')
    img.src = cur_item['img']
    second_div.appendChild(img)
    second_div.classList.add('a')

    const text = document.createElement('p')
    text.classList.add('textf')
    text.innerText = cur_item['name']

    const price_text = document.createElement('span')
    price_text.innerText = `${cur_item['price']}`
    price_text.classList.add('price')

    const btns = document.createElement('div')
    btns.classList.add('buttons')

    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')

    btn1.classList.add('main')
    btn2.classList.add('mainsecond')
    btn1.innerText = 'Buy'
    btn2.innerText = 'Like'
    btns.appendChild(btn1)
    btns.appendChild(btn2)


    main_div.appendChild(second_div)
    main_div.appendChild(text)
    main_div.appendChild(price_text)
    main_div.appendChild(btns)
    
    storeMenu.appendChild(main_div)
}