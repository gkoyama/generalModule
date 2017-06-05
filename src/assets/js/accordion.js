var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.MODULES = {};

LEIHAUOLI.MODULES.accordion = {
	init : function(){
		this.setParameters();
		this.eventHandler();
	},
	setParameters : function(){
		this.$jsiAccordionTitleTrigger = $('.jsi-accordion-title-trigger');
		this.$jsiAccordionMenuTrigger = $('.jsi-accordion-menu-trigger');
		this.accordionMenuHight = this.$jsiAccordionMenuTrigger.css('height');
	},
	eventHandler : function(){
		var that = this;
		that.$jsiAccordionTitleTrigger.on('click',function(){
			if(that.$jsiAccordionMenuTrigger.is(':hidden')){
				if(that.$jsiAccordionMenuTrigger.is(':animated')){
					return;
				}
				that.$jsiAccordionMenuTrigger.css('height',0);
				that.$jsiAccordionMenuTrigger.css('display','block');
				that.$jsiAccordionMenuTrigger.animate({height:that.accordionMenuHight},200,'linear',function(){
				});
			} else {
				if(that.$jsiAccordionMenuTrigger.is('animated')){
					return;
				}
				that.$jsiAccordionMenuTrigger.animate({height:0},200,'linear',function(){
					that.$jsiAccordionMenuTrigger.css('display','none');
				});
			}
		});
	}
};

$(function(){
	LEIHAUOLI.MODULES.accordion.init();
});
