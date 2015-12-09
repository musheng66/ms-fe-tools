(function ($) {
	//需要jQuery1.9.0+版本
	
	//获取url中指定参数的值 用法：$.getUrlParam('parametername'); 添加时间：2015.11.27
	$.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r!=null) return unescape(r[2]); return null;
	}
	
	//返回顶部 用法：$("btn").backtotop(); 添加时间：2015.12.09
	$.fn.backtotop = function(){
	
		var $selected = this;
		
		$(window).on('scroll', function() {
			if($(window).scrollTop() > 100){
			
			}
		});
		
		$selected.on("click", function (e) {
			$('body,html').animate({
				scrollTop: 0
			},
			1000);
			return false;
		});
	}
	
	//拖拽 用法：$("#yourid").drags({handle:".dragableareaname"}); 添加时间：2015.11.25
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
	
	//复选框多选 用法：$(".checkall").checkboxs({handler:".checkone"}); 添加时间：2015.11.25
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

//定义数组remove方法 用法：array.remove(index); 添加时间：2015.11.27
Array.prototype.remove=function(dx) { 
    
    if(isNaN(dx)||dx>this.length) {
    	return false;
    }
     
    for(var i=0,n=0;i<this.length;i++) { 
        if(this[i]!=this[dx]) { 
            this[n++]=this[i]; 
        } 
    } 
    this.length-=1;
}

//字符串转数组方法 用法：string.transtoArray('rp1,rp2','split'); 添加时间：2015.11.27
String.prototype.transtoArray=function(rp, sp) { 
    
    if(!this || this.length==0) {
    	return false;
    }
    
	var st = this;
	var rpa = rp.split(',');
	for(var i = 0; i < rpa.length; i++){
		st = st.replace(rpa[i], '');
	}
	
	return st.split(sp);
}
