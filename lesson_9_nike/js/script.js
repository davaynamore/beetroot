
;(()=>{
	let makeActive = (nodesList, activeClassToTarget, target) => {
		Array.prototype.forEach.call(nodesList, (node) => {
			node.classList.remove(activeClassToTarget);
		});
		target.classList.add(activeClassToTarget);
	};

	document.onmousedown = (e) => {
		let target = e.target;

		if(target.classList.contains('tabs__link')) {
			let tabsLinks = document.querySelectorAll('.tabs__link'),
			productTabsItems = document.querySelectorAll('.products-tabs__item');

			makeActive(tabsLinks,'tabs__link--active', target);

			let tabContentId = target.getAttribute('data-target');
			target = document.querySelectorAll(tabContentId)[0];

			makeActive(productTabsItems,'products-tabs__item--open', target);
		}

		if(target.classList.contains('size-list__label')) {
			let sizeLabels = document.querySelectorAll('.size-list__label');
			makeActive(sizeLabels, 'size-list__label--active', target);
		}

		if(target.classList.contains('drop__button')) {
			let dropButton = document.querySelectorAll('.drop__button')[0];
			dropButton.classList.toggle('drop__button--open');
		}

	}
})();