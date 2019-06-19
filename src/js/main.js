document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.container');
	const og = 'dfsdf';
	class GoodsItem {
		constructor(title = 'нет данных', price = 'в личку отвечу') {
			this.title = title;
			this.price = price;
		}
		render() {
			return `<div class = "goods-item"><h3>${this.title}</h3><p>${this.price}</p><button class="buy-btn" type="button" onclick="let a = 'dfdfd'; console.log(a);">в корзину</button></div`;
		}
		addToCart() {
			console.log('addToCart');
		}
	}
	const item = new GoodsItem('ЧТо это', '300 баксов');
	container.innerHTML = item.render();
});
