;(function ($){
	var moreOptionBtn = $('.more-option-btn');
	var moreOptionForm = $('.more-option-form');

	moreOptionBtn.on('click', function () {
		moreOptionForm.slideToggle();
		// moreOptionForm.toggleClass('open'); 
		//повесил класс, нужен для иземнения элемента в момент события
		// moreOptionBtn.toggleClass('open');
	});
})(jQuery);


(function ($){
	var searchIc = $('.search-ic');
	var searchForm = $('.search');

	searchIc.on('click', function (){
		searchForm.slideToggle();
	})
})(jQuery);