$(function (){
	const guilds = ["892050525095358515","894212576924286986"]
	function blockBuilder(res){
	  return `
	  <div class="panel-block">
	  <span class="panel-icon">
	  <i class="fa fa-discord"></i>
	  </span>
	${res.name} <i class="fa fa-user">${res.presence_count}</i> <a class="button" href="${res.instant_invite}">Join</a>
	  </div>
	  `
	}
	$("div.panel-tabs").children("a").hover(function(){
		$(this).addClass("is-active")
	}, function(){
		$(this).removeClass("is-active")
	})
	guilds.forEach(id => {
		fetch(`https://discord.com/api/guilds/${id}/widget.json`).then(res => res.json()).then(res => {
			if(res.code == 50004) return;
			$(".panel").append(blockBuilder(res))
		})
	})
})