(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f250c50"],{"2e96":function(t,e,i){},"41dc":function(t,e,i){"use strict";var n=i("2e96"),a=i.n(n);a.a},"6e09":function(t,e,i){"use strict";var n=i("9960"),a=i.n(n);a.a},9897:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h2",{staticClass:"section-title"},[t._v(t._s(t.notificationChannel.title))]),0===t.envVarsToSet.length?i("div",[t._t("header"),t._t("configuration",[t.configVariableName?i("div",{staticClass:"form-group row my-4"},[i("label",{staticClass:"col-12 col-form-label",attrs:{for:"id_"+t.settingKey(t.configVariableName)}},[t._v(t._s(t.configVariableTitle))]),i("div",{staticClass:"col-12 col-form-label"},[i("saving-animation",{attrs:{errors:t.errorMessages[t.settingKey("config")],saving:t.saving[t.settingKey("config")]}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.configVariable,expression:"configVariable"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.configVariablePlaceholder,id:"id_"+t.settingKey(t.configVariableName)},domProps:{value:t.configVariable},on:{input:function(e){e.target.composing||(t.configVariable=e.target.value)}}})])],1)]):t._e()]),t.channelCreated&&t.showSettings?i("div",[i("notification-setting-switch",{attrs:{settingId:"enabled",settingTitle:"Enable notification",isHeader:!0,errorMessages:t.errorMessages,saving:t.saving,notificationChannel:t.notificationChannel,bottomDivider:!0},on:{updateNotificationChannel:function(e,i){return t.$emit("updateNotificationChannel",e,i)}}}),i("div",{class:{inactive:!t.notificationsEnabled}},[t._t("custom-settings"),t._l(t.notificationSettings,(function(e){return i("div",{key:e.id},["print_job"===e.id?["web"===t.theme?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-form-label"},[i("saving-animation",{attrs:{errors:[],saving:!1}},[i("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.printerStatusChangeNotifications,expression:"printerStatusChangeNotifications"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"id_"+t.settingKey(e.id),disabled:!t.notificationsEnabled},domProps:{checked:Array.isArray(t.printerStatusChangeNotifications)?t._i(t.printerStatusChangeNotifications,null)>-1:t.printerStatusChangeNotifications},on:{change:function(e){var i=t.printerStatusChangeNotifications,n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=null,s=t._i(i,o);n.checked?s<0&&(t.printerStatusChangeNotifications=i.concat([o])):s>-1&&(t.printerStatusChangeNotifications=i.slice(0,s).concat(i.slice(s+1)))}else t.printerStatusChangeNotifications=a}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"id_"+t.settingKey(e.id)}},[t._v(" "+t._s(e.title)+" "),e.description?i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v(t._s(e.description))]):t._e()])])])],1)]):i("div",[i("saving-animation",{attrs:{errors:[],saving:!1}},[i("div",{staticClass:"mobile-setting-item-wrapper"},[i("div",{staticClass:"setting-item-text"},[i("label",{attrs:{for:"id_"+t.settingKey(e.id)}},[t._v(" "+t._s(e.title)+" "),e.description?i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v(t._s(e.description))]):t._e()])]),i("div",{staticClass:"setting-item-switch"},[i("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,onColor:"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)",offColor:"var(--color-divider)",borderColor:"var(--color-divider)",thumbColor:"ios"===t.theme?"#fff":"var(--color-primary)",disabled:!t.notificationsEnabled},model:{value:t.printerStatusChangeNotifications,callback:function(e){t.printerStatusChangeNotifications=e},expression:"printerStatusChangeNotifications"}})],1)])])],1)]:[i("notification-setting-switch",{attrs:{settingId:e.id,settingTitle:e.title,settingDescription:e.description,disabled:!t.notificationsEnabled,errorMessages:t.errorMessages,saving:t.saving,notificationChannel:t.notificationChannel},on:{updateNotificationChannel:function(e,i){return t.$emit("updateNotificationChannel",e,i)}}})],e.subcategories?i("div",t._l(e.subcategories,(function(e){return i("notification-setting-switch",{key:e.id,attrs:{settingId:e.id,settingTitle:e.title,settingDescription:e.description,isSubcategory:!0,disabled:!t.notificationsEnabled,errorMessages:t.errorMessages,saving:t.saving,notificationChannel:t.notificationChannel},on:{updateNotificationChannel:function(e,i){return t.$emit("updateNotificationChannel",e,i)}}})})),1):t._e()],2)}))],2)],1):t._e(),t._t("footer")],2):i("div",[i("p",{staticClass:"text-warning"},[t._v('Please configure the following variables in the ".env" file:')]),i("ul",{staticClass:"text-warning"},t._l(t.envVarsToSet,(function(e){return i("li",{key:e},[t._v(t._s(e))])})),0)])])},a=[],o=(i("4de4"),i("4fad"),i("fc11")),s=i("54f8"),r=i("d0af"),c=i("847e"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"web"===t.theme?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-form-label",class:{"pl-5":t.isSubcategory}},[i("saving-animation",{attrs:{errors:t.errorMessages?t.errorMessages[t.settingKey(t.settingId)]:[],saving:!!t.saving&&t.saving[t.settingKey(t.settingId)]}},[i("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationChannel.channelInfo[t.settingId],expression:"notificationChannel.channelInfo[settingId]"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"id_"+t.settingKey(t.settingId),disabled:t.disabled},domProps:{checked:Array.isArray(t.notificationChannel.channelInfo[t.settingId])?t._i(t.notificationChannel.channelInfo[t.settingId],null)>-1:t.notificationChannel.channelInfo[t.settingId]},on:{change:[function(e){var i=t.notificationChannel.channelInfo[t.settingId],n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=null,s=t._i(i,o);n.checked?s<0&&t.$set(t.notificationChannel.channelInfo,t.settingId,i.concat([o])):s>-1&&t.$set(t.notificationChannel.channelInfo,t.settingId,i.slice(0,s).concat(i.slice(s+1)))}else t.$set(t.notificationChannel.channelInfo,t.settingId,a)},function(e){return t.$emit("updateNotificationChannel",t.notificationChannel,[t.settingId])}]}}),i("label",{class:["custom-control-label",t.labelClass],attrs:{for:"id_"+t.settingKey(t.settingId)}},[t._v(" "+t._s(t.settingTitle)+" "),t.settingDescription?i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v(t._s(t.settingDescription))]):t._e()])])])],1),t.bottomDivider?i("div",{staticClass:"col-12"},[i("hr",{staticClass:"my-1"})]):t._e()]):i("div",[i("saving-animation",{attrs:{errors:t.errorMessages?t.errorMessages[t.settingKey(t.settingId)]:[],saving:!!t.saving&&t.saving[t.settingKey(t.settingId)]}},[i("div",{staticClass:"mobile-setting-item-wrapper",class:{"is-subcategory":t.isSubcategory}},[i("div",{staticClass:"setting-item-text"},[i("label",{class:t.labelClass,attrs:{for:"id_"+t.settingKey(t.settingId)}},[t._v(" "+t._s(t.settingTitle)+" "),t.settingDescription?i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v(t._s(t.settingDescription))]):t._e()])]),i("div",{staticClass:"setting-item-switch"},[i("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,onColor:"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)",offColor:"var(--color-divider)",borderColor:"var(--color-divider)",thumbColor:"ios"===t.theme?"#fff":"var(--color-primary)",disabled:t.disabled},on:{input:function(e){return t.$emit("updateNotificationChannel",t.notificationChannel,[t.settingId])}},model:{value:t.notificationChannel.channelInfo[t.settingId],callback:function(e){t.$set(t.notificationChannel.channelInfo,t.settingId,e)},expression:"notificationChannel.channelInfo[settingId]"}})],1)])])],1)},f=[],d=i("b279"),u=i("4f95"),h={name:"NotificationSettingSwitch",components:{SavingAnimation:c["a"]},props:{errorMessages:{type:Object||null,default:null},saving:{type:Object||null,default:null},notificationChannel:{type:Object,required:!0},settingId:{type:String,required:!0},settingTitle:{type:String,required:!0},settingDescription:{type:String},isSubcategory:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},bottomDivider:{type:Boolean,default:!1},isHeader:{type:Boolean,default:!1}},computed:{theme:function(){var t=Object(u["b"])();return t?"ios"===t?"ios":"material":"web"},labelClass:function(){return this.isHeader?"lg":""}},methods:{settingKey:function(t){return Object(d["b"])(this.notificationChannel,t)}}},g=h,p=(i("41dc"),i("2877")),b=Object(p["a"])(g,l,f,!1,null,"06fd8ffb",null),m=b.exports,v=[{id:"notify_on_failure_alert",title:"Failure alerts",description:"When possible failures are detected"},{id:"print_job",title:"Print job events",description:"Upon start/end/cancellation of a print job",subcategories:[{id:"notify_on_print_done",title:"When print is done",enabledByDefault:!0},{id:"notify_on_print_cancelled",title:"When print is cancelled",enabledByDefault:!1},{id:"notify_on_filament_change",title:"When filament runs out or needs a change",enabledByDefault:!0},{id:"notify_on_other_print_events",title:"When other event happens",description:"Such as start, pause, and resume",enabledByDefault:!1}]},{id:"notify_on_heater_status",title:"Heater status change",description:"Heater reached target or cooled down"}],C={name:"NotificationChannelTemplate",components:{SavingAnimation:c["a"],NotificationSettingSwitch:m},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},notificationChannel:{type:Object,required:!0},notificationSettings:{type:Array,default:function(){return v}},showSettings:{type:Boolean,default:!0},configVariableTitle:{type:String},configVariablePlaceholder:{type:String},configVariableName:{type:String}},data:function(){return{configVariable:null,configUpdateTimeout:null}},computed:{channelCreated:function(){return!!this.notificationChannel.channelInfo},notificationsEnabled:function(){return!!this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.enabled},envVarsToSet:function(){for(var t,e=(null===(t=this.notificationChannel.pluginInfo)||void 0===t?void 0:t.env_vars)||{},i=[],n=0,a=Object.entries(e);n<a.length;n++){var o=Object(r["a"])(a[n],2),s=o[0],c=o[1];c.is_required&&!c.is_set&&i.push(s)}return i},printerStatusChangeNotifications:{get:function(){if(!this.notificationChannel.channelInfo)return null;var t,e=this.notificationSettings.filter((function(t){return"print_job"===t.id}))[0].subcategories,i=Object(s["a"])(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(this.notificationChannel.channelInfo[n.id])return!0}}catch(a){i.e(a)}finally{i.f()}return!1},set:function(t){if(t){var e,i=this.notificationSettings.filter((function(t){return"print_job"===t.id}))[0].subcategories,n=[],a=Object(s["a"])(i);try{for(a.s();!(e=a.n()).done;){var o=e.value;o.enabledByDefault&&(this.notificationChannel.channelInfo[o.id]=!0,n.push(o.id))}}catch(u){a.e(u)}finally{a.f()}n.length&&this.$emit("updateNotificationChannel",this.notificationChannel,n)}else{var r,c=this.notificationSettings.filter((function(t){return"print_job"===t.id}))[0].subcategories,l=[],f=Object(s["a"])(c);try{for(f.s();!(r=f.n()).done;){var d=r.value;this.notificationChannel.channelInfo[d.id]&&(this.notificationChannel.channelInfo[d.id]=!1,l.push(d.id))}}catch(u){f.e(u)}finally{f.f()}l.length&&this.$emit("updateNotificationChannel",this.notificationChannel,l)}}},theme:function(){var t=Object(u["b"])();return t?"ios"===t?"ios":"material":"web"}},created:function(){this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.config&&this.configVariableName?this.configVariable=this.notificationChannel.channelInfo.config[this.configVariableName]:this.configVariable=""},watch:{configVariable:function(t,e){null!==e&&(this.$emit("clearErrorMessages",this.settingKey("config")),this.updateConfig())}},methods:{settingKey:function(t){return Object(d["b"])(this.notificationChannel,t)},updateConfig:function(){var t=this;this.configUpdateTimeout&&clearTimeout(this.configUpdateTimeout);var e=Object(o["a"])({},this.configVariableName,this.configVariable);this.channelCreated?this.configUpdateTimeout=setTimeout((function(){t.configVariable?(t.notificationChannel.channelInfo.config=e,t.$emit("updateNotificationChannel",t.notificationChannel,["config"])):t.$emit("deleteNotificationChannel",t.notificationChannel)}),1e3):this.configVariable&&(this.configUpdateTimeout=setTimeout((function(){return t.$emit("createNotificationChannel",t.notificationChannel,e)}),1e3))}}},_=C,y=(i("6e09"),Object(p["a"])(_,n,a,!1,null,"431fb06b",null));e["a"]=y.exports},9960:function(t,e,i){},fde9:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("notification-channel-template",{attrs:{errorMessages:t.errorMessages,saving:t.saving,notificationChannel:t.notificationChannel,configVariableTitle:"Access Token",configVariablePlaceholder:"Pushbullet Access Token",configVariableName:"access_token"},on:{createNotificationChannel:function(e,i){return t.$emit("createNotificationChannel",e,i)},updateNotificationChannel:function(e,i){return t.$emit("updateNotificationChannel",e,i)},deleteNotificationChannel:function(e){return t.$emit("deleteNotificationChannel",e)},clearErrorMessages:function(e){return t.$emit("clearErrorMessages",e)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("small",{staticClass:"form-text text-muted"},[t._v(" If you have a Pushbullet account, you can "),i("a",{attrs:{href:"https://www.pushbullet.com/#settings",target:"_blank"}},[t._v("generate an access token")]),t._v(" and enter it here. ")])]},proxy:!0}])})},a=[],o=i("9897"),s={name:"pushbullet",components:{NotificationChannelTemplate:o["a"]},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},notificationChannel:{type:Object,required:!0}}},r=s,c=i("2877"),l=Object(c["a"])(r,n,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4f250c50.js.map