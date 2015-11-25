(function ($) {
	
	//拖拽
	$.fn.drags = function (opt) {

		opt = $.extend({
			handle: "",
			cursor: "move"
		}, opt);

		var $selected = this;
		var $elements = (opt.handle === "") ? this : this.find(opt.handle);

		$elements.css('cursor', opt.cursor).on("mousedown", function (e) {
			var pos_y = $selected.offset().top - e.pageY,
			  pos_x = $selected.offset().left - e.pageX;
			$(document).on("mousemove", function (e) {
				$selected.offset({
					top: e.pageY + pos_y,
					left: e.pageX + pos_x
				});
			}).on("mouseup", function () {
				$(this).off("mousemove"); // Unbind events from document                
			});
			e.preventDefault(); // disable selection
		});

		return this;

	};
	
	//复选框多选 $(".checkall").checkboxs({handler:".checkone"});
	$.fn.checkboxs = function (opt) {

		opt = $.extend({
			handler: ""
		}, opt);

		var $selected = this;
		var $elements = (opt.handler === "") ? this : $(opt.handler);

		$selected.on("click", function (e) {
			if($(this).prop("checked") == true){
				$elements.prop("checked", true);
			} else {
				$elements.prop("checked", false);
			}
			//e.preventDefault();
		});
		
		$elements.on("click", function (e) {
			var allcheck = 0;
			$elements.each(function(){
				if($(this).prop("checked") == true){
					allcheck += 1;
				} else { }
			});
			if(allcheck == $elements.length){
				$selected.prop("checked", true);
			} else {
				$selected.prop("checked", false);
			}
		});
		
		return this;
	};
})(jQuery);
