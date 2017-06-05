LEIHAUOLI.MODULES.switchingColor = {
	init : function(){
		this.setParameters();
		this.eventHandler();
	},
	setParameters : function(){
		this.test = $('test');
	},
	eventHandler : function(scrollPointTop){
		var that = this;
		that.$test.on('click',function(event){
			event.preventDefault();
			if ( $('html, body').is(':animated') ) {
				return;
			}
			$('html, body').animate({scrollTop:scrollPointTop},500);
		});
	}
};

$(function(){
	LEIHAUOLI.MODULES.switchingColor.init();
});
