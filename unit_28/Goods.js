class Goods {
	constructor(name, price, image, count) {
		this.name = name;
		this.price = price;
		this.image = image;
		this.count = count;
	}

	draw() {
		let innerDiv = document.createElement('div');
		innerDiv.classList.add('goods');
		let goodsNameH = document.createElement('h1');
		goodsNameH.textContent = this.name;
		let goodsPriceP = document.createElement('p');
		goodsPriceP.classList.add('price');
		goodsPriceP.textContent = this.price;
		let goodsImage = document.createElement('img');
		goodsImage.setAttribute('src', this.image);
		goodsImage.setAttribute('alt', this.name);
		innerDiv.append(goodsNameH);
		innerDiv.append(goodsPriceP);
		innerDiv.append(goodsImage);
		return innerDiv;
	}
}