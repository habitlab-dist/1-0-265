window.habitlab_content_script = true;

(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/components/call-to-action-button.deps.js":function(t,o,n){const{import_dom_modules:i}=n("./src/libs_frontend/dom_utils.ls");n("./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js"),i(n("./src/components/call-to-action-button.html"),"components/call-to-action-button.html"),n("./src/components/call-to-action-button.js")},"./src/components/call-to-action-button.html":function(t,o){t.exports="<link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <habitlab-dom-module id=call-to-action-button> <template> <style>:host{display:var(--call-to-action-button-display,inline-block);min-height:var(--call-to-action-button-min-height,38px);width:var(--call-to-action-button-width);margin:var(--call-to-action-button-margin,0 0 0 0)}.call-to-action-button{cursor:pointer;color:var(--call-to-action-button-color,#fff);background-color:var(--call-to-action-button-bg-color,#415D67);margin:0 auto;width:100%;height:100%;box-shadow:var(--call-to-action-button-shadow,2px 2px 2px #888)}</style> <habitlab-paper-button class=call-to-action-button on-click=buttonClicked>{{buttonText}}</habitlab-paper-button> </template> <script src=call-to-action-button.js><\/script> </habitlab-dom-module>"},"./src/components/call-to-action-button.js":function(t,o,n){const{polymer_ext:i}=n("./src/libs_frontend/polymer_utils.ls"),{log_action:e}=n("./src/libs_frontend/intervention_log_utils.ls"),{get_intervention:l,get_goal_info:s}=n("./src/libs_common/intervention_info.ls"),{close_tab_with_id:c}=n("./src/generated_libs/libs_frontend/tab_utils.js"),{get_tab_id:a}=n("./src/libs_common/intervention_info.ls");i({is:"call-to-action-button",properties:{goal:{type:Object},buttonText:{type:String,computed:"computeButtonText(goal)"}},ready:function(){this.goal=s()},buttonClicked:function(){if(this.goal.is_positive){e({positive:"habitlab-positive-goal-site-button clicked"});var t=this.goal.domain;-1==t.search("http")&&(t="https://"+t),window.location.href=t}else e({positive:"habitlab-close-tab-button clicked"}),c(a())},computeButtonText:function(t){return null!=t.call_to_action?t.call_to_action:t.is_positive?t.description:"Close "+s().sitename_printable}})},"./src/components/habitlab-positive-goal-site-button.deps.js":function(t,o,n){const{import_dom_modules:i}=n("./src/libs_frontend/dom_utils.ls");n("./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js"),i(n("./src/components/habitlab-positive-goal-site-button.html"),"components/habitlab-positive-goal-site-button.html"),n("./src/components/habitlab-positive-goal-site-button.ls")},"./src/components/habitlab-positive-goal-site-button.html":function(t,o){t.exports="<link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <habitlab-dom-module id=habitlab-positive-goal-site-button> <template> <style>:host{display:var(--call-to-action-button-display,inline-block);height:var(--call-to-action-button-height,38px);width:var(--call-to-action-button-width);margin:var(--call-to-action-button-margin,0 0 0 0)}.habitlab-positive-goal-site-button{cursor:pointer;color:var(--call-to-action-button-color,#fff);font-size:var(--call-to-action-button-font-size,14px);background-color:var(--call-to-action-button-bg-color,#009b37);margin:0 auto;width:100%;height:100%;box-shadow:var(--call-to-action-button-shadow,2px 2px 2px #888)}</style> <habitlab-paper-button class=habitlab-positive-goal-site-button on-click=button_clicked>{{buttontext}}</habitlab-paper-button> </template> <script src=habitlab-positive-goal-site-button.js><\/script> </habitlab-dom-module>"},"./src/components/habitlab-positive-goal-site-button.ls":function(t,o,n){var i,e,l;i=n("./src/libs_frontend/intervention_log_utils.ls").log_action,n("./src/libs_common/intervention_info.ls").get_intervention,e=n("./src/generated_libs/libs_frontend/goal_utils.js").get_random_uncompleted_positive_goal,l=n("./src/libs_common/localization_utils.js").msg,Polymer({is:"habitlab-positive-goal-site-button",properties:{goal:{type:Object,observer:"goalChanged"},buttontext:String},goalChanged:function(){return this.buttontext=l(this.goal.call_to_action+"")},button_clicked:function(){var t;return i({positive:"habitlab-positive-goal-site-button clicked"}),-1===(t=this.goal.domain).search("http")&&(t="https://"+t),window.location.href=t},ready:async function(){return this.goal=await e()}})},"./src/libs_common/common_libs.ls":function(t,o){var n,i=void 0!==o&&o||this;i.sleep=n=async function(t){return new Promise(function(o){return setTimeout(o,t)})},i.once_true=async function(t,o){var i;for(i=t();!i;)i=t(),await n(100);null!=o&&o()},i.run_only_one_at_a_time=function(t){var o;return o=!1,function(){if(!o)return o=!0,t(function(){return o=!1})}},i.run_every_timeperiod=function(t,o){var n;return n=Date.now(),t(),setInterval(function(){var i;if(i=Date.now(),n+o<i)return n=i,t()},1e3)}}}]);