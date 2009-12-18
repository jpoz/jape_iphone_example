(function() {  
  var Jape = {
    value: undefined,
    
    init: function() {
      if(typeof(JSON) == "undefined") {
        this.add_json_lib();
      }
      return this;
    },
    
    get: function(key) {
      db_value = localStorage.getItem(key);
      if (db_value != null) { 
        this.value = JSON.parse(db_value);
      } else {
        this.value = null
      }
      return this;
    },
    
    set: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
      return this;
    },
    
    add_json_lib: function() {
      JSON = {};(function(){function h(a){return a<10?"0"+a:a}function n(a){o.lastIndex=0;return o.test(a)?'"'+a.replace(o,function(c){var d=q[c];return typeof d==="string"?d:"\\u"+("0000"+c.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,c){var d,f,j=g,e,b=c[a];if(b&&typeof b==="object"&&typeof b.toJSON==="function")b=b.toJSON(a);if(typeof k==="function")b=k.call(c,a,b);switch(typeof b){case "string":return n(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";g+=m;e=[];if(Object.prototype.toString.apply(b)==="[object Array]"){f=b.length;for(a=0;a<f;a+=1)e[a]=l(a,b)||"null";c=e.length===0?"[]":g?"[\n"+g+e.join(",\n"+g)+"\n"+j+"]":"["+e.join(",")+"]";g=j;return c}if(k&&typeof k==="object"){f=k.length;for(a=0;a<f;a+=1){d=k[a];if(typeof d==="string")if(c=l(d,b))e.push(n(d)+(g?": ":":")+c)}}else for(d in b)if(Object.hasOwnProperty.call(b,d))if(c=l(d,b))e.push(n(d)+(g?": ":":")+c);c=e.length===0?"{}":g?"{\n"+g+e.join(",\n"+g)+"\n"+j+"}":"{"+e.join(",")+"}";g=j;return c}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return this.getUTCFullYear()+"-"+h(this.getUTCMonth()+1)+"-"+h(this.getUTCDate())+"T"+h(this.getUTCHours())+":"+h(this.getUTCMinutes())+":"+h(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var p=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,m,q={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,c,d){var f;m=g="";if(typeof d==="number")for(f=0;f<d;f+=1)m+=" ";else if(typeof d==="string")m=d;if((k=c)&&typeof c!=="function"&&(typeof c!=="object"||typeof c.length!=="number"))throw new Error("JSON.stringify");return l("",{"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,c){function d(f,j){var e,b,i=f[j];if(i&&typeof i==="object")for(e in i)if(Object.hasOwnProperty.call(i,e)){b=d(i,e);if(b!==undefined)i[e]=b;else delete i[e]}return c.call(f,j,i)}p.lastIndex=0;if(p.test(a))a=a.replace(p,function(f){return"\\u"+("0000"+f.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){a=eval("("+a+")");return typeof c==="function"?d({"":a},""):a}throw new SyntaxError("JSON.parse");}})();if(!Object.prototype.toJSONString){Object.prototype.toJSONString=function(h){return JSON.stringify(this,h)};Object.prototype.parseJSON=function(h){return JSON.parse(this,h)}};}
  }
  
  window.Jape = Jape.init();
})();