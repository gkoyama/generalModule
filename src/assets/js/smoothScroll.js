LEIHAUOLI.MODULES.smoothScroll = {
	init : function($naviList){
		this.$naviList = $naviList;
		this.setParameters();
		this.landingPointStoring();
	},
	setParameters : function(){
		this.$landingPoints = $('.jsi-section-head > h3');
		this.naviListHref = this.$naviList.attr('href').replace('#','');
	},
	landingPointStoring : function(){
		var that = this;
		this.$landingPoints.each(function(){
			var landingPoint = $(this).attr('id');
			if (landingPoint == that.naviListHref){
				var landingPointOffset = $(this).offset();
				that.landingPointTop = landingPointOffset.top;
				that.eventHandler(that.landingPointTop);
			}
		});
	},
	eventHandler : function(scrollPointTop){
		var that = this;
		that.$naviList.on('click',function(event){
			event.preventDefault();
			if ( $('html, body').is(':animated') ) {
				return;
			}
			$('html, body').animate({scrollTop:scrollPointTop},500);
		});
	}
};

$(function(){
	$('li > a').each(function(){
		LEIHAUOLI.MODULES.smoothScroll.init($(this));
	});
});
