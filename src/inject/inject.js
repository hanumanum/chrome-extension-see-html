chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			let startOfTag = $("<span/>")
			let endOfTag = $("<span/>")

			let adj = {
				top:5,
				left:15
			}

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Extension starts");
			// ----------------------------------------------------------

			$("*").hover(function(){
				//$("*").removeClass("highlight")
				//prev.removeClass("cshe-highlight")
				//$(this).addClass("cshe-highlight")
				let tagName = $(this).prop("tagName").toLocaleLowerCase();
				
				if(tagName!=="body"){
					if(tagName==="img"){
						$(this).css("border","solid 1px gray")
						
					}
					else{
						$(this).css({"background-color":"black","color":"white"})

					}
					
					let position = $(this).offset();
						startOfTag.css({
							left:position.left - adj.left ,
							top:position.top,
							height:$(this).height()
						})

						endOfTag.css({
							left:position.left + $(this).width() - adj.left,
							top:position.top + $(this).height() - adj.top,
						})

						startOfTag.addClass("csh-tag")
						endOfTag.addClass("csh-tag")
						startOfTag.text("<"+tagName+">")
						endOfTag.text("</"+tagName+">")
						$("body").append(startOfTag)
						$("body").append(endOfTag)
				}
				
			},function(){
				$("*").css({"background-color":"", "color":""})
			})
			
		}
	}, 10);
});

function getRandomColor(){
	let back = ["#ffdfdf","#e0e1ff","#fff4e0","#ddffe5","#e2e1ff"];
  	let rand = back[Math.floor(Math.random() * back.length)];
  	return rand;
}