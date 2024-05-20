System.register("chunks:///_virtual/PrivacyUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIBase.ts","./PortMgr.ts","./UI.ts"],(function(t){var e,n,i,o,r,a,c,l,u,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,c=t.Node},function(t){l=t.UIBase},function(t){u=t.default},function(t){s=t.UI}],execute:function(){var p,f,y,v,g,I,d;r._RF.push({},"6d4bal0OfNAaZPJgnXYYiRv","PrivacyUI",void 0);var h=a.ccclass,b=a.property;t("PrivacyUI",(p=h("PrivacyUI"),f=b(c),y=b(c),p((I=e((g=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,i(e,"closeBtn",I,o(e)),i(e,"btnLayer",d,o(e)),e}n(e,t);var r=e.prototype;return r.onLoad=function(){},r.show=function(t){},r.onClose=function(){},r.onCancel=function(){localStorage.getItem("isprivacy")?(this.node.parent.getComponent(s).close_ui(null,"PrivacyUI"),this.node.active=!1):window.qg.exitApplication({})},r.onConfirm=function(){localStorage.getItem("isprivacy")||(localStorage.setItem("isprivacy","true"),u.init()),this.node.parent.getComponent(s).close_ui(null,"PrivacyUI")},e}(l)).prototype,"closeBtn",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=e(g.prototype,"btnLayer",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=g))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./PrivacyUI.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});