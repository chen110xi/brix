KISSY.add("brix/gallery/sitenav/index",function(e,t,i){var a=function(e){var t=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.src=e,t.appendChild(i)},n=t.extend({render:function(){var t=this;i.jsonp("http://www.taobao.com/go/rgn/mm/mm_nav_back.php",{mode:t.get("mode"),hovercolor:t.get("hovercolor")},function(i){var n="http://g.tbcdn.cn/",r="",s="";t.get("el").html(e.one("<textarea />").html(i).val()),r=t.get("el").one(".J_alimama_nav").attr("data-v"),s=n+"/mm/alimama-brand/"+r+"/app/components/nav/mmnav-min.js",a(s)})}});return n.ATTRS={mode:{value:""},hovercolor:{value:""}},n},{requires:["brix/core/brick","ajax"]});