!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function($,t){function e(){return new Date(Date.UTC.apply(Date,arguments))}function i(){var t=new Date;return e(t.getFullYear(),t.getMonth(),t.getDate())}function a(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()}function s(t){return function(){return this[t].apply(this,arguments)}}function n(t){return t&&!isNaN(t.getTime())}function o(t,e){function i(t,e){return e.toLowerCase()}var a=$(t).data(),s={},n,o=new RegExp("^"+e.toLowerCase()+"([A-Z])");e=new RegExp("^"+e.toLowerCase());for(var r in a)e.test(r)&&(n=r.replace(o,i),s[n]=a[r]);return s}function r(t){var e={};if(g[t]||(t=t.split("-")[0],g[t])){var i=g[t];return $.each(f,function(t,a){a in i&&(e[a]=i[a])}),e}}var h=function(){var t={get:function(t){return this.slice(t)[0]},contains:function(t){for(var e=t&&t.valueOf(),i=0,a=this.length;i<a;i++)if(this[i].valueOf()===e)return i;return-1},remove:function(t){this.splice(t,1)},replace:function(t){t&&($.isArray(t)||(t=[t]),this.clear(),this.push.apply(this,t))},clear:function(){this.length=0},copy:function(){var t=new h;return t.replace(this),t}};return function(){var e=[];return e.push.apply(e,arguments),$.extend(e,t),e}}(),l=function(t,e){$(t).data("datepicker",this),this._process_options(e),this.dates=new h,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=$(t),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .btn"),this.hasInput=this.component&&this.inputField.length,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=$(D.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(t,e){return parseInt(e)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};l.prototype={constructor:l,_resolveViewName:function(e,i){return 0===e||"days"===e||"month"===e?0:1===e||"months"===e||"year"===e?1:2===e||"years"===e||"decade"===e?2:3===e||"decades"===e||"century"===e?3:4===e||"centuries"===e||"millennium"===e?4:i!==t&&i},_check_template:function(e){try{if(e===t||""===e)return!1;if((e.match(/[<>]/g)||[]).length<=0)return!0;return $(e).length>0}catch(t){return!1}},_process_options:function(t){this._o=$.extend({},this._o,t);var a=this.o=$.extend({},this._o),s=a.language;g[s]||(s=s.split("-")[0],g[s]||(s=p.language)),a.language=s,a.startView=this._resolveViewName(a.startView,0),a.minViewMode=this._resolveViewName(a.minViewMode,0),a.maxViewMode=this._resolveViewName(a.maxViewMode,4),a.startView=Math.min(a.startView,a.maxViewMode),a.startView=Math.max(a.startView,a.minViewMode),!0!==a.multidate&&(a.multidate=Number(a.multidate)||!1,!1!==a.multidate&&(a.multidate=Math.max(0,a.multidate))),a.multidateSeparator=String(a.multidateSeparator),a.weekStart%=7,a.weekEnd=(a.weekStart+6)%7;var n=D.parseFormat(a.format);a.startDate!==-1/0&&(a.startDate?a.startDate instanceof Date?a.startDate=this._local_to_utc(this._zero_time(a.startDate)):a.startDate=D.parseDate(a.startDate,n,a.language,a.assumeNearbyYear):a.startDate=-1/0),a.endDate!==1/0&&(a.endDate?a.endDate instanceof Date?a.endDate=this._local_to_utc(this._zero_time(a.endDate)):a.endDate=D.parseDate(a.endDate,n,a.language,a.assumeNearbyYear):a.endDate=1/0),a.daysOfWeekDisabled=a.daysOfWeekDisabled||[],$.isArray(a.daysOfWeekDisabled)||(a.daysOfWeekDisabled=a.daysOfWeekDisabled.split(/[,\s]*/)),a.daysOfWeekDisabled=$.map(a.daysOfWeekDisabled,function(t){return parseInt(t,10)}),a.daysOfWeekHighlighted=a.daysOfWeekHighlighted||[],$.isArray(a.daysOfWeekHighlighted)||(a.daysOfWeekHighlighted=a.daysOfWeekHighlighted.split(/[,\s]*/)),a.daysOfWeekHighlighted=$.map(a.daysOfWeekHighlighted,function(t){return parseInt(t,10)}),a.datesDisabled=a.datesDisabled||[],$.isArray(a.datesDisabled)||(a.datesDisabled=[a.datesDisabled]),a.datesDisabled=$.map(a.datesDisabled,function(t){return D.parseDate(t,n,a.language,a.assumeNearbyYear)});var o=String(a.orientation).toLowerCase().split(/\s+/g),r=a.orientation.toLowerCase();if(o=$.grep(o,function(t){return/^auto|left|right|top|bottom$/.test(t)}),a.orientation={x:"auto",y:"auto"},r&&"auto"!==r)if(1===o.length)switch(o[0]){case"top":case"bottom":a.orientation.y=o[0];break;case"left":case"right":a.orientation.x=o[0];break}else r=$.grep(o,function(t){return/^left|right$/.test(t)}),a.orientation.x=r[0]||"auto",r=$.grep(o,function(t){return/^top|bottom$/.test(t)}),a.orientation.y=r[0]||"auto";else;if(a.defaultViewDate){var h=a.defaultViewDate.year||(new Date).getFullYear(),l=a.defaultViewDate.month||0,d=a.defaultViewDate.day||1;a.defaultViewDate=e(h,l,d)}else a.defaultViewDate=i()},_events:[],_secondaryEvents:[],_applyEvents:function(e){for(var i=0,a,s,n;i<e.length;i++)a=e[i][0],2===e[i].length?(s=t,n=e[i][1]):3===e[i].length&&(s=e[i][1],n=e[i][2]),a.on(n,s)},_unapplyEvents:function(e){for(var i=0,a,s,n;i<e.length;i++)a=e[i][0],2===e[i].length?(n=t,s=e[i][1]):3===e[i].length&&(n=e[i][1],s=e[i][2]),a.off(s,n)},_buildEvents:function(){var t={keyup:$.proxy(function(t){-1===$.inArray(t.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:$.proxy(this.keydown,this),paste:$.proxy(this.paste,this)};!0===this.o.showOnFocus&&(t.focus=$.proxy(this.show,this)),this.isInput?this._events=[[this.element,t]]:this.component&&this.hasInput?this._events=[[this.inputField,t],[this.component,{click:$.proxy(this.show,this)}]]:this._events=[[this.element,{click:$.proxy(this.show,this),keydown:$.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:$.proxy(function(t){this._focused_from=t.target},this)}],[this.element,{blur:$.proxy(function(t){this._focused_from=t.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":$.proxy(function(t){this.update(t.date)},this)}]),this._secondaryEvents=[[this.picker,{click:$.proxy(this.click,this)}],[$(window),{resize:$.proxy(this.place,this)}],[$(document),{mousedown:$.proxy(function(t){this.element.is(t.target)||this.element.find(t.target).length||this.picker.is(t.target)||this.picker.find(t.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,e){var i=e||this.dates.get(-1),a=this._utc_to_local(i);this.element.trigger({type:t,date:a,dates:$.map(this.dates,this._utc_to_local),format:$.proxy(function(t,e){0===arguments.length?(t=this.dates.length-1,e=this.o.format):"string"==typeof t&&(e=t,t=this.dates.length-1),e=e||this.o.format;var i=this.dates.get(t);return D.formatDate(i,e,this.o.language)},this)})},show:function(){if(!(this.inputField.prop("disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&$(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(t){var e;if(t.originalEvent.clipboardData&&t.originalEvent.clipboardData.types&&-1!==$.inArray("text/plain",t.originalEvent.clipboardData.types))e=t.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;e=window.clipboardData.getData("Text")}this.setDate(e),this.update(),t.preventDefault()},_utc_to_local:function(t){return t&&new Date(t.getTime()+6e4*t.getTimezoneOffset())},_local_to_utc:function(t){return t&&new Date(t.getTime()-6e4*t.getTimezoneOffset())},_zero_time:function(t){return t&&new Date(t.getFullYear(),t.getMonth(),t.getDate())},_zero_utc_time:function(t){return t&&new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()))},getDates:function(){return $.map(this.dates,this._utc_to_local)},getUTCDates:function(){return $.map(this.dates,function(t){return new Date(t)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var t=this.dates.get(-1);return void 0!==t?new Date(t):null},clearDates:function(){this.inputField&&this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var t=$.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,t),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var t=$.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,$.map(t,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:s("setDates"),setUTCDate:s("setUTCDates"),remove:s("destroy"),setValue:function(){var t=this.getFormattedDate();return this.inputField.val(t),this},getFormattedDate:function(e){e===t&&(e=this.o.format);var i=this.o.language;return $.map(this.dates,function(t){return D.formatDate(t,e,i)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(t){return this._process_options({startDate:t}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(t){return this._process_options({endDate:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(t){return this._process_options({daysOfWeekDisabled:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(t){return this._process_options({daysOfWeekHighlighted:t}),this.update(),this},setDatesDisabled:function(t){this._process_options({datesDisabled:t}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var t=this.picker.outerWidth(),e=this.picker.outerHeight(),i=10,a=$(this.o.container),s=a.width(),n="body"===this.o.container?$(document).scrollTop():a.scrollTop(),o=a.offset(),r=[];this.element.parents().each(function(){var t=$(this).css("z-index");"auto"!==t&&0!==t&&r.push(parseInt(t))});var h=Math.max.apply(Math,r)+this.o.zIndexOffset,l=this.component?this.component.parent().offset():this.element.offset(),d=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),c=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),u=l.left-o.left,p=l.top-o.top;"body"!==this.o.container&&(p+=n),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(u-=t-c)):l.left<0?(this.picker.addClass("datepicker-orient-left"),u-=l.left-10):u+t>s?(this.picker.addClass("datepicker-orient-right"),u+=c-t):this.picker.addClass("datepicker-orient-left");var f=this.o.orientation.y,g;if("auto"===f&&(g=-n+p-e,f=g<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+f),"top"===f?p-=e+parseInt(this.picker.css("padding-top")):p+=d,this.o.rtl){var D=s-(u+c);this.picker.css({top:p,right:D,zIndex:h})}else this.picker.css({top:p,left:u,zIndex:h});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var t=this.dates.copy(),e=[],i=!1;return arguments.length?($.each(arguments,$.proxy(function(t,i){i instanceof Date&&(i=this._local_to_utc(i)),e.push(i)},this)),i=!0):(e=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),e=e&&this.o.multidate?e.split(this.o.multidateSeparator):[e],delete this.element.data().date),e=$.map(e,$.proxy(function(t){return D.parseDate(t,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),e=$.grep(e,$.proxy(function(t){return!this.dateWithinRange(t)||!t},this),!0),this.dates.replace(e),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,i?this.setValue():e.length&&String(t)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&t.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var t=this.o.weekStart,e="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(t,e){return parseInt(e)+1}),e+='<th class="cw">&#160;</th>');t<this.o.weekStart+7;)e+='<th class="dow',$.inArray(t,this.o.daysOfWeekDisabled)>-1&&(e+=" disabled"),e+='">'+g[this.o.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)},fillMonths:function(){for(var t=this._utc_to_local(this.viewDate),e="",i=0;i<12;){e+='<span class="month'+(t&&t.getMonth()===i?" focused":"")+'">'+g[this.o.language].monthsShort[i++]+"</span>"}this.picker.find(".datepicker-months td").html(e)},setRange:function(t){t&&t.length?this.range=$.map(t,function(t){return t.valueOf()}):delete this.range,this.fill()},getClassNames:function(t){var e=[],i=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),s=new Date;return t.getUTCFullYear()<i||t.getUTCFullYear()===i&&t.getUTCMonth()<a?e.push("old"):(t.getUTCFullYear()>i||t.getUTCFullYear()===i&&t.getUTCMonth()>a)&&e.push("new"),this.focusDate&&t.valueOf()===this.focusDate.valueOf()&&e.push("focused"),this.o.todayHighlight&&t.getUTCFullYear()===s.getFullYear()&&t.getUTCMonth()===s.getMonth()&&t.getUTCDate()===s.getDate()&&e.push("today"),-1!==this.dates.contains(t)&&e.push("active"),this.dateWithinRange(t)||e.push("disabled"),this.dateIsDisabled(t)&&e.push("disabled","disabled-date"),-1!==$.inArray(t.getUTCDay(),this.o.daysOfWeekHighlighted)&&e.push("highlighted"),this.range&&(t>this.range[0]&&t<this.range[this.range.length-1]&&e.push("range"),-1!==$.inArray(t.valueOf(),this.range)&&e.push("selected"),t.valueOf()===this.range[0]&&e.push("range-start"),t.valueOf()===this.range[this.range.length-1]&&e.push("range-end")),e},_fill_yearsView:function(e,i,a,s,n,o,r,h){var l,d,c,u,p,f,g,D,v,y,m;for(l="",d=this.picker.find(e),c=parseInt(n/a,10)*a,p=parseInt(o/s,10)*s,f=parseInt(r/s,10)*s,u=$.map(this.dates,function(t){return parseInt(t.getUTCFullYear()/s,10)*s}),d.find(".datepicker-switch").text(c+"-"+(c+9*s)),g=c-s,D=-1;D<11;D+=1)v=[i],y=null,-1===D?v.push("old"):10===D&&v.push("new"),-1!==$.inArray(g,u)&&v.push("active"),(g<p||g>f)&&v.push("disabled"),g===this.viewDate.getFullYear()&&v.push("focused"),h!==$.noop&&(m=h(new Date(g,0,1)),m===t?m={}:"boolean"==typeof m?m={enabled:m}:"string"==typeof m&&(m={classes:m}),!1===m.enabled&&v.push("disabled"),m.classes&&(v=v.concat(m.classes.split(/\s+/))),m.tooltip&&(y=m.tooltip)),l+='<span class="'+v.join(" ")+'"'+(y?' title="'+y+'"':"")+">"+g+"</span>",g+=s;d.find("td").html(l)},fill:function(){var i=new Date(this.viewDate),a=i.getUTCFullYear(),s=i.getUTCMonth(),n=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,o=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,r=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,h=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,l=g[this.o.language].today||g.en.today||"",d=g[this.o.language].clear||g.en.clear||"",c=g[this.o.language].titleFormat||g.en.titleFormat,u,p;if(!isNaN(a)&&!isNaN(s)){this.picker.find(".datepicker-days .datepicker-switch").text(D.formatDate(i,c,this.o.language)),this.picker.find("tfoot .today").text(l).toggle(!1!==this.o.todayBtn),this.picker.find("tfoot .clear").text(d).toggle(!1!==this.o.clearBtn),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var f=e(a,s-1,28),v=D.getDaysInMonth(f.getUTCFullYear(),f.getUTCMonth());f.setUTCDate(v),f.setUTCDate(v-(f.getUTCDay()-this.o.weekStart+7)%7);var y=new Date(f);f.getUTCFullYear()<100&&y.setUTCFullYear(f.getUTCFullYear()),y.setUTCDate(y.getUTCDate()+42),y=y.valueOf();for(var m=[],w;f.valueOf()<y;){if(f.getUTCDay()===this.o.weekStart&&(m.push("<tr>"),this.o.calendarWeeks)){var k=new Date(+f+(this.o.weekStart-f.getUTCDay()-7)%7*864e5),C=new Date(Number(k)+(11-k.getUTCDay())%7*864e5),b=new Date(Number(b=e(C.getUTCFullYear(),0,1))+(11-b.getUTCDay())%7*864e5),_=(C-b)/864e5/7+1;m.push('<td class="cw">'+_+"</td>")}w=this.getClassNames(f),w.push("day"),this.o.beforeShowDay!==$.noop&&(p=this.o.beforeShowDay(this._utc_to_local(f)),p===t?p={}:"boolean"==typeof p?p={enabled:p}:"string"==typeof p&&(p={classes:p}),!1===p.enabled&&w.push("disabled"),p.classes&&(w=w.concat(p.classes.split(/\s+/))),p.tooltip&&(u=p.tooltip)),w=$.isFunction($.uniqueSort)?$.uniqueSort(w):$.unique(w),m.push('<td class="'+w.join(" ")+'"'+(u?' title="'+u+'"':"")+">"+f.getUTCDate()+"</td>"),u=null,f.getUTCDay()===this.o.weekEnd&&m.push("</tr>"),f.setUTCDate(f.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(m.join(""));var T=g[this.o.language].monthsTitle||g.en.monthsTitle||"Months",M=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?T:a).end().find("span").removeClass("active");if($.each(this.dates,function(t,e){e.getUTCFullYear()===a&&M.eq(e.getUTCMonth()).addClass("active")}),(a<n||a>r)&&M.addClass("disabled"),a===n&&M.slice(0,o).addClass("disabled"),a===r&&M.slice(h+1).addClass("disabled"),this.o.beforeShowMonth!==$.noop){var U=this;$.each(M,function(e,i){var s=new Date(a,e,1),n=U.o.beforeShowMonth(s);n===t?n={}:"boolean"==typeof n?n={enabled:n}:"string"==typeof n&&(n={classes:n}),!1!==n.enabled||$(i).hasClass("disabled")||$(i).addClass("disabled"),n.classes&&$(i).addClass(n.classes),n.tooltip&&$(i).prop("title",n.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,a,n,r,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,a,n,r,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,a,n,r,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var t=new Date(this.viewDate),e=t.getUTCFullYear(),i=t.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-1/0&&e<=this.o.startDate.getUTCFullYear()&&i<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()&&i>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:case 3:case 4:this.o.startDate!==-1/0&&e<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break}}},click:function(t){t.preventDefault(),t.stopPropagation();var a,s,n,o,r,h,l;a=$(t.target),a.hasClass("datepicker-switch")&&this.showMode(1);var d=a.closest(".prev, .next");d.length>0&&(s=D.modes[this.viewMode].navStep*(d.hasClass("prev")?-1:1),0===this.viewMode?(this.viewDate=this.moveMonth(this.viewDate,s),this._trigger("changeMonth",this.viewDate)):(this.viewDate=this.moveYear(this.viewDate,s),1===this.viewMode&&this._trigger("changeYear",this.viewDate)),this.fill()),a.hasClass("today")&&!a.hasClass("day")&&(this.showMode(-2),this._setDate(i(),"linked"===this.o.todayBtn?null:"view")),a.hasClass("clear")&&this.clearDates(),a.hasClass("disabled")||(a.hasClass("day")&&(n=parseInt(a.text(),10)||1,o=this.viewDate.getUTCFullYear(),r=this.viewDate.getUTCMonth(),a.hasClass("old")&&(0===r?(r=11,o-=1,h=!0,l=!0):(r-=1,h=!0)),a.hasClass("new")&&(11===r?(r=0,o+=1,h=!0,l=!0):(r+=1,h=!0)),this._setDate(e(o,r,n)),l&&this._trigger("changeYear",this.viewDate),h&&this._trigger("changeMonth",this.viewDate)),a.hasClass("month")&&(this.viewDate.setUTCDate(1),n=1,r=a.parent().find("span").index(a),o=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(r),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(e(o,r,n)),this.showMode()):this.showMode(-1),this.fill()),(a.hasClass("year")||a.hasClass("decade")||a.hasClass("century"))&&(this.viewDate.setUTCDate(1),n=1,r=0,o=parseInt(a.text(),10)||0,this.viewDate.setUTCFullYear(o),a.hasClass("year")&&(this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(e(o,r,n))),a.hasClass("decade")&&(this._trigger("changeDecade",this.viewDate),3===this.o.minViewMode&&this._setDate(e(o,r,n))),a.hasClass("century")&&(this._trigger("changeCentury",this.viewDate),4===this.o.minViewMode&&this._setDate(e(o,r,n))),this.showMode(-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&$(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(t){var e=this.dates.contains(t);if(t||this.dates.clear(),-1!==e?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(e):!1===this.o.multidate?(this.dates.clear(),this.dates.push(t)):this.dates.push(t),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(t,e){e&&"date"!==e||this._toggle_multidate(t&&new Date(t)),e&&"view"!==e||(this.viewDate=t&&new Date(t)),this.fill(),this.setValue(),e&&"view"===e||this._trigger("changeDate"),this.inputField&&this.inputField.change(),!this.o.autoclose||e&&"date"!==e||this.hide()},moveDay:function(t,e){var i=new Date(t);return i.setUTCDate(t.getUTCDate()+e),i},moveWeek:function(t,e){return this.moveDay(t,7*e)},moveMonth:function(t,e){if(!n(t))return this.o.defaultViewDate;if(!e)return t;var i=new Date(t.valueOf()),a=i.getUTCDate(),s=i.getUTCMonth(),o=Math.abs(e),r,h;if(e=e>0?1:-1,1===o)h=-1===e?function(){return i.getUTCMonth()===s}:function(){return i.getUTCMonth()!==r},r=s+e,i.setUTCMonth(r),(r<0||r>11)&&(r=(r+12)%12);else{for(var l=0;l<o;l++)i=this.moveMonth(i,e);r=i.getUTCMonth(),i.setUTCDate(a),h=function(){return r!==i.getUTCMonth()}}for(;h();)i.setUTCDate(--a),i.setUTCMonth(r);return i},moveYear:function(t,e){return this.moveMonth(t,12*e)},moveAvailableDate:function(t,e,i){do{if(t=this[i](t,e),!this.dateWithinRange(t))return!1;i="moveDay"}while(this.dateIsDisabled(t));return t},weekOfDateIsDisabled:function(t){return-1!==$.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(t){return this.weekOfDateIsDisabled(t)||$.grep(this.o.datesDisabled,function(e){return a(t,e)}).length>0},dateWithinRange:function(t){return t>=this.o.startDate&&t<=this.o.endDate},keydown:function(t){if(!this.picker.is(":visible"))return void(40!==t.keyCode&&27!==t.keyCode||(this.show(),t.stopPropagation()));var e=!1,i,a,s=this.focusDate||this.viewDate;switch(t.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),t.preventDefault(),t.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;i=37===t.keyCode||38===t.keyCode?-1:1,0===this.viewMode?t.ctrlKey?(a=this.moveAvailableDate(s,i,"moveYear"))&&this._trigger("changeYear",this.viewDate):t.shiftKey?(a=this.moveAvailableDate(s,i,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===t.keyCode||39===t.keyCode?a=this.moveAvailableDate(s,i,"moveDay"):this.weekOfDateIsDisabled(s)||(a=this.moveAvailableDate(s,i,"moveWeek")):1===this.viewMode?(38!==t.keyCode&&40!==t.keyCode||(i*=4),a=this.moveAvailableDate(s,i,"moveMonth")):2===this.viewMode&&(38!==t.keyCode&&40!==t.keyCode||(i*=4),a=this.moveAvailableDate(s,i,"moveYear")),a&&(this.focusDate=this.viewDate=a,this.setValue(),this.fill(),t.preventDefault());break;case 13:if(!this.o.forceParse)break;s=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(s),e=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(t.preventDefault(),t.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide();break}e&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField&&this.inputField.change())},showMode:function(t){t&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+t))),this.picker.children("div").hide().filter(".datepicker-"+D.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var d=function(t,e){$(t).data("datepicker",this),this.element=$(t),this.inputs=$.map(e.inputs,function(t){return t.jquery?t[0]:t}),delete e.inputs,u.call($(this.inputs),e).on("changeDate",$.proxy(this.dateUpdated,this)),this.pickers=$.map(this.inputs,function(t){return $(t).data("datepicker")}),this.updateDates()};d.prototype={updateDates:function(){this.dates=$.map(this.pickers,function(t){return t.getUTCDate()}),this.updateRanges()},updateRanges:function(){var t=$.map(this.dates,function(t){return t.valueOf()});$.each(this.pickers,function(e,i){i.setRange(t)})},dateUpdated:function(t){if(!this.updating){this.updating=!0;var e=$(t.target).data("datepicker");if(void 0!==e){var i=e.getUTCDate(),a=$.inArray(t.target,this.inputs),s=a-1,n=a+1,o=this.inputs.length;if(-1!==a){if($.each(this.pickers,function(t,e){e.getUTCDate()||e.setUTCDate(i)}),i<this.dates[s])for(;s>=0&&i<this.dates[s];)this.pickers[s--].setUTCDate(i);else if(i>this.dates[n])for(;n<o&&i>this.dates[n];)this.pickers[n++].setUTCDate(i);this.updateDates(),delete this.updating}}}},remove:function(){$.map(this.pickers,function(t){t.remove()}),delete this.element.data().datepicker}};var c=$.fn.datepicker,u=function(e){var i=Array.apply(null,arguments);i.shift();var a;if(this.each(function(){var t=$(this),s=t.data("datepicker"),n="object"==typeof e&&e;if(!s){var h=o(this,"date"),c=$.extend({},p,h,n),u=r(c.language),f=$.extend({},p,u,h,n);t.hasClass("input-daterange")||f.inputs?($.extend(f,{inputs:f.inputs||t.find("input").toArray()}),s=new d(this,f)):s=new l(this,f),t.data("datepicker",s)}"string"==typeof e&&"function"==typeof s[e]&&(a=s[e].apply(s,i))}),a===t||a instanceof l||a instanceof d)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+e+" function)");return a};$.fn.datepicker=u;var p=$.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:$.noop,beforeShowMonth:$.noop,beforeShowYear:$.noop,beforeShowDecade:$.noop,beforeShowCentury:$.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},f=$.fn.datepicker.locale_opts=["format","rtl","weekStart"];$.fn.datepicker.Constructor=l;var g=$.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},D={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1e3}],isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},getDaysInMonth:function(t,e){return[31,D.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(t){if("function"==typeof t.toValue&&"function"==typeof t.toDisplay)return t;var e=t.replace(this.validParts,"\0").split("\0"),i=t.match(this.validParts);if(!e||!e.length||!i||0===i.length)throw new Error("Invalid date format.");return{separators:e,parts:i}},parseDate:function(a,s,n,o){function r(t,e){return!0===e&&(e=10),t<100&&(t+=2e3)>(new Date).getFullYear()+e&&(t-=100),t}function h(){var t=this.slice(0,c[y].length),e=c[y].slice(0,t.length);return t.toLowerCase()===e.toLowerCase()}if(!a)return t;if(a instanceof Date)return a;if("string"==typeof s&&(s=D.parseFormat(s)),s.toValue)return s.toValue(a,s,n);var d=/([\-+]\d+)([dmwy])/,c=a.match(/([\-+]\d+)([dmwy])/g),u={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},p={yesterday:"-1d",today:"+0d",tomorrow:"+1d"},f,v,y,m;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)){for(a=new Date,y=0;y<c.length;y++)f=d.exec(c[y]),v=parseInt(f[1]),m=u[f[2]],a=l.prototype[m](a,v);return e(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())}if(void 0!==p[a]&&(a=p[a],c=a.match(/([\-+]\d+)([dmwy])/g),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a))){for(a=new Date,y=0;y<c.length;y++)f=d.exec(c[y]),v=parseInt(f[1]),m=u[f[2]],a=l.prototype[m](a,v);return e(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())}c=a&&a.match(this.nonpunctuation)||[],a=new Date;var w={},k=["yyyy","yy","M","MM","m","mm","d","dd"],C={yyyy:function(t,e){return t.setUTCFullYear(o?r(e,o):e)},yy:function(t,e){return t.setUTCFullYear(o?r(e,o):e)},m:function(t,e){if(isNaN(t))return t;for(e-=1;e<0;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!==e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}},b,_;C.M=C.MM=C.mm=C.m,C.dd=C.d,a=i();var T=s.parts.slice();if(c.length!==T.length&&(T=$(T).filter(function(t,e){return-1!==$.inArray(e,k)}).toArray()),c.length===T.length){var M;for(y=0,M=T.length;y<M;y++){if(b=parseInt(c[y],10),f=T[y],isNaN(b))switch(f){case"MM":_=$(g[n].months).filter(h),b=$.inArray(_[0],g[n].months)+1;break;case"M":_=$(g[n].monthsShort).filter(h),b=$.inArray(_[0],g[n].monthsShort)+1;break}w[f]=b}var U,F;for(y=0;y<k.length;y++)(F=k[y])in w&&!isNaN(w[F])&&(U=new Date(a),C[F](U,w[F]),isNaN(U)||(a=U))}return a},formatDate:function(t,e,i){if(!t)return"";if("string"==typeof e&&(e=D.parseFormat(e)),e.toDisplay)return e.toDisplay(t,e,i);var a={
d:t.getUTCDate(),D:g[i].daysShort[t.getUTCDay()],DD:g[i].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:g[i].monthsShort[t.getUTCMonth()],MM:g[i].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};a.dd=(a.d<10?"0":"")+a.d,a.mm=(a.m<10?"0":"")+a.m,t=[];for(var s=$.extend([],e.separators),n=0,o=e.parts.length;n<=o;n++)s.length&&t.push(s.shift()),t.push(a[e.parts[n]]);return t.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};D.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+D.headTemplate+"<tbody></tbody>"+D.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+D.headTemplate+D.contTemplate+D.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+D.headTemplate+D.contTemplate+D.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+D.headTemplate+D.contTemplate+D.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+D.headTemplate+D.contTemplate+D.footTemplate+"</table></div></div>",$.fn.datepicker.DPGlobal=D,$.fn.datepicker.noConflict=function(){return $.fn.datepicker=c,this},$.fn.datepicker.version="1.6.4",$(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var e=$(this);e.data("datepicker")||(t.preventDefault(),u.call(e,"show"))}),$(function(){u.call($('[data-provide="datepicker-inline"]'))})});