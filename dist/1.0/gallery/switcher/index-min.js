KISSY.add("brix/gallery/switcher/index",function(e,t){function a(){a.superclass.constructor.apply(this,arguments)}return a.ATTRS={switchOn:{value:!1},switchStatus:{value:!0}},a.METHODS={switchTo:function(e){var t=this;t._switchTo(e)}},a.FIRES={switched:"switched"},a.EVENTS={"":{click:function(){var e=this.get("el");this._switchTo(!e.hasClass("switcher-on"))}}},e.extend(a,t,{initialize:function(){var e=this;e.get("switchOn")?e._switchTo(!0):e._switchTo(!1)},_switchTo:function(e){var t=this,i=t.get("el");e?(i.addClass("switcher-on"),t.get("switchStatus")||i.addClass("switcher-no-status")):(i.removeClass("switcher-on"),t.get("switchStatus")||i.removeClass("switcher-no-status")),data={value:i.hasClass("switcher-on")},t.fire(a.FIRES.switched,data)}}),e.augment(a,a.METHODS),a},{requires:["brix/core/brick"]});