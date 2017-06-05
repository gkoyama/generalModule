var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.MODULES = {};

LEIHAUOLI.MODULES.smoothScroll = {
	init : function($naviList){
		this.$naviList = $naviList;
		this.setParameters();
		this.eventHandler();
	},
	setParameters : function(){
		this.$landingPoints = $('.jsi-section-head > h3');
		// this.hrefReplace = this.$naviList.attr('href').replace('#','');
	},
// 	eventHandler : function(){
// 		var that = this;
// 		that.$jsiAccordionTitleTrigger.on('click',function(){
// 			if(that.$jsiAccordionMenuTrigger.is(':hidden')){
// 				if(that.$jsiAccordionMenuTrigger.is(':animated')){
// 					return;
// 				}
// 				that.$jsiAccordionMenuTrigger.css('height',0);
// 				that.$jsiAccordionMenuTrigger.css('display','block');
// 				that.$jsiAccordionMenuTrigger.animate({height:that.accordionMenuHight},200,'linear',function(){
// 					console.log('anmate OK!');
// 				});
// 			} else {
// 				if(that.$jsiAccordionMenuTrigger.is('animated')){
// 					return;
// 				}
// 				that.$jsiAccordionMenuTrigger.animate({height:0},200,'linear',function(){
// 					that.$jsiAccordionMenuTrigger.css('display','none');
// 					console.log('close OK!');
// 				});
// 			}
// 		});
// 	}
// };

$(function(){
	$('li > a').each(function(){
		LEIHAUOLI.MODULES.smoothScroll.init($(this));
	});
});
