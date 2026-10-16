/* Yoovy & Googy: the 3D royal intro. Built from intro3d/src (npm run build); do not edit by hand. */
(()=>{var mu=0,Dc=1,gu=2;var as=1,_u=2,Ks=3,zi=0,Yt=1,Ut=2,Dn=0,Qs=1,Ct=2,Nc=3,Uc=4,xu=5;var ls=100,vu=101,yu=102,Mu=103,Su=104,bu=200,Eu=201,Tu=202,wu=203,Fc=204,Bc=205,Au=206,Ru=207,Cu=208,Pu=209,Iu=210,Lu=211,Du=212,Nu=213,Uu=214,aa=0,la=1,ca=2,Us=3,ha=4,ua=5,fa=6,da=7,za=0,Fu=1,Bu=2,qn=0,io=1,so=2,ro=3,cs=4,oo=5,ao=6,lo=7;var Oc=300,Vi=301,hs=302,Va=303,Ga=304,co=306,Fs=1e3,ti=1001,pa=1002,nn=1003,Ou=1004;var ho=1005;var cn=1006,ka=1007;var Gi=1008;var bn=1009,Hc=1010,zc=1011,js=1012,Wa=1013,Yn=1014,Nn=1015,Jt=1016,Xa=1017,qa=1018,er=1020,Vc=35902,Gc=35899,kc=1021,Wc=1022,Un=1023,ii=1026,ki=1027,Ya=1028,Za=1029,Wi=1030,Ja=1031;var $a=1033,uo=33776,fo=33777,po=33778,mo=33779,Ka=35840,Qa=35841,ja=35842,el=35843,tl=36196,nl=37492,il=37496,sl=37488,rl=37489,go=37490,ol=37491,al=37808,ll=37809,cl=37810,hl=37811,ul=37812,fl=37813,dl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,yl=37821,Ml=36492,Sl=36494,bl=36495,El=36283,Tl=36284,_o=36285,wl=36286;var Tr=2300,ma=2301,ra=2302,yc=2303,Mc=2400,Sc=2401,bc=2402;var Hu=3200;var xo=0,zu=1,bi="",ln="srgb",wr="srgb-linear",Ar="linear",pt="srgb";var oa=7680;var Vu=519,Gu=512,ku=513,Wu=514,Al=515,Xu=516,qu=517,Rl=518,Yu=519,Xc=35044;var qc="300 es",kn=2e3,Bs=2001;function Cd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zu(){let i=Rr("canvas");return i.style.display="block",i}var Fh={},Os=null;function Cr(...i){let e="THREE."+i.shift();Os?Os("log",e,...i):console.log(e,...i)}function Ju(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Ju(i);let e="THREE."+i.shift();if(Os)Os("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Ju(i);let e="THREE."+i.shift();if(Os)Os("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function es(...i){let e=i.join(" ");e in Fh||(Fh[e]=!0,Je(...i))}function $u(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ku={[aa]:la,[ca]:fa,[ha]:da,[Us]:ua,[la]:aa,[fa]:ca,[da]:ha,[ua]:Us},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yl=Math.PI/180,Pr=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Id(i,e){return(i%e+e)%e}function Zl(i,e,t){return(1-t)*i+t*e}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qc=class Qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qc.prototype.isVector2=!0;var re=Qc,Xt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(f!==v||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*v;m<0&&(u=-u,d=-d,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);g=Math.sin(g*y)/E,a=Math.sin(a*y)/E,l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+v*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-a*d,e[t+2]=c*p+h*d+a*u-l*f,e[t+3]=h*p-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jc=class jc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jc.prototype.isVector3=!0;var C=jc,Jl=new C,Bh=new Xt,eh=class eh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],v=s[0],m=s[3],g=s[6],y=s[1],E=s[4],x=s[7],S=s[2],b=s[5],R=s[8];return r[0]=o*v+a*y+l*S,r[3]=o*m+a*E+l*b,r[6]=o*g+a*x+l*R,r[1]=c*v+h*y+f*S,r[4]=c*m+h*E+f*b,r[7]=c*g+h*x+f*R,r[2]=u*v+d*y+p*S,r[5]=u*m+d*E+p*b,r[8]=u*g+d*x+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=t*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($l.makeScale(e,t)),this}rotate(e){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($l.makeRotation(-e)),this}translate(e,t){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;var $e=eh,$l=new $e,Oh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){let i={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wr]:{primaries:e,whitePoint:n,transfer:Ar,toXYZ:Oh,fromXYZ:Hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Oh,fromXYZ:Hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var st=Ld();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Rr("canvas")),gs.width=e.width,gs.height=e.height;let s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dd=0,Hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var Nd=0,Ql=new C,yn=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=cn,o=Gi,a=Un,l=bn,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=mi(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Oc;yn.DEFAULT_ANISOTROPY=1;var th=class th{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,x=(d+1)/2,S=(g+1)/2,b=(h+u)/4,R=(f+v)/4,_=(p+m)/4;return E>x&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=R/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};th.prototype.isVector4=!0;var Pt=th,_a=class extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new yn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends _a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ir=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ha=class Ha{constructor(e,t,n,s,r,o,a,l,c,h,f,u,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,u,d,p,v,m)}set(e,t,n,s,r,o,a,l,c,h,f,u,d,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,p=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,v=c*f;t[0]=u+v*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,v=c*f;t[0]=u-v*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,p=a*h,v=a*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=v-u*f,t[8]=p*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-v*f}else if(e.order==="XZY"){let u=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=o*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ud,e,Fd)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Pi.crossVectors(n,Tn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Pi.crossVectors(n,Tn)),Pi.normalize(),Lo.crossVectors(Tn,Pi),s[0]=Pi.x,s[4]=Lo.x,s[8]=Tn.x,s[1]=Pi.y,s[5]=Lo.y,s[9]=Tn.y,s[2]=Pi.z,s[6]=Lo.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],v=n[6],m=n[10],g=n[14],y=n[3],E=n[7],x=n[11],S=n[15],b=s[0],R=s[4],_=s[8],T=s[12],A=s[1],L=s[5],U=s[9],F=s[13],I=s[2],N=s[6],O=s[10],H=s[14],X=s[3],k=s[7],z=s[11],D=s[15];return r[0]=o*b+a*A+l*I+c*X,r[4]=o*R+a*L+l*N+c*k,r[8]=o*_+a*U+l*O+c*z,r[12]=o*T+a*F+l*H+c*D,r[1]=h*b+f*A+u*I+d*X,r[5]=h*R+f*L+u*N+d*k,r[9]=h*_+f*U+u*O+d*z,r[13]=h*T+f*F+u*H+d*D,r[2]=p*b+v*A+m*I+g*X,r[6]=p*R+v*L+m*N+g*k,r[10]=p*_+v*U+m*O+g*z,r[14]=p*T+v*F+m*H+g*D,r[3]=y*b+E*A+x*I+S*X,r[7]=y*R+E*L+x*N+S*k,r[11]=y*_+E*U+x*O+S*z,r[15]=y*T+E*F+x*H+S*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],v=e[7],m=e[11],g=e[15],y=l*d-c*u,E=a*d-c*f,x=a*u-l*f,S=o*d-c*h,b=o*u-l*h,R=o*f-a*h;return t*(v*y-m*E+g*x)-n*(p*y-m*S+g*b)+s*(p*E-v*S+g*R)-r*(p*x-v*b+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],v=e[13],m=e[14],g=e[15],y=t*a-n*o,E=t*l-s*o,x=t*c-r*o,S=n*l-s*a,b=n*c-r*a,R=s*c-r*l,_=h*v-f*p,T=h*m-u*p,A=h*g-d*p,L=f*m-u*v,U=f*g-d*v,F=u*g-d*m,I=y*F-E*U+x*L+S*A-b*T+R*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/I;return e[0]=(a*F-l*U+c*L)*N,e[1]=(s*U-n*F-r*L)*N,e[2]=(v*R-m*b+g*S)*N,e[3]=(u*b-f*R-d*S)*N,e[4]=(l*A-o*F-c*T)*N,e[5]=(t*F-s*A+r*T)*N,e[6]=(m*x-p*R-g*E)*N,e[7]=(h*R-u*x+d*E)*N,e[8]=(o*U-a*A+c*_)*N,e[9]=(n*A-t*U-r*_)*N,e[10]=(p*b-v*x+g*y)*N,e[11]=(f*x-h*b-d*y)*N,e[12]=(a*T-o*L-l*_)*N,e[13]=(t*L-n*T+s*_)*N,e[14]=(v*E-p*S-m*y)*N,e[15]=(h*S-f*E+u*y)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,v=o*h,m=o*f,g=a*f,y=l*c,E=l*h,x=l*f,S=n.x,b=n.y,R=n.z;return s[0]=(1-(v+g))*S,s[1]=(d+x)*S,s[2]=(p-E)*S,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(u+g))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(p+E)*R,s[9]=(m-y)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=_s.set(s[0],s[1],s[2]).length(),a=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hn.copy(this);let c=1/o,h=1/a,f=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=kn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===kn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Bs)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=kn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===kn)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===Bs)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ha.prototype.isMatrix4=!0;var ct=Ha,_s=new C,Hn=new ct,Ud=new C(0,0,0),Fd=new C(1,1,1),Pi=new C,Lo=new C,Tn=new C,zh=new ct,Vh=new Xt,hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bd=0,Gh=new C,xs=new Xt,ci=new ct,Do=new C,dr=new C,Od=new C,Hd=new Xt,kh=new C(1,0,0),Wh=new C(0,1,0),Xh=new C(0,0,1),qh={type:"added"},zd={type:"removed"},vs={type:"childadded",child:null},jl={type:"childremoved",child:null},qt=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new hn,n=new Xt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new $e}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(dr,Do,this.up):ci.lookAt(Do,dr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ci),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),vs.child=e,this.dispatchEvent(vs),vs.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zd),jl.child=e,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new C(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vd={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},No={h:0,s:0,l:0};function ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Id(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ec(o,r,e+1/3),this.g=ec(o,r,e),this.b=ec(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let n=Qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return st.workingToColorSpace(mn.copy(this),e),Math.round(nt(mn.r*255,0,255))*65536+Math.round(nt(mn.g*255,0,255))*256+Math.round(nt(mn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ln){st.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(No);let n=Zl(Ii.h,No.h,t),s=Zl(Ii.s,No.s,t),r=Zl(Ii.l,No.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new me;me.NAMES=Qu;var Dr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ts=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new C,hi=new C,tc=new C,ui=new C,ys=new C,Ms=new C,Yh=new C,nc=new C,ic=new C,sc=new C,rc=new Pt,oc=new Pt,ac=new Pt,pi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),hi.subVectors(n,t),tc.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(hi),l=zn.dot(tc),c=hi.dot(hi),h=hi.dot(tc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),hi.subVectors(e,t),zn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),zn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,n),Ms.subVectors(r,n),nc.subVectors(e,n);let l=ys.dot(nc),c=Ms.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,s);let h=ys.dot(ic),f=Ms.dot(ic);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ys,o);sc.subVectors(e,r);let d=ys.dot(sc),p=Ms.dot(sc);if(p>=0&&d<=p)return t.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ms,a);let m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return Yh.subVectors(r,s),a=(f-h)/(f-h+(d-p)),t.copy(s).addScaledVector(Yh,a);let g=1/(m+v+u);return o=v*g,a=u*g,t.copy(n).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ri=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Fo.subVectors(this.max,pr),Ss.subVectors(e.a,pr),bs.subVectors(e.b,pr),Es.subVectors(e.c,pr),Li.subVectors(bs,Ss),Di.subVectors(Es,bs),$i.subVectors(Ss,Es);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-$i.z,$i.y,Li.z,0,-Li.x,Di.z,0,-Di.x,$i.z,0,-$i.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-$i.y,$i.x,0];return!lc(t,Ss,bs,Es,Fo)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,Ss,bs,Es,Fo))?!1:(Bo.crossVectors(Li,Di),t=[Bo.x,Bo.y,Bo.z],lc(t,Ss,bs,Es,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new C,new C,new C,new C,new C,new C,new C,new C],Vn=new C,Uo=new ri,Ss=new C,bs=new C,Es=new C,Li=new C,Di=new C,$i=new C,pr=new C,Fo=new C,Bo=new C,Ki=new C;function lc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Wt=new C,Oo=new re,Gd=0,Tt=class extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ie=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},kd=new ri,mr=new C,cc=new C,_i=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(cc)),this.expandByPoint(mr.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wd=0,Ln=new ct,hc=new qt,Ts=new C,wn=new ri,gr=new ri,en=new C,it=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Ur:Nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(wn.min,gr.min),wn.expandByPoint(en),en.addVectors(wn.max,gr.max),wn.expandByPoint(en)):(wn.expandByPoint(gr.min),wn.expandByPoint(gr.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),en.add(Ts)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new C,l[_]=new C;let c=new C,h=new C,f=new C,u=new re,d=new re,p=new re,v=new C,m=new C;function g(_,T,A){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,A),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[_].add(v),a[T].add(v),a[A].add(v),l[_].add(m),l[T].add(m),l[A].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){let A=y[_],L=A.start,U=A.count;for(let F=L,I=L+U;F<I;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let E=new C,x=new C,S=new C,b=new C;function R(_){S.fromBufferAttribute(s,_),b.copy(S);let T=a[_];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(b,T);let L=x.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,T=y.length;_<T;++_){let A=y[_],L=A.start,U=A.count;for(let F=L,I=L+U;F<I;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,f=new C;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new Tt(u,h,f)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xc,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},vn=new C,Vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},uc=new C,Xd=new C,qd=new $e,Gn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=uc.subVectors(n,t).cross(Xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qd.getNormalMatrix(e),s=this.coplanarPoint(uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yd=0,Wn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Qs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Bc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mn=class extends Wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ws,_r=new C,As=new C,Rs=new C,Cs=new re,xr=new re,ju=new ct,Ho=new C,vr=new C,zo=new C,Zh=new re,fc=new re,Jh=new re,Sn=class extends qt{constructor(e=new Mn){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fr(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Vs(n,3,0,!1)),ws.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=ws,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Vo(Ho.set(-.5,-.5,0),Rs,o,As,s,r),Vo(vr.set(.5,-.5,0),Rs,o,As,s,r),Vo(zo.set(.5,.5,0),Rs,o,As,s,r),Zh.set(0,0),fc.set(1,0),Jh.set(1,1);let a=e.ray.intersectTriangle(Ho,vr,zo,!1,_r);if(a===null&&(Vo(vr.set(-.5,.5,0),Rs,o,As,s,r),fc.set(0,1),a=e.ray.intersectTriangle(Ho,zo,vr,!1,_r),a===null))return;let l=e.ray.origin.distanceTo(_r);l<e.near||l>e.far||t.push({distance:l,point:_r.clone(),uv:pi.getInterpolation(_r,Ho,vr,zo,Zh,fc,Jh,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vo(i,e,t,n,s,r){Cs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xr.x=r*Cs.x-s*Cs.y,xr.y=s*Cs.x+r*Cs.y):xr.copy(Cs),i.copy(e),i.x+=xr.x,i.y+=xr.y,i.applyMatrix4(ju)}var di=new C,dc=new C,Go=new C,ko=new C,Br=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){dc.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),ko.copy(this.origin).sub(dc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=ko.dot(this.direction),l=-ko.dot(Go),c=ko.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dc).addScaledVector(Go,u),d}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,E=n.z-o.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(h),R,_,T,A,L,U,F,I,N,O,H,X;if(x>=S&&x>=b?(T=l,U=f,N=p,X=g,l>=0?(R=c,_=h,A=u,L=d,F=v,I=m,O=y,H=E):(R=h,_=c,A=d,L=u,F=m,I=v,O=E,H=y)):S>=b?(T=c,U=u,N=v,X=y,c>=0?(R=h,_=l,A=d,L=f,F=m,I=p,O=E,H=g):(R=l,_=h,A=f,L=d,F=p,I=m,O=g,H=E)):(T=h,U=d,N=m,X=E,h>=0?(R=l,_=c,A=f,L=u,F=p,I=v,O=g,H=y):(R=c,_=l,A=u,L=f,F=v,I=p,O=y,H=g)),T===0)return null;let k=R/T,z=_/T,D=1/T,Y=A-k*U,ee=L-z*U,ue=F-k*N,ge=I-z*N,De=O-k*X,$=H-z*X,j=De*ge-$*ue,he=Y*$-ee*De,He=ue*ee-ge*Y;if(s){if(j<0||he<0||He<0)return null}else if((j<0||he<0||He<0)&&(j>0||he>0||He>0))return null;let _e=j+he+He;if(_e===0)return null;let Fe=D*(j*U+he*N+He*X);return(_e>0?Fe<0:Fe>0)?null:this.at(Fe/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$h=new ct,Qi=new Br,Wo=new _i,Kh=new C,Xo=new C,qo=new C,Yo=new C,pc=new C,Zo=new C,Qh=new C,Jo=new C,Xe=class extends qt{constructor(e=new it,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(pc.fromBufferAttribute(f,e),o?Zo.addScaledVector(pc,h):Zo.addScaledVector(pc.sub(t),h))}t.add(Zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Wo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Wo,Kh)===null||Qi.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&($h.copy(r).invert(),Qi.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=E;x<S;x+=3){let b=a.getX(x),R=a.getX(x+1),_=a.getX(x+2);s=$o(this,g,e,n,c,h,f,b,R,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let y=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=$o(this,o,e,n,c,h,f,y,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=E;x<S;x+=3){let b=x,R=x+1,_=x+2;s=$o(this,g,e,n,c,h,f,b,R,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let y=m,E=m+1,x=m+2;s=$o(this,o,e,n,c,h,f,y,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Zd(i,e,t,n,s,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===zi,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jo);return c<t.near||c>t.far?null:{distance:c,point:Jo.clone(),object:i}}function $o(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Xo),i.getVertexPosition(l,qo),i.getVertexPosition(c,Yo);let h=Zd(i,e,t,n,Xo,qo,Yo,Qh);if(h){let f=new C;pi.getBarycoord(Qh,Xo,qo,Yo,f),s&&(h.uv=pi.getInterpolatedAttribute(s,a,l,c,f,new re)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,l,c,f,new re)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};pi.getNormal(Xo,qo,Yo,u.normal),h.face=u,h.barycoord=f}return h}var Or=class extends yn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=nn,h=nn,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=class extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new ct,jh=new ct,Ko=[],eu=new ri,Jd=new ct,yr=new Xe,Mr=new _i,Ot=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),eu.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(eu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Mr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),jh.multiplyMatrices(n,Ps),yr.matrixWorld=jh,yr.raycast(e,Ko);for(let o=0,a=Ko.length;o<a;o++){let l=Ko[o];l.instanceId=r,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,Ya,Nn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new _i,$d=new re(.5,.5),Qo=new C,ks=class{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],E=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,g-p,S-y).normalize(),s[1].setComponents(c+o,d+h,g+p,S+y).normalize(),s[2].setComponents(c+a,d+f,g+v,S+E).normalize(),s[3].setComponents(c-a,d-f,g-v,S-E).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,d-u,g-m,S-x).normalize();else if(s[4].setComponents(c-l,d-u,g-m,S-x).normalize(),t===kn)s[5].setComponents(c+l,d+u,g+m,S+x).normalize();else if(t===Bs)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);let t=$d.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var va=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tu=new ct,Ec=new Br,jo=new _i,ea=new C,Xn=class extends qt{constructor(e=new it,t=new va){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;tu.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,v=d;p<v;p++){let m=c.getX(p);ea.fromBufferAttribute(f,m),nu(ea,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,v=d;p<v;p++)ea.fromBufferAttribute(f,p),nu(ea,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nu(i,e,t,n,s,r,o){let a=Ec.distanceSqToPoint(i);if(a<t){let l=new C;Ec.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Hr=class extends yn{constructor(e=[],t=Vi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xi=class extends yn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ui=class extends yn{constructor(e,t,n=Yn,s,r,o,a=nn,l=nn,c,h=ii,f=1){if(h!==ii&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ya=class extends Ui{constructor(e,t=Yn,n=Vi,s,r,o=nn,a=nn,l,c=ii){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zr=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ht=class i extends it{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(f,2));function p(v,m,g,y,E,x,S,b,R,_,T){let A=x/R,L=S/_,U=x/2,F=S/2,I=b/2,N=R+1,O=_+1,H=0,X=0,k=new C;for(let z=0;z<O;z++){let D=z*L-F;for(let Y=0;Y<N;Y++){let ee=Y*A-U;k[v]=ee*y,k[m]=D*E,k[g]=I,c.push(k.x,k.y,k.z),k[v]=0,k[m]=0,k[g]=b>0?1:-1,h.push(k.x,k.y,k.z),f.push(Y/R),f.push(1-z/_),H+=1}}for(let z=0;z<_;z++)for(let D=0;D<R;D++){let Y=u+D+N*z,ee=u+D+N*(z+1),ue=u+(D+1)+N*(z+1),ge=u+(D+1)+N*z;l.push(Y,ee,ge),l.push(ee,ue,ge),X+=6}a.addGroup(d,X,T),d+=X,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ws=class i extends it{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,p=n*2+r,v=s+1,m=new C,g=new C;for(let y=0;y<=p;y++){let E=0,x=0,S=0,b=0;if(y<=n){let T=y/n,A=T*Math.PI/2;x=-h-e*Math.cos(A),S=e*Math.sin(A),b=-e*Math.cos(A),E=T*f}else if(y<=n+r){let T=(y-n)/r;x=-h+T*t,S=e,b=0,E=f+T*u}else{let T=(y-n-r)/n,A=T*Math.PI/2;x=h+e*Math.sin(A),S=e*Math.cos(A),b=e*Math.sin(A),E=f+u+T*f}let R=Math.max(0,Math.min(1,E/d)),_=0;y===0?_=.5/s:y===p&&(_=-.5/s);for(let T=0;T<=s;T++){let A=T/s,L=A*Math.PI*2,U=Math.sin(L),F=Math.cos(L);g.x=-S*F,g.y=x,g.z=S*U,a.push(g.x,g.y,g.z),m.set(-S*F,b,S*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+_,R)}if(y>0){let T=(y-1)*v;for(let A=0;A<s;A++){let L=T+A,U=T+A+1,F=y*v+A,I=y*v+A+1;o.push(L,U,F),o.push(U,I,F)}}}this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var mt=class i extends it{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,v=[],m=n/2,g=0;y(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ie(f,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(d,2));function y(){let x=new C,S=new C,b=0,R=(t-e)/n;for(let _=0;_<=r;_++){let T=[],A=_/r,L=A*(t-e)+e;for(let U=0;U<=s;U++){let F=U/s,I=F*l+a,N=Math.sin(I),O=Math.cos(I);S.x=L*N,S.y=-A*n+m,S.z=L*O,f.push(S.x,S.y,S.z),x.set(N,R,O).normalize(),u.push(x.x,x.y,x.z),d.push(F,1-A),T.push(p++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let A=v[T][_],L=v[T+1][_],U=v[T+1][_+1],F=v[T][_+1];(e>0||T!==0)&&(h.push(A,L,F),b+=3),(t>0||T!==r-1)&&(h.push(L,U,F),b+=3)}c.addGroup(g,b,0),g+=b}function E(x){let S=p,b=new re,R=new C,_=0,T=x===!0?e:t,A=x===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*A,0),u.push(0,A,0),d.push(.5,.5),p++;let L=p;for(let U=0;U<=s;U++){let I=U/s*l+a,N=Math.cos(I),O=Math.sin(I);R.x=T*O,R.y=m*A,R.z=T*N,f.push(R.x,R.y,R.z),u.push(0,A,0),b.x=N*.5+.5,b.y=O*.5*A+.5,d.push(b.x,b.y),p++}for(let U=0;U<s;U++){let F=S+U,I=L+U;x===!0?h.push(I,I+1,F):h.push(I+1,I,F),_+=3}c.addGroup(g,_,x===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sn=class i extends mt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ma=class i extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new C,x=new C,S=new C;for(let b=0;b<t.length;b+=3)d(t[b+0],E),d(t[b+1],x),d(t[b+2],S),l(E,x,S,y)}function l(y,E,x,S){let b=S+1,R=[];for(let _=0;_<=b;_++){R[_]=[];let T=y.clone().lerp(x,_/b),A=E.clone().lerp(x,_/b),L=b-_;for(let U=0;U<=L;U++)U===0&&_===b?R[_][U]=T:R[_][U]=T.clone().lerp(A,U/L)}for(let _=0;_<b;_++)for(let T=0;T<2*(b-_)-1;T++){let A=Math.floor(T/2);T%2===0?(u(R[_][A+1]),u(R[_+1][A]),u(R[_][A])):(u(R[_][A+1]),u(R[_+1][A+1]),u(R[_+1][A]))}}function c(y){let E=new C;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(y),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){let y=new C;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let x=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(x,1-S)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){let E=o[y+0],x=o[y+2],S=o[y+4],b=Math.max(E,x,S),R=Math.min(E,x,S);b>.9&&R<.1&&(E<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,E){let x=y*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function p(){let y=new C,E=new C,x=new C,S=new C,b=new re,R=new re,_=new re;for(let T=0,A=0;T<r.length;T+=9,A+=6){y.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),b.set(o[A+0],o[A+1]),R.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),S.copy(y).add(E).add(x).divideScalar(3);let L=m(S);v(b,A+0,y,L),v(R,A+2,E,L),v(_,A+4,x,L)}}function v(y,E,x,S){S<0&&y.x===1&&(o[E]=y.x-1),x.x===0&&x.z===0&&(o[E]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],o=[],a=new C,l=new ct;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(nt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(nt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xs=class extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sa=class extends Xs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var iu=new C,su=new C,mc=new Yc,gc=new Yc,_c=new Yc,vi=class extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(su.subVectors(s[0],s[1]).add(s[0]),c=su);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=iu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),mc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,v,m),gc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,v,m),_c.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(mc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),gc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_c.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(mc.calc(l),gc.calc(l),_c.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ru(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Kd(i,e){let t=1-i;return t*t*e}function Qd(i,e){return 2*(1-i)*i*e}function jd(i,e){return i*i*e}function br(i,e,t,n){return Kd(i,e)+Qd(i,t)+jd(i,n)}function ep(i,e){let t=1-i;return t*t*t*e}function tp(i,e){let t=1-i;return 3*t*t*i*e}function np(i,e){return 3*(1-i)*i*i*e}function ip(i,e){return i*i*i*e}function Er(i,e,t,n,s){return ep(i,e)+tp(i,t)+np(i,n)+ip(i,s)}var Vr=class extends An{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends An{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y),Er(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends An{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ns=class extends An{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends An{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends An{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y),br(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(ru(a,l.x,c.x,h.x,f.x),ru(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Ea=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:vi,CubicBezierCurve:Vr,CubicBezierCurve3:ba,EllipseCurve:Xs,LineCurve:Gr,LineCurve3:ns,QuadraticBezierCurve:kr,QuadraticBezierCurve3:Wr,SplineCurve:Xr}),qs=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ea[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ea[s.type]().fromJSON(s))}return this}},qr=class extends qs{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gr(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new kr(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Vr(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Xs(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gn=class extends qr{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qr().fromJSON(s))}return this}};function sp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ef(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=cp(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,f=l;for(let u=t;u<s;u+=t){let d=i[u],p=i[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Yr(r,o,t,a,l,c,0),o}function ef(i,e,t,n,s){let r;if(s===yp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=ou(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ou(o/n|0,i[o],i[o+1],r);return r&&Ys(r,r.next)&&(Jr(r),r=r.next),r}function is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ys(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&pp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?op(i,n,s,r):rp(i)){e.push(l.i,i.i,c.i),Jr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ap(is(i),e),Yr(i,e,t,n,s,r,2)):o===2&&lp(i,e,t,n,s,r):Yr(is(i),e,t,n,s,r,1);break}}}function rp(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Sr(s,a,r,l,o,c,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function op(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),v=Math.max(a,l,c),m=Math.max(h,f,u),g=Tc(d,p,e,t,n),y=Tc(v,m,e,t,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=g&&x&&x.z<=y;){if(E.x>=d&&E.x<=v&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&Sr(a,h,l,f,c,u,E.x,E.y)&&Dt(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Sr(a,h,l,f,c,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=v&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&Sr(a,h,l,f,c,u,E.x,E.y)&&Dt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Sr(a,h,l,f,c,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ap(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ys(n,s)&&nf(n,t,t.next,s)&&Zr(n,s)&&Zr(s,n)&&(e.push(n.i,t.i,s.i),Jr(t),Jr(t.next),t=i=s),t=t.next}while(t!==i);return is(t)}function lp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_p(o,a)){let l=sf(o,a);o=is(o,o.next),l=is(l,l.next),Yr(o,e,t,n,s,r,0),Yr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function cp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ef(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gp(c))}s.sort(hp);for(let r=0;r<s.length;r++)t=up(s[r],t);return t}function hp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function up(i,e){let t=fp(i,e);if(!t)return e;let n=sf(t,i);return is(n,n.next),is(t,t.next)}function fp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ys(i,t))return t;do{if(Ys(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&tf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Zr(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&dp(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function dp(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function pp(i,e,t,n){let s=i;do s.z===0&&(s.z=Tc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mp(s)}function mp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Tc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Sr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&tf(i,e,t,n,s,r,o,a)}function _p(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xp(i,e)&&(Zr(i,e)&&Zr(e,i)&&vp(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Ys(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ys(i,e){return i.x===e.x&&i.y===e.y}function nf(i,e,t,n){let s=na(Dt(i,e,t)),r=na(Dt(i,e,n)),o=na(Dt(t,n,i)),a=na(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&ta(i,t,e)||r===0&&ta(i,n,e)||o===0&&ta(t,i,n)||a===0&&ta(t,e,n))}function ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function na(i){return i>0?1:i<0?-1:0}function xp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&nf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function vp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function sf(i,e){let t=wc(i.i,i.x,i.y),n=wc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ou(i,e,t,n){let s=wc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ac=class{static triangulate(e,t,n=2){return sp(e,t,n)}},ni=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];au(e),lu(n,e);let o=e.length;t.forEach(au);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,lu(n,t[l]);let a=Ac.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function au(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var yi=class i extends it{constructor(e=new gn([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Mp,E,x=!1,S,b,R,_;if(g){E=g.getSpacedPoints(h),x=!0,u=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,ie),b=new C,R=new C,_=new C}u||(m=0,d=0,p=0,v=0);let T=a.extractPoints(c),A=T.shape,L=T.holes;if(!ni.isClockWise(A)){A=A.reverse();for(let ie=0,ce=L.length;ie<ce;ie++){let fe=L[ie];ni.isClockWise(fe)&&(L[ie]=fe.reverse())}}function F(ie){let fe=10000000000000001e-36,K=ie[0];for(let ae=1;ae<=ie.length;ae++){let Se=ae%ie.length,Te=ie[Se],Ae=Te.x-K.x,Be=Te.y-K.y,B=Ae*Ae+Be*Be,rt=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(K.x),Math.abs(K.y)),je=fe*rt*rt;if(B<=je){ie.splice(Se,1),ae--;continue}K=Te}}F(A),L.forEach(F);let I=L.length,N=A;for(let ie=0;ie<I;ie++){let ce=L[ie];A=A.concat(ce)}function O(ie,ce,fe){return ce||Ze("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ce,fe)}let H=A.length;function X(ie,ce,fe){let K,ae,Se,Te=ie.x-ce.x,Ae=ie.y-ce.y,Be=fe.x-ie.x,B=fe.y-ie.y,rt=Te*Te+Ae*Ae,je=Te*B-Ae*Be;if(Math.abs(je)>Number.EPSILON){let P=Math.sqrt(rt),M=Math.sqrt(Be*Be+B*B),W=ce.x-Ae/P,q=ce.y+Te/P,te=fe.x-B/M,de=fe.y+Be/M,pe=((te-W)*B-(de-q)*Be)/(Te*B-Ae*Be);K=W+Te*pe-ie.x,ae=q+Ae*pe-ie.y;let ne=K*K+ae*ae;if(ne<=2)return new re(K,ae);Se=Math.sqrt(ne/2)}else{let P=!1;Te>Number.EPSILON?Be>Number.EPSILON&&(P=!0):Te<-Number.EPSILON?Be<-Number.EPSILON&&(P=!0):Math.sign(Ae)===Math.sign(B)&&(P=!0),P?(K=-Ae,ae=Te,Se=Math.sqrt(rt)):(K=Te,ae=Ae,Se=Math.sqrt(rt/2))}return new re(K/Se,ae/Se)}let k=[];for(let ie=0,ce=N.length,fe=ce-1,K=ie+1;ie<ce;ie++,fe++,K++)fe===ce&&(fe=0),K===ce&&(K=0),k[ie]=X(N[ie],N[fe],N[K]);let z=[],D,Y=k.concat();for(let ie=0,ce=I;ie<ce;ie++){let fe=L[ie];D=[];for(let K=0,ae=fe.length,Se=ae-1,Te=K+1;K<ae;K++,Se++,Te++)Se===ae&&(Se=0),Te===ae&&(Te=0),D[K]=X(fe[K],fe[Se],fe[Te]);z.push(D),Y=Y.concat(D)}let ee;if(m===0)ee=ni.triangulateShape(N,L);else{let ie=[],ce=[];for(let fe=0;fe<m;fe++){let K=fe/m,ae=d*Math.cos(K*Math.PI/2),Se=p*Math.sin(K*Math.PI/2)+v;for(let Te=0,Ae=N.length;Te<Ae;Te++){let Be=O(N[Te],k[Te],Se);he(Be.x,Be.y,-ae),K===0&&ie.push(Be)}for(let Te=0,Ae=I;Te<Ae;Te++){let Be=L[Te];D=z[Te];let B=[];for(let rt=0,je=Be.length;rt<je;rt++){let P=O(Be[rt],D[rt],Se);he(P.x,P.y,-ae),K===0&&B.push(P)}K===0&&ce.push(B)}}ee=ni.triangulateShape(ie,ce)}let ue=ee.length,ge=p+v;for(let ie=0;ie<H;ie++){let ce=u?O(A[ie],Y[ie],ge):A[ie];x?(R.copy(S.normals[0]).multiplyScalar(ce.x),b.copy(S.binormals[0]).multiplyScalar(ce.y),_.copy(E[0]).add(R).add(b),he(_.x,_.y,_.z)):he(ce.x,ce.y,0)}for(let ie=1;ie<=h;ie++)for(let ce=0;ce<H;ce++){let fe=u?O(A[ce],Y[ce],ge):A[ce];x?(R.copy(S.normals[ie]).multiplyScalar(fe.x),b.copy(S.binormals[ie]).multiplyScalar(fe.y),_.copy(E[ie]).add(R).add(b),he(_.x,_.y,_.z)):he(fe.x,fe.y,f/h*ie)}for(let ie=m-1;ie>=0;ie--){let ce=ie/m,fe=d*Math.cos(ce*Math.PI/2),K=p*Math.sin(ce*Math.PI/2)+v;for(let ae=0,Se=N.length;ae<Se;ae++){let Te=O(N[ae],k[ae],K);he(Te.x,Te.y,f+fe)}for(let ae=0,Se=L.length;ae<Se;ae++){let Te=L[ae];D=z[ae];for(let Ae=0,Be=Te.length;Ae<Be;Ae++){let B=O(Te[Ae],D[Ae],K);x?he(B.x,B.y+E[h-1].y,E[h-1].x+fe):he(B.x,B.y,f+fe)}}}De(),$();function De(){let ie=s.length/3;if(u){let ce=0,fe=H*ce;for(let K=0;K<ue;K++){let ae=ee[K];He(ae[2]+fe,ae[1]+fe,ae[0]+fe)}ce=h+m*2,fe=H*ce;for(let K=0;K<ue;K++){let ae=ee[K];He(ae[0]+fe,ae[1]+fe,ae[2]+fe)}}else{for(let ce=0;ce<ue;ce++){let fe=ee[ce];He(fe[2],fe[1],fe[0])}for(let ce=0;ce<ue;ce++){let fe=ee[ce];He(fe[0]+H*h,fe[1]+H*h,fe[2]+H*h)}}n.addGroup(ie,s.length/3-ie,0)}function $(){let ie=s.length/3,ce=0;j(N,ce),ce+=N.length;for(let fe=0,K=L.length;fe<K;fe++){let ae=L[fe];j(ae,ce),ce+=ae.length}n.addGroup(ie,s.length/3-ie,1)}function j(ie,ce){let fe=ie.length;for(;--fe>=0;){let K=fe,ae=fe-1;ae<0&&(ae=ie.length-1);for(let Se=0,Te=h+m*2;Se<Te;Se++){let Ae=H*Se,Be=H*(Se+1),B=ce+K+Ae,rt=ce+ae+Ae,je=ce+ae+Be,P=ce+K+Be;_e(B,rt,je,P)}}}function he(ie,ce,fe){l.push(ie),l.push(ce),l.push(fe)}function He(ie,ce,fe){Fe(ie),Fe(ce),Fe(fe);let K=s.length/3,ae=y.generateTopUV(n,s,K-3,K-2,K-1);Ke(ae[0]),Ke(ae[1]),Ke(ae[2])}function _e(ie,ce,fe,K){Fe(ie),Fe(ce),Fe(K),Fe(ce),Fe(fe),Fe(K);let ae=s.length/3,Se=y.generateSideWallUV(n,s,ae-6,ae-3,ae-2,ae-1);Ke(Se[0]),Ke(Se[1]),Ke(Se[3]),Ke(Se[1]),Ke(Se[2]),Ke(Se[3])}function Fe(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function Ke(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ea[s.type]().fromJSON(s)),new i(n,e.options)}},Mp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],p=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-f),new re(u,1-p),new re(v,1-g)]:[new re(a,1-l),new re(h,1-f),new re(d,1-p),new re(m,1-g)]}};function Sp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Mi=class i extends Ma{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},$r=class i extends it{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=nt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new C,u=new re,d=new C,p=new C,v=new C,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let y=0;y<=t;y++){let E=n+y*h*s,x=Math.sin(E),S=Math.cos(E);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*x,f.y=e[b].y,f.z=e[b].x*S,o.push(f.x,f.y,f.z),u.x=y/t,u.y=b/(e.length-1),a.push(u.x,u.y);let R=l[3*b+0]*x,_=l[3*b+1],T=l[3*b+0]*S;c.push(R,_,T)}}for(let y=0;y<t;y++)for(let E=0;E<e.length-1;E++){let x=E+y*e.length,S=x,b=x+e.length,R=x+e.length+1,_=x+1;r.push(S,b,_),r.push(R,_,b)}this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("uv",new Ie(a,2)),this.setAttribute("normal",new Ie(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var It=class i extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let E=0;E<c;E++){let x=E*f-r;p.push(x,-y,0),v.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let E=y+c*g,x=y+c*(g+1),S=y+1+c*(g+1),b=y+1+c*g;d.push(E,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ss=class i extends it{constructor(e=new gn([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(o,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,p=u.holes;ni.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];ni.isClockWise(y)===!0&&(p[m]=y.reverse())}let v=ni.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=v.length;m<g;m++){let y=v[m],E=y[0]+f,x=y[1]+f,S=y[2]+f;n.push(E,x,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return bp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function bp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ht=class i extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new C,u=new C,d=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let y=[],E=g/n,x=o+E*a,S=e*Math.cos(x),b=Math.sqrt(e*e-S*S),R=0;g===0&&o===0?R=.5/t:g===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let T=_/t,A=s+T*r;f.x=-b*Math.cos(A),f.y=S,f.z=b*Math.sin(A),p.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(T+R,1-E),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let E=h[g][y+1],x=h[g][y],S=h[g+1][y],b=h[g+1][y+1];(g!==0||o>0)&&d.push(E,x,b),(g!==n-1||l<Math.PI)&&d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zt=class i extends it{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new C,d=new C,p=new C;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(g/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,E=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(g,y,x),l.push(y,E,x)}this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var rs=class i extends it{constructor(e=new Wr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new re,h=new C,f=[],u=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ie(f,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(d,2));function v(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),y(),g()}function m(E){h=e.getPointAt(E/t,h);let x=o.normals[E],S=o.binormals[E];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,_=Math.sin(R),T=-Math.cos(R);l.x=T*x.x+_*S.x,l.y=T*x.y+_*S.y,l.z=T*x.z+_*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){let S=(s+1)*(E-1)+(x-1),b=(s+1)*E+(x-1),R=(s+1)*E+x,_=(s+1)*(E-1)+x;p.push(S,b,_),p.push(b,R,_)}}function y(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)c.x=E/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ea[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(cu(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(cu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=us(i[t]);for(let s in n)e[s]=n[s]}return e}function cu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ep(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Ei={clone:us,merge:_n},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ut=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Zs=class extends ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gt=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Kr=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=za,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ta=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wa=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Is(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Aa=class extends Fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:r=e,a=2*t-n;break;case bc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:o=e,l=2*n-t;break;case bc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,y=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,E=(-1-d)*m+(1.5+d)*v+.5*p,x=d*m-d*v;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+y*o[c+S]+E*o[l+S]+x*o[f+S];return r}},Ra=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Ca=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pa=class extends Fi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(s-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let u=a*2,d=e-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=d*u+p*2,y=f[g],E=f[g+1],x=e*u+p*2,S=h[x],b=h[x+1],R=Rp(n,t,y,S,s);r[p]=rf(R,v,E,b,m)}return r}};function rf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ap(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Rp(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=rf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Ap(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Is(t,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Is(e.times,Array),values:Is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xc(e.settings)&&(n.settings={inTangents:Is(e.settings.inTangents,Array),outTangents:Is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break;case yc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return ra;case this.InterpolantFactoryMethodBezier:return yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xc(this.settings)&&(hu(this.settings.inTangents,e),hu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Pd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let v=t[f+p];if(v!==t[u+p]||v!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ma;var Bi=class extends Rn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Tr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};Ia.prototype.ValueTypeName="color";var La=class extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="number";var Da=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Xt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Qr=class extends Rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Rn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Tr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};Na.prototype.ValueTypeName="vector";var Ua=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new Ua,Fa=class{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},jr=class extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vc=new ct,uu=new C,fu=new C,Js=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Bs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ia=new C,sa=new Xt,jn=new C,eo=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ia,sa,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ia,sa,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new C,du=new re,pu=new re,tn=class extends eo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,du,pu),t.subVectors(pu,du)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rc=class extends Js{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Pr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},to=class extends os{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Cc=class extends Js{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Si=class extends os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hi=class extends eo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pc=class extends Js{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Pc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ls=-90,Ds=1,Ba=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Ls,Ds,e,t);s.layers=this.layers,this.add(s);let r=new tn(Ls,Ds,e,t);r.layers=this.layers,this.add(r);let o=new tn(Ls,Ds,e,t);o.layers=this.layers,this.add(o);let a=new tn(Ls,Ds,e,t);a.layers=this.layers,this.add(a);let l=new tn(Ls,Ds,e,t);l.layers=this.layers,this.add(l);let c=new tn(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oa=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},no=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Cp(){this._document.hidden===!1&&this.reset()}var Jc="\\[\\]\\.:\\/",Pp=new RegExp("["+Jc+"]","g"),$c="[^"+Jc+"]",Ip="[^"+Jc.replace("\\.","")+"]",Lp=/((?:WC+[\/:])*)/.source.replace("WC",$c),Dp=/(WCOD+)?/.source.replace("WCOD",Ip),Np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),Up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),Fp=new RegExp("^"+Lp+Dp+Np+Up+"$"),Bp=["material","materials","bones","map"],Ic=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pp,"")}static parseTrackName(e){let t=Fp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Ic;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var av=new Float32Array(1);var nh=class nh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};nh.prototype.isMatrix2=!0;var Lc=nh;function Kc(i,e,t,n){let s=Op(n);switch(t){case kc:return i*e;case Ya:return i*e/s.components*s.byteLength;case Za:return i*e/s.components*s.byteLength;case Wi:return i*e*2/s.components*s.byteLength;case Ja:return i*e*2/s.components*s.byteLength;case Wc:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case $a:return i*e*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:case el:return Math.max(i,16)*Math.max(e,8)/4;case Ka:case ja:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:case go:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Sl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case El:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _o:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(i){switch(i){case bn:case Hc:return{byteLength:1,components:1};case js:case zc:case Jt:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case Yn:case Wa:case Nn:return{byteLength:4,components:1};case Vc:case Gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Rf(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kp(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mm=`vec3 transformedNormal = objectNormal;
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
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,Gm=`uniform sampler2D dfgLUT;
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
}`,km=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,K0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,ag=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,cg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,_g=`#define TOON
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
}`,xg=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Mg=`uniform vec3 color;
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
}`,Sg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:$p,aomap_pars_fragment:Kp,batching_pars_vertex:Qp,batching_vertex:jp,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:fm,common:dm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:_m,emissivemap_fragment:xm,emissivemap_pars_fragment:vm,colorspace_fragment:ym,colorspace_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Em,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:wm,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Lm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Um,lights_toon_fragment:Bm,lights_toon_pars_fragment:Om,lights_phong_fragment:Hm,lights_phong_pars_fragment:zm,lights_physical_fragment:Vm,lights_physical_pars_fragment:Gm,lights_fragment_begin:km,lights_fragment_maps:Wm,lights_fragment_end:Xm,lightprobes_pars_fragment:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:$m,map_fragment:Km,map_pars_fragment:Qm,map_particle_fragment:jm,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:f0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:x0,packing:v0,premultiplied_alpha_fragment:y0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:I0,skinning_vertex:L0,skinnormal_vertex:D0,specularmap_fragment:N0,specularmap_pars_fragment:U0,tonemapping_fragment:F0,tonemapping_pars_fragment:B0,transmission_fragment:O0,transmission_pars_fragment:H0,uv_pars_fragment:z0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:k0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:Z0,cube_frag:J0,depth_vert:$0,depth_frag:K0,distance_vert:Q0,distance_frag:j0,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:og,meshlambert_frag:ag,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:fg,meshphong_frag:dg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:_g,points_vert:xg,points_frag:vg,shadow_vert:yg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:bg},Ee={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ai={basic:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:_n([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:_n([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new me(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:_n([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:_n([Ee.points,Ee.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:_n([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:_n([Ee.common,Ee.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:_n([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:_n([Ee.sprite,Ee.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:_n([Ee.common,Ee.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:_n([Ee.lights,Ee.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ai.physical={uniforms:_n([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Cl={r:0,b:0,g:0},Eg=new ct,Cf=new $e;Cf.set(-1,0,0,0,1,0,0,0,1);function Tg(i,e,t,n,s,r){let o=new me(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let x=y.backgroundBlurriness>0;E=e.get(E,x)}return E}function p(y){let E=!1,x=d(y);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,E){let x=d(E);x&&(x.isCubeTexture||x.mapping===co)?(c===void 0&&(c=new Xe(new Ht(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:us(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cf),c.material.toneMapped=st.getTransfer(x.colorSpace)!==pt,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Xe(new It(2,2),new ut({name:"BackgroundMaterial",uniforms:us(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(Cl,Zc(i)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:v,dispose:g}}function wg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,U,F,I,N){let O=!1,H=f(L,I,F,U);r!==H&&(r=H,c(r.object)),O=d(L,I,F,N),O&&p(L,I,F,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(L,U,F,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,U,F,I){let N=I.wireframe===!0,O=n[U.id];O===void 0&&(O={},n[U.id]=O);let H=L.isInstancedMesh===!0?L.id:0,X=O[H];X===void 0&&(X={},O[H]=X);let k=X[F.id];k===void 0&&(k={},X[F.id]=k);let z=k[N];return z===void 0&&(z=u(l()),k[N]=z),z}function u(L){let U=[],F=[],I=[];for(let N=0;N<t;N++)U[N]=0,F[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,U,F,I){let N=r.attributes,O=U.attributes,H=0,X=F.getAttributes();for(let k in X)if(X[k].location>=0){let D=N[k],Y=O[k];if(Y===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),D===void 0||D.attribute!==Y||Y&&D.data!==Y.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function p(L,U,F,I){let N={},O=U.attributes,H=0,X=F.getAttributes();for(let k in X)if(X[k].location>=0){let D=O[k];D===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(D=L.instanceColor));let Y={};Y.attribute=D,D&&D.data&&(Y.data=D.data),N[k]=Y,H++}r.attributes=N,r.attributesNum=H,r.index=I}function v(){let L=r.newAttributes;for(let U=0,F=L.length;U<F;U++)L[U]=0}function m(L){g(L,0)}function g(L,U){let F=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;F[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),N[L]!==U&&(i.vertexAttribDivisor(L,U),N[L]=U)}function y(){let L=r.newAttributes,U=r.enabledAttributes;for(let F=0,I=U.length;F<I;F++)U[F]!==L[F]&&(i.disableVertexAttribArray(F),U[F]=0)}function E(L,U,F,I,N,O,H){H===!0?i.vertexAttribIPointer(L,U,F,N,O):i.vertexAttribPointer(L,U,F,I,N,O)}function x(L,U,F,I){v();let N=I.attributes,O=F.getAttributes(),H=U.defaultAttributeValues;for(let X in O){let k=O[X];if(k.location>=0){let z=N[X];if(z===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let D=z.normalized,Y=z.itemSize,ee=e.get(z);if(ee===void 0)continue;let ue=ee.buffer,ge=ee.type,De=ee.bytesPerElement,$=ge===i.INT||ge===i.UNSIGNED_INT||z.gpuType===Wa;if(z.isInterleavedBufferAttribute){let j=z.data,he=j.stride,He=z.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<k.locationSize;_e++)g(k.location+_e,j.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<k.locationSize;_e++)m(k.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let _e=0;_e<k.locationSize;_e++)E(k.location+_e,Y/k.locationSize,ge,D,he*De,(He+Y/k.locationSize*_e)*De,$)}else{if(z.isInstancedBufferAttribute){for(let j=0;j<k.locationSize;j++)g(k.location+j,z.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let j=0;j<k.locationSize;j++)m(k.location+j);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let j=0;j<k.locationSize;j++)E(k.location+j,Y/k.locationSize,ge,D,Y*De,Y/k.locationSize*j*De,$)}}else if(H!==void 0){let D=H[X];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(k.location,D);break;case 3:i.vertexAttrib3fv(k.location,D);break;case 4:i.vertexAttrib4fv(k.location,D);break;default:i.vertexAttrib1fv(k.location,D)}}}}y()}function S(){T();for(let L in n){let U=n[L];for(let F in U){let I=U[F];for(let N in I){let O=I[N];for(let H in O)h(O[H].object),delete O[H];delete I[N]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let F in U){let I=U[F];for(let N in I){let O=I[N];for(let H in O)h(O[H].object),delete O[H];delete I[N]}}delete n[L.id]}function R(L){for(let U in n){let F=n[U];for(let I in F){let N=F[I];if(N[L.id]===void 0)continue;let O=N[L.id];for(let H in O)h(O[H].object),delete O[H];delete N[L.id]}}}function _(L){for(let U in n){let F=n[U],I=L.isInstancedMesh===!0?L.id:0,N=F[I];if(N!==void 0){for(let O in N){let H=N[O];for(let X in H)h(H[X].object),delete H[X];delete N[O]}delete F[I],Object.keys(F).length===0&&delete n[U]}}}function T(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Ag(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Rg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let _=R===Jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bn&&R!==Nn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,maxSamples:S,samples:b}}function Cg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Gn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,E=y*4,x=g.clippingState||null;l.value=x,x=h(p,u,E,d);for(let S=0;S!==E;++S)x[S]=t[S];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,p){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=d+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,x=d;E!==v;++E,x+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var nr=4,Pg=6,Ig=20,Lg=256,vo=new Hi,af=new me,ih=null,sh=0,rh=0,oh=!1,Dg=new C,fs=new C,sr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Dg}=r;ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=oh,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Jt,format:Un,colorSpace:wr,depthBuffer:!1},s=lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ng(r)),this._blurMaterial=Fg(r,e,t),this._ggxMaterial=Ug(r,e,t)}return s}_compileMaterial(e){let t=new Xe(new it,e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,s,r){let l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(af),f.toneMapping=qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new Ht,new Nt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(af),g=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;tr(s,x*S,E>2?S:0,S,S),f.setRenderTarget(s),g&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Vi||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-nr?n-p+nr:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,tr(r,m,g,3*v,2*v),s.setRenderTarget(r),s.render(a,vo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,tr(e,m,g,3*v,2*v),s.setRenderTarget(e),s.render(a,vo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-nr?s-this._lodMax+nr:0),u=4*(this._cubeSize-h);tr(t,f,u,3*h,2*h),o.setRenderTarget(t),o.render(l,vo)}};function Ng(i){let e=[],t=[],n=i,s=i-nr+1+Pg;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let g=0;g<f;g++){let y=g%3*2/3-1,E=g>2?0:-1,x=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];p.set(x,d*u*g);for(let S=0;S<u;S++){let b=h[S*2]*2-1,R=h[S*2+1]*2-1;g===0?fs.set(1,R,b):g===1?fs.set(-b,1,-R):g===2?fs.set(-b,R,1):g===3?fs.set(-1,R,-b):g===4?fs.set(-b,-1,R):fs.set(b,R,-1),fs.toArray(v,(g*u+S)*d)}}let m=new it;m.setAttribute("position",new Tt(p,d)),m.setAttribute("outputDirection",new Tt(v,d)),t.push(new Xe(m,null)),n>nr&&n--}return{lodMeshes:t,sizeLods:e}}function lf(i,e,t){let n=new Bt(i,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ug(i,e,t){return new ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Fg(i,e,t){return new ut({name:"SphericalGaussianBlur",defines:{SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function cf(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function hf(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Il=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Dn});r.uniforms.tEquirect.value=t;let o=new Xe(s,r),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=cn),new Ba(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Bg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Va||d===Ga)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new Il(p.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,p=d===Va||d===Ga,v=d===Vi||d===hs;if(p||v){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new sr(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new sr(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===Va?u.mapping=Vi:d===Ga&&(u.mapping=hs),u}function l(u){let d=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,e,t,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,v=0;if(p===void 0)return;if(d!==null){let y=d.array;v=d.version;for(let E=0,x=y.length;E<x;E+=3){let S=y[E+0],b=y[E+1],R=y[E+2];u.push(S,b,b,R,R,S)}}else{let y=p.array;v=p.version;for(let E=0,x=y.length/3-1;E<x;E+=3){let S=E+0,b=E+1,R=E+2;u.push(S,b,b,R,R,S)}}let m=new(p.count>=65535?Ur:Nr)(u,1);m.version=v;let g=r.get(f);g&&e.remove(g),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function zg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,e,t){let n=new WeakMap,s=new Pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;d===!0&&(E=1),p===!0&&(E=2),v===!0&&(E=3);let x=a.attributes.position.count*E,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*S*4*f),R=new Ir(b,x,S,f);R.type=Nn,R.needsUpdate=!0;let _=E*4;for(let A=0;A<f;A++){let L=m[A],U=g[A],F=y[A],I=x*S*4*A;for(let N=0;N<L.count;N++){let O=N*_;d===!0&&(s.fromBufferAttribute(L,N),b[I+O+0]=s.x,b[I+O+1]=s.y,b[I+O+2]=s.z,b[I+O+3]=0),p===!0&&(s.fromBufferAttribute(U,N),b[I+O+4]=s.x,b[I+O+5]=s.y,b[I+O+6]=s.z,b[I+O+7]=0),v===!0&&(s.fromBufferAttribute(F,N),b[I+O+8]=s.x,b[I+O+9]=s.y,b[I+O+10]=s.z,b[I+O+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new re(x,S)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kg(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Wg={[io]:"LINEAR_TONE_MAPPING",[so]:"REINHARD_TONE_MAPPING",[ro]:"CINEON_TONE_MAPPING",[cs]:"ACES_FILMIC_TONE_MAPPING",[ao]:"AGX_TONE_MAPPING",[lo]:"NEUTRAL_TONE_MAPPING",[oo]:"CUSTOM_TONE_MAPPING"};function Xg(i,e,t,n,s,r){let o=new Bt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new it;c.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let h=new Zs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Xe(c,h),u=new Hi(-1,1,1,-1,0,1),d=null,p=null,v=!1,m,g=null,y=[],E=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<y.length;b++){let R=y[b];R.setSize&&R.setSize(x,S)}},this.setEffects=function(x){y=x,E=y.length>0&&y[0].isRenderPass===!0;let S=o.width,b=o.height;y.length>0&&a===null&&(a=new Bt(S,b,{type:Jt,depthBuffer:!1,stencilBuffer:!1}),l=new Bt(S,b,{type:Jt,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){let _=y[R];_.setSize&&_.setSize(S,b)}},this.begin=function(x,S){if(v||x.toneMapping===qn&&y.length===0)return!1;if(g=S,S!==null){let b=S.width,R=S.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=qn,!0},this.hasRenderPass=function(){return E},this.end=function(x,S){x.toneMapping=m,v=!0;let b=o,R=a;for(let _=0;_<y.length;_++){let T=y[_];T.enabled!==!1&&(T.render(x,R,b,S),T.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,h.defines={},st.getTransfer(d)===pt&&(h.defines.SRGB_TRANSFER="");let _=Wg[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(g),x.render(f,u),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Pf=new yn,ch=new Ui(1,1),If=new Ir,Lf=new xa,Df=new Hr,uf=[],ff=[],df=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nl(i,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function $g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),Kt(t,n)}}function Kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),Kt(t,n)}}function Qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),Kt(t,n)}}function jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function i_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=t.isReversedDepthBuffer()?Rl:Al,r=ch):r=Pf,t.setTexture2D(e||r,s)}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lf,s)}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Df,s)}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||If,s)}function u_(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return $g;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return h_}}function f_(i,e){i.uniform1fv(this.addr,e)}function d_(i,e){let t=rr(e,this.size,2);i.uniform2fv(this.addr,t)}function p_(i,e){let t=rr(e,this.size,3);i.uniform3fv(this.addr,t)}function m_(i,e){let t=rr(e,this.size,4);i.uniform4fv(this.addr,t)}function g_(i,e){let t=rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function __(i,e){let t=rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function x_(i,e){let t=rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function v_(i,e){i.uniform1iv(this.addr,e)}function y_(i,e){i.uniform2iv(this.addr,e)}function M_(i,e){i.uniform3iv(this.addr,e)}function S_(i,e){i.uniform4iv(this.addr,e)}function b_(i,e){i.uniform1uiv(this.addr,e)}function E_(i,e){i.uniform2uiv(this.addr,e)}function T_(i,e){i.uniform3uiv(this.addr,e)}function w_(i,e){i.uniform4uiv(this.addr,e)}function A_(i,e,t){let n=this.cache,s=e.length,r=Nl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ch:o=Pf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function R_(i,e,t){let n=this.cache,s=e.length,r=Nl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lf,r[o])}function C_(i,e,t){let n=this.cache,s=e.length,r=Nl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Df,r[o])}function P_(i,e,t){let n=this.cache,s=e.length,r=Nl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||If,r[o])}function I_(i){switch(i){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return v_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return b_;case 36294:return E_;case 36295:return T_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}var hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u_(t.type)}},uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I_(t.type)}},fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;function gf(i,e){i.seq.push(e),i.map[e.id]=e}function L_(i,e,t){let n=i.name,s=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),o=ah.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gf(t,c===void 0?new hh(a,i,e):new uh(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new fh(a),gf(t,f)),t=f}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);L_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function _f(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var D_=37297,N_=0;function U_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var xf=new $e;function F_(i){st._getMatrix(xf,st.workingColorSpace,i);let e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Ar:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+U_(i.getShaderSource(e),a)}else return r}function B_(i,e){let t=F_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var O_={[io]:"Linear",[so]:"Reinhard",[ro]:"Cineon",[cs]:"ACESFilmic",[ao]:"AgX",[lo]:"Neutral",[oo]:"Custom"};function H_(i,e){let t=O_[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pl=new C;function z_(){st.getLuminanceCoefficients(Pl);let i=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function G_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mo(i){return i!==""}function yf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(W_,q_)}var X_=new Map;function q_(i,e){let t=tt[e];if(t===void 0){let n=X_.get(e);if(n!==void 0)t=tt[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dh(t)}var Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(i){return i.replace(Y_,Z_)}function Z_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var J_={[as]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function $_(i){return J_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var K_={[Vi]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function Q_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":K_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var j_={[hs]:"ENVMAP_MODE_REFRACTION"};function ex(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":j_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tx={[za]:"ENVMAP_BLENDING_MULTIPLY",[Fu]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function nx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tx[i.combine]||"ENVMAP_BLENDING_NONE"}function ix(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$_(t),c=Q_(t),h=ex(t),f=nx(t),u=ix(t),d=V_(t),p=G_(r),v=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Mo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Mo).join(`
`),g.length>0&&(g+=`
`)):(m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),g=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?tt.tonemapping_pars_fragment:"",t.toneMapping!==qn?H_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,B_("linearToOutputTexel",t.outputColorSpace),z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),o=dh(o),o=yf(o,t),o=Mf(o,t),a=dh(a),a=yf(a,t),a=Mf(a,t),o=Sf(o),a=Sf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=y+m+o,x=y+g+a,S=_f(s,s.VERTEX_SHADER,E),b=_f(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(S)||"",I=s.getShaderInfoLog(b)||"",N=U.trim(),O=F.trim(),H=I.trim(),X=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,b);else{let z=vf(s,S,"vertex"),D=vf(s,b,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+z+`
`+D)}else N!==""?Je("WebGLProgram: Program Info Log:",N):(O===""||H==="")&&(k=!1);k&&(L.diagnostics={runnable:X,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:g}})}s.deleteShader(S),s.deleteShader(b),_=new ir(s,v),T=k_(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,D_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var rx=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mh(e),t.set(e,n)),n}},mh=class{constructor(e){this.id=rx++,this.code=e,this.usedTimes=0}};function ox(i){return i===Wi||i===go||i===_o}function ax(i,e,t,n,s,r){let o=new Lr,a=new ph,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,A,L,U,F){let I=L.fog,N=U.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||O,H),k=X&&X.mapping===co?X.image.height:null,z=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Je("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let D=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Y=D!==void 0?D.length:0,ee=0;N.morphAttributes.position!==void 0&&(ee=1),N.morphAttributes.normal!==void 0&&(ee=2),N.morphAttributes.color!==void 0&&(ee=3);let ue,ge,De,$;if(z){let bt=ai[z];ue=bt.vertexShader,ge=bt.fragmentShader}else{ue=_.vertexShader,ge=_.fragmentShader;let bt=a.getVertexShaderStage(_),_t=a.getFragmentShaderStage(_);a.update(_,bt,_t),De=bt.id,$=_t.id}let j=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),He=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,Fe=!!_.map,Ke=!!_.matcap,ie=!!X,ce=!!_.aoMap,fe=!!_.lightMap,K=!!_.bumpMap&&_.wireframe===!1,ae=!!_.normalMap,Se=!!_.displacementMap,Te=!!_.emissiveMap,Ae=!!_.metalnessMap,Be=!!_.roughnessMap,B=_.anisotropy>0,rt=_.clearcoat>0,je=_.dispersion>0,P=_.retroreflectivity>0,M=_.iridescence>0,W=_.sheen>0,q=_.transmission>0,te=B&&!!_.anisotropyMap,de=rt&&!!_.clearcoatMap,pe=rt&&!!_.clearcoatNormalMap,ne=rt&&!!_.clearcoatRoughnessMap,oe=M&&!!_.iridescenceMap,xe=M&&!!_.iridescenceThicknessMap,Ge=W&&!!_.sheenColorMap,be=W&&!!_.sheenRoughnessMap,ve=!!_.specularMap,ke=!!_.specularColorMap,qe=!!_.specularIntensityMap,Qe=q&&!!_.transmissionMap,G=q&&!!_.thicknessMap,ye=!!_.gradientMap,se=!!_.alphaMap,Me=_.alphaTest>0,Ce=!!_.alphaHash,le=!!_.extensions,We=qn;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(We=i.toneMapping);let Oe={shaderID:z,shaderType:_.type,shaderName:_.name,vertexShader:ue,fragmentShader:ge,defines:_.defines,customVertexShaderID:De,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:He,instancingColor:He&&U.instanceColor!==null,instancingMorph:He&&U.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:Ke,envMap:ie,envMapMode:ie&&X.mapping,envMapCubeUVHeight:k,aoMap:ce,lightMap:fe,bumpMap:K,normalMap:ae,displacementMap:Se,emissiveMap:Te,normalMapObjectSpace:ae&&_.normalMapType===zu,normalMapTangentSpace:ae&&_.normalMapType===xo,packedNormalMap:ae&&_.normalMapType===xo&&ox(_.normalMap.format),metalnessMap:Ae,roughnessMap:Be,anisotropy:B,anisotropyMap:te,clearcoat:rt,clearcoatMap:de,clearcoatNormalMap:pe,clearcoatRoughnessMap:ne,dispersion:je,retroreflection:P,iridescence:M,iridescenceMap:oe,iridescenceThicknessMap:xe,sheen:W,sheenColorMap:Ge,sheenRoughnessMap:be,specularMap:ve,specularColorMap:ke,specularIntensityMap:qe,transmission:q,transmissionMap:Qe,thicknessMap:G,gradientMap:ye,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:Me,alphaHash:Ce,combine:_.combine,mapUv:Fe&&p(_.map.channel),aoMapUv:ce&&p(_.aoMap.channel),lightMapUv:fe&&p(_.lightMap.channel),bumpMapUv:K&&p(_.bumpMap.channel),normalMapUv:ae&&p(_.normalMap.channel),displacementMapUv:Se&&p(_.displacementMap.channel),emissiveMapUv:Te&&p(_.emissiveMap.channel),metalnessMapUv:Ae&&p(_.metalnessMap.channel),roughnessMapUv:Be&&p(_.roughnessMap.channel),anisotropyMapUv:te&&p(_.anisotropyMap.channel),clearcoatMapUv:de&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(_.sheenRoughnessMap.channel),specularMapUv:ve&&p(_.specularMap.channel),specularColorMapUv:ke&&p(_.specularColorMap.channel),specularIntensityMapUv:qe&&p(_.specularIntensityMap.channel),transmissionMapUv:Qe&&p(_.transmissionMap.channel),thicknessMapUv:G&&p(_.thicknessMap.channel),alphaMapUv:se&&p(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ae||B),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Fe||se),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ee,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&st.getTransfer(_.map.colorSpace)===pt,decodeVideoTextureEmissive:Te&&_.emissiveMap.isVideoTexture===!0&&st.getTransfer(_.emissiveMap.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ut,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:le&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)T.push(A),T.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(g(T,_),y(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){let T=d[_.type],A;if(T){let L=ai[T];A=Ei.clone(L.uniforms)}else A=_.uniforms;return A}function x(_,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new sx(i,T,_,s),c.push(A),h.set(T,A)),A}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:R}}function lx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,v,m,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=p,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=m,y.group=g),e++,y}function l(u,d,p,v,m,g,y){y.reversedDepth===!0&&(m=-m);let E=a(u,d,p,v,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):t.push(E)}function c(u,d,p,v,m,g){let y=a(u,d,p,v,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,d){t.length>1&&t.sort(u||cx),n.length>1&&n.sort(d||Ef),s.length>1&&s.sort(d||Ef)}function f(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function hx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Tf,i.set(n,[o])):s>=r.length?(o=new Tf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ux(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new me};break;case"SpotLight":t={position:new C,direction:new C,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function fx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dx=0;function px(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mx(i){let e=new ux,t=fx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ct,o=new ct;function a(c){let h=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,y=0,E=0,x=0,S=0,b=0,R=0,_=0,T=0,A=0;c.sort(px);for(let U=0,F=c.length;U<F;U++){let I=c[U],N=I.color,O=I.intensity,H=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Wi?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*O,f+=N.g*O,u+=N.b*O;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],O);A++}else if(I.isSunLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,D=t.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=D,n.sunShadowMap[p]=X;let Y=z.getViewportCount();for(let ee=0;ee<Y;ee++)n.sunShadowMatrix[v+ee]=z.getMatrix(ee),n.sunShadowCascade[v+ee]=z._cascadeData[ee];v+=Y,p++}n.sun[d]=k,d++}else if(I.isDirectionalLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,D=t.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,S++}n.directional[m]=k,m++}else if(I.isSpotLight){let k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(N).multiplyScalar(O),k.distance=H,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[y]=k;let z=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,z.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[y]=z.matrix,I.castShadow){let D=t.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,n.spotShadow[y]=D,n.spotShadowMap[y]=X,R++}y++}else if(I.isRectAreaLight){let k=e.get(I);k.color.copy(N).multiplyScalar(O),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=k,E++}else if(I.isPointLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let z=I.shadow,D=t.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,D.shadowCameraNear=z.camera.near,D.shadowCameraFar=z.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=k,g++}else if(I.isHemisphereLight){let k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(O),k.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[x]=k,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==E||L.hemiLength!==x||L.numSunShadows!==p||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.sunLength=d,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=E,L.hemiLength=x,L.numSunShadows=p,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=A,n.version=dx++)}function l(c,h){let f=0,u=0,d=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let x=c[y];if(x.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),f++}else if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(x.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function wf(i){let e=new mx(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function gx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new wf(i),e.set(s,[a])):r>=o.length?(a=new wf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
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
}`,vx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],yx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Af=new ct,yo=new C,lh=new C;function Mx(i,e,t){let n=new ks,s=new re,r=new re,o=new Pt,a=new Ta,l=new wa,c={},h=t.maxTextureSize,f={[zi]:Yt,[Yt]:zi,[Ut]:Ut},u=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:_x,fragmentShader:xx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new it;p.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Xe(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let g=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===_u&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);let T=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Dn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=g!==this.type;F&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(N=>N.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,N=b.length;I<N;I++){let O=b[I],H=O.shadow;if(H===void 0){Je("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let X=H.getFrameExtents();s.multiply(X),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,H.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=k,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ks){if(O.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Bt(s.x,s.y,{format:Wi,type:Jt,minFilter:cn,magFilter:cn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Ui(s.x,s.y,Nn),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=ii,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn}else O.isPointLight?(H.map=new Il(s.x),H.map.depthTexture=new ya(s.x,Yn)):(H.map=new Bt(s.x,s.y),H.map.depthTexture=new Ui(s.x,s.y,Yn)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=ii,this.type===as?(H.map.depthTexture.compareFunction=k?Rl:Al,H.map.depthTexture.minFilter=cn,H.map.depthTexture.magFilter=cn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();O.isPointLight!==!0&&H.updateMatrices(O,_);for(let D=0;D<z;D++){let Y=H.getCamera(D);if(O.isPointLight){let ee=H.camera,ue=H.matrix,ge=O.distance||ee.far;ge!==ee.far&&(ee.far=ge,ee.updateProjectionMatrix()),yo.setFromMatrixPosition(O.matrixWorld),ee.position.copy(yo),lh.copy(ee.position),lh.add(vx[D]),ee.up.copy(yx[D]),ee.lookAt(lh),ee.updateMatrixWorld(),ue.makeTranslation(-yo.x,-yo.y,-yo.z),Af.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Af,ee.coordinateSystem,ee.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,D),i.clear();else{D===0&&(i.setRenderTarget(H.map),i.clear());let ee=H.getViewport(D);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),U.viewport(o)}n=H.getFrustum(D),x(R,_,Y,O,this.type)}H.isPointLightShadow!==!0&&this.type===Ks&&y(H,_),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,A,L)};function y(b,R){let _=e.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Bt(s.x,s.y,{format:Wi,type:Jt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,_,d,v,null)}function E(b,R,_,T){let A=null,L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)A=L;else if(A=_.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=A.uuid,F=R.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let N=I[F];N===void 0&&(N=A.clone(),I[F]=N,R.addEventListener("dispose",S)),A=N}if(A.visible=R.visible,A.wireframe=R.wireframe,T===Ks?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:f[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let U=i.properties.get(A);U.light=_}return A}function x(b,R,_,T,A){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Ks)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let F=e.update(b),I=b.material;if(Array.isArray(I)){let N=F.groups;for(let O=0,H=N.length;O<H;O++){let X=N[O],k=I[X.materialIndex];if(k&&k.visible){let z=E(b,k,T,A);b.onBeforeShadow(i,b,R,_,F,z,X),i.renderBufferDirect(_,null,F,z,b,X),b.onAfterShadow(i,b,R,_,F,z,X)}}}else if(I.visible){let N=E(b,I,T,A);b.onBeforeShadow(i,b,R,_,F,N,null),i.renderBufferDirect(_,null,F,N,b,null),b.onAfterShadow(i,b,R,_,F,N,null)}}let U=b.children;for(let F=0,I=U.length;F<I;F++)x(U[F],R,_,T,A)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function Sx(i,e){function t(){let G=!1,ye=new Pt,se=null,Me=new Pt(0,0,0,0);return{setMask:function(Ce){se!==Ce&&!G&&(i.colorMask(Ce,Ce,Ce,Ce),se=Ce)},setLocked:function(Ce){G=Ce},setClear:function(Ce,le,We,Oe,bt){bt===!0&&(Ce*=Oe,le*=Oe,We*=Oe),ye.set(Ce,le,We,Oe),Me.equals(ye)===!1&&(i.clearColor(Ce,le,We,Oe),Me.copy(ye))},reset:function(){G=!1,se=null,Me.set(-1,0,0,0)}}}function n(){let G=!1,ye=!1,se=null,Me=null,Ce=null;return{setReversed:function(le){if(ye!==le){let We=e.get("EXT_clip_control");le?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ye=le;let Oe=Ce;Ce=null,this.setClear(Oe)}},getReversed:function(){return ye},setTest:function(le){le?j(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(le){se!==le&&!G&&(i.depthMask(le),se=le)},setFunc:function(le){if(ye&&(le=Ku[le]),Me!==le){switch(le){case aa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case ha:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=le}},setLocked:function(le){G=le},setClear:function(le){Ce!==le&&(Ce=le,ye&&(le=1-le),i.clearDepth(le))},reset:function(){G=!1,se=null,Me=null,Ce=null,ye=!1}}}function s(){let G=!1,ye=null,se=null,Me=null,Ce=null,le=null,We=null,Oe=null,bt=null;return{setTest:function(_t){G||(_t?j(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(_t){ye!==_t&&!G&&(i.stencilMask(_t),ye=_t)},setFunc:function(_t,On,Kn){(se!==_t||Me!==On||Ce!==Kn)&&(i.stencilFunc(_t,On,Kn),se=_t,Me=On,Ce=Kn)},setOp:function(_t,On,Kn){(le!==_t||We!==On||Oe!==Kn)&&(i.stencilOp(_t,On,Kn),le=_t,We=On,Oe=Kn)},setLocked:function(_t){G=_t},setClear:function(_t){bt!==_t&&(i.clearStencil(_t),bt=_t)},reset:function(){G=!1,ye=null,se=null,Me=null,Ce=null,le=null,We=null,Oe=null,bt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,y=null,E=null,x=null,S=null,b=null,R=null,_=new me(0,0,0),T=0,A=!1,L=null,U=null,F=null,I=null,N=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,X=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=X>=2);let z=null,D={},Y=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),ue=new Pt().fromArray(Y),ge=new Pt().fromArray(ee);function De(G,ye,se,Me){let Ce=new Uint8Array(4),le=i.createTexture();i.bindTexture(G,le),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<se;We++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(ye+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return le}let $={};$[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Us),K(!1),ae(Dc),j(i.CULL_FACE),ce(Dn);function j(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function he(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function He(G,ye){return u[G]!==ye?(i.bindFramebuffer(G,ye),u[G]=ye,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ye),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function _e(G,ye){let se=p,Me=!1;if(G){se=d.get(ye),se===void 0&&(se=[],d.set(ye,se));let Ce=G.textures;if(se.length!==Ce.length||se[0]!==i.COLOR_ATTACHMENT0){for(let le=0,We=Ce.length;le<We;le++)se[le]=i.COLOR_ATTACHMENT0+le;se.length=Ce.length,Me=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,Me=!0);Me&&i.drawBuffers(se)}function Fe(G){return v!==G?(i.useProgram(G),v=G,!0):!1}let Ke={[ls]:i.FUNC_ADD,[vu]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};Ke[Mu]=i.MIN,Ke[Su]=i.MAX;let ie={[bu]:i.ZERO,[Eu]:i.ONE,[Tu]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[Iu]:i.SRC_ALPHA_SATURATE,[Cu]:i.DST_COLOR,[Au]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Lu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(G,ye,se,Me,Ce,le,We,Oe,bt,_t){if(G===Dn){m===!0&&(he(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),G!==xu){if(G!==g||_t!==A){if((y!==ls||S!==ls)&&(i.blendEquation(i.FUNC_ADD),y=ls,S=ls),_t)switch(G){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ct:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",G);break}else switch(G){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ct:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",G);break}E=null,x=null,b=null,R=null,_.set(0,0,0),T=0,g=G,A=_t}return}Ce=Ce||ye,le=le||se,We=We||Me,(ye!==y||Ce!==S)&&(i.blendEquationSeparate(Ke[ye],Ke[Ce]),y=ye,S=Ce),(se!==E||Me!==x||le!==b||We!==R)&&(i.blendFuncSeparate(ie[se],ie[Me],ie[le],ie[We]),E=se,x=Me,b=le,R=We),(Oe.equals(_)===!1||bt!==T)&&(i.blendColor(Oe.r,Oe.g,Oe.b,bt),_.copy(Oe),T=bt),g=G,A=!1}function fe(G,ye){G.side===Ut?he(i.CULL_FACE):j(i.CULL_FACE);let se=G.side===Yt;ye&&(se=!se),K(se),G.blending===Qs&&G.transparent===!1?ce(Dn):ce(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Me=G.stencilWrite;a.setTest(Me),Me&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Te(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(G){L!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),L=G)}function ae(G){G!==mu?(j(i.CULL_FACE),G!==U&&(G===Dc?i.cullFace(i.BACK):G===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),U=G}function Se(G){G!==F&&(H&&i.lineWidth(G),F=G)}function Te(G,ye,se){G?(j(i.POLYGON_OFFSET_FILL),(I!==ye||N!==se)&&(I=ye,N=se,o.getReversed()&&(ye=-ye),i.polygonOffset(ye,se))):he(i.POLYGON_OFFSET_FILL)}function Ae(G){G?j(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function Be(G){G===void 0&&(G=i.TEXTURE0+O-1),z!==G&&(i.activeTexture(G),z=G)}function B(G,ye,se){se===void 0&&(z===null?se=i.TEXTURE0+O-1:se=z);let Me=D[se];Me===void 0&&(Me={type:void 0,texture:void 0},D[se]=Me),(Me.type!==G||Me.texture!==ye)&&(z!==se&&(i.activeTexture(se),z=se),i.bindTexture(G,ye||$[G]),Me.type=G,Me.texture=ye)}function rt(){let G=D[z];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function M(){try{i.texSubImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function W(){try{i.texSubImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function de(){try{i.texStorage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function pe(){try{i.texStorage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function ne(){try{i.texImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function oe(){try{i.texImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function xe(G){return f[G]!==void 0?f[G]:i.getParameter(G)}function Ge(G,ye){f[G]!==ye&&(i.pixelStorei(G,ye),f[G]=ye)}function be(G){ue.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ue.copy(G))}function ve(G){ge.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ge.copy(G))}function ke(G,ye){let se=c.get(ye);se===void 0&&(se=new WeakMap,c.set(ye,se));let Me=se.get(G);Me===void 0&&(Me=i.getUniformBlockIndex(ye,G.name),se.set(G,Me))}function qe(G,ye){let Me=c.get(ye).get(G);l.get(ye)!==Me&&(i.uniformBlockBinding(ye,Me,G.__bindingPointIndex),l.set(ye,Me))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},z=null,D={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,y=null,E=null,x=null,S=null,b=null,R=null,_=new me(0,0,0),T=0,A=!1,L=null,U=null,F=null,I=null,N=null,ue.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:he,bindFramebuffer:He,drawBuffers:_e,useProgram:Fe,setBlending:ce,setMaterial:fe,setFlipSided:K,setCullFace:ae,setLineWidth:Se,setPolygonOffset:Te,setScissorTest:Ae,activeTexture:Be,bindTexture:B,unbindTexture:rt,compressedTexImage2D:je,compressedTexImage3D:P,texImage2D:ne,texImage3D:oe,pixelStorei:Ge,getParameter:xe,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:de,texStorage3D:pe,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:q,compressedTexSubImage3D:te,scissor:be,viewport:ve,reset:Qe}}function bx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return p?new OffscreenCanvas(P,M):Rr("canvas")}function m(P,M,W){let q=1,te=je(P);if((te.width>W||te.height>W)&&(q=W/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let de=Math.floor(q*te.width),pe=Math.floor(q*te.height);u===void 0&&(u=v(de,pe));let ne=M?v(de,pe):u;return ne.width=de,ne.height=pe,ne.getContext("2d").drawImage(P,0,0,de,pe),Je("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+pe+")."),ne}else return"data"in P&&Je("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function g(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,M,W,q,te,de=!1){if(P!==null){if(i[P]!==void 0)return i[P];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe;q&&(pe=e.get("EXT_texture_norm16"),pe||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=M;if(M===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8),W===i.UNSIGNED_SHORT&&pe&&(ne=pe.R16_EXT),W===i.SHORT&&pe&&(ne=pe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),M===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8),W===i.UNSIGNED_SHORT&&pe&&(ne=pe.RG16_EXT),W===i.SHORT&&pe&&(ne=pe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_SHORT&&pe&&(ne=pe.RGB16_EXT),W===i.SHORT&&pe&&(ne=pe.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),M===i.RGBA){let oe=de?Ar:st.getTransfer(te);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=oe===pt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&pe&&(ne=pe.RGBA16_EXT),W===i.SHORT&&pe&&(ne=pe.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(P,M){let W;return P?M===null||M===Yn||M===er?W=i.DEPTH24_STENCIL8:M===Nn?W=i.DEPTH32F_STENCIL8:M===js&&(W=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yn||M===er?W=i.DEPTH_COMPONENT24:M===Nn?W=i.DEPTH_COMPONENT32F:M===js&&(W=i.DEPTH_COMPONENT16),W}function b(P,M){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){let M=P.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function _(P){let M=P.target;M.removeEventListener("dispose",_),L(M)}function T(P){let M=n.get(P);if(M.__webglInit===void 0)return;let W=P.source,q=d.get(W);if(q){let te=q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(P),Object.keys(q).length===0&&d.delete(W)}n.remove(P)}function A(P){let M=n.get(P);i.deleteTexture(M.__webglTexture);let W=P.source,q=d.get(W);delete q[M.__cacheKey],o.memory.textures--}function L(P){let M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let te=0;te<M.__webglFramebuffer[q].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[q][te]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=P.textures;for(let q=0,te=W.length;q<te;q++){let de=n.get(W[q]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(W[q])}n.remove(P)}let U=0;function F(){U=0}function I(){return U}function N(P){U=P}function O(){let P=U;return P>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,P}function H(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function X(P,M){let W=n.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let q=P.image;if(q===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{he(W,P,M);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function k(P,M){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){he(W,P,M);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function z(P,M){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){he(W,P,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function D(P,M){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){He(W,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let Y={[Fs]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},ee={[nn]:i.NEAREST,[Ou]:i.NEAREST_MIPMAP_NEAREST,[ho]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},ue={[Gu]:i.NEVER,[Yu]:i.ALWAYS,[ku]:i.LESS,[Al]:i.LEQUAL,[Wu]:i.EQUAL,[Rl]:i.GEQUAL,[Xu]:i.GREATER,[qu]:i.NOTEQUAL};function ge(P,M){if(M.type===Nn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===cn||M.magFilter===ka||M.magFilter===ho||M.magFilter===Gi||M.minFilter===cn||M.minFilter===ka||M.minFilter===ho||M.minFilter===Gi)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Y[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Y[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Y[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ee[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==ho&&M.minFilter!==Gi||M.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function De(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));let q=M.source,te=d.get(q);te===void 0&&(te={},d.set(q,te));let de=H(M);if(de!==P.__cacheKey){te[de]===void 0&&(te[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[de].usedTimes++;let pe=te[P.__cacheKey];pe!==void 0&&(te[P.__cacheKey].usedTimes--,pe.usedTimes===0&&A(M)),P.__cacheKey=de,P.__webglTexture=te[de].texture}return W}function $(P,M,W){return Math.floor(Math.floor(P/W)/M)}function j(P,M,W,q){let de=P.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,q,M.data);else{de.sort((Ge,be)=>Ge.start-be.start);let pe=0;for(let Ge=1;Ge<de.length;Ge++){let be=de[pe],ve=de[Ge],ke=be.start+be.count,qe=$(ve.start,M.width,4),Qe=$(be.start,M.width,4);ve.start<=ke+1&&qe===Qe&&$(ve.start+ve.count-1,M.width,4)===qe?be.count=Math.max(be.count,ve.start+ve.count-be.start):(++pe,de[pe]=ve)}de.length=pe+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ge=0,be=de.length;Ge<be;Ge++){let ve=de[Ge],ke=Math.floor(ve.start/4),qe=Math.ceil(ve.count/4),Qe=ke%M.width,G=Math.floor(ke/M.width),ye=qe,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Qe,G,ye,se,W,q,M.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function he(P,M,W){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let te=De(P,M),de=M.source;t.bindTexture(q,P.__webglTexture,i.TEXTURE0+W);let pe=n.get(de);if(de.version!==pe.__version||te===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let se=st.getPrimaries(st.workingColorSpace),Me=M.colorSpace===bi?null:st.getPrimaries(M.colorSpace),Ce=M.colorSpace===bi||se===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let oe=m(M.image,!1,s.maxTextureSize);oe=rt(M,oe);let xe=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),be=x(M.internalFormat,xe,Ge,M.normalized,M.colorSpace,M.isVideoTexture);ge(q,M);let ve,ke=M.mipmaps,qe=M.isVideoTexture!==!0,Qe=pe.__version===void 0||te===!0,G=de.dataReady,ye=b(M,oe);if(M.isDepthTexture)be=S(M.format===ki,M.type),Qe&&(qe?t.texStorage2D(i.TEXTURE_2D,1,be,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,be,oe.width,oe.height,0,xe,Ge,null));else if(M.isDataTexture)if(ke.length>0){qe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ye,be,ke[0].width,ke[0].height);for(let se=0,Me=ke.length;se<Me;se++)ve=ke[se],qe?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve.width,ve.height,xe,Ge,ve.data):t.texImage2D(i.TEXTURE_2D,se,be,ve.width,ve.height,0,xe,Ge,ve.data);M.generateMipmaps=!1}else qe?(Qe&&t.texStorage2D(i.TEXTURE_2D,ye,be,oe.width,oe.height),G&&j(M,oe,xe,Ge)):t.texImage2D(i.TEXTURE_2D,0,be,oe.width,oe.height,0,xe,Ge,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,ke[0].width,ke[0].height,oe.depth);for(let se=0,Me=ke.length;se<Me;se++)if(ve=ke[se],M.format!==Un)if(xe!==null)if(qe){if(G)if(M.layerUpdates.size>0){let Ce=Kc(ve.width,ve.height,M.format,M.type);for(let le of M.layerUpdates){let We=ve.data.subarray(le*Ce/ve.data.BYTES_PER_ELEMENT,(le+1)*Ce/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,le,ve.width,ve.height,1,xe,We)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,oe.depth,xe,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,be,ve.width,ve.height,oe.depth,0,ve.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,oe.depth,xe,Ge,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,be,ve.width,ve.height,oe.depth,0,xe,Ge,ve.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{qe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ye,be,ke[0].width,ke[0].height);for(let se=0,Me=ke.length;se<Me;se++)ve=ke[se],M.format!==Un?xe!==null?qe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,se,be,ve.width,ve.height,0,ve.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve.width,ve.height,xe,Ge,ve.data):t.texImage2D(i.TEXTURE_2D,se,be,ve.width,ve.height,0,xe,Ge,ve.data)}else if(M.isDataArrayTexture)if(qe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,oe.width,oe.height,oe.depth),G)if(M.layerUpdates.size>0){let se=Kc(oe.width,oe.height,M.format,M.type);for(let Me of M.layerUpdates){let Ce=oe.data.subarray(Me*se/oe.data.BYTES_PER_ELEMENT,(Me+1)*se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,oe.width,oe.height,1,xe,Ge,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Ge,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,oe.width,oe.height,oe.depth,0,xe,Ge,oe.data);else if(M.isData3DTexture)qe?(Qe&&t.texStorage3D(i.TEXTURE_3D,ye,be,oe.width,oe.height,oe.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Ge,oe.data)):t.texImage3D(i.TEXTURE_3D,0,be,oe.width,oe.height,oe.depth,0,xe,Ge,oe.data);else if(M.isFramebufferTexture){if(Qe)if(qe)t.texStorage2D(i.TEXTURE_2D,ye,be,oe.width,oe.height);else{let se=oe.width,Me=oe.height;for(let Ce=0;Ce<ye;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,be,se,Me,0,xe,Ge,null),se>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),oe.parentNode!==se){se.appendChild(oe),f.add(M),se.onpaint=Me=>{let Ce=Me.changedElements;for(let le of f)Ce.includes(le.image)&&(le.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let Ce=i.RGBA,le=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ce,le,We,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(qe&&Qe){let se=je(ke[0]);t.texStorage2D(i.TEXTURE_2D,ye,be,se.width,se.height)}for(let se=0,Me=ke.length;se<Me;se++)ve=ke[se],qe?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,xe,Ge,ve):t.texImage2D(i.TEXTURE_2D,se,be,xe,Ge,ve);M.generateMipmaps=!1}else if(qe){if(Qe){let se=je(oe);t.texStorage2D(i.TEXTURE_2D,ye,be,se.width,se.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ge,oe)}else t.texImage2D(i.TEXTURE_2D,0,be,xe,Ge,oe);g(M)&&y(q),pe.__version=de.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function He(P,M,W){if(M.image.length!==6)return;let q=De(P,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let de=n.get(te);if(te.version!==de.__version||q===!0){t.activeTexture(i.TEXTURE0+W);let pe=st.getPrimaries(st.workingColorSpace),ne=M.colorSpace===bi?null:st.getPrimaries(M.colorSpace),oe=M.colorSpace===bi||pe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let xe=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!xe&&!Ge?be[le]=m(M.image[le],!0,s.maxCubemapSize):be[le]=Ge?M.image[le].image:M.image[le],be[le]=rt(M,be[le]);let ve=be[0],ke=r.convert(M.format,M.colorSpace),qe=r.convert(M.type),Qe=x(M.internalFormat,ke,qe,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,ye=de.__version===void 0||q===!0,se=te.dataReady,Me=b(M,ve);ge(i.TEXTURE_CUBE_MAP,M);let Ce;if(xe){G&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Qe,ve.width,ve.height);for(let le=0;le<6;le++){Ce=be[le].mipmaps;for(let We=0;We<Ce.length;We++){let Oe=Ce[We];M.format!==Un?ke!==null?G?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,Oe.width,Oe.height,ke,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,Qe,Oe.width,Oe.height,0,Oe.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,Oe.width,Oe.height,ke,qe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,Qe,Oe.width,Oe.height,0,ke,qe,Oe.data)}}}else{if(Ce=M.mipmaps,G&&ye){Ce.length>0&&Me++;let le=je(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Qe,le.width,le.height)}for(let le=0;le<6;le++)if(Ge){G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,ke,qe,be[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,be[le].width,be[le].height,0,ke,qe,be[le].data);for(let We=0;We<Ce.length;We++){let bt=Ce[We].image[le].image;G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,bt.width,bt.height,ke,qe,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,Qe,bt.width,bt.height,0,ke,qe,bt.data)}}else{G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ke,qe,be[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,ke,qe,be[le]);for(let We=0;We<Ce.length;We++){let Oe=Ce[We];G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,ke,qe,Oe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,Qe,ke,qe,Oe.image[le])}}}g(M)&&y(i.TEXTURE_CUBE_MAP),de.__version=te.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function _e(P,M,W,q,te,de){let pe=r.convert(W.format,W.colorSpace),ne=r.convert(W.type),oe=x(W.internalFormat,pe,ne,W.normalized,W.colorSpace),xe=n.get(M),Ge=n.get(W);if(Ge.__renderTarget=M,!xe.__hasExternalTextures){let be=Math.max(1,M.width>>de),ve=Math.max(1,M.height>>de);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,de,oe,be,ve,M.depth,0,pe,ne,null):t.texImage2D(te,de,oe,be,ve,0,pe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,te,Ge.__webglTexture,0,Ae(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,te,Ge.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(P,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){let q=M.depthTexture,te=q&&q.isDepthTexture?q.type:null,de=S(M.stencilBuffer,te),pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(M),de,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(M),de,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,de,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,P)}else{let q=M.textures;for(let te=0;te<q.length;te++){let de=q[te],pe=r.convert(de.format,de.colorSpace),ne=r.convert(de.type),oe=x(de.internalFormat,pe,ne,de.normalized,de.colorSpace);Be(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(M),oe,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(M),oe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,oe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(P,M,W){let q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ge(i.TEXTURE_CUBE_MAP,M.depthTexture);let xe=r.convert(M.depthTexture.format),Ge=r.convert(M.depthTexture.type),be;M.depthTexture.format===ii?be=i.DEPTH_COMPONENT24:M.depthTexture.format===ki&&(be=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,be,M.width,M.height,0,xe,Ge,null)}}else X(M.depthTexture,0);let de=te.__webglTexture,pe=Ae(M),ne=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,oe=M.depthTexture.format===ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ii)Be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ne,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,oe,ne,de,0);else if(M.depthTexture.format===ki)Be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ne,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,oe,ne,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(P){let M=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=q}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let q=0;q<6;q++)Ke(M.__webglFramebuffer[q],P,q);else{let q=P.texture.mipmaps;q&&q.length>0?Ke(M.__webglFramebuffer[0],P,0):Ke(M.__webglFramebuffer,P,0)}else if(W){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),Fe(M.__webglDepthbuffer[q],P,!1);else{let te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Fe(M.__webglDepthbuffer,P,!1);else{let te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(P,M,W){let q=n.get(P);M!==void 0&&_e(q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ie(P)}function fe(P){let M=P.texture,W=n.get(P),q=n.get(M);P.addEventListener("dispose",_);let te=P.textures,de=P.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),de){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let oe=0;oe<M.mipmaps.length;oe++)W.__webglFramebuffer[ne][oe]=i.createFramebuffer()}else W.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)W.__webglFramebuffer[ne]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(pe)for(let ne=0,oe=te.length;ne<oe;ne++){let xe=n.get(te[ne]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Be(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let oe=te[ne];W.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);let xe=r.convert(oe.format,oe.colorSpace),Ge=r.convert(oe.type),be=x(oe.internalFormat,xe,Ge,oe.normalized,oe.colorSpace,P.isXRRenderTarget===!0),ve=Ae(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,be,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ge(i.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)_e(W.__webglFramebuffer[ne][oe],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else _e(W.__webglFramebuffer[ne],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(M)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ne=0,oe=te.length;ne<oe;ne++){let xe=te[ne],Ge=n.get(xe),be=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Ge.__webglTexture),ge(be,xe),_e(W.__webglFramebuffer,P,xe,i.COLOR_ATTACHMENT0+ne,be,0),g(xe)&&y(be)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),ge(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)_e(W.__webglFramebuffer[oe],P,M,i.COLOR_ATTACHMENT0,ne,oe);else _e(W.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,ne,0);g(M)&&y(ne),t.unbindTexture()}P.depthBuffer&&ie(P)}function K(P){let M=P.textures;for(let W=0,q=M.length;W<q;W++){let te=M[W];if(g(te)){let de=E(P),pe=n.get(te).__webglTexture;t.bindTexture(de,pe),y(de),t.unbindTexture()}}}let ae=[],Se=[];function Te(P){if(P.samples>0){if(Be(P)===!1){let M=P.textures,W=P.width,q=P.height,te=i.COLOR_BUFFER_BIT,de=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(P),ne=M.length>1;if(ne)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let oe=P.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);let Ge=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,W,q,0,0,W,q,te,i.NEAREST),l===!0&&(ae.length=0,Se.length=0,ae.push(i.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ae.push(de),Se.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);let Ge=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ae(P){return Math.min(s.maxSamples,P.samples)}function Be(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function B(P){let M=o.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function rt(P,M){let W=P.colorSpace,q=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==wr&&W!==bi&&(st.getTransfer(W)===pt?(q!==Un||te!==bn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",W)),M}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=D,this.rebindTextures=ce,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ex(i,e){function t(n,s=bi){let r,o=st.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===zc)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Wa)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Jt)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===Un)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Ya)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Qa||n===ja||n===el)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===go||n===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===nl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===go)return r.COMPRESSED_RG11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===Tl||n===_o||n===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===El)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ut({vertexShader:Tx,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new It(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends si{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,v=typeof XRWebGLBinding<"u",m=new gh,g={},y=t.getContextAttributes(),E=null,x=null,S=[],b=[],R=new re,_=null,T=null,A=new tn;A.viewport=new Pt;let L=new tn;L.viewport=new Pt;let U=[A,L],F=new Oa,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=S[$];return j===void 0&&(j=new zs,S[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=S[$];return j===void 0&&(j=new zs,S[$]=j),j.getGripSpace()},this.getHand=function($){let j=S[$];return j===void 0&&(j=new zs,S[$]=j),j.getHandSpace()};function O($){let j=b.indexOf($.inputSource);if(j===-1)return;let he=S[j];he!==void 0&&(he.update($.inputSource,$.frame,c||o),he.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",X);for(let $=0;$<S.length;$++){let j=b[$];j!==null&&(b[$]=null,S[$].disconnect(j))}I=null,N=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(E),d=null,u=null,f=null,s=null,x=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,He=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?ki:ii,He=y.stencil?er:Yn);let Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Bt(u.textureWidth,u.textureHeight,{format:Un,type:bn,depthTexture:new Ui(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Bt(d.framebufferWidth,d.framebufferHeight,{format:Un,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X($){for(let j=0;j<$.removed.length;j++){let he=$.removed[j],He=b.indexOf(he);He>=0&&(b[He]=null,S[He].disconnect(he))}for(let j=0;j<$.added.length;j++){let he=$.added[j],He=b.indexOf(he);if(He===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=b.length){b.push(he),He=Fe;break}else if(b[Fe]===null){b[Fe]=he,He=Fe;break}if(He===-1)break}let _e=S[He];_e&&_e.connect(he)}}let k=new C,z=new C;function D($,j,he){k.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(he.matrixWorld);let He=k.distanceTo(z),_e=j.projectionMatrix.elements,Fe=he.projectionMatrix.elements,Ke=_e[14]/(_e[10]-1),ie=_e[14]/(_e[10]+1),ce=(_e[9]+1)/_e[5],fe=(_e[9]-1)/_e[5],K=(_e[8]-1)/_e[0],ae=(Fe[8]+1)/Fe[0],Se=Ke*K,Te=Ke*ae,Ae=He/(-K+ae),Be=Ae*-K;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let B=Ke+Ae,rt=ie+Ae,je=Se-Be,P=Te+(He-Be),M=ce*ie/rt*B,W=fe*ie/rt*B;$.projectionMatrix.makePerspective(je,P,M,W,B,rt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Y($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let j=$.near,he=$.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(he=m.depthFar)),F.near=L.near=A.near=j,F.far=L.far=A.far=he,(I!==F.near||N!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,N=F.far),F.layers.mask=$.layers.mask|6,A.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;let He=$.parent,_e=F.cameras;Y(F,He);for(let Fe=0;Fe<_e.length;Fe++)Y(_e[Fe],He);_e.length===2?D(F,A,L):F.projectionMatrix.copy(A.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),ee($,F,He)};function ee($,j,he){he===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Pr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return g[$]};let ue=null;function ge($,j){if(h=j.getViewerPose(c||o),p=j,h!==null){let he=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let He=!1;he.length!==F.cameras.length&&(F.cameras.length=0,He=!0);for(let ie=0;ie<he.length;ie++){let ce=he[ie],fe=null;if(d!==null)fe=d.getViewport(ce);else{let ae=f.getViewSubImage(u,ce);fe=ae.viewport,ie===0&&(e.setRenderTargetTextures(x,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(x))}let K=U[ie];K===void 0&&(K=new tn,K.layers.enable(ie),K.viewport=new Pt,U[ie]=K),K.matrix.fromArray(ce.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ce.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(fe.x,fe.y,fe.width,fe.height),ie===0&&(F.matrix.copy(K.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),He===!0&&F.cameras.push(K)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let ie=f.getDepthInformation(he[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,s.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let ie=0;ie<he.length;ie++){let ce=he[ie].camera;if(ce){let fe=g[ce];fe||(fe=new zr,g[ce]=fe);let K=f.getCameraImage(ce);fe.sourceTexture=K}}}}for(let he=0;he<S.length;he++){let He=b[he],_e=S[he];He!==null&&_e!==void 0&&_e.update(He,j,c||o)}ue&&ue($,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}let De=new Rf;De.setAnimationLoop(ge),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}},Ax=new ct,Nf=new $e;Nf.set(-1,0,0,0,1,0,0,0,1);function Rx(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Zc(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,E,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Yt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Yt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(m(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",y));let R=S.program;n.updateUBOMapping(x,R);let _=e.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){let S=f();x.__bindingPointIndex=S;let b=i.createBuffer(),R=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=s[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,T=b.length;_<T;_++){let A=b[_];if(Array.isArray(A))for(let L=0,U=A.length;L<U;L++)d(A[L],_,L,R);else d(A,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,S,b,R){if(v(x,S,b,R)===!0){let _=x.__offset,T=x.value;if(Array.isArray(T)){let A=0;for(let L=0;L<T.length;L++){let U=T[L],F=g(U);p(U,x.__data,A),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function p(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function v(x,S,b,R){let _=x.value,T=S+"_"+b;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{let A=R[T];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(x){let S=x.uniforms,b=0,R=16;for(let T=0,A=S.length;T<A;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let U=0,F=L.length;U<F;U++){let I=L[U],N=Array.isArray(I.value)?I.value:[I.value];for(let O=0,H=N.length;O<H;O++){let X=N[O],k=g(X),z=b%R,D=z%k.boundary,Y=z+D;b+=D,Y!==0&&R-Y<k.storage&&(b+=R-Y),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=k.storage}}}let _=b%R;return _>0&&(b+=R-_),x.__size=b,x.__cache={},this}function g(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",x),S}function y(x){let S=x.target;S.removeEventListener("dispose",y);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function Ix(){return oi===null&&(oi=new Or(Px,16,16,Wi,Jt),oi.name="DFG_LUT",oi.minFilter=cn,oi.magFilter=cn,oi.wrapS=ti,oi.wrapT=ti,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Ll=class{constructor(e={}){let{canvas:t=Zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=d,m=new Set([$a,Ja,Za]),g=new Set([bn,Yn,js,er,Xa,qa]),y=new Uint32Array(4),E=new Int32Array(4),x=new C,S=null,b=null,R=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,U=null,F=null,I=null,N=null;this._outputColorSpace=ln;let O=0,H=0,X=null,k=-1,z=null,D=new Pt,Y=new Pt,ee=null,ue=new me(0),ge=0,De=t.width,$=t.height,j=1,he=null,He=null,_e=new Pt(0,0,De,$),Fe=new Pt(0,0,De,$),Ke=!1,ie=new ks,ce=!1,fe=!1,K=new ct,ae=new C,Se=new Pt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Be(){return X===null?j:1}let B=n;function rt(w,V){return t.getContext(w,V)}let je,P,M,W,q,te,de,pe,ne,oe,xe,Ge,be,ve,ke,qe,Qe,G,ye,se,Me,Ce,le;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",On,!1),B===null){let V="webgl2";if(B=rt(V,w),B===null)throw rt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(w){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",On,!1),Ze("WebGLRenderer: "+w.message),w}function We(){je=new Og(B),je.init(),Me=new Ex(B,je),P=new Rg(B,je,e,Me),M=new Sx(B,je),P.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),F=B.createFramebuffer(),I=B.createFramebuffer(),N=B.createFramebuffer(),W=new Vg(B),q=new lx,te=new bx(B,je,M,q,P,Me,W),de=new Bg(A),pe=new kp(B),Ce=new wg(B,pe),ne=new Hg(B,pe,W,Ce),oe=new kg(B,ne,pe,Ce,W),G=new Gg(B,P,te),ke=new Cg(q),xe=new ax(A,de,je,P,Ce,ke),Ge=new Rx(A,q),be=new hx,ve=new gx(je),Qe=new Tg(A,de,M,oe,p,l),qe=new Mx(A,oe,P),le=new Cx(B,W,P,M),ye=new Ag(B,je,W),se=new zg(B,je,W),W.programs=xe.programs,A.capabilities=P,A.extensions=je,A.properties=q,A.renderLists=be,A.shadowMap=qe,A.state=M,A.info=W}v!==bn&&(T=new Xg(v,t.width,t.height,a,s,r));let Oe=new _h(A,B);this.xr=Oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(De,$,!1))},this.getSize=function(w){return w.set(De,$)},this.setSize=function(w,V,Q=!0){if(Oe.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}De=w,$=V,t.width=Math.floor(w*j),t.height=Math.floor(V*j),Q===!0&&(t.style.width=w+"px",t.style.height=V+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(De*j,$*j).floor()},this.setDrawingBufferSize=function(w,V,Q){De=w,$=V,j=Q,t.width=Math.floor(w*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(v===bn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,V,Q,Z){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,V,Q,Z),M.viewport(D.copy(_e).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(Fe)},this.setScissor=function(w,V,Q,Z){w.isVector4?Fe.set(w.x,w.y,w.z,w.w):Fe.set(w,V,Q,Z),M.scissor(Y.copy(Fe).multiplyScalar(j).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(w){M.setScissorTest(Ke=w)},this.setOpaqueSort=function(w){he=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Q=!0){let Z=0;if(w){let J=!1;if(X!==null){let Re=X.texture.format;J=m.has(Re)}if(J){let Re=X.texture.type,Le=g.has(Re),we=Qe.getClearColor(),Ne=Qe.getClearAlpha(),ze=we.r,et=we.g,ot=we.b;Le?(y[0]=ze,y[1]=et,y[2]=ot,y[3]=Ne,B.clearBufferuiv(B.COLOR,0,y)):(E[0]=ze,E[1]=et,E[2]=ot,E[3]=Ne,B.clearBufferiv(B.COLOR,0,E))}else Z|=B.COLOR_BUFFER_BIT}V&&(Z|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",On,!1),Qe.dispose(),be.dispose(),ve.dispose(),q.dispose(),de.dispose(),oe.dispose(),Ce.dispose(),le.dispose(),xe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Ah),Oe.removeEventListener("sessionend",Rh),Ji.stop()};function bt(w){w.preventDefault(),Cr("WebGLRenderer: Context Lost."),L=!0}function _t(){Cr("WebGLRenderer: Context Restored."),L=!1;let w=W.autoReset,V=qe.enabled,Q=qe.autoUpdate,Z=qe.needsUpdate,J=qe.type;We(),W.autoReset=w,qe.enabled=V,qe.autoUpdate=Q,qe.needsUpdate=Z,qe.type=J}function On(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kn(w){let V=w.target;V.removeEventListener("dispose",Kn),Sd(V)}function Sd(w){bd(w),q.remove(w)}function bd(w){let V=q.get(w).programs;V!==void 0&&(V.forEach(function(Q){xe.releaseProgram(Q)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Q,Z,J,Re){V===null&&(V=Te);let Le=J.isMesh&&J.matrixWorld.determinantAffine()<0,we=wd(w,V,Q,Z,J);M.setMaterial(Z,Le);let Ne=Q.index,ze=1;if(Z.wireframe===!0){if(Ne=ne.getWireframeAttribute(Q),Ne===void 0)return;ze=2}let et=Q.drawRange,ot=Q.attributes.position,Ue=et.start*ze,xt=(et.start+et.count)*ze;Re!==null&&(Ue=Math.max(Ue,Re.start*ze),xt=Math.min(xt,(Re.start+Re.count)*ze)),Ne!==null?(Ue=Math.max(Ue,0),xt=Math.min(xt,Ne.count)):ot!=null&&(Ue=Math.max(Ue,0),xt=Math.min(xt,ot.count));let kt=xt-Ue;if(kt<0||kt===1/0)return;Ce.setup(J,Z,we,Q,Ne);let At,St=ye;if(Ne!==null&&(At=pe.get(Ne),St=se,St.setIndex(At)),J.isMesh)Z.wireframe===!0?(M.setLineWidth(Z.wireframeLinewidth*Be()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(J.isLine){let dn=Z.linewidth;dn===void 0&&(dn=1),M.setLineWidth(dn*Be()),J.isLineSegments?St.setMode(B.LINES):J.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else J.isPoints?St.setMode(B.POINTS):J.isSprite&&St.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(je.get("WEBGL_multi_draw"))St.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let dn=J._multiDrawStarts,Pe=J._multiDrawCounts,xn=J._multiDrawCount,ft=Ne?pe.get(Ne).bytesPerElement:1,In=q.get(Z).currentProgram.getUniforms();for(let Qn=0;Qn<xn;Qn++)In.setValue(B,"_gl_DrawID",Qn),St.render(dn[Qn]/ft,Pe[Qn])}else if(J.isInstancedMesh)St.renderInstances(Ue,kt,J.count);else if(Q.isInstancedBufferGeometry){let dn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pe=Math.min(Q.instanceCount,dn);St.renderInstances(Ue,kt,Pe)}else St.render(Ue,kt)};function wh(w,V,Q,Z){U!==null&&w.isNodeMaterial&&U.setObject(Z,w),ce===!0&&ke.setState(w,Q,!1),w.transparent===!0&&w.side===Ut&&w.forceSinglePass===!1?(w.side=Yt,w.needsUpdate=!0,Io(w,V,Z),w.side=zi,w.needsUpdate=!0,Io(w,V,Z),w.side=Ut):Io(w,V,Z)}this.compile=function(w,V,Q=null){Q===null&&(Q=w),U!==null&&U.renderStart(w,V,Q),b=ve.get(Q),b.init(V),_.push(b),Q.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),w!==Q&&w.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),fe=this.localClippingEnabled,ce=ke.init(this.clippingPlanes,fe),ce===!0&&ke.setGlobalState(this.clippingPlanes,V),U!==null&&qe.render(b.state.shadowsArray,Q,V);let Z=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Re=J.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let we=Re[Le];wh(we,Q,V,J),Z.add(we)}else wh(Re,Q,V,J),Z.add(Re)}),b=_.pop(),U!==null&&U.renderEnd(),Z},this.compileAsync=function(w,V,Q=null){let Z=this.compile(w,V,Q);return new Promise(J=>{function Re(){if(Z.forEach(function(Le){let Ne=q.get(Le).currentProgram;(Ne===void 0||Ne.isReady())&&Z.delete(Le)}),Z.size===0){J(w);return}setTimeout(Re,10)}je.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Xl=null;function Ed(w){Xl&&Xl(w)}function Ah(){Ji.stop()}function Rh(){Ji.start()}let Ji=new Rf;Ji.setAnimationLoop(Ed),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(w){Xl=w,Oe.setAnimationLoop(w),w===null?Ji.stop():Ji.start()},Oe.addEventListener("sessionstart",Ah),Oe.addEventListener("sessionend",Rh),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(w,V);let Q=Oe.enabled===!0&&Oe.isPresenting===!0,Z=T!==null&&(X===null||Q)&&T.begin(A,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(V),V=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,V,X),b=ve.get(w,_.length),b.init(V),b.state.textureUnits=te.getTextureUnits(),_.push(b),K.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ie.setFromProjectionMatrix(K,kn,V.reversedDepth),fe=this.localClippingEnabled,ce=ke.init(this.clippingPlanes,fe),S=be.get(w,R.length),S.init(),R.push(S),Oe.enabled===!0&&Oe.isPresenting===!0){let Le=A.xr.getDepthSensingMesh();Le!==null&&ql(Le,V,-1/0,A.sortObjects)}ql(w,V,0,A.sortObjects),S.finish(),U!==null&&U.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(he,He),Ae=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,Ae&&Qe.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&ke.beginShadows();let J=b.state.shadowsArray;if(qe.render(J,w,V),ce===!0&&ke.endShadows(),(Z&&T.hasRenderPass())===!1){let Le=S.opaque,we=S.transmissive;if(b.setupLights(),V.isArrayCamera){let Ne=V.cameras;if(we.length>0)for(let ze=0,et=Ne.length;ze<et;ze++){let ot=Ne[ze];Ph(Le,we,w,ot)}Ae&&Qe.render(w);for(let ze=0,et=Ne.length;ze<et;ze++){let ot=Ne[ze];Ch(S,w,ot,ot.viewport)}}else we.length>0&&Ph(Le,we,w,V),Ae&&Qe.render(w),Ch(S,w,V)}X!==null&&H===0&&(te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X)),Z&&T.end(A),w.isScene===!0&&w.onAfterRender(A,w,V),Ce.resetDefaultState(),k=-1,z=null,_.pop(),_.length>0?(b=_[_.length-1],te.setTextureUnits(b.state.textureUnits),ce===!0&&ke.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,U!==null&&U.renderEnd()};function ql(w,V,Q,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ie)){Z&&Se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);let Le=oe.update(w),we=w.material;we.visible&&S.push(w,Le,we,Q,Se.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ie))){let Le=oe.update(w),we=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Se.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Se.copy(Le.boundingSphere.center)),Se.applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(we)){let Ne=Le.groups;for(let ze=0,et=Ne.length;ze<et;ze++){let ot=Ne[ze],Ue=we[ot.materialIndex];Ue&&Ue.visible&&S.push(w,Le,Ue,Q,Se.z,ot,V)}}else we.visible&&S.push(w,Le,we,Q,Se.z,null,V)}}let Re=w.children;for(let Le=0,we=Re.length;Le<we;Le++)ql(Re[Le],V,Q,Z)}function Ch(w,V,Q,Z){let{opaque:J,transmissive:Re,transparent:Le}=w;b.setupLightsView(Q),ce===!0&&ke.setGlobalState(A.clippingPlanes,Q),Z&&M.viewport(D.copy(Z)),J.length>0&&Po(J,V,Q),Re.length>0&&Po(Re,V,Q),Le.length>0&&Po(Le,V,Q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ph(w,V,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){let Ue=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new Bt(1,1,{generateMipmaps:!0,type:Ue?Jt:bn,minFilter:Gi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Re=b.state.transmissionRenderTarget[Z.id],Le=Z.viewport||D;Re.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);let we=A.getRenderTarget(),Ne=A.getActiveCubeFace(),ze=A.getActiveMipmapLevel();A.setRenderTarget(Re),A.getClearColor(ue),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),Ae&&Qe.render(Q);let et=A.toneMapping;A.toneMapping=qn;let ot=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),ce===!0&&ke.setGlobalState(A.clippingPlanes,Z),Po(w,Q,Z),te.updateMultisampleRenderTarget(Re),te.updateRenderTargetMipmap(Re),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let xt=0,kt=V.length;xt<kt;xt++){let At=V[xt],{object:St,geometry:dn,material:Pe,group:xn}=At;if(Pe.side===Ut&&St.layers.test(Z.layers)){let ft=Pe.side;Pe.side=Yt,Pe.needsUpdate=!0,Ih(St,Q,Z,dn,Pe,xn),Pe.side=ft,Pe.needsUpdate=!0,Ue=!0}}Ue===!0&&(te.updateMultisampleRenderTarget(Re),te.updateRenderTargetMipmap(Re))}A.setRenderTarget(we,Ne,ze),A.setClearColor(ue,ge),ot!==void 0&&(Z.viewport=ot),A.toneMapping=et}function Po(w,V,Q){let Z=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Re=w.length;J<Re;J++){let Le=w[J],{object:we,geometry:Ne,group:ze}=Le,et=Le.material;et.allowOverride===!0&&Z!==null&&(et=Z),we.layers.test(Q.layers)&&Ih(we,V,Q,Ne,et,ze)}}function Ih(w,V,Q,Z,J,Re){U!==null&&J.isNodeMaterial&&U.setObject(w,J),w.onBeforeRender(A,V,Q,Z,J,Re),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(A,V,Q,Z,w,Re),J.transparent===!0&&J.side===Ut&&J.forceSinglePass===!1?(J.side=Yt,J.needsUpdate=!0,A.renderBufferDirect(Q,V,Z,J,w,Re),J.side=zi,J.needsUpdate=!0,A.renderBufferDirect(Q,V,Z,J,w,Re),J.side=Ut):A.renderBufferDirect(Q,V,Z,J,w,Re),w.onAfterRender(A,V,Q,Z,J,Re)}function Io(w,V,Q){V.isScene!==!0&&(V=Te);let Z=q.get(w),J=b.state.lights,Re=b.state.shadowsArray,Le=J.state.version,we=xe.getParameters(w,J.state,Re,V,Q,b.state.lightProbeGridArray),Ne=xe.getProgramCacheKey(we),ze=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=de.get(w.envMap||Z.environment,et),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",Kn),ze=new Map,Z.programs=ze);let ot=ze.get(Ne);if(ot!==void 0){if(Z.currentProgram===ot&&Z.lightsStateVersion===Le)return Dh(w,we),ot}else we.uniforms=xe.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,Q,we),w.onBeforeCompile(we,A),ot=xe.acquireProgram(we,Ne),ze.set(Ne,ot),Z.uniforms=we.uniforms;let Ue=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ke.uniform),Dh(w,we),Z.needsLights=Rd(w),Z.lightsStateVersion=Le,Z.needsLights&&(Ue.ambientLightColor.value=J.state.ambient,Ue.lightProbe.value=J.state.probe,Ue.sunLights.value=J.state.sun,Ue.sunLightShadows.value=J.state.sunShadow,Ue.directionalLights.value=J.state.directional,Ue.directionalLightShadows.value=J.state.directionalShadow,Ue.spotLights.value=J.state.spot,Ue.spotLightShadows.value=J.state.spotShadow,Ue.rectAreaLights.value=J.state.rectArea,Ue.ltc_1.value=J.state.rectAreaLTC1,Ue.ltc_2.value=J.state.rectAreaLTC2,Ue.pointLights.value=J.state.point,Ue.pointLightShadows.value=J.state.pointShadow,Ue.hemisphereLights.value=J.state.hemi,Ue.sunShadowMatrix.value=J.state.sunShadowMatrix,Ue.sunShadowCascade.value=J.state.sunShadowCascade,Ue.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ue.spotLightMatrix.value=J.state.spotLightMatrix,Ue.spotLightMap.value=J.state.spotLightMap,Ue.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=b.state.lightProbeGridArray.length>0,Z.currentProgram=ot,Z.uniformsList=null,ot}function Lh(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=ir.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Dh(w,V){let Q=q.get(w);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Td(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(V.matrixWorld);for(let Q=0,Z=w.length;Q<Z;Q++){let J=w[Q];if(J.texture!==null&&J.boundingBox.containsPoint(x))return J}return null}function wd(w,V,Q,Z,J){V.isScene!==!0&&(V=Te),te.resetTextureUnits();let Re=V.fog,Le=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,we=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:st.workingColorSpace,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ze=de.get(Z.envMap||Le,Ne),et=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ot=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ue=!!Q.morphAttributes.position,xt=!!Q.morphAttributes.normal,kt=!!Q.morphAttributes.color,At=qn;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(At=A.toneMapping);let St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,dn=St!==void 0?St.length:0,Pe=q.get(Z),xn=b.state.lights;if(ce===!0&&(fe===!0||w!==z)){let Et=w===z&&Z.id===k;ke.setState(Z,w,Et)}let ft=!1;Z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xn.state.version||Pe.outputColorSpace!==we||J.isBatchedMesh&&Pe.batching===!1||!J.isBatchedMesh&&Pe.batching===!0||J.isBatchedMesh&&Pe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Pe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Pe.instancing===!1||!J.isInstancedMesh&&Pe.instancing===!0||J.isSkinnedMesh&&Pe.skinning===!1||!J.isSkinnedMesh&&Pe.skinning===!0||J.isInstancedMesh&&Pe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Pe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Pe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Pe.instancingMorph===!1&&J.morphTexture!==null||Pe.envMap!==ze||Z.fog===!0&&Pe.fog!==Re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ke.numPlanes||Pe.numIntersection!==ke.numIntersection)||Pe.vertexAlphas!==et||Pe.vertexTangents!==ot||Pe.morphTargets!==Ue||Pe.morphNormals!==xt||Pe.morphColors!==kt||Pe.toneMapping!==At||Pe.morphTargetsCount!==dn||!!Pe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Pe.__version=Z.version);let In=Pe.currentProgram;ft===!0&&(In=Io(Z,V,J),U&&Z.isNodeMaterial&&U.onUpdateProgram(Z,In,Pe));let Qn=!1,Ai=!1,ps=!1,vt=In.getUniforms(),Vt=Pe.uniforms;if(M.useProgram(In.program)&&(Qn=!0,Ai=!0,ps=!0),Z.id!==k&&(k=Z.id,Ai=!0),Pe.needsLights){let Et=Td(b.state.lightProbeGridArray,J);Pe.lightProbeGrid!==Et&&(Pe.lightProbeGrid=Et,Ai=!0)}if(Qn||z!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(B,"projectionMatrix",w.projectionMatrix),vt.setValue(B,"viewMatrix",w.matrixWorldInverse);let Ci=vt.map.cameraPosition;Ci!==void 0&&Ci.setValue(B,ae.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&vt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,Ai=!0,ps=!0)}if(Pe.needsLights&&(xn.state.sunShadowMap.length>0&&vt.setValue(B,"sunShadowMap",xn.state.sunShadowMap,te),xn.state.directionalShadowMap.length>0&&vt.setValue(B,"directionalShadowMap",xn.state.directionalShadowMap,te),xn.state.spotShadowMap.length>0&&vt.setValue(B,"spotShadowMap",xn.state.spotShadowMap,te),xn.state.pointShadowMap.length>0&&vt.setValue(B,"pointShadowMap",xn.state.pointShadowMap,te)),J.isSkinnedMesh){vt.setOptional(B,J,"bindMatrix"),vt.setOptional(B,J,"bindMatrixInverse");let Et=J.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),vt.setValue(B,"boneTexture",Et.boneTexture,te))}J.isBatchedMesh&&(vt.setOptional(B,J,"batchingTexture"),vt.setValue(B,"batchingTexture",J._matricesTexture,te),vt.setOptional(B,J,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",J._indirectTexture,te),vt.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",J._colorsTexture,te));let Ri=Q.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&G.update(J,Q,In),(Ai||Pe.receiveShadow!==J.receiveShadow)&&(Pe.receiveShadow=J.receiveShadow,vt.setValue(B,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(Vt.envMapIntensity.value=V.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Ix()),Ai){if(vt.setValue(B,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&Ad(Vt,ps),Re&&Z.fog===!0&&Ge.refreshFogUniforms(Vt,Re),Ge.refreshMaterialUniforms(Vt,Z,j,$,b.state.transmissionRenderTarget[w.id]),Pe.needsLights&&Pe.lightProbeGrid){let Et=Pe.lightProbeGrid;Vt.probesSH.value=Et.texture,Vt.probesMin.value.copy(Et.boundingBox.min),Vt.probesMax.value.copy(Et.boundingBox.max),Vt.probesResolution.value.copy(Et.resolution)}ir.upload(B,Lh(Pe),Vt,te)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ir.upload(B,Lh(Pe),Vt,te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&vt.setValue(B,"center",J.center),vt.setValue(B,"modelViewMatrix",J.modelViewMatrix),vt.setValue(B,"normalMatrix",J.normalMatrix),vt.setValue(B,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let Et=Z.uniformsGroups;for(let Ci=0,ms=Et.length;Ci<ms;Ci++){let Uh=Et[Ci];le.update(Uh,In),le.bind(Uh,In)}}return In}function Ad(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Rd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,V,Q){let Z=q.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=V,q.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let Q=q.get(w);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,Q=0){X=w,O=V,H=Q;let Z=null,J=!1,Re=!1;if(w){let we=q.get(w);if(we.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(B.FRAMEBUFFER,we.__webglFramebuffer),D.copy(w.viewport),Y.copy(w.scissor),ee=w.scissorTest,M.viewport(D),M.scissor(Y),M.setScissorTest(ee),k=-1;return}else if(we.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(we.__hasExternalTextures)te.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let et=w.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&q.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}let Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);let ze=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?Z=ze[V][Q]:Z=ze[V],J=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?Z=q.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?Z=ze[Q]:Z=ze,D.copy(w.viewport),Y.copy(w.scissor),ee=w.scissorTest}else D.copy(_e).multiplyScalar(j).floor(),Y.copy(Fe).multiplyScalar(j).floor(),ee=Ke;if(Q!==0&&(Z=F),M.bindFramebuffer(B.FRAMEBUFFER,Z)&&M.drawBuffers(w,Z),M.viewport(D),M.scissor(Y),M.setScissorTest(ee),J){let we=q.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,Q)}else if(Re){let we=V;for(let Ne=0;Ne<w.textures.length;Ne++){let ze=q.get(w.textures[Ne]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ne,ze.__webglTexture,Q,we)}}else if(w!==null&&Q!==0){let we=q.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,Q)}k=-1};function Nh(w){let V=q.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=P.textureFormatReadable(w.format),V.__typeReadable=P.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,Q,Z,J,Re,Le,we=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){M.bindFramebuffer(B.FRAMEBUFFER,Ne);try{let ze=w.textures[we],et=ze.format,ot=ze.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we);let Ue=Nh(ze);if(Ue.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&Q>=0&&Q<=w.height-J&&B.readPixels(V,Q,Z,J,Me.convert(et),Me.convert(ot),Re)}finally{let ze=X!==null?q.get(X).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,V,Q,Z,J,Re,Le,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(V>=0&&V<=w.width-Z&&Q>=0&&Q<=w.height-J){M.bindFramebuffer(B.FRAMEBUFFER,Ne);let ze=w.textures[we],et=ze.format,ot=ze.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we);let Ue=Nh(ze);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.bufferData(B.PIXEL_PACK_BUFFER,Re.byteLength,B.STREAM_READ),B.readPixels(V,Q,Z,J,Me.convert(et),Me.convert(ot),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let kt=X!==null?q.get(X).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,kt);let At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $u(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Re),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(xt),B.deleteSync(At),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,Q=0){let Z=Math.pow(2,-Q),J=Math.floor(w.image.width*Z),Re=Math.floor(w.image.height*Z),Le=V!==null?V.x:0,we=V!==null?V.y:0;te.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Le,we,J,Re),M.unbindTexture()},this.copyTextureToTexture=function(w,V,Q=null,Z=null,J=0,Re=0){let Le,we,Ne,ze,et,ot,Ue,xt,kt,At=w.isCompressedTexture?w.mipmaps[Re]:w.image;if(Q!==null)Le=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,ze=Q.min.x,et=Q.min.y,ot=Q.isBox3?Q.min.z:0;else{let Vt=Math.pow(2,-J);Le=Math.floor(At.width*Vt),we=Math.floor(At.height*Vt),w.isDataArrayTexture?Ne=At.depth:w.isData3DTexture?Ne=Math.floor(At.depth*Vt):Ne=1,ze=0,et=0,ot=0}Z!==null?(Ue=Z.x,xt=Z.y,kt=Z.z):(Ue=0,xt=0,kt=0);let St=Me.convert(V.format),dn=Me.convert(V.type),Pe;V.isData3DTexture?(te.setTexture3D(V,0),Pe=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(te.setTexture2DArray(V,0),Pe=B.TEXTURE_2D_ARRAY):(te.setTexture2D(V,0),Pe=B.TEXTURE_2D),M.activeTexture(B.TEXTURE0),M.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),M.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),M.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);let xn=M.getParameter(B.UNPACK_ROW_LENGTH),ft=M.getParameter(B.UNPACK_IMAGE_HEIGHT),In=M.getParameter(B.UNPACK_SKIP_PIXELS),Qn=M.getParameter(B.UNPACK_SKIP_ROWS),Ai=M.getParameter(B.UNPACK_SKIP_IMAGES);M.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),M.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),M.pixelStorei(B.UNPACK_SKIP_ROWS,et),M.pixelStorei(B.UNPACK_SKIP_IMAGES,ot);let ps=w.isDataArrayTexture||w.isData3DTexture,vt=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Vt=q.get(w),Ri=q.get(V),Et=q.get(Vt.__renderTarget),Ci=q.get(Ri.__renderTarget);M.bindFramebuffer(B.READ_FRAMEBUFFER,Et.__webglFramebuffer),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let ms=0;ms<Ne;ms++)ps&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(w).__webglTexture,J,ot+ms),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(V).__webglTexture,Re,kt+ms)),B.blitFramebuffer(ze,et,Le,we,Ue,xt,Le,we,B.DEPTH_BUFFER_BIT,B.NEAREST);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||q.has(w)){let Vt=q.get(w),Ri=q.get(V);M.bindFramebuffer(B.READ_FRAMEBUFFER,I),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,N);for(let Et=0;Et<Ne;Et++)ps?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.__webglTexture,J,ot+Et):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vt.__webglTexture,J),vt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ri.__webglTexture,Re,kt+Et):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ri.__webglTexture,Re),J!==0?B.blitFramebuffer(ze,et,Le,we,Ue,xt,Le,we,B.COLOR_BUFFER_BIT,B.NEAREST):vt?B.copyTexSubImage3D(Pe,Re,Ue,xt,kt+Et,ze,et,Le,we):B.copyTexSubImage2D(Pe,Re,Ue,xt,ze,et,Le,we);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Pe,Re,Ue,xt,kt,Le,we,Ne,St,dn,At.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,Re,Ue,xt,kt,Le,we,Ne,St,At.data):B.texSubImage3D(Pe,Re,Ue,xt,kt,Le,we,Ne,St,dn,At):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Re,Ue,xt,Le,we,St,dn,At.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Re,Ue,xt,At.width,At.height,St,At.data):B.texSubImage2D(B.TEXTURE_2D,Re,Ue,xt,Le,we,St,dn,At);M.pixelStorei(B.UNPACK_ROW_LENGTH,xn),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft),M.pixelStorei(B.UNPACK_SKIP_PIXELS,In),M.pixelStorei(B.UNPACK_SKIP_ROWS,Qn),M.pixelStorei(B.UNPACK_SKIP_IMAGES,Ai),Re===0&&V.generateMipmaps&&B.generateMipmap(Pe),M.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){O=0,H=0,X=null,M.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Lx=new Hi(-1,1,1,-1,0,1),xh=class extends it{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}},Dx=new xh,Xi=class{constructor(e){this._mesh=new Xe(Dx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Lx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ul=class extends Cn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ei.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var So=class extends Cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fl=class extends Cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ul(or),this.copyPass.material.blending=Dn,this.timer=new no}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}So!==void 0&&(o instanceof So?n=!0:o instanceof Fl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ol=class extends Cn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new me}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Uf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ar=class i extends Cn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,o,{type:Jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Bt(r,o,{type:Jt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Bt(r,o,{type:Jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Uf;this.highPassUniforms=Ei.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ei.clone(or.uniforms),this.blendMaterial=new ut({uniforms:this.copyUniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,premultipliedAlpha:!0,blending:Ct,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new me,this._oldClearAlpha=1,this._basic=new Nt,this._fsQuad=new Xi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ut({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ar.BlurDirectionX=new re(1,0);ar.BlurDirectionY=new re(0,1);var bo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Hl=class extends Cn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ei.clone(bo.uniforms),this.material=new Zs({name:bo.name,uniforms:this.uniforms,vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader}),this._fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===io?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===so?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function qi(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new it,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Ff(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][u]);let p=Ff(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Ff(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Tt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<t;p++){let v=h.getComponent(u,p);a.setComponent(u+f,p,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Eo=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),cr=(i,e,t)=>i+(e-i)*t,Lt=(i,e,t)=>{let n=Eo((t-i)/(e-i));return n*n*(3-2*n)},Of=i=>(i=Eo(i),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2),Jn=(i,e,t,n,s)=>Lt(e,t,i)*(1-Lt(n,s,i));function un(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var lr=class{constructor(e){this.t=e.map(t=>t[0]),this.v=e.map(t=>t[1]),this.vec=typeof e[0][1]!="number"}at(e,t){let{t:n,v:s}=this,r=n.length;if(e<=n[0])return this.vec?t.copy(s[0]):s[0];if(e>=n[r-1])return this.vec?t.copy(s[r-1]):s[r-1];let o=0;for(;e>n[o+1];)o++;let a=n[o],l=n[o+1],c=l-a,h=(e-a)/c,f=h*h,u=f*h,d=2*u-3*f+1,p=u-2*f+h,v=-2*u+3*f,m=u-f,g=x=>x<=0||x>=r-1?null:[x-1,x+1,n[x+1]-n[x-1]],y=g(o),E=g(o+1);if(!this.vec){let x=y?(s[y[1]]-s[y[0]])/y[2]*c:0,S=E?(s[E[1]]-s[E[0]])/E[2]*c:0;return d*s[o]+p*x+v*s[o+1]+m*S}return t.set(0,0,0).addScaledVector(s[o],d).addScaledVector(s[o+1],v),y&&t.addScaledVector(Bf.subVectors(s[y[1]],s[y[0]]),p*c/y[2]),E&&t.addScaledVector(Bf.subVectors(s[E[1]],s[E[0]]),m*c/E[2]),t}},Bf=new C,Qt=(i,e,t)=>new C(i,e,t),Mt=i=>new me(i);function Gt(i,e,t={}){let n=i.map(r=>{let o=r.index?r.toNonIndexed():r;o.attributes.uv||o.setAttribute("uv",new Tt(new Float32Array(o.attributes.position.count*2),2));for(let a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);return o}),s=new Xe(qi(n,!1),e);return s.castShadow=!!t.cast,s.receiveShadow=!!t.receive,s}function Ve(i,{x:e=0,y:t=0,z:n=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1}={}){let h=new ct().compose(new C(e,t,n),new Xt().setFromEuler(new hn(s,r,o)),new C(a,l,c));return i.applyMatrix4(h)}var Hf=1,zf=i=>{Hf=i};function on(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function En(i,{srgb:e=!0,repeat:t=!1}={}){let n=new xi(i);return e&&(n.colorSpace=ln),t&&(n.wrapS=n.wrapT=Fs),n.anisotropy=Hf,n}function Vl(i,e=2){let t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,[r,o]=on(t,n),a=o.createImageData(t,n),l=a.data,c=(h,f)=>s[((f+n)%n*t+(h+t)%t)*4]/255;for(let h=0;h<n;h++)for(let f=0;f<t;f++){let u=c(f+1,h-1)+2*c(f+1,h)+c(f+1,h+1)-(c(f-1,h-1)+2*c(f-1,h)+c(f-1,h+1)),d=c(f-1,h+1)+2*c(f,h+1)+c(f+1,h+1)-(c(f-1,h-1)+2*c(f,h-1)+c(f+1,h-1)),p=-u*e,v=d*e,m=1,g=Math.hypot(p,v,m),y=(h*t+f)*4;l[y]=(p/g*.5+.5)*255,l[y+1]=(v/g*.5+.5)*255,l[y+2]=(m/g*.5+.5)*255,l[y+3]=255}return o.putImageData(a,0,0),En(r,{srgb:!1,repeat:!0})}function vh(i,e,t,n,s,r,o,a){let l=un(o);for(let c=0;c<n;c++)i.globalAlpha=r*(.4+l()*.6),i.fillStyle=a[Math.floor(l()*a.length)],i.beginPath(),i.arc(l()*e,l()*t,s*(.3+l()),0,Math.PI*2),i.fill();i.globalAlpha=1}function Vf({base:i=[236,228,250],seed:e=7}={}){let s=un(e),[r,o]=on(512),[a,l]=on(512);o.fillStyle=`rgb(${i.map(h=>h-34).join(",")})`,o.fillRect(0,0,512,512),l.fillStyle="#000",l.fillRect(0,0,512,512);let c=512/8;for(let h=0;h<8;h++){let d=h%2*128/2;for(let p=-1;p<4;p++){let v=p*128+d+3,m=h*c+3,g=122,y=c-6,E=(s()-.5)*26,x=s()<.18?[-6,-10,4]:[0,0,0],S=o.createLinearGradient(v,m,v+g*.3,m+y);S.addColorStop(0,`rgb(${i.map((R,_)=>Math.round(R+E+8+x[_])).join(",")})`),S.addColorStop(1,`rgb(${i.map((R,_)=>Math.round(R+E-10+x[_])).join(",")})`),o.fillStyle=S,zl(o,v,m,g,y,7),o.fill();let b=l.createRadialGradient(v+g/2,m+y/2,4,v+g/2,m+y/2,g*.62);b.addColorStop(0,"#fff"),b.addColorStop(1,"#9a9a9a"),l.fillStyle=b,zl(l,v,m,g,y,9),l.fill()}}return vh(o,512,512,2600,1.6,.16,e+1,["#8a7aa8","#ffffff","#6d5f8a"]),vh(l,512,512,2600,1.4,.25,e+2,["#000","#fff"]),{map:En(r,{repeat:!0}),normalMap:Vl(a,2.2)}}function zl(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function Gf(i,e=3){let r=un(e),[o,a]=on(512),[l,c]=on(512),h=new me(i);a.fillStyle="#"+h.clone().multiplyScalar(.55).getHexString(),a.fillRect(0,0,512,512),c.fillStyle="#000",c.fillRect(0,0,512,512);let f=512/8,u=512/10;for(let d=-1;d<=10;d++)for(let p=-1;p<=8;p++){let v=p*f+(d%2?f/2:0)+f/2,m=d*u,g=.85+r()*.3,y=a.createLinearGradient(0,m,0,m+u*1.6);y.addColorStop(0,"#"+h.clone().multiplyScalar(1.15*g).getHexString()),y.addColorStop(.7,"#"+h.clone().multiplyScalar(.95*g).getHexString()),y.addColorStop(1,"#"+h.clone().multiplyScalar(.62*g).getHexString());let E=S=>{S.beginPath(),S.moveTo(v-f/2,m),S.lineTo(v-f/2,m+u*.9),S.quadraticCurveTo(v-f/2,m+u*1.6,v,m+u*1.62),S.quadraticCurveTo(v+f/2,m+u*1.6,v+f/2,m+u*.9),S.lineTo(v+f/2,m),S.closePath()};a.fillStyle=y,E(a),a.fill(),a.strokeStyle="rgba(0,0,0,0.25)",a.lineWidth=2,E(a),a.stroke();let x=c.createLinearGradient(0,m,0,m+u*1.6);x.addColorStop(0,"#666"),x.addColorStop(1,"#fff"),c.fillStyle=x,E(c),c.fill()}return{map:En(o,{repeat:!0}),normalMap:Vl(l,1.6)}}function kf(i=11){let t=un(i),[n,s]=on(512),[r,o]=on(512);s.fillStyle="#7a7290",s.fillRect(0,0,512,512),o.fillStyle="#000",o.fillRect(0,0,512,512);let a=9,l=512/a;for(let c=0;c<a;c++)for(let h=-1;h<=a;h++){let f=l*(.78+t()*.14),u=l*(.72+t()*.14),d=h*l+c%2*l/2+l/2+(t()-.5)*6,p=c*l+l/2+(t()-.5)*6,v=150+t()*50,m=s.createRadialGradient(d-f*.15,p-u*.2,2,d,p,f*.6);m.addColorStop(0,`rgb(${v+12},${v+6},${v+30})`),m.addColorStop(1,`rgb(${v-22},${v-26},${v-4})`),s.fillStyle=m,zl(s,d-f/2,p-u/2,f,u,14),s.fill();let g=o.createRadialGradient(d,p,2,d,p,f*.6);g.addColorStop(0,"#fff"),g.addColorStop(1,"#555"),o.fillStyle=g,zl(o,d-f/2,p-u/2,f,u,14),o.fill()}return vh(s,512,512,1600,1.4,.1,i+3,["#000","#fff"]),{map:En(n,{repeat:!0}),normalMap:Vl(r,1.6)}}function Wf(i=5){let t=un(i),[n,s]=on(512),[r,o]=on(512);s.fillStyle="#3c7a3a",s.fillRect(0,0,512,512),o.fillStyle="#808080",o.fillRect(0,0,512,512);for(let a=0;a<260;a++){let l=t()*512,c=t()*512,h=20+t()*60,f=s.createRadialGradient(l,c,0,l,c,h),u=t()<.5?"70,140,62":"42,98,52";f.addColorStop(0,`rgba(${u},0.35)`),f.addColorStop(1,`rgba(${u},0)`),s.fillStyle=f;for(let d of[-512,0,512])for(let p of[-512,0,512])s.save(),s.translate(d,p),s.fillRect(l-h,c-h,h*2,h*2),s.restore()}s.lineCap="round";for(let a=0;a<9e3;a++){let l=t()*512,c=t()*512,h=3+t()*6,f=-Math.PI/2+(t()-.5)*.9,u=t();s.strokeStyle=u<.5?`rgba(120,190,100,${.25+t()*.3})`:`rgba(20,60,30,${.2+t()*.3})`,s.lineWidth=1+t(),s.beginPath(),s.moveTo(l,c),s.lineTo(l+Math.cos(f)*h,c+Math.sin(f)*h),s.stroke(),o.strokeStyle=u<.5?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)",o.lineWidth=1.5,o.beginPath(),o.moveTo(l,c),o.lineTo(l+Math.cos(f)*h,c+Math.sin(f)*h),o.stroke()}return{map:En(n,{repeat:!0}),normalMap:Vl(r,1.2)}}function Xf(){let[e,t]=on(256);t.fillStyle="#a3103d",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,170,200,0.22)",t.lineWidth=3;for(let n=-256;n<=256*2;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n+256,256),t.stroke(),t.beginPath(),t.moveTo(n,256),t.lineTo(n+256,0),t.stroke();t.fillStyle="rgba(255,215,120,0.35)";for(let n=0;n<=256;n+=64)for(let s=0;s<=256;s+=64)t.beginPath(),t.arc(s,n,4,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(s+32,n+32,3,0,Math.PI*2),t.fill();return En(e,{repeat:!0})}function $n(i=2){let[t,n]=on(128),s=n.createImageData(128,128),r=s.data;for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=Math.hypot(a-64+.5,o-64+.5)/64,c=Math.pow(Math.max(0,1-l),i),h=(o*128+a)*4;r[h]=r[h+1]=r[h+2]=255,r[h+3]=c*255}return n.putImageData(s,0,0),En(t,{srgb:!1})}function hr(){let[e,t]=on(128);t.translate(128/2,128/2);let n=t.createRadialGradient(0,0,0,0,0,128/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(-128/2,-128/2,128,128),t.fillStyle="#fff";for(let s=0;s<2;s++)t.save(),t.rotate(s*Math.PI/2),t.beginPath(),t.moveTo(0,-128/2),t.quadraticCurveTo(3,-3,128/2,0),t.quadraticCurveTo(3,3,0,128/2),t.quadraticCurveTo(-3,3,-128/2,0),t.quadraticCurveTo(-3,-3,0,-128/2),t.fill(),t.restore();return En(e,{srgb:!1})}function qf(){let[t,n]=on(64,128),s=()=>{n.beginPath(),n.moveTo(4,126),n.lineTo(4,64/2),n.arc(64/2,64/2,64/2-4,Math.PI,0),n.lineTo(60,126),n.closePath()},r=n.createLinearGradient(0,0,0,128);return r.addColorStop(0,"#fff3c4"),r.addColorStop(.6,"#ffc65a"),r.addColorStop(1,"#ff9a3c"),n.fillStyle=r,s(),n.fill(),n.strokeStyle="#5a3a1c",n.lineWidth=5,s(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(64/2,6),n.lineTo(64/2,126),n.moveTo(4,128*.55),n.lineTo(60,128*.55),n.stroke(),En(t)}function Yf(){let e=un(21),[t,n]=on(256),s=n.createRadialGradient(256*.45,256*.42,0,256/2,256/2,256/2);s.addColorStop(0,"#fffdf2"),s.addColorStop(.85,"#f3ecd6"),s.addColorStop(1,"rgba(243,236,214,0)"),n.fillStyle=s,n.beginPath(),n.arc(256/2,256/2,256/2-2,0,Math.PI*2),n.fill(),n.save(),n.beginPath(),n.arc(256/2,256/2,256/2-4,0,Math.PI*2),n.clip();for(let r=0;r<14;r++){let o=256*(.2+e()*.6),a=256*(.2+e()*.6),l=256*(.04+e()*.12),c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(190,180,170,0.45)"),c.addColorStop(1,"rgba(190,180,170,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,l*2,l*2)}return n.restore(),En(t)}function ur(i="#5b2fb0",e="#ff7eb3"){let[s,r]=on(256,640),o=()=>{r.beginPath(),r.moveTo(0,0),r.lineTo(256,0),r.lineTo(256,640),r.lineTo(256/2,530),r.lineTo(0,640),r.closePath()},a=r.createLinearGradient(0,0,256,0),l=new me(i);a.addColorStop(0,"#"+l.clone().multiplyScalar(.7).getHexString()),a.addColorStop(.5,i),a.addColorStop(1,"#"+l.clone().multiplyScalar(.7).getHexString()),r.fillStyle=a,o(),r.fill(),r.save(),o(),r.clip(),r.strokeStyle="#f6c548",r.lineWidth=22,o(),r.stroke(),r.strokeStyle="#fff0b0",r.lineWidth=4,r.beginPath(),r.moveTo(24,24),r.lineTo(232,24),r.lineTo(232,600),r.lineTo(256/2,500),r.lineTo(24,600),r.closePath(),r.stroke(),r.restore(),r.save(),r.translate(256/2,200),r.fillStyle="#f6c548",r.strokeStyle="#a8740f",r.lineWidth=5,r.lineJoin="round",r.beginPath(),r.moveTo(-70,40),r.lineTo(-80,-40),r.lineTo(-40,-5),r.lineTo(0,-60),r.lineTo(40,-5),r.lineTo(80,-40),r.lineTo(70,40),r.closePath(),r.fill(),r.stroke(),r.fillStyle="#fff6d0";for(let[c,h]of[[-80,-40],[0,-60],[80,-40]])r.beginPath(),r.arc(c,h,9,0,Math.PI*2),r.fill();return r.fillStyle="#e53950",r.beginPath(),r.arc(0,12,11,0,Math.PI*2),r.fill(),r.fillStyle="#4fa8ff",r.beginPath(),r.arc(-40,18,8,0,Math.PI*2),r.arc(40,18,8,0,Math.PI*2),r.fill(),r.restore(),r.save(),r.translate(256/2,340),r.fillStyle=e,r.strokeStyle="#fff0b0",r.lineWidth=5,r.beginPath(),r.moveTo(0,50),r.bezierCurveTo(-90,-10,-40,-70,0,-25),r.bezierCurveTo(40,-70,90,-10,0,50),r.fill(),r.stroke(),r.restore(),En(s)}function Zf(){let[e,t]=on(64),n=t.createRadialGradient(64*.5,64*.7,2,64*.5,64*.5,64*.55);return n.addColorStop(0,"#ffffff"),n.addColorStop(1,"#d8d8d8"),t.fillStyle=n,t.beginPath(),t.moveTo(64/2,60),t.bezierCurveTo(4,64*.6,8,6,64/2,10),t.bezierCurveTo(56,6,60,64*.6,64/2,60),t.fill(),En(e,{srgb:!1})}function Jf(i,e=512){return new Promise((t,n)=>{let s=new Image;s.onload=()=>{let[r,o]=on(e);o.drawImage(s,0,0,e,e);let a=En(r);t(a)},s.onerror=n,s.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i)})}function $f(i=9){let t=un(i),[n,s]=on(512);s.translate(512/2,512/2),s.globalCompositeOperation="lighter";for(let r=0;r<46;r++){let o=t()*Math.PI*2,a=.012+t()*.05,l=512*(.3+t()*.2),c=s.createLinearGradient(0,0,Math.cos(o)*l,Math.sin(o)*l);c.addColorStop(0,`rgba(255,255,255,${.25+t()*.35})`),c.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=c,s.beginPath(),s.moveTo(0,0),s.lineTo(Math.cos(o-a)*l,Math.sin(o-a)*l),s.lineTo(Math.cos(o+a)*l,Math.sin(o+a)*l),s.closePath(),s.fill()}return En(n,{srgb:!1})}function fn(i,e,{closed:t=!1,smooth:n=!0,seg:s,radial:r=10}={}){let o=i.map(c=>c.isVector3?c:new C(c[0],c[1],c[2]||0)),a;if(n)a=new vi(o,t,"centripetal");else{a=new qs;for(let c=0;c<o.length-1;c++)a.add(new ns(o[c],o[c+1]));t&&a.add(new ns(o[o.length-1],o[0]))}return new rs(a,s||Math.max(8,o.length*8),e,r,t)}function fr(i,e,t,n,s,r=24,o=0){let a=[];for(let l=0;l<=r;l++){let c=n+(s-n)*l/r;a.push(new C(i+Math.cos(c)*t,e+Math.sin(c)*t,o))}return a}function Mh(i,e,t,n,s,r=1,o=0,a=40){let l=[];for(let c=0;c<=a;c++){let h=c/a,f=s+r*h*n*Math.PI*2,u=t*Math.pow(1-h*.82,1.15);l.push(new C(i+Math.cos(f)*u,e+Math.sin(f)*u,o))}return l}function Kf(i,e,t=.02,n=12){let s=new gn(i.map(r=>new re(r[0],r[1])));return new yi(s,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:n})}function Ti(i,e,t=.02,n=16){return new yi(i,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:n})}function Gl(i){let e=new gn,t=i/2;return e.moveTo(0,-.95*t),e.bezierCurveTo(-1.05*t,-.15*t,-.95*t,.85*t,-.42*t,.85*t),e.bezierCurveTo(-.18*t,.85*t,-.02*t,.65*t,0,.5*t),e.bezierCurveTo(.02*t,.65*t,.18*t,.85*t,.42*t,.85*t),e.bezierCurveTo(.95*t,.85*t,1.05*t,-.15*t,0,-.95*t),e}function Qf(i,e=.45){let t=[];for(let n=0;n<10;n++){let s=Math.PI/2+n*Math.PI/5,r=n%2?i*e:i;t.push(new re(Math.cos(s)*r,Math.sin(s)*r))}return new gn(t)}function To(i,e){let t=new gn,n=i/2;return t.moveTo(-n,0),t.lineTo(-n*1.08,e),t.lineTo(-n*.5,e*.52),t.lineTo(0,e*1.2),t.lineTo(n*.5,e*.52),t.lineTo(n*1.08,e),t.lineTo(n,0),t.closePath(),t}function Yi(i,e,t,{flat:n=.55,center:s=new C,seg:r=28,radial:o=8,tipRound:a=.18,rootRound:l=.12}={}){let c=new vi(i,!1,"centripetal"),h=[],f=[],u=[],d=new C,p=new C,v=new C,m=new C,g=new C;for(let E=0;E<=r;E++){let x=E/r;c.getPointAt(x,d),c.getTangentAt(x,p),v.subVectors(d,s),m.copy(v).addScaledVector(p,-v.dot(p)).normalize(),g.crossVectors(p,m).normalize();let S=e+(t-e)*x;x>1-a&&(S*=Math.sqrt(Math.max(0,1-Math.pow((x-(1-a))/a,2)))),x<l&&(S*=.55+.45*Math.sin(x/l*Math.PI/2)),S=Math.max(S,5e-4);for(let b=0;b<=o;b++){let R=b/o*Math.PI*2;h.push(d.x+(Math.cos(R)*g.x*S+Math.sin(R)*m.x*S*n),d.y+(Math.cos(R)*g.y*S+Math.sin(R)*m.y*S*n),d.z+(Math.cos(R)*g.z*S+Math.sin(R)*m.z*S*n)),f.push(b/o,x)}}for(let E=0;E<r;E++)for(let x=0;x<o;x++){let S=E*(o+1)+x,b=S+o+1;u.push(S,b,S+1,b,b+1,S+1)}let y=new it;return y.setAttribute("position",new Ie(h,3)),y.setAttribute("uv",new Ie(f,2)),y.setIndex(u),y.computeVertexNormals(),y}function Ft(i,e,t=e){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*e,n.getY(s)*t);return i}var at={};function jf(){return at.gold=new gt({color:"#ffcf6a",metalness:1,roughness:.3}),at.goldDeep=new gt({color:"#f0b445",metalness:1,roughness:.32}),at.ruby=yh("#ff2d55"),at.sapphire=yh("#3d8bff"),at.emerald=yh("#2fe08a"),at.pearl=new rn({color:"#fff3ea",roughness:.35,sheen:1,sheenColor:"#ffd6f0",sheenRoughness:.4}),at}function yh(i){return new rn({color:i,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,emissive:i,emissiveIntensity:.15,ior:2.2,specularIntensity:1,envMapIntensity:1.4})}var Zi=new C(-.34,.36,-.87).normalize(),Nx=`
float hash3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise3(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}`;function ed(){let i=new dt;i.name="sky";let e={uZenith:{value:Mt("#1b2d7c")},uMid:{value:Mt("#4b40a8")},uHorizon:{value:Mt("#c86ca8")},uGlow:{value:Mt("#ffb46a")},uMoonDir:{value:Zi},uFlash:{value:0},uFlashColor:{value:new me(1,1,1)}},t=new Xe(new ht(1e3,48,24),new ut({uniforms:e,side:Yt,depthWrite:!1,vertexShader:`varying vec3 vDir;
            void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`uniform vec3 uZenith, uMid, uHorizon, uGlow, uMoonDir, uFlashColor; uniform float uFlash; varying vec3 vDir;
            ${Nx}
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
            }`}));t.renderOrder=-10,t.frustumCulled=!1,i.add(t);let n=un(42),s=1700,r=new Float32Array(s*3),o=new Float32Array(s*3);for(let d=0;d<s;d++){let p;do p=new C(n()*2-1,n()*2-1,n()*2-1);while(p.lengthSq()>1||p.lengthSq()<.01);p.normalize(),p.y<.03&&(p.y=Math.abs(p.y)+.03),p.normalize().multiplyScalar(940),r.set([p.x,p.y,p.z],d*3);let v=Math.pow(n(),3.2);o.set([.8+v*2.8,n()*6.28,.6+n()*2.2],d*3)}let a=new it;a.setAttribute("position",new Tt(r,3)),a.setAttribute("info",new Tt(o,3));let l={uTime:{value:0},uPx:{value:1},uFade:{value:1}},c=new Xn(a,new ut({uniforms:l,transparent:!0,depthWrite:!1,blending:Ct,vertexShader:`attribute vec3 info; uniform float uTime, uPx; varying float vA;
            void main() {
                vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww;
                float tw = 0.6 + 0.4 * sin(uTime * info.z + info.y);
                vA = tw * clamp(info.x / 2.0, 0.35, 1.0);
                gl_PointSize = info.x * uPx * (0.85 + 0.25 * tw);
            }`,fragmentShader:`uniform float uFade; varying float vA;
            void main() { vec2 q = gl_PointCoord - 0.5; float r = length(q) * 2.0;
                float a = smoothstep(1.0, 0.0, r); a *= a;
                gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA * a * uFade * 1.6, 1.0); }`}));c.renderOrder=-9,c.frustumCulled=!1,i.add(c);let h=Zi.clone().multiplyScalar(900),f=new Sn(new Mn({map:Yf(),color:new me(1.6,1.55,1.4),fog:!1,depthWrite:!1}));f.position.copy(h),f.scale.setScalar(64),f.renderOrder=-8;let u=new Sn(new Mn({map:$n(2.6),color:Mt("#8fa2ff"),fog:!1,depthWrite:!1,blending:Ct,opacity:.55}));return u.position.copy(h).multiplyScalar(.99),u.scale.setScalar(300),u.renderOrder=-8,i.add(u,f),{group:i,uniforms:e,update(d,p,v){i.position.copy(p.position),l.uTime.value=d,l.uPx.value=v}}}function td(i){let e=new ts,t=new Xe(new ht(60,32,16),new ut({side:Yt,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; void main() { vec3 d = normalize(vDir);
            vec3 c = mix(vec3(0.42, 0.24, 0.44), vec3(0.11, 0.15, 0.4), smoothstep(-0.05, 0.6, d.y));
            c = mix(c, vec3(0.12, 0.1, 0.12), smoothstep(0.0, -0.3, d.y));
            gl_FragColor = vec4(c, 1.0); }`}));e.add(t);let n=(o,a,l,c,h,f)=>{let u=new Xe(new It(o,a),new Nt({color:l,side:Ut}));u.position.set(c,h,f),u.lookAt(0,0,0),e.add(u)};n(40,10,new me(3.2,2,.8),0,5,-48),n(26,12,new me(2.4,1.5,.7),0,10,46),n(12,12,new me(1.3,1.45,2.4),-26,34,-26),n(16,22,new me(1.5,.55,1.1),-48,6,8),n(16,22,new me(.8,.6,1.8),48,6,-8),n(30,4,new me(3.5,3,2.2),0,40,0);let s=new sr(i),r=s.fromScene(e,.035);return s.dispose(),e.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),r}var Ye={halfW:3.1,spring:4.6,top:9.5,depth:2.4,towerX:7},zt=[2.5,4.3];function nd(i){let e=new dt;e.name="gate";let t=new gn;t.moveTo(-40,0),t.lineTo(-Ye.halfW,0),t.lineTo(-Ye.halfW,Ye.spring),t.absarc(0,Ye.spring,Ye.halfW,Math.PI,0,!0),t.lineTo(Ye.halfW,0),t.lineTo(40,0),t.lineTo(40,Ye.top),t.lineTo(-40,Ye.top),t.closePath();let n=new yi(t,{depth:Ye.depth,bevelEnabled:!1,curveSegments:40});n.translate(0,0,-Ye.depth/2),Ft(n,.25);let s=[n];s.push(Ft(Ve(new Ht(80,.32,Ye.depth+.36),{y:Ye.top-.1}),20,.1));for(let A=-39;A<=39;A+=2.2)Math.abs(Math.abs(A)-Ye.towerX)<2.9||s.push(Ft(Ve(new Ht(1.15,1.2,Ye.depth+.1),{x:A,y:Ye.top+.6}),.3,.3));let r=Kf([[-.55,0],[.55,0],[.75,1.1],[-.75,1.1]],.3,.04);s.push(Ft(Ve(r,{y:Ye.spring+Ye.halfW-.35,z:Ye.depth/2-.05}),.25));let o=[],a=[],l=[];for(let A of[-1,1]){let L=A*Ye.towerX,U=.5,F=2.1,I=13.6;o.push(Ft(Ve(new mt(F,F+.18,I,48,1),{x:L,y:I/2,z:U}),3.4,3.4)),o.push(Ft(Ve(new mt(F+.38,F,.7,48,1),{x:L,y:I+.35,z:U}),3.6,.2));for(let N=0;N<14;N++){let O=N/14*Math.PI*2;o.push(Ft(Ve(new Ht(.62,.95,.5),{x:L+Math.cos(O)*(F+.2),y:I+1.15,z:U+Math.sin(O)*(F+.2),ry:-O+Math.PI/2}),.2,.25))}a.push(Ft(Ve(new sn(F+.62,6.6,48,1,!0),{x:L,y:I+.75+3.3,z:U}),7,3.2)),l.push(Ve(new Zt(F+.58,.1,10,64),{x:L,y:I+.8,z:U,rx:Math.PI/2})),l.push(Ve(new ht(.24,20,14),{x:L,y:I+.75+6.6+.12,z:U})),l.push(Ve(new mt(.035,.035,1.5,8),{x:L,y:I+.75+6.6+.9,z:U}))}e.add(Gt(s,i.stone,{cast:!0,receive:!0})),e.add(Gt(o,i.stone,{cast:!0,receive:!0})),e.add(Gt(a,i.roofPurple,{cast:!0}));let c=new It(.62,1.24);for(let A of[-1,1])for(let L of[6.4,10.4]){let U=new Xe(c,i.window);U.position.set(A*Ye.towerX,L,.5+2.1+.04),e.add(U)}let h=(A,L)=>[new C(-A,0,L),...fr(0,Ye.spring,A,Math.PI,0,48,L),new C(A,0,L)];l.push(fn(h(Ye.halfW+.16,Ye.depth/2+.02),.13,{smooth:!1,seg:200,radial:12})),l.push(fn(h(Ye.halfW+.62,Ye.depth/2+.02),.06,{smooth:!1,seg:200,radial:8}));for(let A=0;A<=16;A++){let L=Math.PI-A/16*Math.PI,U=Ye.halfW+.39;l.push(Ve(new ht(.07,12,8),{x:Math.cos(L)*U,y:Ye.spring+Math.sin(L)*U,z:Ye.depth/2+.04}))}let f=Ti(To(.7,.42),.08,.02);l.push(Ve(f,{y:Ye.spring+Ye.halfW+.05,z:Ye.depth/2+.26})),e.add(Gt(l,at.gold,{cast:!0}));let u=new Xe(new ht(.09,16,12),at.ruby);u.position.set(0,Ye.spring+Ye.halfW+.2,Ye.depth/2+.36),e.add(u);let d=Fx(i);e.add(d.left.pivot,d.right.pivot);let p=new gn;p.moveTo(-Ye.halfW,0),p.lineTo(-Ye.halfW,Ye.spring),p.absarc(0,Ye.spring,Ye.halfW,Math.PI,0,!0),p.lineTo(Ye.halfW,0),p.closePath();let v=new Nt({color:new me(1,.8,.5),transparent:!0,depthWrite:!1,fog:!1}),m=new Xe(new ss(p,32),v);m.position.z=-.75,m.renderOrder=2,e.add(m);let g=new Mn({map:$n(1.8),color:Mt("#ffd08a"),blending:Ct,depthWrite:!1,fog:!1,opacity:0}),y=new Sn(g);y.position.set(0,3.8,-.9),y.scale.set(16,13,1),e.add(y);let E=new Nt({map:$f(),color:Mt("#ffe2a8"),blending:Ct,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),x=new Xe(new It(1,1),E);x.position.set(0,3.8,-.95),x.scale.setScalar(26),e.add(x);let S=[];for(let A of[-1,1]){let L=Ux(i);L.group.position.set(A*3.95,3.15,Ye.depth/2+.38),e.add(L.group);let U=new Si(Mt("#ffa64a"),9,15,1.5);U.position.set(A*3.95,3.25,Ye.depth/2+.75),e.add(U),S.push({...L,light:U,phase:A*1.7})}let b=[],R=[ur("#5b2fb0","#ff7eb3"),ur("#c2185b","#ffd54f")];for(let A of[-1,1]){let L=new It(.86,3.3,1,14);L.translate(0,-1.65,0);let U=new gt({map:R[A<0?0:1],side:Ut,alphaTest:.5,roughness:.75}),F=new Xe(L,U);F.position.set(A*4.42,8.95,Ye.depth/2+.06),F.castShadow=!0,e.add(F);let I=new Xe(new mt(.035,.035,1.1,8),at.gold);I.rotation.z=Math.PI/2,I.position.set(A*4.42,8.97,Ye.depth/2+.08),e.add(I),b.push({mesh:F,base:L.attributes.position.array.slice(),phase:A})}let _=new It(90,46,1,1);Ft(_,14,7);let T=new Xe(_,i.cobbles);return T.rotation.x=-Math.PI/2,T.position.set(0,.02,23-1.3),T.receiveShadow=!0,e.add(T),{group:e,doors:d,update(A){let L=Of((A-zt[0])/(zt[1]-zt[0])),U=A>zt[0]-.25&&A<zt[0]?Math.sin(A*70)*.004:0,F=L*1.78+U;d.left.pivot.rotation.y=F,d.right.pivot.rotation.y=-F;let I=.55+.12*Math.sin(A*3.1)+.06*Math.sin(A*7.3),N=Lt(zt[0]-.05,zt[0]+.45,A),O=Lt(zt[0]+.25,zt[0]+.75,A),H=Math.min(.75,I+N*.5)*(1-O);v.color.setRGB(1.8*H,1.3*H,.62*H),v.opacity=1-O,m.visible=O<1;let X=Jn(A,zt[0]-.1,zt[0]+.5,zt[0]+.7,zt[0]+1.2);g.opacity=.16+.08*Math.sin(A*2.3)*(1-N)+X*.3,y.visible=A<zt[0]+1.6,E.opacity=X*.45,x.rotation.z=A*.12,x.visible=X>.001;for(let k of S){let z=.9+.06*Math.sin(A*2.6+k.phase)+.04*Math.sin(A*4.3+k.phase*2);k.light.intensity=9*z,k.flame.scale.set(1,.9+.2*z,1),k.glowMat.opacity=.55*z}for(let k of b){let z=k.mesh.geometry.attributes.position;for(let D=0;D<z.count;D++){let Y=k.base[D*3+1],ee=k.base[D*3],ue=-Y/3.3;z.setZ(D,ue*.11*Math.sin(A*2.2+Y*2.1+k.phase)+ue*ue*.05*Math.sin(A*3.7+ee*3))}z.needsUpdate=!0,k.mesh.geometry.computeVertexNormals()}d.update(A)}}}function Ux(i){let e=new dt,t=[];t.push(fn([[0,-.05,-.38],[0,.18,-.36],[0,.4,-.18],[0,.42,0]],.035,{radial:8})),t.push(Ve(new sn(.23,.2,6),{y:.36})),t.push(Ve(new ht(.05,10,8),{y:.5})),t.push(Ve(new sn(.18,.14,6),{y:-.27,rx:Math.PI})),t.push(Ve(new mt(.2,.2,.04,6),{y:.25})),t.push(Ve(new mt(.19,.19,.04,6),{y:-.2}));for(let a=0;a<6;a++){let l=a/6*Math.PI*2;t.push(Ve(new mt(.014,.014,.46,6),{x:Math.cos(l)*.19,y:.02,z:Math.sin(l)*.19}))}e.add(Gt(t,at.gold,{cast:!0}));let n=new Xe(new mt(.175,.175,.44,6),i.lanternGlass);n.position.y=.02,e.add(n);let s=new Xe(new ht(.06,12,10),i.flame);s.scale.set(1,1.6,1),s.position.y=-.02,e.add(s);let r=new Mn({map:$n(2),color:Mt("#ffb05a"),blending:Ct,depthWrite:!1,opacity:.5}),o=new Sn(r);return o.scale.setScalar(2.2),o.position.y=.02,e.add(o),{group:e,flame:s,glowMat:r}}function Fx(i){let e=Ye.halfW-.05,t=Ye.halfW,n=Ye.spring,s=Math.sqrt(e*e-.01),r=new gn;r.moveTo(.05,.02),r.lineTo(Ye.halfW-.012,.02),r.lineTo(Ye.halfW-.012,n+s),r.absarc(t,n,e,Math.atan2(s,-.012),Math.PI,!1),r.lineTo(.05,.02);let o=new yi(r,{depth:.2,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,curveSegments:40}),a=.235,l=[],c=e-.11,h=Ye.halfW-.12,f=Math.sqrt(c*c-(t-h)*(t-h)),u=[new C(t-c,.13,a),new C(h,.13,a),new C(h,n+f,a),...fr(t,n,c,Math.atan2(f,h-t),Math.PI,40,a),new C(t-c,.13,a)];l.push(fn(u,.055,{smooth:!1,seg:160,radial:8}));let d=(R,_,T,A)=>[[R,_],[T,_],[T,A],[R,A],[R,_]].map(L=>new C(L[0],L[1],a));l.push(fn(d(.42,.55,2.72,2.55),.04,{smooth:!1,seg:80,radial:8})),l.push(fn(d(.3,2.82,2.84,2.95),.03,{smooth:!1,seg:60,radial:6}));let p=1.57,v=1.55;l.push(Ve(Ti(Gl(.62),.05,.02),{x:p,y:v,z:a-.01}));for(let R of[-1,1])l.push(fn(Mh(p+R*.72,v+.12,.42,1.25,R>0?Math.PI*.9:Math.PI*.1,R,a),.028,{seg:64,radial:6})),l.push(fn(Mh(p+R*.72,v-.42,.26,1.1,R>0?Math.PI*1.1:-Math.PI*.1,-R,a),.024,{seg:70,radial:6}));for(let R=.5;R<2.75;R+=.32)l.push(Ve(new ht(.045,10,8),{x:R,y:.33,z:a})),l.push(Ve(new ht(.04,10,8),{x:R,y:2.885,z:a+.02}));let m=1.62,g=4.6,y=(R,_)=>R>.32&&R<h-.12&&_>3.12&&Math.hypot(R-t,_-n)<c-.14;for(let R=0;R<13;R++){let _=-Math.PI*.32+R/12*Math.PI*1.64,T=.95;for(;y(m+Math.cos(_)*(T+.04),g+Math.sin(_)*(T+.04))&&T<3;)T+=.04;T<1.05||(l.push(fn([[m+Math.cos(_)*.95,g+Math.sin(_)*.95,a],[m+Math.cos(_)*T,g+Math.sin(_)*T,a]],.026,{smooth:!1,seg:4,radial:6})),l.push(Ve(new ht(.05,10,8),{x:m+Math.cos(_)*T,y:g+Math.sin(_)*T,z:a})))}l.push(Ve(new Zt(.2,.032,10,32),{x:2.68,y:2.32,z:a+.05})),l.push(Ve(new mt(.09,.09,.04,16),{x:2.68,y:2.55,z:a+.02,rx:Math.PI/2}));let E=Gt(l,at.gold).geometry,x=R=>{let _=new dt;_.position.set(R*Ye.halfW,0,-.42);let T=new dt;T.scale.x=R<0?1:-1;let A=new Xe(o,i.enamel);A.castShadow=A.receiveShadow=!0;let L=new Xe(E,at.gold);L.castShadow=!0,T.add(A,L),_.add(T);let U=new dt;U.position.set(R<0?m:-m,g,a);let F=[];F.push(new Zt(.8,.075,14,72)),F.push(new Zt(.66,.03,8,64));let I=R<0?[[[-.3,.36,.04],[0,.02,.04]],[[.3,.36,.04],[0,.02,.04]],[[0,.02,.04],[0,-.4,.04]]]:[[...fr(0,0,.36,.75,Math.PI*2-.12,40,.04),new C(.36,.04,.04),new C(.1,.04,.04)]];for(let X of I){F.push(fn(X,.062,{smooth:!1,seg:X.length*6,radial:10}));let k=X[0],z=X[X.length-1];for(let D of[k,z])F.push(Ve(new ht(.062,12,10),{x:D.x??D[0],y:D.y??D[1],z:.04}))}F.push(Ve(Ti(To(.66,.4),.07,.02),{y:.86,z:-.03})),U.add(Gt(F,at.gold,{cast:!0}));let N=new Xe(new mt(.72,.72,.05,64),i.enamelBright);N.rotation.x=Math.PI/2,N.position.z=-.005,U.add(N);let O=[[0,1.08,at.ruby,.075],[-.22,1,at.sapphire,.05],[.22,1,at.sapphire,.05]];for(let[X,k,z,D]of O){let Y=new Xe(new ht(D,16,12),z);Y.position.set(X,k,.07),U.add(Y)}for(let[X,k]of[[-.356,1.26],[0,1.34],[.356,1.26]]){let z=new Xe(new ht(.045,12,10),at.pearl);z.position.set(X,k,.035),U.add(z)}_.add(U);let H=new Sn(new Mn({map:hr(),color:Mt("#fff4d0"),blending:Ct,depthWrite:!1,opacity:0}));return H.position.set(R<0?m-.3:-m+.3,g+.5,a+.2),_.add(H),{pivot:_,glint:H}},S=x(-1),b=x(1);return{left:S,right:b,update(R){for(let[_,T]of[[S,1.35],[b,1.75]]){let A=Jn(R,T,T+.25,T+.3,T+.65);_.glint.material.opacity=A,_.glint.scale.setScalar(.2+A*1.3),_.glint.material.rotation=R*2,_.glint.position.x=(_===S?m:-m)+(R-T-.3)*1.4}}}}var wi={front:-63,terrace:1.6};function id(i){let e=new dt;e.name="castle";let t=wi.terrace,n=[],s=[],r=[],o=[],a=[],l=[],c=[],h=(D,Y,ee,ue,ge,De,$=0)=>n.push(Ft(Ve(new Ht(D,Y,ee),{x:ue,y:ge,z:De,ry:$}),Math.max(D,ee)/4,Y/4)),f=(D,Y,ee,ue,ge=1.5,De=.75,$=.7)=>{for(let j=D;j<=Y+1e-6;j+=ge)n.push(Ft(Ve(new Ht(De,De*1.1,$),{x:j,y:ee+De*.55,z:ue}),.2,.2))},u=(D,Y,ee,ue,ge=.9,De=1.8,$=1)=>{let j=Ve(new It(ge,De),{x:D,y:Y,z:ee,ry:ue});a.push(j),l.push($)};h(46,t,27,0,t/2,-76.5);let d=6;for(let D=0;D<d;D++){let Y=t*(d-D)/d;h(10,Y,.52,0,Y/2,wi.front+.26+D*.52),c.push(Ve(new Ht(3,.03,.5),{y:Y+.012,z:wi.front+.26+D*.52}))}c.push(Ve(new Ht(3,.03,5.2),{y:t+.012,z:wi.front-2.6}));for(let D of[-1,1]){let Y=D*5.3,ee=D*22.5,ue=wi.front+.15;o.push(fn([[Y,t+.8,ue],[ee,t+.8,ue]],.06,{smooth:!1,seg:4,radial:8})),o.push(fn([[Y,t+.2,ue],[ee,t+.2,ue]],.035,{smooth:!1,seg:4,radial:6}));for(let ge=Y;Math.abs(ge)<=22.6;ge+=D*.55)o.push(Ve(new mt(.035,.05,.6,8),{x:ge,y:t+.5,z:ue}));for(let ge of[Y,D*11,ee])o.push(Ve(new ht(.13,14,10),{x:ge,y:t+.95,z:ue}))}let p={w:18,h:10,d:10,z:-73},v=p.z+p.d/2;h(p.w,p.h,p.d,0,t+p.h/2,p.z),h(p.w+.5,.4,p.d+.5,0,t+p.h,p.z),f(-p.w/2+.4,p.w/2-.4,t+p.h+.2,v+.05);for(let D of[-1,1])for(let Y=p.z-p.d/2+.6;Y<v;Y+=1.5)n.push(Ft(Ve(new Ht(.7,.82,.75),{x:D*(p.w/2-.1),y:t+p.h+.61,z:Y}),.2,.2));let m=new gn;m.moveTo(-1.6,0),m.lineTo(-1.6,2.9),m.absarc(0,2.9,1.6,Math.PI,0,!0),m.lineTo(1.6,0),m.closePath();let g=new Xe(new ss(m,24),new Nt({color:new me(1.35,.92,.46)}));g.position.set(0,t,v+.02),e.add(g);let y=[new C(-1.72,0,0),...fr(0,2.9,1.72,Math.PI,0,40),new C(1.72,0,0)].map(D=>D.add(new C(0,t,v+.08)));o.push(fn(y,.13,{smooth:!1,seg:120,radial:10})),o.push(Ve(Ti(To(1.2,.7),.12,.03),{y:t+4.75,z:v+.02})),h(5.6,.3,1.6,0,t+5.6,v+.75),o.push(fn([[-2.7,t+6.5,v+1.5],[2.7,t+6.5,v+1.5]],.05,{smooth:!1,seg:4}));for(let D=-2.65;D<=2.66;D+=.33)o.push(Ve(new mt(.03,.04,.75,8),{x:D,y:t+6.12,z:v+1.5}));for(let D of[t+3,t+7.6])for(let Y of[-7.2,-5,5,7.2])u(Y,D,v+.03,0);for(let D of[-1.8,0,1.8])u(D,t+7.9,v+.03,0,.8,1.5,1.15);let E=[ur("#5b2fb0","#ff7eb3"),ur("#c2185b","#ffd54f")],x=[];for(let D of[-1,1]){let Y=new It(1.5,5.4,1,14);Y.translate(0,-2.7,0);let ee=new Xe(Y,new gt({map:E[D<0?0:1],side:Ut,alphaTest:.5,roughness:.75}));ee.position.set(D*3.4,t+9.6,v+.08),e.add(ee),o.push(fn([[D*3.4-.95,t+9.62,v+.12],[D*3.4+.95,t+9.62,v+.12]],.05,{smooth:!1,seg:4})),x.push({mesh:ee,base:Y.attributes.position.array.slice(),phase:D*1.3})}let S={w:12,h:5,d:8,z:-74.5};h(S.w,S.h,S.d,0,t+p.h+S.h/2,S.z),f(-S.w/2+.4,S.w/2-.4,t+p.h+S.h,S.z+S.d/2+.05);for(let D of[-3.6,-1.2,1.2,3.6])u(D,t+p.h+2.4,S.z+S.d/2+.03,0,.8,1.6);let b=[],R=(D,Y,ee,ue,ge,De,$,j)=>{let he=ue;n.push(Ft(Ve(new mt(ee,ee*1.05,he,40,1),{x:D,y:he/2,z:Y}),2*Math.PI*ee/4,he/4)),n.push(Ft(Ve(new mt(ee+.35,ee,.6,40,1),{x:D,y:he+.3,z:Y}),2*Math.PI*ee/4,.15));let He=Math.max(8,Math.round(ee*6));for(let Fe=0;Fe<He;Fe++){let Ke=Fe/He*Math.PI*2;n.push(Ft(Ve(new Ht(.55,.8,.45),{x:D+Math.sin(Ke)*(ee+.18),y:he+.95,z:Y+Math.cos(Ke)*(ee+.18),ry:Ke}),.15,.2))}De.push(Ft(Ve(new sn(ee+.55,ge,40,1,!0),{x:D,y:he+.65+ge/2,z:Y}),Math.round(ee*2.4),ge/2.2)),o.push(Ve(new Zt(ee+.52,.08,8,56),{x:D,y:he+.68,z:Y,rx:Math.PI/2}));let _e=he+.65+ge;o.push(Ve(new ht(.2,16,12),{x:D,y:_e+.1,z:Y})),o.push(Ve(new sn(.07,.5,10),{x:D,y:_e+.5,z:Y})),o.push(Ve(new mt(.03,.03,1.8,6),{x:D,y:_e+1,z:Y})),b.push({x:D,y:_e+1.75,z:Y,color:$,len:1.1+ee*.25});for(let[Fe,Ke]of j)for(let ie of Ke)u(D+Math.sin(ie)*(ee+.03),Fe,Y+Math.cos(ie)*(ee+.03),ie,.62,1.25)},_=Math.PI/3,T=.6;R(0,-74.5,2.7,t+p.h+S.h+10,11,r,"#FFD54F",[[t+p.h+S.h+3,[-T,0,T]],[t+p.h+S.h+7,[-T,0,T]]]);for(let D of[-1,1]){R(D*9.6,-68.2,2.1,t+14.5,7.5,s,"#ff7eb3",[[t+4,[0,D*_]],[t+8.5,[0]],[t+12,[0,D*_]]]),R(D*15.6,-72.5,2.5,t+11.5,8,r,"#FFD54F",[[t+4.5,[D*.3,D*1]],[t+8.5,[D*.3]]]),R(D*6.2,-80.5,2.2,t+20,9,s,"#ff7eb3",[[t+14,[D*.5]],[t+17.5,[0,D*.8]]]),R(D*21.5,-71.5,1.5,t+8,4.5,s,"#9fd4ff",[[t+5,[D*.4]]]),h(5,8.5,4,D*12.6,t+4.25,-70.3),f(D>0?10.6:-14.6,D>0?14.6:-10.6,t+8.5,-68.25);for(let ee of[D*11.6,D*13.6])u(ee,t+4.5,-68.27,0,.7,1.4);h(5,6,3,D*18.6,t+3,-71.8),f(D>0?16.8:-20.4,D>0?20.4:-16.8,t+6,-70.25);let Y=(ee,ue,ge,De,$,j,he)=>{n.push(Ft(Ve(new mt(De,De*.6,$,24,1),{x:ee,y:ue+$/2,z:ge}),1.2,$/4)),he.push(Ft(Ve(new sn(De+.25,j,24,1,!0),{x:ee,y:ue+$+j/2,z:ge}),3,j/2.2)),o.push(Ve(new Zt(De+.22,.05,6,32),{x:ee,y:ue+$+.02,z:ge,rx:Math.PI/2})),o.push(Ve(new ht(.11,12,8),{x:ee,y:ue+$+j+.06,z:ge}))};Y(D*8.4,t+p.h-1.2,v-.3,.8,3.4,2.6,r),Y(D*5.6,t+p.h+S.h-.9,S.z+S.d/2-.2,.62,2.6,2,s)}e.add(Gt(n,i.castleStone,{cast:!0,receive:!0})),e.add(Gt(s,i.roofPink,{cast:!0})),e.add(Gt(r,i.roofPurple,{cast:!0})),e.add(Gt(o,at.gold,{cast:!0})),e.add(Gt(c,i.carpet,{receive:!0}));let A=Gt(a,i.window).geometry,L=new Float32Array(A.attributes.position.count*3),U=0;l.forEach((D,Y)=>{let ee=D*(.75+.5*(Y*.6180339%1));for(let ue=0;ue<6;ue++,U++)L.set([ee,ee*.92,ee*.85],U*3)}),A.setAttribute("color",new Tt(L,3));let F=new Xe(A,i.windowLit);e.add(F);let I=[];for(let D of b){let Y=new It(D.len,D.len*.55,10,2);Y.translate(D.len/2,0,0),I.push(Y)}let N=Gt(I,new gt({vertexColors:!0,side:Ut,roughness:.7}),{cast:!0}),O=N.geometry.attributes.position,H=120,X=new Float32Array(O.count*6),k=new Float32Array(O.count*3);b.forEach((D,Y)=>{let ee=new me(D.color);for(let ue=Y*H;ue<(Y+1)*H;ue++)X.set([O.getX(ue),O.getY(ue),D.x,D.y,D.z,D.len],ue*6),k.set([ee.r,ee.g,ee.b],ue*3)}),N.geometry.setAttribute("color",new Tt(k,3)),e.add(N);let z=new Sn(new Mn({map:$n(2),color:Mt("#ffb85c"),blending:Ct,depthWrite:!1,opacity:.28}));return z.position.set(0,t+2.4,v+1.2),z.scale.set(8,6,1),e.add(z),{group:e,update(D){for(let Y=0;Y<O.count;Y++){let ee=X[Y*6],ue=X[Y*6+1],ge=X[Y*6+2],De=X[Y*6+3],$=X[Y*6+4],j=X[Y*6+5],he=ee/j,He=Math.sin(ee*4.2-D*7+ge)*.16*he;O.setXYZ(Y,ge+ee*Math.cos(He*.6),De+ue-he*he*.08,$+He)}O.needsUpdate=!0,N.geometry.computeVertexNormals();for(let Y of x){let ee=Y.mesh.geometry.attributes.position;for(let ue=0;ue<ee.count;ue++){let ge=Y.base[ue*3+1],De=Y.base[ue*3],$=-ge/5.4;ee.setZ(ue,$*.18*Math.sin(D*1.8+ge*1.4+Y.phase)+$*$*.08*Math.sin(D*3.1+De*2.5))}ee.needsUpdate=!0,Y.mesh.geometry.computeVertexNormals()}}}}var wo=new C;function Fn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;wo.copy(e),wo[n]=0,wo.normalize();let c=.5*o/(o+a),h=1-wo.angleTo(i)/l;return Math.sign(wo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var kl=class i extends Ht{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,h=new C(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,v=new C,m=.5/o;for(let g=0,y=0;g<f.length;g+=3,y+=2)switch(l.fromArray(f,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[g+0]=h.x*Math.sign(l.x)+c.x*r,f[g+1]=h.y*Math.sign(l.y)+c.y*r,f[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:v.set(1,0,0),d[y+0]=Fn(v,c,"z","y",r,n),d[y+1]=1-Fn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[y+0]=1-Fn(v,c,"z","y",r,n),d[y+1]=1-Fn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[y+0]=1-Fn(v,c,"x","z",r,e),d[y+1]=Fn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[y+0]=1-Fn(v,c,"x","z",r,e),d[y+1]=1-Fn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[y+0]=1-Fn(v,c,"x","y",r,e),d[y+1]=1-Fn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[y+0]=Fn(v,c,"x","y",r,e),d[y+1]=1-Fn(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Wl=Array.from({length:10},(i,e)=>-5-6*e),Bx=2.3;function sd(i,e){let t=Math.max(0,Math.abs(i)-24)+Math.max(0,-96-e)*.9+Math.max(0,e-34)*.6,n=7+5*Math.sin(i*.031+e*.017)*Math.cos(e*.043-i*.012)+3*Math.sin(i*.09+1.3)*Math.sin(e*.07);return(1-Math.exp(-t/26))*n}function rd(i){let e=new dt;e.name="grounds";let t=un(77),n=new It(520,520,110,110);n.rotateX(-Math.PI/2);let s=n.attributes.position;for(let K=0;K<s.count;K++)s.setY(K,sd(s.getX(K),s.getZ(K)));n.computeVertexNormals(),Ft(n,520/7);let r=new Xe(n,i.grass);r.receiveShadow=!0,e.add(r);let o=-1.2-wi.front,a=(-1.2+wi.front)/2,l=new Ht(3,.04,o);Ft(l,1,o/3);let c=new Xe(l,i.carpet);c.position.set(0,.03,a),c.receiveShadow=!0,e.add(c);let h=[];for(let K of[-1,1])h.push(Ve(new Ht(.09,.05,o),{x:K*1.52,y:.033,z:a}));e.add(Gt(h,new gt({color:"#e3ad45",metalness:.35,roughness:.55}),{receive:!0}));let f=Wl.length*2,u=new ct,d=new Xt,p=new C,v=new C(1,1,1),m=new Ot(new mt(.05,.07,2.3,10),i.iron,f),g=new Ot(new mt(.15,.2,.26,12),i.iron,f),y=new Ot(new mt(.2,.08,.16,16,1,!0),at.goldDouble,f),E=new Ot(new sn(.12,.22,12),at.gold,f),x=new Nt({color:new me(1.75,1.02,.45)}),S=new Ot(new ht(.17,18,12),x,f);m.castShadow=g.castShadow=y.castShadow=!0;let b=[];Wl.forEach((K,ae)=>[-1,1].forEach((Se,Te)=>{let Ae=ae*2+Te,Be=Se*Bx;b.push(new C(Be,2.5,K)),m.setMatrixAt(Ae,u.compose(p.set(Be,1.15,K),d,v)),g.setMatrixAt(Ae,u.compose(p.set(Be,.13,K),d,v)),y.setMatrixAt(Ae,u.compose(p.set(Be,2.36,K),d,v)),E.setMatrixAt(Ae,u.compose(p.set(Be,2.78,K),d,v)),S.setMatrixAt(Ae,u.compose(p.set(Be,2.52,K),d,v)),S.setColorAt(Ae,new me(1,1,1))})),S.name="orbs",e.add(m,g,y,E,S);let R=new it;R.setAttribute("position",new Ie(b.flatMap(K=>[K.x,2.52,K.z]),3)),R.setAttribute("bright",new Ie(new Float32Array(f),1));let _={uMap:{value:$n(2.4)},uScale:{value:170},uColor:{value:Mt("#ffbe6a")}},T=new Xn(R,new ut({uniforms:_,transparent:!0,depthWrite:!1,blending:Ct,vertexShader:`attribute float bright; uniform float uScale; varying float vB;
            void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
                vB = bright * smoothstep(1.0, 5.0, -mv.z); gl_PointSize = min(uScale * 1.7 / -mv.z, 140.0); }`,fragmentShader:`uniform sampler2D uMap; uniform vec3 uColor; varying float vB;
            void main() { float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(uColor * a * vB * 0.45, 1.0); }`}));T.frustumCulled=!1,T.name="halos",e.add(T);let A=[];for(let K of b)A.push(Ve(new It(4.2,4.2),{x:K.x,y:.06,z:K.z,rx:-Math.PI/2}));let L=Gt(A,i.pool).geometry,U=new Float32Array(L.attributes.position.count*3);L.setAttribute("color",new Tt(U,3));let F=new Xe(L,i.pool);F.renderOrder=1,F.name="pools",e.add(F);let I=[];for(let K=0;K<Wl.length-1;K++)for(let ae of[-1,1])I.push([ae*3.2,Wl[K]-3]);let N=new Ot(new mt(.34,.26,.5,16),i.pot,I.length),O=new Ot(new Zt(.34,.04,8,24),at.gold,I.length),H=new Ot(new mt(.05,.06,.9,8),i.trunk,I.length),X=new Ot(new Mi(.5,3),i.leaf,I.length*2);N.castShadow=H.castShadow=X.castShadow=!0,I.forEach(([K,ae],Se)=>{N.setMatrixAt(Se,u.compose(p.set(K,.25,ae),d,v)),O.setMatrixAt(Se,u.compose(p.set(K,.5,ae),d.setFromEuler(new hn(Math.PI/2,0,0)),v)),d.identity(),H.setMatrixAt(Se,u.compose(p.set(K,.9,ae),d,v)),X.setMatrixAt(Se*2,u.compose(p.set(K,1.55,ae),d,new C(1,1,1))),X.setMatrixAt(Se*2+1,u.compose(p.set(K,2.25,ae),d,new C(.6,.6,.6)))}),e.add(N,O,H,X);let k=[];for(let K=-3;K>wi.front+3;K-=6.5)for(let ae of[-1,1])k.push([ae*4.7,K-2.6]);let z=new Ot(new kl(.95,.95,5.2,3,.3),i.hedge,k.length);z.castShadow=z.receiveShadow=!0,k.forEach(([K,ae],Se)=>z.setMatrixAt(Se,u.compose(p.set(K,.47,ae),d,v))),e.add(z);let D=[],Y=["#ff6fa5","#ffffff","#ffd54f","#c9a4ff","#ff9ec7","#7fd4ff"].map(K=>new me(K));for(let[K,ae]of k)for(let Se=0;Se<16;Se++)D.push([K-Math.sign(K)*(.68+t()*.3),ae+(t()-.5)*5,Y[Math.floor(t()*Y.length)]]);let ee=new Ot(new Mi(.075,0),i.flower,D.length);D.forEach(([K,ae,Se],Te)=>{ee.setMatrixAt(Te,u.compose(p.set(K,.12+t()*.1,ae),d,new C(1,.7,1))),ee.setColorAt(Te,Se)}),e.add(ee);let ue=[],ge=(K,ae,Se,Te,Ae)=>{for(let Be=0;Be<K;Be++)ue.push([(t()<.5?-1:1)*(ae+t()*(Se-ae)),Te+t()*(Ae-Te),t()])};ge(46,9,60,-58,-6),ge(26,26,70,-110,-60),ge(22,12,55,6,40);let De=ue.filter(K=>K[2]<.55),$=ue.filter(K=>K[2]>=.55),j=new mt(.18,.28,2.4,8),he=Gt([Ve(new Mi(1.6,2),{y:3.4}),Ve(new Mi(1.2,2),{x:.9,y:2.9,z:.3}),Ve(new Mi(1.15,2),{x:-.8,y:3,z:-.2})],i.tree).geometry,He=Gt([Ve(new sn(1.7,2.6,12),{y:2.2}),Ve(new sn(1.35,2.3,12),{y:3.6}),Ve(new sn(.95,2,12),{y:4.9})],i.pine).geometry,_e=new Ot(j,i.trunk,ue.length),Fe=new Ot(he,i.tree,De.length),Ke=new Ot(He,i.pine,$.length);_e.castShadow=Fe.castShadow=Ke.castShadow=!0;let ie=0,ce=0;ue.forEach(([K,ae,Se],Te)=>{let Ae=.8+Se*7.31%1*.7,Be=sd(K,ae);_e.setMatrixAt(Te,u.compose(p.set(K,Be+1.1*Ae,ae),d,new C(Ae,Ae,Ae)));let B=new Xt().setFromEuler(new hn(0,Se*20,0));Se<.55?Fe.setMatrixAt(ie++,u.compose(p.set(K,Be,ae),B,new C(Ae,Ae,Ae))):Ke.setMatrixAt(ce++,u.compose(p.set(K,Be,ae),B,new C(Ae,Ae*1.15,Ae)))}),e.add(_e,Fe,Ke);let fe=(K,ae,Se,Te,Ae)=>{let B=[],rt=[],je=un(Te),P=[je()*6,je()*6,je()*6];for(let W=0;W<=220;W++){let q=W/220*Math.PI*2,te=ae+(Se-ae)*(.5+.25*Math.sin(q*3+P[0])+.15*Math.sin(q*7+P[1])+.1*Math.sin(q*17+P[2])),de=Math.sin(q)*K,pe=Math.cos(q)*K-60;B.push(de,-5,pe,de,te,pe)}for(let W=0;W<220;W++){let q=W*2;rt.push(q,q+1,q+2,q+1,q+3,q+2)}let M=new it;return M.setAttribute("position",new Ie(B,3)),M.setIndex(rt),M.computeVertexNormals(),new Xe(M,new Kr({color:Ae,side:Ut}))};return e.add(fe(230,18,52,3,"#4c4290"),fe(330,40,90,8,"#3e357e")),{group:e,update(K){let ae=R.attributes.bright,Se=new me;for(let Te=0;Te<f;Te++){let Ae=Te>>1,B=.12+.88*Lt(2.85+Ae*.16,3.25+Ae*.16,K)*(.96+.04*Math.sin(K*2.4+Te*1.7));ae.setX(Te,B),S.setColorAt(Te,Se.setScalar(.25+.75*B));for(let rt=0;rt<6;rt++)U.set([B,B,B],(Te*6+rt)*3)}ae.needsUpdate=!0,S.instanceColor.needsUpdate=!0,L.attributes.color.needsUpdate=!0}}}var Ao={googy:{hair:"#F2B53A",hairLight:"#FFE08A",dress:"#FF7EB3",dressLight:"#FFA6CB",dressDark:"#E85C98",shoes:"#E0407F",cape:"#C2185B",capeSheen:"#ff8fc0",lining:"#ff6fae"},yoovy:{hair:"#EDC66B",hairLight:"#FFF0C0",shirt:"#8E6CEF",shirtDark:"#7353D6",skirt:"#4A7BD0",skirtDark:"#3A64B0",shoes:"#8E6CEF",cape:"#5E35B1",capeSheen:"#b79bff",lining:"#9b7bff"}},od="#FFDBC4",Ox=new C(0,-1,0),Hx={googy:{R:.25,headY:.735,headScale:[1,.97,.96],shoulder:[.122,.47],arm:.185,armR:.03,hand:.041,hip:[.058,.24],leg:.16,legR:.037,cape:{topY:.495,botY:.06,topR:.118,botR:.3,span:[1.72,1.5]},crown:{r:.135,h:.115,tilt:-.14,y:.225}},yoovy:{R:.24,headY:.905,headScale:[.96,1.02,.95],shoulder:[.126,.632],arm:.215,armR:.03,hand:.039,hip:[.06,.345],leg:.25,legR:.037,cape:{topY:.655,botY:.065,topR:.122,botR:.31,span:[1.72,1.5]},crown:{r:.13,h:.11,tilt:.1,y:.23}}};function an(i,e="#ffffff",t=.72){return new rn({color:i,roughness:t,sheen:.5,sheenColor:e,sheenRoughness:.5})}function Sh(i,e=48){let t=new $r(i.slice().reverse().map(([n,s])=>new re(n,s)),e);return t.rotateY(Math.PI),t}var wt=(i,e,t=!0)=>{let n=new Xe(i,e);return n.castShadow=t,n},Bn=(i,e,t,n,s,r=1,o=1,a=1,l=20)=>{let c=wt(new ht(i,l,Math.max(8,l*.7|0)),e);return c.position.set(t,n,s),c.scale.set(r,o,a),c},li=(i,e,t=1)=>new C(Math.sin(i)*Math.cos(e)*t,Math.sin(e)*t,Math.cos(i)*Math.cos(e)*t);function ad(i,e,t){let n=new ht(1,96,64);n.rotateY(-Math.PI/2);let s=n.attributes.position,r=new C;for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o).normalize();let a=Lt(-.1,.42,r.z),l=cr(t,e(r.x),a),c=Lt(l-.03,l+.03,r.y),h=cr(.9,i,c);s.setXYZ(o,r.x*h,r.y*h,r.z*h)}return n.computeVertexNormals(),n}var ld=i=>e=>{if(e<=i[0][0])return i[0][1];for(let t=0;t<i.length-1;t++){let[n,s]=i[t],[r,o]=i[t+1];if(e<=r){let a=(e-n)/(r-n),l=a*a*(3-2*a);return s+(o-s)*l}}return i[i.length-1][1]},Ro=(i,e,t)=>{let n=Math.sqrt(Math.max(.02,1-i*i-e*e));return new C(i,e,n).normalize().multiplyScalar(t)};function zx(){let i=[],e=[[-1.05,-.12],[-.86,.2],[-.55,.42],[-.2,.46],[.15,.44],[.45,.55],[.64,.68],[.84,.36],[1.05,-.12]];i.push(ad(1.07,ld(e.map(([s,r])=>[s,r+.05])),-.5));let t=li(.62,1.12,1);[[-.92,.16],[-.72,.33],[-.48,.43],[-.24,.47],[0,.46],[.22,.46],[.42,.53]].forEach(([s,r],o)=>{let a=Ro(s,r,1.075),l=t.clone().lerp(a,.55).normalize().multiplyScalar(1.12),c=t.clone().add(new C(-.04*o,.02,0)).normalize().multiplyScalar(.98);i.push(Yi([c,l,a,Ro(s*1.02,r-.06,1.06)],.15,.1,{flat:.42,seg:22,tipRound:.35}))});for(let[s,r]of[[.84,.36],[.98,.1]]){let o=Ro(s,r,1.07),a=t.clone().lerp(o,.5).normalize().multiplyScalar(1.1);i.push(Yi([t.clone().multiplyScalar(.98),a,o,Ro(s+.02,r-.08,1.06)],.13,.1,{flat:.42,seg:18,tipRound:.35}))}for(let s=0;s<=14;s++){let r=Math.PI*(.5+s/14),o=Math.sin(r),a=Math.cos(r),l=[li(r,.8,.95),li(r,.28,1.075),li(r,-.3,1.075),new C(o*1.04,-.95,a*.98),new C(o*1,-1.42,a*.92),new C(o*.97,-1.78,a*.88)];i.push(Yi(l,.24,.18,{flat:.5,seg:30,tipRound:.22}))}for(let s of[-1,1])for(let[r,o]of[[1.2,.2],[1.38,.17]]){let a=s*r,l=Math.sin(a),c=Math.cos(a),h=[li(a,.6,.97),li(a,.08,1.08),new C(l*1.06,-.5,c*1),new C(l*1,-1.05,.46),new C(l*.96,-1.6,.44)];i.push(Yi(h,o,o*.8,{flat:.5,seg:28,tipRound:.4}))}return qi(i,!1)}function Vx(){let i=[],e=[[-1.05,-.05],[-.8,.5],[-.42,.38],[.12,.45],[.62,.7],[.86,.42],[1.05,-.05]];i.push(ad(1.09,ld(e.map(([r,o])=>[r,o+.06])),-.42));let t=li(.68,1.05,1),n=[[[.5,.86,1.12],[.3,.62,1.14],[.14,.43,1.09],[.04,.42,1.07]],[[.3,.92,1.12],[-.05,.72,1.15],[-.36,.38,1.1],[-.48,.38,1.07]],[[.1,.96,1.12],[-.42,.82,1.15],[-.78,.52,1.12],[-.92,.22,1.09]],[[.7,.8,1.1],[.84,.5,1.12],[.94,.22,1.1],[.98,.02,1.08]]];for(let r of n){let o=[t.clone().multiplyScalar(.98),...r.map(([a,l,c])=>Ro(a,l,c))];i.push(Yi(o,.19,.13,{flat:.45,seg:26,tipRound:.35}))}let s=(r,o,a,l,c)=>{let h=Math.sin(r),f=Math.cos(r),u=[li(r,.82,.96),li(r,.3,1.09)];for(let p=1;p<=5;p++){let v=-.25*p*o,m=1.1+a*Math.sin(p*1.7+l)+c*p*.02;u.push(new C(h*m,v+.1,f*m*(p>2?.96:1)))}let d=u[u.length-1];return u.push(new C(d.x*1.04,d.y-.07,d.z*1.04)),u.push(new C(d.x*1.1,d.y-.04,d.z*1.1)),u};for(let r=0;r<=15;r++){let o=Math.PI*(.47+1.06*r/15);i.push(Yi(s(o,1.02+.04*Math.sin(r*2.3),.07,r*1.3,1),.22,.17,{flat:.55,seg:34,tipRound:.2}))}for(let r of[-1,1])for(let[o,a,l]of[[1.15,.19,.4],[1.33,.2,2.1]]){let c=r*o,h=s(c,1,.08,l,1);h.forEach((f,u)=>{u>2&&(f.z=Math.max(f.z,.3+.02*u))}),i.push(Yi(h,a,a*.8,{flat:.55,seg:32,tipRound:.22}))}return qi(i,!1)}function Gx(){let i=new ht(1.004,56,40,Math.PI/2-1.3,2.6,.38,2),e=i.attributes.position,t=i.attributes.uv;for(let n=0;n<e.count;n++)t.setXY(n,.5+e.getX(n)/2,.5+e.getY(n)/2);return i}function kx(i,e){let t=new dt,n=150,s=[],r=[];for(let f=0;f<=n;f++){let u=f/n*Math.PI*2,d=Math.pow(.5+.5*Math.cos(5*u),5),p=i.h*(.5+.78*d);s.push(Math.sin(u)*i.r,0,Math.cos(u)*i.r,Math.sin(u)*i.r*1.13,p,Math.cos(u)*i.r*1.13)}for(let f=0;f<n;f++){let u=f*2;r.push(u,u+2,u+1,u+1,u+2,u+3)}let o=new it;o.setAttribute("position",new Ie(s,3)),o.setIndex(r),o.computeVertexNormals(),t.add(wt(o,at.goldDouble));let a=(f,u,d)=>{let p=wt(new Zt(u,d,8,64),at.gold);p.rotation.x=Math.PI/2,p.position.y=f,t.add(p)};a(.004,i.r*1.01,.011),a(i.h*.42,i.r*1.075,.006);let l=[],c={ruby:[],sapphire:[],emerald:[]};for(let f=0;f<5;f++){let u=f/5*Math.PI*2;l.push(new ht(.014,12,9).translate(Math.sin(u)*i.r*1.13,i.h*1.3,Math.cos(u)*i.r*1.13));let d=new ht(f===0?.02:.014,14,10);d.scale(1,1,.6),d.rotateY(u),d.translate(Math.sin(u)*i.r*1.07,i.h*.22,Math.cos(u)*i.r*1.07),c[f===0?"ruby":f%2?"sapphire":"emerald"].push(d)}t.add(wt(qi(l),at.pearl,!1));for(let f in c)t.add(wt(qi(c[f]),at[f],!1));let h=wt(new ht(i.r*.98,24,12,0,Math.PI*2,0,Math.PI/2),an(e,"#ffffff",.8));return h.scale.y=.75,h.position.y=i.h*.25,t.add(h),t.add(Bn(.016,at.gold,0,i.h*.25+i.r*.74,0,1,1,1,12)),t}function Wx(i,e,t){let r=new It(1,1,26,16),o=r.attributes.position,a=(F,I,N)=>{for(let O=0;O<=16;O++){let H=O/16,X=Math.pow(H,1.5),k=cr(i.span[0],i.span[1],H);for(let z=0;z<=26;z++){let D=(z/26-.5)*2*k,Y=cr(i.topR,i.botR,Math.pow(H,.8))+.013*H*Math.sin(D*6+.6),ee=Math.sin(D)*Y,ue=-Math.cos(D)*Y-.012,ge=cr(i.topY,i.botY,H);ue-=X*(I*.08+.016*Math.sin(F*4.1+D*1.7-H*2.6)+N*.12),ee+=X*.011*Math.sin(F*3.3+H*2.2+D),ge+=X*N*.06,o.setXYZ(O*27+z,ee,ge,ue)}}o.needsUpdate=!0,r.computeVertexNormals()};if(a(0,0,0),r.attributes.normal.getZ(229)>0){let F=r.index.array;for(let I=0;I<F.length;I+=3){let N=F[I];F[I]=F[I+2],F[I+2]=N}r.computeVertexNormals()}let c=wt(r,an(e.cape,e.capeSheen,.78));c.material.sheenRoughness=.32;let h=wt(r,new rn({color:e.lining,roughness:.35,metalness:.1,sheen:.6,sheenColor:"#ffffff",sheenRoughness:.3,side:Yt})),f=new dt;f.add(c,h);let u=new ht(1,14,10),d=53,p=new Ot(u,t.ermine,d),v=new Ot(u,t.ermine,15),m=new Ot(new ht(1,10,8),t.ermineTail,6);p.castShadow=v.castShadow=!0,f.add(p,v,m);let g=new ct,y=new Xt,E=new C,x=new C,S=new C,b=(F,I,N)=>N.fromBufferAttribute(o,F*27+I),R=F=>{for(let I=0;I<d;I++){let N=I/2,O=Math.floor(N),H=Math.min(26,O+1);b(16,O,E),b(16,H,x),E.lerp(x,N-O),E.y+=.008,S.set(.032,.028,.032).multiplyScalar(1+.16*Math.sin(I*2.7)),p.setMatrixAt(I,g.compose(E,y.identity(),S))}for(let I=0;I<15;I++){let N=Math.round(I/14*26);b(0,N,E),E.multiplyScalar(1.02),E.y+=.006,S.setScalar(.03+.004*Math.sin(I*1.9)),v.setMatrixAt(I,g.compose(E,y.identity(),S))}for(let I=0;I<6;I++){let N=Math.round((I+.5)/6*26);b(16,N,E),E.y+=.004;let O=E.clone().setY(0).normalize();E.addScaledVector(O,.022),S.set(.008,.016,.008),m.setMatrixAt(I,g.compose(E,y.identity(),S))}p.instanceMatrix.needsUpdate=v.instanceMatrix.needsUpdate=m.instanceMatrix.needsUpdate=!0};R(0);let _=new C,T=new C;b(0,0,_),b(0,26,T);let A=new C(0,i.topY-.03,i.topR+.035),L=wt(new rs(new vi([_,A,T]),24,.007,6),at.goldDeep);f.add(L);let U=Bn(.02,t.brooch,0,i.topY-.028,i.topR+.045,1,1,.5,14);return f.add(U),{group:f,update(F,I,N){a(F,I,N),R(F)}}}function bh(i,e,t){let n=Ao[i],s=Hx[i],r=i==="yoovy",o=new dt,a=new dt;o.add(a);let l=t.skin;if(r){let N=an(n.shirt,"#c9b6ff"),O=an(n.skirt,"#a9c6ff");a.add(wt(Sh([[0,.69],[.05,.69],[.088,.672],[.116,.642],[.124,.6],[.12,.54],[.115,.5],[.116,.47],[0,.47]]),N));let H=Sh([[0,.5],[.118,.5],[.15,.45],[.178,.395],[.198,.35],[.204,.335],[.19,.33],[0,.33]],96),X=H.attributes.position;for(let Y=0;Y<X.count;Y++){let ee=X.getX(Y),ue=X.getY(Y),ge=X.getZ(Y),De=Lt(.5,.34,ue),$=Math.atan2(ee,ge),j=1+.07*De*(Math.abs(Math.sin($*8))-.5);X.setX(Y,ee*j),X.setZ(Y,ge*j)}H.computeVertexNormals(),a.add(wt(H,O));let k=wt(new Zt(.119,.013,8,48),an(n.shirtDark,"#c9b6ff"));k.rotation.x=Math.PI/2,k.position.y=.497,a.add(k);let z=wt(new Zt(.052,.012,8,32),an(n.shirtDark,"#c9b6ff"));z.rotation.x=Math.PI/2,z.position.y=.688,a.add(z);for(let Y of[-1,1])a.add(Bn(.062,an(n.shirtDark,"#c9b6ff"),Y*.112,.636,0,1,.82,.92));let D=wt(Ti(Gl(.07),.012,.006),t.brooch);D.position.set(0,.585,.118),a.add(D)}else{let N=an(n.dress,"#ffc2dc"),O=an(n.dressLight,"#ffe0ee");a.add(wt(Sh([[0,.53],[.05,.53],[.086,.512],[.11,.486],[.118,.455],[.112,.405],[.118,.372],[.15,.322],[.186,.27],[.206,.236],[.212,.224],[.19,.218],[0,.218]]),N));let H=[];for(let z=0;z<22;z++){let D=z/22*Math.PI*2,Y=new ht(.021,10,7);Y.scale(1,.7,1),Y.translate(Math.sin(D)*.205,.226,Math.cos(D)*.205),H.push(Y)}a.add(wt(qi(H),an(n.dressDark,"#ffc2dc"),!1));let X=wt(new Zt(.056,.017,10,32),an("#ffffff","#ffffff"));X.rotation.x=Math.PI/2,X.position.y=.522,X.scale.z=.7,a.add(X);for(let z of[-1,1])a.add(Bn(.069,O,z*.112,.476,0,1,.9,.92));let k=wt(Ti(Qf(.04),.012,.006),t.brooch);k.position.set(0,.42,.112),a.add(k)}let c=r?[.66,.74]:[.5,.57],h=wt(new mt(.04,.044,c[1]-c[0],16),t.skinShade);h.position.y=(c[0]+c[1])/2,a.add(h);let f=[],u=[];for(let N of[-1,1]){let O=new dt;O.position.set(N*s.shoulder[0],s.shoulder[1],0);let H=wt(new Ws(s.armR,s.arm,6,14),l);H.position.y=-(s.arm/2+s.armR*.4);let X=Bn(s.hand,l,0,-(s.arm+s.armR*1.2),.004,1,1.05,.92,16);O.add(H,X),a.add(O),f.push(O);let k=new dt;k.position.set(N*s.hip[0],s.hip[1],0);let z=wt(new Ws(s.legR,s.leg,6,14),l);z.position.y=-(s.leg/2+s.legR);let D=wt(new mt(s.legR*1.12,s.legR*1.12,.05,16),t.sock);D.position.y=-(s.leg+s.legR)+.06;let Y=-(s.leg+s.legR*2)+.02;k.add(z,D),r?(k.add(Bn(.052,t.sneaker,0,Y,.022,1,.62,1.5,18)),k.add(Bn(.055,an(n.shoes,"#d8c8ff",.6),0,Y-.016,.024,1.02,.25,1.52,18))):(k.add(Bn(.05,an(n.shoes,"#ffc2dc",.4),0,Y,.022,1,.64,1.45,18)),k.add(Bn(.012,t.sock,0,Y+.026,.06,1.6,.5,1,10))),a.add(k),u.push(k)}let d=new dt;d.position.y=s.headY,d.scale.set(s.R*s.headScale[0],s.R*s.headScale[1],s.R*s.headScale[2]),a.add(d),d.add(wt(new ht(1,48,36),l));let p=new gt({map:e.open,transparent:!0,roughness:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,premultipliedAlpha:!0,emissive:"#ffffff",emissiveMap:e.open,emissiveIntensity:.14}),v=new Xe(Gx(),p);v.renderOrder=1,d.add(v);let m=wt(r?zx():Vx(),t["hair_"+i]);if(m.receiveShadow=!0,d.add(m),r){let N=new dt,O=new Zt(1.105,.07,12,72,Math.PI+.5);O.rotateZ(-.25);let H=wt(O,t.pink);N.add(H),N.rotation.x=.42;let X=new dt,k=new sn(.17,.3,14);for(let D of[-1,1]){let Y=wt(k,t.pink);Y.rotation.z=D*Math.PI/2,Y.position.x=D*.15,Y.scale.set(1,1,.45),X.add(Y)}X.add(Bn(.08,t.pinkDark,0,0,0,1,1,.8,12));let z=.62;X.position.set(Math.cos(z)*1.12,Math.sin(z)*1.12,0),X.rotation.z=z-Math.PI/2+.3,N.add(X),d.add(N)}else{let N=new dt;for(let H=0;H<5;H++){let X=H/5*Math.PI*2;N.add(Bn(.13,t.pink,Math.cos(X)*.14,Math.sin(X)*.14,0,1,1,.5,14))}N.add(Bn(.085,t.yellow,0,0,.04,1,1,.7,12));let O=li(1,.78,1.13);N.position.copy(O),N.lookAt(O.clone().multiplyScalar(2)),d.add(N)}let g=kx(s.crown,n.cape);g.scale.set(1/(s.R*s.headScale[0]),1/(s.R*s.headScale[1]),1/(s.R*s.headScale[2]));let y=new dt;y.rotation.z=s.crown.tilt,y.add(g),g.position.y=s.crown.y/(s.R*s.headScale[1])-.02,d.add(y);let E=[];for(let N=0;N<3;N++){let O=new Sn(new Mn({map:t.sparkleTex,color:"#fff3c8",blending:Ct,depthWrite:!1,opacity:0})),H=(N-1)*1.25;O.position.set(Math.sin(H)*s.crown.r*1.13,s.crown.h*1.3,Math.cos(H)*s.crown.r*1.13),g.add(O),E.push(O)}let x=Wx(s.cape,n,t);a.add(x.group);let S=new Xe(new It(.75,.75),t.blob);S.rotation.x=-Math.PI/2,S.position.y=.012,o.add(S);let b=new Xt,R=new Xt,_=new Xt,T=new hn,A=new C,L=new C,U=r?.62:.5,F="open",I=N=>{N!==F&&e[N]&&(F=N,p.map=p.emissiveMap=e[N])};return{root:o,head:d,D:s,who:i,update(N,O){o.position.set(O.x,0,O.z),o.rotation.y=O.turn||0;let H=O.dist/U*Math.PI*2,X=O.walk;a.position.y=(O.jump||0)+X*.012*(1-Math.cos(H*2)),a.rotation.z=X*.035*Math.sin(H),a.rotation.y=X*.06*Math.sin(H),a.rotation.x=X*.05+(O.lean||0);let k=O.squash||0;a.scale.set(1+k*.5,1-k,1+k*.5),d.rotation.z=X*.03*Math.sin(H+.6)+(O.tilt||0),d.rotation.x=-.04+(O.nod||0),d.rotation.y=O.look||0,u[0].rotation.x=-Math.sin(H)*.48*X,u[1].rotation.x=Math.sin(H)*.48*X;for(let z=0;z<2;z++){let D=z?1:-1,Y=f[z],ee=(z?-1:1)*Math.sin(H)*.42*X;b.setFromEuler(T.set(ee,0,D*(.1+.03*Math.sin(N*1.3+z)))),O.hold&&O.holdSide===D&&(A.copy(O.holdTarget).sub(L.set(D*s.shoulder[0],s.shoulder[1]+a.position.y,0)).normalize(),R.setFromUnitVectors(Ox,A),b.slerp(R,O.hold));let ue=O.wave&&D===O.waveSide,ge=ue?O.wave:O.cheer||0;if(ge>0){let De=ue?.42*Math.sin(N*11):.12*Math.sin(N*9+z*1.5);_.setFromEuler(T.set(.5,0,D*((ue?2.2:2.3)+De))),b.slerp(_,ge)}Y.quaternion.copy(b)}I(O.face||"open"),E.forEach((z,D)=>{let Y=[10.55,11.25,12.15,13.05].map(ue=>ue+D*.21+(r?0:.11)),ee=Math.max(...Y.map(ue=>Math.max(0,1-Math.abs(N-ue)/.22)));z.material.opacity=ee,z.scale.setScalar(.04+ee*.14),z.material.rotation=N*1.5+D}),x.update(N,X+Math.max(0,O.jumpVel||0)*.3,(O.jump||0)*3)}}}function cd(){let i=(e,t)=>new rn({color:e,roughness:.45,sheen:.6,sheenColor:t,sheenRoughness:.35,clearcoat:.35,clearcoatRoughness:.35,specularIntensity:.8});return{skin:new rn({color:od,roughness:.55,sheen:.5,sheenColor:"#ffb8a0",sheenRoughness:.6,emissive:od,emissiveIntensity:.1}),skinShade:new rn({color:"#F4C3A6",roughness:.6}),hair_yoovy:i(Ao.yoovy.hair,Ao.yoovy.hairLight),hair_googy:i(Ao.googy.hair,Ao.googy.hairLight),sock:an("#ffffff","#ffffff",.8),sneaker:an("#ffffff","#ffffff",.5),pink:an("#FF6FA5","#ffd0e4",.5),pinkDark:an("#E0407F","#ffd0e4",.5),yellow:an("#FFD54F","#fff3c0",.5),brooch:new gt({color:"#FFD54F",metalness:.5,roughness:.45,emissive:"#7a5200",emissiveIntensity:.15}),ermine:new rn({color:"#ffffff",roughness:1,sheen:1,sheenColor:"#ffffff",sheenRoughness:.9,emissive:"#ffffff",emissiveIntensity:.08}),ermineTail:new gt({color:"#1d1a26",roughness:.9}),blob:new Nt({map:Xx(),transparent:!0,depthWrite:!1,opacity:.55}),sparkleTex:hr()}}function Xx(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(10,5,20,0.85)"),t.addColorStop(.5,"rgba(10,5,20,0.4)"),t.addColorStop(1,"rgba(10,5,20,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new xi(i)}var Co=[[4.75,-11,31,-100,"peony","#ffd866","#fff6d0"],[5.15,12,35,-98,"peony","#ff6fae","#ffd0e6"],[5.55,0,41,-106,"ring","#7fe3ff","#ffffff"],[5.95,-20,34,-96,"willow","#ffc046","#fff0b0"],[6.35,17,30,-94,"heart","#ff5ca8","#ffc2de"],[6.75,-4,38,-102,"peony","#c9a4ff","#ffffff"],[7.1,22,40,-104,"glitter","#fff4dc","#ffd866"],[7.5,-16,28,-96,"peony","#ffd866","#ff9a4a"],[7.95,8,34,-100,"ring","#ff6fae","#ffffff"],[8.45,-6,40,-102,"peony","#7fe3ff","#c9f4ff"],[8.95,18,32,-96,"willow","#ffc046","#fff0b0"],[9.45,-12,34,-98,"heart","#ff5ca8","#ffc2de"],[9.85,4,28,-94,"peony","#c9a4ff","#ffe2ff"],[10.35,0,36,-96,"heart","#ff4f9e","#ffd0e6"],[10.6,-18,32,-100,"peony","#ffd866","#fff6d0"],[10.75,18,32,-100,"peony","#7fe3ff","#ffffff"],[11,-8,42,-104,"ring","#c9a4ff","#ffffff"],[11.2,8,42,-104,"ring","#ffd866","#ffffff"],[11.45,-22,38,-98,"willow","#ffc046","#fff0b0"],[11.6,22,38,-98,"willow","#ffc046","#fff0b0"],[11.9,0,45,-106,"glitter","#fff4dc","#ffd866"],[12.2,-12,29,-94,"peony","#ff6fae","#ffd0e6"],[12.35,12,29,-94,"peony","#ffd866","#ff9a4a"]],hd=.95;function ud(){let i=un(1234),e=5,t=[],n=[],s=[],r=[],o=(y,E,x,S,b,R,_)=>{for(let T=0;T<e;T++)t.push(y[0],y[1],y[2]),n.push(E.x,E.y,E.z),s.push(x,S,T*_,b),r.push(R.r,R.g,R.b)};for(let[y,E,x,S,b,R,_]of Co){let T=Mt(R),A=Mt(_),L=[E,x,S],U={peony:170,ring:110,heart:150,willow:130,glitter:150}[b];for(let F=0;F<U;F++){let I;if(b==="ring"){let H=F/U*Math.PI*2,X=.35;I=new C(Math.cos(H),Math.sin(H)*Math.cos(X),Math.sin(H)*Math.sin(X)).multiplyScalar(25+i()*1.5)}else if(b==="heart"){let H=F/U*Math.PI*2,X=Math.sin(H);I=new C(16*X*X*X,13*Math.cos(H)-5*Math.cos(2*H)-2*Math.cos(3*H)-Math.cos(4*H),(i()-.5)*2).multiplyScalar(1.55+i()*.06)}else{let H=i()*2-1,X=i()*Math.PI*2,k=Math.sqrt(1-H*H),z=b==="willow"?17+i()*3:23+i()*4;I=new C(k*Math.cos(X),H,k*Math.sin(X)).multiplyScalar(z)}let N=b==="willow"?3.1+i()*.5:b==="glitter"?2.2+i()*.5:1.8+i()*.4;o(L,I,y,N,b==="willow"?1.6:b==="heart"?.25:.8,i()<.75?T:A,b==="willow"?.07:.04)}}let a=new it;a.setAttribute("position",new Ie(t,3)),a.setAttribute("aVel",new Ie(n,3)),a.setAttribute("aInfo",new Ie(s,4)),a.setAttribute("aColor",new Ie(r,3));let l={uTime:{value:0},uScale:{value:300}},c=new Xn(a,new ut({uniforms:l,transparent:!0,depthWrite:!1,blending:Ct,vertexShader:`attribute vec3 aVel, aColor; attribute vec4 aInfo; uniform float uTime, uScale;
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
                gl_FragColor = vec4(vColor * a, 1.0); }`}));c.frustumCulled=!1;let h=[],f=[],u=[];for(let[y,E,x,S]of Co)for(let b=0;b<12;b++)h.push(E*.75,3,S+6),f.push(E,x,S),u.push(y-hd,b*.022,i()*6.28);let d=new it;d.setAttribute("position",new Ie(h,3)),d.setAttribute("aTo",new Ie(f,3)),d.setAttribute("aInfo",new Ie(u,3));let p=new Xn(d,new ut({uniforms:l,transparent:!0,depthWrite:!1,blending:Ct,vertexShader:`attribute vec3 aTo, aInfo; uniform float uTime, uScale; varying float vA;
            void main() {
                float t = (uTime - aInfo.x - aInfo.y) / ${hd.toFixed(2)};
                if (t < 0.0 || t > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
                float e = 1.0 - (1.0 - t) * (1.0 - t);
                vec3 p = mix(position, aTo, e) + vec3(sin(t * 18.0 + aInfo.z) * 0.25, 0.0, 0.0);
                vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
                float tail = aInfo.y / 0.022;
                vA = (1.0 - tail / 12.0) * (0.6 + 0.4 * sin(uTime * 50.0 + tail));
                gl_PointSize = uScale * 0.55 * (1.0 - tail * 0.06) / -mv.z;
            }`,fragmentShader:`varying float vA;
            void main() { float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r);
                gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * a * a * vA * 2.5, 1.0); }`}));p.frustumCulled=!1;let v=new dt;v.add(c,p);let m=new Si("#ffffff",0,0,.6);v.add(m);let g=new me;return{group:v,light:m,update(y,E){l.uTime.value=y,l.uScale.value=950*E;let x=0,S=0,b=new me(0,0,0);for(let[R,_,T,A,,L]of Co){let U=y-R;if(U<0||U>1.2)continue;let F=Math.exp(-U*4.5)*Lt(0,.05,U);S+=F,b.add(g.set(L).multiplyScalar(F)),F>x&&(x=F,m.position.set(_,T*.7,A+20))}return m.intensity=S*14,S>0&&m.color.copy(b.multiplyScalar(1/S)),{flash:Math.min(1,S),color:m.color}}}}function fd(){let i=un(99),e=[],t=[],n=[],s=(l,c,h,f,u,d,p,v)=>{for(let m=0;m<l;m++)e.push(c+i()*(h-c),f+i()*(u-f),d+i()*(p-d)),t.push(i()*6.28,.5+i(),.6+i()*.8,i()),n.push(v)};s(260,-7,7,.3,9.5,.6,7,0),s(220,-9,9,.2,4,-50,-4,1);let r=new it;r.setAttribute("position",new Ie(e,3)),r.setAttribute("aInfo",new Ie(t,4)),r.setAttribute("aKind",new Ie(n,1));let o={uTime:{value:0},uScale:{value:60},uMap:{value:hr()},uDust:{value:1},uFlies:{value:0}},a=new Xn(r,new ut({uniforms:o,transparent:!0,depthWrite:!1,blending:Ct,vertexShader:`attribute vec4 aInfo; attribute float aKind; uniform float uTime, uScale, uDust, uFlies;
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
                gl_FragColor = vec4(vC * a, 1.0); }`}));return a.frustumCulled=!1,{group:a,update(l,c){o.uTime.value=l,o.uScale.value=60*c,o.uDust.value=1-Lt(3.4,4.2,l),o.uFlies.value=Lt(3,4.5,l)}}}function dd(i,e){let t=un(555),n=520,s=[],r=[],o=[],a=[],l=[],c=[],h=["#ff5c9a","#ff8fbd","#ffd54f","#ffffff","#c9a4ff","#ff3d7f","#ffe9a8"].map(p=>Mt(p));for(let p=0;p<n;p++){let v=i.x+(t()-.5)*7,m=i.z+(t()-.5)*6,g=4.5+t()*3.5,y=e+t()*2.4,E=.55+t()*.45,x=2+t()*4,S=t()*100,b=h[Math.floor(t()*h.length)],R=t()<.6?1:0,_=R?.09:.06,T=R?.11:.035,A=[[-_,-T,0,0],[_,-T,1,0],[_,T,1,1],[-_,T,0,1]];for(let[U,F,I,N]of A)s.push(U,F,0),r.push(I,N),o.push(v,g,m),a.push(y,E,x,S+R*1e3),l.push(b.r,b.g,b.b);let L=p*4;c.push(L,L+1,L+2,L,L+2,L+3)}let f=new it;f.setAttribute("position",new Ie(s,3)),f.setAttribute("uv",new Ie(r,2)),f.setAttribute("aStart",new Ie(o,3)),f.setAttribute("aInfo",new Ie(a,4)),f.setAttribute("aColor",new Ie(l,3)),f.setIndex(c);let u={uTime:{value:0},uMap:{value:Zf()}},d=new Xe(f,new ut({uniforms:u,transparent:!0,depthWrite:!1,side:Ut,vertexShader:`attribute vec3 aStart, aColor; attribute vec4 aInfo; uniform float uTime;
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
                gl_FragColor = vec4(vC, a * vA); }`}));return d.frustumCulled=!1,{group:d,update(p){u.uTime.value=p}}}var Eh=14,md=13.35,jt=10.35,gd=10.75,_d=new lr([[0,Qt(0,3,23)],[2.4,Qt(0,2.6,11)],[3.3,Qt(0,2.85,6.4)],[4.05,Qt(0,2.9,.4)],[5.3,Qt(.5,4.8,-6.5)],[7.1,Qt(1.7,7.6,-12)],[8.8,Qt(1.9,3.3,-18.6)],[10.3,Qt(.35,.82,-25)],[13.8,Qt(-.6,.92,-24.6)]]),xd=new lr([[0,Qt(0,6.6,0)],[2.4,Qt(0,4.1,0)],[3.3,Qt(0,3.8,-6)],[4.05,Qt(0,4,-24)],[5.3,Qt(0,9.5,-64)],[7.1,Qt(0,11.5,-64)],[8.8,Qt(0,3,-33)],[10.3,Qt(0,1.02,-28.6)],[13.8,Qt(0,1.26,-28.6)]]),vd=new lr([[0,40],[4,44],[8,42],[10.3,38],[13.8,36]]),Pn=[4,9.7,10.3],qx=1.05,Yx=-28.6,yd=i=>{let e=Math.min(Math.max(i-Pn[0],0),Pn[1]-Pn[0]),t=Eo(i-Pn[1],0,Pn[2]-Pn[1]),n=Pn[2]-Pn[1];return qx*(e+t-t*t/(2*n))},Zx=yd(99),Jx=Yx-Zx,pd={yoovy:-.27,googy:.27},$x=(i,e)=>e.some(t=>i>t&&i<t+.13);function Th(i,e){let t=i==="yoovy",n=yd(e),s=Jx+n,r=e<Pn[1]?e>Pn[0]?1:0:1-Eo((e-Pn[1])/(Pn[2]-Pn[1])),o=1-Lt(jt-.05,jt+.2,e),a=Jn(e,jt,jt+.28,12,12.4),l=Lt(12.05,12.45,e),c=e-(jt+.18),f=c>0&&c<.5?.13*4*(c/.5)*(1-c/.5):0,u=c>0&&c<.5?1-2*c/.5:0,d=Jn(e,jt+.08,jt+.16,jt+.16,jt+.26)*.06+Jn(e,jt+.66,jt+.72,jt+.74,jt+.86)*.08,p=(t?1:-1)*.42*Jn(e,8.5,8.9,9.3,9.7),v=e>jt-.05&&e<12.6?"laugh":$x(e,t?[5.7,7.9,10,13]:[6.3,8.4,12.9])?"blink":"open",m=Lt(jt,jt+.4,e);return{x:pd[i]*(1+.38*m),turn:(t?-.22:.22)*m,z:s,walk:r,dist:n,hold:o,holdSide:t?1:-1,holdTarget:new C(-pd[i],.44,.06),cheer:a,wave:l,waveSide:t?-1:1,jump:f,jumpVel:u,squash:d,look:p,face:v,tilt:(t?-.05:.06)*Lt(10.6,11.2,e),nod:.06*Jn(e,12.5,12.8,13,13.4)}}var lt=null;function Kx(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function Qx(){let i=Vf(),e=()=>new gt({map:i.map,normalMap:i.normalMap,normalScale:new re(.9,.9),roughness:.86}),t=e();t.onBeforeCompile=a=>{a.uniforms.uUp={value:new me(1,.62,.32).multiplyScalar(.32)},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY;
uniform vec3 uUp;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uUp * diffuseColor.rgb * (1.0 - smoothstep(1.5, 20.0, vWY));`)},t.customProgramCacheKey=()=>"castle-uplit";let n=a=>{let l=Gf(a);return new rn({map:l.map,normalMap:l.normalMap,roughness:.48,clearcoat:.4,clearcoatRoughness:.25})},s=kf(),r=Wf(),o=qf();return{stone:e(),castleStone:t,roofPink:n("#e2559a"),roofPurple:n("#7a4ae0"),cobbles:new gt({map:s.map,normalMap:s.normalMap,normalScale:new re(.6,.6),roughness:.8,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),grass:new gt({map:r.map,normalMap:r.normalMap,roughness:.95,color:"#eaffdc"}),carpet:new rn({map:Xf(),roughness:.9,sheen:.7,sheenColor:"#c8204f",sheenRoughness:.5}),window:new Nt({map:o,transparent:!0,color:new me(2.3,1.85,1.3)}),windowLit:new Nt({map:o,transparent:!0,vertexColors:!0,color:new me(2.3,1.85,1.3)}),enamel:new rn({color:"#2546c9",roughness:.3,metalness:.05,clearcoat:1,clearcoatRoughness:.06}),enamelBright:new rn({color:"#3a6bff",roughness:.3,metalness:.05,clearcoat:1,clearcoatRoughness:.05}),lanternGlass:new gt({color:"#ffcf80",emissive:"#ffae42",emissiveIntensity:2.4,transparent:!0,opacity:.88,roughness:.2}),flame:new Nt({color:new me(4.5,2.8,1.2)}),iron:new gt({color:"#2c2840",metalness:.7,roughness:.42}),pot:new gt({color:"#f4eefc",roughness:.45}),trunk:new gt({color:"#5a3d2b",roughness:.9}),leaf:new gt({color:"#3f9052",roughness:.8,normalMap:r.normalMap,normalScale:new re(1.4,1.4)}),hedge:new gt({color:"#3a8148",roughness:.85,normalMap:r.normalMap,normalScale:new re(1.6,1.6)}),tree:new gt({color:"#3a765a",roughness:.9}),pine:new gt({color:"#2d6553",roughness:.9}),flower:new gt({color:"#ffffff",roughness:.6,emissive:"#ffffff",emissiveIntensity:.08}),pool:new Nt({map:$n(1.5),color:"#ffb35c",transparent:!0,blending:Ct,depthWrite:!1,vertexColors:!0,opacity:.38}),...cd()}}function jx(){let i=(e,t)=>{let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");s.fillStyle="#1c3c78",s.strokeStyle="#1c3c78",s.lineWidth=7,s.lineCap="round";for(let o of[88,168])e||t?(s.beginPath(),s.arc(o,t?148:136,16,t?Math.PI*1.15:.15,t?Math.PI*1.85:Math.PI-.15,!1),s.stroke()):(s.beginPath(),s.ellipse(o,140,15,19,0,0,Math.PI*2),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(o+5,132,5,0,7),s.fill(),s.fillStyle="#1c3c78");s.strokeStyle="#c93d66",s.beginPath(),s.arc(128,172,t?24:18,.2,Math.PI-.2),s.stroke();let r=new xi(n);return r.colorSpace=ln,r};return{open:i(!1,!1),blink:i(!0,!1),laugh:i(!1,!0)}}async function Md(i){if(!i)return jx();let e={};for(let t of["open","blink","laugh"]){let n=await Jf(i[t],512);n.premultiplyAlpha=!0,e[t]=n}return e}function ev(){let i=new Xe(new It(2,2),new ut({transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`varying vec2 vUv; void main() { vec2 q = vUv - 0.5; float v = clamp(1.0 - dot(q, q) * 1.25, 0.0, 1.0);
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.42 * (1.0 - v)); }`}));return i.frustumCulled=!1,i.renderOrder=999,i}var tv=[{pr:1,msaa:2,shadow:0,bloom:!0},{pr:1.5,msaa:4,shadow:1024,bloom:!0},{pr:2,msaa:4,shadow:2048,bloom:!0}];async function nv(i={}){if(lt)return lt.ready;let e=document.createElement("canvas");e.className="in3d-canvas";let t=new Ll({canvas:e,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});t.toneMapping=cs,t.toneMappingExposure=1.2,t.shadowMap.enabled=!0,t.shadowMap.type=as,zf(Math.min(8,t.capabilities.getMaxAnisotropy()));let n=new ts;n.fog=new Dr(Mt("#5e4c9e"),.0034);let s=new tn(40,16/9,.25,2500);jf(),at.goldDouble=at.gold.clone(),at.goldDouble.side=Ut;let r=Qx(),o=td(t);n.environment=o.texture,n.environmentIntensity=.65;let a=ed();n.add(a.group);let l=nd(r);n.add(l.group);let c=id(r);n.add(c.group);let h=rd(r);n.add(h.group);let f=ud();n.add(f.group),f.group.name="fireworks";let u=fd();n.add(u.group),u.group.name="motes";let d=await Promise.all([Md(i.faces&&i.faces.yoovy),Md(i.faces&&i.faces.googy)]),p=bh("yoovy",d[0],r),v=bh("googy",d[1],r);n.add(p.root,v.root),p.root.name="yoovy",v.root.name="googy",n.add(ev());let m=dd(new C(0,0,-28.6),jt+.1);n.add(m.group),m.group.name="shower";let g=new jr(Mt("#aebcff"),Mt("#5c4272"),.9),y=new $s(Mt("#cdd5ff"),1.9);y.castShadow=!0,y.shadow.mapSize.set(2048,2048),y.shadow.camera.left=-11,y.shadow.camera.right=11,y.shadow.camera.top=11,y.shadow.camera.bottom=-11,y.shadow.camera.near=1,y.shadow.camera.far=140,y.shadow.bias=-4e-4,y.shadow.normalBias=.02,y.shadow.radius=3;let E=new to(Mt("#ffd6a0"),0,60,.34,.7,1.2);E.position.set(4.5,9.5,-14),E.target.position.set(0,.7,-29);let x=new $s(Mt("#ffb070"),0);x.position.set(.5,6,-40),x.target.position.set(0,0,-28);let S=new Si(Mt("#ffc77a"),0,30,1.6);S.position.set(0,3.2,-3.2),n.add(g,y,y.target,E,E.target,x,x.target,S);let b=new Bl(t,new Bt(16,16,{type:Jt}));b.addPass(new Ol(n,s));let R=new ar(new re(16,16),.6,.5,1);b.addPass(R),b.addPass(new Hl);let _=new C,T=new C,A=new C,L=new C(0,1,0).cross(Zi).normalize(),U=Zi.clone().cross(L),F=1,I=2,N=0,O=0,H=z=>{I=z;let D=tv[z];F=Math.min(window.devicePixelRatio||1,D.pr),b.renderTarget1.samples=D.msaa,b.renderTarget2.samples=0,b.renderTarget1.dispose(),b.renderTarget2.dispose(),t.setPixelRatio(F),b.setPixelRatio(F),R.enabled=D.bloom,D.shadow&&y.shadow.mapSize.set(D.shadow,D.shadow),y.castShadow=!!D.shadow,N&&(t.setSize(N,O,!1),b.setSize(N,O))},X=(z,D)=>{N=Math.max(2,z|0),O=Math.max(2,D|0),t.setSize(N,O,!1),b.setSize(N,O),s.aspect=N/O},k=z=>{_d.at(z,_),xd.at(z,T);let D=vd.at(z),Y=s.aspect,ee=Math.tan(D*Math.PI/360)*16/9,ue=Y>=16/9?1:.5+.5*Lt(.45,16/9,Y),ge=Math.max(Math.tan(D*Math.PI/360),Math.min(ee*ue/Y,Math.tan(28*Math.PI/180)));s.fov=Math.atan(ge)*360/Math.PI,s.position.copy(_),s.lookAt(T),s.updateProjectionMatrix(),a.update(z,s,F),l.update(z),c.update(z),h.update(z),u.update(z,F),m.update(z);let De=f.update(z,F);a.uniforms.uFlash.value=De.flash*.18,a.uniforms.uFlashColor.value.copy(De.color),p.update(z,Th("yoovy",z)),v.update(z,Th("googy",z));let $=Lt(zt[0],zt[0]+.8,z),j=Jn(z,zt[0],zt[0]+.45,zt[0]+.7,zt[0]+1.3);S.intensity=j*28+$*6,E.intensity=$*30,x.intensity=$*2.2,g.intensity=.9+De.flash*.25,t.toneMappingExposure=1.2+j*.04,A.copy(p.root.position).x+=.27,A.multiplyScalar(Lt(3.4,4.6,z));let he=22/y.shadow.mapSize.x,He=Math.round(A.dot(L)/he)*he,_e=Math.round(A.dot(U)/he)*he,Fe=A.dot(Zi),Ke=A.set(0,0,0).addScaledVector(L,He).addScaledVector(U,_e).addScaledVector(Zi,Fe);y.target.position.copy(Ke),y.position.copy(Ke).addScaledVector(Zi,70),R.strength=.6+j*.15,b.render()};return lt={renderer:t,scene:n,camera:s,composer:b,draw:k,resize:X,setTier:H,canvas:e,get tier(){return I}},lt.ready=(async()=>(X(i.width||640,i.height||360),H(i.tier??2),k(0),t.compileAsync&&await t.compileAsync(n,s),lt))(),lt.ready}function iv(i,{onTime:e}={}){if(!lt)throw new Error("GaiaIntro3D: prepare() first");i.appendChild(lt.canvas);let t=0,n=!1,s=0,r=0,o=0,a=0,l=0,c=()=>{let f=i.clientWidth||innerWidth,u=i.clientHeight||innerHeight;lt.canvas.width===Math.floor(f*lt.renderer.getPixelRatio())&&lt.canvas.height===Math.floor(u*lt.renderer.getPixelRatio())||(lt.resize(f,u),lt.draw(l))};c(),lt.draw(0),window.addEventListener("resize",c);let h=f=>{if(n)return;s||(s=f);let u=(f-s)/1e3;l=Math.min(u,Eh),lt.draw(l),e&&e(u),a&&u>.8&&(o++,f-a>45&&r++),a=f,o===30&&(r>20&&lt.tier>0&&(lt.setTier(lt.tier-1),lt.draw(l)),o=r=0),t=requestAnimationFrame(h)};return t=requestAnimationFrame(h),{stop(){n=!0,cancelAnimationFrame(t),window.removeEventListener("resize",c)}}}function sv(){let i=lt.renderer.getContext(),e=new Uint8Array(4),t=()=>i.readPixels(0,0,1,1,i.RGBA,i.UNSIGNED_BYTE,e);for(let n=lt.tier;n>=0;n--){lt.setTier(n),lt.draw(10.8),t();let s=performance.now();if(lt.draw(6.3),t(),lt.draw(11.4),t(),(performance.now()-s)/2<(n?24:42))return!0}return!1}function rv(i,e,t){e&&t&&lt.resize(e,t),lt.draw(i)}function ov(){if(!lt)return;let{renderer:i,scene:e,canvas:t}=lt;e.traverse(n=>{n.geometry&&n.geometry.dispose();let s=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of s){for(let o in r)r[o]&&r[o].isTexture&&r[o].dispose();r.dispose()}}),lt.composer.dispose&&lt.composer.dispose(),i.dispose(),i.forceContextLoss(),t.remove(),lt=null}window.GaiaIntro3D={supported:Kx,prepare:nv,fits:sv,play:iv,renderAt:rv,dispose:ov,get ready(){return!!lt},get canvas(){return lt?lt.canvas:null},timeline:{length:Eh,handoff:md,gates:zt[0],cheer:jt,title:gd,bursts:Co.map(i=>i[0])}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
