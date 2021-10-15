$(function (){
	$("div.panel-tabs").children("a").hover(function(){
		$(this).addClass("is-active")
	}, function(){
		$(this).removeClass("is-active")
	})
})