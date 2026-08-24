///<reference types="jquery" />
///<reference types="jqueryui" />
class Geburtstag {
	constructor() {
		this.init();
	}
	private init() {
		let that:Geburtstag = this;
		$('div.tabs').tabs({
			active: false,
			heightStyle: "content",
			collapsible: true,
			activate: function(event,ui){ that.setBreite() }
		});
		this.setBreite()
	}
	private setBreite() {
		$(document).ready(function() {
			var maxBreite = window.innerWidth * 0.4; // 40vw in Pixeln
			$('.left').each(function() {
				let container = $(this);
				let img = container.find('img.foto');
				function setzeBreite() {
					let imgWidth:number = img.width() as number;
					if (imgWidth > 0) {
						var neueBreite = Math.min(imgWidth, maxBreite);
						container.width(neueBreite);
						container.find('.imgText').width(neueBreite);
					}
				}
				if ((img[0] as HTMLImageElement).complete) {
					setzeBreite();
				} else {
					img.on('load', setzeBreite);
				}
			});
		});		
	}
}