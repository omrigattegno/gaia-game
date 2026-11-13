/* Yoovy & Googy: the kingdom in 3D (the royal intro, the map, the sisters in the games). Built from kingdom3d/src (npm run build); do not edit by hand. */
(()=>{var bf=0,Fh=1,Tf=2;var Ys=1,wf=2,Ur=3,es=0,$t=1,xt=2,si=0,Fr=1,Tt=2,Bh=3,Oh=4,Af=5;var Zs=100,Rf=101,Cf=102,Pf=103,If=104,Lf=200,Df=201,Nf=202,Uf=203,Hh=204,zh=205,Ff=206,Bf=207,Of=208,Hf=209,zf=210,kf=211,Gf=212,Vf=213,Wf=214,$a=0,Ka=1,Qa=2,Er=3,ja=4,el=5,tl=6,nl=7,Cl=0,Xf=1,qf=2,vi=0,Wo=1,Xo=2,qo=3,Gn=4,Yo=5,Zo=6,Jo=7;var kh=300,Ms=301,Js=302,Pl=303,Il=304,$o=306,Zi=1e3,Ci=1001,il=1002,vn=1003,Yf=1004;var Ko=1005;var nn=1006,Ll=1007;var Ni=1008;var Dn=1009,Gh=1010,Vh=1011,Br=1012,Dl=1013,Mi=1014,ri=1015,dn=1016,Nl=1017,Ul=1018,Or=1020,Wh=35902,Xh=35899,qh=1021,Yh=1022,Vn=1023,Ii=1026,Ss=1027,Hr=1028,Fl=1029,Es=1030,Bl=1031;var Ol=1033,Qo=33776,jo=33777,ea=33778,ta=33779,Hl=35840,zl=35841,kl=35842,Gl=35843,Vl=36196,Wl=37492,Xl=37496,ql=37488,Yl=37489,na=37490,Zl=37491,Jl=37808,$l=37809,Kl=37810,Ql=37811,jl=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,lc=37821,cc=36492,hc=36494,uc=36495,fc=36283,dc=36284,ia=36285,pc=36286;var go=2300,sl=2301,Za=2302,Eh=2303,bh=2400,Th=2401,wh=2402;var Zf=3200;var sa=0,Jf=1,ts="",tn="srgb",xo="srgb-linear",_o="linear",St="srgb";var Ja=7680;var $f=519,Kf=512,Qf=513,jf=514,mc=515,ed=516,td=517,gc=518,nd=519,Zh=35044;var Jh="300 es",gi=2e3,br=2001;function Vp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){let i=yo("canvas");return i.style.display="block",i}var Wu={},Tr=null;function vo(...i){let e="THREE."+i.shift();Tr?Tr("log",e,...i):console.log(e,...i)}function sd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=sd(i);let e="THREE."+i.shift();if(Tr)Tr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=sd(i);let e="THREE."+i.shift();if(Tr)Tr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ks(...i){let e=i.join(" ");e in Wu||(Wu[e]=!0,Qe(...i))}function rd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var od={[$a]:Ka,[Qa]:tl,[ja]:nl,[Er]:el,[Ka]:$a,[tl]:Qa,[nl]:ja,[el]:Er},Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $c=Math.PI/180,Mo=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Xp(i,e){return(i%e+e)%e}function Kc(i,e,t){return(1-t)*i+t*e}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tu=class tu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tu.prototype.isVector2=!0;var le=tu,Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*_;m<0&&(f=-f,u=-u,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),A=Math.sin(v);g=Math.sin(g*v)/A,a=Math.sin(a*v)/A,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*u-c*f,e[t+1]=l*p+h*f+c*d-a*u,e[t+2]=c*p+h*u+a*f-l*d,e[t+3]=h*p-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nu=class nu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nu.prototype.isVector3=!0;var I=nu,Qc=new I,Xu=new Gt,iu=class iu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],_=s[0],m=s[3],g=s[6],v=s[1],A=s[4],M=s[7],y=s[2],E=s[5],b=s[8];return r[0]=o*_+a*v+l*y,r[3]=o*m+a*A+l*E,r[6]=o*g+a*M+l*b,r[1]=c*_+h*v+d*y,r[4]=c*m+h*A+d*E,r[7]=c*g+h*M+d*b,r[2]=f*_+u*v+p*y,r[5]=f*m+u*A+p*E,r[8]=f*g+u*M+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=t*d+n*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,t)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};iu.prototype.isMatrix3=!0;var st=iu,jc=new st,qu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){let i={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?_o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xo]:{primaries:e,whitePoint:n,transfer:_o,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:St,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var ft=qp();function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var sr,rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=yo("canvas")),sr.width=e.width,sr.height=e.height;let s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yp=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eh(s[o].image)):r.push(eh(s[o]))}else r=eh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var Zp=0,th=new I,On=class i extends Li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=nn,o=Ni,a=Vn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=qi(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=kh;On.DEFAULT_ANISOTROPY=1;var su=class su{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,M=(u+1)/2,y=(g+1)/2,E=(h+f)/4,b=(d+_)/4,x=(p+m)/4;return A>M&&A>y?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=b/n):M>y?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=b/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};su.prototype.isVector4=!0;var Vt=su,ol=class extends Li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new On(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},So=class extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Rl=class Rl{constructor(e,t,n,s,r,o,a,l,c,h,d,f,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,u,p,_,m)}set(e,t,n,s,r,o,a,l,c,h,d,f,u,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,u=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,p=c*h,_=c*d;t[0]=f+_*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,p=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,u=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=p*c-u,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,u=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=p*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*l,u=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,$p)}lookAt(e,t,n){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),hs.crossVectors(n,Xn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),hs.crossVectors(n,Xn)),hs.normalize(),Ma.crossVectors(Xn,hs),s[0]=hs.x,s[4]=Ma.x,s[8]=Xn.x,s[1]=hs.y,s[5]=Ma.y,s[9]=Xn.y,s[2]=hs.z,s[6]=Ma.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],A=n[7],M=n[11],y=n[15],E=s[0],b=s[4],x=s[8],S=s[12],T=s[1],P=s[5],L=s[9],N=s[13],R=s[2],D=s[6],z=s[10],O=s[14],H=s[3],B=s[7],G=s[11],U=s[15];return r[0]=o*E+a*T+l*R+c*H,r[4]=o*b+a*P+l*D+c*B,r[8]=o*x+a*L+l*z+c*G,r[12]=o*S+a*N+l*O+c*U,r[1]=h*E+d*T+f*R+u*H,r[5]=h*b+d*P+f*D+u*B,r[9]=h*x+d*L+f*z+u*G,r[13]=h*S+d*N+f*O+u*U,r[2]=p*E+_*T+m*R+g*H,r[6]=p*b+_*P+m*D+g*B,r[10]=p*x+_*L+m*z+g*G,r[14]=p*S+_*N+m*O+g*U,r[3]=v*E+A*T+M*R+y*H,r[7]=v*b+A*P+M*D+y*B,r[11]=v*x+A*L+M*z+y*G,r[15]=v*S+A*N+M*O+y*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*u-c*f,A=a*u-c*d,M=a*f-l*d,y=o*u-c*h,E=o*f-l*h,b=o*d-a*h;return t*(_*v-m*A+g*M)-n*(p*v-m*y+g*E)+s*(p*A-_*y+g*b)-r*(p*M-_*E+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*a-n*o,A=t*l-s*o,M=t*c-r*o,y=n*l-s*a,E=n*c-r*a,b=s*c-r*l,x=h*_-d*p,S=h*m-f*p,T=h*g-u*p,P=d*m-f*_,L=d*g-u*_,N=f*g-u*m,R=v*N-A*L+M*P+y*T-E*S+b*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=(a*N-l*L+c*P)*D,e[1]=(s*L-n*N-r*P)*D,e[2]=(_*b-m*E+g*y)*D,e[3]=(f*E-d*b-u*y)*D,e[4]=(l*T-o*N-c*S)*D,e[5]=(t*N-s*T+r*S)*D,e[6]=(m*M-p*b-g*A)*D,e[7]=(h*b-f*M+u*A)*D,e[8]=(o*L-a*T+c*x)*D,e[9]=(n*T-t*L-r*x)*D,e[10]=(p*E-_*M+g*v)*D,e[11]=(d*M-h*E-u*v)*D,e[12]=(a*S-o*P-l*x)*D,e[13]=(t*P-n*S+s*x)*D,e[14]=(_*A-p*y-m*v)*D,e[15]=(h*y-d*A+f*v)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,_=o*h,m=o*d,g=a*d,v=l*c,A=l*h,M=l*d,y=n.x,E=n.y,b=n.z;return s[0]=(1-(_+g))*y,s[1]=(u+M)*y,s[2]=(p-A)*y,s[3]=0,s[4]=(u-M)*E,s[5]=(1-(f+g))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(p+A)*b,s[9]=(m-v)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=rr.set(s[0],s[1],s[2]).length(),a=rr.set(s[4],s[5],s[6]).length(),l=rr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);let c=1/o,h=1/a,d=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,t.setFromRotationMatrix(fi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=gi,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===gi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===br)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),u=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===gi)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===br)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Rl.prototype.isMatrix4=!0;var it=Rl,rr=new I,fi=new it,Jp=new I(0,0,0),$p=new I(1,1,1),hs=new I,Ma=new I,Xn=new I,Zu=new it,Ju=new Gt,Zt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zt.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kp=0,$u=new I,or=new Gt,zi=new it,Sa=new I,io=new I,Qp=new I,jp=new Gt,Ku=new I(1,0,0),Qu=new I(0,1,0),ju=new I(0,0,1),ef={type:"added"},e0={type:"removed"},ar={type:"childadded",child:null},nh={type:"childremoved",child:null},hn=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Zt,n=new Gt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new st}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(io,Sa,this.up):zi.lookAt(Sa,io,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),or.setFromRotationMatrix(zi),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),ar.child=e,this.dispatchEvent(ar),ar.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e0),nh.child=e,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new I(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function ih(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Xp(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ih(o,r,e+1/3),this.g=ih(o,r,e),this.b=ih(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return ft.workingToColorSpace(Pn.copy(this),e),Math.round(ct(Pn.r*255,0,255))*65536+Math.round(ct(Pn.g*255,0,255))*256+Math.round(ct(Pn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=tn){ft.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,s=Pn.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Ea);let n=Kc(us.h,Ea.h,t),s=Kc(us.s,Ea.s,t),r=Kc(us.l,Ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new ae;ae.NAMES=ad;var Gs=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Hn=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new I,ki=new I,sh=new I,Gi=new I,lr=new I,cr=new I,tf=new I,rh=new I,oh=new I,ah=new I,lh=new Vt,ch=new Vt,hh=new Vt,Xi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),ki.subVectors(n,t),sh.subVectors(e,t);let o=di.dot(di),a=di.dot(ki),l=di.dot(sh),c=ki.dot(ki),h=ki.dot(sh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(e,t),ch.fromBufferAttribute(e,n),hh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(lh,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(hh,r.z),o}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),ki.subVectors(e,t),di.cross(ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),di.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;lr.subVectors(s,n),cr.subVectors(r,n),rh.subVectors(e,n);let l=lr.dot(rh),c=cr.dot(rh);if(l<=0&&c<=0)return t.copy(n);oh.subVectors(e,s);let h=lr.dot(oh),d=cr.dot(oh);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(lr,o);ah.subVectors(e,r);let u=lr.dot(ah),p=cr.dot(ah);if(p>=0&&u<=p)return t.copy(r);let _=u*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(cr,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return tf.subVectors(r,s),a=(d-h)/(d-h+(u-p)),t.copy(s).addScaledVector(tf,a);let g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ni=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),Ta.subVectors(this.max,so),hr.subVectors(e.a,so),ur.subVectors(e.b,so),fr.subVectors(e.c,so),fs.subVectors(ur,hr),ds.subVectors(fr,ur),Bs.subVectors(hr,fr);let t=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Bs.z,Bs.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Bs.z,0,-Bs.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Bs.y,Bs.x,0];return!uh(t,hr,ur,fr,Ta)||(t=[1,0,0,0,1,0,0,0,1],!uh(t,hr,ur,fr,Ta))?!1:(wa.crossVectors(fs,ds),t=[wa.x,wa.y,wa.z],uh(t,hr,ur,fr,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new I,new I,new I,new I,new I,new I,new I,new I],pi=new I,ba=new ni,hr=new I,ur=new I,fr=new I,fs=new I,ds=new I,Bs=new I,so=new I,Ta=new I,wa=new I,Os=new I;function uh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Os.fromArray(i,r);let a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cn=new I,Aa=new le,n0=0,yt=class extends Li{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var To=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var De=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},i0=new ni,ro=new I,fh=new I,xi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):i0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);let t=ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ro,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(fh)),this.expandByPoint(ro.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},s0=0,ti=new it,dh=new hn,dr=new I,qn=new ni,oo=new ni,yn=new I,rt=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vp(e)?To:bo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(qn.min,oo.min),qn.expandByPoint(yn),yn.addVectors(qn.max,oo.max),qn.expandByPoint(yn)):(qn.expandByPoint(oo.min),qn.expandByPoint(oo.max))}qn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),yn.add(dr)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new I,l[x]=new I;let c=new I,h=new I,d=new I,f=new le,u=new le,p=new le,_=new I,m=new I;function g(x,S,T){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,T),f.fromBufferAttribute(r,x),u.fromBufferAttribute(r,S),p.fromBufferAttribute(r,T),h.sub(c),d.sub(c),u.sub(f),p.sub(f);let P=1/(u.x*p.y-p.x*u.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-u.y).multiplyScalar(P),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(P),a[x].add(_),a[S].add(_),a[T].add(_),l[x].add(m),l[S].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,S=v.length;x<S;++x){let T=v[x],P=T.start,L=T.count;for(let N=P,R=P+L;N<R;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let A=new I,M=new I,y=new I,E=new I;function b(x){y.fromBufferAttribute(s,x),E.copy(y);let S=a[x];A.copy(S),A.sub(y.multiplyScalar(y.dot(S))).normalize(),M.crossVectors(E,S);let P=M.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,P)}for(let x=0,S=v.length;x<S;++x){let T=v[x],P=T.start,L=T.count;for(let N=P,R=P+L;N<R;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new yt(f,h,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Bn=new I,Rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ph=new I,r0=new I,o0=new st,mi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ph.subVectors(n,t).cross(r0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ph),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||o0.getNormalMatrix(e),s=this.coplanarPoint(ph).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},a0=0,_i=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Fr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=zh,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sn=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr,ao=new I,mr=new I,gr=new I,xr=new le,lo=new le,ld=new it,Ra=new I,co=new I,Ca=new I,nf=new le,mh=new le,sf=new le,un=class extends hn{constructor(e=new sn){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wo(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new Rr(n,3,0,!1)),pr.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=pr,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Pa(Ra.set(-.5,-.5,0),gr,o,mr,s,r),Pa(co.set(.5,-.5,0),gr,o,mr,s,r),Pa(Ca.set(.5,.5,0),gr,o,mr,s,r),nf.set(0,0),mh.set(1,0),sf.set(1,1);let a=e.ray.intersectTriangle(Ra,co,Ca,!1,ao);if(a===null&&(Pa(co.set(-.5,.5,0),gr,o,mr,s,r),mh.set(0,1),a=e.ray.intersectTriangle(Ra,Ca,co,!1,ao),a===null))return;let l=e.ray.origin.distanceTo(ao);l<e.near||l>e.far||t.push({distance:l,point:ao.clone(),uv:Xi.getInterpolation(ao,Ra,co,Ca,nf,mh,sf,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Pa(i,e,t,n,s,r){xr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(lo.x=r*xr.x-s*xr.y,lo.y=s*xr.x+r*xr.y):lo.copy(xr),i.copy(e),i.x+=lo.x,i.y+=lo.y,i.applyMatrix4(ld)}var Wi=new I,gh=new I,Ia=new I,La=new I,Ao=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gh.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),La.copy(this.origin).sub(gh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),a=La.dot(this.direction),l=-La.dot(Ia),c=La.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gh).addScaledVector(Ia,f),u}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);let n=Wi.dot(this.direction),s=Wi.dot(Wi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,f=e.y-o.y,u=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,A=n.z-o.z,M=Math.abs(l),y=Math.abs(c),E=Math.abs(h),b,x,S,T,P,L,N,R,D,z,O,H;if(M>=y&&M>=E?(S=l,L=d,D=p,H=g,l>=0?(b=c,x=h,T=f,P=u,N=_,R=m,z=v,O=A):(b=h,x=c,T=u,P=f,N=m,R=_,z=A,O=v)):y>=E?(S=c,L=f,D=_,H=v,c>=0?(b=h,x=l,T=u,P=d,N=m,R=p,z=A,O=g):(b=l,x=h,T=d,P=u,N=p,R=m,z=g,O=A)):(S=h,L=u,D=m,H=A,h>=0?(b=l,x=c,T=d,P=f,N=p,R=_,z=g,O=v):(b=c,x=l,T=f,P=d,N=_,R=p,z=v,O=g)),S===0)return null;let B=b/S,G=x/S,U=1/S,J=T-B*L,Y=P-G*L,de=N-B*D,ge=R-G*D,Le=z-B*H,K=O-G*H,ie=Le*ge-K*de,pe=J*K-Y*Le,Fe=de*Y-ge*J;if(s){if(ie<0||pe<0||Fe<0)return null}else if((ie<0||pe<0||Fe<0)&&(ie>0||pe>0||Fe>0))return null;let Ee=ie+pe+Fe;if(Ee===0)return null;let Ge=U*(ie*L+pe*D+Fe*H);return(Ee>0?Ge<0:Ge>0)?null:this.at(Ge/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rf=new it,Hs=new Ao,Da=new xi,of=new I,Na=new I,Ua=new I,Fa=new I,xh=new I,Ba=new I,af=new I,Oa=new I,Te=class extends hn{constructor(e=new rt,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(xh.fromBufferAttribute(d,e),o?Ba.addScaledVector(xh,h):Ba.addScaledVector(xh.sub(t),h))}t.add(Ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(Da.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Da,of)===null||Hs.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(rf.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),A=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=v,y=A;M<y;M+=3){let E=a.getX(M),b=a.getX(M+1),x=a.getX(M+2);s=Ha(this,g,e,n,c,h,d,E,b,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let v=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=Ha(this,o,e,n,c,h,d,v,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),A=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=v,y=A;M<y;M+=3){let E=M,b=M+1,x=M+2;s=Ha(this,g,e,n,c,h,d,E,b,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let v=m,A=m+1,M=m+2;s=Ha(this,o,e,n,c,h,d,v,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function l0(i,e,t,n,s,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===es,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:i}}function Ha(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Na),i.getVertexPosition(l,Ua),i.getVertexPosition(c,Fa);let h=l0(i,e,t,n,Na,Ua,Fa,af);if(h){let d=new I;Xi.getBarycoord(af,Na,Ua,Fa,d),s&&(h.uv=Xi.getInterpolatedAttribute(s,a,l,c,d,new le)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,a,l,c,d,new le)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Xi.getNormal(Na,Ua,Fa,f.normal),h.face=f,h.barycoord=d}return h}var Ji=class extends On{constructor(e=null,t=1,n=1,s,r,o,a,l,c=vn,h=vn,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cr=class extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new it,lf=new it,za=[],cf=new ni,c0=new it,ho=new Te,uo=new xi,kt=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,c0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),cf.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(cf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),uo.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),lf.multiplyMatrices(n,_r),ho.matrixWorld=lf,ho.raycast(e,za);for(let o=0,a=za.length;o<a;o++){let l=za[o];l.instanceId=r,l.object=this,t.push(l)}za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ji(new Float32Array(s*this.count),s,this.count,Hr,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zs=new xi,h0=new le(.5,.5),ka=new I,ms=class{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],A=r[13],M=r[14],y=r[15];if(s[0].setComponents(c-o,u-h,g-p,y-v).normalize(),s[1].setComponents(c+o,u+h,g+p,y+v).normalize(),s[2].setComponents(c+a,u+d,g+_,y+A).normalize(),s[3].setComponents(c-a,u-d,g-_,y-A).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,u-f,g-m,y-M).normalize();else if(s[4].setComponents(c-l,u-f,g-m,y-M).normalize(),t===gi)s[5].setComponents(c+l,u+f,g+m,y+M).normalize();else if(t===br)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=h0.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ll=class extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hf=new it,Ah=new Ao,Ga=new xi,Va=new I,yi=class extends hn{constructor(e=new rt,t=new ll){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;hf.copy(s).invert(),Ah.copy(e.ray).applyMatrix4(hf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,_=u;p<_;p++){let m=c.getX(p);Va.fromBufferAttribute(d,m),uf(Va,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,_=u;p<_;p++)Va.fromBufferAttribute(d,p),uf(Va,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function uf(i,e,t,n,s,r,o){let a=Ah.distanceSqToPoint(i);if(a<t){let l=new I;Ah.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ro=class extends On{constructor(e=[],t=Ms,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ii=class extends On{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gs=class extends On{constructor(e,t,n=Mi,s,r,o,a=vn,l=vn,c,h=Ii,d=1){if(h!==Ii&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cl=class extends gs{constructor(e,t=Mi,n=Ms,s,r,o=vn,a=vn,l,c=Ii){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Co=class extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wt=class i extends rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(d,2));function p(_,m,g,v,A,M,y,E,b,x,S){let T=M/b,P=y/x,L=M/2,N=y/2,R=E/2,D=b+1,z=x+1,O=0,H=0,B=new I;for(let G=0;G<z;G++){let U=G*P-N;for(let J=0;J<D;J++){let Y=J*T-L;B[_]=Y*v,B[m]=U*A,B[g]=R,c.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[g]=E>0?1:-1,h.push(B.x,B.y,B.z),d.push(J/b),d.push(1-G/x),O+=1}}for(let G=0;G<x;G++)for(let U=0;U<b;U++){let J=f+U+D*G,Y=f+U+D*(G+1),de=f+(U+1)+D*(G+1),ge=f+(U+1)+D*G;l.push(J,Y,ge),l.push(Y,de,ge),H+=6}a.addGroup(u,H,S),u+=H,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},In=class i extends rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,_=s+1,m=new I,g=new I;for(let v=0;v<=p;v++){let A=0,M=0,y=0,E=0;if(v<=n){let S=v/n,T=S*Math.PI/2;M=-h-e*Math.cos(T),y=e*Math.sin(T),E=-e*Math.cos(T),A=S*d}else if(v<=n+r){let S=(v-n)/r;M=-h+S*t,y=e,E=0,A=d+S*f}else{let S=(v-n-r)/n,T=S*Math.PI/2;M=h+e*Math.sin(T),y=e*Math.cos(T),E=e*Math.sin(T),A=d+f+S*d}let b=Math.max(0,Math.min(1,A/u)),x=0;v===0?x=.5/s:v===p&&(x=-.5/s);for(let S=0;S<=s;S++){let T=S/s,P=T*Math.PI*2,L=Math.sin(P),N=Math.cos(P);g.x=-y*N,g.y=M,g.z=y*L,a.push(g.x,g.y,g.z),m.set(-y*N,E,y*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+x,b)}if(v>0){let S=(v-1)*_;for(let T=0;T<s;T++){let P=S+T,L=S+T+1,N=v*_+T,R=v*_+T+1;o.push(P,L,N),o.push(L,R,N)}}}this.setIndex(o),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var dt=class i extends rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,_=[],m=n/2,g=0;v(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(u,2));function v(){let M=new I,y=new I,E=0,b=(t-e)/n;for(let x=0;x<=r;x++){let S=[],T=x/r,P=T*(t-e)+e;for(let L=0;L<=s;L++){let N=L/s,R=N*l+a,D=Math.sin(R),z=Math.cos(R);y.x=P*D,y.y=-T*n+m,y.z=P*z,d.push(y.x,y.y,y.z),M.set(D,b,z).normalize(),f.push(M.x,M.y,M.z),u.push(N,1-T),S.push(p++)}_.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){let T=_[S][x],P=_[S+1][x],L=_[S+1][x+1],N=_[S][x+1];(e>0||S!==0)&&(h.push(T,P,N),E+=3),(t>0||S!==r-1)&&(h.push(P,L,N),E+=3)}c.addGroup(g,E,0),g+=E}function A(M){let y=p,E=new le,b=new I,x=0,S=M===!0?e:t,T=M===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*T,0),f.push(0,T,0),u.push(.5,.5),p++;let P=p;for(let L=0;L<=s;L++){let R=L/s*l+a,D=Math.cos(R),z=Math.sin(R);b.x=S*z,b.y=m*T,b.z=S*D,d.push(b.x,b.y,b.z),f.push(0,T,0),E.x=D*.5+.5,E.y=z*.5*T+.5,u.push(E.x,E.y),p++}for(let L=0;L<s;L++){let N=y+L,R=P+L;M===!0?h.push(R,R+1,N):h.push(R+1,R,N),x+=3}c.addGroup(g,x,M===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ct=class i extends dt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hl=class i extends rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let A=new I,M=new I,y=new I;for(let E=0;E<t.length;E+=3)u(t[E+0],A),u(t[E+1],M),u(t[E+2],y),l(A,M,y,v)}function l(v,A,M,y){let E=y+1,b=[];for(let x=0;x<=E;x++){b[x]=[];let S=v.clone().lerp(M,x/E),T=A.clone().lerp(M,x/E),P=E-x;for(let L=0;L<=P;L++)L===0&&x===E?b[x][L]=S:b[x][L]=S.clone().lerp(T,L/P)}for(let x=0;x<E;x++)for(let S=0;S<2*(E-x)-1;S++){let T=Math.floor(S/2);S%2===0?(f(b[x][T+1]),f(b[x+1][T]),f(b[x][T])):(f(b[x][T+1]),f(b[x+1][T+1]),f(b[x+1][T]))}}function c(v){let A=new I;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(v),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function h(){let v=new I;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let M=m(v)/2/Math.PI+.5,y=g(v)/Math.PI+.5;o.push(M,1-y)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){let A=o[v+0],M=o[v+2],y=o[v+4],E=Math.max(A,M,y),b=Math.min(A,M,y);E>.9&&b<.1&&(A<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),y<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,A){let M=v*3;A.x=e[M+0],A.y=e[M+1],A.z=e[M+2]}function p(){let v=new I,A=new I,M=new I,y=new I,E=new le,b=new le,x=new le;for(let S=0,T=0;S<r.length;S+=9,T+=6){v.set(r[S+0],r[S+1],r[S+2]),A.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),E.set(o[T+0],o[T+1]),b.set(o[T+2],o[T+3]),x.set(o[T+4],o[T+5]),y.copy(v).add(A).add(M).divideScalar(3);let P=m(y);_(E,T+0,v,P),_(b,T+2,A,P),_(x,T+4,M,P)}}function _(v,A,M,y){y<0&&v.x===1&&(o[A]=v.x-1),M.x===0&&M.z===0&&(o[A]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new it;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ct(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(ct(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pr=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ul=class extends Pr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $h(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ff=new I,df=new I,_h=new $h,yh=new $h,vh=new $h,zn=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(df.subVectors(s[0],s[1]).add(s[0]),c=df);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ff.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ff),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),_h.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,_,m),yh.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,_,m),vh.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),yh.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),vh.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(_h.calc(l),yh.calc(l),vh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function u0(i,e){let t=1-i;return t*t*e}function f0(i,e){return 2*(1-i)*i*e}function d0(i,e){return i*i*e}function po(i,e,t,n){return u0(i,e)+f0(i,t)+d0(i,n)}function p0(i,e){let t=1-i;return t*t*t*e}function m0(i,e){let t=1-i;return 3*t*t*i*e}function g0(i,e){return 3*(1-i)*i*i*e}function x0(i,e){return i*i*i*e}function mo(i,e,t,n,s){return p0(i,e)+m0(i,t)+g0(i,n)+x0(i,s)}var Po=class extends Yn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fl=class extends Yn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y),mo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Io=class extends Yn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vs=class extends Yn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends Yn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends Yn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y),po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(pf(a,l.x,c.x,h.x,d.x),pf(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},dl=Object.freeze({__proto__:null,ArcCurve:ul,CatmullRomCurve3:zn,CubicBezierCurve:Po,CubicBezierCurve3:fl,EllipseCurve:Pr,LineCurve:Io,LineCurve3:Vs,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:Do,SplineCurve:No}),Ir=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new dl[s.type]().fromJSON(s))}return this}},Uo=class extends Ir{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Io(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Lo(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Po(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Pr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Dt=class extends Uo{constructor(e){super(e),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Uo().fromJSON(s))}return this}};function _0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=cd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=E0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let f=t;f<s;f+=t){let u=i[f],p=i[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Fo(r,o,t,a,l,c,0),o}function cd(i,e,t,n,s){let r;if(s===N0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=mf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=mf(o/n|0,i[o],i[o+1],r);return r&&Lr(r,r.next)&&(Oo(r),r=r.next),r}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Lr(t,t.next)||Yt(t.prev,t,t.next)===0)){if(Oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&R0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?v0(i,n,s,r):y0(i)){e.push(l.i,i.i,c.i),Oo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=M0(Ws(i),e),Fo(i,e,t,n,s,r,2)):o===2&&S0(i,e,t,n,s,r):Fo(Ws(i),e,t,n,s,r,1);break}}}function y0(i){let e=i.prev,t=i,n=i.next;if(Yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&fo(s,a,r,l,o,c,p.x,p.y)&&Yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function v0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Yt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),_=Math.max(a,l,c),m=Math.max(h,d,f),g=Rh(u,p,e,t,n),v=Rh(_,m,e,t,n),A=i.prevZ,M=i.nextZ;for(;A&&A.z>=g&&M&&M.z<=v;){if(A.x>=u&&A.x<=_&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&fo(a,h,l,d,c,f,A.x,A.y)&&Yt(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=u&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&fo(a,h,l,d,c,f,M.x,M.y)&&Yt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=g;){if(A.x>=u&&A.x<=_&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&fo(a,h,l,d,c,f,A.x,A.y)&&Yt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=v;){if(M.x>=u&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&fo(a,h,l,d,c,f,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function M0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Lr(n,s)&&ud(n,t,t.next,s)&&Bo(n,s)&&Bo(s,n)&&(e.push(n.i,t.i,s.i),Oo(t),Oo(t.next),t=i=s),t=t.next}while(t!==i);return Ws(t)}function S0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&I0(o,a)){let l=fd(o,a);o=Ws(o,o.next),l=Ws(l,l.next),Fo(o,e,t,n,s,r,0),Fo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function E0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=cd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(P0(c))}s.sort(b0);for(let r=0;r<s.length;r++)t=T0(s[r],t);return t}function b0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function T0(i,e){let t=w0(i,e);if(!t)return e;let n=fd(t,i);return Ws(n,n.next),Ws(t,t.next)}function w0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Lr(i,t))return t;do{if(Lr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Bo(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&A0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function A0(i,e){return Yt(i.prev,i,e.prev)<0&&Yt(e.next,i,i.next)<0}function R0(i,e,t,n){let s=i;do s.z===0&&(s.z=Rh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,C0(s)}function C0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Rh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function P0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function fo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&hd(i,e,t,n,s,r,o,a)}function I0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!L0(i,e)&&(Bo(i,e)&&Bo(e,i)&&D0(i,e)&&(Yt(i.prev,i,e.prev)||Yt(i,e.prev,e))||Lr(i,e)&&Yt(i.prev,i,i.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Lr(i,e){return i.x===e.x&&i.y===e.y}function ud(i,e,t,n){let s=Xa(Yt(i,e,t)),r=Xa(Yt(i,e,n)),o=Xa(Yt(t,n,i)),a=Xa(Yt(t,n,e));return!!(s!==r&&o!==a||s===0&&Wa(i,t,e)||r===0&&Wa(i,n,e)||o===0&&Wa(t,i,n)||a===0&&Wa(t,e,n))}function Wa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Xa(i){return i>0?1:i<0?-1:0}function L0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ud(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bo(i,e){return Yt(i.prev,i,i.next)<0?Yt(i,e,i.next)>=0&&Yt(i,i.prev,e)>=0:Yt(i,e,i.prev)<0||Yt(i,i.next,e)<0}function D0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function fd(i,e){let t=Ch(i.i,i.x,i.y),n=Ch(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function mf(i,e,t,n){let s=Ch(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ch(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function N0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ph=class{static triangulate(e,t,n=2){return _0(e,t,n)}},Pi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];gf(e),xf(n,e);let o=e.length;t.forEach(gf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,xf(n,t[l]);let a=Ph.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function gf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ln=class i extends rt{constructor(e=new Dt([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new De(s,3)),this.setAttribute("uv",new De(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:U0,A,M=!1,y,E,b,x;if(g){A=g.getSpacedPoints(h),M=!0,f=!1;let V=g.isCatmullRomCurve3?g.closed:!1;y=g.computeFrenetFrames(h,V),E=new I,b=new I,x=new I}f||(m=0,u=0,p=0,_=0);let S=a.extractPoints(c),T=S.shape,P=S.holes;if(!Pi.isClockWise(T)){T=T.reverse();for(let V=0,Q=P.length;V<Q;V++){let te=P[V];Pi.isClockWise(te)&&(P[V]=te.reverse())}}function N(V){let te=10000000000000001e-36,q=V[0];for(let se=1;se<=V.length;se++){let ue=se%V.length,xe=V[ue],Se=xe.x-q.x,Ue=xe.y-q.y,k=Se*Se+Ue*Ue,ot=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(q.x),Math.abs(q.y)),tt=te*ot*ot;if(k<=tt){V.splice(ue,1),se--;continue}q=xe}}N(T),P.forEach(N);let R=P.length,D=T;for(let V=0;V<R;V++){let Q=P[V];T=T.concat(Q)}function z(V,Q,te){return Q||Ke("ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(Q,te)}let O=T.length;function H(V,Q,te){let q,se,ue,xe=V.x-Q.x,Se=V.y-Q.y,Ue=te.x-V.x,k=te.y-V.y,ot=xe*xe+Se*Se,tt=xe*k-Se*Ue;if(Math.abs(tt)>Number.EPSILON){let F=Math.sqrt(ot),w=Math.sqrt(Ue*Ue+k*k),Z=Q.x-Se/F,$=Q.y+xe/F,re=te.x-k/w,me=te.y+Ue/w,ve=((re-Z)*k-(me-$)*Ue)/(xe*k-Se*Ue);q=Z+xe*ve-V.x,se=$+Se*ve-V.y;let oe=q*q+se*se;if(oe<=2)return new le(q,se);ue=Math.sqrt(oe/2)}else{let F=!1;xe>Number.EPSILON?Ue>Number.EPSILON&&(F=!0):xe<-Number.EPSILON?Ue<-Number.EPSILON&&(F=!0):Math.sign(Se)===Math.sign(k)&&(F=!0),F?(q=-Se,se=xe,ue=Math.sqrt(ot)):(q=xe,se=Se,ue=Math.sqrt(ot/2))}return new le(q/ue,se/ue)}let B=[];for(let V=0,Q=D.length,te=Q-1,q=V+1;V<Q;V++,te++,q++)te===Q&&(te=0),q===Q&&(q=0),B[V]=H(D[V],D[te],D[q]);let G=[],U,J=B.concat();for(let V=0,Q=R;V<Q;V++){let te=P[V];U=[];for(let q=0,se=te.length,ue=se-1,xe=q+1;q<se;q++,ue++,xe++)ue===se&&(ue=0),xe===se&&(xe=0),U[q]=H(te[q],te[ue],te[xe]);G.push(U),J=J.concat(U)}let Y;if(m===0)Y=Pi.triangulateShape(D,P);else{let V=[],Q=[];for(let te=0;te<m;te++){let q=te/m,se=u*Math.cos(q*Math.PI/2),ue=p*Math.sin(q*Math.PI/2)+_;for(let xe=0,Se=D.length;xe<Se;xe++){let Ue=z(D[xe],B[xe],ue);pe(Ue.x,Ue.y,-se),q===0&&V.push(Ue)}for(let xe=0,Se=R;xe<Se;xe++){let Ue=P[xe];U=G[xe];let k=[];for(let ot=0,tt=Ue.length;ot<tt;ot++){let F=z(Ue[ot],U[ot],ue);pe(F.x,F.y,-se),q===0&&k.push(F)}q===0&&Q.push(k)}}Y=Pi.triangulateShape(V,Q)}let de=Y.length,ge=p+_;for(let V=0;V<O;V++){let Q=f?z(T[V],J[V],ge):T[V];M?(b.copy(y.normals[0]).multiplyScalar(Q.x),E.copy(y.binormals[0]).multiplyScalar(Q.y),x.copy(A[0]).add(b).add(E),pe(x.x,x.y,x.z)):pe(Q.x,Q.y,0)}for(let V=1;V<=h;V++)for(let Q=0;Q<O;Q++){let te=f?z(T[Q],J[Q],ge):T[Q];M?(b.copy(y.normals[V]).multiplyScalar(te.x),E.copy(y.binormals[V]).multiplyScalar(te.y),x.copy(A[V]).add(b).add(E),pe(x.x,x.y,x.z)):pe(te.x,te.y,d/h*V)}for(let V=m-1;V>=0;V--){let Q=V/m,te=u*Math.cos(Q*Math.PI/2),q=p*Math.sin(Q*Math.PI/2)+_;for(let se=0,ue=D.length;se<ue;se++){let xe=z(D[se],B[se],q);pe(xe.x,xe.y,d+te)}for(let se=0,ue=P.length;se<ue;se++){let xe=P[se];U=G[se];for(let Se=0,Ue=xe.length;Se<Ue;Se++){let k=z(xe[Se],U[Se],q);M?pe(k.x,k.y+A[h-1].y,A[h-1].x+te):pe(k.x,k.y,d+te)}}}Le(),K();function Le(){let V=s.length/3;if(f){let Q=0,te=O*Q;for(let q=0;q<de;q++){let se=Y[q];Fe(se[2]+te,se[1]+te,se[0]+te)}Q=h+m*2,te=O*Q;for(let q=0;q<de;q++){let se=Y[q];Fe(se[0]+te,se[1]+te,se[2]+te)}}else{for(let Q=0;Q<de;Q++){let te=Y[Q];Fe(te[2],te[1],te[0])}for(let Q=0;Q<de;Q++){let te=Y[Q];Fe(te[0]+O*h,te[1]+O*h,te[2]+O*h)}}n.addGroup(V,s.length/3-V,0)}function K(){let V=s.length/3,Q=0;ie(D,Q),Q+=D.length;for(let te=0,q=P.length;te<q;te++){let se=P[te];ie(se,Q),Q+=se.length}n.addGroup(V,s.length/3-V,1)}function ie(V,Q){let te=V.length;for(;--te>=0;){let q=te,se=te-1;se<0&&(se=V.length-1);for(let ue=0,xe=h+m*2;ue<xe;ue++){let Se=O*ue,Ue=O*(ue+1),k=Q+q+Se,ot=Q+se+Se,tt=Q+se+Ue,F=Q+q+Ue;Ee(k,ot,tt,F)}}}function pe(V,Q,te){l.push(V),l.push(Q),l.push(te)}function Fe(V,Q,te){Ge(V),Ge(Q),Ge(te);let q=s.length/3,se=v.generateTopUV(n,s,q-3,q-2,q-1);et(se[0]),et(se[1]),et(se[2])}function Ee(V,Q,te,q){Ge(V),Ge(Q),Ge(q),Ge(Q),Ge(te),Ge(q);let se=s.length/3,ue=v.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);et(ue[0]),et(ue[1]),et(ue[3]),et(ue[1]),et(ue[2]),et(ue[3])}function Ge(V){s.push(l[V*3+0]),s.push(l[V*3+1]),s.push(l[V*3+2])}function et(V){r.push(V.x),r.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return F0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dl[s.type]().fromJSON(s)),new i(n,e.options)}},U0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],u=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-d),new le(f,1-p),new le(_,1-g)]:[new le(a,1-l),new le(h,1-d),new le(u,1-p),new le(m,1-g)]}};function F0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kn=class i extends hl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Xs=class i extends rt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ct(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new I,f=new le,u=new I,p=new I,_=new I,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,u.x=g*1,u.y=-m,u.z=g*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(p)}for(let v=0;v<=t;v++){let A=n+v*h*s,M=Math.sin(A),y=Math.cos(A);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*M,d.y=e[E].y,d.z=e[E].x*y,o.push(d.x,d.y,d.z),f.x=v/t,f.y=E/(e.length-1),a.push(f.x,f.y);let b=l[3*E+0]*M,x=l[3*E+1],S=l[3*E+0]*y;c.push(b,x,S)}}for(let v=0;v<t;v++)for(let A=0;A<e.length-1;A++){let M=A+v*e.length,y=M,E=M+e.length,b=M+e.length+1,x=M+1;r.push(y,E,x),r.push(b,x,E)}this.setIndex(r),this.setAttribute("position",new De(o,3)),this.setAttribute("uv",new De(a,2)),this.setAttribute("normal",new De(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var gt=class i extends rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,u=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*f-o;for(let A=0;A<c;A++){let M=A*d-r;p.push(M,-v,0),_.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let A=v+c*g,M=v+c*(g+1),y=v+1+c*(g+1),E=v+1+c*g;u.push(A,M,E),u.push(M,y,E)}this.setIndex(u),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var $i=class i extends rt{constructor(e=new Dt([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(r,3)),this.setAttribute("uv",new De(o,2));function c(h){let d=s.length/3,f=h.extractPoints(t),u=f.shape,p=f.holes;Pi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];Pi.isClockWise(v)===!0&&(p[m]=v.reverse())}let _=Pi.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];u=u.concat(v)}for(let m=0,g=u.length;m<g;m++){let v=u[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){let v=_[m],A=v[0]+d,M=v[1]+d,y=v[2]+d;n.push(A,M,y),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return B0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function B0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var je=class i extends rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,f=new I,u=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let v=[],A=g/n,M=o+A*a,y=e*Math.cos(M),E=Math.sqrt(e*e-y*y),b=0;g===0&&o===0?b=.5/t:g===n&&l===Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){let S=x/t,T=s+S*r;d.x=-E*Math.cos(T),d.y=y,d.z=E*Math.sin(T),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(S+b,1-A),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let A=h[g][v+1],M=h[g][v],y=h[g+1][v],E=h[g+1][v+1];(g!==0||o>0)&&u.push(A,M,E),(g!==n-1||l<Math.PI)&&u.push(M,y,E)}this.setIndex(u),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rn=class i extends rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],f=new I,u=new I,p=new I;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=s;g++){let v=g/s*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,A=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(g,v,M),l.push(v,A,M)}this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ki=class i extends rt{constructor(e=new Do(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new le,h=new I,d=[],f=[],u=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(u,2));function _(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),v(),g()}function m(A){h=e.getPointAt(A/t,h);let M=o.normals[A],y=o.binormals[A];for(let E=0;E<=s;E++){let b=E/s*Math.PI*2,x=Math.sin(b),S=-Math.cos(b);l.x=S*M.x+x*y.x,l.y=S*M.y+x*y.y,l.z=S*M.z+x*y.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let A=1;A<=t;A++)for(let M=1;M<=s;M++){let y=(s+1)*(A-1)+(M-1),E=(s+1)*A+(M-1),b=(s+1)*A+M,x=(s+1)*(A-1)+M;p.push(y,E,x),p.push(E,b,x)}}function v(){for(let A=0;A<=t;A++)for(let M=0;M<=s;M++)c.x=A/t,c.y=M/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new dl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(_f(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(_f(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Nn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function _f(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function O0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Si={clone:$s,merge:Nn},H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dr=class extends ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Je=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends Je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ho=class extends _i{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Cl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pl=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ml=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gl=class extends xs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=e,a=2*t-n;break;case wh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=e,l=2*n-t;break;case wh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,A=(-1-u)*m+(1.5+u)*_+.5*p,M=u*m-u*_;for(let y=0;y!==a;++y)r[y]=g*o[h+y]+v*o[c+y]+A*o[l+y]+M*o[d+y];return r}},xl=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},_l=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yl=class extends xs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let f=a*2,u=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=u*f+p*2,v=d[g],A=d[g+1],M=e*f+p*2,y=h[M],E=h[M+1],b=G0(n,t,v,y,s);r[p]=dd(b,_,A,E,m)}return r}};function dd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function k0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function G0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=dd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=k0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Mh(e.settings)&&(n.settings={inTangents:yr(e.settings.inTangents,Array),outTangents:yr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case sl:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break;case Eh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Mh(this.settings)&&(yf(this.settings.inTangents,e),yf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Wp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Za,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[f+p]||_!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Mh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=sl;var _s=class extends Zn{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=go;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};vl.prototype.ValueTypeName="color";var Ml=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};Ml.prototype.ValueTypeName="number";var Sl=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Gt.slerpFlat(r,0,o,c-a,o,c,l);return r}},zo=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Zn{constructor(e,t,n){super(e,t,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=go;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};El.prototype.ValueTypeName="vector";var bl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pd=new bl,Tl=class{constructor(e){this.manager=e!==void 0?e:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qi=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Sh=new it,vf=new I,Mf=new I,Nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(vf),Mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Sh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Sh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qa=new I,Ya=new Gt,Ai=new I,ko=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qa,Ya,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qa,Ya,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new I,Sf=new le,Ef=new le,zt=class extends ko{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,Sf,Ef),t.subVectors(Ef,Sf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($c*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ih=class extends Nr{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Mo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Go=class extends qs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ih}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Lh=class extends Nr{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},ji=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vs=class extends ko{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=class extends Nr{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vr=-90,Mr=1,wl=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(vr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new zt(vr,Mr,e,t);r.layers=this.layers,this.add(r);let o=new zt(vr,Mr,e,t);o.layers=this.layers,this.add(o);let a=new zt(vr,Mr,e,t);a.layers=this.layers,this.add(a);let l=new zt(vr,Mr,e,t);l.layers=this.layers,this.add(l);let c=new zt(vr,Mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Al=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=V0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function V0(){this._document.hidden===!1&&this.reset()}var Qh="\\[\\]\\.:\\/",W0=new RegExp("["+Qh+"]","g"),jh="[^"+Qh+"]",X0="[^"+Qh.replace("\\.","")+"]",q0=/((?:WC+[\/:])*)/.source.replace("WC",jh),Y0=/(WCOD+)?/.source.replace("WCOD",X0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),J0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),$0=new RegExp("^"+q0+Y0+Z0+J0+"$"),K0=["material","materials","bones","map"],Nh=class{constructor(e,t,n){let s=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W0,"")}static parseTrackName(e){let t=$0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);K0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=Nh;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vv=new Float32Array(1);var ru=class ru{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ru.prototype.isMatrix2=!0;var Uh=ru;function eu(i,e,t,n){let s=Q0(n);switch(t){case qh:return i*e;case Hr:return i*e/s.components*s.byteLength;case Fl:return i*e/s.components*s.byteLength;case Es:return i*e*2/s.components*s.byteLength;case Bl:return i*e*2/s.components*s.byteLength;case Yh:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case Ol:return i*e*4/s.components*s.byteLength;case Qo:case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case kl:return Math.max(i,8)*Math.max(e,8)/2;case Vl:case Wl:case ql:case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xl:case na:case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cc:case hc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ia:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q0(i){switch(i){case Dn:case Gh:return{byteLength:1,components:1};case Br:case Vh:case dn:return{byteLength:2,components:1};case Nl:case Ul:return{byteLength:2,components:4};case Mi:case Dl:case ri:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Fd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function im(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ng=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ig=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:om,alphamap_pars_fragment:am,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:fm,batching_vertex:dm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:xm,bumpmap_pars_fragment:_m,clipping_planes_fragment:ym,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:Em,color_pars_fragment:bm,color_pars_vertex:Tm,color_vertex:wm,common:Am,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Im,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Nm,colorspace_pars_fragment:Um,envmap_fragment:Fm,envmap_common_pars_fragment:Bm,envmap_pars_fragment:Om,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:$m,envmap_vertex:zm,fog_vertex:km,fog_pars_vertex:Gm,fog_fragment:Vm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:qm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:Zm,lights_pars_begin:Jm,lights_toon_fragment:Km,lights_toon_pars_fragment:Qm,lights_phong_fragment:jm,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,lightprobes_pars_fragment:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:fg,map_particle_fragment:dg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:_g,morphnormal_vertex:yg,morphtarget_pars_vertex:vg,morphtarget_vertex:Mg,normal_fragment_begin:Sg,normal_fragment_maps:Eg,normal_pars_fragment:bg,normal_pars_vertex:Tg,normal_vertex:wg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ng,project_vertex:Ug,dithering_fragment:Fg,dithering_pars_fragment:Bg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:kg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:Yg,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:$g,tonemapping_pars_fragment:Kg,transmission_fragment:Qg,transmission_pars_fragment:jg,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:hx,depth_frag:ux,distance_vert:fx,distance_frag:dx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:xx,meshbasic_vert:_x,meshbasic_frag:yx,meshlambert_vert:vx,meshlambert_frag:Mx,meshmatcap_vert:Sx,meshmatcap_frag:Ex,meshnormal_vert:bx,meshnormal_frag:Tx,meshphong_vert:wx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Ix,points_vert:Lx,points_frag:Dx,shadow_vert:Nx,shadow_frag:Ux,sprite_vert:Fx,sprite_frag:Bx},Ae={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Fi={basic:{uniforms:Nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Nn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Nn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ae(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Nn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Nn([Ae.points,Ae.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Nn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Nn([Ae.common,Ae.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Nn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Nn([Ae.sprite,Ae.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Nn([Ae.common,Ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Nn([Ae.lights,Ae.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Fi.physical={uniforms:Nn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var xc={r:0,b:0,g:0},Ox=new it,Bd=new st;Bd.set(-1,0,0,0,1,0,0,0,1);function Hx(i,e,t,n,s,r){let o=new ae(0),a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let M=v.backgroundBlurriness>0;A=e.get(A,M)}return A}function p(v){let A=!1,M=u(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),A=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,A){let M=u(A);M&&(M.isCubeTexture||M.mapping===$o)?(c===void 0&&(c=new Te(new Wt(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:$s(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bd),c.material.toneMapped=ft.getTransfer(M.colorSpace)!==St,(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Te(new gt(2,2),new ht({name:"BackgroundMaterial",uniforms:$s(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ft.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,A){v.getRGB(xc,Kh(i)),t.buffers.color.setClear(xc.r,xc.g,xc.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,A=1){o.set(v),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function zx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,L,N,R,D){let z=!1,O=d(P,R,N,L);r!==O&&(r=O,c(r.object)),z=u(P,R,N,D),z&&p(P,R,N,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(P,L,N,R),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,L,N,R){let D=R.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let O=P.isInstancedMesh===!0?P.id:0,H=z[O];H===void 0&&(H={},z[O]=H);let B=H[N.id];B===void 0&&(B={},H[N.id]=B);let G=B[D];return G===void 0&&(G=f(l()),B[D]=G),G}function f(P){let L=[],N=[],R=[];for(let D=0;D<t;D++)L[D]=0,N[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:R,object:P,attributes:{},index:null}}function u(P,L,N,R){let D=r.attributes,z=L.attributes,O=0,H=N.getAttributes();for(let B in H)if(H[B].location>=0){let U=D[B],J=z[B];if(J===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function p(P,L,N,R){let D={},z=L.attributes,O=0,H=N.getAttributes();for(let B in H)if(H[B].location>=0){let U=z[B];U===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(U=P.instanceColor));let J={};J.attribute=U,U&&U.data&&(J.data=U.data),D[B]=J,O++}r.attributes=D,r.attributesNum=O,r.index=R}function _(){let P=r.newAttributes;for(let L=0,N=P.length;L<N;L++)P[L]=0}function m(P){g(P,0)}function g(P,L){let N=r.newAttributes,R=r.enabledAttributes,D=r.attributeDivisors;N[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),D[P]!==L&&(i.vertexAttribDivisor(P,L),D[P]=L)}function v(){let P=r.newAttributes,L=r.enabledAttributes;for(let N=0,R=L.length;N<R;N++)L[N]!==P[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function A(P,L,N,R,D,z,O){O===!0?i.vertexAttribIPointer(P,L,N,D,z):i.vertexAttribPointer(P,L,N,R,D,z)}function M(P,L,N,R){_();let D=R.attributes,z=N.getAttributes(),O=L.defaultAttributeValues;for(let H in z){let B=z[H];if(B.location>=0){let G=D[H];if(G===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let U=G.normalized,J=G.itemSize,Y=e.get(G);if(Y===void 0)continue;let de=Y.buffer,ge=Y.type,Le=Y.bytesPerElement,K=ge===i.INT||ge===i.UNSIGNED_INT||G.gpuType===Dl;if(G.isInterleavedBufferAttribute){let ie=G.data,pe=ie.stride,Fe=G.offset;if(ie.isInstancedInterleavedBuffer){for(let Ee=0;Ee<B.locationSize;Ee++)g(B.location+Ee,ie.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)m(B.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Ee=0;Ee<B.locationSize;Ee++)A(B.location+Ee,J/B.locationSize,ge,U,pe*Le,(Fe+J/B.locationSize*Ee)*Le,K)}else{if(G.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)g(B.location+ie,G.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ie=0;ie<B.locationSize;ie++)m(B.location+ie);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ie=0;ie<B.locationSize;ie++)A(B.location+ie,J/B.locationSize,ge,U,J*Le,J/B.locationSize*ie*Le,K)}}else if(O!==void 0){let U=O[H];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(B.location,U);break;case 3:i.vertexAttrib3fv(B.location,U);break;case 4:i.vertexAttrib4fv(B.location,U);break;default:i.vertexAttrib1fv(B.location,U)}}}}v()}function y(){S();for(let P in n){let L=n[P];for(let N in L){let R=L[N];for(let D in R){let z=R[D];for(let O in z)h(z[O].object),delete z[O];delete R[D]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let N in L){let R=L[N];for(let D in R){let z=R[D];for(let O in z)h(z[O].object),delete z[O];delete R[D]}}delete n[P.id]}function b(P){for(let L in n){let N=n[L];for(let R in N){let D=N[R];if(D[P.id]===void 0)continue;let z=D[P.id];for(let O in z)h(z[O].object),delete z[O];delete D[P.id]}}}function x(P){for(let L in n){let N=n[L],R=P.isInstancedMesh===!0?P.id:0,D=N[R];if(D!==void 0){for(let z in D){let O=D[z];for(let H in O)h(O[H].object),delete O[H];delete D[z]}delete N[R],Object.keys(N).length===0&&delete n[L]}}}function S(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:T,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function kx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Gx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Vn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let x=b===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Dn&&b!==ri&&!x&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:M,maxSamples:y,samples:E}}function Vx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new mi,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,A=v*4,M=g.clippingState||null;l.value=M,M=h(p,f,A,u);for(let y=0;y!==A;++y)M[y]=t[y];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,M=u;A!==_;++A,M+=4)o.copy(d[A]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var kr=4,Wx=6,Xx=20,qx=256,ra=new vs,md=new ae,ou=null,au=0,lu=0,cu=!1,Yx=new I,Ks=new I,bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Yx}=r;ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,lu),this._renderer.xr.enabled=cu,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:dn,format:Vn,colorSpace:xo,depthBuffer:!1},s=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zx(r)),this._blurMaterial=$x(r,e,t),this._ggxMaterial=Jx(r,e,t)}return s}_compileMaterial(e){let t=new Te(new rt,e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,s,r){let l=new zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(md),d.toneMapping=vi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new Wt,new Mt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(md),g=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let y=this._cubeSize;zr(s,M*y,A>2?y:0,y,y),d.setRenderTarget(s),g&&d.render(_,l),d.render(e,l)}d.toneMapping=u,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ms||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;zr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ra)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,u=d*f,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-kr?n-p+kr:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,zr(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,ra),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,zr(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(a,ra)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-kr?s-this._lodMax+kr:0),f=4*(this._cubeSize-h);zr(t,d,f,3*h,2*h),o.setRenderTarget(t),o.render(l,ra)}};function Zx(i){let e=[],t=[],n=i,s=i-kr+1+Wx;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,u=3,p=new Float32Array(u*f*d),_=new Float32Array(u*f*d);for(let g=0;g<d;g++){let v=g%3*2/3-1,A=g>2?0:-1,M=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];p.set(M,u*f*g);for(let y=0;y<f;y++){let E=h[y*2]*2-1,b=h[y*2+1]*2-1;g===0?Ks.set(1,b,E):g===1?Ks.set(-E,1,-b):g===2?Ks.set(-E,b,1):g===3?Ks.set(-1,b,-E):g===4?Ks.set(-E,-1,b):Ks.set(E,b,-1),Ks.toArray(_,(g*f+y)*u)}}let m=new rt;m.setAttribute("position",new yt(p,u)),m.setAttribute("outputDirection",new yt(_,u)),t.push(new Te(m,null)),n>kr&&n--}return{lodMeshes:t,sizeLods:e}}function gd(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jx(i,e,t){return new ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function $x(i,e,t){return new ht({name:"SphericalGaussianBlur",defines:{SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function xd(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function _d(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yc=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ro(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wt(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:si});r.uniforms.tEquirect.value=t;let o=new Te(s,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=nn),new wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Kx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Pl||u===Il)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new yc(p.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,p=u===Pl||u===Il,_=u===Ms||u===Js;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new bs(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new bs(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Pl?f.mapping=Ms:u===Il&&(f.mapping=Js),f}function l(f){let u=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Qx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ks("WebGLRenderer: "+n+" extension not supported."),s}}}function jx(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let u in f)e.update(f[u],i.ARRAY_BUFFER)}function c(d){let f=[],u=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(u!==null){let v=u.array;_=u.version;for(let A=0,M=v.length;A<M;A+=3){let y=v[A+0],E=v[A+1],b=v[A+2];f.push(y,E,E,b,b,y)}}else{let v=p.array;_=p.version;for(let A=0,M=v.length/3-1;A<M;A+=3){let y=A+0,E=A+1,b=A+2;f.push(y,E,E,b,b,y)}}let m=new(p.count>=65535?To:bo)(f,1);m.version=_;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function e_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*o,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function t_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function n_(i,e,t){let n=new WeakMap,s=new Vt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;u===!0&&(A=1),p===!0&&(A=2),_===!0&&(A=3);let M=a.attributes.position.count*A,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*y*4*d),b=new So(E,M,y,d);b.type=ri,b.needsUpdate=!0;let x=A*4;for(let T=0;T<d;T++){let P=m[T],L=g[T],N=v[T],R=M*y*4*T;for(let D=0;D<P.count;D++){let z=D*x;u===!0&&(s.fromBufferAttribute(P,D),E[R+z+0]=s.x,E[R+z+1]=s.y,E[R+z+2]=s.z,E[R+z+3]=0),p===!0&&(s.fromBufferAttribute(L,D),E[R+z+4]=s.x,E[R+z+5]=s.y,E[R+z+6]=s.z,E[R+z+7]=0),_===!0&&(s.fromBufferAttribute(N,D),E[R+z+8]=s.x,E[R+z+9]=s.y,E[R+z+10]=s.z,E[R+z+11]=N.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new le(M,y)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function i_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var s_={[Wo]:"LINEAR_TONE_MAPPING",[Xo]:"REINHARD_TONE_MAPPING",[qo]:"CINEON_TONE_MAPPING",[Gn]:"ACES_FILMIC_TONE_MAPPING",[Zo]:"AGX_TONE_MAPPING",[Jo]:"NEUTRAL_TONE_MAPPING",[Yo]:"CUSTOM_TONE_MAPPING"};function r_(i,e,t,n,s,r){let o=new Qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new rt;c.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new De([0,2,0,0,2,0],2));let h=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Te(c,h),f=new vs(-1,1,1,-1,0,1),u=null,p=null,_=!1,m,g=null,v=[],A=!1;this.setSize=function(M,y){o.setSize(M,y),a!==null&&a.setSize(M,y),l!==null&&l.setSize(M,y);for(let E=0;E<v.length;E++){let b=v[E];b.setSize&&b.setSize(M,y)}},this.setEffects=function(M){v=M,A=v.length>0&&v[0].isRenderPass===!0;let y=o.width,E=o.height;v.length>0&&a===null&&(a=new Qt(y,E,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new Qt(y,E,{type:dn,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<v.length;b++){let x=v[b];x.setSize&&x.setSize(y,E)}},this.begin=function(M,y){if(_||M.toneMapping===vi&&v.length===0)return!1;if(g=y,y!==null){let E=y.width,b=y.height;(o.width!==E||o.height!==b)&&this.setSize(E,b)}return A===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=vi,!0},this.hasRenderPass=function(){return A},this.end=function(M,y){M.toneMapping=m,_=!0;let E=o,b=a;for(let x=0;x<v.length;x++){let S=v[x];S.enabled!==!1&&(S.render(M,b,E,y),S.needsSwap!==!1&&(E=b,b=b===a?l:a))}if(u!==M.outputColorSpace||p!==M.toneMapping){u=M.outputColorSpace,p=M.toneMapping,h.defines={},ft.getTransfer(u)===St&&(h.defines.SRGB_TRANSFER="");let x=s_[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(g),M.render(d,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Od=new On,fu=new gs(1,1),Hd=new So,zd=new al,kd=new Ro,yd=[],vd=[],Md=new Float32Array(16),Sd=new Float32Array(9),Ed=new Float32Array(4);function Wr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mc(i,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function h_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Ed.set(n),i.uniformMatrix2fv(this.addr,!1,Ed),mn(t,n)}}function u_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),mn(t,n)}}function f_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),mn(t,n)}}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function x_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function M_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=t.isReversedDepthBuffer()?gc:mc,r=fu):r=Od,t.setTexture2D(e||r,s)}function S_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zd,s)}function E_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kd,s)}function b_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hd,s)}function T_(i){switch(i){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return f_;case 5124:case 35670:return d_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return __;case 36295:return y_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return b_}}function w_(i,e){i.uniform1fv(this.addr,e)}function A_(i,e){let t=Wr(e,this.size,2);i.uniform2fv(this.addr,t)}function R_(i,e){let t=Wr(e,this.size,3);i.uniform3fv(this.addr,t)}function C_(i,e){let t=Wr(e,this.size,4);i.uniform4fv(this.addr,t)}function P_(i,e){let t=Wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function I_(i,e){let t=Wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function L_(i,e){let t=Wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function D_(i,e){i.uniform1iv(this.addr,e)}function N_(i,e){i.uniform2iv(this.addr,e)}function U_(i,e){i.uniform3iv(this.addr,e)}function F_(i,e){i.uniform4iv(this.addr,e)}function B_(i,e){i.uniform1uiv(this.addr,e)}function O_(i,e){i.uniform2uiv(this.addr,e)}function H_(i,e){i.uniform3uiv(this.addr,e)}function z_(i,e){i.uniform4uiv(this.addr,e)}function k_(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=fu:o=Od;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function G_(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zd,r[o])}function V_(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kd,r[o])}function W_(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function X_(i){switch(i){case 5126:return w_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return P_;case 35675:return I_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return N_;case 35668:case 35672:return U_;case 35669:case 35673:return F_;case 5125:return B_;case 36294:return O_;case 36295:return H_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}var du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=T_(t.type)}},pu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}},mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function q_(i,e,t){let n=i.name,s=n.length;for(hu.lastIndex=0;;){let r=hu.exec(n),o=hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bd(t,c===void 0?new du(a,i,e):new pu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new mu(a),bd(t,d)),t=d}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);q_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Td(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Y_=37297,Z_=0;function J_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wd=new st;function $_(i){ft._getMatrix(wd,ft.workingColorSpace,i);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case _o:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ad(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+J_(i.getShaderSource(e),a)}else return r}function K_(i,e){let t=$_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Q_={[Wo]:"Linear",[Xo]:"Reinhard",[qo]:"Cineon",[Gn]:"ACESFilmic",[Zo]:"AgX",[Jo]:"Neutral",[Yo]:"Custom"};function j_(i,e){let t=Q_[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _c=new I;function ey(){ft.getLuminanceCoefficients(_c);let i=_c.x.toFixed(4),e=_c.y.toFixed(4),t=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function ny(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function aa(i){return i!==""}function Rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(i){return i.replace(sy,oy)}var ry=new Map;function oy(i,e){let t=lt[e];if(t===void 0){let n=ry.get(e);if(n!==void 0)t=lt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gu(t)}var ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(i){return i.replace(ay,ly)}function ly(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Id(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var cy={[Ys]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function hy(i){return cy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uy={[Ms]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function fy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":uy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var dy={[Js]:"ENVMAP_MODE_REFRACTION"};function py(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var my={[Cl]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function gy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":my[i.combine]||"ENVMAP_BLENDING_NONE"}function xy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _y(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=hy(t),c=fy(t),h=py(t),d=gy(t),f=xy(t),u=ty(t),p=ny(r),_=s.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),g.length>0&&(g+=`
`)):(m=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),g=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?lt.tonemapping_pars_fragment:"",t.toneMapping!==vi?j_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,K_("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=gu(o),o=Rd(o,t),o=Cd(o,t),a=gu(a),a=Rd(a,t),a=Cd(a,t),o=Pd(o),a=Pd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=v+m+o,M=v+g+a,y=Td(s,s.VERTEX_SHADER,A),E=Td(s,s.FRAGMENT_SHADER,M);s.attachShader(_,y),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(y)||"",R=s.getShaderInfoLog(E)||"",D=L.trim(),z=N.trim(),O=R.trim(),H=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,E);else{let G=Ad(s,y,"vertex"),U=Ad(s,E,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+G+`
`+U)}else D!==""?Qe("WebGLProgram: Program Info Log:",D):(z===""||O==="")&&(B=!1);B&&(P.diagnostics={runnable:H,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:g}})}s.deleteShader(y),s.deleteShader(E),x=new Gr(s,_),S=iy(s,_)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,Y_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=E,this}var yy=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _u(e),t.set(e,n)),n}},_u=class{constructor(e){this.id=yy++,this.code=e,this.usedTimes=0}};function vy(i){return i===Es||i===na||i===ia}function My(i,e,t,n,s,r){let o=new Eo,a=new xu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,T,P,L,N){let R=P.fog,D=L.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||z,O),B=H&&H.mapping===$o?H.image.height:null,G=u[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Qe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let U=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=U!==void 0?U.length:0,Y=0;D.morphAttributes.position!==void 0&&(Y=1),D.morphAttributes.normal!==void 0&&(Y=2),D.morphAttributes.color!==void 0&&(Y=3);let de,ge,Le,K;if(G){let wt=Fi[G];de=wt.vertexShader,ge=wt.fragmentShader}else{de=x.vertexShader,ge=x.fragmentShader;let wt=a.getVertexShaderStage(x),_t=a.getFragmentShaderStage(x);a.update(x,wt,_t),Le=wt.id,K=_t.id}let ie=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,Ge=!!x.map,et=!!x.matcap,V=!!H,Q=!!x.aoMap,te=!!x.lightMap,q=!!x.bumpMap&&x.wireframe===!1,se=!!x.normalMap,ue=!!x.displacementMap,xe=!!x.emissiveMap,Se=!!x.metalnessMap,Ue=!!x.roughnessMap,k=x.anisotropy>0,ot=x.clearcoat>0,tt=x.dispersion>0,F=x.retroreflectivity>0,w=x.iridescence>0,Z=x.sheen>0,$=x.transmission>0,re=k&&!!x.anisotropyMap,me=ot&&!!x.clearcoatMap,ve=ot&&!!x.clearcoatNormalMap,oe=ot&&!!x.clearcoatRoughnessMap,ce=w&&!!x.iridescenceMap,ye=w&&!!x.iridescenceThicknessMap,Re=Z&&!!x.sheenColorMap,we=Z&&!!x.sheenRoughnessMap,_e=!!x.specularMap,Ve=!!x.specularColorMap,Ze=!!x.specularIntensityMap,nt=$&&!!x.transmissionMap,W=$&&!!x.thicknessMap,be=!!x.gradientMap,he=!!x.alphaMap,Me=x.alphaTest>0,Ce=!!x.alphaHash,fe=!!x.extensions,We=vi;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(We=i.toneMapping);let He={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:de,fragmentShader:ge,defines:x.defines,customVertexShaderID:Le,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:et,envMap:V,envMapMode:V&&H.mapping,envMapCubeUVHeight:B,aoMap:Q,lightMap:te,bumpMap:q,normalMap:se,displacementMap:ue,emissiveMap:xe,normalMapObjectSpace:se&&x.normalMapType===Jf,normalMapTangentSpace:se&&x.normalMapType===sa,packedNormalMap:se&&x.normalMapType===sa&&vy(x.normalMap.format),metalnessMap:Se,roughnessMap:Ue,anisotropy:k,anisotropyMap:re,clearcoat:ot,clearcoatMap:me,clearcoatNormalMap:ve,clearcoatRoughnessMap:oe,dispersion:tt,retroreflection:F,iridescence:w,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:Z,sheenColorMap:Re,sheenRoughnessMap:we,specularMap:_e,specularColorMap:Ve,specularIntensityMap:Ze,transmission:$,transmissionMap:nt,thicknessMap:W,gradientMap:be,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:Me,alphaHash:Ce,combine:x.combine,mapUv:Ge&&p(x.map.channel),aoMapUv:Q&&p(x.aoMap.channel),lightMapUv:te&&p(x.lightMap.channel),bumpMapUv:q&&p(x.bumpMap.channel),normalMapUv:se&&p(x.normalMap.channel),displacementMapUv:ue&&p(x.displacementMap.channel),emissiveMapUv:xe&&p(x.emissiveMap.channel),metalnessMapUv:Se&&p(x.metalnessMap.channel),roughnessMapUv:Ue&&p(x.roughnessMap.channel),anisotropyMapUv:re&&p(x.anisotropyMap.channel),clearcoatMapUv:me&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(x.sheenRoughnessMap.channel),specularMapUv:_e&&p(x.specularMap.channel),specularColorMapUv:Ve&&p(x.specularColorMap.channel),specularIntensityMapUv:Ze&&p(x.specularIntensityMap.channel),transmissionMapUv:nt&&p(x.transmissionMap.channel),thicknessMapUv:W&&p(x.thicknessMap.channel),alphaMapUv:he&&p(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(se||k),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Ge||he),fog:!!R,useFog:x.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Y,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:xe&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xt,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function m(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let T in x.defines)S.push(T),S.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(g(S,x),v(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let S=u[x.type],T;if(S){let P=Fi[S];T=Si.clone(P.uniforms)}else T=x.uniforms;return T}function M(x,S){let T=h.get(S);return T!==void 0?++T.usedTimes:(T=new _y(i,S,x,s),c.push(T),h.set(S,T)),T}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function b(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:b}}function Sy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ey(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ld(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,_,m,g){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},i[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,u,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let A=a(f,u,p,_,m,g);p.transmission>0?n.push(A):p.transparent===!0?s.push(A):t.push(A)}function c(f,u,p,_,m,g){let v=a(f,u,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||Ey),n.length>1&&n.sort(u||Ld),s.length>1&&s.sort(u||Ld)}function d(){for(let f=e,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function by(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Dd,i.set(n,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ty(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new ae};break;case"SpotLight":t={position:new I,direction:new I,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function wy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ay=0;function Ry(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cy(i){let e=new Ty,t=wy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new it,o=new it;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let u=0,p=0,_=0,m=0,g=0,v=0,A=0,M=0,y=0,E=0,b=0,x=0,S=0,T=0;c.sort(Ry);for(let L=0,N=c.length;L<N;L++){let R=c[L],D=R.color,z=R.intensity,O=R.distance,H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Es?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=D.r*z,d+=D.g*z,f+=D.b*z;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],z);T++}else if(R.isSunLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let G=R.shadow,U=t.get(R);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[p]=U,n.sunShadowMap[p]=H;let J=G.getViewportCount();for(let Y=0;Y<J;Y++)n.sunShadowMatrix[_+Y]=G.getMatrix(Y),n.sunShadowCascade[_+Y]=G._cascadeData[Y];_+=J,p++}n.sun[u]=B,u++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let G=R.shadow,U=t.get(R);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=B,m++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(D).multiplyScalar(z),B.distance=O,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[v]=B;let G=R.shadow;if(R.map&&(n.spotLightMap[x]=R.map,x++,G.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[v]=G.matrix,R.castShadow){let U=t.get(R);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=H,b++}v++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(D).multiplyScalar(z),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[A]=B,A++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let G=R.shadow,U=t.get(R);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,U.shadowCameraNear=G.camera.near,U.shadowCameraFar=G.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=B,g++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(z),B.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[M]=B,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.sunLength!==u||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==A||P.hemiLength!==M||P.numSunShadows!==p||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==b||P.numSpotMaps!==x||P.numLightProbes!==T)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=A,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.sunLength=u,P.directionalLength=m,P.pointLength=g,P.spotLength=v,P.rectAreaLength=A,P.hemiLength=M,P.numSunShadows=p,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=b,P.numSpotMaps=x,P.numLightProbes=T,n.version=Ay++)}function l(c,h){let d=0,f=0,u=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let M=c[v];if(M.isSunLight){let y=n.sun[d];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),d++}else if(M.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(M.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Nd(i){let e=new Cy(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Py(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Nd(i),e.set(s,[a])):r>=o.length?(a=new Nd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ny=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Ud=new it,oa=new I,uu=new I;function Uy(i,e,t){let n=new ms,s=new le,r=new le,o=new Vt,a=new pl,l=new ml,c={},h=t.maxTextureSize,d={[es]:$t,[$t]:es,[xt]:xt},f=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Iy,fragmentShader:Ly}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new rt;p.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Te(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let g=this.type;this.render=function(E,b,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===wf&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let S=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(si),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=g!==this.type;N&&b.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(D=>D.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,D=E.length;R<D;R++){let z=E[R],O=z.shadow;if(O===void 0){Qe("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let H=O.getFrameExtents();s.multiply(H),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,O.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ur){if(z.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Qt(s.x,s.y,{format:Es,type:dn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new gs(s.x,s.y,ri),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Ii,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn}else z.isPointLight?(O.map=new yc(s.x),O.map.depthTexture=new cl(s.x,Mi)):(O.map=new Qt(s.x,s.y),O.map.depthTexture=new gs(s.x,s.y,Mi)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Ii,this.type===Ys?(O.map.depthTexture.compareFunction=B?gc:mc,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();z.isPointLight!==!0&&O.updateMatrices(z,x);for(let U=0;U<G;U++){let J=O.getCamera(U);if(z.isPointLight){let Y=O.camera,de=O.matrix,ge=z.distance||Y.far;ge!==Y.far&&(Y.far=ge,Y.updateProjectionMatrix()),oa.setFromMatrixPosition(z.matrixWorld),Y.position.copy(oa),uu.copy(Y.position),uu.add(Dy[U]),Y.up.copy(Ny[U]),Y.lookAt(uu),Y.updateMatrixWorld(),de.makeTranslation(-oa.x,-oa.y,-oa.z),Ud.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ud,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,U),i.clear();else{U===0&&(i.setRenderTarget(O.map),i.clear());let Y=O.getViewport(U);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(o)}n=O.getFrustum(U),M(b,x,J,z,this.type)}O.isPointLightShadow!==!0&&this.type===Ur&&v(O,x),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(S,T,P)};function v(E,b){let x=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new Qt(s.x,s.y,{format:Es,type:dn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,x,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,x,u,_,null)}function A(E,b,x,S){let T=null,P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)T=P;else if(T=x.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let L=T.uuid,N=b.uuid,R=c[L];R===void 0&&(R={},c[L]=R);let D=R[N];D===void 0&&(D=T.clone(),R[N]=D,b.addEventListener("dispose",y)),T=D}if(T.visible=b.visible,T.wireframe=b.wireframe,S===Ur?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:d[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let L=i.properties.get(T);L.light=x}return T}function M(E,b,x,S,T){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Ur)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let N=e.update(E),R=E.material;if(Array.isArray(R)){let D=N.groups;for(let z=0,O=D.length;z<O;z++){let H=D[z],B=R[H.materialIndex];if(B&&B.visible){let G=A(E,B,S,T);E.onBeforeShadow(i,E,b,x,N,G,H),i.renderBufferDirect(x,null,N,G,E,H),E.onAfterShadow(i,E,b,x,N,G,H)}}}else if(R.visible){let D=A(E,R,S,T);E.onBeforeShadow(i,E,b,x,N,D,null),i.renderBufferDirect(x,null,N,D,E,null),E.onAfterShadow(i,E,b,x,N,D,null)}}let L=E.children;for(let N=0,R=L.length;N<R;N++)M(L[N],b,x,S,T)}function y(E){E.target.removeEventListener("dispose",y);for(let x in c){let S=c[x],T=E.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function Fy(i,e){function t(){let W=!1,be=new Vt,he=null,Me=new Vt(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!W&&(i.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){W=Ce},setClear:function(Ce,fe,We,He,wt){wt===!0&&(Ce*=He,fe*=He,We*=He),be.set(Ce,fe,We,He),Me.equals(be)===!1&&(i.clearColor(Ce,fe,We,He),Me.copy(be))},reset:function(){W=!1,he=null,Me.set(-1,0,0,0)}}}function n(){let W=!1,be=!1,he=null,Me=null,Ce=null;return{setReversed:function(fe){if(be!==fe){let We=e.get("EXT_clip_control");fe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=fe;let He=Ce;Ce=null,this.setClear(He)}},getReversed:function(){return be},setTest:function(fe){fe?ie(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(fe){he!==fe&&!W&&(i.depthMask(fe),he=fe)},setFunc:function(fe){if(be&&(fe=od[fe]),Me!==fe){switch(fe){case $a:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case tl:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=fe}},setLocked:function(fe){W=fe},setClear:function(fe){Ce!==fe&&(Ce=fe,be&&(fe=1-fe),i.clearDepth(fe))},reset:function(){W=!1,he=null,Me=null,Ce=null,be=!1}}}function s(){let W=!1,be=null,he=null,Me=null,Ce=null,fe=null,We=null,He=null,wt=null;return{setTest:function(_t){W||(_t?ie(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(_t){be!==_t&&!W&&(i.stencilMask(_t),be=_t)},setFunc:function(_t,ut,Tn){(he!==_t||Me!==ut||Ce!==Tn)&&(i.stencilFunc(_t,ut,Tn),he=_t,Me=ut,Ce=Tn)},setOp:function(_t,ut,Tn){(fe!==_t||We!==ut||He!==Tn)&&(i.stencilOp(_t,ut,Tn),fe=_t,We=ut,He=Tn)},setLocked:function(_t){W=_t},setClear:function(_t){wt!==_t&&(i.clearStencil(_t),wt=_t)},reset:function(){W=!1,be=null,he=null,Me=null,Ce=null,fe=null,We=null,He=null,wt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,A=null,M=null,y=null,E=null,b=null,x=new ae(0,0,0),S=0,T=!1,P=null,L=null,N=null,R=null,D=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,H=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=H>=2);let G=null,U={},J=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),de=new Vt().fromArray(J),ge=new Vt().fromArray(Y);function Le(W,be,he,Me){let Ce=new Uint8Array(4),fe=i.createTexture();i.bindTexture(W,fe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<he;We++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(be+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return fe}let K={};K[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Er),q(!1),se(Fh),ie(i.CULL_FACE),Q(si);function ie(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function pe(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Fe(W,be){return f[W]!==be?(i.bindFramebuffer(W,be),f[W]=be,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=be),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Ee(W,be){let he=p,Me=!1;if(W){he=u.get(be),he===void 0&&(he=[],u.set(be,he));let Ce=W.textures;if(he.length!==Ce.length||he[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,We=Ce.length;fe<We;fe++)he[fe]=i.COLOR_ATTACHMENT0+fe;he.length=Ce.length,Me=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Me=!0);Me&&i.drawBuffers(he)}function Ge(W){return _!==W?(i.useProgram(W),_=W,!0):!1}let et={[Zs]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[Cf]:i.FUNC_REVERSE_SUBTRACT};et[Pf]=i.MIN,et[If]=i.MAX;let V={[Lf]:i.ZERO,[Df]:i.ONE,[Nf]:i.SRC_COLOR,[Hh]:i.SRC_ALPHA,[zf]:i.SRC_ALPHA_SATURATE,[Of]:i.DST_COLOR,[Ff]:i.DST_ALPHA,[Uf]:i.ONE_MINUS_SRC_COLOR,[zh]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[Bf]:i.ONE_MINUS_DST_ALPHA,[kf]:i.CONSTANT_COLOR,[Gf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(W,be,he,Me,Ce,fe,We,He,wt,_t){if(W===si){m===!0&&(pe(i.BLEND),m=!1);return}if(m===!1&&(ie(i.BLEND),m=!0),W!==Af){if(W!==g||_t!==T){if((v!==Zs||y!==Zs)&&(i.blendEquation(i.FUNC_ADD),v=Zs,y=Zs),_t)switch(W){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tt:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",W);break}else switch(W){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bh:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",W);break}A=null,M=null,E=null,b=null,x.set(0,0,0),S=0,g=W,T=_t}return}Ce=Ce||be,fe=fe||he,We=We||Me,(be!==v||Ce!==y)&&(i.blendEquationSeparate(et[be],et[Ce]),v=be,y=Ce),(he!==A||Me!==M||fe!==E||We!==b)&&(i.blendFuncSeparate(V[he],V[Me],V[fe],V[We]),A=he,M=Me,E=fe,b=We),(He.equals(x)===!1||wt!==S)&&(i.blendColor(He.r,He.g,He.b,wt),x.copy(He),S=wt),g=W,T=!1}function te(W,be){W.side===xt?pe(i.CULL_FACE):ie(i.CULL_FACE);let he=W.side===$t;be&&(he=!he),q(he),W.blending===Fr&&W.transparent===!1?Q(si):Q(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Me=W.stencilWrite;a.setTest(Me),Me&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function se(W){W!==bf?(ie(i.CULL_FACE),W!==L&&(W===Fh?i.cullFace(i.BACK):W===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),L=W}function ue(W){W!==N&&(O&&i.lineWidth(W),N=W)}function xe(W,be,he){W?(ie(i.POLYGON_OFFSET_FILL),(R!==be||D!==he)&&(R=be,D=he,o.getReversed()&&(be=-be),i.polygonOffset(be,he))):pe(i.POLYGON_OFFSET_FILL)}function Se(W){W?ie(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Ue(W){W===void 0&&(W=i.TEXTURE0+z-1),G!==W&&(i.activeTexture(W),G=W)}function k(W,be,he){he===void 0&&(G===null?he=i.TEXTURE0+z-1:he=G);let Me=U[he];Me===void 0&&(Me={type:void 0,texture:void 0},U[he]=Me),(Me.type!==W||Me.texture!==be)&&(G!==he&&(i.activeTexture(he),G=he),i.bindTexture(W,be||K[W]),Me.type=W,Me.texture=be)}function ot(){let W=U[G];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(W){Ke("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){Ke("WebGLState:",W)}}function w(){try{i.texSubImage2D(...arguments)}catch(W){Ke("WebGLState:",W)}}function Z(){try{i.texSubImage3D(...arguments)}catch(W){Ke("WebGLState:",W)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ke("WebGLState:",W)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ke("WebGLState:",W)}}function me(){try{i.texStorage2D(...arguments)}catch(W){Ke("WebGLState:",W)}}function ve(){try{i.texStorage3D(...arguments)}catch(W){Ke("WebGLState:",W)}}function oe(){try{i.texImage2D(...arguments)}catch(W){Ke("WebGLState:",W)}}function ce(){try{i.texImage3D(...arguments)}catch(W){Ke("WebGLState:",W)}}function ye(W){return d[W]!==void 0?d[W]:i.getParameter(W)}function Re(W,be){d[W]!==be&&(i.pixelStorei(W,be),d[W]=be)}function we(W){de.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),de.copy(W))}function _e(W){ge.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ge.copy(W))}function Ve(W,be){let he=c.get(be);he===void 0&&(he=new WeakMap,c.set(be,he));let Me=he.get(W);Me===void 0&&(Me=i.getUniformBlockIndex(be,W.name),he.set(W,Me))}function Ze(W,be){let Me=c.get(be).get(W);l.get(be)!==Me&&(i.uniformBlockBinding(be,Me,W.__bindingPointIndex),l.set(be,Me))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,U={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,A=null,M=null,y=null,E=null,b=null,x=new ae(0,0,0),S=0,T=!1,P=null,L=null,N=null,R=null,D=null,de.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:pe,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Ge,setBlending:Q,setMaterial:te,setFlipSided:q,setCullFace:se,setLineWidth:ue,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ue,bindTexture:k,unbindTexture:ot,compressedTexImage2D:tt,compressedTexImage3D:F,texImage2D:oe,texImage3D:ce,pixelStorei:Re,getParameter:ye,updateUBOMapping:Ve,uniformBlockBinding:Ze,texStorage2D:me,texStorage3D:ve,texSubImage2D:w,texSubImage3D:Z,compressedTexSubImage2D:$,compressedTexSubImage3D:re,scissor:we,viewport:_e,reset:nt}}function By(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,d=new Set,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(F,w){return p?new OffscreenCanvas(F,w):yo("canvas")}function m(F,w,Z){let $=1,re=tt(F);if((re.width>Z||re.height>Z)&&($=Z/Math.max(re.width,re.height)),$<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let me=Math.floor($*re.width),ve=Math.floor($*re.height);f===void 0&&(f=_(me,ve));let oe=w?_(me,ve):f;return oe.width=me,oe.height=ve,oe.getContext("2d").drawImage(F,0,0,me,ve),Qe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+me+"x"+ve+")."),oe}else return"data"in F&&Qe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),F;return F}function g(F){return F.generateMipmaps}function v(F){i.generateMipmap(F)}function A(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,w,Z,$,re,me=!1){if(F!==null){if(i[F]!==void 0)return i[F];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ve;$&&(ve=e.get("EXT_texture_norm16"),ve||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=w;if(w===i.RED&&(Z===i.FLOAT&&(oe=i.R32F),Z===i.HALF_FLOAT&&(oe=i.R16F),Z===i.UNSIGNED_BYTE&&(oe=i.R8),Z===i.UNSIGNED_SHORT&&ve&&(oe=ve.R16_EXT),Z===i.SHORT&&ve&&(oe=ve.R16_SNORM_EXT)),w===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.R8UI),Z===i.UNSIGNED_SHORT&&(oe=i.R16UI),Z===i.UNSIGNED_INT&&(oe=i.R32UI),Z===i.BYTE&&(oe=i.R8I),Z===i.SHORT&&(oe=i.R16I),Z===i.INT&&(oe=i.R32I)),w===i.RG&&(Z===i.FLOAT&&(oe=i.RG32F),Z===i.HALF_FLOAT&&(oe=i.RG16F),Z===i.UNSIGNED_BYTE&&(oe=i.RG8),Z===i.UNSIGNED_SHORT&&ve&&(oe=ve.RG16_EXT),Z===i.SHORT&&ve&&(oe=ve.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RG8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RG16UI),Z===i.UNSIGNED_INT&&(oe=i.RG32UI),Z===i.BYTE&&(oe=i.RG8I),Z===i.SHORT&&(oe=i.RG16I),Z===i.INT&&(oe=i.RG32I)),w===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),Z===i.UNSIGNED_INT&&(oe=i.RGB32UI),Z===i.BYTE&&(oe=i.RGB8I),Z===i.SHORT&&(oe=i.RGB16I),Z===i.INT&&(oe=i.RGB32I)),w===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),Z===i.UNSIGNED_INT&&(oe=i.RGBA32UI),Z===i.BYTE&&(oe=i.RGBA8I),Z===i.SHORT&&(oe=i.RGBA16I),Z===i.INT&&(oe=i.RGBA32I)),w===i.RGB&&(Z===i.UNSIGNED_SHORT&&ve&&(oe=ve.RGB16_EXT),Z===i.SHORT&&ve&&(oe=ve.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),w===i.RGBA){let ce=me?_o:ft.getTransfer(re);Z===i.FLOAT&&(oe=i.RGBA32F),Z===i.HALF_FLOAT&&(oe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(oe=ce===St?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&ve&&(oe=ve.RGBA16_EXT),Z===i.SHORT&&ve&&(oe=ve.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(F,w){let Z;return F?w===null||w===Mi||w===Or?Z=i.DEPTH24_STENCIL8:w===ri?Z=i.DEPTH32F_STENCIL8:w===Br&&(Z=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Mi||w===Or?Z=i.DEPTH_COMPONENT24:w===ri?Z=i.DEPTH_COMPONENT32F:w===Br&&(Z=i.DEPTH_COMPONENT16),Z}function E(F,w){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==vn&&F.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function b(F){let w=F.target;w.removeEventListener("dispose",b),S(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function x(F){let w=F.target;w.removeEventListener("dispose",x),P(w)}function S(F){let w=n.get(F);if(w.__webglInit===void 0)return;let Z=F.source,$=u.get(Z);if($){let re=$[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(F),Object.keys($).length===0&&u.delete(Z)}n.remove(F)}function T(F){let w=n.get(F);i.deleteTexture(w.__webglTexture);let Z=F.source,$=u.get(Z);delete $[w.__cacheKey],o.memory.textures--}function P(F){let w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let re=0;re<w.__webglFramebuffer[$].length;re++)i.deleteFramebuffer(w.__webglFramebuffer[$][re]);else i.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)i.deleteFramebuffer(w.__webglFramebuffer[$]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Z=F.textures;for(let $=0,re=Z.length;$<re;$++){let me=n.get(Z[$]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(Z[$])}n.remove(F)}let L=0;function N(){L=0}function R(){return L}function D(F){L=F}function z(){let F=L;return F>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,F}function O(F){let w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function H(F,w){let Z=n.get(F);if(F.isVideoTexture&&k(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){let $=F.image;if($===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Z,F,w);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+w)}function B(F,w){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){pe(Z,F,w);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+w)}function G(F,w){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){pe(Z,F,w);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+w)}function U(F,w){let Z=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){Fe(Z,F,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+w)}let J={[Zi]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[il]:i.MIRRORED_REPEAT},Y={[vn]:i.NEAREST,[Yf]:i.NEAREST_MIPMAP_NEAREST,[Ko]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Ll]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},de={[Kf]:i.NEVER,[nd]:i.ALWAYS,[Qf]:i.LESS,[mc]:i.LEQUAL,[jf]:i.EQUAL,[gc]:i.GEQUAL,[ed]:i.GREATER,[td]:i.NOTEQUAL};function ge(F,w){if(w.type===ri&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===nn||w.magFilter===Ll||w.magFilter===Ko||w.magFilter===Ni||w.minFilter===nn||w.minFilter===Ll||w.minFilter===Ko||w.minFilter===Ni)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,J[w.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Y[w.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===vn||w.minFilter!==Ko&&w.minFilter!==Ni||w.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Le(F,w){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",b));let $=w.source,re=u.get($);re===void 0&&(re={},u.set($,re));let me=O(w);if(me!==F.__cacheKey){re[me]===void 0&&(re[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),re[me].usedTimes++;let ve=re[F.__cacheKey];ve!==void 0&&(re[F.__cacheKey].usedTimes--,ve.usedTimes===0&&T(w)),F.__cacheKey=me,F.__webglTexture=re[me].texture}return Z}function K(F,w,Z){return Math.floor(Math.floor(F/Z)/w)}function ie(F,w,Z,$){let me=F.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Z,$,w.data);else{me.sort((Re,we)=>Re.start-we.start);let ve=0;for(let Re=1;Re<me.length;Re++){let we=me[ve],_e=me[Re],Ve=we.start+we.count,Ze=K(_e.start,w.width,4),nt=K(we.start,w.width,4);_e.start<=Ve+1&&Ze===nt&&K(_e.start+_e.count-1,w.width,4)===Ze?we.count=Math.max(we.count,_e.start+_e.count-we.start):(++ve,me[ve]=_e)}me.length=ve+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Re=0,we=me.length;Re<we;Re++){let _e=me[Re],Ve=Math.floor(_e.start/4),Ze=Math.ceil(_e.count/4),nt=Ve%w.width,W=Math.floor(Ve/w.width),be=Ze,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,nt,W,be,he,Z,$,w.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function pe(F,w,Z){let $=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=i.TEXTURE_3D);let re=Le(F,w),me=w.source;t.bindTexture($,F.__webglTexture,i.TEXTURE0+Z);let ve=n.get(me);if(me.version!==ve.__version||re===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let he=ft.getPrimaries(ft.workingColorSpace),Me=w.colorSpace===ts?null:ft.getPrimaries(w.colorSpace),Ce=w.colorSpace===ts||he===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ce=m(w.image,!1,s.maxTextureSize);ce=ot(w,ce);let ye=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),we=M(w.internalFormat,ye,Re,w.normalized,w.colorSpace,w.isVideoTexture);ge($,w);let _e,Ve=w.mipmaps,Ze=w.isVideoTexture!==!0,nt=ve.__version===void 0||re===!0,W=me.dataReady,be=E(w,ce);if(w.isDepthTexture)we=y(w.format===Ss,w.type),nt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,we,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,we,ce.width,ce.height,0,ye,Re,null));else if(w.isDataTexture)if(Ve.length>0){Ze&&nt&&t.texStorage2D(i.TEXTURE_2D,be,we,Ve[0].width,Ve[0].height);for(let he=0,Me=Ve.length;he<Me;he++)_e=Ve[he],Ze?W&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,_e.width,_e.height,ye,Re,_e.data):t.texImage2D(i.TEXTURE_2D,he,we,_e.width,_e.height,0,ye,Re,_e.data);w.generateMipmaps=!1}else Ze?(nt&&t.texStorage2D(i.TEXTURE_2D,be,we,ce.width,ce.height),W&&ie(w,ce,ye,Re)):t.texImage2D(i.TEXTURE_2D,0,we,ce.width,ce.height,0,ye,Re,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ze&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,we,Ve[0].width,Ve[0].height,ce.depth);for(let he=0,Me=Ve.length;he<Me;he++)if(_e=Ve[he],w.format!==Vn)if(ye!==null)if(Ze){if(W)if(w.layerUpdates.size>0){let Ce=eu(_e.width,_e.height,w.format,w.type);for(let fe of w.layerUpdates){let We=_e.data.subarray(fe*Ce/_e.data.BYTES_PER_ELEMENT,(fe+1)*Ce/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,fe,_e.width,_e.height,1,ye,We)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ce.depth,ye,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,we,_e.width,_e.height,ce.depth,0,_e.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ce.depth,ye,Re,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,we,_e.width,_e.height,ce.depth,0,ye,Re,_e.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ze&&nt&&t.texStorage2D(i.TEXTURE_2D,be,we,Ve[0].width,Ve[0].height);for(let he=0,Me=Ve.length;he<Me;he++)_e=Ve[he],w.format!==Vn?ye!==null?Ze?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,he,we,_e.width,_e.height,0,_e.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?W&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,_e.width,_e.height,ye,Re,_e.data):t.texImage2D(i.TEXTURE_2D,he,we,_e.width,_e.height,0,ye,Re,_e.data)}else if(w.isDataArrayTexture)if(Ze){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,we,ce.width,ce.height,ce.depth),W)if(w.layerUpdates.size>0){let he=eu(ce.width,ce.height,w.format,w.type);for(let Me of w.layerUpdates){let Ce=ce.data.subarray(Me*he/ce.data.BYTES_PER_ELEMENT,(Me+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,ce.width,ce.height,1,ye,Re,Ce)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Re,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ce.width,ce.height,ce.depth,0,ye,Re,ce.data);else if(w.isData3DTexture)Ze?(nt&&t.texStorage3D(i.TEXTURE_3D,be,we,ce.width,ce.height,ce.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Re,ce.data)):t.texImage3D(i.TEXTURE_3D,0,we,ce.width,ce.height,ce.depth,0,ye,Re,ce.data);else if(w.isFramebufferTexture){if(nt)if(Ze)t.texStorage2D(i.TEXTURE_2D,be,we,ce.width,ce.height);else{let he=ce.width,Me=ce.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,we,he,Me,0,ye,Re,null),he>>=1,Me>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ce.parentNode!==he){he.appendChild(ce),d.add(w),he.onpaint=Me=>{let Ce=Me.changedElements;for(let fe of d)Ce.includes(fe.image)&&(fe.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{let Ce=i.RGBA,fe=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ce,fe,We,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ze&&nt){let he=tt(Ve[0]);t.texStorage2D(i.TEXTURE_2D,be,we,he.width,he.height)}for(let he=0,Me=Ve.length;he<Me;he++)_e=Ve[he],Ze?W&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ye,Re,_e):t.texImage2D(i.TEXTURE_2D,he,we,ye,Re,_e);w.generateMipmaps=!1}else if(Ze){if(nt){let he=tt(ce);t.texStorage2D(i.TEXTURE_2D,be,we,he.width,he.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Re,ce)}else t.texImage2D(i.TEXTURE_2D,0,we,ye,Re,ce);g(w)&&v($),ve.__version=me.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Fe(F,w,Z){if(w.image.length!==6)return;let $=Le(F,w),re=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);let me=n.get(re);if(re.version!==me.__version||$===!0){t.activeTexture(i.TEXTURE0+Z);let ve=ft.getPrimaries(ft.workingColorSpace),oe=w.colorSpace===ts?null:ft.getPrimaries(w.colorSpace),ce=w.colorSpace===ts||ve===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ye=w.isCompressedTexture||w.image[0].isCompressedTexture,Re=w.image[0]&&w.image[0].isDataTexture,we=[];for(let fe=0;fe<6;fe++)!ye&&!Re?we[fe]=m(w.image[fe],!0,s.maxCubemapSize):we[fe]=Re?w.image[fe].image:w.image[fe],we[fe]=ot(w,we[fe]);let _e=we[0],Ve=r.convert(w.format,w.colorSpace),Ze=r.convert(w.type),nt=M(w.internalFormat,Ve,Ze,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,be=me.__version===void 0||$===!0,he=re.dataReady,Me=E(w,_e);ge(i.TEXTURE_CUBE_MAP,w);let Ce;if(ye){W&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,nt,_e.width,_e.height);for(let fe=0;fe<6;fe++){Ce=we[fe].mipmaps;for(let We=0;We<Ce.length;We++){let He=Ce[We];w.format!==Vn?Ve!==null?W?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,0,0,He.width,He.height,Ve,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,nt,He.width,He.height,0,He.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,0,0,He.width,He.height,Ve,Ze,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,nt,He.width,He.height,0,Ve,Ze,He.data)}}}else{if(Ce=w.mipmaps,W&&be){Ce.length>0&&Me++;let fe=tt(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,nt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Re){W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,we[fe].width,we[fe].height,Ve,Ze,we[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,nt,we[fe].width,we[fe].height,0,Ve,Ze,we[fe].data);for(let We=0;We<Ce.length;We++){let wt=Ce[We].image[fe].image;W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,0,0,wt.width,wt.height,Ve,Ze,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,nt,wt.width,wt.height,0,Ve,Ze,wt.data)}}else{W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ve,Ze,we[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,nt,Ve,Ze,we[fe]);for(let We=0;We<Ce.length;We++){let He=Ce[We];W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,0,0,Ve,Ze,He.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,nt,Ve,Ze,He.image[fe])}}}g(w)&&v(i.TEXTURE_CUBE_MAP),me.__version=re.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Ee(F,w,Z,$,re,me){let ve=r.convert(Z.format,Z.colorSpace),oe=r.convert(Z.type),ce=M(Z.internalFormat,ve,oe,Z.normalized,Z.colorSpace),ye=n.get(w),Re=n.get(Z);if(Re.__renderTarget=w,!ye.__hasExternalTextures){let we=Math.max(1,w.width>>me),_e=Math.max(1,w.height>>me);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,me,ce,we,_e,w.depth,0,ve,oe,null):t.texImage2D(re,me,ce,we,_e,0,ve,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Ue(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,re,Re.__webglTexture,0,Se(w)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,re,Re.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(F,w,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),w.depthBuffer){let $=w.depthTexture,re=$&&$.isDepthTexture?$.type:null,me=y(w.stencilBuffer,re),ve=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(w),me,w.width,w.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(w),me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,F)}else{let $=w.textures;for(let re=0;re<$.length;re++){let me=$[re],ve=r.convert(me.format,me.colorSpace),oe=r.convert(me.type),ce=M(me.internalFormat,ve,oe,me.normalized,me.colorSpace);Ue(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(w),ce,w.width,w.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(w),ce,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ce,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(F,w,Z){let $=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(w.depthTexture);if(re.__renderTarget=w,(!re.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$){if(re.__webglInit===void 0&&(re.__webglInit=!0,w.depthTexture.addEventListener("dispose",b)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ge(i.TEXTURE_CUBE_MAP,w.depthTexture);let ye=r.convert(w.depthTexture.format),Re=r.convert(w.depthTexture.type),we;w.depthTexture.format===Ii?we=i.DEPTH_COMPONENT24:w.depthTexture.format===Ss&&(we=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,we,w.width,w.height,0,ye,Re,null)}}else H(w.depthTexture,0);let me=re.__webglTexture,ve=Se(w),oe=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ce=w.depthTexture.format===Ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ii)Ue(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,me,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,me,0);else if(w.depthTexture.format===Ss)Ue(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,me,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function V(F){let w=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){let $=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",re)};$.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=$}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let $=0;$<6;$++)et(w.__webglFramebuffer[$],F,$);else{let $=F.texture.mipmaps;$&&$.length>0?et(w.__webglFramebuffer[0],F,0):et(w.__webglFramebuffer,F,0)}else if(Z){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=i.createRenderbuffer(),Ge(w.__webglDepthbuffer[$],F,!1);else{let re=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,me)}}else{let $=F.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ge(w.__webglDepthbuffer,F,!1);else{let re=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(F,w,Z){let $=n.get(F);w!==void 0&&Ee($.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&V(F)}function te(F){let w=F.texture,Z=n.get(F),$=n.get(w);F.addEventListener("dispose",x);let re=F.textures,me=F.isWebGLCubeRenderTarget===!0,ve=re.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=w.version,o.memory.textures++),me){Z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[oe]=[];for(let ce=0;ce<w.mipmaps.length;ce++)Z.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else Z.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)Z.__webglFramebuffer[oe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ve)for(let oe=0,ce=re.length;oe<ce;oe++){let ye=n.get(re[oe]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Ue(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){let ce=re[oe];Z.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);let ye=r.convert(ce.format,ce.colorSpace),Re=r.convert(ce.type),we=M(ce.internalFormat,ye,Re,ce.normalized,ce.colorSpace,F.isXRRenderTarget===!0),_e=Se(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,we,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ge(i.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)Ee(Z.__webglFramebuffer[oe][ce],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else Ee(Z.__webglFramebuffer[oe],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(w)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,ce=re.length;oe<ce;oe++){let ye=re[oe],Re=n.get(ye),we=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(we=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,Re.__webglTexture),ge(we,ye),Ee(Z.__webglFramebuffer,F,ye,i.COLOR_ATTACHMENT0+oe,we,0),g(ye)&&v(we)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(oe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),ge(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let ce=0;ce<w.mipmaps.length;ce++)Ee(Z.__webglFramebuffer[ce],F,w,i.COLOR_ATTACHMENT0,oe,ce);else Ee(Z.__webglFramebuffer,F,w,i.COLOR_ATTACHMENT0,oe,0);g(w)&&v(oe),t.unbindTexture()}F.depthBuffer&&V(F)}function q(F){let w=F.textures;for(let Z=0,$=w.length;Z<$;Z++){let re=w[Z];if(g(re)){let me=A(F),ve=n.get(re).__webglTexture;t.bindTexture(me,ve),v(me),t.unbindTexture()}}}let se=[],ue=[];function xe(F){if(F.samples>0){if(Ue(F)===!1){let w=F.textures,Z=F.width,$=F.height,re=i.COLOR_BUFFER_BIT,me=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(F),oe=w.length>1;if(oe)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let ce=F.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);let Re=n.get(w[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,Z,$,0,0,Z,$,re,i.NEAREST),l===!0&&(se.length=0,ue.length=0,se.push(i.COLOR_ATTACHMENT0+ye),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(se.push(me),ue.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);let Re=n.get(w[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let w=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Se(F){return Math.min(s.maxSamples,F.samples)}function Ue(F){let w=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(F){let w=o.render.frame;h.get(F)!==w&&(h.set(F,w),F.update())}function ot(F,w){let Z=F.colorSpace,$=F.format,re=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==xo&&Z!==ts&&(ft.getTransfer(Z)===St?($!==Vn||re!==Dn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",Z)),w}function tt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=R,this.setTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=U,this.rebindTextures=Q,this.setupRenderTarget=te,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Oy(i,e){function t(n,s=ts){let r,o=ft.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Dl)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===Vn)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Hr)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===Bl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===Qo||n===jo||n===ea||n===ta)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===zl||n===kl||n===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===na||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Wl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ql)return r.COMPRESSED_R11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===Zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jl||n===$l||n===Kl||n===Ql||n===jl||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cc||n===hc||n===uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===dc||n===ia||n===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:Hy,fragmentShader:zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends Li{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,_=typeof XRWebGLBinding<"u",m=new yu,g={},v=t.getContextAttributes(),A=null,M=null,y=[],E=[],b=new le,x=null,S=null,T=new zt;T.viewport=new Vt;let P=new zt;P.viewport=new Vt;let L=[T,P],N=new Al,R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=y[K];return ie===void 0&&(ie=new Ar,y[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=y[K];return ie===void 0&&(ie=new Ar,y[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=y[K];return ie===void 0&&(ie=new Ar,y[K]=ie),ie.getHandSpace()};function z(K){let ie=E.indexOf(K.inputSource);if(ie===-1)return;let pe=y[ie];pe!==void 0&&(pe.update(K.inputSource,K.frame,c||o),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let K=0;K<y.length;K++){let ie=E[K];ie!==null&&(E[K]=null,y[K].disconnect(ie))}R=null,D=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(A),u=null,f=null,d=null,s=null,M=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),S!==null){let K=S.camera;K.fov=S.fov,K.zoom=S.zoom,K.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?Ss:Ii,Fe=v.stencil?Or:Mi);let Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Qt(f.textureWidth,f.textureHeight,{format:Vn,type:Dn,depthTexture:new gs(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Qt(u.framebufferWidth,u.framebufferHeight,{format:Vn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(K){for(let ie=0;ie<K.removed.length;ie++){let pe=K.removed[ie],Fe=E.indexOf(pe);Fe>=0&&(E[Fe]=null,y[Fe].disconnect(pe))}for(let ie=0;ie<K.added.length;ie++){let pe=K.added[ie],Fe=E.indexOf(pe);if(Fe===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=E.length){E.push(pe),Fe=Ge;break}else if(E[Ge]===null){E[Ge]=pe,Fe=Ge;break}if(Fe===-1)break}let Ee=y[Fe];Ee&&Ee.connect(pe)}}let B=new I,G=new I;function U(K,ie,pe){B.setFromMatrixPosition(ie.matrixWorld),G.setFromMatrixPosition(pe.matrixWorld);let Fe=B.distanceTo(G),Ee=ie.projectionMatrix.elements,Ge=pe.projectionMatrix.elements,et=Ee[14]/(Ee[10]-1),V=Ee[14]/(Ee[10]+1),Q=(Ee[9]+1)/Ee[5],te=(Ee[9]-1)/Ee[5],q=(Ee[8]-1)/Ee[0],se=(Ge[8]+1)/Ge[0],ue=et*q,xe=et*se,Se=Fe/(-q+se),Ue=Se*-q;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ue),K.translateZ(Se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let k=et+Se,ot=V+Se,tt=ue-Ue,F=xe+(Fe-Ue),w=Q*V/ot*k,Z=te*V/ot*k;K.projectionMatrix.makePerspective(tt,F,w,Z,k,ot),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,pe=K.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),N.near=P.near=T.near=ie,N.far=P.far=T.far=pe,(R!==N.near||D!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,D=N.far),N.layers.mask=K.layers.mask|6,T.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let Fe=K.parent,Ee=N.cameras;J(N,Fe);for(let Ge=0;Ge<Ee.length;Ge++)J(Ee[Ge],Fe);Ee.length===2?U(N,T,P):N.projectionMatrix.copy(T.projectionMatrix),S===null&&K.isPerspectiveCamera&&(S={camera:K,fov:K.fov,zoom:K.zoom}),Y(K,N,Fe)};function Y(K,ie,pe){pe===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return g[K]};let de=null;function ge(K,ie){if(h=ie.getViewerPose(c||o),p=ie,h!==null){let pe=h.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let Fe=!1;pe.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let V=0;V<pe.length;V++){let Q=pe[V],te=null;if(u!==null)te=u.getViewport(Q);else{let se=d.getViewSubImage(f,Q);te=se.viewport,V===0&&(e.setRenderTargetTextures(M,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(M))}let q=L[V];q===void 0&&(q=new zt,q.layers.enable(V),q.viewport=new Vt,L[V]=q),q.matrix.fromArray(Q.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Q.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(te.x,te.y,te.width,te.height),V===0&&(N.matrix.copy(q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(q)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let V=d.getDepthInformation(pe[0]);V&&V.isValid&&V.texture&&m.init(V,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let V=0;V<pe.length;V++){let Q=pe[V].camera;if(Q){let te=g[Q];te||(te=new Co,g[Q]=te);let q=d.getCameraImage(Q);te.sourceTexture=q}}}}for(let pe=0;pe<y.length;pe++){let Fe=E[pe],Ee=y[pe];Fe!==null&&Ee!==void 0&&Ee.update(Fe,ie,c||o)}de&&de(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}let Le=new Fd;Le.setAnimationLoop(ge),this.setAnimationLoop=function(K){de=K},this.dispose=function(){}}},ky=new it,Gd=new st;Gd.set(-1,0,0,0,1,0,0,0,1);function Gy(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Kh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,A,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$t&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$t&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),A=v.envMap,M=v.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let E=y.program;n.uniformBlockBinding(M,E)}function c(M,y){let E=s[M.id];E===void 0&&(m(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",v));let b=y.program;n.updateUBOMapping(M,b);let x=e.render.frame;r[M.id]!==x&&(f(M),r[M.id]=x)}function h(M){let y=d();M.__bindingPointIndex=y;let E=i.createBuffer(),b=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=s[M.id],E=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,S=E.length;x<S;x++){let T=E[x];if(Array.isArray(T))for(let P=0,L=T.length;P<L;P++)u(T[P],x,P,b);else u(T,x,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,y,E,b){if(_(M,y,E,b)===!0){let x=M.__offset,S=M.value;if(Array.isArray(S)){let T=0;for(let P=0;P<S.length;P++){let L=S[P],N=g(L);p(L,M.__data,T),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(T+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function p(M,y,E){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,E)}function _(M,y,E,b){let x=M.value,S=y+"_"+E;if(b[S]===void 0)return typeof x=="number"||typeof x=="boolean"?b[S]=x:ArrayBuffer.isView(x)?b[S]=x.slice():b[S]=x.clone(),!0;{let T=b[S];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return b[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function m(M){let y=M.uniforms,E=0,b=16;for(let S=0,T=y.length;S<T;S++){let P=Array.isArray(y[S])?y[S]:[y[S]];for(let L=0,N=P.length;L<N;L++){let R=P[L],D=Array.isArray(R.value)?R.value:[R.value];for(let z=0,O=D.length;z<O;z++){let H=D[z],B=g(H),G=E%b,U=G%B.boundary,J=G+U;E+=U,J!==0&&b-J<B.storage&&(E+=b-J),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=E,E+=B.storage}}}let x=E%b;return x>0&&(E+=b-x),M.__size=E,M.__cache={},this}function g(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",M),y}function v(M){let y=M.target;y.removeEventListener("dispose",v);let E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Wy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function Xy(){return Ui===null&&(Ui=new Ji(Wy,16,16,Es,dn),Ui.name="DFG_LUT",Ui.minFilter=nn,Ui.magFilter=nn,Ui.wrapS=Ci,Ui.wrapT=Ci,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var Vr=class{constructor(e={}){let{canvas:t=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Dn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=u,m=new Set([Ol,Bl,Fl]),g=new Set([Dn,Mi,Br,Or,Nl,Ul]),v=new Uint32Array(4),A=new Int32Array(4),M=new I,y=null,E=null,b=[],x=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,L=null,N=null,R=null,D=null;this._outputColorSpace=tn;let z=0,O=0,H=null,B=-1,G=null,U=new Vt,J=new Vt,Y=null,de=new ae(0),ge=0,Le=t.width,K=t.height,ie=1,pe=null,Fe=null,Ee=new Vt(0,0,Le,K),Ge=new Vt(0,0,Le,K),et=!1,V=new ms,Q=!1,te=!1,q=new it,se=new I,ue=new Vt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ue(){return H===null?ie:1}let k=n;function ot(C,X){return t.getContext(C,X)}let tt,F,w,Z,$,re,me,ve,oe,ce,ye,Re,we,_e,Ve,Ze,nt,W,be,he,Me,Ce,fe;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",ut,!1),k===null){let X="webgl2";if(k=ot(X,C),k===null)throw ot(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(C){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Ke("WebGLRenderer: "+C.message),C}function We(){tt=new Qx(k),tt.init(),Me=new Oy(k,tt),F=new Gx(k,tt,e,Me),w=new Fy(k,tt),F.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),N=k.createFramebuffer(),R=k.createFramebuffer(),D=k.createFramebuffer(),Z=new t_(k),$=new Sy,re=new By(k,tt,w,$,F,Me,Z),me=new Kx(T),ve=new im(k),Ce=new zx(k,ve),oe=new jx(k,ve,Z,Ce),ce=new i_(k,oe,ve,Ce,Z),W=new n_(k,F,re),Ve=new Vx($),ye=new My(T,me,tt,F,Ce,Ve),Re=new Gy(T,$),we=new by,_e=new Py(tt),nt=new Hx(T,me,w,ce,p,l),Ze=new Uy(T,ce,F),fe=new Vy(k,Z,F,w),be=new kx(k,tt,Z),he=new e_(k,tt,Z),Z.programs=ye.programs,T.capabilities=F,T.extensions=tt,T.properties=$,T.renderLists=we,T.shadowMap=Ze,T.state=w,T.info=Z}_!==Dn&&(S=new r_(_,t.width,t.height,a,s,r));let He=new vu(T,k);this.xr=He,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(Le,K,!1))},this.getSize=function(C){return C.set(Le,K)},this.setSize=function(C,X,ne=!0){if(He.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=C,K=X,t.width=Math.floor(C*ie),t.height=Math.floor(X*ie),ne===!0&&(t.style.width=C+"px",t.style.height=X+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(Le*ie,K*ie).floor()},this.setDrawingBufferSize=function(C,X,ne){Le=C,K=X,ie=ne,t.width=Math.floor(C*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(_===Dn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,X,ne,j){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,X,ne,j),w.viewport(U.copy(Ee).multiplyScalar(ie).round())},this.getScissor=function(C){return C.copy(Ge)},this.setScissor=function(C,X,ne,j){C.isVector4?Ge.set(C.x,C.y,C.z,C.w):Ge.set(C,X,ne,j),w.scissor(J.copy(Ge).multiplyScalar(ie).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(C){w.setScissorTest(et=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ne=!0){let j=0;if(C){let ee=!1;if(H!==null){let Ie=H.texture.format;ee=m.has(Ie)}if(ee){let Ie=H.texture.type,Oe=g.has(Ie),Pe=nt.getClearColor(),ze=nt.getClearAlpha(),Xe=Pe.r,at=Pe.g,pt=Pe.b;Oe?(v[0]=Xe,v[1]=at,v[2]=pt,v[3]=ze,k.clearBufferuiv(k.COLOR,0,v)):(A[0]=Xe,A[1]=at,A[2]=pt,A[3]=ze,k.clearBufferiv(k.COLOR,0,A))}else j|=k.COLOR_BUFFER_BIT}X&&(j|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),L=C},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),nt.dispose(),we.dispose(),_e.dispose(),$.dispose(),me.dispose(),ce.dispose(),Ce.dispose(),fe.dispose(),ye.dispose(),He.dispose(),He.removeEventListener("sessionstart",Uu),He.removeEventListener("sessionend",Fu),Fs.stop()};function wt(C){C.preventDefault(),vo("WebGLRenderer: Context Lost."),P=!0}function _t(){vo("WebGLRenderer: Context Restored."),P=!1;let C=Z.autoReset,X=Ze.enabled,ne=Ze.autoUpdate,j=Ze.needsUpdate,ee=Ze.type;We(),Z.autoReset=C,Ze.enabled=X,Ze.autoUpdate=ne,Ze.needsUpdate=j,Ze.type=ee}function ut(C){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Tn(C){let X=C.target;X.removeEventListener("dispose",Tn),Ns(X)}function Ns(C){os(C),$.remove(C)}function os(C){let X=$.get(C).programs;X!==void 0&&(X.forEach(function(ne){ye.releaseProgram(ne)}),C.isShaderMaterial&&ye.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ne,j,ee,Ie){X===null&&(X=xe);let Oe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Pe=zp(C,X,ne,j,ee);w.setMaterial(j,Oe);let ze=ne.index,Xe=1;if(j.wireframe===!0){if(ze=oe.getWireframeAttribute(ne),ze===void 0)return;Xe=2}let at=ne.drawRange,pt=ne.attributes.position,ke=at.start*Xe,bt=(at.start+at.count)*Xe;Ie!==null&&(ke=Math.max(ke,Ie.start*Xe),bt=Math.min(bt,(Ie.start+Ie.count)*Xe)),ze!==null?(ke=Math.max(ke,0),bt=Math.min(bt,ze.count)):pt!=null&&(ke=Math.max(ke,0),bt=Math.min(bt,pt.count));let ln=bt-ke;if(ln<0||ln===1/0)return;Ce.setup(ee,j,Pe,ne,ze);let Ot,Lt=be;if(ze!==null&&(Ot=ve.get(ze),Lt=he,Lt.setIndex(Ot)),ee.isMesh)j.wireframe===!0?(w.setLineWidth(j.wireframeLinewidth*Ue()),Lt.setMode(k.LINES)):Lt.setMode(k.TRIANGLES);else if(ee.isLine){let Rn=j.linewidth;Rn===void 0&&(Rn=1),w.setLineWidth(Rn*Ue()),ee.isLineSegments?Lt.setMode(k.LINES):ee.isLineLoop?Lt.setMode(k.LINE_LOOP):Lt.setMode(k.LINE_STRIP)}else ee.isPoints?Lt.setMode(k.POINTS):ee.isSprite&&Lt.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Rn=ee._multiDrawStarts,Be=ee._multiDrawCounts,Fn=ee._multiDrawCount,vt=ze?ve.get(ze).bytesPerElement:1,ei=$.get(j).currentProgram.getUniforms();for(let wi=0;wi<Fn;wi++)ei.setValue(k,"_gl_DrawID",wi),Lt.render(Rn[wi]/vt,Be[wi])}else if(ee.isInstancedMesh)Lt.renderInstances(ke,ln,ee.count);else if(ne.isInstancedBufferGeometry){let Rn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Be=Math.min(ne.instanceCount,Rn);Lt.renderInstances(ke,ln,Be)}else Lt.render(ke,ln)};function tr(C,X,ne,j){L!==null&&C.isNodeMaterial&&L.setObject(j,C),Q===!0&&Ve.setState(C,ne,!1),C.transparent===!0&&C.side===xt&&C.forceSinglePass===!1?(C.side=$t,C.needsUpdate=!0,va(C,X,j),C.side=es,C.needsUpdate=!0,va(C,X,j),C.side=xt):va(C,X,j)}this.compile=function(C,X,ne=null){ne===null&&(ne=C),L!==null&&L.renderStart(C,X,ne),E=_e.get(ne),E.init(X),x.push(E),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),C!==ne&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),te=this.localClippingEnabled,Q=Ve.init(this.clippingPlanes,te),Q===!0&&Ve.setGlobalState(this.clippingPlanes,X),L!==null&&Ze.render(E.state.shadowsArray,ne,X);let j=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let Oe=0;Oe<Ie.length;Oe++){let Pe=Ie[Oe];tr(Pe,ne,X,ee),j.add(Pe)}else tr(Ie,ne,X,ee),j.add(Ie)}),E=x.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(C,X,ne=null){let j=this.compile(C,X,ne);return new Promise(ee=>{function Ie(){if(j.forEach(function(Oe){let ze=$.get(Oe).currentProgram;(ze===void 0||ze.isReady())&&j.delete(Oe)}),j.size===0){ee(C);return}setTimeout(Ie,10)}tt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Us=null;function Op(C){Us&&Us(C)}function Uu(){Fs.stop()}function Fu(){Fs.start()}let Fs=new Fd;Fs.setAnimationLoop(Op),typeof self<"u"&&Fs.setContext(self),this.setAnimationLoop=function(C){Us=C,He.setAnimationLoop(C),C===null?Fs.stop():Fs.start()},He.addEventListener("sessionstart",Uu),He.addEventListener("sessionend",Fu),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(C,X);let ne=He.enabled===!0&&He.isPresenting===!0,j=S!==null&&(H===null||ne)&&S.begin(T,H);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(X),X=He.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,X,H),E=_e.get(C,x.length),E.init(X),E.state.textureUnits=re.getTextureUnits(),x.push(E),q.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),V.setFromProjectionMatrix(q,gi,X.reversedDepth),te=this.localClippingEnabled,Q=Ve.init(this.clippingPlanes,te),y=we.get(C,b.length),y.init(),b.push(y),He.enabled===!0&&He.isPresenting===!0){let Oe=T.xr.getDepthSensingMesh();Oe!==null&&Jc(Oe,X,-1/0,T.sortObjects)}Jc(C,X,0,T.sortObjects),y.finish(),L!==null&&L.updateLights(E.state.lightsArray),T.sortObjects===!0&&y.sort(pe,Fe),Se=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Se&&nt.addToRenderList(y,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Ve.beginShadows();let ee=E.state.shadowsArray;if(Ze.render(ee,C,X),Q===!0&&Ve.endShadows(),(j&&S.hasRenderPass())===!1){let Oe=y.opaque,Pe=y.transmissive;if(E.setupLights(),X.isArrayCamera){let ze=X.cameras;if(Pe.length>0)for(let Xe=0,at=ze.length;Xe<at;Xe++){let pt=ze[Xe];Ou(Oe,Pe,C,pt)}Se&&nt.render(C);for(let Xe=0,at=ze.length;Xe<at;Xe++){let pt=ze[Xe];Bu(y,C,pt,pt.viewport)}}else Pe.length>0&&Ou(Oe,Pe,C,X),Se&&nt.render(C),Bu(y,C,X)}H!==null&&O===0&&(re.updateMultisampleRenderTarget(H),re.updateRenderTargetMipmap(H)),j&&S.end(T),C.isScene===!0&&C.onAfterRender(T,C,X),Ce.resetDefaultState(),B=-1,G=null,x.pop(),x.length>0?(E=x[x.length-1],re.setTextureUnits(E.state.textureUnits),Q===!0&&Ve.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,L!==null&&L.renderEnd()};function Jc(C,X,ne,j){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(V)){j&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(q);let Oe=ce.update(C),Pe=C.material;Pe.visible&&y.push(C,Oe,Pe,ne,ue.z,null,X)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(V))){let Oe=ce.update(C),Pe=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ue.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ue.copy(Oe.boundingSphere.center)),ue.applyMatrix4(C.matrixWorld).applyMatrix4(q)),Array.isArray(Pe)){let ze=Oe.groups;for(let Xe=0,at=ze.length;Xe<at;Xe++){let pt=ze[Xe],ke=Pe[pt.materialIndex];ke&&ke.visible&&y.push(C,Oe,ke,ne,ue.z,pt,X)}}else Pe.visible&&y.push(C,Oe,Pe,ne,ue.z,null,X)}}let Ie=C.children;for(let Oe=0,Pe=Ie.length;Oe<Pe;Oe++)Jc(Ie[Oe],X,ne,j)}function Bu(C,X,ne,j){let{opaque:ee,transmissive:Ie,transparent:Oe}=C;E.setupLightsView(ne),Q===!0&&Ve.setGlobalState(T.clippingPlanes,ne),j&&w.viewport(U.copy(j)),ee.length>0&&ya(ee,X,ne),Ie.length>0&&ya(Ie,X,ne),Oe.length>0&&ya(Oe,X,ne),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Ou(C,X,ne,j){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[j.id]===void 0){let ke=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[j.id]=new Qt(1,1,{generateMipmaps:!0,type:ke?dn:Dn,minFilter:Ni,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Ie=E.state.transmissionRenderTarget[j.id],Oe=j.viewport||U;Ie.setSize(Oe.z*T.transmissionResolutionScale,Oe.w*T.transmissionResolutionScale);let Pe=T.getRenderTarget(),ze=T.getActiveCubeFace(),Xe=T.getActiveMipmapLevel();T.setRenderTarget(Ie),T.getClearColor(de),ge=T.getClearAlpha(),ge<1&&T.setClearColor(16777215,.5),T.clear(),Se&&nt.render(ne);let at=T.toneMapping;T.toneMapping=vi;let pt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),E.setupLightsView(j),Q===!0&&Ve.setGlobalState(T.clippingPlanes,j),ya(C,ne,j),re.updateMultisampleRenderTarget(Ie),re.updateRenderTargetMipmap(Ie),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let bt=0,ln=X.length;bt<ln;bt++){let Ot=X[bt],{object:Lt,geometry:Rn,material:Be,group:Fn}=Ot;if(Be.side===xt&&Lt.layers.test(j.layers)){let vt=Be.side;Be.side=$t,Be.needsUpdate=!0,Hu(Lt,ne,j,Rn,Be,Fn),Be.side=vt,Be.needsUpdate=!0,ke=!0}}ke===!0&&(re.updateMultisampleRenderTarget(Ie),re.updateRenderTargetMipmap(Ie))}T.setRenderTarget(Pe,ze,Xe),T.setClearColor(de,ge),pt!==void 0&&(j.viewport=pt),T.toneMapping=at}function ya(C,X,ne){let j=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,Ie=C.length;ee<Ie;ee++){let Oe=C[ee],{object:Pe,geometry:ze,group:Xe}=Oe,at=Oe.material;at.allowOverride===!0&&j!==null&&(at=j),Pe.layers.test(ne.layers)&&Hu(Pe,X,ne,ze,at,Xe)}}function Hu(C,X,ne,j,ee,Ie){L!==null&&ee.isNodeMaterial&&L.setObject(C,ee),C.onBeforeRender(T,X,ne,j,ee,Ie),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(T,X,ne,j,C,Ie),ee.transparent===!0&&ee.side===xt&&ee.forceSinglePass===!1?(ee.side=$t,ee.needsUpdate=!0,T.renderBufferDirect(ne,X,j,ee,C,Ie),ee.side=es,ee.needsUpdate=!0,T.renderBufferDirect(ne,X,j,ee,C,Ie),ee.side=xt):T.renderBufferDirect(ne,X,j,ee,C,Ie),C.onAfterRender(T,X,ne,j,ee,Ie)}function va(C,X,ne){X.isScene!==!0&&(X=xe);let j=$.get(C),ee=E.state.lights,Ie=E.state.shadowsArray,Oe=ee.state.version,Pe=ye.getParameters(C,ee.state,Ie,X,ne,E.state.lightProbeGridArray),ze=ye.getProgramCacheKey(Pe),Xe=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,j.fog=X.fog;let at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=me.get(C.envMap||j.environment,at),j.envMapRotation=j.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",Tn),Xe=new Map,j.programs=Xe);let pt=Xe.get(ze);if(pt!==void 0){if(j.currentProgram===pt&&j.lightsStateVersion===Oe)return ku(C,Pe),pt}else Pe.uniforms=ye.getUniforms(C),L!==null&&C.isNodeMaterial&&L.build(C,ne,Pe),C.onBeforeCompile(Pe,T),pt=ye.acquireProgram(Pe,ze),Xe.set(ze,pt),j.uniforms=Pe.uniforms;let ke=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=Ve.uniform),ku(C,Pe),j.needsLights=Gp(C),j.lightsStateVersion=Oe,j.needsLights&&(ke.ambientLightColor.value=ee.state.ambient,ke.lightProbe.value=ee.state.probe,ke.sunLights.value=ee.state.sun,ke.sunLightShadows.value=ee.state.sunShadow,ke.directionalLights.value=ee.state.directional,ke.directionalLightShadows.value=ee.state.directionalShadow,ke.spotLights.value=ee.state.spot,ke.spotLightShadows.value=ee.state.spotShadow,ke.rectAreaLights.value=ee.state.rectArea,ke.ltc_1.value=ee.state.rectAreaLTC1,ke.ltc_2.value=ee.state.rectAreaLTC2,ke.pointLights.value=ee.state.point,ke.pointLightShadows.value=ee.state.pointShadow,ke.hemisphereLights.value=ee.state.hemi,ke.sunShadowMatrix.value=ee.state.sunShadowMatrix,ke.sunShadowCascade.value=ee.state.sunShadowCascade,ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ke.spotLightMatrix.value=ee.state.spotLightMatrix,ke.spotLightMap.value=ee.state.spotLightMap,ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),j.lightProbeGrid=E.state.lightProbeGridArray.length>0,j.currentProgram=pt,j.uniformsList=null,pt}function zu(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=Gr.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function ku(C,X){let ne=$.get(C);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function Hp(C,X){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;M.setFromMatrixPosition(X.matrixWorld);for(let ne=0,j=C.length;ne<j;ne++){let ee=C[ne];if(ee.texture!==null&&ee.boundingBox.containsPoint(M))return ee}return null}function zp(C,X,ne,j,ee){X.isScene!==!0&&(X=xe),re.resetTextureUnits();let Ie=X.fog,Oe=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?X.environment:null,Pe=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ft.workingColorSpace,ze=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Xe=me.get(j.envMap||Oe,ze),at=j.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pt=!!ne.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!ne.morphAttributes.position,bt=!!ne.morphAttributes.normal,ln=!!ne.morphAttributes.color,Ot=vi;j.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ot=T.toneMapping);let Lt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Rn=Lt!==void 0?Lt.length:0,Be=$.get(j),Fn=E.state.lights;if(Q===!0&&(te===!0||C!==G)){let Nt=C===G&&j.id===B;Ve.setState(j,C,Nt)}let vt=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Fn.state.version||Be.outputColorSpace!==Pe||ee.isBatchedMesh&&Be.batching===!1||!ee.isBatchedMesh&&Be.batching===!0||ee.isBatchedMesh&&Be.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Be.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Be.instancing===!1||!ee.isInstancedMesh&&Be.instancing===!0||ee.isSkinnedMesh&&Be.skinning===!1||!ee.isSkinnedMesh&&Be.skinning===!0||ee.isInstancedMesh&&Be.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Be.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Be.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Be.instancingMorph===!1&&ee.morphTexture!==null||Be.envMap!==Xe||j.fog===!0&&Be.fog!==Ie||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ve.numPlanes||Be.numIntersection!==Ve.numIntersection)||Be.vertexAlphas!==at||Be.vertexTangents!==pt||Be.morphTargets!==ke||Be.morphNormals!==bt||Be.morphColors!==ln||Be.toneMapping!==Ot||Be.morphTargetsCount!==Rn||!!Be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Be.__version=j.version);let ei=Be.currentProgram;vt===!0&&(ei=va(j,X,ee),L&&j.isNodeMaterial&&L.onUpdateProgram(j,ei,Be));let wi=!1,as=!1,nr=!1,At=ei.getUniforms(),en=Be.uniforms;if(w.useProgram(ei.program)&&(wi=!0,as=!0,nr=!0),j.id!==B&&(B=j.id,as=!0),Be.needsLights){let Nt=Hp(E.state.lightProbeGridArray,ee);Be.lightProbeGrid!==Nt&&(Be.lightProbeGrid=Nt,as=!0)}if(wi||G!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(k,"projectionMatrix",C.projectionMatrix),At.setValue(k,"viewMatrix",C.matrixWorldInverse);let cs=At.map.cameraPosition;cs!==void 0&&cs.setValue(k,se.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&At.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,as=!0,nr=!0)}if(Be.needsLights&&(Fn.state.sunShadowMap.length>0&&At.setValue(k,"sunShadowMap",Fn.state.sunShadowMap,re),Fn.state.directionalShadowMap.length>0&&At.setValue(k,"directionalShadowMap",Fn.state.directionalShadowMap,re),Fn.state.spotShadowMap.length>0&&At.setValue(k,"spotShadowMap",Fn.state.spotShadowMap,re),Fn.state.pointShadowMap.length>0&&At.setValue(k,"pointShadowMap",Fn.state.pointShadowMap,re)),ee.isSkinnedMesh){At.setOptional(k,ee,"bindMatrix"),At.setOptional(k,ee,"bindMatrixInverse");let Nt=ee.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),At.setValue(k,"boneTexture",Nt.boneTexture,re))}ee.isBatchedMesh&&(At.setOptional(k,ee,"batchingTexture"),At.setValue(k,"batchingTexture",ee._matricesTexture,re),At.setOptional(k,ee,"batchingIdTexture"),At.setValue(k,"batchingIdTexture",ee._indirectTexture,re),At.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&At.setValue(k,"batchingColorTexture",ee._colorsTexture,re));let ls=ne.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&W.update(ee,ne,ei),(as||Be.receiveShadow!==ee.receiveShadow)&&(Be.receiveShadow=ee.receiveShadow,At.setValue(k,"receiveShadow",ee.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&X.environment!==null&&(en.envMapIntensity.value=X.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Xy()),as){if(At.setValue(k,"toneMappingExposure",T.toneMappingExposure),Be.needsLights&&kp(en,nr),Ie&&j.fog===!0&&Re.refreshFogUniforms(en,Ie),Re.refreshMaterialUniforms(en,j,ie,K,E.state.transmissionRenderTarget[C.id]),Be.needsLights&&Be.lightProbeGrid){let Nt=Be.lightProbeGrid;en.probesSH.value=Nt.texture,en.probesMin.value.copy(Nt.boundingBox.min),en.probesMax.value.copy(Nt.boundingBox.max),en.probesResolution.value.copy(Nt.resolution)}Gr.upload(k,zu(Be),en,re)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Gr.upload(k,zu(Be),en,re),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(k,"center",ee.center),At.setValue(k,"modelViewMatrix",ee.modelViewMatrix),At.setValue(k,"normalMatrix",ee.normalMatrix),At.setValue(k,"modelMatrix",ee.matrixWorld),j.uniformsGroups!==void 0){let Nt=j.uniformsGroups;for(let cs=0,ir=Nt.length;cs<ir;cs++){let Vu=Nt[cs];fe.update(Vu,ei),fe.bind(Vu,ei)}}return ei}function kp(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.sunLights.needsUpdate=X,C.sunLightShadows.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Gp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,X,ne){let j=$.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),$.get(C.texture).__webglTexture=X,$.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ne,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){let ne=$.get(C);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ne=0){H=C,z=X,O=ne;let j=null,ee=!1,Ie=!1;if(C){let Pe=$.get(C);if(Pe.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(k.FRAMEBUFFER,Pe.__webglFramebuffer),U.copy(C.viewport),J.copy(C.scissor),Y=C.scissorTest,w.viewport(U),w.scissor(J),w.setScissorTest(Y),B=-1;return}else if(Pe.__webglFramebuffer===void 0)re.setupRenderTarget(C);else if(Pe.__hasExternalTextures)re.rebindTextures(C,$.get(C.texture).__webglTexture,$.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let at=C.depthTexture;if(Pe.__boundDepthTexture!==at){if(at!==null&&$.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(C)}}let ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ie=!0);let Xe=$.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?j=Xe[X][ne]:j=Xe[X],ee=!0):C.samples>0&&re.useMultisampledRTT(C)===!1?j=$.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[ne]:j=Xe,U.copy(C.viewport),J.copy(C.scissor),Y=C.scissorTest}else U.copy(Ee).multiplyScalar(ie).floor(),J.copy(Ge).multiplyScalar(ie).floor(),Y=et;if(ne!==0&&(j=N),w.bindFramebuffer(k.FRAMEBUFFER,j)&&w.drawBuffers(C,j),w.viewport(U),w.scissor(J),w.setScissorTest(Y),ee){let Pe=$.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,ne)}else if(Ie){let Pe=X;for(let ze=0;ze<C.textures.length;ze++){let Xe=$.get(C.textures[ze]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ze,Xe.__webglTexture,ne,Pe)}}else if(C!==null&&ne!==0){let Pe=$.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pe.__webglTexture,ne)}B=-1};function Gu(C){let X=$.get(C);return(X.__readFormat!==C.format||X.__readType!==C.type)&&(X.__readFormat=C.format,X.__readType=C.type,X.__formatReadable=F.textureFormatReadable(C.format),X.__typeReadable=F.textureTypeReadable(C.type)),X}this.readRenderTargetPixels=function(C,X,ne,j,ee,Ie,Oe,Pe=0){if(!(C&&C.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){w.bindFramebuffer(k.FRAMEBUFFER,ze);try{let Xe=C.textures[Pe],at=Xe.format,pt=Xe.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe);let ke=Gu(Xe);if(ke.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-j&&ne>=0&&ne<=C.height-ee&&k.readPixels(X,ne,j,ee,Me.convert(at),Me.convert(pt),Ie)}finally{let Xe=H!==null?$.get(H).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,X,ne,j,ee,Ie,Oe,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(X>=0&&X<=C.width-j&&ne>=0&&ne<=C.height-ee){w.bindFramebuffer(k.FRAMEBUFFER,ze);let Xe=C.textures[Pe],at=Xe.format,pt=Xe.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe);let ke=Gu(Xe);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,bt),k.bufferData(k.PIXEL_PACK_BUFFER,Ie.byteLength,k.STREAM_READ),k.readPixels(X,ne,j,ee,Me.convert(at),Me.convert(pt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let ln=H!==null?$.get(H).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,ln);let Ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await rd(k,Ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,bt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ie),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(bt),k.deleteSync(Ot),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ne=0){let j=Math.pow(2,-ne),ee=Math.floor(C.image.width*j),Ie=Math.floor(C.image.height*j),Oe=X!==null?X.x:0,Pe=X!==null?X.y:0;re.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,Oe,Pe,ee,Ie),w.unbindTexture()},this.copyTextureToTexture=function(C,X,ne=null,j=null,ee=0,Ie=0){let Oe,Pe,ze,Xe,at,pt,ke,bt,ln,Ot=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(ne!==null)Oe=ne.max.x-ne.min.x,Pe=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,Xe=ne.min.x,at=ne.min.y,pt=ne.isBox3?ne.min.z:0;else{let en=Math.pow(2,-ee);Oe=Math.floor(Ot.width*en),Pe=Math.floor(Ot.height*en),C.isDataArrayTexture?ze=Ot.depth:C.isData3DTexture?ze=Math.floor(Ot.depth*en):ze=1,Xe=0,at=0,pt=0}j!==null?(ke=j.x,bt=j.y,ln=j.z):(ke=0,bt=0,ln=0);let Lt=Me.convert(X.format),Rn=Me.convert(X.type),Be;X.isData3DTexture?(re.setTexture3D(X,0),Be=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(re.setTexture2DArray(X,0),Be=k.TEXTURE_2D_ARRAY):(re.setTexture2D(X,0),Be=k.TEXTURE_2D),w.activeTexture(k.TEXTURE0),w.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let Fn=w.getParameter(k.UNPACK_ROW_LENGTH),vt=w.getParameter(k.UNPACK_IMAGE_HEIGHT),ei=w.getParameter(k.UNPACK_SKIP_PIXELS),wi=w.getParameter(k.UNPACK_SKIP_ROWS),as=w.getParameter(k.UNPACK_SKIP_IMAGES);w.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Xe),w.pixelStorei(k.UNPACK_SKIP_ROWS,at),w.pixelStorei(k.UNPACK_SKIP_IMAGES,pt);let nr=C.isDataArrayTexture||C.isData3DTexture,At=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){let en=$.get(C),ls=$.get(X),Nt=$.get(en.__renderTarget),cs=$.get(ls.__renderTarget);w.bindFramebuffer(k.READ_FRAMEBUFFER,Nt.__webglFramebuffer),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let ir=0;ir<ze;ir++)nr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(C).__webglTexture,ee,pt+ir),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(X).__webglTexture,Ie,ln+ir)),k.blitFramebuffer(Xe,at,Oe,Pe,ke,bt,Oe,Pe,k.DEPTH_BUFFER_BIT,k.NEAREST);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||$.has(C)){let en=$.get(C),ls=$.get(X);w.bindFramebuffer(k.READ_FRAMEBUFFER,R),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,D);for(let Nt=0;Nt<ze;Nt++)nr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,en.__webglTexture,ee,pt+Nt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,en.__webglTexture,ee),At?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ls.__webglTexture,Ie,ln+Nt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ls.__webglTexture,Ie),ee!==0?k.blitFramebuffer(Xe,at,Oe,Pe,ke,bt,Oe,Pe,k.COLOR_BUFFER_BIT,k.NEAREST):At?k.copyTexSubImage3D(Be,Ie,ke,bt,ln+Nt,Xe,at,Oe,Pe):k.copyTexSubImage2D(Be,Ie,ke,bt,Xe,at,Oe,Pe);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else At?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Be,Ie,ke,bt,ln,Oe,Pe,ze,Lt,Rn,Ot.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Be,Ie,ke,bt,ln,Oe,Pe,ze,Lt,Ot.data):k.texSubImage3D(Be,Ie,ke,bt,ln,Oe,Pe,ze,Lt,Rn,Ot):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ie,ke,bt,Oe,Pe,Lt,Rn,Ot.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ie,ke,bt,Ot.width,Ot.height,Lt,Ot.data):k.texSubImage2D(k.TEXTURE_2D,Ie,ke,bt,Oe,Pe,Lt,Rn,Ot);w.pixelStorei(k.UNPACK_ROW_LENGTH,Fn),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),w.pixelStorei(k.UNPACK_SKIP_PIXELS,ei),w.pixelStorei(k.UNPACK_SKIP_ROWS,wi),w.pixelStorei(k.UNPACK_SKIP_IMAGES,as),Ie===0&&X.generateMipmaps&&k.generateMipmap(Be),w.unbindTexture()},this.initRenderTarget=function(C){$.get(C).__webglFramebuffer===void 0&&re.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?re.setTextureCube(C,0):C.isData3DTexture?re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?re.setTexture2DArray(C,0):re.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){z=0,O=0,H=null,w.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Xr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},qy=new vs(-1,1,1,-1,0,1),Mu=class extends rt{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}},Yy=new Mu,Ts=class{constructor(e){this._mesh=new Te(Yy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Sc=class extends Jn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Si.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ts(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var la=class extends Jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ec=class extends Jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var bc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sc(Xr),this.copyPass.material.blending=si,this.timer=new Vo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}la!==void 0&&(o instanceof la?n=!0:o instanceof Ec&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tc=class extends Jn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ae}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Vd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var qr=class i extends Jn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:dn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Qt(r,o,{type:dn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Qt(r,o,{type:dn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Vd;this.highPassUniforms=Si.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Si.clone(Xr.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader,premultipliedAlpha:!0,blending:Tt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ae,this._oldClearAlpha=1,this._basic=new Mt,this._fsQuad=new Ts(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ht({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};qr.BlurDirectionX=new le(1,0);qr.BlurDirectionY=new le(0,1);var ca={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var wc=class extends Jn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Si.clone(ca.uniforms),this.material=new Dr({name:ca.name,uniforms:this.uniforms,vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader}),this._fsQuad=new Ts(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function $n(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new rt,c=0;for(let h=0;h<i.length;++h){let d=i[h],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0,d=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Wd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][f]);let p=Wd(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Wd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new yt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){let _=h.getComponent(f,p);a.setComponent(f+d,p,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Xt=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),fn=(i,e,t)=>i+(e-i)*t,Ne=(i,e,t)=>{let n=Xt((t-i)/(e-i));return n*n*(3-2*n)},qd=i=>(i=Xt(i),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2),Ei=(i,e,t,n,s)=>Ne(e,t,i)*(1-Ne(n,s,i));function Pt(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Yr=class{constructor(e){this.t=e.map(t=>t[0]),this.v=e.map(t=>t[1]),this.vec=typeof e[0][1]!="number"}at(e,t){let{t:n,v:s}=this,r=n.length;if(e<=n[0])return this.vec?t.copy(s[0]):s[0];if(e>=n[r-1])return this.vec?t.copy(s[r-1]):s[r-1];let o=0;for(;e>n[o+1];)o++;let a=n[o],l=n[o+1],c=l-a,h=(e-a)/c,d=h*h,f=d*h,u=2*f-3*d+1,p=f-2*d+h,_=-2*f+3*d,m=f-d,g=M=>M<=0||M>=r-1?null:[M-1,M+1,n[M+1]-n[M-1]],v=g(o),A=g(o+1);if(!this.vec){let M=v?(s[v[1]]-s[v[0]])/v[2]*c:0,y=A?(s[A[1]]-s[A[0]])/A[2]*c:0;return u*s[o]+p*M+_*s[o+1]+m*y}return t.set(0,0,0).addScaledVector(s[o],u).addScaledVector(s[o+1],_),v&&t.addScaledVector(Xd.subVectors(s[v[1]],s[v[0]]),p*c/v[2]),A&&t.addScaledVector(Xd.subVectors(s[A[1]],s[A[0]]),m*c/A[2]),t}},Xd=new I,gn=(i,e,t)=>new I(i,e,t),It=i=>new ae(i);function an(i,e,t={}){let n=i.map(r=>{let o=r.index?r.toNonIndexed():r;o.attributes.uv||o.setAttribute("uv",new yt(new Float32Array(o.attributes.position.count*2),2));for(let a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);return o}),s=new Te($n(n,!1),e);return s.castShadow=!!t.cast,s.receiveShadow=!!t.receive,s}function qe(i,{x:e=0,y:t=0,z:n=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1}={}){let h=new it().compose(new I(e,t,n),new Gt().setFromEuler(new Zt(s,r,o)),new I(a,l,c));return i.applyMatrix4(h)}var Yd=1,Zd=i=>{Yd=i};function Mn(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Wn(i,{srgb:e=!0,repeat:t=!1}={}){let n=new ii(i);return e&&(n.colorSpace=tn),t&&(n.wrapS=n.wrapT=Zi),n.anisotropy=Yd,n}function Rc(i,e=2){let t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,[r,o]=Mn(t,n),a=o.createImageData(t,n),l=a.data,c=(h,d)=>s[((d+n)%n*t+(h+t)%t)*4]/255;for(let h=0;h<n;h++)for(let d=0;d<t;d++){let f=c(d+1,h-1)+2*c(d+1,h)+c(d+1,h+1)-(c(d-1,h-1)+2*c(d-1,h)+c(d-1,h+1)),u=c(d-1,h+1)+2*c(d,h+1)+c(d+1,h+1)-(c(d-1,h-1)+2*c(d,h-1)+c(d+1,h-1)),p=-f*e,_=u*e,m=1,g=Math.hypot(p,_,m),v=(h*t+d)*4;l[v]=(p/g*.5+.5)*255,l[v+1]=(_/g*.5+.5)*255,l[v+2]=(m/g*.5+.5)*255,l[v+3]=255}return o.putImageData(a,0,0),Wn(r,{srgb:!1,repeat:!0})}function Su(i,e,t,n,s,r,o,a){let l=Pt(o);for(let c=0;c<n;c++)i.globalAlpha=r*(.4+l()*.6),i.fillStyle=a[Math.floor(l()*a.length)],i.beginPath(),i.arc(l()*e,l()*t,s*(.3+l()),0,Math.PI*2),i.fill();i.globalAlpha=1}function Cc({base:i=[236,228,250],seed:e=7}={}){let s=Pt(e),[r,o]=Mn(512),[a,l]=Mn(512);o.fillStyle=`rgb(${i.map(h=>h-34).join(",")})`,o.fillRect(0,0,512,512),l.fillStyle="#000",l.fillRect(0,0,512,512);let c=512/8;for(let h=0;h<8;h++){let u=h%2*128/2;for(let p=-1;p<4;p++){let _=p*128+u+3,m=h*c+3,g=122,v=c-6,A=(s()-.5)*26,M=s()<.18?[-6,-10,4]:[0,0,0],y=o.createLinearGradient(_,m,_+g*.3,m+v);y.addColorStop(0,`rgb(${i.map((b,x)=>Math.round(b+A+8+M[x])).join(",")})`),y.addColorStop(1,`rgb(${i.map((b,x)=>Math.round(b+A-10+M[x])).join(",")})`),o.fillStyle=y,Ac(o,_,m,g,v,7),o.fill();let E=l.createRadialGradient(_+g/2,m+v/2,4,_+g/2,m+v/2,g*.62);E.addColorStop(0,"#fff"),E.addColorStop(1,"#9a9a9a"),l.fillStyle=E,Ac(l,_,m,g,v,9),l.fill()}}return Su(o,512,512,2600,1.6,.16,e+1,["#8a7aa8","#ffffff","#6d5f8a"]),Su(l,512,512,2600,1.4,.25,e+2,["#000","#fff"]),{map:Wn(r,{repeat:!0}),normalMap:Rc(a,2.2)}}function Ac(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function Pc(i,e=3){let r=Pt(e),[o,a]=Mn(512),[l,c]=Mn(512),h=new ae(i);a.fillStyle="#"+h.clone().multiplyScalar(.55).getHexString(),a.fillRect(0,0,512,512),c.fillStyle="#000",c.fillRect(0,0,512,512);let d=512/8,f=512/10;for(let u=-1;u<=10;u++)for(let p=-1;p<=8;p++){let _=p*d+(u%2?d/2:0)+d/2,m=u*f,g=.85+r()*.3,v=a.createLinearGradient(0,m,0,m+f*1.6);v.addColorStop(0,"#"+h.clone().multiplyScalar(1.15*g).getHexString()),v.addColorStop(.7,"#"+h.clone().multiplyScalar(.95*g).getHexString()),v.addColorStop(1,"#"+h.clone().multiplyScalar(.62*g).getHexString());let A=y=>{y.beginPath(),y.moveTo(_-d/2,m),y.lineTo(_-d/2,m+f*.9),y.quadraticCurveTo(_-d/2,m+f*1.6,_,m+f*1.62),y.quadraticCurveTo(_+d/2,m+f*1.6,_+d/2,m+f*.9),y.lineTo(_+d/2,m),y.closePath()};a.fillStyle=v,A(a),a.fill(),a.strokeStyle="rgba(0,0,0,0.25)",a.lineWidth=2,A(a),a.stroke();let M=c.createLinearGradient(0,m,0,m+f*1.6);M.addColorStop(0,"#666"),M.addColorStop(1,"#fff"),c.fillStyle=M,A(c),c.fill()}return{map:Wn(o,{repeat:!0}),normalMap:Rc(l,1.6)}}function Jd(i=11){let t=Pt(i),[n,s]=Mn(512),[r,o]=Mn(512);s.fillStyle="#4a4560",s.fillRect(0,0,512,512),o.fillStyle="#000",o.fillRect(0,0,512,512);let a=9,l=512/a;for(let c=0;c<a;c++)for(let h=-1;h<=a;h++){let d=l*(.78+t()*.14),f=l*(.72+t()*.14),u=h*l+c%2*l/2+l/2+(t()-.5)*6,p=c*l+l/2+(t()-.5)*6,_=150+t()*50,m=s.createRadialGradient(u-d*.15,p-f*.2,2,u,p,d*.6);m.addColorStop(0,`rgb(${_+12},${_+6},${_+30})`),m.addColorStop(1,`rgb(${_-40},${_-44},${_-20})`),s.fillStyle=m,Ac(s,u-d/2,p-f/2,d,f,14),s.fill();let g=o.createRadialGradient(u,p,2,u,p,d*.6);g.addColorStop(0,"#fff"),g.addColorStop(1,"#555"),o.fillStyle=g,Ac(o,u-d/2,p-f/2,d,f,14),o.fill()}return Su(s,512,512,1600,1.4,.18,i+3,["#000","#fff"]),{map:Wn(n,{repeat:!0}),normalMap:Rc(r,2.5)}}function $d(i=5){let t=Pt(i),[n,s]=Mn(512),[r,o]=Mn(512);s.fillStyle="#3c7a3a",s.fillRect(0,0,512,512),o.fillStyle="#808080",o.fillRect(0,0,512,512);for(let a=0;a<260;a++){let l=t()*512,c=t()*512,h=20+t()*60,d=s.createRadialGradient(l,c,0,l,c,h),f=t()<.5?"70,140,62":"42,98,52";d.addColorStop(0,`rgba(${f},0.35)`),d.addColorStop(1,`rgba(${f},0)`),s.fillStyle=d;for(let u of[-512,0,512])for(let p of[-512,0,512])s.save(),s.translate(u,p),s.fillRect(l-h,c-h,h*2,h*2),s.restore()}s.lineCap="round";for(let a=0;a<9e3;a++){let l=t()*512,c=t()*512,h=3+t()*6,d=-Math.PI/2+(t()-.5)*.9,f=t();s.strokeStyle=f<.5?`rgba(120,190,100,${.25+t()*.3})`:`rgba(20,60,30,${.2+t()*.3})`,s.lineWidth=1+t(),s.beginPath(),s.moveTo(l,c),s.lineTo(l+Math.cos(d)*h,c+Math.sin(d)*h),s.stroke(),o.strokeStyle=f<.5?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)",o.lineWidth=1.5,o.beginPath(),o.moveTo(l,c),o.lineTo(l+Math.cos(d)*h,c+Math.sin(d)*h),o.stroke()}return{map:Wn(n,{repeat:!0}),normalMap:Rc(r,1.2)}}function Ic(){let[e,t]=Mn(256);t.fillStyle="#a3103d",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,170,200,0.22)",t.lineWidth=3;for(let n=-256;n<=256*2;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n+256,256),t.stroke(),t.beginPath(),t.moveTo(n,256),t.lineTo(n+256,0),t.stroke();t.fillStyle="rgba(255,215,120,0.35)";for(let n=0;n<=256;n+=64)for(let s=0;s<=256;s+=64)t.beginPath(),t.arc(s,n,4,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(s+32,n+32,3,0,Math.PI*2),t.fill();return Wn(e,{repeat:!0})}function Kn(i=2){let[t,n]=Mn(128),s=n.createImageData(128,128),r=s.data;for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=Math.hypot(a-64+.5,o-64+.5)/64,c=Math.pow(Math.max(0,1-l),i),h=(o*128+a)*4;r[h]=r[h+1]=r[h+2]=255,r[h+3]=c*255}return n.putImageData(s,0,0),Wn(t,{srgb:!1})}function ws(){let[e,t]=Mn(128);t.translate(128/2,128/2);let n=t.createRadialGradient(0,0,0,0,0,128/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(-128/2,-128/2,128,128),t.fillStyle="#fff";for(let s=0;s<2;s++)t.save(),t.rotate(s*Math.PI/2),t.beginPath(),t.moveTo(0,-128/2),t.quadraticCurveTo(3,-3,128/2,0),t.quadraticCurveTo(3,3,0,128/2),t.quadraticCurveTo(-3,3,-128/2,0),t.quadraticCurveTo(-3,-3,0,-128/2),t.fill(),t.restore();return Wn(e,{srgb:!1})}function Lc(){let[t,n]=Mn(64,128),s=()=>{n.beginPath(),n.moveTo(4,126),n.lineTo(4,64/2),n.arc(64/2,64/2,64/2-4,Math.PI,0),n.lineTo(60,126),n.closePath()},r=n.createLinearGradient(0,0,0,128);return r.addColorStop(0,"#fff3c4"),r.addColorStop(.6,"#ffc65a"),r.addColorStop(1,"#ff9a3c"),n.fillStyle=r,s(),n.fill(),n.strokeStyle="#5a3a1c",n.lineWidth=5,s(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(64/2,6),n.lineTo(64/2,126),n.moveTo(4,128*.55),n.lineTo(60,128*.55),n.stroke(),Wn(t)}function Kd(){let e=Pt(21),[t,n]=Mn(256),s=n.createRadialGradient(256*.45,256*.42,0,256/2,256/2,256/2);s.addColorStop(0,"#fffdf2"),s.addColorStop(.85,"#f3ecd6"),s.addColorStop(1,"rgba(243,236,214,0)"),n.fillStyle=s,n.beginPath(),n.arc(256/2,256/2,256/2-2,0,Math.PI*2),n.fill(),n.save(),n.beginPath(),n.arc(256/2,256/2,256/2-4,0,Math.PI*2),n.clip();for(let r=0;r<14;r++){let o=256*(.2+e()*.6),a=256*(.2+e()*.6),l=256*(.04+e()*.12),c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(190,180,170,0.45)"),c.addColorStop(1,"rgba(190,180,170,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,l*2,l*2)}return n.restore(),Wn(t)}function Zr(i="#5b2fb0",e="#ff7eb3"){let[s,r]=Mn(256,640),o=()=>{r.beginPath(),r.moveTo(0,0),r.lineTo(256,0),r.lineTo(256,640),r.lineTo(256/2,530),r.lineTo(0,640),r.closePath()},a=r.createLinearGradient(0,0,256,0),l=new ae(i);a.addColorStop(0,"#"+l.clone().multiplyScalar(.7).getHexString()),a.addColorStop(.5,i),a.addColorStop(1,"#"+l.clone().multiplyScalar(.7).getHexString()),r.fillStyle=a,o(),r.fill(),r.save(),o(),r.clip(),r.strokeStyle="#f6c548",r.lineWidth=22,o(),r.stroke(),r.strokeStyle="#fff0b0",r.lineWidth=4,r.beginPath(),r.moveTo(24,24),r.lineTo(232,24),r.lineTo(232,600),r.lineTo(256/2,500),r.lineTo(24,600),r.closePath(),r.stroke(),r.restore(),r.save(),r.translate(256/2,200),r.fillStyle="#f6c548",r.strokeStyle="#a8740f",r.lineWidth=5,r.lineJoin="round",r.beginPath(),r.moveTo(-70,40),r.lineTo(-80,-40),r.lineTo(-40,-5),r.lineTo(0,-60),r.lineTo(40,-5),r.lineTo(80,-40),r.lineTo(70,40),r.closePath(),r.fill(),r.stroke(),r.fillStyle="#fff6d0";for(let[c,h]of[[-80,-40],[0,-60],[80,-40]])r.beginPath(),r.arc(c,h,9,0,Math.PI*2),r.fill();return r.fillStyle="#e53950",r.beginPath(),r.arc(0,12,11,0,Math.PI*2),r.fill(),r.fillStyle="#4fa8ff",r.beginPath(),r.arc(-40,18,8,0,Math.PI*2),r.arc(40,18,8,0,Math.PI*2),r.fill(),r.restore(),r.save(),r.translate(256/2,340),r.fillStyle=e,r.strokeStyle="#fff0b0",r.lineWidth=5,r.beginPath(),r.moveTo(0,50),r.bezierCurveTo(-90,-10,-40,-70,0,-25),r.bezierCurveTo(40,-70,90,-10,0,50),r.fill(),r.stroke(),r.restore(),Wn(s)}function Qd(){let[e,t]=Mn(64),n=t.createRadialGradient(64*.5,64*.7,2,64*.5,64*.5,64*.55);return n.addColorStop(0,"#ffffff"),n.addColorStop(1,"#d8d8d8"),t.fillStyle=n,t.beginPath(),t.moveTo(64/2,60),t.bezierCurveTo(4,64*.6,8,6,64/2,10),t.bezierCurveTo(56,6,60,64*.6,64/2,60),t.fill(),Wn(e,{srgb:!1})}function jd(i,e=512){return new Promise((t,n)=>{let s=new Image;s.onload=()=>{let[r,o]=Mn(e);o.drawImage(s,0,0,e,e);let a=Wn(r);t(a)},s.onerror=n,s.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i)})}function ep(i=9){let t=Pt(i),[n,s]=Mn(512);s.translate(512/2,512/2),s.globalCompositeOperation="lighter";for(let r=0;r<46;r++){let o=t()*Math.PI*2,a=.012+t()*.05,l=512*(.3+t()*.2),c=s.createLinearGradient(0,0,Math.cos(o)*l,Math.sin(o)*l);c.addColorStop(0,`rgba(255,255,255,${.25+t()*.35})`),c.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=c,s.beginPath(),s.moveTo(0,0),s.lineTo(Math.cos(o-a)*l,Math.sin(o-a)*l),s.lineTo(Math.cos(o+a)*l,Math.sin(o+a)*l),s.closePath(),s.fill()}return Wn(n,{srgb:!1})}function wn(i,e,{closed:t=!1,smooth:n=!0,seg:s,radial:r=10}={}){let o=i.map(c=>c.isVector3?c:new I(c[0],c[1],c[2]||0)),a;if(n)a=new zn(o,t,"centripetal");else{a=new Ir;for(let c=0;c<o.length-1;c++)a.add(new Vs(o[c],o[c+1]));t&&a.add(new Vs(o[o.length-1],o[0]))}return new Ki(a,s||Math.max(8,o.length*8),e,r,t)}function Jr(i,e,t,n,s,r=24,o=0){let a=[];for(let l=0;l<=r;l++){let c=n+(s-n)*l/r;a.push(new I(i+Math.cos(c)*t,e+Math.sin(c)*t,o))}return a}function bu(i,e,t,n,s,r=1,o=0,a=40){let l=[];for(let c=0;c<=a;c++){let h=c/a,d=s+r*h*n*Math.PI*2,f=t*Math.pow(1-h*.82,1.15);l.push(new I(i+Math.cos(d)*f,e+Math.sin(d)*f,o))}return l}function tp(i,e,t=.02,n=12){let s=new Dt(i.map(r=>new le(r[0],r[1])));return new Ln(s,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:n})}function is(i,e,t=.02,n=16){return new Ln(i,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:n})}function $r(i){let e=new Dt,t=i/2;return e.moveTo(0,-.95*t),e.bezierCurveTo(-1.05*t,-.15*t,-.95*t,.85*t,-.42*t,.85*t),e.bezierCurveTo(-.18*t,.85*t,-.02*t,.65*t,0,.5*t),e.bezierCurveTo(.02*t,.65*t,.18*t,.85*t,.42*t,.85*t),e.bezierCurveTo(.95*t,.85*t,1.05*t,-.15*t,0,-.95*t),e}function Dc(i,e=.45){let t=[];for(let n=0;n<10;n++){let s=Math.PI/2+n*Math.PI/5,r=n%2?i*e:i;t.push(new le(Math.cos(s)*r,Math.sin(s)*r))}return new Dt(t)}function ha(i,e){let t=new Dt,n=i/2;return t.moveTo(-n,0),t.lineTo(-n*1.08,e),t.lineTo(-n*.5,e*.52),t.lineTo(0,e*1.2),t.lineTo(n*.5,e*.52),t.lineTo(n*1.08,e),t.lineTo(n,0),t.closePath(),t}function As(i,e,t,{flat:n=.55,center:s=new I,seg:r=28,radial:o=8,tipRound:a=.18,rootRound:l=.12}={}){let c=new zn(i,!1,"centripetal"),h=[],d=[],f=[],u=new I,p=new I,_=new I,m=new I,g=new I;for(let A=0;A<=r;A++){let M=A/r;c.getPointAt(M,u),c.getTangentAt(M,p),_.subVectors(u,s),m.copy(_).addScaledVector(p,-_.dot(p)).normalize(),g.crossVectors(p,m).normalize();let y=e+(t-e)*M;M>1-a&&(y*=Math.sqrt(Math.max(0,1-Math.pow((M-(1-a))/a,2)))),M<l&&(y*=.55+.45*Math.sin(M/l*Math.PI/2)),y=Math.max(y,5e-4);for(let E=0;E<=o;E++){let b=E/o*Math.PI*2;h.push(u.x+(Math.cos(b)*g.x*y+Math.sin(b)*m.x*y*n),u.y+(Math.cos(b)*g.y*y+Math.sin(b)*m.y*y*n),u.z+(Math.cos(b)*g.z*y+Math.sin(b)*m.z*y*n)),d.push(E/o,M)}}for(let A=0;A<r;A++)for(let M=0;M<o;M++){let y=A*(o+1)+M,E=y+o+1;f.push(y,E,y+1,E,E+1,y+1)}let v=new rt;return v.setAttribute("position",new De(h,3)),v.setAttribute("uv",new De(d,2)),v.setIndex(f),v.computeVertexNormals(),v}function Kt(i,e,t=e){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*e,n.getY(s)*t);return i}var mt={};function np(){return mt.gold=new Je({color:"#ffcf6a",metalness:1,roughness:.24}),mt.goldDeep=new Je({color:"#f0b445",metalness:1,roughness:.32}),mt.ruby=Eu("#ff2d55"),mt.sapphire=Eu("#3d8bff"),mt.emerald=Eu("#2fe08a"),mt.pearl=new Jt({color:"#fff3ea",roughness:.35,sheen:1,sheenColor:"#ffd6f0",sheenRoughness:.4}),mt}function Eu(i){return new Jt({color:i,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,emissive:i,emissiveIntensity:.15,ior:2.2,specularIntensity:1,envMapIntensity:1.4})}var ip=[{pr:1,msaa:2,shadow:0,bloom:!0},{pr:1.5,msaa:4,shadow:1024,bloom:!0},{pr:2,msaa:4,shadow:2048,bloom:!0}];function Zy(){let i=(e,t)=>{let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");s.fillStyle="#1c3c78",s.strokeStyle="#1c3c78",s.lineWidth=7,s.lineCap="round";for(let o of[88,168])e||t?(s.beginPath(),s.arc(o,t?148:136,16,t?Math.PI*1.15:.15,t?Math.PI*1.85:Math.PI-.15,!1),s.stroke()):(s.beginPath(),s.ellipse(o,140,15,19,0,0,Math.PI*2),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(o+5,132,5,0,7),s.fill(),s.fillStyle="#1c3c78");s.strokeStyle="#c93d66",s.beginPath(),s.arc(128,172,t?24:18,.2,Math.PI-.2),s.stroke();let r=new ii(n);return r.colorSpace=tn,r};return{open:i(!1,!1),blink:i(!0,!1),laugh:i(!1,!0)}}async function sp(i){if(!i)return Zy();let e={};for(let t of Object.keys(i)){let n=await jd(i[t],512);n.premultiplyAlpha=!0,e[t]=n}return e}function Jy(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d",{willReadFrequently:!0});n.drawImage(i.image,0,0,e,e);let s=n.getImageData(0,0,e,e).data,r=new Uint8Array(s.length),o=[255,219,196];for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=(l*e+c)*4,d=((e-1-l)*e+c)*4,f=Math.min(1,s[h+3]/24);for(let u=0;u<3;u++)r[d+u]=o[u]+(s[h+u]-o[u])*f;r[d+3]=s[h+3]}let a=new Ji(r,e,e,Vn);return a.colorSpace=tn,a.magFilter=nn,a.minFilter=Ni,a.generateMipmaps=!0,a.anisotropy=4,a.userData.plain=!0,a.needsUpdate=!0,a}async function rp(i={}){let e=document.createElement("canvas");e.className="k3d-canvas";let t=new Vr({canvas:e,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});t.toneMapping=Gn,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=Ys,Zd(Math.min(8,t.capabilities.getMaxAnisotropy())),np(),mt.goldDouble=mt.gold.clone(),mt.goldDouble.side=xt;let n=await Promise.all([sp(i.faces&&i.faces.yoovy),sp(i.faces&&i.faces.googy)]),s=new bc(t,new Qt(16,16,{type:dn})),r=new Tc(new Hn,new zt);s.addPass(r);let o=new qr(new le(16,16),.6,.5,1);s.addPass(o),s.addPass(new wc);let a=new Map,l=1,c=2,h=0,d=0,f=null,u=null,p={canvas:e,renderer:t,composer:s,bloom:o,faces:{yoovy:n[0],googy:n[1]},get dayFaces(){return u||(u=n.map(_=>Object.fromEntries(Object.keys(_).map(m=>[m,Jy(_[m])])))),{yoovy:u[0],googy:u[1]}},get px(){return l},get tier(){return c},get show(){return f},get width(){return h},get height(){return d},texture(_,m){return a.has(_)||a.set(_,m()),a.get(_)},isShared(_){for(let m of a.values())if(m===_||m&&(m.map===_||m.normalMap===_))return!0;for(let m of n.concat(u||[]))for(let g in m)if(m[g]===_)return!0;return!1},setTier(_){c=_;let m=ip[_];l=Math.min(window.devicePixelRatio||1,m.pr),s.renderTarget1.samples=m.msaa,s.renderTarget2.samples=0,s.renderTarget1.dispose(),s.renderTarget2.dispose(),t.setPixelRatio(l),s.setPixelRatio(l),o.enabled=m.bloom,f&&f.onTier&&f.onTier(m),h&&(t.setSize(h,d,!1),s.setSize(h,d))},resize(_,m){h=Math.max(2,_|0),d=Math.max(2,m|0),t.setSize(h,d,!1),s.setSize(h,d),f&&f.onResize&&f.onResize(h/d)},use(_){f=_,r.scene=_.scene,r.camera=_.camera,_.onTier&&_.onTier(ip[c]),h&&_.onResize&&_.onResize(h/d)},render(){s.render()},dispose(){for(let _ of a.values())for(let m of[_,_&&_.map,_&&_.normalMap])m&&m.isTexture&&m.dispose();for(let _ of n.concat(u||[]))for(let m in _)_[m].dispose();a.clear(),s.dispose&&s.dispose(),t.dispose(),t.forceContextLoss(),e.remove()}};return p.resize(i.width||640,i.height||360),p.setTier(i.tier??2),p}function Nc(i,e){let t=Object.values(mt);e.traverse(n=>{n.geometry&&n.geometry.dispose();let s=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of s)if(!t.includes(r)){for(let o in r)r[o]&&r[o].isTexture&&!i.isShared(r[o])&&r[o].dispose();r.dispose()}}),e.environment&&e.environment.dispose&&e.environment.dispose()}var Rs=new I(-.34,.36,-.87).normalize(),$y=`
float hash3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise3(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}`;function op(){let i=new Ye;i.name="sky";let e={uZenith:{value:It("#070a2a")},uMid:{value:It("#1d1652")},uHorizon:{value:It("#5a2c78")},uGlow:{value:It("#ff9a5a")},uMoonDir:{value:Rs},uFlash:{value:0},uFlashColor:{value:new ae(1,1,1)}},t=new Te(new je(1e3,48,24),new ht({uniforms:e,side:$t,depthWrite:!1,vertexShader:`varying vec3 vDir;
            void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`uniform vec3 uZenith, uMid, uHorizon, uGlow, uMoonDir, uFlashColor; uniform float uFlash; varying vec3 vDir;
            ${$y}
            void main() {
                vec3 d = normalize(vDir); float h = d.y;
                vec3 c = mix(uHorizon, uMid, smoothstep(-0.04, 0.24, h));
                c = mix(c, uZenith, smoothstep(0.2, 0.9, h));
                // the warm light of the kingdom on the horizon, behind the castle
                float far = pow(max(0.0, -d.z), 4.0);
                c += uGlow * far * (1.0 - smoothstep(-0.02, 0.3, h)) * 0.55;
                // a soft milky way
                vec3 bandN = normalize(vec3(0.55, 0.35, 0.75));
                float band = exp(-pow(dot(d, bandN) / 0.2, 2.0));
                float n = noise3(d * 7.0) * 0.6 + noise3(d * 19.0) * 0.4;
                c += vec3(0.16, 0.12, 0.3) * band * smoothstep(0.35, 0.85, n) * smoothstep(0.05, 0.45, h);
                // the moon's halo
                float m = max(dot(d, uMoonDir), 0.0);
                c += vec3(0.5, 0.56, 0.9) * (pow(m, 30.0) * 0.22 + pow(m, 6.0) * 0.05);
                c = mix(c, uHorizon * 0.5, smoothstep(0.0, -0.25, h));
                c += uFlashColor * uFlash * (0.3 + 0.7 * smoothstep(-0.1, 0.5, h));
                gl_FragColor = vec4(c, 1.0);
            }`}));t.renderOrder=-10,t.frustumCulled=!1,i.add(t);let n=Pt(42),s=1700,r=new Float32Array(s*3),o=new Float32Array(s*3);for(let u=0;u<s;u++){let p;do p=new I(n()*2-1,n()*2-1,n()*2-1);while(p.lengthSq()>1||p.lengthSq()<.01);p.normalize(),p.y<.03&&(p.y=Math.abs(p.y)+.03),p.normalize().multiplyScalar(940),r.set([p.x,p.y,p.z],u*3);let _=Math.pow(n(),3.2);o.set([.8+_*2.8,n()*6.28,.6+n()*2.2],u*3)}let a=new rt;a.setAttribute("position",new yt(r,3)),a.setAttribute("info",new yt(o,3));let l={uTime:{value:0},uPx:{value:1},uFade:{value:1}},c=new yi(a,new ht({uniforms:l,transparent:!0,depthWrite:!1,blending:Tt,vertexShader:`attribute vec3 info; uniform float uTime, uPx; varying float vA;
            void main() {
                vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww;
                float tw = 0.6 + 0.4 * sin(uTime * info.z + info.y);
                vA = tw * clamp(info.x / 2.0, 0.35, 1.0);
                gl_PointSize = info.x * uPx * (0.85 + 0.25 * tw);
            }`,fragmentShader:`uniform float uFade; varying float vA;
            void main() { vec2 q = gl_PointCoord - 0.5; float r = length(q) * 2.0;
                float a = smoothstep(1.0, 0.0, r); a *= a;
                gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA * a * uFade * 1.6, 1.0); }`}));c.renderOrder=-9,c.frustumCulled=!1,i.add(c);let h=Rs.clone().multiplyScalar(900),d=new un(new sn({map:Kd(),color:new ae(1.6,1.55,1.4),fog:!1,depthWrite:!1}));d.position.copy(h),d.scale.setScalar(64),d.renderOrder=-8;let f=new un(new sn({map:Kn(2.6),color:It("#8fa2ff"),fog:!1,depthWrite:!1,blending:Tt,opacity:.55}));return f.position.copy(h).multiplyScalar(.99),f.scale.setScalar(300),f.renderOrder=-8,i.add(f,d),{group:i,uniforms:e,update(u,p,_){i.position.copy(p.position),l.uTime.value=u,l.uPx.value=_}}}function ap(i){let e=new Hn,t=new Te(new je(60,32,16),new ht({side:$t,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; void main() { vec3 d = normalize(vDir);
            vec3 c = mix(vec3(0.16, 0.08, 0.2), vec3(0.025, 0.035, 0.11), smoothstep(-0.05, 0.6, d.y));
            c = mix(c, vec3(0.04, 0.03, 0.05), smoothstep(0.0, -0.3, d.y));
            gl_FragColor = vec4(c, 1.0); }`}));e.add(t);let n=(o,a,l,c,h,d)=>{let f=new Te(new gt(o,a),new Mt({color:l,side:xt}));f.position.set(c,h,d),f.lookAt(0,0,0),e.add(f)};n(40,10,new ae(3.2,2,.8),0,5,-48),n(26,12,new ae(2.4,1.5,.7),0,10,46),n(12,12,new ae(1.3,1.45,2.4),-26,34,-26),n(16,22,new ae(1.5,.55,1.1),-48,6,8),n(16,22,new ae(.8,.6,1.8),48,6,-8),n(30,4,new ae(3.5,3,2.2),0,40,0);let s=new bs(i),r=s.fromScene(e,.035);return s.dispose(),e.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),r}var $e={halfW:3.1,spring:4.6,top:9.5,depth:2.4,towerX:7},jt=[2.5,4.3];function lp(i){let e=new Ye;e.name="gate";let t=new Dt;t.moveTo(-40,0),t.lineTo(-$e.halfW,0),t.lineTo(-$e.halfW,$e.spring),t.absarc(0,$e.spring,$e.halfW,Math.PI,0,!0),t.lineTo($e.halfW,0),t.lineTo(40,0),t.lineTo(40,$e.top),t.lineTo(-40,$e.top),t.closePath();let n=new Ln(t,{depth:$e.depth,bevelEnabled:!1,curveSegments:40});n.translate(0,0,-$e.depth/2),Kt(n,.25);let s=[n];s.push(Kt(qe(new Wt(80,.32,$e.depth+.36),{y:$e.top-.1}),20,.1));for(let T=-39;T<=39;T+=2.2)Math.abs(Math.abs(T)-$e.towerX)<2.9||s.push(Kt(qe(new Wt(1.15,1.2,$e.depth+.1),{x:T,y:$e.top+.6}),.3,.3));let r=tp([[-.55,0],[.55,0],[.75,1.1],[-.75,1.1]],.3,.04);s.push(Kt(qe(r,{y:$e.spring+$e.halfW-.35,z:$e.depth/2-.05}),.25));let o=[],a=[],l=[];for(let T of[-1,1]){let P=T*$e.towerX,L=.5,N=2.1,R=13.6;o.push(Kt(qe(new dt(N,N+.18,R,48,1),{x:P,y:R/2,z:L}),3.4,3.4)),o.push(Kt(qe(new dt(N+.38,N,.7,48,1),{x:P,y:R+.35,z:L}),3.6,.2));for(let D=0;D<14;D++){let z=D/14*Math.PI*2;o.push(Kt(qe(new Wt(.62,.95,.5),{x:P+Math.cos(z)*(N+.2),y:R+1.15,z:L+Math.sin(z)*(N+.2),ry:-z+Math.PI/2}),.2,.25))}a.push(Kt(qe(new Ct(N+.62,6.6,48,1,!0),{x:P,y:R+.75+3.3,z:L}),7,3.2)),l.push(qe(new rn(N+.58,.1,10,64),{x:P,y:R+.8,z:L,rx:Math.PI/2})),l.push(qe(new je(.24,20,14),{x:P,y:R+.75+6.6+.12,z:L})),l.push(qe(new dt(.035,.035,1.5,8),{x:P,y:R+.75+6.6+.9,z:L}))}e.add(an(s,i.stone,{cast:!0,receive:!0})),e.add(an(o,i.stone,{cast:!0,receive:!0})),e.add(an(a,i.roofPurple,{cast:!0}));let c=new gt(.62,1.24);for(let T of[-1,1])for(let P of[6.4,10.4]){let L=new Te(c,i.window);L.position.set(T*$e.towerX,P,.5+2.1+.04),e.add(L)}let h=(T,P)=>[new I(-T,0,P),...Jr(0,$e.spring,T,Math.PI,0,48,P),new I(T,0,P)];l.push(wn(h($e.halfW+.16,$e.depth/2+.02),.13,{smooth:!1,seg:200,radial:12})),l.push(wn(h($e.halfW+.62,$e.depth/2+.02),.06,{smooth:!1,seg:200,radial:8}));for(let T=0;T<=16;T++){let P=Math.PI-T/16*Math.PI,L=$e.halfW+.39;l.push(qe(new je(.07,12,8),{x:Math.cos(P)*L,y:$e.spring+Math.sin(P)*L,z:$e.depth/2+.04}))}let d=is(ha(.7,.42),.08,.02);l.push(qe(d,{y:$e.spring+$e.halfW+.05,z:$e.depth/2+.26})),e.add(an(l,mt.gold,{cast:!0}));let f=new Te(new je(.09,16,12),mt.ruby);f.position.set(0,$e.spring+$e.halfW+.2,$e.depth/2+.36),e.add(f);let u=Qy(i);e.add(u.left.pivot,u.right.pivot);let p=new Dt;p.moveTo(-$e.halfW,0),p.lineTo(-$e.halfW,$e.spring),p.absarc(0,$e.spring,$e.halfW,Math.PI,0,!0),p.lineTo($e.halfW,0),p.closePath();let _=new Mt({color:new ae(1,.8,.5),transparent:!0,depthWrite:!1,fog:!1}),m=new Te(new $i(p,32),_);m.position.z=-.75,m.renderOrder=2,e.add(m);let g=new sn({map:Kn(1.8),color:It("#ffd08a"),blending:Tt,depthWrite:!1,fog:!1,opacity:0}),v=new un(g);v.position.set(0,3.8,-.9),v.scale.set(16,13,1),e.add(v);let A=new Mt({map:ep(),color:It("#ffe2a8"),blending:Tt,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),M=new Te(new gt(1,1),A);M.position.set(0,3.8,-.95),M.scale.setScalar(26),e.add(M);let y=[];for(let T of[-1,1]){let P=Ky(i);P.group.position.set(T*3.95,3.15,$e.depth/2+.38),e.add(P.group);let L=new ji(It("#ffa64a"),9,15,1.5);L.position.set(T*3.95,3.25,$e.depth/2+.75),e.add(L),y.push({...P,light:L,phase:T*1.7})}let E=[],b=[Zr("#5b2fb0","#ff7eb3"),Zr("#c2185b","#ffd54f")];for(let T of[-1,1]){let P=new gt(.86,3.3,1,14);P.translate(0,-1.65,0);let L=new Je({map:b[T<0?0:1],side:xt,alphaTest:.5,roughness:.75}),N=new Te(P,L);N.position.set(T*4.42,8.95,$e.depth/2+.06),N.castShadow=!0,e.add(N);let R=new Te(new dt(.035,.035,1.1,8),mt.gold);R.rotation.z=Math.PI/2,R.position.set(T*4.42,8.97,$e.depth/2+.08),e.add(R),E.push({mesh:N,base:P.attributes.position.array.slice(),phase:T})}let x=new gt(90,46,1,1);Kt(x,30,15);let S=new Te(x,i.cobbles);return S.rotation.x=-Math.PI/2,S.position.set(0,.02,23-1.3),S.receiveShadow=!0,e.add(S),{group:e,doors:u,update(T){let P=qd((T-jt[0])/(jt[1]-jt[0])),L=T>jt[0]-.25&&T<jt[0]?Math.sin(T*70)*.004:0,N=P*1.78+L;u.left.pivot.rotation.y=N,u.right.pivot.rotation.y=-N;let R=.55+.12*Math.sin(T*3.1)+.06*Math.sin(T*7.3),D=Ne(jt[0]-.05,jt[0]+.45,T),z=Ne(jt[0]+.25,jt[0]+.75,T),O=Math.min(.75,R+D*.5)*(1-z);_.color.setRGB(1.8*O,1.3*O,.62*O),_.opacity=1-z,m.visible=z<1;let H=Ei(T,jt[0]-.1,jt[0]+.5,jt[0]+.7,jt[0]+1.2);g.opacity=.16+.08*Math.sin(T*2.3)*(1-D)+H*.3,v.visible=T<jt[0]+1.6,A.opacity=H*.45,M.rotation.z=T*.12,M.visible=H>.001;for(let B of y){let G=.9+.06*Math.sin(T*2.6+B.phase)+.04*Math.sin(T*4.3+B.phase*2);B.light.intensity=9*G,B.flame.scale.set(1,.9+.2*G,1),B.glowMat.opacity=.55*G}for(let B of E){let G=B.mesh.geometry.attributes.position;for(let U=0;U<G.count;U++){let J=B.base[U*3+1],Y=B.base[U*3],de=-J/3.3;G.setZ(U,de*.11*Math.sin(T*2.2+J*2.1+B.phase)+de*de*.05*Math.sin(T*3.7+Y*3))}G.needsUpdate=!0,B.mesh.geometry.computeVertexNormals()}u.update(T)}}}function Ky(i){let e=new Ye,t=[];t.push(wn([[0,-.05,-.38],[0,.18,-.36],[0,.4,-.18],[0,.42,0]],.035,{radial:8})),t.push(qe(new Ct(.23,.2,6),{y:.36})),t.push(qe(new je(.05,10,8),{y:.5})),t.push(qe(new Ct(.18,.14,6),{y:-.27,rx:Math.PI})),t.push(qe(new dt(.2,.2,.04,6),{y:.25})),t.push(qe(new dt(.19,.19,.04,6),{y:-.2}));for(let a=0;a<6;a++){let l=a/6*Math.PI*2;t.push(qe(new dt(.014,.014,.46,6),{x:Math.cos(l)*.19,y:.02,z:Math.sin(l)*.19}))}e.add(an(t,mt.gold,{cast:!0}));let n=new Te(new dt(.175,.175,.44,6),i.lanternGlass);n.position.y=.02,e.add(n);let s=new Te(new je(.06,12,10),i.flame);s.scale.set(1,1.6,1),s.position.y=-.02,e.add(s);let r=new sn({map:Kn(2),color:It("#ffb05a"),blending:Tt,depthWrite:!1,opacity:.5}),o=new un(r);return o.scale.setScalar(2.2),o.position.y=.02,e.add(o),{group:e,flame:s,glowMat:r}}function Qy(i){let e=$e.halfW-.05,t=$e.halfW,n=$e.spring,s=Math.sqrt(e*e-.01),r=new Dt;r.moveTo(.05,.02),r.lineTo($e.halfW-.012,.02),r.lineTo($e.halfW-.012,n+s),r.absarc(t,n,e,Math.atan2(s,-.012),Math.PI,!1),r.lineTo(.05,.02);let o=new Ln(r,{depth:.2,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,curveSegments:40}),a=.235,l=[],c=e-.11,h=$e.halfW-.12,d=Math.sqrt(c*c-(t-h)*(t-h)),f=[new I(t-c,.13,a),new I(h,.13,a),new I(h,n+d,a),...Jr(t,n,c,Math.atan2(d,h-t),Math.PI,40,a),new I(t-c,.13,a)];l.push(wn(f,.055,{smooth:!1,seg:160,radial:8}));let u=(b,x,S,T)=>[[b,x],[S,x],[S,T],[b,T],[b,x]].map(P=>new I(P[0],P[1],a));l.push(wn(u(.42,.55,2.72,2.55),.04,{smooth:!1,seg:80,radial:8})),l.push(wn(u(.3,2.82,2.84,2.95),.03,{smooth:!1,seg:60,radial:6}));let p=1.57,_=1.55;l.push(qe(is($r(.62),.05,.02),{x:p,y:_,z:a-.01}));for(let b of[-1,1])l.push(wn(bu(p+b*.72,_+.12,.42,1.25,b>0?Math.PI*.9:Math.PI*.1,b,a),.028,{seg:64,radial:6})),l.push(wn(bu(p+b*.72,_-.42,.26,1.1,b>0?Math.PI*1.1:-Math.PI*.1,-b,a),.024,{seg:70,radial:6}));for(let b=.5;b<2.75;b+=.32)l.push(qe(new je(.045,10,8),{x:b,y:.33,z:a})),l.push(qe(new je(.04,10,8),{x:b,y:2.885,z:a+.02}));let m=1.62,g=4.6,v=(b,x)=>b>.32&&b<h-.12&&x>3.12&&Math.hypot(b-t,x-n)<c-.14;for(let b=0;b<13;b++){let x=-Math.PI*.32+b/12*Math.PI*1.64,S=.95;for(;v(m+Math.cos(x)*(S+.04),g+Math.sin(x)*(S+.04))&&S<3;)S+=.04;S<1.05||(l.push(wn([[m+Math.cos(x)*.95,g+Math.sin(x)*.95,a],[m+Math.cos(x)*S,g+Math.sin(x)*S,a]],.026,{smooth:!1,seg:4,radial:6})),l.push(qe(new je(.05,10,8),{x:m+Math.cos(x)*S,y:g+Math.sin(x)*S,z:a})))}l.push(qe(new rn(.2,.032,10,32),{x:2.68,y:2.32,z:a+.05})),l.push(qe(new dt(.09,.09,.04,16),{x:2.68,y:2.55,z:a+.02,rx:Math.PI/2}));let A=an(l,mt.gold).geometry,M=b=>{let x=new Ye;x.position.set(b*$e.halfW,0,-.42);let S=new Ye;S.scale.x=b<0?1:-1;let T=new Te(o,i.enamel);T.castShadow=T.receiveShadow=!0;let P=new Te(A,mt.gold);P.castShadow=!0,S.add(T,P),x.add(S);let L=new Ye;L.position.set(b<0?m:-m,g,a);let N=[];N.push(new rn(.8,.075,14,72)),N.push(new rn(.66,.03,8,64));let R=b<0?[[[-.3,.36,.04],[0,.02,.04]],[[.3,.36,.04],[0,.02,.04]],[[0,.02,.04],[0,-.4,.04]]]:[[...Jr(0,0,.36,.75,Math.PI*2-.12,40,.04),new I(.36,.04,.04),new I(.1,.04,.04)]];for(let H of R){N.push(wn(H,.062,{smooth:!1,seg:H.length*6,radial:10}));let B=H[0],G=H[H.length-1];for(let U of[B,G])N.push(qe(new je(.062,12,10),{x:U.x??U[0],y:U.y??U[1],z:.04}))}N.push(qe(is(ha(.66,.4),.07,.02),{y:.86,z:-.03})),L.add(an(N,mt.gold,{cast:!0}));let D=new Te(new dt(.72,.72,.05,64),i.enamelBright);D.rotation.x=Math.PI/2,D.position.z=-.005,L.add(D);let z=[[0,1.08,mt.ruby,.075],[-.22,1,mt.sapphire,.05],[.22,1,mt.sapphire,.05]];for(let[H,B,G,U]of z){let J=new Te(new je(U,16,12),G);J.position.set(H,B,.07),L.add(J)}for(let[H,B]of[[-.356,1.26],[0,1.34],[.356,1.26]]){let G=new Te(new je(.045,12,10),mt.pearl);G.position.set(H,B,.035),L.add(G)}x.add(L);let O=new un(new sn({map:ws(),color:It("#fff4d0"),blending:Tt,depthWrite:!1,opacity:0}));return O.position.set(b<0?m-.3:-m+.3,g+.5,a+.2),x.add(O),{pivot:x,glint:O}},y=M(-1),E=M(1);return{left:y,right:E,update(b){for(let[x,S]of[[y,1.35],[E,1.75]]){let T=Ei(b,S,S+.25,S+.3,S+.65);x.glint.material.opacity=T,x.glint.scale.setScalar(.2+T*1.3),x.glint.material.rotation=b*2,x.glint.position.x=(x===y?m:-m)+(b-S-.3)*1.4}}}}var ss={front:-63,terrace:1.6};function Uc(i){let e=new Ye;e.name="castle";let t=ss.terrace,n=[],s=[],r=[],o=[],a=[],l=[],c=[],h=(U,J,Y,de,ge,Le,K=0)=>n.push(Kt(qe(new Wt(U,J,Y),{x:de,y:ge,z:Le,ry:K}),Math.max(U,Y)/4,J/4)),d=(U,J,Y,de,ge=1.5,Le=.75,K=.7)=>{for(let ie=U;ie<=J+1e-6;ie+=ge)n.push(Kt(qe(new Wt(Le,Le*1.1,K),{x:ie,y:Y+Le*.55,z:de}),.2,.2))},f=(U,J,Y,de,ge=.9,Le=1.8,K=1)=>{let ie=qe(new gt(ge,Le),{x:U,y:J,z:Y,ry:de});a.push(ie),l.push(K)};h(46,t,27,0,t/2,-76.5);let u=6;for(let U=0;U<u;U++){let J=t*(u-U)/u;h(10,J,.52,0,J/2,ss.front+.26+U*.52),c.push(qe(new Wt(3,.03,.5),{y:J+.012,z:ss.front+.26+U*.52}))}c.push(qe(new Wt(3,.03,5.2),{y:t+.012,z:ss.front-2.6}));for(let U of[-1,1]){let J=U*5.3,Y=U*22.5,de=ss.front+.15;o.push(wn([[J,t+.8,de],[Y,t+.8,de]],.06,{smooth:!1,seg:4,radial:8})),o.push(wn([[J,t+.2,de],[Y,t+.2,de]],.035,{smooth:!1,seg:4,radial:6}));for(let ge=J;Math.abs(ge)<=22.6;ge+=U*.55)o.push(qe(new dt(.035,.05,.6,8),{x:ge,y:t+.5,z:de}));for(let ge of[J,U*11,Y])o.push(qe(new je(.13,14,10),{x:ge,y:t+.95,z:de}))}let p={w:18,h:10,d:10,z:-73},_=p.z+p.d/2;h(p.w,p.h,p.d,0,t+p.h/2,p.z),h(p.w+.5,.4,p.d+.5,0,t+p.h,p.z),d(-p.w/2+.4,p.w/2-.4,t+p.h+.2,_+.05);for(let U of[-1,1])for(let J=p.z-p.d/2+.6;J<_;J+=1.5)n.push(Kt(qe(new Wt(.7,.82,.75),{x:U*(p.w/2-.1),y:t+p.h+.61,z:J}),.2,.2));let m=new Dt;m.moveTo(-1.6,0),m.lineTo(-1.6,2.9),m.absarc(0,2.9,1.6,Math.PI,0,!0),m.lineTo(1.6,0),m.closePath();let g=new Te(new $i(m,24),new Mt({color:new ae(1.35,.92,.46)}));g.position.set(0,t,_+.02),e.add(g);let v=[new I(-1.72,0,0),...Jr(0,2.9,1.72,Math.PI,0,40),new I(1.72,0,0)].map(U=>U.add(new I(0,t,_+.08)));o.push(wn(v,.13,{smooth:!1,seg:120,radial:10})),o.push(qe(is(ha(1.2,.7),.12,.03),{y:t+4.75,z:_+.02})),h(5.6,.3,1.6,0,t+5.6,_+.75),o.push(wn([[-2.7,t+6.5,_+1.5],[2.7,t+6.5,_+1.5]],.05,{smooth:!1,seg:4}));for(let U=-2.65;U<=2.66;U+=.33)o.push(qe(new dt(.03,.04,.75,8),{x:U,y:t+6.12,z:_+1.5}));for(let U of[t+3,t+7.6])for(let J of[-7.2,-5,5,7.2])f(J,U,_+.03,0);for(let U of[-1.8,0,1.8])f(U,t+7.9,_+.03,0,.8,1.5,1.15);let A=[Zr("#5b2fb0","#ff7eb3"),Zr("#c2185b","#ffd54f")],M=[];for(let U of[-1,1]){let J=new gt(1.5,5.4,1,14);J.translate(0,-2.7,0);let Y=new Te(J,new Je({map:A[U<0?0:1],side:xt,alphaTest:.5,roughness:.75}));Y.position.set(U*3.4,t+9.6,_+.08),e.add(Y),o.push(wn([[U*3.4-.95,t+9.62,_+.12],[U*3.4+.95,t+9.62,_+.12]],.05,{smooth:!1,seg:4})),M.push({mesh:Y,base:J.attributes.position.array.slice(),phase:U*1.3})}let y={w:12,h:5,d:8,z:-74.5};h(y.w,y.h,y.d,0,t+p.h+y.h/2,y.z),d(-y.w/2+.4,y.w/2-.4,t+p.h+y.h,y.z+y.d/2+.05);for(let U of[-3.6,-1.2,1.2,3.6])f(U,t+p.h+2.4,y.z+y.d/2+.03,0,.8,1.6);let E=[],b=(U,J,Y,de,ge,Le,K,ie)=>{let pe=de;n.push(Kt(qe(new dt(Y,Y*1.05,pe,40,1),{x:U,y:pe/2,z:J}),2*Math.PI*Y/4,pe/4)),n.push(Kt(qe(new dt(Y+.35,Y,.6,40,1),{x:U,y:pe+.3,z:J}),2*Math.PI*Y/4,.15));let Fe=Math.max(8,Math.round(Y*6));for(let Ge=0;Ge<Fe;Ge++){let et=Ge/Fe*Math.PI*2;n.push(Kt(qe(new Wt(.55,.8,.45),{x:U+Math.sin(et)*(Y+.18),y:pe+.95,z:J+Math.cos(et)*(Y+.18),ry:et}),.15,.2))}Le.push(Kt(qe(new Ct(Y+.55,ge,40,1,!0),{x:U,y:pe+.65+ge/2,z:J}),Math.round(Y*2.4),ge/2.2)),o.push(qe(new rn(Y+.52,.08,8,56),{x:U,y:pe+.68,z:J,rx:Math.PI/2}));let Ee=pe+.65+ge;o.push(qe(new je(.2,16,12),{x:U,y:Ee+.1,z:J})),o.push(qe(new Ct(.07,.5,10),{x:U,y:Ee+.5,z:J})),o.push(qe(new dt(.03,.03,1.8,6),{x:U,y:Ee+1,z:J})),E.push({x:U,y:Ee+1.75,z:J,color:K,len:1.1+Y*.25});for(let[Ge,et]of ie)for(let V of et)f(U+Math.sin(V)*(Y+.03),Ge,J+Math.cos(V)*(Y+.03),V,.62,1.25)},x=Math.PI/3,S=.6;b(0,-74.5,2.7,t+p.h+y.h+10,11,r,"#FFD54F",[[t+p.h+y.h+3,[-S,0,S]],[t+p.h+y.h+7,[-S,0,S]]]);for(let U of[-1,1]){b(U*9.6,-68.2,2.1,t+14.5,7.5,s,"#ff7eb3",[[t+4,[0,U*x]],[t+8.5,[0]],[t+12,[0,U*x]]]),b(U*15.6,-72.5,2.5,t+11.5,8,r,"#FFD54F",[[t+4.5,[U*.3,U*1]],[t+8.5,[U*.3]]]),b(U*6.2,-80.5,2.2,t+20,9,s,"#ff7eb3",[[t+14,[U*.5]],[t+17.5,[0,U*.8]]]),b(U*21.5,-71.5,1.5,t+8,4.5,s,"#9fd4ff",[[t+5,[U*.4]]]),h(5,8.5,4,U*12.6,t+4.25,-70.3),d(U>0?10.6:-14.6,U>0?14.6:-10.6,t+8.5,-68.25);for(let Y of[U*11.6,U*13.6])f(Y,t+4.5,-68.27,0,.7,1.4);h(5,6,3,U*18.6,t+3,-71.8),d(U>0?16.8:-20.4,U>0?20.4:-16.8,t+6,-70.25);let J=(Y,de,ge,Le,K,ie,pe)=>{n.push(Kt(qe(new dt(Le,Le*.6,K,24,1),{x:Y,y:de+K/2,z:ge}),1.2,K/4)),pe.push(Kt(qe(new Ct(Le+.25,ie,24,1,!0),{x:Y,y:de+K+ie/2,z:ge}),3,ie/2.2)),o.push(qe(new rn(Le+.22,.05,6,32),{x:Y,y:de+K+.02,z:ge,rx:Math.PI/2})),o.push(qe(new je(.11,12,8),{x:Y,y:de+K+ie+.06,z:ge}))};J(U*8.4,t+p.h-1.2,_-.3,.8,3.4,2.6,r),J(U*5.6,t+p.h+y.h-.9,y.z+y.d/2-.2,.62,2.6,2,s)}e.add(an(n,i.castleStone,{cast:!0,receive:!0})),e.add(an(s,i.roofPink,{cast:!0})),e.add(an(r,i.roofPurple,{cast:!0})),e.add(an(o,mt.gold,{cast:!0})),e.add(an(c,i.carpet,{receive:!0}));let T=an(a,i.window).geometry,P=new Float32Array(T.attributes.position.count*3),L=0;l.forEach((U,J)=>{let Y=U*(.75+.5*(J*.6180339%1));for(let de=0;de<6;de++,L++)P.set([Y,Y*.92,Y*.85],L*3)}),T.setAttribute("color",new yt(P,3));let N=new Te(T,i.windowLit);e.add(N);let R=[];for(let U of E){let J=new gt(U.len,U.len*.55,10,2);J.translate(U.len/2,0,0),R.push(J)}let D=an(R,new Je({vertexColors:!0,side:xt,roughness:.7}),{cast:!0}),z=D.geometry.attributes.position,O=120,H=new Float32Array(z.count*6),B=new Float32Array(z.count*3);E.forEach((U,J)=>{let Y=new ae(U.color);for(let de=J*O;de<(J+1)*O;de++)H.set([z.getX(de),z.getY(de),U.x,U.y,U.z,U.len],de*6),B.set([Y.r,Y.g,Y.b],de*3)}),D.geometry.setAttribute("color",new yt(B,3)),e.add(D);let G=new un(new sn({map:Kn(2),color:It("#ffb85c"),blending:Tt,depthWrite:!1,opacity:.28}));return G.position.set(0,t+2.4,_+1.2),G.scale.set(8,6,1),e.add(G),{group:e,update(U){for(let J=0;J<z.count;J++){let Y=H[J*6],de=H[J*6+1],ge=H[J*6+2],Le=H[J*6+3],K=H[J*6+4],ie=H[J*6+5],pe=Y/ie,Fe=Math.sin(Y*4.2-U*7+ge)*.16*pe;z.setXYZ(J,ge+Y*Math.cos(Fe*.6),Le+de-pe*pe*.08,K+Fe)}z.needsUpdate=!0,D.geometry.computeVertexNormals();for(let J of M){let Y=J.mesh.geometry.attributes.position;for(let de=0;de<Y.count;de++){let ge=J.base[de*3+1],Le=J.base[de*3],K=-ge/5.4;Y.setZ(de,K*.18*Math.sin(U*1.8+ge*1.4+J.phase)+K*K*.08*Math.sin(U*3.1+Le*2.5))}Y.needsUpdate=!0,J.mesh.geometry.computeVertexNormals()}}}}var ua=new I;function oi(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ua.copy(e),ua[n]=0,ua.normalize();let c=.5*o/(o+a),h=1-ua.angleTo(i)/l;return Math.sign(ua[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Kr=class i extends Wt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,_=new I,m=.5/o;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),u[v+0]=oi(_,c,"z","y",r,n),u[v+1]=1-oi(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),u[v+0]=1-oi(_,c,"z","y",r,n),u[v+1]=1-oi(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),u[v+0]=1-oi(_,c,"x","z",r,e),u[v+1]=oi(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),u[v+0]=1-oi(_,c,"x","z",r,e),u[v+1]=1-oi(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),u[v+0]=1-oi(_,c,"x","y",r,e),u[v+1]=1-oi(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),u[v+0]=oi(_,c,"x","y",r,e),u[v+1]=1-oi(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Fc=Array.from({length:10},(i,e)=>-5-6*e),jy=2.3;function cp(i,e){let t=Math.max(0,Math.abs(i)-24)+Math.max(0,-96-e)*.9+Math.max(0,e-34)*.6,n=7+5*Math.sin(i*.031+e*.017)*Math.cos(e*.043-i*.012)+3*Math.sin(i*.09+1.3)*Math.sin(e*.07);return(1-Math.exp(-t/26))*n}function hp(i){let e=new Ye;e.name="grounds";let t=Pt(77),n=new gt(520,520,110,110);n.rotateX(-Math.PI/2);let s=n.attributes.position;for(let q=0;q<s.count;q++)s.setY(q,cp(s.getX(q),s.getZ(q)));n.computeVertexNormals(),Kt(n,520/7);let r=new Te(n,i.grass);r.receiveShadow=!0,e.add(r);let o=-1.2-ss.front,a=(-1.2+ss.front)/2,l=new Wt(3,.04,o);Kt(l,1,o/3);let c=new Te(l,i.carpet);c.position.set(0,.03,a),c.receiveShadow=!0,e.add(c);let h=[];for(let q of[-1,1])h.push(qe(new Wt(.09,.05,o),{x:q*1.52,y:.033,z:a}));e.add(an(h,new Je({color:"#e3ad45",metalness:.35,roughness:.55}),{receive:!0}));let d=Fc.length*2,f=new it,u=new Gt,p=new I,_=new I(1,1,1),m=new kt(new dt(.05,.07,2.3,10),i.iron,d),g=new kt(new dt(.15,.2,.26,12),i.iron,d),v=new kt(new dt(.2,.08,.16,16,1,!0),mt.goldDouble,d),A=new kt(new Ct(.12,.22,12),mt.gold,d),M=new Mt({color:new ae(1.75,1.02,.45)}),y=new kt(new je(.17,18,12),M,d);m.castShadow=g.castShadow=v.castShadow=!0;let E=[];Fc.forEach((q,se)=>[-1,1].forEach((ue,xe)=>{let Se=se*2+xe,Ue=ue*jy;E.push(new I(Ue,2.5,q)),m.setMatrixAt(Se,f.compose(p.set(Ue,1.15,q),u,_)),g.setMatrixAt(Se,f.compose(p.set(Ue,.13,q),u,_)),v.setMatrixAt(Se,f.compose(p.set(Ue,2.36,q),u,_)),A.setMatrixAt(Se,f.compose(p.set(Ue,2.78,q),u,_)),y.setMatrixAt(Se,f.compose(p.set(Ue,2.52,q),u,_)),y.setColorAt(Se,new ae(1,1,1))})),y.name="orbs",e.add(m,g,v,A,y);let b=new rt;b.setAttribute("position",new De(E.flatMap(q=>[q.x,2.52,q.z]),3)),b.setAttribute("bright",new De(new Float32Array(d),1));let x={uMap:{value:Kn(2.4)},uScale:{value:170},uColor:{value:It("#ffbe6a")}},S=new yi(b,new ht({uniforms:x,transparent:!0,depthWrite:!1,blending:Tt,vertexShader:`attribute float bright; uniform float uScale; varying float vB;
            void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
                vB = bright * smoothstep(1.0, 5.0, -mv.z); gl_PointSize = min(uScale * 1.7 / -mv.z, 140.0); }`,fragmentShader:`uniform sampler2D uMap; uniform vec3 uColor; varying float vB;
            void main() { float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(uColor * a * vB * 0.45, 1.0); }`}));S.frustumCulled=!1,S.name="halos",e.add(S);let T=[];for(let q of E)T.push(qe(new gt(4.2,4.2),{x:q.x,y:.06,z:q.z,rx:-Math.PI/2}));let P=an(T,i.pool).geometry,L=new Float32Array(P.attributes.position.count*3);P.setAttribute("color",new yt(L,3));let N=new Te(P,i.pool);N.renderOrder=1,N.name="pools",e.add(N);let R=[];for(let q=0;q<Fc.length-1;q++)for(let se of[-1,1])R.push([se*3.2,Fc[q]-3]);let D=new kt(new dt(.34,.26,.5,16),i.pot,R.length),z=new kt(new rn(.34,.04,8,24),mt.gold,R.length),O=new kt(new dt(.05,.06,.9,8),i.trunk,R.length),H=new kt(new kn(.5,3),i.leaf,R.length*2);D.castShadow=O.castShadow=H.castShadow=!0,R.forEach(([q,se],ue)=>{D.setMatrixAt(ue,f.compose(p.set(q,.25,se),u,_)),z.setMatrixAt(ue,f.compose(p.set(q,.5,se),u.setFromEuler(new Zt(Math.PI/2,0,0)),_)),u.identity(),O.setMatrixAt(ue,f.compose(p.set(q,.9,se),u,_)),H.setMatrixAt(ue*2,f.compose(p.set(q,1.55,se),u,new I(1,1,1))),H.setMatrixAt(ue*2+1,f.compose(p.set(q,2.25,se),u,new I(.6,.6,.6)))}),e.add(D,z,O,H);let B=[];for(let q=-3;q>ss.front+3;q-=6.5)for(let se of[-1,1])B.push([se*4.7,q-2.6]);let G=new kt(new Kr(.95,.95,5.2,3,.3),i.hedge,B.length);G.castShadow=G.receiveShadow=!0,B.forEach(([q,se],ue)=>G.setMatrixAt(ue,f.compose(p.set(q,.47,se),u,_))),e.add(G);let U=[],J=["#ff6fa5","#ffffff","#ffd54f","#c9a4ff","#ff9ec7","#7fd4ff"].map(q=>new ae(q));for(let[q,se]of B)for(let ue=0;ue<16;ue++)U.push([q-Math.sign(q)*(.68+t()*.3),se+(t()-.5)*5,J[Math.floor(t()*J.length)]]);let Y=new kt(new kn(.075,0),i.flower,U.length);U.forEach(([q,se,ue],xe)=>{Y.setMatrixAt(xe,f.compose(p.set(q,.12+t()*.1,se),u,new I(1,.7,1))),Y.setColorAt(xe,ue)}),e.add(Y);let de=[],ge=(q,se,ue,xe,Se)=>{for(let Ue=0;Ue<q;Ue++)de.push([(t()<.5?-1:1)*(se+t()*(ue-se)),xe+t()*(Se-xe),t()])};ge(46,9,60,-58,-6),ge(26,26,70,-110,-60),ge(22,12,55,6,40);let Le=de.filter(q=>q[2]<.55),K=de.filter(q=>q[2]>=.55),ie=new dt(.18,.28,2.4,8),pe=an([qe(new kn(1.6,2),{y:3.4}),qe(new kn(1.2,2),{x:.9,y:2.9,z:.3}),qe(new kn(1.15,2),{x:-.8,y:3,z:-.2})],i.tree).geometry,Fe=an([qe(new Ct(1.7,2.6,12),{y:2.2}),qe(new Ct(1.35,2.3,12),{y:3.6}),qe(new Ct(.95,2,12),{y:4.9})],i.pine).geometry,Ee=new kt(ie,i.trunk,de.length),Ge=new kt(pe,i.tree,Le.length),et=new kt(Fe,i.pine,K.length);Ee.castShadow=Ge.castShadow=et.castShadow=!0;let V=0,Q=0;de.forEach(([q,se,ue],xe)=>{let Se=.8+ue*7.31%1*.7,Ue=cp(q,se);Ee.setMatrixAt(xe,f.compose(p.set(q,Ue+1.1*Se,se),u,new I(Se,Se,Se)));let k=new Gt().setFromEuler(new Zt(0,ue*20,0));ue<.55?Ge.setMatrixAt(V++,f.compose(p.set(q,Ue,se),k,new I(Se,Se,Se))):et.setMatrixAt(Q++,f.compose(p.set(q,Ue,se),k,new I(Se,Se*1.15,Se)))}),e.add(Ee,Ge,et);let te=(q,se,ue,xe,Se)=>{let k=[],ot=[],tt=Pt(xe),F=[tt()*6,tt()*6,tt()*6];for(let Z=0;Z<=220;Z++){let $=Z/220*Math.PI*2,re=se+(ue-se)*(.5+.25*Math.sin($*3+F[0])+.15*Math.sin($*7+F[1])+.1*Math.sin($*17+F[2])),me=Math.sin($)*q,ve=Math.cos($)*q-60;k.push(me,-5,ve,me,re,ve)}for(let Z=0;Z<220;Z++){let $=Z*2;ot.push($,$+1,$+2,$+1,$+3,$+2)}let w=new rt;return w.setAttribute("position",new De(k,3)),w.setIndex(ot),w.computeVertexNormals(),new Te(w,new Ho({color:Se,side:xt}))};return e.add(te(230,18,52,3,"#2a2350"),te(330,40,90,8,"#231c45")),{group:e,update(q){let se=b.attributes.bright,ue=new ae;for(let xe=0;xe<d;xe++){let Se=xe>>1,k=.12+.88*Ne(2.85+Se*.16,3.25+Se*.16,q)*(.94+.06*Math.sin(q*9+xe*1.7));se.setX(xe,k),y.setColorAt(xe,ue.setScalar(.25+.75*k));for(let ot=0;ot<6;ot++)L.set([k,k,k],(xe*6+ot)*3)}se.needsUpdate=!0,y.instanceColor.needsUpdate=!0,P.attributes.color.needsUpdate=!0}}}var fa={googy:{hair:"#F2B53A",hairLight:"#FFE08A",dress:"#FF7EB3",dressLight:"#FFA6CB",dressDark:"#E85C98",shoes:"#E0407F",cape:"#C2185B",capeSheen:"#ff8fc0",lining:"#ff6fae"},yoovy:{hair:"#EDC66B",hairLight:"#FFF0C0",shirt:"#8E6CEF",shirtDark:"#7353D6",skirt:"#4A7BD0",skirtDark:"#3A64B0",shoes:"#8E6CEF",cape:"#5E35B1",capeSheen:"#b79bff",lining:"#9b7bff"}},up="#FFDBC4",ev=new I(0,-1,0),tv={googy:{R:.25,headY:.735,headScale:[1,.97,.96],shoulder:[.122,.47],arm:.185,armR:.03,hand:.041,hip:[.058,.24],leg:.16,legR:.037,cape:{topY:.495,botY:.06,topR:.118,botR:.3,span:[1.72,1.5]},crown:{r:.135,h:.115,tilt:-.14,y:.225}},yoovy:{R:.24,headY:.905,headScale:[.96,1.02,.95],shoulder:[.126,.632],arm:.215,armR:.03,hand:.039,hip:[.06,.345],leg:.25,legR:.037,cape:{topY:.655,botY:.065,topR:.122,botR:.31,span:[1.72,1.5]},crown:{r:.13,h:.11,tilt:.1,y:.23}}};function Sn(i,e="#ffffff",t=.72){return new Jt({color:i,roughness:t,sheen:.5,sheenColor:e,sheenRoughness:.5})}function Tu(i,e=48){let t=new Xs(i.slice().reverse().map(([n,s])=>new le(n,s)),e);return t.rotateY(Math.PI),t}var Ut=(i,e,t=!0)=>{let n=new Te(i,e);return n.castShadow=t,n},ai=(i,e,t,n,s,r=1,o=1,a=1,l=20)=>{let c=Ut(new je(i,l,Math.max(8,l*.7|0)),e);return c.position.set(t,n,s),c.scale.set(r,o,a),c},Bi=(i,e,t=1)=>new I(Math.sin(i)*Math.cos(e)*t,Math.sin(e)*t,Math.cos(i)*Math.cos(e)*t);function fp(i,e,t){let n=new je(1,96,64);n.rotateY(-Math.PI/2);let s=n.attributes.position,r=new I;for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o).normalize();let a=Ne(-.1,.42,r.z),l=fn(t,e(r.x),a),c=Ne(l-.03,l+.03,r.y),h=fn(.9,i,c);s.setXYZ(o,r.x*h,r.y*h,r.z*h)}return n.computeVertexNormals(),n}var dp=i=>e=>{if(e<=i[0][0])return i[0][1];for(let t=0;t<i.length-1;t++){let[n,s]=i[t],[r,o]=i[t+1];if(e<=r){let a=(e-n)/(r-n),l=a*a*(3-2*a);return s+(o-s)*l}}return i[i.length-1][1]},da=(i,e,t)=>{let n=Math.sqrt(Math.max(.02,1-i*i-e*e));return new I(i,e,n).normalize().multiplyScalar(t)};function nv(){let i=[],e=[[-1.05,-.12],[-.86,.2],[-.55,.42],[-.2,.46],[.15,.44],[.45,.55],[.64,.68],[.84,.36],[1.05,-.12]];i.push(fp(1.07,dp(e.map(([s,r])=>[s,r+.05])),-.5));let t=Bi(.62,1.12,1);[[-.92,.16],[-.72,.33],[-.48,.43],[-.24,.47],[0,.46],[.22,.46],[.42,.53]].forEach(([s,r],o)=>{let a=da(s,r,1.075),l=t.clone().lerp(a,.55).normalize().multiplyScalar(1.12),c=t.clone().add(new I(-.04*o,.02,0)).normalize().multiplyScalar(.98);i.push(As([c,l,a,da(s*1.02,r-.06,1.06)],.15,.1,{flat:.42,seg:22,tipRound:.35}))});for(let[s,r]of[[.84,.36],[.98,.1]]){let o=da(s,r,1.07),a=t.clone().lerp(o,.5).normalize().multiplyScalar(1.1);i.push(As([t.clone().multiplyScalar(.98),a,o,da(s+.02,r-.08,1.06)],.13,.1,{flat:.42,seg:18,tipRound:.35}))}for(let s=0;s<=14;s++){let r=Math.PI*(.5+s/14),o=Math.sin(r),a=Math.cos(r),l=[Bi(r,.8,.95),Bi(r,.28,1.075),Bi(r,-.3,1.075),new I(o*1.04,-.95,a*.98),new I(o*1,-1.42,a*.92),new I(o*.97,-1.78,a*.88)];i.push(As(l,.24,.18,{flat:.5,seg:30,tipRound:.22}))}for(let s of[-1,1])for(let[r,o]of[[1.2,.2],[1.38,.17]]){let a=s*r,l=Math.sin(a),c=Math.cos(a),h=[Bi(a,.6,.97),Bi(a,.08,1.08),new I(l*1.06,-.5,c*1),new I(l*1,-1.05,.46),new I(l*.96,-1.6,.44)];i.push(As(h,o,o*.8,{flat:.5,seg:28,tipRound:.4}))}return $n(i,!1)}function iv(){let i=[],e=[[-1.05,-.05],[-.8,.5],[-.42,.38],[.12,.45],[.62,.7],[.86,.42],[1.05,-.05]];i.push(fp(1.09,dp(e.map(([r,o])=>[r,o+.06])),-.42));let t=Bi(.68,1.05,1),n=[[[.5,.86,1.12],[.3,.62,1.14],[.14,.43,1.09],[.04,.42,1.07]],[[.3,.92,1.12],[-.05,.72,1.15],[-.36,.38,1.1],[-.48,.38,1.07]],[[.1,.96,1.12],[-.42,.82,1.15],[-.78,.52,1.12],[-.92,.22,1.09]],[[.7,.8,1.1],[.84,.5,1.12],[.94,.22,1.1],[.98,.02,1.08]]];for(let r of n){let o=[t.clone().multiplyScalar(.98),...r.map(([a,l,c])=>da(a,l,c))];i.push(As(o,.19,.13,{flat:.45,seg:26,tipRound:.35}))}let s=(r,o,a,l,c)=>{let h=Math.sin(r),d=Math.cos(r),f=[Bi(r,.82,.96),Bi(r,.3,1.09)];for(let p=1;p<=5;p++){let _=-.25*p*o,m=1.1+a*Math.sin(p*1.7+l)+c*p*.02;f.push(new I(h*m,_+.1,d*m*(p>2?.96:1)))}let u=f[f.length-1];return f.push(new I(u.x*1.04,u.y-.07,u.z*1.04)),f.push(new I(u.x*1.1,u.y-.04,u.z*1.1)),f};for(let r=0;r<=15;r++){let o=Math.PI*(.47+1.06*r/15);i.push(As(s(o,1.02+.04*Math.sin(r*2.3),.07,r*1.3,1),.22,.17,{flat:.55,seg:34,tipRound:.2}))}for(let r of[-1,1])for(let[o,a,l]of[[1.15,.19,.4],[1.33,.2,2.1]]){let c=r*o,h=s(c,1,.08,l,1);h.forEach((d,f)=>{f>2&&(d.z=Math.max(d.z,.3+.02*f))}),i.push(As(h,a,a*.8,{flat:.55,seg:32,tipRound:.22}))}return $n(i,!1)}function sv(){let i=new je(1.004,56,40,Math.PI/2-1.3,2.6,.38,2),e=i.attributes.position,t=i.attributes.uv;for(let n=0;n<e.count;n++)t.setXY(n,.5+e.getX(n)/2,.5+e.getY(n)/2);return i}function rv(i,e){let t=new Ye,n=150,s=[],r=[];for(let d=0;d<=n;d++){let f=d/n*Math.PI*2,u=Math.pow(.5+.5*Math.cos(5*f),5),p=i.h*(.5+.78*u);s.push(Math.sin(f)*i.r,0,Math.cos(f)*i.r,Math.sin(f)*i.r*1.13,p,Math.cos(f)*i.r*1.13)}for(let d=0;d<n;d++){let f=d*2;r.push(f,f+2,f+1,f+1,f+2,f+3)}let o=new rt;o.setAttribute("position",new De(s,3)),o.setIndex(r),o.computeVertexNormals(),t.add(Ut(o,mt.goldDouble));let a=(d,f,u)=>{let p=Ut(new rn(f,u,8,64),mt.gold);p.rotation.x=Math.PI/2,p.position.y=d,t.add(p)};a(.004,i.r*1.01,.011),a(i.h*.42,i.r*1.075,.006);let l=[],c={ruby:[],sapphire:[],emerald:[]};for(let d=0;d<5;d++){let f=d/5*Math.PI*2;l.push(new je(.014,12,9).translate(Math.sin(f)*i.r*1.13,i.h*1.3,Math.cos(f)*i.r*1.13));let u=new je(d===0?.02:.014,14,10);u.scale(1,1,.6),u.rotateY(f),u.translate(Math.sin(f)*i.r*1.07,i.h*.22,Math.cos(f)*i.r*1.07),c[d===0?"ruby":d%2?"sapphire":"emerald"].push(u)}t.add(Ut($n(l),mt.pearl,!1));for(let d in c)t.add(Ut($n(c[d]),mt[d],!1));let h=Ut(new je(i.r*.98,24,12,0,Math.PI*2,0,Math.PI/2),Sn(e,"#ffffff",.8));return h.scale.y=.75,h.position.y=i.h*.25,t.add(h),t.add(ai(.016,mt.gold,0,i.h*.25+i.r*.74,0,1,1,1,12)),t}function ov(i,e,t){let r=new gt(1,1,26,16),o=r.attributes.position,a=(N,R,D)=>{for(let z=0;z<=16;z++){let O=z/16,H=Math.pow(O,1.5),B=fn(i.span[0],i.span[1],O);for(let G=0;G<=26;G++){let U=(G/26-.5)*2*B,J=fn(i.topR,i.botR,Math.pow(O,.8))+.013*O*Math.sin(U*6+.6),Y=Math.sin(U)*J,de=-Math.cos(U)*J-.012,ge=fn(i.topY,i.botY,O);de-=H*(R*.08+.016*Math.sin(N*4.1+U*1.7-O*2.6)+D*.12),Y+=H*.011*Math.sin(N*3.3+O*2.2+U),ge+=H*D*.06,o.setXYZ(z*27+G,Y,ge,de)}}o.needsUpdate=!0,r.computeVertexNormals()};if(a(0,0,0),r.attributes.normal.getZ(229)>0){let N=r.index.array;for(let R=0;R<N.length;R+=3){let D=N[R];N[R]=N[R+2],N[R+2]=D}r.computeVertexNormals()}let c=Ut(r,Sn(e.cape,e.capeSheen,.78));c.material.sheenRoughness=.32;let h=Ut(r,new Jt({color:e.lining,roughness:.35,metalness:.1,sheen:.6,sheenColor:"#ffffff",sheenRoughness:.3,side:$t})),d=new Ye;d.add(c,h);let f=new je(1,14,10),u=53,p=new kt(f,t.ermine,u),_=new kt(f,t.ermine,15),m=new kt(new je(1,10,8),t.ermineTail,6);p.castShadow=_.castShadow=!0,d.add(p,_,m);let g=new it,v=new Gt,A=new I,M=new I,y=new I,E=(N,R,D)=>D.fromBufferAttribute(o,N*27+R),b=N=>{for(let R=0;R<u;R++){let D=R/2,z=Math.floor(D),O=Math.min(26,z+1);E(16,z,A),E(16,O,M),A.lerp(M,D-z),A.y+=.008,y.set(.032,.028,.032).multiplyScalar(1+.16*Math.sin(R*2.7)),p.setMatrixAt(R,g.compose(A,v.identity(),y))}for(let R=0;R<15;R++){let D=Math.round(R/14*26);E(0,D,A),A.multiplyScalar(1.02),A.y+=.006,y.setScalar(.03+.004*Math.sin(R*1.9)),_.setMatrixAt(R,g.compose(A,v.identity(),y))}for(let R=0;R<6;R++){let D=Math.round((R+.5)/6*26);E(16,D,A),A.y+=.004;let z=A.clone().setY(0).normalize();A.addScaledVector(z,.022),y.set(.008,.016,.008),m.setMatrixAt(R,g.compose(A,v.identity(),y))}p.instanceMatrix.needsUpdate=_.instanceMatrix.needsUpdate=m.instanceMatrix.needsUpdate=!0};b(0);let x=new I,S=new I;E(0,0,x),E(0,26,S);let T=new I(0,i.topY-.03,i.topR+.035),P=Ut(new Ki(new zn([x,T,S]),24,.007,6),mt.goldDeep);d.add(P);let L=ai(.02,t.brooch,0,i.topY-.028,i.topR+.045,1,1,.5,14);return d.add(L),{group:d,update(N,R,D){a(N,R,D),b(N)}}}function Qs(i,e,t,{royal:n=!0}={}){let s=fa[i],r=tv[i],o=i==="yoovy",a=new Ye,l=new Ye;a.add(l);let c=t.skin;if(o){let R=Sn(s.shirt,"#c9b6ff"),D=Sn(s.skirt,"#a9c6ff");l.add(Ut(Tu([[0,.69],[.05,.69],[.088,.672],[.116,.642],[.124,.6],[.12,.54],[.115,.5],[.116,.47],[0,.47]]),R));let z=Tu([[0,.5],[.118,.5],[.15,.45],[.178,.395],[.198,.35],[.204,.335],[.19,.33],[0,.33]],96),O=z.attributes.position;for(let U=0;U<O.count;U++){let J=O.getX(U),Y=O.getY(U),de=O.getZ(U),ge=Ne(.5,.34,Y),Le=Math.atan2(J,de),K=1+.07*ge*(Math.abs(Math.sin(Le*8))-.5);O.setX(U,J*K),O.setZ(U,de*K)}z.computeVertexNormals(),l.add(Ut(z,D));let H=Ut(new rn(.119,.013,8,48),Sn(s.shirtDark,"#c9b6ff"));H.rotation.x=Math.PI/2,H.position.y=.497,l.add(H);let B=Ut(new rn(.052,.012,8,32),Sn(s.shirtDark,"#c9b6ff"));B.rotation.x=Math.PI/2,B.position.y=.688,l.add(B);for(let U of[-1,1])l.add(ai(.062,Sn(s.shirtDark,"#c9b6ff"),U*.112,.636,0,1,.82,.92));let G=Ut(is($r(.07),.012,.006),t.brooch);G.position.set(0,.585,.118),l.add(G)}else{let R=Sn(s.dress,"#ffc2dc"),D=Sn(s.dressLight,"#ffe0ee");l.add(Ut(Tu([[0,.53],[.05,.53],[.086,.512],[.11,.486],[.118,.455],[.112,.405],[.118,.372],[.15,.322],[.186,.27],[.206,.236],[.212,.224],[.19,.218],[0,.218]]),R));let z=[];for(let B=0;B<22;B++){let G=B/22*Math.PI*2,U=new je(.021,10,7);U.scale(1,.7,1),U.translate(Math.sin(G)*.205,.226,Math.cos(G)*.205),z.push(U)}l.add(Ut($n(z),Sn(s.dressDark,"#ffc2dc"),!1));let O=Ut(new rn(.056,.017,10,32),Sn("#ffffff","#ffffff"));O.rotation.x=Math.PI/2,O.position.y=.522,O.scale.z=.7,l.add(O);for(let B of[-1,1])l.add(ai(.069,D,B*.112,.476,0,1,.9,.92));let H=Ut(is(Dc(.04),.012,.006),t.brooch);H.position.set(0,.42,.112),l.add(H)}let h=o?[.66,.74]:[.5,.57],d=Ut(new dt(.04,.044,h[1]-h[0],16),t.skinShade);d.position.y=(h[0]+h[1])/2,l.add(d);let f=[],u=[];for(let R of[-1,1]){let D=new Ye;D.position.set(R*r.shoulder[0],r.shoulder[1],0);let z=Ut(new In(r.armR,r.arm,6,14),c);z.position.y=-(r.arm/2+r.armR*.4);let O=ai(r.hand,c,0,-(r.arm+r.armR*1.2),.004,1,1.05,.92,16);D.add(z,O),l.add(D),f.push(D);let H=new Ye;H.position.set(R*r.hip[0],r.hip[1],0);let B=Ut(new In(r.legR,r.leg,6,14),c);B.position.y=-(r.leg/2+r.legR);let G=Ut(new dt(r.legR*1.12,r.legR*1.12,.05,16),t.sock);G.position.y=-(r.leg+r.legR)+.06;let U=-(r.leg+r.legR*2)+.02;H.add(B,G),o?(H.add(ai(.052,t.sneaker,0,U,.022,1,.62,1.5,18)),H.add(ai(.055,Sn(s.shoes,"#d8c8ff",.6),0,U-.016,.024,1.02,.25,1.52,18))):(H.add(ai(.05,Sn(s.shoes,"#ffc2dc",.4),0,U,.022,1,.64,1.45,18)),H.add(ai(.012,t.sock,0,U+.026,.06,1.6,.5,1,10))),l.add(H),u.push(H)}let p=new Ye;p.position.y=r.headY,p.scale.set(r.R*r.headScale[0],r.R*r.headScale[1],r.R*r.headScale[2]),l.add(p),p.add(Ut(new je(1,48,36),c));let _=new Je({map:e.open,transparent:!0,roughness:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,premultipliedAlpha:!e.open.userData.plain,emissive:"#ffffff",emissiveMap:e.open,emissiveIntensity:.14}),m=new Te(sv(),_);m.renderOrder=1,p.add(m);let g=Ut(o?nv():iv(),t["hair_"+i]);if(g.receiveShadow=!0,p.add(g),o){let R=new Ye,D=new rn(1.105,.07,12,72,Math.PI+.5);D.rotateZ(-.25);let z=Ut(D,t.pink);R.add(z),R.rotation.x=.42;let O=new Ye,H=new Ct(.17,.3,14);for(let G of[-1,1]){let U=Ut(H,t.pink);U.rotation.z=G*Math.PI/2,U.position.x=G*.15,U.scale.set(1,1,.45),O.add(U)}O.add(ai(.08,t.pinkDark,0,0,0,1,1,.8,12));let B=.62;O.position.set(Math.cos(B)*1.12,Math.sin(B)*1.12,0),O.rotation.z=B-Math.PI/2+.3,R.add(O),p.add(R)}else{let R=new Ye;for(let z=0;z<5;z++){let O=z/5*Math.PI*2;R.add(ai(.13,t.pink,Math.cos(O)*.14,Math.sin(O)*.14,0,1,1,.5,14))}R.add(ai(.085,t.yellow,0,0,.04,1,1,.7,12));let D=Bi(1,.78,1.13);R.position.copy(D),R.lookAt(D.clone().multiplyScalar(2)),p.add(R)}let v=[],A=null;if(n){let R=rv(r.crown,s.cape);R.scale.set(1/(r.R*r.headScale[0]),1/(r.R*r.headScale[1]),1/(r.R*r.headScale[2]));let D=new Ye;D.rotation.z=r.crown.tilt,D.add(R),R.position.y=r.crown.y/(r.R*r.headScale[1])-.02,p.add(D);for(let z=0;z<3;z++){let O=new un(new sn({map:t.sparkleTex,color:"#fff3c8",blending:Tt,depthWrite:!1,opacity:0})),H=(z-1)*1.25;O.position.set(Math.sin(H)*r.crown.r*1.13,r.crown.h*1.3,Math.cos(H)*r.crown.r*1.13),R.add(O),v.push(O)}A=ov(r.cape,s,t),l.add(A.group)}let M=new Te(new gt(.75,.75),t.blob);M.rotation.x=-Math.PI/2,M.position.y=.012,a.add(M);let y=new Gt,E=new Gt,b=new Gt,x=new Zt,S=new I,T=new I,P=o?.62:.5,L="open",N=R=>{R!==L&&e[R]&&(L=R,_.map=_.emissiveMap=e[R])};return{root:a,head:p,D:r,who:i,update(R,D){a.position.set(D.x,D.y||0,D.z),a.rotation.y=D.turn||0;let z=D.dist/P*Math.PI*2,O=D.walk;l.position.y=(D.jump||0)+O*.012*(1-Math.cos(z*2)),l.rotation.z=O*.035*Math.sin(z)+(D.sway||0),l.rotation.y=O*.06*Math.sin(z),l.rotation.x=O*.05+(D.lean||0);let H=D.squash||0;l.scale.set(1+H*.5,1-H,1+H*.5),p.rotation.z=O*.03*Math.sin(z+.6)+(D.tilt||0),p.rotation.x=-.04+(D.nod||0),p.rotation.y=D.look||0,u[0].rotation.x=-Math.sin(z)*.48*O,u[1].rotation.x=Math.sin(z)*.48*O;for(let B=0;B<2;B++){let G=B?1:-1,U=f[B],J=(B?-1:1)*Math.sin(z)*.42*O;y.setFromEuler(x.set(J,0,G*(.1+.03*Math.sin(R*1.3+B)+(D.armOut||0)))),D.hold&&D.holdSide===G&&(S.copy(D.holdTarget).sub(T.set(G*r.shoulder[0],r.shoulder[1]+l.position.y,0)).normalize(),E.setFromUnitVectors(ev,S),y.slerp(E,D.hold));let Y=D.wave&&G===D.waveSide,de=Y?D.wave:D.cheer||0;if(de>0){let ge=Y?.42*Math.sin(R*11):.12*Math.sin(R*9+B*1.5);b.setFromEuler(x.set(.5,0,G*((Y?2.2:2.3)+ge))),y.slerp(b,de)}U.quaternion.copy(y)}N(D.face||"open"),v.forEach((B,G)=>{let U=[10.55,11.25,12.15,13.05].map(Y=>Y+G*.21+(o?0:.11)),J=Math.max(...U.map(Y=>Math.max(0,1-Math.abs(R-Y)/.22)));B.material.opacity=J,B.scale.setScalar(.04+J*.14),B.material.rotation=R*1.5+G}),A&&A.update(R,O+Math.max(0,D.jumpVel||0)*.3,(D.jump||0)*3)}}}function Qr(){let i=(e,t)=>new Jt({color:e,roughness:.45,sheen:.6,sheenColor:t,sheenRoughness:.35,clearcoat:.35,clearcoatRoughness:.35,specularIntensity:.8});return{skin:new Jt({color:up,roughness:.55,sheen:.5,sheenColor:"#ffb8a0",sheenRoughness:.6,emissive:up,emissiveIntensity:.1}),skinShade:new Jt({color:"#F4C3A6",roughness:.6}),hair_yoovy:i(fa.yoovy.hair,fa.yoovy.hairLight),hair_googy:i(fa.googy.hair,fa.googy.hairLight),sock:Sn("#ffffff","#ffffff",.8),sneaker:Sn("#ffffff","#ffffff",.5),pink:Sn("#FF6FA5","#ffd0e4",.5),pinkDark:Sn("#E0407F","#ffd0e4",.5),yellow:Sn("#FFD54F","#fff3c0",.5),brooch:new Je({color:"#FFD54F",metalness:.5,roughness:.45,emissive:"#7a5200",emissiveIntensity:.15}),ermine:new Jt({color:"#ffffff",roughness:1,sheen:1,sheenColor:"#ffffff",sheenRoughness:.9,emissive:"#ffffff",emissiveIntensity:.08}),ermineTail:new Je({color:"#1d1a26",roughness:.9}),blob:new Mt({map:av(),transparent:!0,depthWrite:!1,opacity:.55}),sparkleTex:ws()}}function av(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(10,5,20,0.85)"),t.addColorStop(.5,"rgba(10,5,20,0.4)"),t.addColorStop(1,"rgba(10,5,20,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ii(i)}var pa=[[4.75,-11,31,-100,"peony","#ffd866","#fff6d0"],[5.15,12,35,-98,"peony","#ff6fae","#ffd0e6"],[5.55,0,41,-106,"ring","#7fe3ff","#ffffff"],[5.95,-20,34,-96,"willow","#ffc046","#fff0b0"],[6.35,17,30,-94,"heart","#ff5ca8","#ffc2de"],[6.75,-4,38,-102,"peony","#c9a4ff","#ffffff"],[7.1,22,40,-104,"glitter","#fff4dc","#ffd866"],[7.5,-16,28,-96,"peony","#ffd866","#ff9a4a"],[7.95,8,34,-100,"ring","#ff6fae","#ffffff"],[8.45,-6,40,-102,"peony","#7fe3ff","#c9f4ff"],[8.95,18,32,-96,"willow","#ffc046","#fff0b0"],[9.45,-12,34,-98,"heart","#ff5ca8","#ffc2de"],[9.85,4,28,-94,"peony","#c9a4ff","#ffe2ff"],[10.35,0,36,-96,"heart","#ff4f9e","#ffd0e6"],[10.6,-18,32,-100,"peony","#ffd866","#fff6d0"],[10.75,18,32,-100,"peony","#7fe3ff","#ffffff"],[11,-8,42,-104,"ring","#c9a4ff","#ffffff"],[11.2,8,42,-104,"ring","#ffd866","#ffffff"],[11.45,-22,38,-98,"willow","#ffc046","#fff0b0"],[11.6,22,38,-98,"willow","#ffc046","#fff0b0"],[11.9,0,45,-106,"glitter","#fff4dc","#ffd866"],[12.2,-12,29,-94,"peony","#ff6fae","#ffd0e6"],[12.35,12,29,-94,"peony","#ffd866","#ff9a4a"]],pp=.95;function mp(){let i=Pt(1234),e=5,t=[],n=[],s=[],r=[],o=(v,A,M,y,E,b,x)=>{for(let S=0;S<e;S++)t.push(v[0],v[1],v[2]),n.push(A.x,A.y,A.z),s.push(M,y,S*x,E),r.push(b.r,b.g,b.b)};for(let[v,A,M,y,E,b,x]of pa){let S=It(b),T=It(x),P=[A,M,y],L={peony:170,ring:110,heart:150,willow:130,glitter:150}[E];for(let N=0;N<L;N++){let R;if(E==="ring"){let O=N/L*Math.PI*2,H=.35;R=new I(Math.cos(O),Math.sin(O)*Math.cos(H),Math.sin(O)*Math.sin(H)).multiplyScalar(25+i()*1.5)}else if(E==="heart"){let O=N/L*Math.PI*2,H=Math.sin(O);R=new I(16*H*H*H,13*Math.cos(O)-5*Math.cos(2*O)-2*Math.cos(3*O)-Math.cos(4*O),(i()-.5)*2).multiplyScalar(1.55+i()*.06)}else{let O=i()*2-1,H=i()*Math.PI*2,B=Math.sqrt(1-O*O),G=E==="willow"?17+i()*3:23+i()*4;R=new I(B*Math.cos(H),O,B*Math.sin(H)).multiplyScalar(G)}let D=E==="willow"?3.1+i()*.5:E==="glitter"?2.2+i()*.5:1.8+i()*.4;o(P,R,v,D,E==="willow"?1.6:E==="heart"?.25:.8,i()<.75?S:T,E==="willow"?.07:.04)}}let a=new rt;a.setAttribute("position",new De(t,3)),a.setAttribute("aVel",new De(n,3)),a.setAttribute("aInfo",new De(s,4)),a.setAttribute("aColor",new De(r,3));let l={uTime:{value:0},uScale:{value:300}},c=new yi(a,new ht({uniforms:l,transparent:!0,depthWrite:!1,blending:Tt,vertexShader:`attribute vec3 aVel, aColor; attribute vec4 aInfo; uniform float uTime, uScale;
            varying vec3 vColor; varying float vA;
            void main() {
                float t = uTime - aInfo.x - aInfo.z, life = aInfo.y;
                if (t < 0.0 || t > life) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
                float drag = 1.7;
                vec3 p = position + aVel * (1.0 - exp(-drag * t)) / drag;
                p.y -= 0.5 * 3.2 * aInfo.w * t * t;
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                gl_Position = projectionMatrix * mv;
                float k = t / life, trail = aInfo.z / 0.04;
                float fade = (1.0 - smoothstep(0.5, 1.0, k)) / (1.0 + trail * 0.9);
                float hot = 1.0 - smoothstep(0.0, 0.07, k);
                float flick = 0.75 + 0.25 * sin(uTime * 40.0 + aVel.x * 3.0);
                vColor = mix(aColor, vec3(1.0, 0.95, 0.85), hot * 0.5) * fade * flick * smoothstep(0.0, 0.06, t) * 3.0;
                gl_PointSize = uScale * (1.0 - 0.45 * k) * (1.0 - trail * 0.12) / -mv.z;
                vA = fade;
            }`,fragmentShader:`varying vec3 vColor; varying float vA;
            void main() { float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r); a = a * a;
                gl_FragColor = vec4(vColor * a, 1.0); }`}));c.frustumCulled=!1;let h=[],d=[],f=[];for(let[v,A,M,y]of pa)for(let E=0;E<12;E++)h.push(A*.75,3,y+6),d.push(A,M,y),f.push(v-pp,E*.022,i()*6.28);let u=new rt;u.setAttribute("position",new De(h,3)),u.setAttribute("aTo",new De(d,3)),u.setAttribute("aInfo",new De(f,3));let p=new yi(u,new ht({uniforms:l,transparent:!0,depthWrite:!1,blending:Tt,vertexShader:`attribute vec3 aTo, aInfo; uniform float uTime, uScale; varying float vA;
            void main() {
                float t = (uTime - aInfo.x - aInfo.y) / ${pp.toFixed(2)};
                if (t < 0.0 || t > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
                float e = 1.0 - (1.0 - t) * (1.0 - t);
                vec3 p = mix(position, aTo, e) + vec3(sin(t * 18.0 + aInfo.z) * 0.25, 0.0, 0.0);
                vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
                float tail = aInfo.y / 0.022;
                vA = (1.0 - tail / 12.0) * (0.6 + 0.4 * sin(uTime * 50.0 + tail));
                gl_PointSize = uScale * 0.55 * (1.0 - tail * 0.06) / -mv.z;
            }`,fragmentShader:`varying float vA;
            void main() { float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r);
                gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * a * a * vA * 2.5, 1.0); }`}));p.frustumCulled=!1;let _=new Ye;_.add(c,p);let m=new ji("#ffffff",0,0,.6);_.add(m);let g=new ae;return{group:_,light:m,update(v,A){l.uTime.value=v,l.uScale.value=950*A;let M=0,y=0,E=new ae(0,0,0);for(let[b,x,S,T,,P]of pa){let L=v-b;if(L<0||L>1.2)continue;let N=Math.exp(-L*4.5)*Ne(0,.05,L);y+=N,E.add(g.set(P).multiplyScalar(N)),N>M&&(M=N,m.position.set(x,S*.7,T+20))}return m.intensity=y*14,y>0&&m.color.copy(E.multiplyScalar(1/y)),{flash:Math.min(1,y),color:m.color}}}}function gp(){let i=Pt(99),e=[],t=[],n=[],s=(l,c,h,d,f,u,p,_)=>{for(let m=0;m<l;m++)e.push(c+i()*(h-c),d+i()*(f-d),u+i()*(p-u)),t.push(i()*6.28,.5+i(),.6+i()*.8,i()),n.push(_)};s(260,-7,7,.3,9.5,.6,7,0),s(220,-9,9,.2,4,-50,-4,1);let r=new rt;r.setAttribute("position",new De(e,3)),r.setAttribute("aInfo",new De(t,4)),r.setAttribute("aKind",new De(n,1));let o={uTime:{value:0},uScale:{value:60},uMap:{value:ws()},uDust:{value:1},uFlies:{value:0}},a=new yi(r,new ht({uniforms:o,transparent:!0,depthWrite:!1,blending:Tt,vertexShader:`attribute vec4 aInfo; attribute float aKind; uniform float uTime, uScale, uDust, uFlies;
            varying vec3 vC; varying float vRot;
            void main() {
                float ph = aInfo.x, sp = aInfo.y;
                vec3 p = position;
                float vis;
                if (aKind < 0.5) {
                    p.y = mod(p.y + uTime * 0.35 * sp, 9.5) + 0.2;
                    p.x += sin(uTime * 0.7 * sp + ph) * 0.5; p.z += cos(uTime * 0.6 * sp + ph) * 0.4;
                    vis = uDust * (0.4 + 0.6 * pow(0.5 + 0.5 * sin(uTime * 3.0 * aInfo.z + ph), 3.0));
                    vC = mix(vec3(1.0, 0.68, 0.28), vec3(1.0, 0.86, 0.55), aInfo.w) * 1.05;
                } else {
                    p.x += sin(uTime * 0.5 * sp + ph) * 0.8; p.y += sin(uTime * 0.9 * sp + ph * 2.0) * 0.3; p.z += cos(uTime * 0.4 * sp + ph) * 0.8;
                    vis = uFlies * smoothstep(0.55, 1.0, sin(uTime * 1.6 * aInfo.z + ph * 3.0));
                    vC = vec3(0.75, 1.0, 0.45) * 2.2;
                }
                vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
                gl_PointSize = min(uScale * (0.4 + aInfo.z * 0.6) * vis * smoothstep(1.5, 4.0, -mv.z) / -mv.z, 24.0);
                vRot = ph + uTime * 0.5;
            }`,fragmentShader:`uniform sampler2D uMap; varying vec3 vC; varying float vRot;
            void main() { vec2 q = gl_PointCoord - 0.5; float c = cos(vRot), s = sin(vRot);
                q = mat2(c, -s, s, c) * q; float a = texture2D(uMap, q + 0.5).a;
                gl_FragColor = vec4(vC * a, 1.0); }`}));return a.frustumCulled=!1,{group:a,update(l,c){o.uTime.value=l,o.uScale.value=60*c,o.uDust.value=1-Ne(3.4,4.2,l),o.uFlies.value=Ne(3,4.5,l)}}}function xp(i,e){let t=Pt(555),n=520,s=[],r=[],o=[],a=[],l=[],c=[],h=["#ff5c9a","#ff8fbd","#ffd54f","#ffffff","#c9a4ff","#ff3d7f","#ffe9a8"].map(p=>It(p));for(let p=0;p<n;p++){let _=i.x+(t()-.5)*7,m=i.z+(t()-.5)*6,g=4.5+t()*3.5,v=e+t()*2.4,A=.55+t()*.45,M=2+t()*4,y=t()*100,E=h[Math.floor(t()*h.length)],b=t()<.6?1:0,x=b?.09:.06,S=b?.11:.035,T=[[-x,-S,0,0],[x,-S,1,0],[x,S,1,1],[-x,S,0,1]];for(let[L,N,R,D]of T)s.push(L,N,0),r.push(R,D),o.push(_,g,m),a.push(v,A,M,y+b*1e3),l.push(E.r,E.g,E.b);let P=p*4;c.push(P,P+1,P+2,P,P+2,P+3)}let d=new rt;d.setAttribute("position",new De(s,3)),d.setAttribute("uv",new De(r,2)),d.setAttribute("aStart",new De(o,3)),d.setAttribute("aInfo",new De(a,4)),d.setAttribute("aColor",new De(l,3)),d.setIndex(c);let f={uTime:{value:0},uMap:{value:Qd()}},u=new Te(d,new ht({uniforms:f,transparent:!0,depthWrite:!1,side:xt,vertexShader:`attribute vec3 aStart, aColor; attribute vec4 aInfo; uniform float uTime;
            varying vec2 vUv; varying vec3 vC; varying float vA, vPetal;
            mat3 rot(vec3 ax, float a) { ax = normalize(ax); float s = sin(a), c = cos(a), oc = 1.0 - c;
                return mat3(oc * ax.x * ax.x + c, oc * ax.x * ax.y + ax.z * s, oc * ax.z * ax.x - ax.y * s,
                            oc * ax.x * ax.y - ax.z * s, oc * ax.y * ax.y + c, oc * ax.y * ax.z + ax.x * s,
                            oc * ax.z * ax.x + ax.y * s, oc * ax.y * ax.z - ax.x * s, oc * ax.z * ax.z + c); }
            void main() {
                float t = uTime - aInfo.x;
                vPetal = step(999.0, aInfo.w);
                float seed = mod(aInfo.w, 1000.0);
                if (t < 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
                vec3 p = aStart + vec3(sin(t * 1.3 + seed) * 0.4, -aInfo.y * t, cos(t * 1.1 + seed * 1.7) * 0.4);
                mat3 m = rot(vec3(sin(seed), cos(seed * 1.3), 0.6), t * aInfo.z + seed);
                vec3 n = m * vec3(0.0, 0.0, 1.0);
                vec4 mv = modelViewMatrix * vec4(p + m * position, 1.0);
                gl_Position = projectionMatrix * mv;
                vUv = uv;
                float face = abs(dot(normalize(n), normalize(-mv.xyz)));
                vC = aColor * (0.45 + 0.75 * face) * 1.25;
                vA = smoothstep(0.0, 0.3, t) * (1.0 - smoothstep(0.15, 0.0, p.y));
            }`,fragmentShader:`uniform sampler2D uMap; varying vec2 vUv; varying vec3 vC; varying float vA, vPetal;
            void main() { float a = vPetal > 0.5 ? texture2D(uMap, vUv).a : 1.0; if (a * vA < 0.05) discard;
                gl_FragColor = vec4(vC, a * vA); }`}));return u.frustumCulled=!1,{group:u,update(p){f.uTime.value=p}}}var wu=14,yp=13.35,xn=10.35,vp=10.75,Mp=new Yr([[0,gn(0,3,23)],[2.4,gn(0,2.6,11)],[3.3,gn(0,2.85,6.4)],[4.05,gn(0,2.9,.4)],[5.3,gn(.5,4.8,-6.5)],[7.1,gn(1.7,7.6,-12)],[8.8,gn(1.9,3.3,-18.6)],[10.3,gn(.35,.82,-25)],[13.8,gn(-.6,.92,-24.6)]]),Sp=new Yr([[0,gn(0,6.6,0)],[2.4,gn(0,4.1,0)],[3.3,gn(0,3.8,-6)],[4.05,gn(0,4,-24)],[5.3,gn(0,9.5,-64)],[7.1,gn(0,11.5,-64)],[8.8,gn(0,3,-33)],[10.3,gn(0,1.02,-28.6)],[13.8,gn(0,1.26,-28.6)]]),Ep=new Yr([[0,40],[4,44],[8,42],[10.3,38],[13.8,36]]),Qn=[4,9.7,10.3],lv=1.05,cv=-28.6,bp=i=>{let e=Math.min(Math.max(i-Qn[0],0),Qn[1]-Qn[0]),t=Xt(i-Qn[1],0,Qn[2]-Qn[1]),n=Qn[2]-Qn[1];return lv*(e+t-t*t/(2*n))},hv=bp(99),uv=cv-hv,_p={yoovy:-.27,googy:.27},fv=(i,e)=>e.some(t=>i>t&&i<t+.13);function Au(i,e){let t=i==="yoovy",n=bp(e),s=uv+n,r=e<Qn[1]?e>Qn[0]?1:0:1-Xt((e-Qn[1])/(Qn[2]-Qn[1])),o=1-Ne(xn-.05,xn+.2,e),a=Ei(e,xn,xn+.28,12,12.4),l=Ne(12.05,12.45,e),c=e-(xn+.18),d=c>0&&c<.5?.13*4*(c/.5)*(1-c/.5):0,f=c>0&&c<.5?1-2*c/.5:0,u=Ei(e,xn+.08,xn+.16,xn+.16,xn+.26)*.06+Ei(e,xn+.66,xn+.72,xn+.74,xn+.86)*.08,p=(t?1:-1)*.42*Ei(e,8.5,8.9,9.3,9.7),_=e>xn-.05&&e<12.6?"laugh":fv(e,t?[5.7,7.9,10,13]:[6.3,8.4,12.9])?"blink":"open",m=Ne(xn,xn+.4,e);return{x:_p[i]*(1+.38*m),turn:(t?-.22:.22)*m,z:s,walk:r,dist:n,hold:o,holdSide:t?1:-1,holdTarget:new I(-_p[i],.44,.06),cheer:a,wave:l,waveSide:t?-1:1,jump:d,jumpVel:f,squash:u,look:p,face:_,tilt:(t?-.05:.06)*Ne(10.6,11.2,e),nod:.06*Ei(e,12.5,12.8,13,13.4)}}var Tp={length:wu,handoff:yp,gates:jt[0],cheer:xn,title:vp,bursts:pa.map(i=>i[0])};function dv(i){let e=i.texture("stone",()=>Cc()),t=()=>new Je({map:e.map,normalMap:e.normalMap,normalScale:new le(.9,.9),roughness:.86}),n=t();n.onBeforeCompile=l=>{l.uniforms.uUp={value:new ae(1,.62,.32).multiplyScalar(.32)},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY;
uniform vec3 uUp;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uUp * diffuseColor.rgb * (1.0 - smoothstep(1.5, 20.0, vWY));`)},n.customProgramCacheKey=()=>"castle-uplit";let s=(l,c)=>{let h=i.texture(l,()=>Pc(c));return new Jt({map:h.map,normalMap:h.normalMap,roughness:.48,clearcoat:.4,clearcoatRoughness:.25})},r=Jd(),o=i.texture("grass",()=>$d()),a=i.texture("window",()=>Lc());return{stone:t(),castleStone:n,roofPink:s("shinglesPink","#e2559a"),roofPurple:s("shinglesPurple","#7a4ae0"),cobbles:new Je({map:r.map,normalMap:r.normalMap,roughness:.72,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),grass:new Je({map:o.map,normalMap:o.normalMap,roughness:.95,color:"#c8dcc0"}),carpet:new Jt({map:i.texture("carpet",()=>Ic()),roughness:.9,sheen:.7,sheenColor:"#c8204f",sheenRoughness:.5}),window:new Mt({map:a,transparent:!0,color:new ae(2.3,1.85,1.3)}),windowLit:new Mt({map:a,transparent:!0,vertexColors:!0,color:new ae(2.3,1.85,1.3)}),enamel:new Jt({color:"#2546c9",roughness:.3,metalness:.05,clearcoat:1,clearcoatRoughness:.06}),enamelBright:new Jt({color:"#3a6bff",roughness:.3,metalness:.05,clearcoat:1,clearcoatRoughness:.05}),lanternGlass:new Je({color:"#ffcf80",emissive:"#ffae42",emissiveIntensity:2.4,transparent:!0,opacity:.88,roughness:.2}),flame:new Mt({color:new ae(4.5,2.8,1.2)}),iron:new Je({color:"#2c2840",metalness:.7,roughness:.42}),pot:new Je({color:"#f4eefc",roughness:.45}),trunk:new Je({color:"#5a3d2b",roughness:.9}),leaf:new Je({color:"#2f7040",roughness:.8,normalMap:o.normalMap,normalScale:new le(1.4,1.4)}),hedge:new Je({color:"#2a6338",roughness:.85,normalMap:o.normalMap,normalScale:new le(1.6,1.6)}),tree:new Je({color:"#2a5546",roughness:.9}),pine:new Je({color:"#1f463e",roughness:.9}),flower:new Je({color:"#ffffff",roughness:.6,emissive:"#ffffff",emissiveIntensity:.08}),pool:new Mt({map:Kn(1.5),color:"#ffb35c",transparent:!0,blending:Tt,depthWrite:!1,vertexColors:!0,opacity:.38}),...Qr()}}function Ru(i=.65){let e=new Te(new gt(2,2),new ht({transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`varying vec2 vUv; void main() { vec2 q = vUv - 0.5; float v = clamp(1.0 - dot(q, q) * 1.25, 0.0, 1.0);
            gl_FragColor = vec4(0.0, 0.0, 0.0, ${i.toFixed(2)} * (1.0 - v)); }`}));return e.frustumCulled=!1,e.renderOrder=999,e}async function wp(i){let{renderer:e,bloom:t}=i,n=new Hn;n.fog=new Gs(It("#2b1c52"),.0042);let s=new zt(40,16/9,.25,2500),r=dv(i),o=ap(e);n.environment=o.texture,n.environmentIntensity=.42;let a=op();n.add(a.group);let l=lp(r);n.add(l.group);let c=Uc(r);n.add(c.group);let h=hp(r);n.add(h.group);let d=mp();n.add(d.group),d.group.name="fireworks";let f=gp();n.add(f.group),f.group.name="motes";let u=Qs("yoovy",i.faces.yoovy,r),p=Qs("googy",i.faces.googy,r);n.add(u.root,p.root),u.root.name="yoovy",p.root.name="googy",n.add(Ru());let _=xp(new I(0,0,-28.6),xn+.1);n.add(_.group),_.group.name="shower";let m=new Qi(It("#5a6cc0"),It("#2a1838"),.35),g=new Di(It("#b9c6ff"),1.25);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),g.shadow.camera.left=-11,g.shadow.camera.right=11,g.shadow.camera.top=11,g.shadow.camera.bottom=-11,g.shadow.camera.near=1,g.shadow.camera.far=140,g.shadow.bias=-4e-4,g.shadow.normalBias=.02,g.shadow.radius=3;let v=new Go(It("#ffd6a0"),0,60,.34,.7,1.2);v.position.set(4.5,9.5,-14),v.target.position.set(0,.7,-29);let A=new Di(It("#ffb070"),0);A.position.set(.5,6,-40),A.target.position.set(0,0,-28);let M=new ji(It("#ffc77a"),0,30,1.6);M.position.set(0,3.2,-3.2),n.add(m,g,g.target,v,v.target,A,A.target,M);let y=new I,E=new I,b=new I,x=new I(0,1,0).cross(Rs).normalize(),S=Rs.clone().cross(x),T=L=>{let N=i.px;e.shadowMap.autoUpdate=!0,Mp.at(L,y),Sp.at(L,E);let R=Ep.at(L),D=s.aspect,z=Math.tan(R*Math.PI/360)*16/9,O=D>=16/9?1:.5+.5*Ne(.45,16/9,D),H=Math.max(Math.tan(R*Math.PI/360),Math.min(z*O/D,Math.tan(28*Math.PI/180)));s.fov=Math.atan(H)*360/Math.PI,s.position.copy(y),s.lookAt(E),s.updateProjectionMatrix(),a.update(L,s,N),l.update(L),c.update(L),h.update(L),f.update(L,N),_.update(L);let B=d.update(L,N);a.uniforms.uFlash.value=B.flash*.18,a.uniforms.uFlashColor.value.copy(B.color),u.update(L,Au("yoovy",L)),p.update(L,Au("googy",L));let G=Ne(jt[0],jt[0]+.8,L),U=Ei(L,jt[0],jt[0]+.45,jt[0]+.7,jt[0]+1.3);M.intensity=U*40+G*6,v.intensity=G*30,A.intensity=G*2.2,m.intensity=.35+B.flash*.25,e.toneMapping=Gn,e.toneMappingExposure=1+U*.12,b.copy(u.root.position).x+=.27,b.multiplyScalar(Ne(3.4,4.6,L));let J=22/g.shadow.mapSize.x,Y=Math.round(b.dot(x)/J)*J,de=Math.round(b.dot(S)/J)*J,ge=b.dot(Rs),Le=b.set(0,0,0).addScaledVector(x,Y).addScaledVector(S,de).addScaledVector(Rs,ge);g.target.position.copy(Le),g.position.copy(Le).addScaledVector(Rs,70),t.threshold=1,t.radius=.5,t.strength=.6+U*.25,i.render()},P={scene:n,camera:s,onTier(L){L.shadow&&g.shadow.mapSize.set(L.shadow,L.shadow),g.castShadow=!!L.shadow},onResize(L){s.aspect=L},draw:T,play(L,{onTime:N}={}){i.use(P),L.appendChild(i.canvas);let R=0,D=!1,z=0,O=0,H=0,B=0,G=0,U=()=>{let Y=L.clientWidth||innerWidth,de=L.clientHeight||innerHeight;i.canvas.width===Math.floor(Y*e.getPixelRatio())&&i.canvas.height===Math.floor(de*e.getPixelRatio())||(i.resize(Y,de),T(G))};U(),T(0),window.addEventListener("resize",U);let J=Y=>{if(D)return;z||(z=Y);let de=(Y-z)/1e3;G=Math.min(de,wu),T(G),N&&N(de),B&&de>.8&&(H++,Y-B>45&&O++),B=Y,H===30&&(O>20&&i.tier>0&&(i.setTier(i.tier-1),T(G)),H=O=0),R=requestAnimationFrame(J)};return R=requestAnimationFrame(J),{stop(){D=!0,cancelAnimationFrame(R),window.removeEventListener("resize",U)},still(){T(G);let Y=document.createElement("canvas");return Y.width=i.canvas.width,Y.height=i.canvas.height,Y.getContext("2d").drawImage(i.canvas,0,0),Y}}},fits(){i.use(P);let L=e.getContext(),N=new Uint8Array(4),R=()=>L.readPixels(0,0,1,1,L.RGBA,L.UNSIGNED_BYTE,N);for(let D=i.tier;D>=0;D--){i.setTier(D),T(10.8),R();let z=performance.now();if(T(6.3),R(),T(11.4),R(),(performance.now()-z)/2<(D?24:42))return!0}return!1},renderAt(L,N,R){i.use(P),N&&R&&i.resize(N,R),T(L)},release(){Nc(i,n),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null)}};return i.use(P),T(0),e.compileAsync&&await e.compileAsync(n,s),P}var Cu={x0:-48,x1:48,z0:-100,z1:72},Cs=[{key:"castle",x:0,z:-49,r:5.4,h:7.6,stop:[0,-42.6]},{key:"math",x:4.9,z:-37,r:3.3,h:6.3,stop:[1.9,-34.2]},{key:"hebrew",x:-4.9,z:-27,r:3.2,h:4.8,stop:[-1.9,-24.2]},{key:"reading",x:4.8,z:-17,r:3.1,h:4.2,stop:[1.9,-14.3]},{key:"english",x:-5.1,z:-7,r:3.3,h:5.6,stop:[-1.9,-4.2]},{key:"geography",x:4.9,z:3,r:3.2,h:6.6,stop:[1.9,5.8]},{key:"biology",x:-4.9,z:13,r:3.2,h:3.2,stop:[-1.9,15.8]},{key:"memory",x:6.3,z:23,r:3,h:3.6,stop:[1.8,25.6]},{key:"puzzle",x:-3,z:33.5,r:3.2,h:4.4,stop:[-3,33.5]},{key:"chess",x:4.9,z:43.5,r:3.3,h:3,stop:[1.8,46.2]}],jr=i=>Cs.find(e=>e.key===i),li={x:-3,z:33.5,ax:.399,az:.917,half:2.9,rise:.95},Bc=class{constructor(e,t=.25){let n=new zn(e.map(r=>new I(r[0],0,r[1])),!1,"centripetal"),s=Math.max(8,Math.round(n.getLength()/t));this.pts=n.getSpacedPoints(s).map(r=>[r.x,r.z]),this.len=[0];for(let r=1;r<this.pts.length;r++)this.len.push(this.len[r-1]+Math.hypot(this.pts[r][0]-this.pts[r-1][0],this.pts[r][1]-this.pts[r-1][1]));this.length=this.len[this.len.length-1],this.rows=new Map;for(let r=0;r<this.pts.length-1;r++){let o=Math.floor(Math.min(this.pts[r][1],this.pts[r+1][1])),a=Math.floor(Math.max(this.pts[r][1],this.pts[r+1][1]));for(let l=o;l<=a;l++)this.rows.has(l)||this.rows.set(l,[]),this.rows.get(l).push(r)}}at(e){let{pts:t,len:n}=this;e=Math.min(this.length,Math.max(0,e));let s=0,r=n.length-1;for(;r-s>1;){let h=s+r>>1;n[h]<=e?s=h:r=h}let o=(e-n[s])/Math.max(1e-6,n[r]-n[s]),a=t[s],l=t[r],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1;return{x:a[0]+(l[0]-a[0])*o,z:a[1]+(l[1]-a[1])*o,tx:(l[0]-a[0])/c,tz:(l[1]-a[1])/c}}near(e,t,n=4){let s=null,r=new Set;for(let o=Math.floor(t-n);o<=Math.floor(t+n);o++){let a=this.rows.get(o);if(a)for(let l of a){if(r.has(l))continue;r.add(l);let c=this.pts[l],h=this.pts[l+1],d=h[0]-c[0],f=h[1]-c[1],u=d*d+f*f||1,p=Math.min(1,Math.max(0,((e-c[0])*d+(t-c[1])*f)/u)),_=Math.hypot(e-c[0]-d*p,t-c[1]-f*p);_<=n&&(!s||_<s.d)&&(s={d:_,s:this.len[l]+Math.sqrt(u)*p})}}return s}project(e,t){let n=1/0,s=0;for(let r=0;r<this.pts.length;r++){let o=Math.hypot(this.pts[r][0]-e,this.pts[r][1]-t);o<n&&(n=o,s=this.len[r])}return s}},En=li,An=new Bc([[0,-45.4],[0,-42.6],[.9,-38.2],[1.9,-34.2],[.4,-29.2],[-1.9,-24.2],[-.3,-19.2],[1.9,-14.3],[.3,-9.2],[-1.9,-4.2],[-.2,.8],[1.9,5.8],[.3,10.8],[-1.9,15.8],[-.2,20.6],[1.8,25.6],[-.9,28.6],[En.x-En.ax*(En.half+.6),En.z-En.az*(En.half+.6)],[En.x,En.z],[En.x+En.ax*(En.half+.6),En.z+En.az*(En.half+.6)],[-.6,40.4],[1.8,46.2],[3,48.2]]);for(let i of Cs)i.s=An.project(i.stop[0],i.stop[1]);var Ps=An.project(En.x,En.z),Oc=new Bc([[14.5,27.6],[9,29.9],[3,31.3],[En.x,En.z],[-8.5,36.2],[-13.5,37.3],[-19.5,39.6],[-27,40.6]],.4);var Is=new ae;function ci(i,e){let t=i.attributes.position.count,n=new Float32Array(t*3);if(typeof e=="function"){let s=i.attributes.position;for(let r=0;r<t;r++){let o=e(s.getX(r),s.getY(r),s.getZ(r));Is.set(o),n[r*3]=Is.r,n[r*3+1]=Is.g,n[r*3+2]=Is.b}}else{Is.set(e);for(let s=0;s<t;s++)n[s*3]=Is.r,n[s*3+1]=Is.g,n[s*3+2]=Is.b}return i.setAttribute("color",new yt(n,3)),i}var pv=new it,mv=new Gt,gv=new Zt,xv=new I,_v=new I;function eo(i,{x:e=0,y:t=0,z:n=0,rx:s=0,ry:r=0,rz:o=0,s:a=1,sx:l=1,sy:c=1,sz:h=1}={}){return i.applyMatrix4(pv.compose(xv.set(e,t,n),mv.setFromEuler(gv.set(s,r,o)),_v.set(a*l,a*c,a*h)))}var Et=(i,e,t)=>ci(t?eo(i,t):i,e),hi=(i,e,t,n,s)=>Et(new Wt(i,e,t),n,s),jn=(i,e,t,n,s,r,o=3)=>Et(new Kr(i,e,t,o,Math.min(n,i/2,e/2,t/2)),s,r),_n=(i,e,t,n,s,r=20,o=!1)=>Et(new dt(i,e,t,r,1,o),n,s),ma=(i,e,t,n,s=20)=>Et(new Ct(i,e,s),t,n),bi=(i,e,t,n=18)=>Et(new je(i,n,Math.max(8,Math.round(n*.7))),e,t),bn=(i,e,t,n=2)=>Et(new kn(i,n),e,t),kc=(i,e,t,n,s=32)=>Et(new rn(i,e,10,s),t,n),Ap=(i,e,t,n=28)=>Et(new Xs(i.map(([s,r])=>new le(s,r)),n),e,t);function to(i,e,t,n,s=.04,r=10){let o=new Ln(i,{depth:e,bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:r});return o.translate(0,0,-e/2),Et(o,t,n)}function Gc(i,e,t,{closed:n=!1,radial:s=8,seg:r}={}){let o=i.map(l=>l.isVector3?l:new I(l[0],l[1],l[2])),a=new Ki(new zn(o,n,"centripetal"),r||Math.max(6,o.length*6),e,s,n);return ci(a,t)}function Oi(i,e,t=1,n=null){let s=i.attributes.position,r=Pt(t),o=new Map;for(let a=0;a<s.count;a++){let l=s.getX(a),c=s.getY(a),h=s.getZ(a),d=Math.round(l*1e3)+"_"+Math.round(c*1e3)+"_"+Math.round(h*1e3),f=o.get(d);f===void 0&&(f=1+(r()-.5)*2*e,o.set(d,f)),!(n!==null&&c<=n)&&s.setXYZ(a,l*f,c*(1+(f-1)*.5),h*f)}return i.computeVertexNormals(),i}function Ft(i,e,{cast:t=!0,receive:n=!0}={}){let s=i.map(o=>{let a=o.index?o.toNonIndexed():o;a.attributes.uv||a.setAttribute("uv",new yt(new Float32Array(a.attributes.position.count*2),2)),a.attributes.normal||a.computeVertexNormals(),a.attributes.color||ci(a,"#ffffff");for(let l of Object.keys(a.attributes))["position","normal","uv","color"].includes(l)||a.deleteAttribute(l);return a}),r=new Te($n(s,!1),e);return r.castShadow=t,r.receiveShadow=n,r}function Hc(i,e,t){let n=i*374761393+e*668265263+t*144665|0;return n=(n^n>>>13)*1274126177|0,((n^n>>>16)>>>0)/4294967296}function ga(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Hc(n,s,t),h=Hc(n+1,s,t),d=Hc(n,s+1,t),f=Hc(n+1,s+1,t);return(c+(h-c)*a+(d-c)*l+(c-h-d+f)*a*l)*2-1}function Ls(i,e,t=0,n=3){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*ga(i*o,e*o,t+l*17),a+=r,r*=.5,o*=2.03;return s/a}function Pu(i,e,t,{srgb:n=!0}={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new ii(s);return n&&(r.colorSpace=tn),r.anisotropy=4,r}var zc=class{constructor(e=2048,t=1024){this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.cells=new Map,this.x=0,this.y=0,this.row=0,this.texture=new ii(this.canvas),this.texture.colorSpace=tn,this.texture.anisotropy=4,this.material=new Je({map:this.texture,roughness:.75,alphaTest:.4,side:xt})}cell(e,t,n,s){if(this.cells.has(e))return this.cells.get(e);let r=4,o=this.canvas.width,a=this.canvas.height;if(this.x+t+r>o&&(this.x=0,this.y+=this.row+r,this.row=0),this.y+n>a)throw new Error("Atlas: the sheet is full ("+e+")");let l=this.x,c=this.y;this.ctx.save(),this.ctx.translate(l,c),this.ctx.beginPath(),this.ctx.rect(0,0,t,n),this.ctx.clip(),s(this.ctx,t,n),this.ctx.restore(),this.x+=t+r,this.row=Math.max(this.row,n);let h={u0:l/o,v0:1-(c+n)/a,u1:(l+t)/o,v1:1-c/a,w:t,h:n};return this.cells.set(e,h),this.texture.needsUpdate=!0,h}glyph(e,{color:t="#ffffff",bg:n=null,size:s=128,scale:r=.74,stroke:o=null,font:a="'Varela Round', 'Fredoka', 'Arial Rounded MT Bold', Arial, sans-serif"}={}){return this.cell("g:"+e+t+n+s+o,s,s,(l,c,h)=>{if(n){let _=c*.2;l.fillStyle=n,l.beginPath(),l.moveTo(_,0),l.arcTo(c,0,c,h,_),l.arcTo(c,h,0,h,_),l.arcTo(0,h,0,0,_),l.arcTo(0,0,c,0,_),l.closePath(),l.fill()}l.font=`700 ${Math.round(h*r)}px ${a}`,l.textAlign="center",l.textBaseline="alphabetic";let d=l.measureText(e),f=d.actualBoundingBoxAscent||h*r*.7,u=d.actualBoundingBoxDescent||0,p=h/2+(f-u)/2;o&&(l.lineWidth=h*.07,l.strokeStyle=o,l.lineJoin="round",l.strokeText(e,c/2,p)),l.fillStyle=t,l.fillText(e,c/2,p)})}card(e,t,n,s){let r=new gt(t,n),o=r.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,e.u0+o.getX(a)*(e.u1-e.u0),e.v0+o.getY(a)*(e.v1-e.v0));return s?eo(r,s):r}mesh(e){let t=new Te($n(e.map(n=>n.index?n.toNonIndexed():n),!1),this.material);return t.castShadow=!1,t.receiveShadow=!1,t}sprite(e,t,n="#ffffff",s={}){let r=this.texture.clone();r.repeat.set(e.u1-e.u0,e.v1-e.v0),r.offset.set(e.u0,e.v0),r.needsUpdate=!0;let o=new un(new sn({map:r,color:n,transparent:!0,depthWrite:!1,...s}));return o.scale.set(t*e.w/e.h,t,1),o}};var rs=.5,js=(i,e,t,n,s,r)=>Math.hypot((i-t)/s,(e-n)/r);function xa(i,e){return{forest:1-Ne(.75,1.2,js(i,e,-10.5,-27,9.5,8.5)),desert:1-Ne(.78,1.12,js(i,e,14.5,3.2,13.2,8.4)),rocky:1-Ne(.7,1.2,js(i,e,-7.8,13.2,6.4,5)),mountain:Math.max(Ne(9.5,19,i)*Ne(-24,-33,e),Ne(-60,-72,e)),island:1-Ne(.35,1,js(i,e,6.3,23,3.6,3.2))}}function Iu(i,e){let t=Ls(i*.06,e*.06,11),n=Ls(i*.21,e*.21,23),s=xa(i,e),r=.66+.26*t+.06*n,o=1-Math.abs(Ls(i*.075+3.1,e*.075+9.7,37)),a=Ne(-11,-22,i)*Ne(-34,-46,e);r+=s.mountain*(1.4+3.2*o*o),r+=a*(1-s.mountain)*(.8+3*o),r=fn(r,2.9,1-Ne(.5,1,js(i,e,0,-49.5,10.5,9.5))),r+=s.desert*.6*(.5+.5*ga(i*.24+e*.1,e*.32,5)),r+=s.rocky*.22*ga(i*.7,e*.7,9);let l=-17.5+2.6*Math.sin(e*.085+.6)+1.2*Math.sin(e*.21+2),c=16.5+2.2*Math.sin(e*.09+1.3)+1.2*Math.sin(e*.19),h=Ne(l+3,l-3,i);h=Math.max(h,1-Ne(.7,1.15,js(i,e,-13.5,-6.4,9.2,5.6))),h=Math.max(h,Ne(c-3,c+3,i)*Ne(9,17,e)),h=Math.max(h,1-Ne(.68,1.12,js(i,e,10.2,23.2,8.6,6.4))),h=Math.max(h,Ne(58.5,64,e+1.5*Math.sin(i*.11))),r=fn(r,-1.8,h),r=Math.max(r,-1.2+2*s.island);let d=Oc.near(i,e,3);return d&&(r=fn(r,Math.min(r,-.9),1-Ne(.75,2.1,d.d))),r}var Cp=Cs.filter(i=>["math","hebrew","reading","geography","biology","chess"].includes(i.key));for(let i of Cp)i.pad=Math.max(.5,Iu(i.x,i.z));function Rp(i,e,t){for(let n of Cp){let s=Math.hypot(i-n.x,e-n.z);if(s<n.r*1.3)return fn(n.pad,t,Ne(n.r*.8,n.r*1.3,s))}return t}function yv(){let i=Pt(71),e=Pu(512,512,(t,n)=>{t.fillStyle="#e9e9e9",t.fillRect(0,0,n,n);for(let s=0;s<220;s++){let r=i()*n,o=i()*n,a=18+i()*54,l=i()<.5,c=t.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,l?"rgba(170,170,170,0.16)":"rgba(255,255,255,0.30)"),c.addColorStop(1,l?"rgba(150,150,150,0)":"rgba(255,255,255,0)"),t.fillStyle=c;for(let h of[-n,0,n])for(let d of[-n,0,n])t.save(),t.translate(h,d),t.fillRect(r-a,o-a,a*2,a*2),t.restore()}t.lineCap="round";for(let s=0;s<7e3;s++){let r=i()*n,o=i()*n,a=2+i()*5,l=-Math.PI/2+(i()-.5)*1.1;t.strokeStyle=i()<.5?`rgba(255,255,255,${.2+i()*.3})`:`rgba(110,110,110,${.18+i()*.25})`,t.lineWidth=1+i()*1.2,t.beginPath(),t.moveTo(r,o),t.lineTo(r+Math.cos(l)*a,o+Math.sin(l)*a),t.stroke()}});return e.wrapS=e.wrapT=Zi,e.anisotropy=8,e}function vv(){let i=Pt(29),e=Pu(256,512,(t,n,s)=>{t.clearRect(0,0,n,s);let r=t.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(176,140,90,0)"),r.addColorStop(.07,"rgba(176,140,90,0.85)"),r.addColorStop(.13,"rgba(232,204,150,1)"),r.addColorStop(.87,"rgba(232,204,150,1)"),r.addColorStop(.93,"rgba(176,140,90,0.85)"),r.addColorStop(1,"rgba(176,140,90,0)"),t.fillStyle=r,t.fillRect(0,0,n,s),t.globalCompositeOperation="source-atop";for(let o=0;o<150;o++){let a=i()*n,l=i()*s,c=16+i()*26,h=12+i()*18,d=Math.round(215+i()*34);t.fillStyle=`rgba(${d},${Math.round(d*.87)},${Math.round(d*.63)},0.75)`;for(let f of[-s,0,s])t.beginPath(),t.ellipse(a,l+f,c/2,h/2,i()*.6,0,7),t.fill()}for(let o=0;o<4;o++)t.fillStyle="rgba(255,250,236,0.96)",t.beginPath(),t.ellipse(n/2+(i()-.5)*10,(o+.5)*s/4,15,23,(i()-.5)*.5,0,7),t.fill(),t.strokeStyle="rgba(190,160,110,0.55)",t.lineWidth=3,t.stroke();t.globalCompositeOperation="source-over"});return e.wrapT=Zi,e.anisotropy=8,e}function Pp(){let{x0:i,x1:e,z0:t,z1:n}=Cu,s=Math.round((e-i)/rs),r=Math.round((n-t)/rs),o=new Float32Array((s+1)*(r+1)),a=.25,l=Math.ceil(An.length/a)+1,c=new Float32Array(l),h=new Float32Array(l);for(let H=0;H<l;H++){let B=An.at(H*a);c[H]=Rp(B.x,B.z,Iu(B.x,B.z))}for(let H=0;H<l;H++){let B=0,G=0;for(let U=-8;U<=8;U++){let J=H+U;J>=0&&J<l&&Math.abs(J*a-Ps)>li.half&&(B+=Math.max(.46,c[J]),G++)}h[H]=G?B/G:.5}let d=h[Math.round((Ps-li.half-.5)/a)],f=H=>{let B=Math.abs(H-Ps);if(B<li.half+.5){let Y=Xt(B/li.half);return d+.06+li.rise*(1-Y*Y)*Ne(li.half+.5,li.half-.2,B)}let G=Xt(H/a,0,l-1),U=Math.floor(G),J=Math.min(l-1,U+1);return h[U]+(h[J]-h[U])*(G-U)};for(let H=0;H<=r;H++){let B=t+H*rs;for(let G=0;G<=s;G++){let U=i+G*rs,J=Rp(U,B,Iu(U,B)),Y=Math.abs(U)<9?An.near(U,B,2.6):null;Y&&Math.abs(Y.s-Ps)>li.half-.2&&(J=fn(f(Y.s),J,Ne(.95,2.6,Y.d))),o[H*(s+1)+G]=J}}let u=(H,B)=>{let G=Xt((H-i)/rs,0,s-1e-4),U=Xt((B-t)/rs,0,r-1e-4),J=Math.floor(G),Y=Math.floor(U),de=G-J,ge=U-Y,Le=Y*(s+1)+J;return o[Le]*(1-de)*(1-ge)+o[Le+1]*de*(1-ge)+o[Le+s+1]*(1-de)*ge+o[Le+s+2]*de*ge},p=new gt(e-i,n-t,s,r);p.rotateX(-Math.PI/2),p.translate((i+e)/2,0,(t+n)/2);let _=p.attributes.position,m=new Float32Array(_.count*3),g=new Float32Array(_.count),v=new ae,A=new ae,M={grassA:new ae("#6fc043"),grassB:new ae("#93d658"),grassC:new ae("#b4dc5a"),forest:new ae("#3f9140"),sandA:new ae("#f6d792"),sandB:new ae("#eebd6c"),beach:new ae("#f8e6b4"),rocky:new ae("#bda88f"),rockA:new ae("#7c86b0"),rockB:new ae("#98a1c6"),snow:new ae("#ffffff"),bed:new ae("#d9c48e")};for(let H=0;H<=r;H++)for(let B=0;B<=s;B++){let G=H*(s+1)+B,U=i+B*rs,J=t+H*rs,Y=o[G];_.setY(G,Y);let de=o[H*(s+1)+Math.min(s,B+1)]-o[H*(s+1)+Math.max(0,B-1)],ge=o[Math.min(r,H+1)*(s+1)+B]-o[Math.max(0,H-1)*(s+1)+B],Le=Math.hypot(de,ge)/(2*rs),K=xa(U,J),ie=Ls(U*.33,J*.33,51)*.5+.5,pe=Ls(U*.09,J*.09,61)*.5+.5;v.copy(M.grassA).lerp(M.grassB,.3+ie*.4).lerp(M.grassC,Ne(.5,.95,pe)*.45),v.lerp(M.forest,K.forest*.85),v.lerp(A.copy(M.sandA).lerp(M.sandB,ga(U*.24+J*.1,J*.32,5)*.5+.5),K.desert),v.lerp(M.rocky,K.rocky*.9),v.lerp(M.beach,Math.max(1-Ne(.2,.5,Y),K.island*(1-Ne(.2,1,Y)*0)));let Fe=Math.max(K.mountain*Ne(1.7,3,Y),Ne(.7,1.15,Le)*Ne(1.2,2.2,Y));v.lerp(A.copy(M.rockA).lerp(M.rockB,pe),Fe),g[G]=(1-Fe)*(1-.6*Math.max(K.desert,K.rocky,1-Ne(.2,.5,Y))),v.lerp(M.bed,Ne(0,-.6,Y)*.6),m[G*3]=v.r,m[G*3+1]=v.g,m[G*3+2]=v.b}p.setAttribute("color",new yt(m,3)),p.setAttribute("aGrain",new yt(g,1)),p.computeVertexNormals();let y=p.attributes.uv;for(let H=0;H<y.count;H++)y.setXY(H,_.getX(H)/7,_.getZ(H)/7);let E=new Je({vertexColors:!0,map:yv(),roughness:.94,metalness:0});E.onBeforeCompile=H=>{H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
attribute float aGrain;
varying float vGrain;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGrain = aGrain;`),H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
varying float vGrain;`).replace("#include <map_fragment>",`#ifdef USE_MAP
	diffuseColor *= mix(vec4(1.0), texture2D(map, vMapUv), vGrain);
#endif`)},E.customProgramCacheKey=()=>"ground-grain";let b=new Te(p,E);b.receiveShadow=!0,b.castShadow=!1,b.name="ground";let x=.92,S=[],T=[],P=[],L=[],N=Math.ceil(An.length/.3);for(let H=0;H<=N;H++){let B=Math.min(An.length,H*.3),G=An.at(B),U=f(B)+.05;S.push(G.x+G.tz*x,U,G.z-G.tx*x,G.x-G.tz*x,U,G.z+G.tx*x),T.push(0,B/3.2,1,B/3.2);let J=Ne(0,1.2,B)*Ne(An.length,An.length-1.6,B);if(L.push(1,1,1,J,1,1,1,J),H<N){let Y=H*2;P.push(Y,Y+1,Y+2,Y+1,Y+3,Y+2)}}let R=new rt;R.setAttribute("position",new De(S,3)),R.setAttribute("uv",new De(T,2)),R.setAttribute("color",new De(L,4)),R.setIndex(P),R.computeVertexNormals();let D=new Te(R,new Je({map:vv(),vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,side:xt}));D.receiveShadow=!0,D.renderOrder=1,D.name="road";let z=new Uint8Array((s+1)*(r+1));for(let H=0;H<z.length;H++)z[H]=Math.round(Xt((o[H]+2)/6)*255);let O=new Ji(z,s+1,r+1,Hr,Dn);return O.magFilter=O.minFilter=nn,O.needsUpdate=!0,{ground:b,road:D,heightAt:u,roadY:f,heightMap:O}}function Ip(i){let{x0:e,x1:t,z0:n,z1:s}=Cu,r=Si.merge([Ae.fog,{uHeight:{value:null},uTime:{value:0},uOrigin:{value:new le(e,n)},uSize:{value:new le(t-e,s-n)},uShallow:{value:new ae("#5fe0d8")},uDeep:{value:new ae("#1f86d6")},uFoam:{value:new ae("#ffffff")},uSunDir:{value:new I(0,1,0)},uGlint:{value:1}}]);r.uHeight.value=i;let o=new ht({uniforms:r,fog:!0,vertexShader:`varying vec3 vWorld;
            #include <fog_pars_vertex>
            void main() {
                vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz;
                vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
                #include <fog_vertex>
            }`,fragmentShader:`uniform sampler2D uHeight; uniform float uTime, uGlint; uniform vec2 uOrigin, uSize; uniform vec3 uShallow, uDeep, uFoam, uSunDir;
            varying vec3 vWorld;
            #include <fog_pars_fragment>
            float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
            float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
                return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
            void main() {
                vec2 uv = (vWorld.xz - uOrigin) / uSize;
                float h = texture2D(uHeight, clamp(uv, 0.0, 1.0)).r * 6.0 - 2.0;
                float off = max(max(-uv.x, uv.x - 1.0), max(-uv.y, uv.y - 1.0));      // beyond the ground: open sea
                float depth = max(0.0, -h) + smoothstep(0.0, 0.05, off) * 2.0;
                vec2 p = vWorld.xz;
                float n1 = vnoise(p * 0.55 + vec2(uTime * 0.22, uTime * 0.08)), n2 = vnoise(p * 1.25 - vec2(uTime * 0.15, uTime * 0.26));
                vec3 c = mix(uShallow, uDeep, smoothstep(0.05, 1.35, depth + (n1 - 0.5) * 0.25));
                // ripples of light
                float rip = smoothstep(0.62, 0.9, n1 * 0.6 + n2 * 0.5);
                c += vec3(0.10, 0.16, 0.18) * rip * uGlint;
                // sparkles toward the sun
                vec3 nrm = normalize(vec3((n1 - 0.5) * 0.5, 1.0, (n2 - 0.5) * 0.5));
                vec3 v = normalize(cameraPosition - vWorld);
                float spec = pow(max(dot(reflect(-uSunDir, nrm), v), 0.0), 90.0);
                c += vec3(1.0, 0.95, 0.8) * spec * 1.6 * uGlint;
                // foam lapping at the shore
                float lap = 0.5 + 0.5 * sin(uTime * 1.1 + p.x * 0.7 + p.y * 0.9);
                float foam = 1.0 - smoothstep(0.02, 0.16 + 0.1 * lap, depth);
                foam = max(foam, (1.0 - smoothstep(0.0, 0.07, abs(depth - (0.3 + 0.08 * lap)))) * 0.55 * step(0.001, depth));
                c = mix(c, uFoam, clamp(foam, 0.0, 1.0) * 0.9);
                gl_FragColor = vec4(c, 1.0);
                #include <fog_fragment>
            }`}),a=new Te(new gt(900,900,1,1),o);return a.rotation.x=-Math.PI/2,a.position.set(0,0,-10),a.name="water",{mesh:a,uniforms:r}}var Mv=`
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { return vnoise(p) * 0.5 + vnoise(p * 2.03 + 7.1) * 0.3 + vnoise(p * 4.1 + 3.3) * 0.2; }`;function Lp(){let i={uZenith:{value:new ae},uHorizon:{value:new ae},uGlow:{value:new ae},uCloud:{value:new ae},uSunDir:{value:new I(0,1,0)},uTime:{value:0},uStars:{value:0}},e=new Te(new je(800,40,20),new ht({uniforms:i,side:$t,depthWrite:!1,fog:!1,vertexShader:`varying vec3 vDir;
            void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`uniform vec3 uZenith, uHorizon, uGlow, uCloud, uSunDir; uniform float uTime, uStars; varying vec3 vDir;
            ${Mv}
            void main() {
                vec3 d = normalize(vDir); float h = d.y;
                vec3 c = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, h));
                float s = max(dot(d, uSunDir), 0.0);
                c += uGlow * (pow(s, 6.0) * 0.35 + pow(s, 60.0) * 0.9 + pow(s, 900.0) * 6.0);
                // clouds: soft banks drifting slowly, thicker toward the horizon
                vec2 q = d.xz / (0.25 + max(h, 0.0)) * 1.4 + vec2(uTime * 0.006, 0.0);
                float cl = smoothstep(0.52, 0.8, fbm(q)) * smoothstep(0.0, 0.12, h) * (1.0 - smoothstep(0.35, 0.8, h));
                c = mix(c, uCloud, cl * 0.9);
                // a few stars at night
                vec2 g = d.xz / (0.35 + abs(h)) * 60.0; vec2 id = floor(g);
                float st = step(0.985, hash(id)) * smoothstep(0.35, 0.0, length(fract(g) - 0.5)) * smoothstep(0.05, 0.3, h);
                c += vec3(1.0, 0.96, 0.9) * st * uStars * (0.6 + 0.4 * sin(uTime * 2.0 + hash(id) * 40.0));
                c = mix(c, uHorizon, smoothstep(0.0, -0.3, h));
                gl_FragColor = vec4(c, 1.0);
            }`}));return e.renderOrder=-10,e.frustumCulled=!1,e.name="sky",{dome:e,uniforms:i}}function Vc(i,e){let t=new Hn,n=new Te(new je(60,32,16),new ht({side:$t,uniforms:{uZenith:{value:new ae(e.zenith)},uHorizon:{value:new ae(e.horizon)},uGround:{value:new ae(e.bounce)}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uZenith, uHorizon, uGround; varying vec3 vDir; void main() { vec3 d = normalize(vDir);
            vec3 c = mix(uHorizon, uZenith, smoothstep(0.0, 0.7, d.y));
            c = mix(c, uGround, smoothstep(0.02, -0.25, d.y));
            gl_FragColor = vec4(c, 1.0); }`}));t.add(n);let s=new Te(new gt(26,26),new Mt({color:new ae(e.sun).multiplyScalar(e.envSun),side:xt}));s.position.copy(e.sunDir).multiplyScalar(50),s.lookAt(0,0,0),t.add(s);let r=new bs(i),o=r.fromScene(t,.04);return r.dispose(),t.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),o}var Un=Math.PI*2;function Sv(i){let e=(o,a,l=0,c=0)=>{let h=new Dt;return h.moveTo(l-o/2,c-a/2),h.lineTo(l+o/2,c-a/2),h.lineTo(l+o/2,c+a/2),h.lineTo(l-o/2,c+a/2),h.closePath(),h};if(i==="-")return[e(.9,.3)];if(i==="=")return[e(.9,.3*.85,0,.24),e(.9,.3*.85,0,-.24)];if(i===":"){let o=a=>{let l=new Dt;return l.absarc(0,a,.17,0,Un,!1),l};return[e(.95,.3*.85),o(.4),o(-.4)]}let n=new Dt,s=.48,r=.3/2;return n.moveTo(-r,-s),n.lineTo(r,-s),n.lineTo(r,-r),n.lineTo(s,-r),n.lineTo(s,r),n.lineTo(r,r),n.lineTo(r,s),n.lineTo(-r,s),n.lineTo(-r,r),n.lineTo(-s,r),n.lineTo(-s,-r),n.lineTo(-r,-r),n.closePath(),[n]}function Wc(i,e,t,n){let s=i==="x"?Math.PI/4:0;return Sv(i==="x"?"+":i).map(r=>{let o=new Ln(r,{depth:.3,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2,curveSegments:14});return o.translate(0,0,-.15),s&&o.rotateZ(s),o.scale(e,e,e),Et(o,t,n)})}function Dp(i,e,t,n=null){let s=new gt(i,e,8,2);if(s.translate(i/2,0,0),n){let a=s.attributes.uv;for(let l=0;l<a.count;l++)a.setXY(l,n.u0+a.getX(l)*(n.u1-n.u0),n.v0+a.getY(l)*(n.v1-n.v0))}let r=new Te(s,t),o=s.attributes.position.array.slice();return r.userData.wave=(a,l=0)=>{let c=s.attributes.position;for(let h=0;h<c.count;h++){let d=o[h*3],f=d/i;c.setZ(h,Math.sin(d*5.5-a*6+l)*.09*f*(i/.8))}c.needsUpdate=!0},r}function no(i,e,t,n=0){return[_n(.14*t,.2*t,1.3*t,"#8a5a3c",{x:i,y:n+.65*t,z:e},8),bn(.95*t,"#4fae4a",{x:i,y:n+1.95*t,z:e}),bn(.7*t,"#63c257",{x:i+.55*t,y:n+1.6*t,z:e+.2*t}),bn(.68*t,"#58b84f",{x:i-.5*t,y:n+1.65*t,z:e-.15*t}),bn(.5*t,"#7ed068",{x:i+.1*t,y:n+2.55*t,z:e+.1*t})]}function Xc(i,e,t,n=0){return[_n(.11*t,.16*t,.9*t,"#7a4e32",{x:i,y:n+.45*t,z:e},8),ma(1*t,1.5*t,"#2f8f5a",{x:i,y:n+1.35*t,z:e},10),ma(.8*t,1.35*t,"#38a064",{x:i,y:n+2.15*t,z:e},10),ma(.56*t,1.2*t,"#49b271",{x:i,y:n+2.95*t,z:e},10)]}function Ev(i){let e=new Ye,t=Uc(i.castleMats);t.group.position.set(0,0,76.5);let n=new Ye;return n.scale.setScalar(.19),n.add(t.group),e.add(n),t.group.traverse(s=>{s.isMesh&&s.castShadow&&(s.receiveShadow=!0)}),{group:e,update(s){t.update(s)}}}function bv(i){let e=new Ye,t=Pt(101),n=(h,d,f,u,p,_)=>{let m=new Ct(h,d,11,6);return m.translate(0,d/2,0),Oi(m,.13,p,.001),ci(m,(g,v,A)=>{let M=v/d,y=.07*Math.sin(Math.atan2(A,g)*4+p);return M>_+y?"#ffffff":M<.16?"#79b356":M>.45?"#8f9ccb":"#7d8abb"}),eo(m,{x:f,z:u})},s=[n(2.35,4.7,.1,-.4,3,.62),n(1.6,3.1,-1.75,-.2,8,.7),n(1.25,2.2,1.75,-.9,13,.76)];for(let[h,d,f]of[[-2.5,1.2,.42],[2.5,.6,.36],[1.2,1.9,.25]])s.push(Oi(bn(f,"#8f97b4",{x:h,y:f*.5,z:d},1),.2,5+h));e.add(Ft(s,i.mats.rock));let r=[];for(let h=0;h<15;h++){let d=.25+h*.22,f=2.35*(1-d/4.7)+.06,u=Math.sin(h*.85)*.75;r.push(bi(.085,"#fff8e6",{x:.1+Math.sin(u)*f,y:d,z:-.4+Math.cos(u)*f,sy:.5},8))}r.push(_n(.035,.035,1.25,"#7a5a3a",{x:.1,y:4.7+.5,z:-.4},6)),r.push(bi(.07,"#ffd54f",{x:.1,y:4.7+1.15,z:-.4},8)),e.add(Ft(r,i.mats.paint));let o=[...Wc("+",1,"#ffa726",{x:-1.95,y:.56,z:2,ry:.35,rz:.08}),...Wc("x",.95,"#29b6f6",{x:.15,y:.52,z:2.55,ry:-.1,rz:-.06}),...Wc("-",.95,"#66bb6a",{x:2.05,y:.26,z:1.85,ry:-.4})];e.add(Ft(o,i.mats.gloss));let a=[["=","#ef5350",-1.7,3.5,.9,.62],[":","#ab47bc",1.75,3.1,.7,.66],["+","#f06fa7",.5,5.4,1.1,.5]].map(([h,d,f,u,p,_],m)=>{let g=Ft(Wc(h,_,d),i.mats.gloss,{receive:!1});return g.position.set(f,u,p),g.userData={y:u,phase:m*2.1},e.add(g),g}),l=i.atlas.cell("flag-plus",128,96,(h,d,f)=>{h.fillStyle="#ef5350",h.fillRect(0,0,d,f),h.fillStyle="#ffffff",h.fillRect(d/2-9,18,18,f-36),h.fillRect(d/2-30,f/2-9,60,18)}),c=Dp(.8,.56,i.atlas.material,l);return c.position.set(.13,4.7+.82,-.4),e.add(c),{group:e,update(h){c.userData.wave(h);for(let d of a)d.position.y=d.userData.y+.16*Math.sin(h*1.3+d.userData.phase),d.rotation.y=.5*Math.sin(h*.7+d.userData.phase)}}}function Tv(i){let e=new Ye,t=[...Xc(-1.75,-.7,1.45),...no(1.3,-.9,1.5),...Xc(2.35,.5,1),...no(-.6,-1.9,1.15),...no(-2.5,.9,.85)];for(let[r,o,a]of[[.55,1.9,1],[1.05,2.3,.7],[-1.5,1.9,.8]]){t.push(_n(.09*a,.12*a,.34*a,"#fff3e0",{x:r,y:.17*a,z:o},8));let l=new je(.3*a,14,8,0,Un,0,Math.PI/2);t.push(Et(l,"#e53935",{x:r,y:.32*a,z:o,sy:.8}));for(let[c,h]of[[.4,.5],[2.4,.7],[4.3,.45],[1.2,1.15]])t.push(bi(.045*a,"#ffffff",{x:r+Math.sin(c)*Math.sin(h)*.29*a,y:.32*a+Math.cos(h)*.24*a,z:o+Math.cos(c)*Math.sin(h)*.29*a},6))}t.push(_n(.06,.07,1.25,"#8a5a3c",{x:-.35,y:.62,z:1.55},8)),t.push(jn(1.35,.56,.1,.05,"#d7a064",{x:-.35,y:1.2,z:1.6})),e.add(Ft(t,i.mats.paint));let n=i.atlas.cell("sign-abg",256,128,(r,o,a)=>{r.font="700 92px 'Varela Round', 'Fredoka', Arial, sans-serif",r.textAlign="center",r.textBaseline="middle",r.direction="rtl",r.fillStyle="#5a3a1e",r.fillText("\u05D0\u05D1\u05D2",o/2,a/2+6)});e.add(i.atlas.mesh([i.atlas.card(n,1.2,.6,{x:-.35,y:1.2,z:1.66})]));let s=[["\u05D0","#ffca28",.75,2.05,.45],["\u05D1","#ff8a65",2.05,1.95,-.2],["\u05D2","#81c784",-1.05,1.6,-.75],["\u05D3","#f48fb1",1.45,1.35,.75]].map(([r,o,a,l,c],h)=>{let d=new Ye;d.position.set(a,l+.75,c);let f=Ft([jn(.52,.52,.09,.06,o,{y:-.75}),_n(.012,.012,.5,"#6d4c33",{y:-.26},5)],i.mats.paint,{receive:!1}),u=i.atlas.glyph(r,{color:"#ffffff",size:128,stroke:"rgba(90,58,30,0.55)"}),p=i.atlas.mesh([i.atlas.card(u,.44,.44,{y:-.75,z:.052}),i.atlas.card(u,.44,.44,{y:-.75,z:-.052,ry:Math.PI})]);return d.add(f,p),d.userData.phase=h*1.7,e.add(d),d});return{group:e,update(r){for(let o of s)o.rotation.z=.2*Math.sin(r*1.5+o.userData.phase),o.rotation.y=.35*Math.sin(r*.8+o.userData.phase*1.3)}}}function wv(i){let e=new Ye,t=new Ye;t.position.set(0,.55,-.2),t.rotation.x=.42,e.add(t);let n=2.3,s=3,r=f=>.16+.26*Math.pow(1-f,1.6)+.05*Math.sin(f*Math.PI),o=[];for(let f of[-1,1]){let u=new Dt;u.moveTo(0,0),u.lineTo(n,0),u.lineTo(n,r(1));for(let _=9;_>=0;_--)u.lineTo(n*_/10,r(_/10));u.closePath();let p=new Ln(u,{depth:s,bevelEnabled:!1});if(p.translate(0,0,-s/2),f<0){p=p.toNonIndexed(),p.scale(-1,1,1);let _=p.attributes.position.array;for(let m=0;m<_.length;m+=9)for(let g=0;g<3;g++){let v=_[m+g];_[m+g]=_[m+6+g],_[m+6+g]=v}p.computeVertexNormals()}o.push(ci(p,f<0?"#f3ead6":"#efe4cc"))}o.push(jn(2*n+.36,.14,s+.3,.06,"#9c5bd6",{y:-.07})),o.push(_n(.11,.11,s+.3,"#8048bd",{y:.02,rx:Math.PI/2},10)),o.push(hi(.26,.02,s*.55,"#ef5350",{x:.2,y:r(.09)+.02,z:s*.24})),o.push(hi(.26,.02,.75,"#e53935",{x:.2,y:r(.09)-.3,z:s/2+.07,rx:Math.PI/2-.25})),t.add(Ft(o,i.mats.paint));let a=f=>i.atlas.cell("page"+f,256,256,(u,p,_)=>{u.strokeStyle="#c4b08a",u.lineWidth=9,u.lineCap="round";for(let m=0;m<7;m++){let g=40+m*30,v=m===3||m===6?.55:1;u.beginPath(),u.moveTo(p-26,g),u.lineTo(p-26-(p-52)*v,g),u.stroke()}f>0&&(u.fillStyle="#ffd54f",u.beginPath(),u.arc(64,208,26,0,Un),u.fill(),u.fillStyle="#f06fa7",u.beginPath(),u.arc(150,214,18,0,Un),u.fill())}),l=[];for(let f of[-1,1]){let u=a(f),p=new gt(n*.86,s*.86,10,1);p.rotateX(-Math.PI/2);let _=p.attributes.position,m=p.attributes.uv;for(let g=0;g<_.count;g++){let v=(_.getX(g)+n*.43)/(n*.86)*.86+.07;_.setX(g,f*n*v),_.setY(g,r(v)+.012),m.setXY(g,u.u0+(f>0?m.getX(g):1-m.getX(g))*(u.u1-u.u0),u.v0+m.getY(g)*(u.v1-u.v0))}p.computeVertexNormals(),l.push(p)}t.add(i.atlas.mesh(l));let c=[];[["#7e57c2",1.25,.26,.9,.1],["#ef5350",1.1,.22,.82,-.25],["#29b6f6",1.15,.2,.86,.3],["#ffb300",.95,.2,.75,-.1]].reduce((f,[u,p,_,m,g])=>(c.push(jn(p,_,m,.04,u,{x:-2.35,y:f+_/2,z:1.5,ry:g})),c.push(hi(p*.96,_*.62,m*.96,"#fff8e7",{x:-2.35+.03,y:f+_/2,z:1.5+.03,ry:g})),f+_),0),e.add(Ft(c,i.mats.paint));let h=[["\u05D0","#9c5bd6",-.9],["\u05D1","#f06fa7",.2],["\u05D2","#29b6f6",1],["\u05D3","#ffb300",-.2]].map(([f,u,p],_)=>{let m=i.atlas.sprite(i.atlas.glyph(f,{color:"#ffffff",size:128,stroke:"rgba(255,255,255,0.0)"}),.62,u);return m.userData={x:p,phase:_/4},e.add(m),m}),d=[0,1,2].map(f=>{let u=new un(new sn({map:i.sparkle,color:"#ffe082",transparent:!0,depthWrite:!1,blending:Tt}));return u.userData={x:-1.3+f*1.3,phase:f/3+.15},e.add(u),u});return{group:e,update(f){for(let u of h){let p=(f*.16+u.userData.phase)%1;u.position.set(u.userData.x+.25*Math.sin(p*6+u.userData.phase*9),1.5+p*2.6,.3-p*.5),u.material.opacity=Math.min(1,p*5)*(1-Math.max(0,p-.7)/.3)}for(let u of d){let p=(f*.22+u.userData.phase)%1;u.position.set(u.userData.x,1.3+p*2.2,.5);let _=Math.sin(p*Math.PI);u.scale.setScalar(.15+.4*_),u.material.opacity=_,u.material.rotation=f+u.userData.phase*5}}}}function Av(i){let e=new Ye,t=i.heightAt(i.land.x+.5,i.land.z-.5),n=[];for(let[x,S,T,P]of[[.5,-.5,1.5,.5],[1.5,.2,.8,.55],[-.5,-1.1,.75,.5],[.2,.6,.6,.5],[1.4,-1.3,.6,.6]])n.push(Oi(bn(T,"#9c9aa3",{x,y:.02,z:S,sy:P},1),.16,20+x*7));e.add(Ft(n,i.mats.rock));let s=[],r=.5,o=-.5,a=.62,l=new dt(.42,.62,3.1,24,12);ci(l,(x,S)=>{let T=(S+1.55)/3.1;return T>.2&&T<.38||T>.6&&T<.78?"#e53935":"#ffffff"}),s.push(eo(l,{x:r,y:a+1.55,z:o})),s.push(_n(.64,.6,.12,"#546e7a",{x:r,y:a+3.16,z:o},24)),s.push(kc(.6,.02,"#455a64",{x:r,y:a+3.42,z:o,rx:Math.PI/2},24));for(let x=0;x<8;x++)s.push(_n(.015,.015,.22,"#455a64",{x:r+Math.sin(x/8*Un)*.6,y:a+3.32,z:o+Math.cos(x/8*Un)*.6},5));s.push(ma(.5,.5,"#e53935",{x:r,y:a+4.02,z:o},20)),s.push(bi(.07,"#ffd54f",{x:r,y:a+4.3,z:o},8)),s.push(jn(.3,.5,.08,.04,"#6d4c41",{x:r,y:a+.3,z:o+.6}));for(let x=0;x<6;x++)if(s.push(hi(.2,.05,.62,"#b98a5e",{x:-.9-x*.27,y:.2,z:1.15})),x%2===0)for(let S of[-.26,.26])s.push(_n(.04,.04,.5,"#8a5a3c",{x:-.9-x*.27,y:0,z:1.15+S},6));e.add(Ft(s,i.mats.paint));let c=[],h=[];[["A","#ef5350",1.75,.6,1.55,.3],["B","#ffb300",2.4,.26,1.35,-.2],["C","#42a5f5",2.05,.75,1.42,.5]].forEach(([x,S,T,P,L,N],R)=>{let z=i.heightAt(i.land.x+2.08,i.land.z+1.45)-t,O=z+(R===2?.25+.5:.25);c.push(jn(.5,.5,.5,.06,S,{x:R===2?2.08:T,y:O,z:R===2?1.45:L,ry:N}));let H=i.atlas.glyph(x,{color:"#ffffff",size:128,font:"'Fredoka', 'Varela Round', Arial, sans-serif"}),B=R===2?2.08:T,G=R===2?1.45:L;h.push(i.atlas.card(H,.5*.8,.5*.8,{x:B+Math.sin(N)*(.5/2+.005),y:O,z:G+Math.cos(N)*(.5/2+.005),ry:N})),h.push(i.atlas.card(H,.5*.8,.5*.8,{x:B,y:O+.5/2+.005,z:G,rx:-Math.PI/2,rz:N}))}),e.add(Ft(c,i.mats.gloss)),e.add(i.atlas.mesh(h));let d=new Te(new dt(.3,.3,.44,16),new Mt({color:new ae(2.2,1.9,1)}));d.position.set(r,a+3.52,o);let f=new un(new sn({map:i.glow,color:"#ffe9a0",transparent:!0,depthWrite:!1,blending:Tt,opacity:.7}));f.position.copy(d.position),f.scale.setScalar(1.9);let u=new Ye;u.position.copy(d.position);let p=new Ct(.55,4.2,12,1,!0);p.translate(0,-2.1,0),p.rotateZ(Math.PI/2);let _=new Mt({color:"#fff3c0",transparent:!0,opacity:i.look.beam,depthWrite:!1,blending:Tt,side:xt});for(let x of[0,Math.PI]){let S=new Te(p,_);S.rotation.y=x,u.add(S)}e.add(d,f,u);let m=new Ye,g=new je(.8,20,10,0,Un,Math.PI/2,Math.PI/2),v=[Et(g,"#e0553f",{sx:1,sy:.55,sz:.42}),hi(1.5,.05,.6,"#fff3e0",{y:0,sx:1,sz:1}),_n(.03,.035,1.75,"#7a5a3a",{x:.05,y:.87},6)],A=new Dt;A.moveTo(0,0),A.lineTo(.85,0),A.lineTo(0,1.4),A.closePath(),v.push(to(A,.02,"#ffffff",{x:.1,y:.25},0));let M=new Dt;M.moveTo(0,0),M.lineTo(-.6,0),M.lineTo(0,1.05),M.closePath(),v.push(to(M,.02,"#fff3e0",{x:0,y:.3},0)),m.add(Ft(v,i.mats.paint,{receive:!1}));let y=i.atlas.cell("sail-abc",128,64,(x,S,T)=>{x.font="700 50px 'Fredoka', 'Varela Round', Arial, sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillStyle="#1e88e5",x.fillText("ABC",S/2,T/2+3)});m.add(i.atlas.mesh([i.atlas.card(y,.56,.28,{x:.36,y:.5,z:.014}),i.atlas.card(y,.56,.28,{x:.36,y:.5,z:-.014,ry:Math.PI})]));let E=Dp(.32,.18,new Je({color:"#ffc83d",side:xt,roughness:.7}));E.position.set(.07,1.66,0),m.add(E),m.position.set(-3.3,-t+.02,.4),m.rotation.y=.5,e.add(m);let b=[0,1,2].map(x=>{let S=new Ye,T=new gt(.34,.1);T.translate(.17,0,0);let P=i.mats.white,L=new Te(T,P),N=new Te(T,P);return N.scale.x=-1,S.add(L,N),S.userData={l:L,r:N,phase:x*2.1,rad:1.6+x*.5,h:4.6+x*.35},e.add(S),S});return{group:e,y:t,update(x){u.rotation.y=x*.9,m.position.y=-t+.02+.05*Math.sin(x*1.6),m.rotation.z=.07*Math.sin(x*1.25),m.rotation.x=.04*Math.sin(x*1.7+1),E.userData.wave(x);for(let S of b){let T=S.userData,P=x*.5+T.phase;S.position.set(-1.6+Math.cos(P)*T.rad,T.h+.15*Math.sin(x*.9+T.phase),.2+Math.sin(P)*T.rad),S.rotation.y=-P-Math.PI/2;let L=.55*Math.sin(x*7+T.phase);T.l.rotation.z=L,T.r.rotation.z=-L}}}}var Lu={castle:Ev,math:bv,hebrew:Tv,reading:wv,english:Av};function Rv(i){let e=new Ye,t=i.atlas,n=[],s=(y,E,b)=>{let x="#4caf63",S=[];S.push(Et(new In(.3*b,1.7*b,6,12),x,{x:y,y:1.15*b,z:E}));for(let[T,P,L]of[[-1,.95,.7],[1,1.25,.55]])S.push(Et(new In(.17*b,.4*b,4,10),x,{x:y+T*.42*b,y:P*b,z:E,rz:Math.PI/2})),S.push(Et(new In(.17*b,L*b,4,10),x,{x:y+T*.66*b,y:(P+L/2+.08)*b,z:E}));return S.push(bi(.1*b,"#ff7eb3",{x:y,y:2.34*b,z:E},8)),S};n.push(...s(1.7,-.5,1.1),...s(-2.3,-.6,.55),...s(2.6,1.5,.45));let r=-.95,o=.75;n.push(_n(.06,.075,2.5,"#8a5a3c",{x:r,y:1.25,z:o},8)),n.push(bi(.1,"#8a5a3c",{x:r,y:2.52,z:o},8));let a=y=>{let E=new Dt;E.moveTo(-.72,-.23),E.lineTo(.5,-.23),E.lineTo(.78,0),E.lineTo(.5,.23),E.lineTo(-.72,.23),E.closePath();let b=new Ln(E,{depth:.08,bevelEnabled:!1});return b.translate(0,0,-.04),y<0&&b.rotateY(Math.PI),b};n.push(Et(a(1),"#e6a15a",{x:r+.62,y:2.1,z:o+.05})),n.push(Et(a(-1),"#dc9550",{x:r-.6,y:1.5,z:o+.05})),n.push(_n(.04,.05,1.7,"#8a5a3c",{x:.7,y:.85,z:1.9},6)),e.add(Ft(n,i.mats.paint)),e.add(Ft([Et(new Ct(1.6,1.8,4,1),"#ecc77e",{x:-.7,y:.9,z:-2.1,ry:Math.PI/4+.3})],i.mats.rock));let l=(y,E)=>t.cell("flag-"+y,96,64,(b,x,S)=>{E(b,x,S),b.strokeStyle="rgba(0,0,0,0.25)",b.lineWidth=2,b.strokeRect(1,1,x-2,S-2)}),c={il:l("il",(y,E,b)=>{y.fillStyle="#fff",y.fillRect(0,0,E,b),y.fillStyle="#0038b8",y.fillRect(0,7,E,9),y.fillRect(0,b-16,E,9),y.strokeStyle="#0038b8",y.lineWidth=3,y.lineJoin="miter";for(let x of[1,-1]){y.beginPath();for(let S=0;S<3;S++){let T=-Math.PI/2*x+S*Un/3;y[S?"lineTo":"moveTo"](E/2+Math.cos(T)*12,b/2+Math.sin(T)*12)}y.closePath(),y.stroke()}}),jp:l("jp",(y,E,b)=>{y.fillStyle="#fff",y.fillRect(0,0,E,b),y.fillStyle="#d32f2f",y.beginPath(),y.arc(E/2,b/2,17,0,Un),y.fill()}),fr:l("fr",(y,E,b)=>{["#1e4fb8","#ffffff","#e53935"].forEach((x,S)=>{y.fillStyle=x,y.fillRect(S*E/3,0,E/3+1,b)})}),it:l("it",(y,E,b)=>{["#2e9b4f","#ffffff","#e53935"].forEach((x,S)=>{y.fillStyle=x,y.fillRect(S*E/3,0,E/3+1,b)})})},h=[t.card(c.il,.42,.28,{x:r+.36,y:2.1,z:o+.095}),t.card(c.jp,.42,.28,{x:r+.86,y:2.1,z:o+.095}),t.card(c.fr,.42,.28,{x:r-.86,y:1.5,z:o+.095}),t.card(c.it,.42,.28,{x:r-.36,y:1.5,z:o+.095})],d=new I(r,2.5,o),f=new I(.7,1.68,1.9),u=["#e53935","#ffd54f","#1e88e5","#43a047","#ffffff","#8e24aa","#ff9800"],p=[],_=[];for(let y=0;y<=8;y++){let E=y/8;p.push(new I().lerpVectors(d,f,E).setY(Cv(d.y,f.y,E)-.36*Math.sin(E*Math.PI)))}for(let y=0;y<7;y++){let E=p[y+1].clone().lerp(p[y],.5),b=new Dt;b.moveTo(-.11,0),b.lineTo(.11,0),b.lineTo(0,-.26),b.closePath();let x=new $i(b);_.push(Et(x,u[y],{x:E.x,y:E.y,z:E.z,ry:Math.atan2(f.x-d.x,f.z-d.z)+Math.PI/2}))}e.add(t.mesh(h)),e.add(Ft([Gc(p,.012,"#7a5a3a",{radial:4}),..._],i.mats.flat,{receive:!1}));let m=new Ye,g=["#e53935","#ffffff","#1e88e5","#ffd54f"],v=new je(1,24,16),A=v.attributes.position;for(let y=0;y<A.count;y++){let E=A.getY(y);if(E<0){let b=1+E*.45;A.setX(y,A.getX(y)*b),A.setZ(y,A.getZ(y)*b),A.setY(y,E*1.3)}}v.computeVertexNormals(),ci(v,(y,E,b)=>g[Math.floor((Math.atan2(b,y)+Math.PI)/Un*12)%4]);let M=[v,_n(.2,.17,.26,"#a1683a",{y:-1.95},10),kc(.2,.025,"#7a5a3a",{y:-1.82,rx:Math.PI/2},12)];for(let y=0;y<4;y++){let E=y/4*Un+.4;M.push(_n(.01,.01,.62,"#7a5a3a",{x:Math.cos(E)*.2,y:-1.52,z:Math.sin(E)*.2},4))}return m.add(Ft(M,i.mats.paint,{receive:!1})),m.position.set(.5,5,-1),e.add(m),{group:e,update(y){m.position.y=5+.2*Math.sin(y*.8),m.position.x=.5+.25*Math.sin(y*.33),m.rotation.y=y*.12}}}var Cv=(i,e,t)=>i+(e-i)*t;function Pv(i){let e=new Ye,t=[],n=new je(2.55,14,9,0,Un,0,Math.PI/2);Oi(n,.12,31,.02),ci(n,(c,h)=>h>1.7?"#a39488":"#8f8178"),t.push(eo(n,{sy:.92,z:-.3}));for(let c=0;c<=6;c++){let h=Math.PI*(c/6),d=1.28;t.push(Oi(bn(.36+.05*(c%2),"#7c6f69",{x:Math.cos(h)*d,y:.15+Math.sin(h)*d*1.05,z:1.92-.25*Math.sin(h)},1),.18,40+c))}for(let[c,h,d]of[[-2.2,1.5,.8],[2.3,1.3,.95],[-1.3,2.5,.5],[1.5,2.5,.42],[2.8,.2,.6]])t.push(Et(new Ct(.24,d,6),"#8f8178",{x:c,y:d/2,z:h}));e.add(Ft(t,i.mats.rock));let s=new Te(new je(1.12,20,14),new Mt({color:"#1d1233"}));s.scale.set(1,1.12,.42),s.position.set(0,.62,1.84),e.add(s);let r=(c,h,d,f,u)=>{let p=Pt(u),_=[];for(let g=0;g<5;g++){let v=.5+p()*.75,A=.11+p()*.08,M=d+(p()-.5)*.6,y=f+(p()-.5)*.4,E=(p()-.5)*.7,b=g%2?c:h,x=new dt(A,A,v,6);x.translate(0,v/2,0);let S=new Ct(A,A*1.8,6);S.translate(0,v+A*.9,0),_.push(Et(x,b,{x:M,z:y,rz:E,rx:(p()-.5)*.4}),Et(S,b,{x:M,z:y,rz:E}))}return Ft(_,new Je({vertexColors:!0,roughness:.25,emissive:h,emissiveIntensity:i.look.crystal,flatShading:!0}),{receive:!1})},o=[r("#7fe8dc","#3fc8c0",-2,2,61),r("#ffa6d0","#f06fa7",2.05,2,67),r("#7fe8dc","#3fc8c0",.9,2.75,71)];e.add(...o);let a=new Te((()=>{let c=new Ln($r(1.05),{depth:.26,bevelEnabled:!0,bevelThickness:.11,bevelSize:.1,bevelSegments:4,curveSegments:20});return c.translate(0,0,-.13),c})(),new Jt({color:"#ff3d63",roughness:.25,clearcoat:.8,clearcoatRoughness:.15,emissive:"#ff1f4b",emissiveIntensity:.45}));a.position.set(0,1,2.12),a.castShadow=!0;let l=new un(new sn({map:i.glow,color:"#ff7a9c",transparent:!0,depthWrite:!1,blending:Tt,opacity:.55}));return l.position.set(0,1,2),l.scale.setScalar(3),e.add(l,a),{group:e,update(c){let h=c*1.15%1,d=Math.exp(-Math.pow((h-.08)/.06,2))+.7*Math.exp(-Math.pow((h-.3)/.07,2));a.scale.setScalar(1+.13*d),l.material.opacity=.4+.3*d,l.scale.setScalar(2.8+.6*d)}}}function Iv(i){let e=new Ye,t=i.atlas,n=i.heightAt(i.land.x,i.land.z),s=[],r=[[.95,0,-.5],[1.05,.9,-.52],[1.3,1.8,-.56],[1.72,2.6,-.62]].map(u=>new I(...u));s.push(Gc(r,.15,"#9a6b45",{radial:8,seg:14}));for(let u=1;u<6;u++){let p=new zn(r).getPoint(u/6.2);s.push(kc(.165,.025,"#84583a",{x:p.x,y:p.y,z:p.z,rx:Math.PI/2-.2},10))}let o=r[3];for(let u=0;u<7;u++){let p=u/7*Un+.3,_=1.55+.25*Math.sin(u*2.3),m=new gt(.5,_,2,7);m.translate(0,_/2,0);let g=m.attributes.position;for(let v=0;v<g.count;v++){let A=g.getY(v)/_,M=g.getX(v);g.setX(v,M*(1-A*.85)*(.4+Math.sin(A*Math.PI)*.9)),g.setZ(v,Math.abs(M)*.5),g.setY(v,_*(A*.55-.72*A*A)+.02),g.setZ(v,g.getZ(v)+_*.8*A)}m.computeVertexNormals(),s.push(Et(m,u%2?"#43a853":"#5cbf63",{x:o.x,y:o.y,z:o.z,ry:p}))}s.push(bi(.13,"#7a4e32",{x:o.x-.12,y:o.y-.12,z:o.z+.1},8),bi(.13,"#8a5a3c",{x:o.x+.12,y:o.y-.14,z:o.z+.05},8));for(let[u,p,_]of[[-2.45,.95,.3],[-3,1.25,.27],[-3.55,1.1,.3]])s.push(_n(_,_*1.1,.16,"#b9b4ac",{x:u,y:-n+.02,z:p},10));s.push(to(Dc(.22,.5),.06,"#ff8a65",{x:.35,y:.06,z:1.35,rx:-Math.PI/2,rz:.4},.02)),s.push(Et(new je(.14,10,6,0,Un,0,Math.PI/2),"#f8bbd0",{x:-1.25,y:.02,z:1.2})),e.add(Ft(s,i.mats.paintTwoSided));let a=t.cell("card-back",128,176,(u,p,_)=>{u.fillStyle="#7e57c2",u.fillRect(0,0,p,_),u.strokeStyle="#ffffff",u.lineWidth=7,u.strokeRect(9,9,p-18,_-18),u.font="700 104px 'Fredoka', 'Varela Round', Arial, sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillStyle="#ffffff",u.fillText("?",p/2,_/2+8)}),l=(u,p)=>t.cell("card-"+u,128,176,(_,m,g)=>{_.fillStyle="#fffdf6",_.fillRect(0,0,m,g),_.strokeStyle="#7e57c2",_.lineWidth=7,_.strokeRect(9,9,m-18,g-18),_.translate(m/2,g/2),p(_)}),c=l("star",u=>{u.fillStyle="#ffc107",u.beginPath();for(let p=0;p<10;p++){let _=-Math.PI/2+p*Math.PI/5,m=p%2?19:44;u[p?"lineTo":"moveTo"](Math.cos(_)*m,Math.sin(_)*m)}u.closePath(),u.fill()}),h=l("heart",u=>{u.fillStyle="#ec407a",u.beginPath(),u.moveTo(0,38),u.bezierCurveTo(-64,-6,-30,-52,0,-18),u.bezierCurveTo(30,-52,64,-6,0,38),u.fill()}),d=[],f=[];return[[a,-1.25,-.15,-.3],[c,-.3,.1,.12],[h,.55,.35,.34],[a,-.75,.95,-.12]].forEach(([u,p,_,m],g)=>{let y=.5+(g===3?-.05:0);d.push(jn(.82,1.12,.07,.035,u===a?"#7e57c2":"#fffdf6",{x:p,y,z:_,ry:m,rx:-.32}));let E=new I(0,0,1).applyEuler(new Zt(-.32,m,0,"XYZ"));f.push(t.card(u,.82*.98,1.12*.98,{x:p+E.x*.037,y:y+E.y*.037,z:_+E.z*.037,ry:m,rx:-.32}))}),e.add(Ft(d,i.mats.paint)),e.add(t.mesh(f)),{group:e,y:n}}function Lv(i){let e=new Ye,t=li,n=t.half,s=u=>i.roadY(Ps+u),r=Math.atan2(t.ax,t.az),o=[],a=14;for(let u=0;u<a;u++){let p=-n-.35+(2*n+.7)*u/a,_=-n-.35+(2*n+.7)*(u+1)/a,m=(p+_)/2,g=s(p),v=s(_),A=Math.atan2(v-g,_-p);o.push(hi(2.3,.2,(_-p)/Math.cos(A)+.02,"#dccdb0",{y:(g+v)/2-.08,z:m,rx:-A})),o.push(hi(2.42,.08,(_-p)/Math.cos(A)+.02,"#c4b393",{y:(g+v)/2-.2,z:m,rx:-A}))}let l=["#ef5350","#ffa726","#ffee58","#66bb6a","#29b6f6","#7e57c2","#ec407a"],c=[];for(let u=0;u<7;u++){let p=-n+.42+(2*n-.84)*u/6,_=s(p)-.24,m=_+.75;c.push(jn(2,m,.78,.08,l[u],{y:_-m/2,z:p}));for(let g of[-1,1])c.push(bi(.2,l[u],{x:g*1.02,y:_-.42,z:p,sx:.7},10))}for(let u of[-1,1]){let p=[];for(let _=0;_<=6;_++){let m=-n-.2+(2*n+.4)*_/6,g=s(m);o.push(_n(.05,.06,.62,"#8a5a3c",{x:u*1.08,y:g+.3,z:m},6)),o.push(bi(.075,"#a8743e",{x:u*1.08,y:g+.64,z:m},6)),p.push(new I(u*1.08,g+.5,m))}o.push(Gc(p,.028,"#a8743e",{radial:5,seg:30}))}e.add(Ft(o,i.mats.paint),Ft(c,i.mats.gloss)),e.rotation.y=r;let h=()=>{let u=new Dt,p=.5,_=.17;return u.moveTo(-p,-p),u.lineTo(-_,-p),u.absarc(0,-p+.1,_,Math.PI*1.2,Math.PI*1.8-Un,!0),u.lineTo(p,-p),u.lineTo(p,-_),u.absarc(p+.1,0,_,Math.PI*1.2,Math.PI*.8-Un,!1),u.lineTo(p,p),u.lineTo(_,p),u.absarc(0,p+.1,_,-Math.PI*.2,Math.PI*1.2,!1),u.lineTo(-p,p),u.lineTo(-p,_),u.absarc(-p+.1,0,_,Math.PI*.8,-Math.PI*.8,!0),u.lineTo(-p,-p),u},d=[["#ef5350",-1.3,3,-.6,.85],["#ffca28",.9,3.6,.3,.7],["#29b6f6",.2,2.7,1.5,.75]].map(([u,p,_,m,g],v)=>{let A=Ft([to(h(),.2,u,{s:g},.05,12)],i.mats.gloss,{receive:!1});return A.position.set(p,_,m),A.userData={y:_,phase:v*2.2},e.add(A),A}),f=An.at(Ps);return{group:e,y:0,x:f.x,z:f.z,update(u){for(let p of d)p.position.y=p.userData.y+.18*Math.sin(u*1.1+p.userData.phase),p.rotation.y=u*.5+p.userData.phase,p.rotation.z=.25*Math.sin(u*.7+p.userData.phase)}}}function Dv(i){let e=new Ye,t=[],n=[],s=6,r=.68,o=s*r/2;t.push(jn(s*r+.5,.3,s*r+.5,.08,"#7a5230",{y:.15}));for(let b=0;b<s;b++)for(let x=0;x<s;x++)t.push(hi(r,.05,r,(b+x)%2?"#7fbf7a":"#f6ecd2",{x:-o+(b+.5)*r,y:.32,z:-o+(x+.5)*r}));let a=(b,x)=>({x:-o+(b+.5)*r,z:-o+(x+.5)*r}),l="#fff8ea",c="#4b3766",h=(b,x,S,T=1)=>n.push(Ap(b.map(([P,L])=>[P*T,L*T]),x,{...S,y:.345},24)),d=[[0,0],[.3,0],[.31,.06],[.26,.1],[.2,.14]],f=[...d,[.13,.5],[.11,.9],[.2,.98],[.2,1.04],[.12,1.08],[.17,1.3],[.2,1.42],[.1,1.46],[0,1.47]],u=[...d,[.16,.5],[.15,.85],[.22,.9],[.22,1.1],[0,1.1]],p=[...d,[.1,.42],[.08,.6],[.15,.64],[.1,.7],[.15,.82],[.13,.94],[.06,1],[0,1.01]],_=[...d,[.11,.5],[.09,.82],[.17,.88],[.1,.94],[.15,1.1],[.12,1.28],[.04,1.4],[.06,1.46],[0,1.5]],m=a(1,1);h(f,l,m,1.25),n.push(hi(.07,.3,.07,l,{x:m.x,y:.345+1.47*1.25+.12,z:m.z}),hi(.22,.07,.07,l,{x:m.x,y:.345+1.47*1.25+.15,z:m.z})),m=a(4,0),h(u,l,m,1.15);for(let b=0;b<4;b++)n.push(hi(.12,.14,.12,l,{x:m.x+Math.cos(b*Math.PI/2+.78)*.2,y:.345+1.1*1.15+.06,z:m.z+Math.sin(b*Math.PI/2+.78)*.2}));m=a(0,4),h(p,l,m,1.05),m=a(3,2),h(_,c,m,1.15),m=a(5,4),h(p,c,m,1.05),m=a(2,4),h([...d,[.2,.2],[0,.2]],c,m,1.25);let g=new Dt,v=(b,x)=>[(b-50)/62,(79-x)/62];g.moveTo(...v(70,79)),g.lineTo(...v(31,79));let A=(b,x,S)=>g.bezierCurveTo(...v(...b),...v(...x),...v(...S));A([30,68],[35,60],[44,54]),A([47,52],[48,49],[46,47]),A([40,49],[33,51],[27,50]),A([20,49],[18,43],[21,39]),A([26,32],[34,24],[40,19]),g.lineTo(...v(39,9)),g.lineTo(...v(47,15)),A([50,13],[53,12],[57,12]),A([70,13],[79,27],[79,45]),A([79,60],[73,69],[70,79]),n.push(to(g,.3,c,{x:m.x,y:.345+.22,z:m.z,ry:-.5,s:1.25},.05,14)),e.add(Ft(n,i.mats.gloss));let M="#3f9a4f";t.push(jn(s*r+1.9,.75,.6,.22,M,{y:.37,z:-o-.95})),t.push(jn(.6,.75,s*r+.7,.22,M,{x:o+.95,y:.37,z:-.3})),t.push(jn(.6,.75,s*r*.55,.22,M,{x:-o-.95,y:.37,z:-o*.5-.1}));let y=Pt(88),E=["#ff7eb3","#ffd54f","#ffffff","#c9a4ff","#ff9e80"];for(let b=0;b<26;b++){let x=y(),S=b%3,T=S===0?(x-.5)*(s*r+1.6):S===1?o+.95+(y()-.5)*.4:-o-.95+(y()-.5)*.4,P=S===0?-o-.95+(y()-.5)*.4:S===1?(x-.5)*(s*r+.4)-.3:-o*.5-.1+(x-.5)*s*r*.5;t.push(bn(.085,E[b%5],{x:T,y:.76+y()*.04,z:P,sy:.7},0))}for(let[b,x]of[[o+.95,o+.35],[-o-.95,.75]])t.push(_n(.07,.09,.5,"#8a5a3c",{x:b,y:.25,z:x},6),bn(.5,"#4fae4a",{x:b,y:.85,z:x}),bn(.3,"#63c257",{x:b,y:1.4,z:x}));return e.add(Ft(t,i.mats.paint)),{group:e}}Object.assign(Lu,{geography:Rv,biology:Pv,memory:Iv,puzzle:Lv,chess:Dv});var Nv=Math.PI*2,Ds=i=>$n(i.map(e=>{let t=e.index?e.toNonIndexed():e;return t.attributes.uv||t.setAttribute("uv",new yt(new Float32Array(t.attributes.position.count*2),2)),t}),!1);function Np(i){let e=new Ye;e.name="scenery";let t=Pt(2024),{heightAt:n}=i,s=(b,x,S)=>{if(n(b,x)<.42)return!1;let T=An.near(b,x,S+.5);if(T&&T.d<S||Oc.near(b,x,2.6))return!1;for(let P of Cs)if(Math.hypot(b-P.x,x-P.z)<P.r+.9)return!1;return!0},r={tree:[],pine:[],bush:[],rock:[],cactus:[],flower:[],blossom:[]};for(let b=0;b<2600;b++){let x=-34+t()*68,S=-64+t()*124,T=n(x,S),P=xa(x,S),L=t(),N=.75+t()*.6;if(T>5.2)continue;if(P.mountain>.35){P.mountain<.8&&L<.4&&s(x,S,2.4)?r.pine.push([x,T,S,N*1.1]):L<.5&&s(x,S,2)&&r.rock.push([x,T,S,N]);continue}if(P.forest>.4){L<.75&&s(x,S,2.6)&&r[L<.4?"tree":"pine"].push([x,T,S,N*1.05]);continue}if(P.desert>.5){L<.1&&s(x,S,2.2)?r.cactus.push([x,T,S,N]):L<.2&&s(x,S,1.6)&&r.rock.push([x,T,S,N*.8]);continue}if(P.rocky>.5){L<.35&&s(x,S,1.8)&&r.rock.push([x,T,S,N]);continue}let R=Ls(x*.11,S*.11,77)>.12;if(L<(R?.36:.05)){if(s(x,S,2.7)){let D=t();r[D<.62?"tree":D<.86?"pine":"blossom"].push([x,T,S,N*.9])}}else L<.42?s(x,S,1.5)&&r.bush.push([x,T,S,N]):L<.47?s(x,S,1.5)&&r.rock.push([x,T,S,N*.6]):s(x,S,1.25)&&r.flower.push([x,T,S,N])}let o=new it,a=new Gt,l=new Zt,c=new I,h=new I,d=new ae,f=[],u=(b,x,S,{shade:T=.12,cast:P=!0,sink:L=0,tilt:N=0,high:R=!1}={})=>{if(!b.length)return;let D=new kt(x,S,b.length);R&&f.push([D,b]),b.forEach(([z,O,H,B],G)=>{a.setFromEuler(l.set((t()-.5)*N,t()*Nv,(t()-.5)*N)),D.setMatrixAt(G,o.compose(c.set(z,O-L*B,H),a,h.set(B,B*(.9+t()*.2),B)));let U=1+(t()-.5)*2*T;D.setColorAt(G,d.setRGB(U*(1+(t()-.5)*T),U,U*(1+(t()-.5)*T)))}),D.castShadow=P,D.receiveShadow=!0,e.add(D)};u(r.tree,Ds(no(0,0,1)),i.mats.paint,{high:!0}),u(r.pine,Ds(Xc(0,0,.95)),i.mats.paint,{high:!0}),u(r.blossom,Ds(no(0,0,1).map((b,x)=>x?ci(b,["#ff9ec4","#ffb7d5","#ff8fba","#ffd0e4"][x-1]):b)),i.mats.paint,{shade:.06,high:!0}),u(r.bush,Ds([bn(.42,"#4aa648",{x:-.3,y:.3,sy:.8}),bn(.5,"#5ab850",{x:.12,y:.38,z:.1,sy:.85}),bn(.36,"#3f9a44",{x:.52,y:.26,z:-.12,sy:.8})]),i.mats.paint),u(r.rock,Ds([Oi(bn(.55,"#a6a3ac",{y:.22,sy:.7},1),.2,3),Oi(bn(.32,"#96939d",{x:.5,y:.14,z:.2,sy:.7},1),.2,7)]),i.mats.rock,{shade:.08}),u(r.cactus,Ds([Et(new In(.18,.75,4,10),"#4caf63",{y:.55}),Et(new In(.1,.2,4,8),"#4caf63",{x:.25,y:.55,rz:Math.PI/2}),Et(new In(.1,.32,4,8),"#4caf63",{x:.4,y:.78}),Et(new In(.1,.18,4,8),"#4caf63",{x:-.24,y:.42,rz:Math.PI/2}),Et(new In(.1,.26,4,8),"#4caf63",{x:-.38,y:.62})]),i.mats.paint,{shade:.06});let p=[];for(let b=0;b<2400&&p.length<70;b++){let x=-44+t()*88,S=-96+t()*74,T=xa(x,S),P=.75+t()*.75+(T.mountain-.6)*.8;T.mountain<.6||n(x,S)<.8||p.some(L=>Math.hypot(L[0]-x,L[2]-S)<2.1*(P+L[3]))||p.push([x,n(x,S)-.5,S,P])}let _=new Ct(2.6,4.6,11,6);_.translate(0,2.3,0),Oi(_,.14,17,.001),ci(_,(b,x,S)=>{let T=x/4.6,P=.07*Math.sin(Math.atan2(S,b)*4);return T>.58+P?"#ffffff":T>.3?"#8f9ccb":"#7d8abb"}),u(p,Ds([_]),i.mats.rock,{shade:.05});let m=["#ff7eb3","#ffd54f","#ffffff","#c9a4ff","#ff9e80","#8fd3ff"].map(b=>new ae(b)),g=[];for(let[b,,x]of r.flower)for(let S=0;S<5;S++){let T=b+(t()-.5)*1.1,P=x+(t()-.5)*1.1;g.push([T,n(T,P),P,Math.floor(t()*m.length)])}let v=new kt(new kn(.09,0),new Je({roughness:.6}),g.length);g.forEach(([b,x,S,T],P)=>{v.setMatrixAt(P,o.compose(c.set(b,x+.1,S),a.identity(),h.set(1,.75,1))),v.setColorAt(P,m[T])}),v.receiveShadow=!0,e.add(v);let M=Ds([[0,0,0,1],[.95,-.1,.1,.72],[-.9,-.12,-.1,.68],[.35,.32,-.05,.62],[-.4,.2,.3,.55]].map(([b,x,S,T])=>bn(T,"#ffffff",{x:b,y:x*1.2,z:S,sy:.62},2))),y=new Je({color:"#ffffff",roughness:1,emissive:"#dfeaff",emissiveIntensity:i.look.cloudGlow,transparent:!0,opacity:.93,fog:!1}),E=[];for(let b=0;b<9;b++){let x=new Te(M,y),S=b%2?1:-1;x.userData={x:(t()-.5)*80,z:-58+b*13.5+t()*5,y:8.5+t()*3.5,speed:.18+t()*.2,lane:S*(22+t()*12)},x.scale.setScalar(2.1+t()*1.6),x.castShadow=!1,e.add(x),E.push(x)}return{group:e,clear(b){let x=[],S=new it().makeScale(0,0,0);for(let[T,P]of f)P.forEach((L,N)=>{if(!b(L[0],L[2]))return;let R=new it;T.getMatrixAt(N,R),T.setMatrixAt(N,S),x.push([T,N,R])}),T.instanceMatrix.needsUpdate=!0;return()=>{for(let[T,P,L]of x)T.setMatrixAt(P,L),T.instanceMatrix.needsUpdate=!0}},update(b){for(let x of E){let S=x.userData,T=(S.x+b*S.speed+40)%80-40;x.position.set(S.lane+T*.12,S.y+.2*Math.sin(b*.3+S.z),S.z+T*.3)}}}}var qc=2.25,Du=.3;function Up(i,e){let t=Qr(),n=i.dayFaces;t.skin.emissiveIntensity=.04;let s=["yoovy","googy"].map(g=>{let v=Qs(g,n[g],t,{royal:!1});return v.root.scale.setScalar(qc),v.root.traverse(A=>{A.isMesh&&(A.castShadow=!1)}),v.side=g==="yoovy"?-1:1,v.blink=2+Math.random()*3,v}),r=new Ye;r.name="sisters";for(let g of s)r.add(g.root);let o=0,a=0,l=0,c=-1,h=1,d=0,f=0,u=-10,p=0,_=null,m=new I;return{group:r,get walking(){return c>=0},get s(){return o},go(g,v,A){let M=jr(g);if(M){if(A||Math.abs(M.s-o)<.05){o=a=l=M.s,c=-1,f=0;return}a=o,l=M.s,c=v,h=Xt(Math.abs(l-a)/13,.75,2.4)}},update(g,v){let A=0,M=1;if(c>=0){let R=Xt((g-c)/h),D=R*R*(3-2*R),z=o;o=fn(a,l,D),d+=Math.abs(o-z)/qc,M=l>=a?1:-1,A=Ne(0,.12,R)*Ne(1,.86,R),R>=1&&(c=-1,u=g)}let y=An.at(o),E=e(o)+.06,x=(c>=0?Math.atan2(y.tx*M,y.tz*M):0)-f;x=Math.atan2(Math.sin(x),Math.cos(x)),f+=x*Math.min(1,v*9);let S=Math.cos(f),T=-Math.sin(f),P=(g-u)/.5,L=P>0&&P<1?.1*4*P*(1-P):0;c<0&&g>p&&(_={kind:Math.random()<.5?"wave":"look",who:Math.random()<.5?0:1,at:g},p=g+5+Math.random()*5);let N=_?(g-_.at)/1.7:2;return N>1&&(_=null),s.forEach((R,D)=>{R.blink-=v;let z="open";R.blink<.13&&(z="blink"),R.blink<0&&(R.blink=2.2+Math.random()*3.5),(L>0||_&&_.kind==="wave"&&_.who===D)&&(z="laugh");let O=_?Ne(0,.18,N)*Ne(1,.8,N):0;R.update(g,{x:y.x+S*R.side*Du*qc,y:E,z:y.z+T*R.side*Du*qc,turn:f+(c<0?-R.side*.16:0),walk:A,dist:d,hold:A,holdSide:-R.side,holdTarget:m.set(-R.side*Du,.44,.06),jump:L,squash:-.012*Math.sin(g*2.1+D*1.7),wave:_&&_.kind==="wave"&&_.who===D?O:0,waveSide:R.side,look:_&&_.kind==="look"?-R.side*.5*O:0,cheer:L>0?Ne(0,.3,P)*Ne(1,.7,P):0,face:z})}),c>=0||L>0||!!_}}}var Hi=Math.PI/180,Uv={day:{zenith:"#3b8de8",horizon:"#cfeaff",glow:"#fff1cc",cloud:"#ffffff",bounce:"#86b45c",sun:"#ffedc8",sunDir:new I(-.56,.66,.5).normalize(),sunPower:3,envSun:5,hemiSky:"#cfe2ff",hemiGround:"#8d86b8",hemiPower:.5,envPower:.36,fog:"#c9e2f5",fogDensity:.0028,exposure:1,bloom:[.18,.55,1.1],stars:0,shallow:"#62e2d6",deep:"#2389d8",glint:1,vignette:.3,beam:.05,crystal:.35,cloudGlow:.35,windows:[1.35,1.12,.85]}},Yc=34,Fv=16.5,Bv=34,Ov=60,er=-44.5,Nu=40,Hv=17,zv={castle:{top:.5,pitch:3,yaw:0},math:{top:.37,pitch:3,yaw:22},hebrew:{top:.6,pitch:4,yaw:22},reading:{top:.85,pitch:10,yaw:18},english:{top:.5,pitch:3,yaw:24},geography:{top:.6,pitch:4,yaw:22},biology:{top:.95,pitch:8,yaw:20},memory:{top:.8,pitch:9,yaw:20},puzzle:{top:.7,pitch:8,yaw:28},chess:{top:.9,pitch:14,yaw:20}};async function Fp(i,e={}){let{renderer:t,bloom:n}=i,s=e.breath||(()=>new Promise(V=>setTimeout(V,0))),r=Uv.day,o=new Hn;o.fog=new Gs(new ae(r.fog),r.fogDensity);let a=new zt(Yc,1,1,1600),l=Pp();o.add(l.ground,l.road),await s();let c=Ip(l.heightMap);o.add(c.mesh);let h=Lp();o.add(h.dome);let d=Vc(t,r);o.environment=d.texture,o.environmentIntensity=r.envPower,o.add(Ru(r.vignette)),await s();let f=i.texture("stone",()=>Cc()),u=i.texture("window",()=>Lc()),p=(V,Q)=>{let te=i.texture(V,()=>Pc(Q));return new Jt({map:te.map,normalMap:te.normalMap,roughness:.5,clearcoat:.35,clearcoatRoughness:.3})},_=new ae(...r.windows),m={look:r,stage:i,heightAt:l.heightAt,roadY:l.roadY,atlas:new zc(2048,1024),sparkle:ws(),glow:Kn(2),mats:{paint:new Je({vertexColors:!0,roughness:.78}),gloss:new Jt({vertexColors:!0,roughness:.3,clearcoat:.6,clearcoatRoughness:.25}),rock:new Je({vertexColors:!0,roughness:.95,flatShading:!0}),white:new Je({color:"#ffffff",roughness:.8,side:xt}),paintTwoSided:new Je({vertexColors:!0,roughness:.8,side:xt}),flat:new Je({vertexColors:!0,roughness:.8,side:xt})},castleMats:{castleStone:new Je({map:f.map,normalMap:f.normalMap,normalScale:new le(.9,.9),roughness:.86}),roofPink:p("shinglesPink","#e2559a"),roofPurple:p("shinglesPurple","#7a4ae0"),carpet:new Je({map:i.texture("carpet",()=>Ic()),roughness:.9}),window:new Mt({map:u,transparent:!0,color:_}),windowLit:new Mt({map:u,transparent:!0,vertexColors:!0,color:_})}},g=[];for(let V of Cs){let Q=Lu[V.key];if(!Q)continue;m.land=V;let te=Q(m);te.group.position.set(te.x??V.x,te.y??l.heightAt(V.x,V.z),te.z??V.z),te.group.name="land-"+V.key,o.add(te.group),g.push({L:V,...te}),await s()}let v=Np(m);o.add(v.group),await s();let A=Up(i,l.roadY);o.add(A.group),await s();let M=new Qi(new ae(r.hemiSky),new ae(r.hemiGround),r.hemiPower),y=new Di(new ae(r.sun),r.sunPower);y.castShadow=!0,y.shadow.autoUpdate=!1,y.shadow.bias=-7e-4,y.shadow.normalBias=.06,y.shadow.radius=2.2,o.add(M,y,y.target);let E=V=>{let Q=new I(0,0,-2);y.target.position.copy(Q),y.position.copy(Q).addScaledVector(r.sunDir,150),y.updateMatrixWorld(),y.target.updateMatrixWorld();let te=new it().lookAt(y.position,Q,new I(0,1,0)).invert();te.multiply(new it().makeTranslation(-y.position.x,-y.position.y,-y.position.z));let q=new ni,se=new I;for(let xe of[-30,30])for(let Se of[-1,13])for(let Ue of[-68,62])q.expandByPoint(se.set(xe,Se,Ue).applyMatrix4(te));let ue=y.shadow.camera;ue.left=q.min.x,ue.right=q.max.x,ue.bottom=q.min.y,ue.top=q.max.y,ue.near=Math.max(1,-q.max.z-5),ue.far=-q.min.z+5,ue.updateProjectionMatrix(),y.shadow.map&&y.shadow.mapSize.x!==V&&(y.shadow.map.dispose(),y.shadow.map=null),y.shadow.mapSize.set(V,V),y.shadow.needsUpdate=!0},b=V=>{let Q=g.find(te=>te.L.key===V);return Q?Q.group.position.y:.6},x={x:0,y:.6,z:er,d:50,pitch:46*Hi,shift:0},S={scroll:0,focus:null,inset:0},T=1,P=0,L=()=>Xt(Fv/2/(Math.tan(Yc*Hi/2)*T),Bv,Ov),N=()=>{if(S.focus){let te=S.focus,q=Math.tan(Yc*Hi/2),se=Xt(1-S.inset/Math.max(1,i.height),.25,1),ue=1*te.h+.5*te.r+1.2,xe=2.3*te.r+2.2,Se=Math.max(ue/(2*q*se),xe/(2*q*T));return{x:te.x*.7,y:b(te.key)+te.h*.4,z:te.z+.8,d:Xt(Se,13,46),pitch:Hv*Hi,shift:S.inset/2}}let V=fn(er,Nu,S.scroll),Q=1-Ne(er,er+20,V);return{x:0,y:.6+Q*2.2,z:V-Q*3,d:L()*(1-Q*.14),pitch:fn(47,27,Q)*Hi,shift:0}},R=(V,Q)=>{let te=N(),q=Q?1:1-Math.exp(-V*(S.focus?5.5:14)),se=!1;for(let ue in te)x[ue]+=(te[ue]-x[ue])*q,Math.abs(te[ue]-x[ue])>(ue==="pitch"?5e-4:ue==="shift"?.4:.004)&&(se=!0);return se},D=()=>{a.position.set(x.x,x.y+x.d*Math.sin(x.pitch),x.z+x.d*Math.cos(x.pitch)),a.lookAt(x.x,x.y,x.z),x.shift>.5?a.setViewOffset(i.width,i.height,0,x.shift,i.width,i.height):a.view&&a.clearViewOffset(),a.updateProjectionMatrix(),a.updateMatrixWorld()},z=new Map,O=(V=0)=>{P+=V,D(),h.dome.position.copy(a.position),h.uniforms.uTime.value=P,c.uniforms.uTime.value=P;for(let te of g){te.update&&te.update(P);let q=z.get(te.L.key);if(q!==void 0){let se=(P-q)/.45;se>=1?(z.delete(te.L.key),te.group.scale.setScalar(1)):te.group.scale.setScalar(1+.07*Math.sin(se*Math.PI)*(1-se*.5))}}v.update(P);let Q=A.update(P,V);return t.toneMapping=Gn,t.toneMappingExposure=r.exposure,n.strength=r.bloom[0],n.radius=r.bloom[1],n.threshold=r.bloom[2],i.render(),Q||z.size>0};h.uniforms.uZenith.value.set(r.zenith),h.uniforms.uHorizon.value.set(r.horizon),h.uniforms.uGlow.value.set(r.glow),h.uniforms.uCloud.value.set(r.cloud),h.uniforms.uSunDir.value.copy(r.sunDir),h.uniforms.uStars.value=r.stars,c.uniforms.uShallow.value.set(r.shallow),c.uniforms.uDeep.value.set(r.deep),c.uniforms.uSunDir.value.copy(r.sunDir),c.uniforms.uGlint.value=r.glint;let H=new I,B=new I,G=V=>(V.project(a),{x:(V.x*.5+.5)*i.width,y:(-V.y*.5+.5)*i.height,z:V.z}),U=V=>{let Q=V.L,te=V.group.position.y,q=Q.key==="castle"?G(H.set(Q.x,te+Q.h+1.4,Q.z-1.2)):G(H.set(Q.x+Math.sign(Q.x)*.5,te,Q.z+Q.r*.95)),se=G(H.set(Q.x,te+1.3,Q.z)),ue=G(B.set(Q.x+Q.r,te+1.3,Q.z));return{key:Q.key,x:q.x,y:q.y,above:Q.key==="castle",cx:se.x,cy:se.y,r:Math.abs(ue.x-se.x),seen:se.z<1&&se.y>-80&&se.y<i.height+80}},J=0,Y=!1,de=0,ge=0,Le=0,K=0,ie=null,pe=null,Fe=!0,Ee=()=>{if(!pe)return;let V=pe.clientWidth,Q=pe.clientHeight;!V||!Q||V===i.width&&Q===i.height||(i.resize(V,Q),R(0,!0),O(0),ie&&ie())},Ge=V=>{if(!Y)return;J=requestAnimationFrame(Ge);let Q=Math.min(.1,(V-de)/1e3);de=V;let te=R(Q);if(!te&&!Fe&&V-ge<31)return;let q=Math.min(.1,(V-ge)/1e3);ge&&q>.045&&(te||Fe)&&Le++,++K>=40&&(Le>26&&i.tier>0&&i.setTier(i.tier-1),K=Le=0),ge=V,Fe=O(q),ie&&ie()},et={scene:o,camera:a,onTier(V){E(V.shadow||1024)},onResize(V){T=V,a.aspect=V},attach(V,Q={}){pe=V,ie=Q.onFrame||null,i.use(et),y.shadow.needsUpdate=!0,i.canvas.parentNode!==V&&V.appendChild(i.canvas);let te=V.clientWidth||innerWidth,q=V.clientHeight||innerHeight;(te!==i.width||q!==i.height)&&i.resize(te,q),R(0,!0),O(0),ie&&ie(),Y||(Y=!0,de=ge=performance.now(),K=Le=0,J=requestAnimationFrame(Ge),window.addEventListener("resize",Ee))},detach(){Y=!1,cancelAnimationFrame(J),window.removeEventListener("resize",Ee)},get attached(){return Y},step(V=1/60){R(V),Fe=O(V),ie&&ie()},metrics(){let V=L();return{pxPerUnit:i.height/2/(V*Math.tan(Yc*Hi/2))*Math.sin(47*Hi),range:Nu-er}},setScroll(V,Q){S.scroll=Xt(V),Q&&R(0,!0)},scrollOf(V){let Q=jr(V);return Q?Xt((Q.z+3-er)/(Nu-er)):0},focus(V,Q=0){S.focus=V?jr(V):null,S.inset=Q},walkTo(V,Q){A.go(V,P,Q),Fe=!0},bounce(V){z.set(V,P),Fe=!0},spots(){return g.map(U)},pick(V,Q){let te=null,q=1;for(let se of g){let ue=U(se),xe=Math.hypot(V-ue.cx,Q-ue.cy)/(ue.r*1.08);ue.seen&&xe<q&&(q=xe,te=ue.key)}return te},fits(){i.use(et);let V=t.getContext(),Q=new Uint8Array(4),te=()=>V.readPixels(0,0,1,1,V.RGBA,V.UNSIGNED_BYTE,Q);for(let q=i.tier;q>=0;q--){i.setTier(q),S.scroll=.4,R(0,!0),O(0),te();let se=performance.now();if(S.scroll=.6,R(0,!0),O(.016),te(),S.scroll=.2,R(0,!0),O(.016),te(),(performance.now()-se)/2<(q?26:45))return!0}return!1},snapshot(V,Q,te,q={}){let se=g.find(ut=>ut.L.key===V);if(!se)return null;Q&&te&&!Y&&(Q!==i.width||te!==i.height)&&i.resize(Q,te);let ue=se.L,xe=i.show,Se=i.width/i.height,Ue={...zv[V],...q},k=Se>1.15,ot=Ue.fov||(k?36:26),tt=Math.tan(ot*Hi/2),F=tt*Se,w=.5,Z,$=1.15,re;if(k){let ut=Xt((i.width-540)/2/i.width,.14,.32);w=ut*.53,$=ut*.96,re=.62,Z=.47}else re=.2/Ue.top,Z=.03+re/2;let me=(k?Ue.pitch+4:Ue.pitch)*Hi,ve=ue.h*Math.cos(me)+2*ue.r*Math.sin(me),oe=2.1*ue.r,ce=Math.max(ve/(re*2*tt),oe/($*2*F)),ye=new I(ue.x,se.group.position.y+ue.h*.5,ue.z),Re=new zt(ot,Se,.5,1600),we=Math.sign(ue.x||1),_e=Ue.yaw,Ve=Ue.swing!==void 0?[Ue.swing]:k?[_e,_e+10,_e-9,-_e,-_e-10]:[-_e,-_e-10,-_e+9,_e,_e+10],Ze=ut=>{let Tn=we*ut*Hi;Re.position.set(ye.x+Math.sin(Tn)*Math.cos(me)*ce,ye.y+Math.sin(me)*ce,ye.z+Math.cos(Tn)*Math.cos(me)*ce),Re.position.y=Math.max(Re.position.y,l.heightAt(Re.position.x,Re.position.z)+3.4);let Ns=(2*w-1)*F,os=(1-2*Z)*tt,tr=B.copy(ye).sub(Re.position).normalize(),Us=Math.asin(Xt(Math.hypot(Ns,os,1)*tr.y/Math.hypot(1,os),-1,1))-Math.atan(os);Re.rotation.set(Us,Math.atan2(tr.x,tr.z)-Math.atan2(Ns,os*Math.sin(Us)-Math.cos(Us)),0,"YXZ"),Re.updateMatrixWorld()},nt=new ms,W=new xi,be=()=>{for(let ut=.06;ut<.86;ut+=.04)if(l.heightAt(fn(Re.position.x,ye.x,ut),fn(Re.position.z,ye.z,ut))>fn(Re.position.y,ye.y,ut)-.5)return!1;nt.setFromProjectionMatrix(new it().multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse));for(let ut of g)if(ut!==se&&(W.center.set(ut.L.x,ut.group.position.y+ut.L.h*.5,ut.L.z),W.radius=Math.max(ut.L.r,ut.L.h*.5),W.center.distanceTo(Re.position)<ce-ue.r&&nt.intersectsSphere(W)))return!1;return!0},he=!1;for(let ut of Ve)if(Ze(ut),be()){he=!0;break}he||Ze(Ve[0]),h.dome.position.copy(Re.position),A.group.visible=!1;let Me=Re.position.x,Ce=Re.position.z,fe=ye.x-Me,We=ye.z-Ce,He=Math.hypot(fe,We)||1,wt=v.clear((ut,Tn)=>{let Ns=((ut-Me)*fe+(Tn-Ce)*We)/He,os=Math.abs((ut-Me)*We-(Tn-Ce)*fe)/He;return Math.hypot(ut-Me,Tn-Ce)<ce*.5||Ns>0&&Ns<He+ue.r*.4&&os<ue.r*.75+.8});i.use({scene:o,camera:Re}),t.toneMapping=Gn,t.toneMappingExposure=r.exposure,n.strength=r.bloom[0],n.radius=r.bloom[1],n.threshold=r.bloom[2],i.render();let _t=document.createElement("canvas");return _t.width=i.canvas.width,_t.height=i.canvas.height,_t.getContext("2d").drawImage(i.canvas,0,0),wt(),A.group.visible=!0,i.use(xe===et||!xe?et:xe),Y&&O(0),_t},info(){let V=t.info;return{calls:V.render.calls,triangles:V.render.triangles,geometries:V.memory.geometries,textures:V.memory.textures,tier:i.tier}},renderAt({scroll:V=0,focus:Q=null,inset:te=0,w:q,h:se,t:ue,at:xe=null}={}){i.use(et),q&&se&&i.resize(q,se),S.scroll=V,S.focus=Q?jr(Q):null,S.inset=te,ue!==void 0&&(P=ue),xe&&A.go(xe,P,!0),R(0,!0),O(0)},release(){et.detach(),Nc(i,o),y.shadow.map&&(y.shadow.map.dispose(),y.shadow.map=null)}};return i.use(et),A.go(e.at||"castle",0,!0),R(0,!0),O(0),t.compileAsync&&await t.compileAsync(o,a),et}var kv={zenith:"#9cc4ff",horizon:"#eef4ff",bounce:"#c9b8d8",sun:"#fff1dc",envSun:4,sunDir:new I(-.5,.7,.6).normalize()};function Bp(i){let e=document.createElement("canvas");e.className="k3d-buddies";let t=new Vr({canvas:e,antialias:!0,alpha:!0,stencil:!1});t.setClearColor(0,0),t.toneMapping=Gn,t.toneMappingExposure=1;let n=new Hn,s=Vc(t,kv);n.environment=s.texture,n.environmentIntensity=.5,n.add(new Qi(new ae("#e4eeff"),new ae("#b9a6cc"),.75));let r=new Di(new ae("#fff0dc"),2.4);r.position.set(-2.2,3.2,3.4),n.add(r);let o=new Te(new je(1,40,10,0,Math.PI*2,0,Math.PI/2),new Je({color:"#4c9a2e",roughness:.95}));o.scale.set(.6,.12,.46),o.position.set(0,-.12,.03),n.add(o);let a=["#ff7eb3","#ffd54f","#ffffff","#c9a4ff","#ff9e80"];[[-.5,.06],[-.4,.26],[-.02,.36],[.31,.3],[.5,.1],[.03,-.2],[-.2,.2]].forEach(([T,P],L)=>{let N=new Te(new kn(.026,0),new Je({color:a[L%a.length],roughness:.6}));N.position.set(T,-.12+.12*Math.sqrt(Math.max(0,1-(T/.6)**2-((P-.03)/.46)**2))+.015,P),N.scale.y=.75,n.add(N)});let l=Qr();l.skin.emissiveIntensity=.05,l.blob.opacity=.32;let c=[["yoovy",.25],["googy",-.25]].map(([T,P],L)=>{let N=Qs(T,i[T],l,{royal:!1});return N.x=P,N.side=Math.sign(P),N.late=L*.1,N.blink=1.5+L*1.3,n.add(N.root),N}),h=new zt(26,1,.1,30),d="idle",f=0,u=0,p=0,_=0,m=()=>{let L=Math.tan(h.fov*Math.PI/360),N=Math.max(1.62/(2*L),1.3/(2*L*h.aspect));h.position.set(0,.66,N),h.lookAt(0,.66,0),h.updateProjectionMatrix()},g=T=>{u+=T,f+=T,c.forEach((P,L)=>{let N=f-P.late,R={x:P.x,z:0,turn:-.2,walk:0,dist:0,face:"open",squash:-.012*Math.sin(u*2.1+L*1.7)};if(P.blink-=T,P.blink<.13&&(R.face="blink"),P.blink<0&&(P.blink=2.4+Math.random()*3.2),d==="idle")R.look=-P.side*.35*Math.max(0,Math.sin(u*.37+1.3)-.8)*5,R.tilt=.03*Math.sin(u*.8+L*2);else if(d==="happy"&&N>0){let D=N/.55,z=D<1?4*D*(1-D):0;R.jump=.15*z,R.squash=(D<.12?.07*Math.sin(D/.12*Math.PI):0)+(D>1&&D<1.25?.07*Math.sin((D-1)/.25*Math.PI):0),R.cheer=Ne(0,.18,N)*Ne(1.15,.9,N),R.face="laugh"}else if(d==="sad"){let D=Ne(0,.15,N)*Ne(.9,.65,N);R.nod=.3*D,R.lean=.08*D,R.look=.16*Math.sin(N*14)*Math.exp(-N*3)*D,R.armOut=-.06*D,R.face="sad"}else if(d==="surprised"&&N>0){let D=Xt(N/.4),z=Ne(0,.1,N)*Ne(1.2,.95,N);R.jump=.06*4*D*(1-D),R.armOut=.75*z,R.lean=-.07*z,R.nod=-.08*z,R.face="wow"}else if(d==="dance"){let D=u*6.2+L*Math.PI;R.jump=.05*Math.abs(Math.sin(D/2)),R.sway=.13*Math.sin(D/2),R.turn=-.2+.3*Math.sin(D/4),R.cheer=1,R.face="laugh"}P.update(u,R)}),t.render(n,h)},v=!1,A=!1,M=t.compileAsync(n,h).then(()=>{A||(v=!0,g(0))}),y=0,E=!1,b=0,x=T=>{if(!E||(y=requestAnimationFrame(x),!v)||!(d!=="idle")&&T-b<31)return;let L=Math.min(.1,(T-b)/1e3);b=T,g(L)},S={canvas:e,ready:M,resize(T,P){T=Math.max(2,T|0),P=Math.max(2,P|0),!(T===p&&P===_)&&(p=T,_=P,t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(T,P,!1),h.aspect=T/P,m(),v&&g(0))},mood(T){(T!==d||T!=="idle")&&(d=T,f=0)},get moodNow(){return d},start(){E||(E=!0,b=performance.now(),y=requestAnimationFrame(x))},stop(){E=!1,cancelAnimationFrame(y)},get running(){return E},step(T=1/60){v&&g(T)},dispose(){A=!0,v=!1,S.stop(),n.traverse(T=>{T.geometry&&T.geometry.dispose();let P=T.material?Array.isArray(T.material)?T.material:[T.material]:[];for(let L of P)L.dispose()}),s.dispose(),t.dispose(),t.forceContextLoss(),e.remove()}};return S.resize(180,210),S}var Ti=null,Zc=null,ui=null,Bt=null,_a=null,qt=null;function Gv(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}window.Kingdom3D={supported:Gv,start(i){return Zc||(Zc=rp(i).then(e=>(Ti=e,e))),Zc.then(()=>{})},get canvas(){return Ti?Ti.canvas:null},get tier(){return Ti?Ti.tier:-1},film:{timeline:Tp,get ready(){return!!ui},async prepare(){ui||(ui=await wp(Ti))},fits(){return ui.fits()},play(i,e){return ui.play(i,e)},renderAt(i,e,t){ui.renderAt(i,e,t)},release(){ui&&(ui.release(),ui=null)}},world:{get ready(){return!!Bt},prepare(i){return _a||(_a=Fp(Ti,i).then(e=>{Bt=e})),_a},fits(){return Bt.fits()},attach(i,e){Bt.attach(i,e)},detach(){Bt&&Bt.detach()},get attached(){return!!Bt&&Bt.attached},step(i){Bt.step(i)},metrics(){return Bt.metrics()},setScroll(i,e){Bt.setScroll(i,e)},scrollOf(i){return Bt.scrollOf(i)},focus(i,e){Bt.focus(i,e)},walkTo(i,e){Bt.walkTo(i,e)},bounce(i){Bt.bounce(i)},spots(){return Bt.spots()},pick(i,e){return Bt.pick(i,e)},snapshot(i,e,t,n){return Bt.snapshot(i,e,t,n)},info(){return Bt.info()},renderAt(i){Bt.renderAt(i)},release(){Bt&&(Bt.release(),Bt=null),_a=null}},buddies:{get ready(){return!!qt},create(){qt||(qt=Bp(Ti.dayFaces));let i=qt;return i.ready.then(()=>i.canvas)},mood(i){qt&&qt.mood(i)},resize(i,e){qt&&qt.resize(i,e)},start(){qt&&qt.start()},stop(){qt&&qt.stop()},step(i){qt&&qt.step(i)},get running(){return!!qt&&qt.running},get moodNow(){return qt?qt.moodNow:null},dispose(){qt&&(qt.dispose(),qt=null)}},dispose(){ui&&(ui.release(),ui=null),Bt&&(Bt.release(),Bt=null),_a=null,qt&&(qt.dispose(),qt=null),Ti&&(Ti.dispose(),Ti=null),Zc=null}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
