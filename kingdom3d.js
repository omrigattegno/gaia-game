/* Yoovy & Googy: the kingdom in 3D (the royal intro and the map). Built from kingdom3d/src (npm run build); do not edit by hand. */
(()=>{var yf=0,Ih=1,Mf=2;var ks=1,Sf=2,Cr=3,Zi=0,qt=1,gt=2,jn=0,Pr=1,bt=2,Lh=3,Dh=4,Ef=5;var Gs=100,bf=101,Tf=102,wf=103,Af=104,Rf=200,Cf=201,Pf=202,If=203,Nh=204,Uh=205,Lf=206,Df=207,Nf=208,Uf=209,Ff=210,Bf=211,Of=212,Hf=213,zf=214,Va=0,Wa=1,Xa=2,gr=3,qa=4,Ya=5,Za=6,Ja=7,Sl=0,kf=1,Gf=2,gi=0,Fo=1,Bo=2,Oo=3,xi=4,Ho=5,zo=6,ko=7;var Fh=300,ps=301,Vs=302,El=303,bl=304,Go=306,Vi=1e3,wi=1001,$a=1002,xn=1003,Vf=1004;var Vo=1005;var cn=1006,Tl=1007;var ms=1008;var Pn=1009,Bh=1010,Oh=1011,Ir=1012,wl=1013,_i=1014,ei=1015,hn=1016,Al=1017,Rl=1018,Lr=1020,Hh=35902,zh=35899,kh=1021,Gh=1022,ti=1023,Ri=1026,gs=1027,Dr=1028,Cl=1029,xs=1030,Pl=1031;var Il=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,Ll=35840,Dl=35841,Nl=35842,Ul=35843,Fl=36196,Bl=37492,Ol=37496,Hl=37488,zl=37489,Zo=37490,kl=37491,Gl=37808,Vl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,Zl=37814,Jl=37815,$l=37816,Kl=37817,Ql=37818,jl=37819,ec=37820,tc=37821,nc=36492,ic=36494,sc=36495,rc=36283,oc=36284,Jo=36285,ac=36286;var ao=2300,Ka=2301,ka=2302,_h=2303,vh=2400,yh=2401,Mh=2402;var Wf=3200;var $o=0,Xf=1,Ji="",sn="srgb",lo="srgb-linear",co="linear",yt="srgb";var Ga=7680;var qf=519,Yf=512,Zf=513,Jf=514,lc=515,$f=516,Kf=517,cc=518,Qf=519,Vh=35044;var Wh="300 es",di=2e3,xr=2001;function kp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){let i=ho("canvas");return i.style.display="block",i}var zu={},_r=null;function uo(...i){let e="THREE."+i.shift();_r?_r("log",e,...i):console.log(e,...i)}function ed(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=ed(i);let e="THREE."+i.shift();if(_r)_r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=ed(i);let e="THREE."+i.shift();if(_r)_r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ds(...i){let e=i.join(" ");e in zu||(zu[e]=!0,Ke(...i))}function td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nd={[Va]:Wa,[Xa]:Za,[qa]:Ja,[gr]:Ya,[Wa]:Va,[Za]:Xa,[Ja]:qa,[Ya]:gr},Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xc=Math.PI/180,fo=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Vp(i,e){return(i%e+e)%e}function qc(i,e,t){return(1-t)*i+t*e}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $h=class $h{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$h.prototype.isVector2=!0;var ae=$h,zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*_;m<0&&(f=-f,u=-u,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);g=Math.sin(g*M)/w,a=Math.sin(a*M)/w,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*u-c*f,e[t+1]=l*p+h*f+c*d-a*u,e[t+2]=c*p+h*u+a*f-l*d,e[t+3]=h*p-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kh=class Kh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kh.prototype.isVector3=!0;var P=Kh,Yc=new P,ku=new zt,Qh=class Qh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],_=s[0],m=s[3],g=s[6],M=s[1],w=s[4],y=s[7],v=s[2],S=s[5],b=s[8];return r[0]=o*_+a*M+l*v,r[3]=o*m+a*w+l*S,r[6]=o*g+a*y+l*b,r[1]=c*_+h*M+d*v,r[4]=c*m+h*w+d*S,r[7]=c*g+h*y+d*b,r[2]=f*_+u*M+p*v,r[5]=f*m+u*w+p*S,r[8]=f*g+u*y+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=t*d+n*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qh.prototype.isMatrix3=!0;var tt=Qh,Zc=new tt,Gu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){let i={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lo]:{primaries:e,whitePoint:n,transfer:co,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var ht=Wp();function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ks,Qa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ks===void 0&&(Ks=ho("canvas")),Ks.width=e.width,Ks.height=e.height;let s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ho("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xp=0,vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jc(s[o].image)):r.push(Jc(s[o]))}else r=Jc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var qp=0,$c=new P,Un=class i extends Ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wi,s=wi,r=cn,o=ms,a=ti,l=Pn,c=i.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ki(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Fh;Un.DEFAULT_ANISOTROPY=1;var jh=class jh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,y=(u+1)/2,v=(g+1)/2,S=(h+f)/4,b=(d+_)/4,x=(p+m)/4;return w>y&&w>v?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=b/n):y>v?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=x/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=b/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jh.prototype.isVector4=!0;var kt=jh,ja=class extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Un(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},po=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ml=class Ml{constructor(e,t,n,s,r,o,a,l,c,h,d,f,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,u,p,_,m)}set(e,t,n,s,r,o,a,l,c,h,d,f,u,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ml().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,u=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,p=c*h,_=c*d;t[0]=f+_*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,p=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,u=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=p*c-u,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,u=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=p*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*l,u=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yp,e,Zp)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),is.crossVectors(n,On),is.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),is.crossVectors(n,On)),is.normalize(),pa.crossVectors(On,is),s[0]=is.x,s[4]=pa.x,s[8]=On.x,s[1]=is.y,s[5]=pa.y,s[9]=On.y,s[2]=is.z,s[6]=pa.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],w=n[7],y=n[11],v=n[15],S=s[0],b=s[4],x=s[8],E=s[12],A=s[1],I=s[5],L=s[9],F=s[13],C=s[2],U=s[6],k=s[10],O=s[14],H=s[3],B=s[7],G=s[11],D=s[15];return r[0]=o*S+a*A+l*C+c*H,r[4]=o*b+a*I+l*U+c*B,r[8]=o*x+a*L+l*k+c*G,r[12]=o*E+a*F+l*O+c*D,r[1]=h*S+d*A+f*C+u*H,r[5]=h*b+d*I+f*U+u*B,r[9]=h*x+d*L+f*k+u*G,r[13]=h*E+d*F+f*O+u*D,r[2]=p*S+_*A+m*C+g*H,r[6]=p*b+_*I+m*U+g*B,r[10]=p*x+_*L+m*k+g*G,r[14]=p*E+_*F+m*O+g*D,r[3]=M*S+w*A+y*C+v*H,r[7]=M*b+w*I+y*U+v*B,r[11]=M*x+w*L+y*k+v*G,r[15]=M*E+w*F+y*O+v*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],_=e[7],m=e[11],g=e[15],M=l*u-c*f,w=a*u-c*d,y=a*f-l*d,v=o*u-c*h,S=o*f-l*h,b=o*d-a*h;return t*(_*M-m*w+g*y)-n*(p*M-m*v+g*S)+s*(p*w-_*v+g*b)-r*(p*y-_*S+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],_=e[13],m=e[14],g=e[15],M=t*a-n*o,w=t*l-s*o,y=t*c-r*o,v=n*l-s*a,S=n*c-r*a,b=s*c-r*l,x=h*_-d*p,E=h*m-f*p,A=h*g-u*p,I=d*m-f*_,L=d*g-u*_,F=f*g-u*m,C=M*F-w*L+y*I+v*A-S*E+b*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=(a*F-l*L+c*I)*U,e[1]=(s*L-n*F-r*I)*U,e[2]=(_*b-m*S+g*v)*U,e[3]=(f*S-d*b-u*v)*U,e[4]=(l*A-o*F-c*E)*U,e[5]=(t*F-s*A+r*E)*U,e[6]=(m*y-p*b-g*w)*U,e[7]=(h*b-f*y+u*w)*U,e[8]=(o*L-a*A+c*x)*U,e[9]=(n*A-t*L-r*x)*U,e[10]=(p*S-_*y+g*M)*U,e[11]=(d*y-h*S-u*M)*U,e[12]=(a*E-o*I-l*x)*U,e[13]=(t*I-n*E+s*x)*U,e[14]=(_*w-p*v-m*M)*U,e[15]=(h*v-d*w+f*M)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,_=o*h,m=o*d,g=a*d,M=l*c,w=l*h,y=l*d,v=n.x,S=n.y,b=n.z;return s[0]=(1-(_+g))*v,s[1]=(u+y)*v,s[2]=(p-w)*v,s[3]=0,s[4]=(u-y)*S,s[5]=(1-(f+g))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(p+w)*b,s[9]=(m-M)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Qs.set(s[0],s[1],s[2]).length(),a=Qs.set(s[4],s[5],s[6]).length(),l=Qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let c=1/o,h=1/a,d=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=di,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===di)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===xr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=di,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),u=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===di)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===xr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ml.prototype.isMatrix4=!0;var it=Ml,Qs=new P,ci=new it,Yp=new P(0,0,0),Zp=new P(1,1,1),is=new P,pa=new P,On=new P,Wu=new it,Xu=new zt,Wt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wt.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jp=0,qu=new P,js=new zt,Ui=new it,ma=new P,Jr=new P,$p=new P,Kp=new zt,Yu=new P(1,0,0),Zu=new P(0,1,0),Ju=new P(0,0,1),$u={type:"added"},Qp={type:"removed"},er={type:"childadded",child:null},Kc={type:"childremoved",child:null},rn=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Wt,n=new zt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Jr,ma,this.up):Ui.lookAt(ma,Jr,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Ui),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),er.child=e,this.dispatchEvent(er),er.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qp),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,$p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new P(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},jp={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Qc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Vp(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qc(o,r,e+1/3),this.g=Qc(o,r,e),this.b=Qc(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return ht.workingToColorSpace(An.copy(this),e),Math.round(lt(An.r*255,0,255))*65536+Math.round(lt(An.g*255,0,255))*256+Math.round(lt(An.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(An.copy(this),t);let n=An.r,s=An.g,r=An.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=sn){ht.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,s=An.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(ga);let n=qc(ss.h,ga.h,t),s=qc(ss.s,ga.s,t),r=qc(ss.l,ga.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new le;le.NAMES=id;var Ns=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zn=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new P,Fi=new P,jc=new P,Bi=new P,tr=new P,nr=new P,Ku=new P,eh=new P,th=new P,nh=new P,ih=new kt,sh=new kt,rh=new kt,zi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Fi.subVectors(n,t),jc.subVectors(e,t);let o=hi.dot(hi),a=hi.dot(Fi),l=hi.dot(jc),c=Fi.dot(Fi),h=Fi.dot(jc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,n),rh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ih,r.x),o.addScaledVector(sh,r.y),o.addScaledVector(rh,r.z),o}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Fi.subVectors(e,t),hi.cross(Fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),hi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,n),nr.subVectors(r,n),eh.subVectors(e,n);let l=tr.dot(eh),c=nr.dot(eh);if(l<=0&&c<=0)return t.copy(n);th.subVectors(e,s);let h=tr.dot(th),d=nr.dot(th);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(tr,o);nh.subVectors(e,r);let u=tr.dot(nh),p=nr.dot(nh);if(p>=0&&u<=p)return t.copy(r);let _=u*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(nr,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Ku.subVectors(r,s),a=(d-h)/(d-h+(u-p)),t.copy(s).addScaledVector(Ku,a);let g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),_a.subVectors(this.max,$r),ir.subVectors(e.a,$r),sr.subVectors(e.b,$r),rr.subVectors(e.c,$r),rs.subVectors(sr,ir),os.subVectors(rr,sr),Cs.subVectors(ir,rr);let t=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Cs.z,Cs.y,rs.z,0,-rs.x,os.z,0,-os.x,Cs.z,0,-Cs.x,-rs.y,rs.x,0,-os.y,os.x,0,-Cs.y,Cs.x,0];return!oh(t,ir,sr,rr,_a)||(t=[1,0,0,0,1,0,0,0,1],!oh(t,ir,sr,rr,_a))?!1:(va.crossVectors(rs,os),t=[va.x,va.y,va.z],oh(t,ir,sr,rr,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new P,new P,new P,new P,new P,new P,new P,new P],ui=new P,xa=new Kn,ir=new P,sr=new P,rr=new P,rs=new P,os=new P,Cs=new P,$r=new P,_a=new P,va=new P,Ps=new P;function oh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nn=new P,ya=new ae,e0=0,xt=class extends Ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var go=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xo=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Le=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},t0=new Kn,Kr=new P,ah=new P,Wi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):t0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(ah)),this.expandByPoint(Kr.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},n0=0,$n=new it,lh=new rn,or=new P,Hn=new Kn,Qr=new Kn,gn=new P,rt=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?xo:go)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Hn.min,Qr.min),Hn.expandByPoint(gn),gn.addVectors(Hn.max,Qr.max),Hn.expandByPoint(gn)):(Hn.expandByPoint(Qr.min),Hn.expandByPoint(Qr.max))}Hn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),gn.add(or)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new P,l[x]=new P;let c=new P,h=new P,d=new P,f=new ae,u=new ae,p=new ae,_=new P,m=new P;function g(x,E,A){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,A),f.fromBufferAttribute(r,x),u.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),h.sub(c),d.sub(c),u.sub(f),p.sub(f);let I=1/(u.x*p.y-p.x*u.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-u.y).multiplyScalar(I),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(I),a[x].add(_),a[E].add(_),a[A].add(_),l[x].add(m),l[E].add(m),l[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,E=M.length;x<E;++x){let A=M[x],I=A.start,L=A.count;for(let F=I,C=I+L;F<C;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let w=new P,y=new P,v=new P,S=new P;function b(x){v.fromBufferAttribute(s,x),S.copy(v);let E=a[x];w.copy(E),w.sub(v.multiplyScalar(v.dot(E))).normalize(),y.crossVectors(S,E);let I=y.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,I)}for(let x=0,E=M.length;x<E;++x){let A=M[x],I=A.start,L=A.count;for(let F=I,C=I+L;F<C;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new xt(f,h,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_o=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Nn=new P,Mr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ch=new P,i0=new P,s0=new tt,fi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ch.subVectors(n,t).cross(i0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||s0.getNormalMatrix(e),s=this.coplanarPoint(ch).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},r0=0,pi=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Pr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qt=class extends pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,jr=new P,lr=new P,cr=new P,hr=new ae,eo=new ae,sd=new it,Ma=new P,to=new P,Sa=new P,Qu=new ae,hh=new ae,ju=new ae,on=class extends rn{constructor(e=new Qt){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _o(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Mr(n,3,0,!1)),ar.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),sd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ea(Ma.set(-.5,-.5,0),cr,o,lr,s,r),Ea(to.set(.5,-.5,0),cr,o,lr,s,r),Ea(Sa.set(.5,.5,0),cr,o,lr,s,r),Qu.set(0,0),hh.set(1,0),ju.set(1,1);let a=e.ray.intersectTriangle(Ma,to,Sa,!1,jr);if(a===null&&(Ea(to.set(-.5,.5,0),cr,o,lr,s,r),hh.set(0,1),a=e.ray.intersectTriangle(Ma,Sa,to,!1,jr),a===null))return;let l=e.ray.origin.distanceTo(jr);l<e.near||l>e.far||t.push({distance:l,point:jr.clone(),uv:zi.getInterpolation(jr,Ma,to,Sa,Qu,hh,ju,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ea(i,e,t,n,s,r){hr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(eo.x=r*hr.x-s*hr.y,eo.y=s*hr.x+r*hr.y):eo.copy(hr),i.copy(e),i.x+=eo.x,i.y+=eo.y,i.applyMatrix4(sd)}var Hi=new P,uh=new P,ba=new P,Ta=new P,vo=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uh.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Ta.copy(this.origin).sub(uh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=Ta.dot(this.direction),l=-Ta.dot(ba),c=Ta.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(uh).addScaledVector(ba,f),u}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,f=e.y-o.y,u=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,w=n.z-o.z,y=Math.abs(l),v=Math.abs(c),S=Math.abs(h),b,x,E,A,I,L,F,C,U,k,O,H;if(y>=v&&y>=S?(E=l,L=d,U=p,H=g,l>=0?(b=c,x=h,A=f,I=u,F=_,C=m,k=M,O=w):(b=h,x=c,A=u,I=f,F=m,C=_,k=w,O=M)):v>=S?(E=c,L=f,U=_,H=M,c>=0?(b=h,x=l,A=u,I=d,F=m,C=p,k=w,O=g):(b=l,x=h,A=d,I=u,F=p,C=m,k=g,O=w)):(E=h,L=u,U=m,H=w,h>=0?(b=l,x=c,A=d,I=f,F=p,C=_,k=g,O=M):(b=c,x=l,A=f,I=d,F=_,C=p,k=M,O=g)),E===0)return null;let B=b/E,G=x/E,D=1/E,J=A-B*L,Y=I-G*L,ue=F-B*U,me=C-G*U,Pe=k-B*H,K=O-G*H,ne=Pe*me-K*ue,pe=J*K-Y*Pe,De=ue*Y-me*J;if(s){if(ne<0||pe<0||De<0)return null}else if((ne<0||pe<0||De<0)&&(ne>0||pe>0||De>0))return null;let ve=ne+pe+De;if(ve===0)return null;let ze=D*(ne*L+pe*U+De*H);return(ve>0?ze<0:ze>0)?null:this.at(ze/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ef=new it,Is=new vo,wa=new Wi,tf=new P,Aa=new P,Ra=new P,Ca=new P,fh=new P,Pa=new P,nf=new P,Ia=new P,Ae=class extends rn{constructor(e=new rt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(fh.fromBufferAttribute(d,e),o?Pa.addScaledVector(fh,h):Pa.addScaledVector(fh.sub(t),h))}t.add(Pa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(wa.containsPoint(Is.origin)===!1&&(Is.intersectSphere(wa,tf)===null||Is.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(r).invert(),Is.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),w=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=M,v=w;y<v;y+=3){let S=a.getX(y),b=a.getX(y+1),x=a.getX(y+2);s=La(this,g,e,n,c,h,d,S,b,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let M=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=La(this,o,e,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],M=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=M,v=w;y<v;y+=3){let S=y,b=y+1,x=y+2;s=La(this,g,e,n,c,h,d,S,b,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let M=m,w=m+1,y=m+2;s=La(this,o,e,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function o0(i,e,t,n,s,r,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Zi,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:i}}function La(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Aa),i.getVertexPosition(l,Ra),i.getVertexPosition(c,Ca);let h=o0(i,e,t,n,Aa,Ra,Ca,nf);if(h){let d=new P;zi.getBarycoord(nf,Aa,Ra,Ca,d),s&&(h.uv=zi.getInterpolatedAttribute(s,a,l,c,d,new ae)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,l,c,d,new ae)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};zi.getNormal(Aa,Ra,Ca,f.normal),h.face=f,h.barycoord=d}return h}var Us=class extends Un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=xn,h=xn,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new it,sf=new it,Da=[],rf=new Kn,a0=new it,no=new Ae,io=new Wi,Ot=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,a0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),rf.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(rf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),io.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),e.ray.intersectsSphere(io)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),sf.multiplyMatrices(n,ur),no.matrixWorld=sf,no.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){let l=Da[o];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Us(new Float32Array(s*this.count),s,this.count,Dr,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ls=new Wi,l0=new ae(.5,.5),Na=new P,Er=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],_=r[9],m=r[10],g=r[11],M=r[12],w=r[13],y=r[14],v=r[15];if(s[0].setComponents(c-o,u-h,g-p,v-M).normalize(),s[1].setComponents(c+o,u+h,g+p,v+M).normalize(),s[2].setComponents(c+a,u+d,g+_,v+w).normalize(),s[3].setComponents(c-a,u-d,g-_,v-w).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,u-f,g-m,v-y).normalize();else if(s[4].setComponents(c-l,u-f,g-m,v-y).normalize(),t===di)s[5].setComponents(c+l,u+f,g+m,v+y).normalize();else if(t===xr)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=l0.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tl=class extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},of=new it,Sh=new vo,Ua=new Wi,Fa=new P,mi=class extends rn{constructor(e=new rt,t=new tl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;of.copy(s).invert(),Sh.copy(e.ray).applyMatrix4(of);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,_=u;p<_;p++){let m=c.getX(p);Fa.fromBufferAttribute(d,m),af(Fa,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,_=u;p<_;p++)Fa.fromBufferAttribute(d,p),af(Fa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function af(i,e,t,n,s,r,o){let a=Sh.distanceSqToPoint(i);if(a<t){let l=new P;Sh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yo=class extends Un{constructor(e=[],t=ps,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qn=class extends Un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends Un{constructor(e,t,n=_i,s,r,o,a=xn,l=xn,c,h=Ri,d=1){if(h!==Ri&&h!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nl=class extends ls{constructor(e,t=_i,n=ps,s,r,o=xn,a=xn,l,c=Ri){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mo=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class i extends rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function p(_,m,g,M,w,y,v,S,b,x,E){let A=y/b,I=v/x,L=y/2,F=v/2,C=S/2,U=b+1,k=x+1,O=0,H=0,B=new P;for(let G=0;G<k;G++){let D=G*I-F;for(let J=0;J<U;J++){let Y=J*A-L;B[_]=Y*M,B[m]=D*w,B[g]=C,c.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[g]=S>0?1:-1,h.push(B.x,B.y,B.z),d.push(J/b),d.push(1-G/x),O+=1}}for(let G=0;G<x;G++)for(let D=0;D<b;D++){let J=f+D+U*G,Y=f+D+U*(G+1),ue=f+(D+1)+U*(G+1),me=f+(D+1)+U*G;l.push(J,Y,me),l.push(Y,ue,me),H+=6}a.addGroup(u,H,E),u+=H,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Rn=class i extends rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,_=s+1,m=new P,g=new P;for(let M=0;M<=p;M++){let w=0,y=0,v=0,S=0;if(M<=n){let E=M/n,A=E*Math.PI/2;y=-h-e*Math.cos(A),v=e*Math.sin(A),S=-e*Math.cos(A),w=E*d}else if(M<=n+r){let E=(M-n)/r;y=-h+E*t,v=e,S=0,w=d+E*f}else{let E=(M-n-r)/n,A=E*Math.PI/2;y=h+e*Math.sin(A),v=e*Math.cos(A),S=e*Math.sin(A),w=d+f+E*d}let b=Math.max(0,Math.min(1,w/u)),x=0;M===0?x=.5/s:M===p&&(x=-.5/s);for(let E=0;E<=s;E++){let A=E/s,I=A*Math.PI*2,L=Math.sin(I),F=Math.cos(I);g.x=-v*F,g.y=y,g.z=v*L,a.push(g.x,g.y,g.z),m.set(-v*F,S,v*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+x,b)}if(M>0){let E=(M-1)*_;for(let A=0;A<s;A++){let I=E+A,L=E+A+1,F=M*_+A,C=M*_+A+1;o.push(I,L,F),o.push(L,C,F)}}}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var ut=class i extends rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,_=[],m=n/2,g=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(u,2));function M(){let y=new P,v=new P,S=0,b=(t-e)/n;for(let x=0;x<=r;x++){let E=[],A=x/r,I=A*(t-e)+e;for(let L=0;L<=s;L++){let F=L/s,C=F*l+a,U=Math.sin(C),k=Math.cos(C);v.x=I*U,v.y=-A*n+m,v.z=I*k,d.push(v.x,v.y,v.z),y.set(U,b,k).normalize(),f.push(y.x,y.y,y.z),u.push(F,1-A),E.push(p++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){let A=_[E][x],I=_[E+1][x],L=_[E+1][x+1],F=_[E][x+1];(e>0||E!==0)&&(h.push(A,I,F),S+=3),(t>0||E!==r-1)&&(h.push(I,L,F),S+=3)}c.addGroup(g,S,0),g+=S}function w(y){let v=p,S=new ae,b=new P,x=0,E=y===!0?e:t,A=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*A,0),f.push(0,A,0),u.push(.5,.5),p++;let I=p;for(let L=0;L<=s;L++){let C=L/s*l+a,U=Math.cos(C),k=Math.sin(C);b.x=E*k,b.y=m*A,b.z=E*U,d.push(b.x,b.y,b.z),f.push(0,A,0),S.x=U*.5+.5,S.y=k*.5*A+.5,u.push(S.x,S.y),p++}for(let L=0;L<s;L++){let F=v+L,C=I+L;y===!0?h.push(C,C+1,F):h.push(C+1,C,F),x+=3}c.addGroup(g,x,y===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},At=class i extends ut{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},il=class i extends rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new P,y=new P,v=new P;for(let S=0;S<t.length;S+=3)u(t[S+0],w),u(t[S+1],y),u(t[S+2],v),l(w,y,v,M)}function l(M,w,y,v){let S=v+1,b=[];for(let x=0;x<=S;x++){b[x]=[];let E=M.clone().lerp(y,x/S),A=w.clone().lerp(y,x/S),I=S-x;for(let L=0;L<=I;L++)L===0&&x===S?b[x][L]=E:b[x][L]=E.clone().lerp(A,L/I)}for(let x=0;x<S;x++)for(let E=0;E<2*(S-x)-1;E++){let A=Math.floor(E/2);E%2===0?(f(b[x][A+1]),f(b[x+1][A]),f(b[x][A])):(f(b[x][A+1]),f(b[x+1][A+1]),f(b[x+1][A]))}}function c(M){let w=new P;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let y=m(M)/2/Math.PI+.5,v=g(M)/Math.PI+.5;o.push(y,1-v)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){let w=o[M+0],y=o[M+2],v=o[M+4],S=Math.max(w,y,v),b=Math.min(w,y,v);S>.9&&b<.1&&(w<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),v<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,w){let y=M*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function p(){let M=new P,w=new P,y=new P,v=new P,S=new ae,b=new ae,x=new ae;for(let E=0,A=0;E<r.length;E+=9,A+=6){M.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(o[A+0],o[A+1]),b.set(o[A+2],o[A+3]),x.set(o[A+4],o[A+5]),v.copy(M).add(w).add(y).divideScalar(3);let I=m(v);_(S,A+0,M,I),_(b,A+2,w,I),_(x,A+4,y,I)}}function _(M,w,y,v){v<0&&M.x===1&&(o[w]=M.x-1),y.x===0&&y.z===0&&(o[w]=v/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new it;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(lt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(lt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},br=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sl=class extends br{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var lf=new P,cf=new P,dh=new Xh,ph=new Xh,mh=new Xh,Fn=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(cf.subVectors(s[0],s[1]).add(s[0]),c=cf);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(lf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lf),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),dh.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,_,m),ph.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,_,m),mh.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ph.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),mh.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(dh.calc(l),ph.calc(l),mh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function c0(i,e){let t=1-i;return t*t*e}function h0(i,e){return 2*(1-i)*i*e}function u0(i,e){return i*i*e}function ro(i,e,t,n){return c0(i,e)+h0(i,t)+u0(i,n)}function f0(i,e){let t=1-i;return t*t*t*e}function d0(i,e){let t=1-i;return 3*t*t*i*e}function p0(i,e){return 3*(1-i)*i*i*e}function m0(i,e){return i*i*i*e}function oo(i,e,t,n,s){return f0(i,e)+d0(i,t)+p0(i,n)+m0(i,s)}var So=class extends kn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oo(e,s.x,r.x,o.x,a.x),oo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends kn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oo(e,s.x,r.x,o.x,a.x),oo(e,s.y,r.y,o.y,a.y),oo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eo=class extends kn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends kn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bo=class extends kn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ro(e,s.x,r.x,o.x),ro(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends kn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ro(e,s.x,r.x,o.x),ro(e,s.y,r.y,o.y),ro(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(hf(a,l.x,c.x,h.x,d.x),hf(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},ol=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:Fn,CubicBezierCurve:So,CubicBezierCurve3:rl,EllipseCurve:br,LineCurve:Eo,LineCurve3:Fs,QuadraticBezierCurve:bo,QuadraticBezierCurve3:To,SplineCurve:wo}),Tr=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ol[s.type]().fromJSON(s))}return this}},Ao=class extends Tr{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Eo(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new bo(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new So(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new br(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},It=class extends Ao{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ao().fromJSON(s))}return this}};function g0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=rd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=M0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let f=t;f<s;f+=t){let u=i[f],p=i[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ro(r,o,t,a,l,c,0),o}function rd(i,e,t,n,s){let r;if(s===L0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=uf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=uf(o/n|0,i[o],i[o+1],r);return r&&wr(r,r.next)&&(Po(r),r=r.next),r}function Bs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wr(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Po(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ro(i,e,t,n,s,r,o){if(!i)return;!o&&r&&w0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?_0(i,n,s,r):x0(i)){e.push(l.i,i.i,c.i),Po(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=v0(Bs(i),e),Ro(i,e,t,n,s,r,2)):o===2&&y0(i,e,t,n,s,r):Ro(Bs(i),e,t,n,s,r,1);break}}}function x0(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&so(s,a,r,l,o,c,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function _0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),_=Math.max(a,l,c),m=Math.max(h,d,f),g=Eh(u,p,e,t,n),M=Eh(_,m,e,t,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=g&&y&&y.z<=M;){if(w.x>=u&&w.x<=_&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&so(a,h,l,d,c,f,w.x,w.y)&&Vt(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=u&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&so(a,h,l,d,c,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=g;){if(w.x>=u&&w.x<=_&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&so(a,h,l,d,c,f,w.x,w.y)&&Vt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=u&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&so(a,h,l,d,c,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function v0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!wr(n,s)&&ad(n,t,t.next,s)&&Co(n,s)&&Co(s,n)&&(e.push(n.i,t.i,s.i),Po(t),Po(t.next),t=i=s),t=t.next}while(t!==i);return Bs(t)}function y0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C0(o,a)){let l=ld(o,a);o=Bs(o,o.next),l=Bs(l,l.next),Ro(o,e,t,n,s,r,0),Ro(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function M0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=rd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(R0(c))}s.sort(S0);for(let r=0;r<s.length;r++)t=E0(s[r],t);return t}function S0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function E0(i,e){let t=b0(i,e);if(!t)return e;let n=ld(t,i);return Bs(n,n.next),Bs(t,t.next)}function b0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(wr(i,t))return t;do{if(wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&od(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Co(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&T0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function T0(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function w0(i,e,t,n){let s=i;do s.z===0&&(s.z=Eh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,A0(s)}function A0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Eh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function R0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function od(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function so(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&od(i,e,t,n,s,r,o,a)}function C0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!P0(i,e)&&(Co(i,e)&&Co(e,i)&&I0(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||wr(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wr(i,e){return i.x===e.x&&i.y===e.y}function ad(i,e,t,n){let s=Oa(Vt(i,e,t)),r=Oa(Vt(i,e,n)),o=Oa(Vt(t,n,i)),a=Oa(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ba(i,t,e)||r===0&&Ba(i,n,e)||o===0&&Ba(t,i,n)||a===0&&Ba(t,e,n))}function Ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Oa(i){return i>0?1:i<0?-1:0}function P0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Co(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function I0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ld(i,e){let t=bh(i.i,i.x,i.y),n=bh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uf(i,e,t,n){let s=bh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Po(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Th=class{static triangulate(e,t,n=2){return g0(e,t,n)}},Ai=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ff(e),df(n,e);let o=e.length;t.forEach(ff);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,df(n,t[l]);let a=Th.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ff(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function df(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Cn=class i extends rt{constructor(e=new It([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Le(s,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:D0,w,y=!1,v,S,b,x;if(g){w=g.getSpacedPoints(h),y=!0,f=!1;let V=g.isCatmullRomCurve3?g.closed:!1;v=g.computeFrenetFrames(h,V),S=new P,b=new P,x=new P}f||(m=0,u=0,p=0,_=0);let E=a.extractPoints(c),A=E.shape,I=E.holes;if(!Ai.isClockWise(A)){A=A.reverse();for(let V=0,Q=I.length;V<Q;V++){let ie=I[V];Ai.isClockWise(ie)&&(I[V]=ie.reverse())}}function F(V){let ie=10000000000000001e-36,q=V[0];for(let se=1;se<=V.length;se++){let fe=se%V.length,xe=V[fe],Te=xe.x-q.x,Be=xe.y-q.y,z=Te*Te+Be*Be,ft=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(q.x),Math.abs(q.y)),st=ie*ft*ft;if(z<=st){V.splice(fe,1),se--;continue}q=xe}}F(A),I.forEach(F);let C=I.length,U=A;for(let V=0;V<C;V++){let Q=I[V];A=A.concat(Q)}function k(V,Q,ie){return Q||$e("ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(Q,ie)}let O=A.length;function H(V,Q,ie){let q,se,fe,xe=V.x-Q.x,Te=V.y-Q.y,Be=ie.x-V.x,z=ie.y-V.y,ft=xe*xe+Te*Te,st=xe*z-Te*Be;if(Math.abs(st)>Number.EPSILON){let N=Math.sqrt(ft),T=Math.sqrt(Be*Be+z*z),Z=Q.x-Te/N,$=Q.y+xe/N,re=ie.x-z/T,ge=ie.y+Be/T,_e=((re-Z)*z-(ge-$)*Be)/(xe*z-Te*Be);q=Z+xe*_e-V.x,se=$+Te*_e-V.y;let oe=q*q+se*se;if(oe<=2)return new ae(q,se);fe=Math.sqrt(oe/2)}else{let N=!1;xe>Number.EPSILON?Be>Number.EPSILON&&(N=!0):xe<-Number.EPSILON?Be<-Number.EPSILON&&(N=!0):Math.sign(Te)===Math.sign(z)&&(N=!0),N?(q=-Te,se=xe,fe=Math.sqrt(ft)):(q=xe,se=Te,fe=Math.sqrt(ft/2))}return new ae(q/fe,se/fe)}let B=[];for(let V=0,Q=U.length,ie=Q-1,q=V+1;V<Q;V++,ie++,q++)ie===Q&&(ie=0),q===Q&&(q=0),B[V]=H(U[V],U[ie],U[q]);let G=[],D,J=B.concat();for(let V=0,Q=C;V<Q;V++){let ie=I[V];D=[];for(let q=0,se=ie.length,fe=se-1,xe=q+1;q<se;q++,fe++,xe++)fe===se&&(fe=0),xe===se&&(xe=0),D[q]=H(ie[q],ie[fe],ie[xe]);G.push(D),J=J.concat(D)}let Y;if(m===0)Y=Ai.triangulateShape(U,I);else{let V=[],Q=[];for(let ie=0;ie<m;ie++){let q=ie/m,se=u*Math.cos(q*Math.PI/2),fe=p*Math.sin(q*Math.PI/2)+_;for(let xe=0,Te=U.length;xe<Te;xe++){let Be=k(U[xe],B[xe],fe);pe(Be.x,Be.y,-se),q===0&&V.push(Be)}for(let xe=0,Te=C;xe<Te;xe++){let Be=I[xe];D=G[xe];let z=[];for(let ft=0,st=Be.length;ft<st;ft++){let N=k(Be[ft],D[ft],fe);pe(N.x,N.y,-se),q===0&&z.push(N)}q===0&&Q.push(z)}}Y=Ai.triangulateShape(V,Q)}let ue=Y.length,me=p+_;for(let V=0;V<O;V++){let Q=f?k(A[V],J[V],me):A[V];y?(b.copy(v.normals[0]).multiplyScalar(Q.x),S.copy(v.binormals[0]).multiplyScalar(Q.y),x.copy(w[0]).add(b).add(S),pe(x.x,x.y,x.z)):pe(Q.x,Q.y,0)}for(let V=1;V<=h;V++)for(let Q=0;Q<O;Q++){let ie=f?k(A[Q],J[Q],me):A[Q];y?(b.copy(v.normals[V]).multiplyScalar(ie.x),S.copy(v.binormals[V]).multiplyScalar(ie.y),x.copy(w[V]).add(b).add(S),pe(x.x,x.y,x.z)):pe(ie.x,ie.y,d/h*V)}for(let V=m-1;V>=0;V--){let Q=V/m,ie=u*Math.cos(Q*Math.PI/2),q=p*Math.sin(Q*Math.PI/2)+_;for(let se=0,fe=U.length;se<fe;se++){let xe=k(U[se],B[se],q);pe(xe.x,xe.y,d+ie)}for(let se=0,fe=I.length;se<fe;se++){let xe=I[se];D=G[se];for(let Te=0,Be=xe.length;Te<Be;Te++){let z=k(xe[Te],D[Te],q);y?pe(z.x,z.y+w[h-1].y,w[h-1].x+ie):pe(z.x,z.y,d+ie)}}}Pe(),K();function Pe(){let V=s.length/3;if(f){let Q=0,ie=O*Q;for(let q=0;q<ue;q++){let se=Y[q];De(se[2]+ie,se[1]+ie,se[0]+ie)}Q=h+m*2,ie=O*Q;for(let q=0;q<ue;q++){let se=Y[q];De(se[0]+ie,se[1]+ie,se[2]+ie)}}else{for(let Q=0;Q<ue;Q++){let ie=Y[Q];De(ie[2],ie[1],ie[0])}for(let Q=0;Q<ue;Q++){let ie=Y[Q];De(ie[0]+O*h,ie[1]+O*h,ie[2]+O*h)}}n.addGroup(V,s.length/3-V,0)}function K(){let V=s.length/3,Q=0;ne(U,Q),Q+=U.length;for(let ie=0,q=I.length;ie<q;ie++){let se=I[ie];ne(se,Q),Q+=se.length}n.addGroup(V,s.length/3-V,1)}function ne(V,Q){let ie=V.length;for(;--ie>=0;){let q=ie,se=ie-1;se<0&&(se=V.length-1);for(let fe=0,xe=h+m*2;fe<xe;fe++){let Te=O*fe,Be=O*(fe+1),z=Q+q+Te,ft=Q+se+Te,st=Q+se+Be,N=Q+q+Be;ve(z,ft,st,N)}}}function pe(V,Q,ie){l.push(V),l.push(Q),l.push(ie)}function De(V,Q,ie){ze(V),ze(Q),ze(ie);let q=s.length/3,se=M.generateTopUV(n,s,q-3,q-2,q-1);et(se[0]),et(se[1]),et(se[2])}function ve(V,Q,ie,q){ze(V),ze(Q),ze(q),ze(Q),ze(ie),ze(q);let se=s.length/3,fe=M.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);et(fe[0]),et(fe[1]),et(fe[3]),et(fe[1]),et(fe[2]),et(fe[3])}function ze(V){s.push(l[V*3+0]),s.push(l[V*3+1]),s.push(l[V*3+2])}function et(V){r.push(V.x),r.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return N0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ol[s.type]().fromJSON(s)),new i(n,e.options)}},D0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],u=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-d),new ae(f,1-p),new ae(_,1-g)]:[new ae(a,1-l),new ae(h,1-d),new ae(u,1-p),new ae(m,1-g)]}};function N0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Gn=class i extends il{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Os=class i extends rt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new P,f=new ae,u=new P,p=new P,_=new P,m=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(p)}for(let M=0;M<=t;M++){let w=n+M*h*s,y=Math.sin(w),v=Math.cos(w);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*y,d.y=e[S].y,d.z=e[S].x*v,o.push(d.x,d.y,d.z),f.x=M/t,f.y=S/(e.length-1),a.push(f.x,f.y);let b=l[3*S+0]*y,x=l[3*S+1],E=l[3*S+0]*v;c.push(b,x,E)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){let y=w+M*e.length,v=y,S=y+e.length,b=y+e.length+1,x=y+1;r.push(v,S,x),r.push(b,x,S)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var mt=class i extends rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,u=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let M=g*f-o;for(let w=0;w<c;w++){let y=w*d-r;p.push(y,-M,0),_.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let w=M+c*g,y=M+c*(g+1),v=M+1+c*(g+1),S=M+1+c*g;u.push(w,y,S),u.push(y,v,S)}this.setIndex(u),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Xi=class i extends rt{constructor(e=new It([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(o,2));function c(h){let d=s.length/3,f=h.extractPoints(t),u=f.shape,p=f.holes;Ai.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){let M=p[m];Ai.isClockWise(M)===!0&&(p[m]=M.reverse())}let _=Ai.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){let M=p[m];u=u.concat(M)}for(let m=0,g=u.length;m<g;m++){let M=u[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=_.length;m<g;m++){let M=_[m],w=M[0]+d,y=M[1]+d,v=M[2]+d;n.push(w,y,v),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return U0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function U0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var je=class i extends rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,f=new P,u=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let M=[],w=g/n,y=o+w*a,v=e*Math.cos(y),S=Math.sqrt(e*e-v*v),b=0;g===0&&o===0?b=.5/t:g===n&&l===Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){let E=x/t,A=s+E*r;d.x=-S*Math.cos(A),d.y=v,d.z=S*Math.sin(A),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(E+b,1-w),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let w=h[g][M+1],y=h[g][M],v=h[g+1][M],S=h[g+1][M+1];(g!==0||o>0)&&u.push(w,y,S),(g!==n-1||l<Math.PI)&&u.push(y,v,S)}this.setIndex(u),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jt=class i extends rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],f=new P,u=new P,p=new P;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=s;g++){let M=g/s*r;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,w=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(g,M,y),l.push(M,w,y)}this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var qi=class i extends rt{constructor(e=new To(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new ae,h=new P,d=[],f=[],u=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(u,2));function _(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),g()}function m(w){h=e.getPointAt(w/t,h);let y=o.normals[w],v=o.binormals[w];for(let S=0;S<=s;S++){let b=S/s*Math.PI*2,x=Math.sin(b),E=-Math.cos(b);l.x=E*y.x+x*v.x,l.y=E*y.y+x*v.y,l.z=E*y.z+x*v.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=t;w++)for(let y=1;y<=s;y++){let v=(s+1)*(w-1)+(y-1),S=(s+1)*w+(y-1),b=(s+1)*w+y,x=(s+1)*(w-1)+y;p.push(v,S,x),p.push(S,b,x)}}function M(){for(let w=0;w<=t;w++)for(let y=0;y<=s;y++)c.x=w/t,c.y=y/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ol[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(pf(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(pf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=Ws(i[t]);for(let s in n)e[s]=n[s]}return e}function pf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function F0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var vi={clone:Ws,merge:In},B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ct=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=F0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ar=class extends ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qe=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Io=class extends pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=Sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},al=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var cs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cl=class extends cs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yh:r=e,a=2*t-n;break;case Mh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yh:o=e,l=2*n-t;break;case Mh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,w=(-1-u)*m+(1.5+u)*_+.5*p,y=u*m-u*_;for(let v=0;v!==a;++v)r[v]=g*o[h+v]+M*o[c+v]+w*o[l+v]+y*o[d+v];return r}},hl=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},ul=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fl=class extends cs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let f=a*2,u=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=u*f+p*2,M=d[g],w=d[g+1],y=e*f+p*2,v=h[y],S=h[y+1],b=z0(n,t,M,v,s);r[p]=cd(b,_,w,S,m)}return r}};function cd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function H0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function z0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=cd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=H0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fr(t,this.TimeBufferType),this.values=fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fr(e.times,Array),values:fr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),gh(e.settings)&&(n.settings={inTangents:fr(e.settings.inTangents,Array),outTangents:fr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ao:t=this.InterpolantFactoryMethodDiscrete;break;case Ka:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break;case _h:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;gh(this.settings)&&(mf(this.settings.inTangents,e),mf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Gp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[f+p]||_!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,gh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Ka;var hs=class extends Vn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ao;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};dl.prototype.ValueTypeName="color";var pl=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};pl.prototype.ValueTypeName="number";var ml=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)zt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lo=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Vn{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=ao;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};gl.prototype.ValueTypeName="vector";var xl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hd=new xl,_l=class{constructor(e){this.manager=e!==void 0?e:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zs=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xh=new it,gf=new P,xf=new P,Rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ha=new P,za=new zt,bi=new P,Do=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ha,za,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,za,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ha,za,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,za,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new P,_f=new ae,vf=new ae,Zt=class extends Do{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,_f,vf),t.subVectors(vf,_f)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wh=class extends Rr{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},No=class extends Hs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ah=class extends Rr{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},Yi=class extends Hs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fs=class extends Do{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rh=class extends Rr{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var dr=-90,pr=1,vl=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(dr,pr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(dr,pr,e,t);r.layers=this.layers,this.add(r);let o=new Zt(dr,pr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(dr,pr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(dr,pr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(dr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},yl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Uo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=k0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function k0(){this._document.hidden===!1&&this.reset()}var Yh="\\[\\]\\.:\\/",G0=new RegExp("["+Yh+"]","g"),Zh="[^"+Yh+"]",V0="[^"+Yh.replace("\\.","")+"]",W0=/((?:WC+[\/:])*)/.source.replace("WC",Zh),X0=/(WCOD+)?/.source.replace("WCOD",V0),q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zh),Y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zh),Z0=new RegExp("^"+W0+X0+q0+Y0+"$"),J0=["material","materials","bones","map"],Ch=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(G0,"")}static parseTrackName(e){let t=Z0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);J0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Ch;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var By=new Float32Array(1);var eu=class eu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};eu.prototype.isMatrix2=!0;var Ph=eu;function Jh(i,e,t,n){let s=$0(n);switch(t){case kh:return i*e;case Dr:return i*e/s.components*s.byteLength;case Cl:return i*e/s.components*s.byteLength;case xs:return i*e*2/s.components*s.byteLength;case Pl:return i*e*2/s.components*s.byteLength;case Gh:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case Il:return i*e*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Ul:return Math.max(i,16)*Math.max(e,8)/4;case Ll:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case Fl:case Bl:case Hl:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Zo:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nc:case ic:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rc:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jo:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(i){switch(i){case Pn:case Bh:return{byteLength:1,components:1};case Ir:case Oh:case hn:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case _i:case wl:case ei:return{byteLength:4,components:1};case Hh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ld(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
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
#endif`,eg=`uniform sampler2D dfgLUT;
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
}`,tg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`#include <common>
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
}`,cx=`#if DEPTH_PACKING == 3200
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
}`,hx=`#define DISTANCE
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
}`,ux=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,yx=`#define MATCAP
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
}`,Mx=`#define MATCAP
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
}`,Sx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,bx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define TOON
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
}`,Cx=`#define TOON
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
}`,Px=`uniform float size;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Dx=`uniform vec3 color;
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
}`,Nx=`uniform float rotation;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:fm,beginnormal_vertex:dm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:Em,color_vertex:bm,common:Tm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Zm,envmap_vertex:Om,fog_vertex:Hm,fog_pars_vertex:zm,fog_fragment:km,fog_pars_fragment:Gm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Jm,lights_toon_pars_fragment:$m,lights_phong_fragment:Km,lights_phong_pars_fragment:Qm,lights_physical_fragment:jm,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:fg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:xg,morphtarget_pars_vertex:_g,morphtarget_vertex:vg,normal_fragment_begin:yg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:Eg,normal_vertex:bg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Pg,packing:Ig,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Hg,shadowmap_vertex:zg,shadowmask_pars_fragment:kg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Zg,tonemapping_pars_fragment:Jg,transmission_fragment:$g,transmission_pars_fragment:Kg,uv_pars_fragment:Qg,uv_pars_vertex:jg,uv_vertex:ex,worldpos_vertex:tx,background_vert:nx,background_frag:ix,backgroundCube_vert:sx,backgroundCube_frag:rx,cube_vert:ox,cube_frag:ax,depth_vert:lx,depth_frag:cx,distance_vert:hx,distance_frag:ux,equirect_vert:fx,equirect_frag:dx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:xx,meshlambert_vert:_x,meshlambert_frag:vx,meshmatcap_vert:yx,meshmatcap_frag:Mx,meshnormal_vert:Sx,meshnormal_frag:Ex,meshphong_vert:bx,meshphong_frag:Tx,meshphysical_vert:wx,meshphysical_frag:Ax,meshtoon_vert:Rx,meshtoon_frag:Cx,points_vert:Px,points_frag:Ix,shadow_vert:Lx,shadow_frag:Dx,sprite_vert:Nx,sprite_frag:Ux},be={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Ii={basic:{uniforms:In([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:In([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:In([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:In([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:In([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new le(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:In([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:In([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:In([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:In([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:In([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:In([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:In([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:In([be.lights,be.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ii.physical={uniforms:In([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var hc={r:0,b:0,g:0},Fx=new it,Dd=new tt;Dd.set(-1,0,0,0,1,0,0,0,1);function Bx(i,e,t,n,s,r){let o=new le(0),a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function p(M){let w=!1,y=u(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,w){let y=u(w);y&&(y.isCubeTexture||y.mapping===Go)?(c===void 0&&(c=new Ae(new Gt(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Ws(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dd),c.material.toneMapped=ht.getTransfer(y.colorSpace)!==yt,(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ae(new mt(2,2),new ct({name:"BackgroundMaterial",uniforms:Ws(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(hc,qh(i)),t.buffers.color.setClear(hc.r,hc.g,hc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:_,dispose:g}}function Ox(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,L,F,C,U){let k=!1,O=d(I,C,F,L);r!==O&&(r=O,c(r.object)),k=u(I,C,F,U),k&&p(I,C,F,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(I,L,F,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,L,F,C){let U=C.wireframe===!0,k=n[L.id];k===void 0&&(k={},n[L.id]=k);let O=I.isInstancedMesh===!0?I.id:0,H=k[O];H===void 0&&(H={},k[O]=H);let B=H[F.id];B===void 0&&(B={},H[F.id]=B);let G=B[U];return G===void 0&&(G=f(l()),B[U]=G),G}function f(I){let L=[],F=[],C=[];for(let U=0;U<t;U++)L[U]=0,F[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:C,object:I,attributes:{},index:null}}function u(I,L,F,C){let U=r.attributes,k=L.attributes,O=0,H=F.getAttributes();for(let B in H)if(H[B].location>=0){let D=U[B],J=k[B];if(J===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function p(I,L,F,C){let U={},k=L.attributes,O=0,H=F.getAttributes();for(let B in H)if(H[B].location>=0){let D=k[B];D===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(D=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(D=I.instanceColor));let J={};J.attribute=D,D&&D.data&&(J.data=D.data),U[B]=J,O++}r.attributes=U,r.attributesNum=O,r.index=C}function _(){let I=r.newAttributes;for(let L=0,F=I.length;L<F;L++)I[L]=0}function m(I){g(I,0)}function g(I,L){let F=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;F[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),U[I]!==L&&(i.vertexAttribDivisor(I,L),U[I]=L)}function M(){let I=r.newAttributes,L=r.enabledAttributes;for(let F=0,C=L.length;F<C;F++)L[F]!==I[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function w(I,L,F,C,U,k,O){O===!0?i.vertexAttribIPointer(I,L,F,U,k):i.vertexAttribPointer(I,L,F,C,U,k)}function y(I,L,F,C){_();let U=C.attributes,k=F.getAttributes(),O=L.defaultAttributeValues;for(let H in k){let B=k[H];if(B.location>=0){let G=U[H];if(G===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let D=G.normalized,J=G.itemSize,Y=e.get(G);if(Y===void 0)continue;let ue=Y.buffer,me=Y.type,Pe=Y.bytesPerElement,K=me===i.INT||me===i.UNSIGNED_INT||G.gpuType===wl;if(G.isInterleavedBufferAttribute){let ne=G.data,pe=ne.stride,De=G.offset;if(ne.isInstancedInterleavedBuffer){for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve,ne.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<B.locationSize;ve++)m(B.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ve=0;ve<B.locationSize;ve++)w(B.location+ve,J/B.locationSize,me,D,pe*Pe,(De+J/B.locationSize*ve)*Pe,K)}else{if(G.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)g(B.location+ne,G.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ne=0;ne<B.locationSize;ne++)m(B.location+ne);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ne=0;ne<B.locationSize;ne++)w(B.location+ne,J/B.locationSize,me,D,J*Pe,J/B.locationSize*ne*Pe,K)}}else if(O!==void 0){let D=O[H];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(B.location,D);break;case 3:i.vertexAttrib3fv(B.location,D);break;case 4:i.vertexAttrib4fv(B.location,D);break;default:i.vertexAttrib1fv(B.location,D)}}}}M()}function v(){E();for(let I in n){let L=n[I];for(let F in L){let C=L[F];for(let U in C){let k=C[U];for(let O in k)h(k[O].object),delete k[O];delete C[U]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let F in L){let C=L[F];for(let U in C){let k=C[U];for(let O in k)h(k[O].object),delete k[O];delete C[U]}}delete n[I.id]}function b(I){for(let L in n){let F=n[L];for(let C in F){let U=F[C];if(U[I.id]===void 0)continue;let k=U[I.id];for(let O in k)h(k[O].object),delete k[O];delete U[I.id]}}}function x(I){for(let L in n){let F=n[L],C=I.isInstancedMesh===!0?I.id:0,U=F[C];if(U!==void 0){for(let k in U){let O=U[k];for(let H in O)h(O[H].object),delete O[H];delete U[k]}delete F[C],Object.keys(F).length===0&&delete n[L]}}}function E(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Hx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function zx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==ti&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let x=b===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Pn&&b!==ei&&!x&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:v,samples:S}}function kx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new fi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,y=g.clippingState||null;l.value=y,y=h(p,f,w,u);for(let v=0;v!==w;++v)y[v]=t[v];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=u+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,y=u;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ur=4,Gx=6,Vx=20,Wx=256,Ko=new fs,ud=new le,tu=null,nu=0,iu=0,su=!1,Xx=new P,Xs=new P,_s=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Xx}=r;tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=su,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:hn,format:ti,colorSpace:lo,depthBuffer:!1},s=fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qx(r)),this._blurMaterial=Zx(r,e,t),this._ggxMaterial=Yx(r,e,t)}return s}_compileMaterial(e){let t=new Ae(new rt,e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,s,r){let l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(ud),d.toneMapping=gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new Gt,new vt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(ud),g=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let v=this._cubeSize;Nr(s,y*v,w>2?v:0,v,v),d.setRenderTarget(s),g&&d.render(_,l),d.render(e,l)}d.toneMapping=u,d.autoClear=f,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ps||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ko)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,u=d*f,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Ur?n-p+Ur:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,Nr(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,Ko),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Nr(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(a,Ko)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ur?s-this._lodMax+Ur:0),f=4*(this._cubeSize-h);Nr(t,d,f,3*h,2*h),o.setRenderTarget(t),o.render(l,Ko)}};function qx(i){let e=[],t=[],n=i,s=i-Ur+1+Gx;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,u=3,p=new Float32Array(u*f*d),_=new Float32Array(u*f*d);for(let g=0;g<d;g++){let M=g%3*2/3-1,w=g>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(y,u*f*g);for(let v=0;v<f;v++){let S=h[v*2]*2-1,b=h[v*2+1]*2-1;g===0?Xs.set(1,b,S):g===1?Xs.set(-S,1,-b):g===2?Xs.set(-S,b,1):g===3?Xs.set(-1,b,-S):g===4?Xs.set(-S,-1,b):Xs.set(S,b,-1),Xs.toArray(_,(g*f+v)*u)}}let m=new rt;m.setAttribute("position",new xt(p,u)),m.setAttribute("outputDirection",new xt(_,u)),t.push(new Ae(m,null)),n>Ur&&n--}return{lodMeshes:t,sizeLods:e}}function fd(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yx(i,e,t){return new ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Zx(i,e,t){return new ct({name:"SphericalGaussianBlur",defines:{SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function dd(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function pd(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fc=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new ct({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:jn});r.uniforms.tEquirect.value=t;let o=new Ae(s,r),a=t.minFilter;return t.minFilter===ms&&(t.minFilter=cn),new vl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Jx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===El||u===bl)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new fc(p.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,p=u===El||u===bl,_=u===ps||u===Vs;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new _s(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new _s(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===El?f.mapping=ps:u===bl&&(f.mapping=Vs),f}function l(f){let u=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function $x(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function Kx(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let u in f)e.update(f[u],i.ARRAY_BUFFER)}function c(d){let f=[],u=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(u!==null){let M=u.array;_=u.version;for(let w=0,y=M.length;w<y;w+=3){let v=M[w+0],S=M[w+1],b=M[w+2];f.push(v,S,S,b,b,v)}}else{let M=p.array;_=p.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let v=w+0,S=w+1,b=w+2;f.push(v,S,S,b,b,v)}}let m=new(p.count>=65535?xo:go)(f,1);m.version=_;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Qx(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*o,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function jx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function e_(i,e,t){let n=new WeakMap,s=new kt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let E=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;u===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,v=1;y>e.maxTextureSize&&(v=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*v*4*d),b=new po(S,y,v,d);b.type=ei,b.needsUpdate=!0;let x=w*4;for(let A=0;A<d;A++){let I=m[A],L=g[A],F=M[A],C=y*v*4*A;for(let U=0;U<I.count;U++){let k=U*x;u===!0&&(s.fromBufferAttribute(I,U),S[C+k+0]=s.x,S[C+k+1]=s.y,S[C+k+2]=s.z,S[C+k+3]=0),p===!0&&(s.fromBufferAttribute(L,U),S[C+k+4]=s.x,S[C+k+5]=s.y,S[C+k+6]=s.z,S[C+k+7]=0),_===!0&&(s.fromBufferAttribute(F,U),S[C+k+8]=s.x,S[C+k+9]=s.y,S[C+k+10]=s.z,S[C+k+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new ae(y,v)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function t_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var n_={[Fo]:"LINEAR_TONE_MAPPING",[Bo]:"REINHARD_TONE_MAPPING",[Oo]:"CINEON_TONE_MAPPING",[xi]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[ko]:"NEUTRAL_TONE_MAPPING",[Ho]:"CUSTOM_TONE_MAPPING"};function i_(i,e,t,n,s,r){let o=new Jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new rt;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));let h=new Ar({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ae(c,h),f=new fs(-1,1,1,-1,0,1),u=null,p=null,_=!1,m,g=null,M=[],w=!1;this.setSize=function(y,v){o.setSize(y,v),a!==null&&a.setSize(y,v),l!==null&&l.setSize(y,v);for(let S=0;S<M.length;S++){let b=M[S];b.setSize&&b.setSize(y,v)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;let v=o.width,S=o.height;M.length>0&&a===null&&(a=new Jt(v,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(v,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<M.length;b++){let x=M[b];x.setSize&&x.setSize(v,S)}},this.begin=function(y,v){if(_||y.toneMapping===gi&&M.length===0)return!1;if(g=v,v!==null){let S=v.width,b=v.height;(o.width!==S||o.height!==b)&&this.setSize(S,b)}return w===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=gi,!0},this.hasRenderPass=function(){return w},this.end=function(y,v){y.toneMapping=m,_=!0;let S=o,b=a;for(let x=0;x<M.length;x++){let E=M[x];E.enabled!==!1&&(E.render(y,b,S,v),E.needsSwap!==!1&&(S=b,b=b===a?l:a))}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,h.defines={},ht.getTransfer(u)===yt&&(h.defines.SRGB_TRANSFER="");let x=n_[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(g),y.render(d,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Nd=new Un,au=new ls(1,1),Ud=new po,Fd=new el,Bd=new yo,md=[],gd=[],xd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);function Br(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mc(i,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function s_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function l_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;vd.set(n),i.uniformMatrix2fv(this.addr,!1,vd),fn(t,n)}}function c_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;_d.set(n),i.uniformMatrix3fv(this.addr,!1,_d),fn(t,n)}}function h_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;xd.set(n),i.uniformMatrix4fv(this.addr,!1,xd),fn(t,n)}}function u_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function m_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(au.compareFunction=t.isReversedDepthBuffer()?cc:lc,r=au):r=Nd,t.setTexture2D(e||r,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fd,s)}function M_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bd,s)}function S_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ud,s)}function E_(i){switch(i){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return x_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}function b_(i,e){i.uniform1fv(this.addr,e)}function T_(i,e){let t=Br(e,this.size,2);i.uniform2fv(this.addr,t)}function w_(i,e){let t=Br(e,this.size,3);i.uniform3fv(this.addr,t)}function A_(i,e){let t=Br(e,this.size,4);i.uniform4fv(this.addr,t)}function R_(i,e){let t=Br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function C_(i,e){let t=Br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function P_(i,e){let t=Br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I_(i,e){i.uniform1iv(this.addr,e)}function L_(i,e){i.uniform2iv(this.addr,e)}function D_(i,e){i.uniform3iv(this.addr,e)}function N_(i,e){i.uniform4iv(this.addr,e)}function U_(i,e){i.uniform1uiv(this.addr,e)}function F_(i,e){i.uniform2uiv(this.addr,e)}function B_(i,e){i.uniform3uiv(this.addr,e)}function O_(i,e){i.uniform4uiv(this.addr,e)}function H_(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=au:o=Nd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function z_(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fd,r[o])}function k_(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bd,r[o])}function G_(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ud,r[o])}function V_(i){switch(i){case 5126:return b_;case 35664:return T_;case 35665:return w_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return N_;case 5125:return U_;case 36294:return F_;case 36295:return B_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return G_}}var lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=E_(t.type)}},cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V_(t.type)}},hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ru=/(\w+)(\])?(\[|\.)?/g;function yd(i,e){i.seq.push(e),i.map[e.id]=e}function W_(i,e,t){let n=i.name,s=n.length;for(ru.lastIndex=0;;){let r=ru.exec(n),o=ru.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yd(t,c===void 0?new lu(a,i,e):new cu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new hu(a),yd(t,d)),t=d}}}var Fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);W_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Md(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var X_=37297,q_=0;function Y_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Sd=new tt;function Z_(i){ht._getMatrix(Sd,ht.workingColorSpace,i);let e=`mat3( ${Sd.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case co:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ed(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Y_(i.getShaderSource(e),a)}else return r}function J_(i,e){let t=Z_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $_={[Fo]:"Linear",[Bo]:"Reinhard",[Oo]:"Cineon",[xi]:"ACESFilmic",[zo]:"AgX",[ko]:"Neutral",[Ho]:"Custom"};function K_(i,e){let t=$_[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uc=new P;function Q_(){ht.getLuminanceCoefficients(uc);let i=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function ev(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function jo(i){return i!==""}function bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(i){return i.replace(nv,sv)}var iv=new Map;function sv(i,e){let t=at[e];if(t===void 0){let n=iv.get(e);if(n!==void 0)t=at[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return uu(t)}var rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(i){return i.replace(rv,ov)}function ov(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ad(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var av={[ks]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function lv(i){return av[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cv={[ps]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE_UV"};function hv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var uv={[Vs]:"ENVMAP_MODE_REFRACTION"};function fv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dv={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};function pv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dv[i.combine]||"ENVMAP_BLENDING_NONE"}function mv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=lv(t),c=hv(t),h=fv(t),d=pv(t),f=mv(t),u=j_(t),p=ev(r),_=s.createProgram(),m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(jo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(jo).join(`
`),g.length>0&&(g+=`
`)):(m=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),g=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?at.tonemapping_pars_fragment:"",t.toneMapping!==gi?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,J_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=uu(o),o=bd(o,t),o=Td(o,t),a=uu(a),a=bd(a,t),a=Td(a,t),o=wd(o),a=wd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=M+m+o,y=M+g+a,v=Md(s,s.VERTEX_SHADER,w),S=Md(s,s.FRAGMENT_SHADER,y);s.attachShader(_,v),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(v)||"",C=s.getShaderInfoLog(S)||"",U=L.trim(),k=F.trim(),O=C.trim(),H=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,S);else{let G=Ed(s,v,"vertex"),D=Ed(s,S,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+G+`
`+D)}else U!==""?Ke("WebGLProgram: Program Info Log:",U):(k===""||O==="")&&(B=!1);B&&(I.diagnostics={runnable:H,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:O,prefix:g}})}s.deleteShader(v),s.deleteShader(S),x=new Fr(s,_),E=tv(s,_)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,X_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=S,this}var xv=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new du(e),t.set(e,n)),n}},du=class{constructor(e){this.id=xv++,this.code=e,this.usedTimes=0}};function _v(i){return i===xs||i===Zo||i===Jo}function vv(i,e,t,n,s,r){let o=new mo,a=new fu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,A,I,L,F){let C=I.fog,U=L.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||k,O),B=H&&H.mapping===Go?H.image.height:null,G=u[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let D=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=D!==void 0?D.length:0,Y=0;U.morphAttributes.position!==void 0&&(Y=1),U.morphAttributes.normal!==void 0&&(Y=2),U.morphAttributes.color!==void 0&&(Y=3);let ue,me,Pe,K;if(G){let Lt=Ii[G];ue=Lt.vertexShader,me=Lt.fragmentShader}else{ue=x.vertexShader,me=x.fragmentShader;let Lt=a.getVertexShaderStage(x),St=a.getFragmentShaderStage(x);a.update(x,Lt,St),Pe=Lt.id,K=St.id}let ne=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),De=L.isInstancedMesh===!0,ve=L.isBatchedMesh===!0,ze=!!x.map,et=!!x.matcap,V=!!H,Q=!!x.aoMap,ie=!!x.lightMap,q=!!x.bumpMap&&x.wireframe===!1,se=!!x.normalMap,fe=!!x.displacementMap,xe=!!x.emissiveMap,Te=!!x.metalnessMap,Be=!!x.roughnessMap,z=x.anisotropy>0,ft=x.clearcoat>0,st=x.dispersion>0,N=x.retroreflectivity>0,T=x.iridescence>0,Z=x.sheen>0,$=x.transmission>0,re=z&&!!x.anisotropyMap,ge=ft&&!!x.clearcoatMap,_e=ft&&!!x.clearcoatNormalMap,oe=ft&&!!x.clearcoatRoughnessMap,he=T&&!!x.iridescenceMap,ye=T&&!!x.iridescenceThicknessMap,We=Z&&!!x.sheenColorMap,we=Z&&!!x.sheenRoughnessMap,Me=!!x.specularMap,Xe=!!x.specularColorMap,Ze=!!x.specularIntensityMap,nt=$&&!!x.transmissionMap,X=$&&!!x.thicknessMap,Se=!!x.gradientMap,ce=!!x.alphaMap,Ee=x.alphaTest>0,Ie=!!x.alphaHash,de=!!x.extensions,qe=gi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(qe=i.toneMapping);let ke={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:me,defines:x.defines,customVertexShaderID:Pe,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ve,batchingColor:ve&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:et,envMap:V,envMapMode:V&&H.mapping,envMapCubeUVHeight:B,aoMap:Q,lightMap:ie,bumpMap:q,normalMap:se,displacementMap:fe,emissiveMap:xe,normalMapObjectSpace:se&&x.normalMapType===Xf,normalMapTangentSpace:se&&x.normalMapType===$o,packedNormalMap:se&&x.normalMapType===$o&&_v(x.normalMap.format),metalnessMap:Te,roughnessMap:Be,anisotropy:z,anisotropyMap:re,clearcoat:ft,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:oe,dispersion:st,retroreflection:N,iridescence:T,iridescenceMap:he,iridescenceThicknessMap:ye,sheen:Z,sheenColorMap:We,sheenRoughnessMap:we,specularMap:Me,specularColorMap:Xe,specularIntensityMap:Ze,transmission:$,transmissionMap:nt,thicknessMap:X,gradientMap:Se,opaque:x.transparent===!1&&x.blending===Pr&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ee,alphaHash:Ie,combine:x.combine,mapUv:ze&&p(x.map.channel),aoMapUv:Q&&p(x.aoMap.channel),lightMapUv:ie&&p(x.lightMap.channel),bumpMapUv:q&&p(x.bumpMap.channel),normalMapUv:se&&p(x.normalMap.channel),displacementMapUv:fe&&p(x.displacementMap.channel),emissiveMapUv:xe&&p(x.emissiveMap.channel),metalnessMapUv:Te&&p(x.metalnessMap.channel),roughnessMapUv:Be&&p(x.roughnessMap.channel),anisotropyMapUv:re&&p(x.anisotropyMap.channel),clearcoatMapUv:ge&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:We&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(x.sheenRoughnessMap.channel),specularMapUv:Me&&p(x.specularMap.channel),specularColorMapUv:Xe&&p(x.specularColorMap.channel),specularIntensityMapUv:Ze&&p(x.specularIntensityMap.channel),transmissionMapUv:nt&&p(x.transmissionMap.channel),thicknessMapUv:X&&p(x.thicknessMap.channel),alphaMapUv:ce&&p(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(se||z),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(ze||ce),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Y,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:xe&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gt,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)E.push(A),E.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(g(E,x),M(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){let E=u[x.type],A;if(E){let I=Ii[E];A=vi.clone(I.uniforms)}else A=x.uniforms;return A}function y(x,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new gv(i,E,x,s),c.push(A),h.set(E,A)),A}function v(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function b(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:b}}function yv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,_,m,g){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},i[e]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=p,M.materialVariant=o(f),M.groupOrder=_,M.renderOrder=f.renderOrder,M.z=m,M.group=g),e++,M}function l(f,u,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);let w=a(f,u,p,_,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(f,u,p,_,m,g){let M=a(f,u,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,u){t.length>1&&t.sort(f||Mv),n.length>1&&n.sort(u||Rd),s.length>1&&s.sort(u||Rd)}function d(){for(let f=e,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Sv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Cd,i.set(n,[o])):s>=r.length?(o=new Cd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ev(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new le};break;case"SpotLight":t={position:new P,direction:new P,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function bv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Tv=0;function wv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Av(i){let e=new Ev,t=bv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new it,o=new it;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let u=0,p=0,_=0,m=0,g=0,M=0,w=0,y=0,v=0,S=0,b=0,x=0,E=0,A=0;c.sort(wv);for(let L=0,F=c.length;L<F;L++){let C=c[L],U=C.color,k=C.intensity,O=C.distance,H=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===xs?H=C.shadow.map.texture:H=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*k,d+=U.g*k,f+=U.b*k;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],k);A++}else if(C.isSunLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,D=t.get(C);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[p]=D,n.sunShadowMap[p]=H;let J=G.getViewportCount();for(let Y=0;Y<J;Y++)n.sunShadowMatrix[_+Y]=G.getMatrix(Y),n.sunShadowCascade[_+Y]=G._cascadeData[Y];_+=J,p++}n.sun[u]=B,u++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,D=t.get(C);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=C.shadow.matrix,v++}n.directional[m]=B,m++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=O,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[M]=B;let G=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,G.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[M]=G.matrix,C.castShadow){let D=t.get(C);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,n.spotShadow[M]=D,n.spotShadowMap[M]=H,b++}M++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=B,w++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let G=C.shadow,D=t.get(C);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,D.shadowCameraNear=G.camera.near,D.shadowCameraFar=G.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=B,g++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(k),B.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[y]=B,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let I=n.hash;(I.sunLength!==u||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==v||I.numPointShadows!==S||I.numSpotShadows!==b||I.numSpotMaps!==x||I.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,I.sunLength=u,I.directionalLength=m,I.pointLength=g,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=v,I.numPointShadows=S,I.numSpotShadows=b,I.numSpotMaps=x,I.numLightProbes=A,n.version=Tv++)}function l(c,h){let d=0,f=0,u=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let y=c[M];if(y.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(y.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Pd(i){let e=new Av(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Rv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Pd(i),e.set(s,[a])):r>=o.length?(a=new Pd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
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
}`,Iv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Lv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Id=new it,Qo=new P,ou=new P;function Dv(i,e,t){let n=new Er,s=new ae,r=new ae,o=new kt,a=new al,l=new ll,c={},h=t.maxTextureSize,d={[Zi]:qt,[qt]:Zi,[gt]:gt},f=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Cv,fragmentShader:Pv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new rt;p.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ae(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let g=this.type;this.render=function(S,b,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Sf&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);let E=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(jn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=g!==this.type;F&&b.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=S.length;C<U;C++){let k=S[C],O=k.shadow;if(O===void 0){Ke("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let H=O.getFrameExtents();s.multiply(H),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,O.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Cr){if(k.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Jt(s.x,s.y,{format:xs,type:hn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new ls(s.x,s.y,ei),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=Ri,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn}else k.isPointLight?(O.map=new fc(s.x),O.map.depthTexture=new nl(s.x,_i)):(O.map=new Jt(s.x,s.y),O.map.depthTexture=new ls(s.x,s.y,_i)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=Ri,this.type===ks?(O.map.depthTexture.compareFunction=B?cc:lc,O.map.depthTexture.minFilter=cn,O.map.depthTexture.magFilter=cn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();k.isPointLight!==!0&&O.updateMatrices(k,x);for(let D=0;D<G;D++){let J=O.getCamera(D);if(k.isPointLight){let Y=O.camera,ue=O.matrix,me=k.distance||Y.far;me!==Y.far&&(Y.far=me,Y.updateProjectionMatrix()),Qo.setFromMatrixPosition(k.matrixWorld),Y.position.copy(Qo),ou.copy(Y.position),ou.add(Iv[D]),Y.up.copy(Lv[D]),Y.lookAt(ou),Y.updateMatrixWorld(),ue.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Id.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Id,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,D),i.clear();else{D===0&&(i.setRenderTarget(O.map),i.clear());let Y=O.getViewport(D);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(o)}n=O.getFrustum(D),y(b,x,J,k,this.type)}O.isPointLightShadow!==!0&&this.type===Cr&&M(O,x),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,A,I)};function M(S,b){let x=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null?S.mapPass=new Jt(s.x,s.y,{format:xs,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(b,null,x,f,_,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(b,null,x,u,_,null)}function w(S,b,x,E){let A=null,I=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)A=I;else if(A=x.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let L=A.uuid,F=b.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let U=C[F];U===void 0&&(U=A.clone(),C[F]=U,b.addEventListener("dispose",v)),A=U}if(A.visible=b.visible,A.wireframe=b.wireframe,E===Cr?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=x}return A}function y(S,b,x,E,A){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Cr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let F=e.update(S),C=S.material;if(Array.isArray(C)){let U=F.groups;for(let k=0,O=U.length;k<O;k++){let H=U[k],B=C[H.materialIndex];if(B&&B.visible){let G=w(S,B,E,A);S.onBeforeShadow(i,S,b,x,F,G,H),i.renderBufferDirect(x,null,F,G,S,H),S.onAfterShadow(i,S,b,x,F,G,H)}}}else if(C.visible){let U=w(S,C,E,A);S.onBeforeShadow(i,S,b,x,F,U,null),i.renderBufferDirect(x,null,F,U,S,null),S.onAfterShadow(i,S,b,x,F,U,null)}}let L=S.children;for(let F=0,C=L.length;F<C;F++)y(L[F],b,x,E,A)}function v(S){S.target.removeEventListener("dispose",v);for(let x in c){let E=c[x],A=S.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Nv(i,e){function t(){let X=!1,Se=new kt,ce=null,Ee=new kt(0,0,0,0);return{setMask:function(Ie){ce!==Ie&&!X&&(i.colorMask(Ie,Ie,Ie,Ie),ce=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,de,qe,ke,Lt){Lt===!0&&(Ie*=ke,de*=ke,qe*=ke),Se.set(Ie,de,qe,ke),Ee.equals(Se)===!1&&(i.clearColor(Ie,de,qe,ke),Ee.copy(Se))},reset:function(){X=!1,ce=null,Ee.set(-1,0,0,0)}}}function n(){let X=!1,Se=!1,ce=null,Ee=null,Ie=null;return{setReversed:function(de){if(Se!==de){let qe=e.get("EXT_clip_control");de?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=de;let ke=Ie;Ie=null,this.setClear(ke)}},getReversed:function(){return Se},setTest:function(de){de?ne(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(de){ce!==de&&!X&&(i.depthMask(de),ce=de)},setFunc:function(de){if(Se&&(de=nd[de]),Ee!==de){switch(de){case Va:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=de}},setLocked:function(de){X=de},setClear:function(de){Ie!==de&&(Ie=de,Se&&(de=1-de),i.clearDepth(de))},reset:function(){X=!1,ce=null,Ee=null,Ie=null,Se=!1}}}function s(){let X=!1,Se=null,ce=null,Ee=null,Ie=null,de=null,qe=null,ke=null,Lt=null;return{setTest:function(St){X||(St?ne(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(St){Se!==St&&!X&&(i.stencilMask(St),Se=St)},setFunc:function(St,li,Si){(ce!==St||Ee!==li||Ie!==Si)&&(i.stencilFunc(St,li,Si),ce=St,Ee=li,Ie=Si)},setOp:function(St,li,Si){(de!==St||qe!==li||ke!==Si)&&(i.stencilOp(St,li,Si),de=St,qe=li,ke=Si)},setLocked:function(St){X=St},setClear:function(St){Lt!==St&&(i.clearStencil(St),Lt=St)},reset:function(){X=!1,Se=null,ce=null,Ee=null,Ie=null,de=null,qe=null,ke=null,Lt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,M=null,w=null,y=null,v=null,S=null,b=null,x=new le(0,0,0),E=0,A=!1,I=null,L=null,F=null,C=null,U=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,H=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=H>=2);let G=null,D={},J=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),ue=new kt().fromArray(J),me=new kt().fromArray(Y);function Pe(X,Se,ce,Ee){let Ie=new Uint8Array(4),de=i.createTexture();i.bindTexture(X,de),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<ce;qe++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Se+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return de}let K={};K[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(gr),q(!1),se(Ih),ne(i.CULL_FACE),Q(jn);function ne(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function pe(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function De(X,Se){return f[X]!==Se?(i.bindFramebuffer(X,Se),f[X]=Se,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function ve(X,Se){let ce=p,Ee=!1;if(X){ce=u.get(Se),ce===void 0&&(ce=[],u.set(Se,ce));let Ie=X.textures;if(ce.length!==Ie.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let de=0,qe=Ie.length;de<qe;de++)ce[de]=i.COLOR_ATTACHMENT0+de;ce.length=Ie.length,Ee=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ce)}function ze(X){return _!==X?(i.useProgram(X),_=X,!0):!1}let et={[Gs]:i.FUNC_ADD,[bf]:i.FUNC_SUBTRACT,[Tf]:i.FUNC_REVERSE_SUBTRACT};et[wf]=i.MIN,et[Af]=i.MAX;let V={[Rf]:i.ZERO,[Cf]:i.ONE,[Pf]:i.SRC_COLOR,[Nh]:i.SRC_ALPHA,[Ff]:i.SRC_ALPHA_SATURATE,[Nf]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[If]:i.ONE_MINUS_SRC_COLOR,[Uh]:i.ONE_MINUS_SRC_ALPHA,[Uf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Bf]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Hf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(X,Se,ce,Ee,Ie,de,qe,ke,Lt,St){if(X===jn){m===!0&&(pe(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),X!==Ef){if(X!==g||St!==A){if((M!==Gs||v!==Gs)&&(i.blendEquation(i.FUNC_ADD),M=Gs,v=Gs),St)switch(X){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bt:i.blendFunc(i.ONE,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",X);break}else switch(X){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",X);break}w=null,y=null,S=null,b=null,x.set(0,0,0),E=0,g=X,A=St}return}Ie=Ie||Se,de=de||ce,qe=qe||Ee,(Se!==M||Ie!==v)&&(i.blendEquationSeparate(et[Se],et[Ie]),M=Se,v=Ie),(ce!==w||Ee!==y||de!==S||qe!==b)&&(i.blendFuncSeparate(V[ce],V[Ee],V[de],V[qe]),w=ce,y=Ee,S=de,b=qe),(ke.equals(x)===!1||Lt!==E)&&(i.blendColor(ke.r,ke.g,ke.b,Lt),x.copy(ke),E=Lt),g=X,A=!1}function ie(X,Se){X.side===gt?pe(i.CULL_FACE):ne(i.CULL_FACE);let ce=X.side===qt;Se&&(ce=!ce),q(ce),X.blending===Pr&&X.transparent===!1?Q(jn):Q(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Ee=X.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),xe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(X){I!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),I=X)}function se(X){X!==yf?(ne(i.CULL_FACE),X!==L&&(X===Ih?i.cullFace(i.BACK):X===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),L=X}function fe(X){X!==F&&(O&&i.lineWidth(X),F=X)}function xe(X,Se,ce){X?(ne(i.POLYGON_OFFSET_FILL),(C!==Se||U!==ce)&&(C=Se,U=ce,o.getReversed()&&(Se=-Se),i.polygonOffset(Se,ce))):pe(i.POLYGON_OFFSET_FILL)}function Te(X){X?ne(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Be(X){X===void 0&&(X=i.TEXTURE0+k-1),G!==X&&(i.activeTexture(X),G=X)}function z(X,Se,ce){ce===void 0&&(G===null?ce=i.TEXTURE0+k-1:ce=G);let Ee=D[ce];Ee===void 0&&(Ee={type:void 0,texture:void 0},D[ce]=Ee),(Ee.type!==X||Ee.texture!==Se)&&(G!==ce&&(i.activeTexture(ce),G=ce),i.bindTexture(X,Se||K[X]),Ee.type=X,Ee.texture=Se)}function ft(){let X=D[G];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(X){$e("WebGLState:",X)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(X){$e("WebGLState:",X)}}function T(){try{i.texSubImage2D(...arguments)}catch(X){$e("WebGLState:",X)}}function Z(){try{i.texSubImage3D(...arguments)}catch(X){$e("WebGLState:",X)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(X){$e("WebGLState:",X)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(X){$e("WebGLState:",X)}}function ge(){try{i.texStorage2D(...arguments)}catch(X){$e("WebGLState:",X)}}function _e(){try{i.texStorage3D(...arguments)}catch(X){$e("WebGLState:",X)}}function oe(){try{i.texImage2D(...arguments)}catch(X){$e("WebGLState:",X)}}function he(){try{i.texImage3D(...arguments)}catch(X){$e("WebGLState:",X)}}function ye(X){return d[X]!==void 0?d[X]:i.getParameter(X)}function We(X,Se){d[X]!==Se&&(i.pixelStorei(X,Se),d[X]=Se)}function we(X){ue.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ue.copy(X))}function Me(X){me.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),me.copy(X))}function Xe(X,Se){let ce=c.get(Se);ce===void 0&&(ce=new WeakMap,c.set(Se,ce));let Ee=ce.get(X);Ee===void 0&&(Ee=i.getUniformBlockIndex(Se,X.name),ce.set(X,Ee))}function Ze(X,Se){let Ee=c.get(Se).get(X);l.get(Se)!==Ee&&(i.uniformBlockBinding(Se,Ee,X.__bindingPointIndex),l.set(Se,Ee))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,D={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,M=null,w=null,y=null,v=null,S=null,b=null,x=new le(0,0,0),E=0,A=!1,I=null,L=null,F=null,C=null,U=null,ue.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:pe,bindFramebuffer:De,drawBuffers:ve,useProgram:ze,setBlending:Q,setMaterial:ie,setFlipSided:q,setCullFace:se,setLineWidth:fe,setPolygonOffset:xe,setScissorTest:Te,activeTexture:Be,bindTexture:z,unbindTexture:ft,compressedTexImage2D:st,compressedTexImage3D:N,texImage2D:oe,texImage3D:he,pixelStorei:We,getParameter:ye,updateUBOMapping:Xe,uniformBlockBinding:Ze,texStorage2D:ge,texStorage3D:_e,texSubImage2D:T,texSubImage3D:Z,compressedTexSubImage2D:$,compressedTexSubImage3D:re,scissor:we,viewport:Me,reset:nt}}function Uv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,d=new Set,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,T){return p?new OffscreenCanvas(N,T):ho("canvas")}function m(N,T,Z){let $=1,re=st(N);if((re.width>Z||re.height>Z)&&($=Z/Math.max(re.width,re.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ge=Math.floor($*re.width),_e=Math.floor($*re.height);f===void 0&&(f=_(ge,_e));let oe=T?_(ge,_e):f;return oe.width=ge,oe.height=_e,oe.getContext("2d").drawImage(N,0,0,ge,_e),Ke("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ge+"x"+_e+")."),oe}else return"data"in N&&Ke("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),N;return N}function g(N){return N.generateMipmaps}function M(N){i.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(N,T,Z,$,re,ge=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let _e;$&&(_e=e.get("EXT_texture_norm16"),_e||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=T;if(T===i.RED&&(Z===i.FLOAT&&(oe=i.R32F),Z===i.HALF_FLOAT&&(oe=i.R16F),Z===i.UNSIGNED_BYTE&&(oe=i.R8),Z===i.UNSIGNED_SHORT&&_e&&(oe=_e.R16_EXT),Z===i.SHORT&&_e&&(oe=_e.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.R8UI),Z===i.UNSIGNED_SHORT&&(oe=i.R16UI),Z===i.UNSIGNED_INT&&(oe=i.R32UI),Z===i.BYTE&&(oe=i.R8I),Z===i.SHORT&&(oe=i.R16I),Z===i.INT&&(oe=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(oe=i.RG32F),Z===i.HALF_FLOAT&&(oe=i.RG16F),Z===i.UNSIGNED_BYTE&&(oe=i.RG8),Z===i.UNSIGNED_SHORT&&_e&&(oe=_e.RG16_EXT),Z===i.SHORT&&_e&&(oe=_e.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RG8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RG16UI),Z===i.UNSIGNED_INT&&(oe=i.RG32UI),Z===i.BYTE&&(oe=i.RG8I),Z===i.SHORT&&(oe=i.RG16I),Z===i.INT&&(oe=i.RG32I)),T===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),Z===i.UNSIGNED_INT&&(oe=i.RGB32UI),Z===i.BYTE&&(oe=i.RGB8I),Z===i.SHORT&&(oe=i.RGB16I),Z===i.INT&&(oe=i.RGB32I)),T===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),Z===i.UNSIGNED_INT&&(oe=i.RGBA32UI),Z===i.BYTE&&(oe=i.RGBA8I),Z===i.SHORT&&(oe=i.RGBA16I),Z===i.INT&&(oe=i.RGBA32I)),T===i.RGB&&(Z===i.UNSIGNED_SHORT&&_e&&(oe=_e.RGB16_EXT),Z===i.SHORT&&_e&&(oe=_e.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),T===i.RGBA){let he=ge?co:ht.getTransfer(re);Z===i.FLOAT&&(oe=i.RGBA32F),Z===i.HALF_FLOAT&&(oe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(oe=he===yt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&_e&&(oe=_e.RGBA16_EXT),Z===i.SHORT&&_e&&(oe=_e.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(N,T){let Z;return N?T===null||T===_i||T===Lr?Z=i.DEPTH24_STENCIL8:T===ei?Z=i.DEPTH32F_STENCIL8:T===Ir&&(Z=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_i||T===Lr?Z=i.DEPTH_COMPONENT24:T===ei?Z=i.DEPTH_COMPONENT32F:T===Ir&&(Z=i.DEPTH_COMPONENT16),Z}function S(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==xn&&N.minFilter!==cn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function b(N){let T=N.target;T.removeEventListener("dispose",b),E(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function x(N){let T=N.target;T.removeEventListener("dispose",x),I(T)}function E(N){let T=n.get(N);if(T.__webglInit===void 0)return;let Z=N.source,$=u.get(Z);if($){let re=$[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&A(N),Object.keys($).length===0&&u.delete(Z)}n.remove(N)}function A(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let Z=N.source,$=u.get(Z);delete $[T.__cacheKey],o.memory.textures--}function I(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let re=0;re<T.__webglFramebuffer[$].length;re++)i.deleteFramebuffer(T.__webglFramebuffer[$][re]);else i.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)i.deleteFramebuffer(T.__webglFramebuffer[$]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Z=N.textures;for(let $=0,re=Z.length;$<re;$++){let ge=n.get(Z[$]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(Z[$])}n.remove(N)}let L=0;function F(){L=0}function C(){return L}function U(N){L=N}function k(){let N=L;return N>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,N}function O(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function H(N,T){let Z=n.get(N);if(N.isVideoTexture&&z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){let $=N.image;if($===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Z,N,T);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function B(N,T){let Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){pe(Z,N,T);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function G(N,T){let Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){pe(Z,N,T);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function D(N,T){let Z=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){De(Z,N,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}let J={[Vi]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},Y={[xn]:i.NEAREST,[Vf]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},ue={[Yf]:i.NEVER,[Qf]:i.ALWAYS,[Zf]:i.LESS,[lc]:i.LEQUAL,[Jf]:i.EQUAL,[cc]:i.GEQUAL,[$f]:i.GREATER,[Kf]:i.NOTEQUAL};function me(N,T){if(T.type===ei&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===cn||T.magFilter===Tl||T.magFilter===Vo||T.magFilter===ms||T.minFilter===cn||T.minFilter===Tl||T.minFilter===Vo||T.minFilter===ms)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,J[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,J[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,J[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Y[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Y[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xn||T.minFilter!==Vo&&T.minFilter!==ms||T.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Pe(N,T){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",b));let $=T.source,re=u.get($);re===void 0&&(re={},u.set($,re));let ge=O(T);if(ge!==N.__cacheKey){re[ge]===void 0&&(re[ge]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),re[ge].usedTimes++;let _e=re[N.__cacheKey];_e!==void 0&&(re[N.__cacheKey].usedTimes--,_e.usedTimes===0&&A(T)),N.__cacheKey=ge,N.__webglTexture=re[ge].texture}return Z}function K(N,T,Z){return Math.floor(Math.floor(N/Z)/T)}function ne(N,T,Z,$){let ge=N.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Z,$,T.data);else{ge.sort((We,we)=>We.start-we.start);let _e=0;for(let We=1;We<ge.length;We++){let we=ge[_e],Me=ge[We],Xe=we.start+we.count,Ze=K(Me.start,T.width,4),nt=K(we.start,T.width,4);Me.start<=Xe+1&&Ze===nt&&K(Me.start+Me.count-1,T.width,4)===Ze?we.count=Math.max(we.count,Me.start+Me.count-we.start):(++_e,ge[_e]=Me)}ge.length=_e+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),he=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let We=0,we=ge.length;We<we;We++){let Me=ge[We],Xe=Math.floor(Me.start/4),Ze=Math.ceil(Me.count/4),nt=Xe%T.width,X=Math.floor(Xe/T.width),Se=Ze,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,nt,X,Se,ce,Z,$,T.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function pe(N,T,Z){let $=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=i.TEXTURE_3D);let re=Pe(N,T),ge=T.source;t.bindTexture($,N.__webglTexture,i.TEXTURE0+Z);let _e=n.get(ge);if(ge.version!==_e.__version||re===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ce=ht.getPrimaries(ht.workingColorSpace),Ee=T.colorSpace===Ji?null:ht.getPrimaries(T.colorSpace),Ie=T.colorSpace===Ji||ce===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let he=m(T.image,!1,s.maxTextureSize);he=ft(T,he);let ye=r.convert(T.format,T.colorSpace),We=r.convert(T.type),we=y(T.internalFormat,ye,We,T.normalized,T.colorSpace,T.isVideoTexture);me($,T);let Me,Xe=T.mipmaps,Ze=T.isVideoTexture!==!0,nt=_e.__version===void 0||re===!0,X=ge.dataReady,Se=S(T,he);if(T.isDepthTexture)we=v(T.format===gs,T.type),nt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,we,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,we,he.width,he.height,0,ye,We,null));else if(T.isDataTexture)if(Xe.length>0){Ze&&nt&&t.texStorage2D(i.TEXTURE_2D,Se,we,Xe[0].width,Xe[0].height);for(let ce=0,Ee=Xe.length;ce<Ee;ce++)Me=Xe[ce],Ze?X&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Me.width,Me.height,ye,We,Me.data):t.texImage2D(i.TEXTURE_2D,ce,we,Me.width,Me.height,0,ye,We,Me.data);T.generateMipmaps=!1}else Ze?(nt&&t.texStorage2D(i.TEXTURE_2D,Se,we,he.width,he.height),X&&ne(T,he,ye,We)):t.texImage2D(i.TEXTURE_2D,0,we,he.width,he.height,0,ye,We,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,we,Xe[0].width,Xe[0].height,he.depth);for(let ce=0,Ee=Xe.length;ce<Ee;ce++)if(Me=Xe[ce],T.format!==ti)if(ye!==null)if(Ze){if(X)if(T.layerUpdates.size>0){let Ie=Jh(Me.width,Me.height,T.format,T.type);for(let de of T.layerUpdates){let qe=Me.data.subarray(de*Ie/Me.data.BYTES_PER_ELEMENT,(de+1)*Ie/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,de,Me.width,Me.height,1,ye,qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,he.depth,ye,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,we,Me.width,Me.height,he.depth,0,Me.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,he.depth,ye,We,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,we,Me.width,Me.height,he.depth,0,ye,We,Me.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ze&&nt&&t.texStorage2D(i.TEXTURE_2D,Se,we,Xe[0].width,Xe[0].height);for(let ce=0,Ee=Xe.length;ce<Ee;ce++)Me=Xe[ce],T.format!==ti?ye!==null?Ze?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,we,Me.width,Me.height,0,Me.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?X&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Me.width,Me.height,ye,We,Me.data):t.texImage2D(i.TEXTURE_2D,ce,we,Me.width,Me.height,0,ye,We,Me.data)}else if(T.isDataArrayTexture)if(Ze){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,we,he.width,he.height,he.depth),X)if(T.layerUpdates.size>0){let ce=Jh(he.width,he.height,T.format,T.type);for(let Ee of T.layerUpdates){let Ie=he.data.subarray(Ee*ce/he.data.BYTES_PER_ELEMENT,(Ee+1)*ce/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,he.width,he.height,1,ye,We,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,We,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,he.width,he.height,he.depth,0,ye,We,he.data);else if(T.isData3DTexture)Ze?(nt&&t.texStorage3D(i.TEXTURE_3D,Se,we,he.width,he.height,he.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,We,he.data)):t.texImage3D(i.TEXTURE_3D,0,we,he.width,he.height,he.depth,0,ye,We,he.data);else if(T.isFramebufferTexture){if(nt)if(Ze)t.texStorage2D(i.TEXTURE_2D,Se,we,he.width,he.height);else{let ce=he.width,Ee=he.height;for(let Ie=0;Ie<Se;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,we,ce,Ee,0,ye,We,null),ce>>=1,Ee>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),he.parentNode!==ce){ce.appendChild(he),d.add(T),ce.onpaint=Ee=>{let Ie=Ee.changedElements;for(let de of d)Ie.includes(de.image)&&(de.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,he);else{let Ie=i.RGBA,de=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,de,qe,he)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ze&&nt){let ce=st(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Se,we,ce.width,ce.height)}for(let ce=0,Ee=Xe.length;ce<Ee;ce++)Me=Xe[ce],Ze?X&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ye,We,Me):t.texImage2D(i.TEXTURE_2D,ce,we,ye,We,Me);T.generateMipmaps=!1}else if(Ze){if(nt){let ce=st(he);t.texStorage2D(i.TEXTURE_2D,Se,we,ce.width,ce.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,We,he)}else t.texImage2D(i.TEXTURE_2D,0,we,ye,We,he);g(T)&&M($),_e.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function De(N,T,Z){if(T.image.length!==6)return;let $=Pe(N,T),re=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Z);let ge=n.get(re);if(re.version!==ge.__version||$===!0){t.activeTexture(i.TEXTURE0+Z);let _e=ht.getPrimaries(ht.workingColorSpace),oe=T.colorSpace===Ji?null:ht.getPrimaries(T.colorSpace),he=T.colorSpace===Ji||_e===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ye=T.isCompressedTexture||T.image[0].isCompressedTexture,We=T.image[0]&&T.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!ye&&!We?we[de]=m(T.image[de],!0,s.maxCubemapSize):we[de]=We?T.image[de].image:T.image[de],we[de]=ft(T,we[de]);let Me=we[0],Xe=r.convert(T.format,T.colorSpace),Ze=r.convert(T.type),nt=y(T.internalFormat,Xe,Ze,T.normalized,T.colorSpace),X=T.isVideoTexture!==!0,Se=ge.__version===void 0||$===!0,ce=re.dataReady,Ee=S(T,Me);me(i.TEXTURE_CUBE_MAP,T);let Ie;if(ye){X&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,nt,Me.width,Me.height);for(let de=0;de<6;de++){Ie=we[de].mipmaps;for(let qe=0;qe<Ie.length;qe++){let ke=Ie[qe];T.format!==ti?Xe!==null?X?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe,0,0,ke.width,ke.height,Xe,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe,nt,ke.width,ke.height,0,ke.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe,0,0,ke.width,ke.height,Xe,Ze,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe,nt,ke.width,ke.height,0,Xe,Ze,ke.data)}}}else{if(Ie=T.mipmaps,X&&Se){Ie.length>0&&Ee++;let de=st(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,nt,de.width,de.height)}for(let de=0;de<6;de++)if(We){X?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,Xe,Ze,we[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,nt,we[de].width,we[de].height,0,Xe,Ze,we[de].data);for(let qe=0;qe<Ie.length;qe++){let Lt=Ie[qe].image[de].image;X?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe+1,0,0,Lt.width,Lt.height,Xe,Ze,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe+1,nt,Lt.width,Lt.height,0,Xe,Ze,Lt.data)}}else{X?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Xe,Ze,we[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,nt,Xe,Ze,we[de]);for(let qe=0;qe<Ie.length;qe++){let ke=Ie[qe];X?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe+1,0,0,Xe,Ze,ke.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,qe+1,nt,Xe,Ze,ke.image[de])}}}g(T)&&M(i.TEXTURE_CUBE_MAP),ge.__version=re.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ve(N,T,Z,$,re,ge){let _e=r.convert(Z.format,Z.colorSpace),oe=r.convert(Z.type),he=y(Z.internalFormat,_e,oe,Z.normalized,Z.colorSpace),ye=n.get(T),We=n.get(Z);if(We.__renderTarget=T,!ye.__hasExternalTextures){let we=Math.max(1,T.width>>ge),Me=Math.max(1,T.height>>ge);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ge,he,we,Me,T.depth,0,_e,oe,null):t.texImage2D(re,ge,he,we,Me,0,_e,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Be(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,re,We.__webglTexture,0,Te(T)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,re,We.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(N,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let $=T.depthTexture,re=$&&$.isDepthTexture?$.type:null,ge=v(T.stencilBuffer,re),_e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(T),ge,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(T),ge,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,N)}else{let $=T.textures;for(let re=0;re<$.length;re++){let ge=$[re],_e=r.convert(ge.format,ge.colorSpace),oe=r.convert(ge.type),he=y(ge.internalFormat,_e,oe,ge.normalized,ge.colorSpace);Be(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(T),he,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(T),he,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,he,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(N,T,Z){let $=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(T.depthTexture);if(re.__renderTarget=T,(!re.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$){if(re.__webglInit===void 0&&(re.__webglInit=!0,T.depthTexture.addEventListener("dispose",b)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),me(i.TEXTURE_CUBE_MAP,T.depthTexture);let ye=r.convert(T.depthTexture.format),We=r.convert(T.depthTexture.type),we;T.depthTexture.format===Ri?we=i.DEPTH_COMPONENT24:T.depthTexture.format===gs&&(we=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,we,T.width,T.height,0,ye,We,null)}}else H(T.depthTexture,0);let ge=re.__webglTexture,_e=Te(T),oe=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,he=T.depthTexture.format===gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ri)Be(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,oe,ge,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,he,oe,ge,0);else if(T.depthTexture.format===gs)Be(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,oe,ge,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,he,oe,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function V(N){let T=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let $=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){let re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",re)};$.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=$}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let $=0;$<6;$++)et(T.__webglFramebuffer[$],N,$);else{let $=N.texture.mipmaps;$&&$.length>0?et(T.__webglFramebuffer[0],N,0):et(T.__webglFramebuffer,N,0)}else if(Z){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=i.createRenderbuffer(),ze(T.__webglDepthbuffer[$],N,!1);else{let re=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ge)}}else{let $=N.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ze(T.__webglDepthbuffer,N,!1);else{let re=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(N,T,Z){let $=n.get(N);T!==void 0&&ve($.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&V(N)}function ie(N){let T=N.texture,Z=n.get(N),$=n.get(T);N.addEventListener("dispose",x);let re=N.textures,ge=N.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=T.version,o.memory.textures++),ge){Z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[oe]=[];for(let he=0;he<T.mipmaps.length;he++)Z.__webglFramebuffer[oe][he]=i.createFramebuffer()}else Z.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)Z.__webglFramebuffer[oe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(_e)for(let oe=0,he=re.length;oe<he;oe++){let ye=n.get(re[oe]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Be(N)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){let he=re[oe];Z.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);let ye=r.convert(he.format,he.colorSpace),We=r.convert(he.type),we=y(he.internalFormat,ye,We,he.normalized,he.colorSpace,N.isXRRenderTarget===!0),Me=Te(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,we,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),me(i.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)ve(Z.__webglFramebuffer[oe][he],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else ve(Z.__webglFramebuffer[oe],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(T)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,he=re.length;oe<he;oe++){let ye=re[oe],We=n.get(ye),we=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,We.__webglTexture),me(we,ye),ve(Z.__webglFramebuffer,N,ye,i.COLOR_ATTACHMENT0+oe,we,0),g(ye)&&M(we)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(oe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),me(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)ve(Z.__webglFramebuffer[he],N,T,i.COLOR_ATTACHMENT0,oe,he);else ve(Z.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,oe,0);g(T)&&M(oe),t.unbindTexture()}N.depthBuffer&&V(N)}function q(N){let T=N.textures;for(let Z=0,$=T.length;Z<$;Z++){let re=T[Z];if(g(re)){let ge=w(N),_e=n.get(re).__webglTexture;t.bindTexture(ge,_e),M(ge),t.unbindTexture()}}}let se=[],fe=[];function xe(N){if(N.samples>0){if(Be(N)===!1){let T=N.textures,Z=N.width,$=N.height,re=i.COLOR_BUFFER_BIT,ge=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(N),oe=T.length>1;if(oe)for(let ye=0;ye<T.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let he=N.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let We=n.get(T[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,Z,$,0,0,Z,$,re,i.NEAREST),l===!0&&(se.length=0,fe.length=0,se.push(i.COLOR_ATTACHMENT0+ye),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(se.push(ge),fe.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ye=0;ye<T.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let We=n.get(T[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Te(N){return Math.min(s.maxSamples,N.samples)}function Be(N){let T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function z(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function ft(N,T){let Z=N.colorSpace,$=N.format,re=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==lo&&Z!==Ji&&(ht.getTransfer(Z)===yt?($!==ti||re!==Pn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",Z)),T}function st(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=D,this.rebindTextures=Q,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fv(i,e){function t(n,s=Ji){let r,o=ht.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bh)return i.BYTE;if(n===Oh)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===wl)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===ti)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Dr)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===xs)return i.RG;if(n===Pl)return i.RG_INTEGER;if(n===Il)return i.RGBA_INTEGER;if(n===Wo||n===Xo||n===qo||n===Yo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Bl||n===Ol||n===Hl||n===zl||n===Zo||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fl||n===Bl)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hl)return r.COMPRESSED_R11_EAC;if(n===zl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl||n===Ql||n===jl||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===oc||n===Jo||n===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
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

}`,pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ct({vertexShader:Bv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mu=class extends Ci{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,_=typeof XRWebGLBinding<"u",m=new pu,g={},M=t.getContextAttributes(),w=null,y=null,v=[],S=[],b=new ae,x=null,E=null,A=new Zt;A.viewport=new kt;let I=new Zt;I.viewport=new kt;let L=[A,I],F=new yl,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=v[K];return ne===void 0&&(ne=new yr,v[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=v[K];return ne===void 0&&(ne=new yr,v[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=v[K];return ne===void 0&&(ne=new yr,v[K]=ne),ne.getHandSpace()};function k(K){let ne=S.indexOf(K.inputSource);if(ne===-1)return;let pe=v[ne];pe!==void 0&&(pe.update(K.inputSource,K.frame,c||o),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let K=0;K<v.length;K++){let ne=S[K];ne!==null&&(S[K]=null,v[K].disconnect(ne))}C=null,U=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(w),u=null,f=null,d=null,s=null,y=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,De=null,ve=null;M.depth&&(ve=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=M.stencil?gs:Ri,De=M.stencil?Lr:_i);let ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Jt(f.textureWidth,f.textureHeight,{format:ti,type:Pn,depthTexture:new ls(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Jt(u.framebufferWidth,u.framebufferHeight,{format:ti,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(K){for(let ne=0;ne<K.removed.length;ne++){let pe=K.removed[ne],De=S.indexOf(pe);De>=0&&(S[De]=null,v[De].disconnect(pe))}for(let ne=0;ne<K.added.length;ne++){let pe=K.added[ne],De=S.indexOf(pe);if(De===-1){for(let ze=0;ze<v.length;ze++)if(ze>=S.length){S.push(pe),De=ze;break}else if(S[ze]===null){S[ze]=pe,De=ze;break}if(De===-1)break}let ve=v[De];ve&&ve.connect(pe)}}let B=new P,G=new P;function D(K,ne,pe){B.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(pe.matrixWorld);let De=B.distanceTo(G),ve=ne.projectionMatrix.elements,ze=pe.projectionMatrix.elements,et=ve[14]/(ve[10]-1),V=ve[14]/(ve[10]+1),Q=(ve[9]+1)/ve[5],ie=(ve[9]-1)/ve[5],q=(ve[8]-1)/ve[0],se=(ze[8]+1)/ze[0],fe=et*q,xe=et*se,Te=De/(-q+se),Be=Te*-q;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Be),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ve[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let z=et+Te,ft=V+Te,st=fe-Be,N=xe+(De-Be),T=Q*V/ft*z,Z=ie*V/ft*z;K.projectionMatrix.makePerspective(st,N,T,Z,z,ft),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,pe=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),F.near=I.near=A.near=ne,F.far=I.far=A.far=pe,(C!==F.near||U!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,U=F.far),F.layers.mask=K.layers.mask|6,A.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let De=K.parent,ve=F.cameras;J(F,De);for(let ze=0;ze<ve.length;ze++)J(ve[ze],De);ve.length===2?D(F,A,I):F.projectionMatrix.copy(A.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),Y(K,F,De)};function Y(K,ne,pe){pe===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return g[K]};let ue=null;function me(K,ne){if(h=ne.getViewerPose(c||o),p=ne,h!==null){let pe=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let De=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let V=0;V<pe.length;V++){let Q=pe[V],ie=null;if(u!==null)ie=u.getViewport(Q);else{let se=d.getViewSubImage(f,Q);ie=se.viewport,V===0&&(e.setRenderTargetTextures(y,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(y))}let q=L[V];q===void 0&&(q=new Zt,q.layers.enable(V),q.viewport=new kt,L[V]=q),q.matrix.fromArray(Q.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Q.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ie.x,ie.y,ie.width,ie.height),V===0&&(F.matrix.copy(q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(q)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let V=d.getDepthInformation(pe[0]);V&&V.isValid&&V.texture&&m.init(V,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let V=0;V<pe.length;V++){let Q=pe[V].camera;if(Q){let ie=g[Q];ie||(ie=new Mo,g[Q]=ie);let q=d.getCameraImage(Q);ie.sourceTexture=q}}}}for(let pe=0;pe<v.length;pe++){let De=S[pe],ve=v[pe];De!==null&&ve!==void 0&&ve.update(De,ne,c||o)}ue&&ue(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}let Pe=new Ld;Pe.setAnimationLoop(me),this.setAnimationLoop=function(K){ue=K},this.dispose=function(){}}},Hv=new it,Od=new tt;Od.set(-1,0,0,0,1,0,0,0,1);function zv(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,qh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===qt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===qt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Od),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=s[y.id];S===void 0&&(m(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",M));let b=v.program;n.updateUBOMapping(y,b);let x=e.render.frame;r[y.id]!==x&&(f(y),r[y.id]=x)}function h(y){let v=d();y.__bindingPointIndex=v;let S=i.createBuffer(),b=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,b,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],S=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,E=S.length;x<E;x++){let A=S[x];if(Array.isArray(A))for(let I=0,L=A.length;I<L;I++)u(A[I],x,I,b);else u(A,x,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,v,S,b){if(_(y,v,S,b)===!0){let x=y.__offset,E=y.value;if(Array.isArray(E)){let A=0;for(let I=0;I<E.length;I++){let L=E[I],F=g(L);p(L,y.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,v,S){typeof y=="number"||typeof y=="boolean"?v[0]=y:y.isMatrix3?(v[0]=y.elements[0],v[1]=y.elements[1],v[2]=y.elements[2],v[3]=0,v[4]=y.elements[3],v[5]=y.elements[4],v[6]=y.elements[5],v[7]=0,v[8]=y.elements[6],v[9]=y.elements[7],v[10]=y.elements[8],v[11]=0):ArrayBuffer.isView(y)?v.set(new y.constructor(y.buffer,y.byteOffset,v.length)):y.toArray(v,S)}function _(y,v,S,b){let x=y.value,E=v+"_"+S;if(b[E]===void 0)return typeof x=="number"||typeof x=="boolean"?b[E]=x:ArrayBuffer.isView(x)?b[E]=x.slice():b[E]=x.clone(),!0;{let A=b[E];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return b[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function m(y){let v=y.uniforms,S=0,b=16;for(let E=0,A=v.length;E<A;E++){let I=Array.isArray(v[E])?v[E]:[v[E]];for(let L=0,F=I.length;L<F;L++){let C=I[L],U=Array.isArray(C.value)?C.value:[C.value];for(let k=0,O=U.length;k<O;k++){let H=U[k],B=g(H),G=S%b,D=G%B.boundary,J=G+D;S+=D,J!==0&&b-J<B.storage&&(S+=b-J),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=B.storage}}}let x=S%b;return x>0&&(S+=b-x),y.__size=S,y.__cache={},this}function g(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",y),v}function M(y){let v=y.target;v.removeEventListener("dispose",M);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function Vv(){return Pi===null&&(Pi=new Us(Gv,16,16,xs,hn),Pi.name="DFG_LUT",Pi.minFilter=cn,Pi.magFilter=cn,Pi.wrapS=wi,Pi.wrapT=wi,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var dc=class{constructor(e={}){let{canvas:t=jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Pn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=u,m=new Set([Il,Pl,Cl]),g=new Set([Pn,_i,Ir,Lr,Al,Rl]),M=new Uint32Array(4),w=new Int32Array(4),y=new P,v=null,S=null,b=[],x=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,L=null,F=null,C=null,U=null;this._outputColorSpace=sn;let k=0,O=0,H=null,B=-1,G=null,D=new kt,J=new kt,Y=null,ue=new le(0),me=0,Pe=t.width,K=t.height,ne=1,pe=null,De=null,ve=new kt(0,0,Pe,K),ze=new kt(0,0,Pe,K),et=!1,V=new Er,Q=!1,ie=!1,q=new it,se=new P,fe=new kt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Be(){return H===null?ne:1}let z=n;function ft(R,W){return t.getContext(R,W)}let st,N,T,Z,$,re,ge,_e,oe,he,ye,We,we,Me,Xe,Ze,nt,X,Se,ce,Ee,Ie,de;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",li,!1),z===null){let W="webgl2";if(z=ft(W,R),z===null)throw ft(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(R){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",li,!1),$e("WebGLRenderer: "+R.message),R}function qe(){st=new $x(z),st.init(),Ee=new Fv(z,st),N=new zx(z,st,e,Ee),T=new Nv(z,st),N.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),F=z.createFramebuffer(),C=z.createFramebuffer(),U=z.createFramebuffer(),Z=new jx(z),$=new yv,re=new Uv(z,st,T,$,N,Ee,Z),ge=new Jx(A),_e=new tm(z),Ie=new Ox(z,_e),oe=new Kx(z,_e,Z,Ie),he=new t_(z,oe,_e,Ie,Z),X=new e_(z,N,re),Xe=new kx($),ye=new vv(A,ge,st,N,Ie,Xe),We=new zv(A,$),we=new Sv,Me=new Rv(st),nt=new Bx(A,ge,T,he,p,l),Ze=new Dv(A,he,N),de=new kv(z,Z,N,T),Se=new Hx(z,st,Z),ce=new Qx(z,st,Z),Z.programs=ye.programs,A.capabilities=N,A.extensions=st,A.properties=$,A.renderLists=we,A.shadowMap=Ze,A.state=T,A.info=Z}_!==Pn&&(E=new i_(_,t.width,t.height,a,s,r));let ke=new mu(A,z);this.xr=ke,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(Pe,K,!1))},this.getSize=function(R){return R.set(Pe,K)},this.setSize=function(R,W,te=!0){if(ke.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=R,K=W,t.width=Math.floor(R*ne),t.height=Math.floor(W*ne),te===!0&&(t.style.width=R+"px",t.style.height=W+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Pe*ne,K*ne).floor()},this.setDrawingBufferSize=function(R,W,te){Pe=R,K=W,ne=te,t.width=Math.floor(R*te),t.height=Math.floor(W*te),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(_===Pn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ve)},this.setViewport=function(R,W,te,j){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,W,te,j),T.viewport(D.copy(ve).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(ze)},this.setScissor=function(R,W,te,j){R.isVector4?ze.set(R.x,R.y,R.z,R.w):ze.set(R,W,te,j),T.scissor(J.copy(ze).multiplyScalar(ne).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(R){T.setScissorTest(et=R)},this.setOpaqueSort=function(R){pe=R},this.setTransparentSort=function(R){De=R},this.getClearColor=function(R){return R.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,te=!0){let j=0;if(R){let ee=!1;if(H!==null){let Ce=H.texture.format;ee=m.has(Ce)}if(ee){let Ce=H.texture.type,Ue=g.has(Ce),Re=nt.getClearColor(),Oe=nt.getClearAlpha(),Ge=Re.r,ot=Re.g,dt=Re.b;Ue?(M[0]=Ge,M[1]=ot,M[2]=dt,M[3]=Oe,z.clearBufferuiv(z.COLOR,0,M)):(w[0]=Ge,w[1]=ot,w[2]=dt,w[3]=Oe,z.clearBufferiv(z.COLOR,0,w))}else j|=z.COLOR_BUFFER_BIT}W&&(j|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",li,!1),nt.dispose(),we.dispose(),Me.dispose(),$.dispose(),ge.dispose(),he.dispose(),Ie.dispose(),de.dispose(),ye.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Iu),ke.removeEventListener("sessionend",Lu),Rs.stop()};function Lt(R){R.preventDefault(),uo("WebGLRenderer: Context Lost."),I=!0}function St(){uo("WebGLRenderer: Context Restored."),I=!1;let R=Z.autoReset,W=Ze.enabled,te=Ze.autoUpdate,j=Ze.needsUpdate,ee=Ze.type;qe(),Z.autoReset=R,Ze.enabled=W,Ze.autoUpdate=te,Ze.needsUpdate=j,Ze.type=ee}function li(R){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Si(R){let W=R.target;W.removeEventListener("dispose",Si),Np(W)}function Np(R){Up(R),$.remove(R)}function Up(R){let W=$.get(R).programs;W!==void 0&&(W.forEach(function(te){ye.releaseProgram(te)}),R.isShaderMaterial&&ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,te,j,ee,Ce){W===null&&(W=xe);let Ue=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Re=Op(R,W,te,j,ee);T.setMaterial(j,Ue);let Oe=te.index,Ge=1;if(j.wireframe===!0){if(Oe=oe.getWireframeAttribute(te),Oe===void 0)return;Ge=2}let ot=te.drawRange,dt=te.attributes.position,He=ot.start*Ge,Et=(ot.start+ot.count)*Ge;Ce!==null&&(He=Math.max(He,Ce.start*Ge),Et=Math.min(Et,(Ce.start+Ce.count)*Ge)),Oe!==null?(He=Math.max(He,0),Et=Math.min(Et,Oe.count)):dt!=null&&(He=Math.max(He,0),Et=Math.min(Et,dt.count));let tn=Et-He;if(tn<0||tn===1/0)return;Ie.setup(ee,j,Re,te,Oe);let Ft,Pt=Se;if(Oe!==null&&(Ft=_e.get(Oe),Pt=ce,Pt.setIndex(Ft)),ee.isMesh)j.wireframe===!0?(T.setLineWidth(j.wireframeLinewidth*Be()),Pt.setMode(z.LINES)):Pt.setMode(z.TRIANGLES);else if(ee.isLine){let Tn=j.linewidth;Tn===void 0&&(Tn=1),T.setLineWidth(Tn*Be()),ee.isLineSegments?Pt.setMode(z.LINES):ee.isLineLoop?Pt.setMode(z.LINE_LOOP):Pt.setMode(z.LINE_STRIP)}else ee.isPoints?Pt.setMode(z.POINTS):ee.isSprite&&Pt.setMode(z.TRIANGLES);if(ee.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Tn=ee._multiDrawStarts,Ne=ee._multiDrawCounts,Dn=ee._multiDrawCount,_t=Oe?_e.get(Oe).bytesPerElement:1,Jn=$.get(j).currentProgram.getUniforms();for(let Ei=0;Ei<Dn;Ei++)Jn.setValue(z,"_gl_DrawID",Ei),Pt.render(Tn[Ei]/_t,Ne[Ei])}else if(ee.isInstancedMesh)Pt.renderInstances(He,tn,ee.count);else if(te.isInstancedBufferGeometry){let Tn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ne=Math.min(te.instanceCount,Tn);Pt.renderInstances(He,tn,Ne)}else Pt.render(He,tn)};function Pu(R,W,te,j){L!==null&&R.isNodeMaterial&&L.setObject(j,R),Q===!0&&Xe.setState(R,te,!1),R.transparent===!0&&R.side===gt&&R.forceSinglePass===!1?(R.side=qt,R.needsUpdate=!0,da(R,W,j),R.side=Zi,R.needsUpdate=!0,da(R,W,j),R.side=gt):da(R,W,j)}this.compile=function(R,W,te=null){te===null&&(te=R),L!==null&&L.renderStart(R,W,te),S=Me.get(te),S.init(W),x.push(S),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),R!==te&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),ie=this.localClippingEnabled,Q=Xe.init(this.clippingPlanes,ie),Q===!0&&Xe.setGlobalState(this.clippingPlanes,W),L!==null&&Ze.render(S.state.shadowsArray,te,W);let j=new Set;return R.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ce=ee.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){let Re=Ce[Ue];Pu(Re,te,W,ee),j.add(Re)}else Pu(Ce,te,W,ee),j.add(Ce)}),S=x.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(R,W,te=null){let j=this.compile(R,W,te);return new Promise(ee=>{function Ce(){if(j.forEach(function(Ue){let Oe=$.get(Ue).currentProgram;(Oe===void 0||Oe.isReady())&&j.delete(Ue)}),j.size===0){ee(R);return}setTimeout(Ce,10)}st.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Vc=null;function Fp(R){Vc&&Vc(R)}function Iu(){Rs.stop()}function Lu(){Rs.start()}let Rs=new Ld;Rs.setAnimationLoop(Fp),typeof self<"u"&&Rs.setContext(self),this.setAnimationLoop=function(R){Vc=R,ke.setAnimationLoop(R),R===null?Rs.stop():Rs.start()},ke.addEventListener("sessionstart",Iu),ke.addEventListener("sessionend",Lu),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(R,W);let te=ke.enabled===!0&&ke.isPresenting===!0,j=E!==null&&(H===null||te)&&E.begin(A,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(W),W=ke.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,H),S=Me.get(R,x.length),S.init(W),S.state.textureUnits=re.getTextureUnits(),x.push(S),q.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V.setFromProjectionMatrix(q,di,W.reversedDepth),ie=this.localClippingEnabled,Q=Xe.init(this.clippingPlanes,ie),v=we.get(R,b.length),v.init(),b.push(v),ke.enabled===!0&&ke.isPresenting===!0){let Ue=A.xr.getDepthSensingMesh();Ue!==null&&Wc(Ue,W,-1/0,A.sortObjects)}Wc(R,W,0,A.sortObjects),v.finish(),L!==null&&L.updateLights(S.state.lightsArray),A.sortObjects===!0&&v.sort(pe,De),Te=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Te&&nt.addToRenderList(v,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Xe.beginShadows();let ee=S.state.shadowsArray;if(Ze.render(ee,R,W),Q===!0&&Xe.endShadows(),(j&&E.hasRenderPass())===!1){let Ue=v.opaque,Re=v.transmissive;if(S.setupLights(),W.isArrayCamera){let Oe=W.cameras;if(Re.length>0)for(let Ge=0,ot=Oe.length;Ge<ot;Ge++){let dt=Oe[Ge];Nu(Ue,Re,R,dt)}Te&&nt.render(R);for(let Ge=0,ot=Oe.length;Ge<ot;Ge++){let dt=Oe[Ge];Du(v,R,dt,dt.viewport)}}else Re.length>0&&Nu(Ue,Re,R,W),Te&&nt.render(R),Du(v,R,W)}H!==null&&O===0&&(re.updateMultisampleRenderTarget(H),re.updateRenderTargetMipmap(H)),j&&E.end(A),R.isScene===!0&&R.onAfterRender(A,R,W),Ie.resetDefaultState(),B=-1,G=null,x.pop(),x.length>0?(S=x[x.length-1],re.setTextureUnits(S.state.textureUnits),Q===!0&&Xe.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,b.pop(),b.length>0?v=b[b.length-1]:v=null,L!==null&&L.renderEnd()};function Wc(R,W,te,j){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(V)){j&&fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(q);let Ue=he.update(R),Re=R.material;Re.visible&&v.push(R,Ue,Re,te,fe.z,null,W)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(V))){let Ue=he.update(R),Re=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),fe.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),fe.copy(Ue.boundingSphere.center)),fe.applyMatrix4(R.matrixWorld).applyMatrix4(q)),Array.isArray(Re)){let Oe=Ue.groups;for(let Ge=0,ot=Oe.length;Ge<ot;Ge++){let dt=Oe[Ge],He=Re[dt.materialIndex];He&&He.visible&&v.push(R,Ue,He,te,fe.z,dt,W)}}else Re.visible&&v.push(R,Ue,Re,te,fe.z,null,W)}}let Ce=R.children;for(let Ue=0,Re=Ce.length;Ue<Re;Ue++)Wc(Ce[Ue],W,te,j)}function Du(R,W,te,j){let{opaque:ee,transmissive:Ce,transparent:Ue}=R;S.setupLightsView(te),Q===!0&&Xe.setGlobalState(A.clippingPlanes,te),j&&T.viewport(D.copy(j)),ee.length>0&&fa(ee,W,te),Ce.length>0&&fa(Ce,W,te),Ue.length>0&&fa(Ue,W,te),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Nu(R,W,te,j){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[j.id]===void 0){let He=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[j.id]=new Jt(1,1,{generateMipmaps:!0,type:He?hn:Pn,minFilter:ms,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Ce=S.state.transmissionRenderTarget[j.id],Ue=j.viewport||D;Ce.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);let Re=A.getRenderTarget(),Oe=A.getActiveCubeFace(),Ge=A.getActiveMipmapLevel();A.setRenderTarget(Ce),A.getClearColor(ue),me=A.getClearAlpha(),me<1&&A.setClearColor(16777215,.5),A.clear(),Te&&nt.render(te);let ot=A.toneMapping;A.toneMapping=gi;let dt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),S.setupLightsView(j),Q===!0&&Xe.setGlobalState(A.clippingPlanes,j),fa(R,te,j),re.updateMultisampleRenderTarget(Ce),re.updateRenderTargetMipmap(Ce),st.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Et=0,tn=W.length;Et<tn;Et++){let Ft=W[Et],{object:Pt,geometry:Tn,material:Ne,group:Dn}=Ft;if(Ne.side===gt&&Pt.layers.test(j.layers)){let _t=Ne.side;Ne.side=qt,Ne.needsUpdate=!0,Uu(Pt,te,j,Tn,Ne,Dn),Ne.side=_t,Ne.needsUpdate=!0,He=!0}}He===!0&&(re.updateMultisampleRenderTarget(Ce),re.updateRenderTargetMipmap(Ce))}A.setRenderTarget(Re,Oe,Ge),A.setClearColor(ue,me),dt!==void 0&&(j.viewport=dt),A.toneMapping=ot}function fa(R,W,te){let j=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,Ce=R.length;ee<Ce;ee++){let Ue=R[ee],{object:Re,geometry:Oe,group:Ge}=Ue,ot=Ue.material;ot.allowOverride===!0&&j!==null&&(ot=j),Re.layers.test(te.layers)&&Uu(Re,W,te,Oe,ot,Ge)}}function Uu(R,W,te,j,ee,Ce){L!==null&&ee.isNodeMaterial&&L.setObject(R,ee),R.onBeforeRender(A,W,te,j,ee,Ce),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(A,W,te,j,R,Ce),ee.transparent===!0&&ee.side===gt&&ee.forceSinglePass===!1?(ee.side=qt,ee.needsUpdate=!0,A.renderBufferDirect(te,W,j,ee,R,Ce),ee.side=Zi,ee.needsUpdate=!0,A.renderBufferDirect(te,W,j,ee,R,Ce),ee.side=gt):A.renderBufferDirect(te,W,j,ee,R,Ce),R.onAfterRender(A,W,te,j,ee,Ce)}function da(R,W,te){W.isScene!==!0&&(W=xe);let j=$.get(R),ee=S.state.lights,Ce=S.state.shadowsArray,Ue=ee.state.version,Re=ye.getParameters(R,ee.state,Ce,W,te,S.state.lightProbeGridArray),Oe=ye.getProgramCacheKey(Re),Ge=j.programs;j.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let ot=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;j.envMap=ge.get(R.envMap||j.environment,ot),j.envMapRotation=j.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",Si),Ge=new Map,j.programs=Ge);let dt=Ge.get(Oe);if(dt!==void 0){if(j.currentProgram===dt&&j.lightsStateVersion===Ue)return Bu(R,Re),dt}else Re.uniforms=ye.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,te,Re),R.onBeforeCompile(Re,A),dt=ye.acquireProgram(Re,Oe),Ge.set(Oe,dt),j.uniforms=Re.uniforms;let He=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Xe.uniform),Bu(R,Re),j.needsLights=zp(R),j.lightsStateVersion=Ue,j.needsLights&&(He.ambientLightColor.value=ee.state.ambient,He.lightProbe.value=ee.state.probe,He.sunLights.value=ee.state.sun,He.sunLightShadows.value=ee.state.sunShadow,He.directionalLights.value=ee.state.directional,He.directionalLightShadows.value=ee.state.directionalShadow,He.spotLights.value=ee.state.spot,He.spotLightShadows.value=ee.state.spotShadow,He.rectAreaLights.value=ee.state.rectArea,He.ltc_1.value=ee.state.rectAreaLTC1,He.ltc_2.value=ee.state.rectAreaLTC2,He.pointLights.value=ee.state.point,He.pointLightShadows.value=ee.state.pointShadow,He.hemisphereLights.value=ee.state.hemi,He.sunShadowMatrix.value=ee.state.sunShadowMatrix,He.sunShadowCascade.value=ee.state.sunShadowCascade,He.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,He.spotLightMatrix.value=ee.state.spotLightMatrix,He.spotLightMap.value=ee.state.spotLightMap,He.pointShadowMatrix.value=ee.state.pointShadowMatrix),j.lightProbeGrid=S.state.lightProbeGridArray.length>0,j.currentProgram=dt,j.uniformsList=null,dt}function Fu(R){if(R.uniformsList===null){let W=R.currentProgram.getUniforms();R.uniformsList=Fr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Bu(R,W){let te=$.get(R);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function Bp(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;y.setFromMatrixPosition(W.matrixWorld);for(let te=0,j=R.length;te<j;te++){let ee=R[te];if(ee.texture!==null&&ee.boundingBox.containsPoint(y))return ee}return null}function Op(R,W,te,j,ee){W.isScene!==!0&&(W=xe),re.resetTextureUnits();let Ce=W.fog,Ue=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Re=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ht.workingColorSpace,Oe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ge=ge.get(j.envMap||Ue,Oe),ot=j.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,dt=!!te.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!te.morphAttributes.position,Et=!!te.morphAttributes.normal,tn=!!te.morphAttributes.color,Ft=gi;j.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ft=A.toneMapping);let Pt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Tn=Pt!==void 0?Pt.length:0,Ne=$.get(j),Dn=S.state.lights;if(Q===!0&&(ie===!0||R!==G)){let Dt=R===G&&j.id===B;Xe.setState(j,R,Dt)}let _t=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Dn.state.version||Ne.outputColorSpace!==Re||ee.isBatchedMesh&&Ne.batching===!1||!ee.isBatchedMesh&&Ne.batching===!0||ee.isBatchedMesh&&Ne.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Ne.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Ne.instancing===!1||!ee.isInstancedMesh&&Ne.instancing===!0||ee.isSkinnedMesh&&Ne.skinning===!1||!ee.isSkinnedMesh&&Ne.skinning===!0||ee.isInstancedMesh&&Ne.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ne.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ne.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ne.instancingMorph===!1&&ee.morphTexture!==null||Ne.envMap!==Ge||j.fog===!0&&Ne.fog!==Ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Xe.numPlanes||Ne.numIntersection!==Xe.numIntersection)||Ne.vertexAlphas!==ot||Ne.vertexTangents!==dt||Ne.morphTargets!==He||Ne.morphNormals!==Et||Ne.morphColors!==tn||Ne.toneMapping!==Ft||Ne.morphTargetsCount!==Tn||!!Ne.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ne.__version=j.version);let Jn=Ne.currentProgram;_t===!0&&(Jn=da(j,W,ee),L&&j.isNodeMaterial&&L.onUpdateProgram(j,Jn,Ne));let Ei=!1,es=!1,Js=!1,Tt=Jn.getUniforms(),Kt=Ne.uniforms;if(T.useProgram(Jn.program)&&(Ei=!0,es=!0,Js=!0),j.id!==B&&(B=j.id,es=!0),Ne.needsLights){let Dt=Bp(S.state.lightProbeGridArray,ee);Ne.lightProbeGrid!==Dt&&(Ne.lightProbeGrid=Dt,es=!0)}if(Ei||G!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Tt.setValue(z,"projectionMatrix",R.projectionMatrix),Tt.setValue(z,"viewMatrix",R.matrixWorldInverse);let ns=Tt.map.cameraPosition;ns!==void 0&&ns.setValue(z,se.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&Tt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Tt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,es=!0,Js=!0)}if(Ne.needsLights&&(Dn.state.sunShadowMap.length>0&&Tt.setValue(z,"sunShadowMap",Dn.state.sunShadowMap,re),Dn.state.directionalShadowMap.length>0&&Tt.setValue(z,"directionalShadowMap",Dn.state.directionalShadowMap,re),Dn.state.spotShadowMap.length>0&&Tt.setValue(z,"spotShadowMap",Dn.state.spotShadowMap,re),Dn.state.pointShadowMap.length>0&&Tt.setValue(z,"pointShadowMap",Dn.state.pointShadowMap,re)),ee.isSkinnedMesh){Tt.setOptional(z,ee,"bindMatrix"),Tt.setOptional(z,ee,"bindMatrixInverse");let Dt=ee.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Tt.setValue(z,"boneTexture",Dt.boneTexture,re))}ee.isBatchedMesh&&(Tt.setOptional(z,ee,"batchingTexture"),Tt.setValue(z,"batchingTexture",ee._matricesTexture,re),Tt.setOptional(z,ee,"batchingIdTexture"),Tt.setValue(z,"batchingIdTexture",ee._indirectTexture,re),Tt.setOptional(z,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Tt.setValue(z,"batchingColorTexture",ee._colorsTexture,re));let ts=te.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&X.update(ee,te,Jn),(es||Ne.receiveShadow!==ee.receiveShadow)&&(Ne.receiveShadow=ee.receiveShadow,Tt.setValue(z,"receiveShadow",ee.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Kt.envMapIntensity.value=W.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=Vv()),es){if(Tt.setValue(z,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&Hp(Kt,Js),Ce&&j.fog===!0&&We.refreshFogUniforms(Kt,Ce),We.refreshMaterialUniforms(Kt,j,ne,K,S.state.transmissionRenderTarget[R.id]),Ne.needsLights&&Ne.lightProbeGrid){let Dt=Ne.lightProbeGrid;Kt.probesSH.value=Dt.texture,Kt.probesMin.value.copy(Dt.boundingBox.min),Kt.probesMax.value.copy(Dt.boundingBox.max),Kt.probesResolution.value.copy(Dt.resolution)}Fr.upload(z,Fu(Ne),Kt,re)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fr.upload(z,Fu(Ne),Kt,re),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Tt.setValue(z,"center",ee.center),Tt.setValue(z,"modelViewMatrix",ee.modelViewMatrix),Tt.setValue(z,"normalMatrix",ee.normalMatrix),Tt.setValue(z,"modelMatrix",ee.matrixWorld),j.uniformsGroups!==void 0){let Dt=j.uniformsGroups;for(let ns=0,$s=Dt.length;ns<$s;ns++){let Hu=Dt[ns];de.update(Hu,Jn),de.bind(Hu,Jn)}}return Jn}function Hp(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function zp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,W,te){let j=$.get(R);j.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),$.get(R.texture).__webglTexture=W,$.get(R.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:te,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){let te=$.get(R);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,te=0){H=R,k=W,O=te;let j=null,ee=!1,Ce=!1;if(R){let Re=$.get(R);if(Re.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(z.FRAMEBUFFER,Re.__webglFramebuffer),D.copy(R.viewport),J.copy(R.scissor),Y=R.scissorTest,T.viewport(D),T.scissor(J),T.setScissorTest(Y),B=-1;return}else if(Re.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Re.__hasExternalTextures)re.rebindTextures(R,$.get(R.texture).__webglTexture,$.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ot=R.depthTexture;if(Re.__boundDepthTexture!==ot){if(ot!==null&&$.has(ot)&&(R.width!==ot.image.width||R.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}let Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);let Ge=$.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[W])?j=Ge[W][te]:j=Ge[W],ee=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?j=$.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?j=Ge[te]:j=Ge,D.copy(R.viewport),J.copy(R.scissor),Y=R.scissorTest}else D.copy(ve).multiplyScalar(ne).floor(),J.copy(ze).multiplyScalar(ne).floor(),Y=et;if(te!==0&&(j=F),T.bindFramebuffer(z.FRAMEBUFFER,j)&&T.drawBuffers(R,j),T.viewport(D),T.scissor(J),T.setScissorTest(Y),ee){let Re=$.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Re.__webglTexture,te)}else if(Ce){let Re=W;for(let Oe=0;Oe<R.textures.length;Oe++){let Ge=$.get(R.textures[Oe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Oe,Ge.__webglTexture,te,Re)}}else if(R!==null&&te!==0){let Re=$.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Re.__webglTexture,te)}B=-1};function Ou(R){let W=$.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=N.textureFormatReadable(R.format),W.__typeReadable=N.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,te,j,ee,Ce,Ue,Re=0){if(!(R&&R.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){T.bindFramebuffer(z.FRAMEBUFFER,Oe);try{let Ge=R.textures[Re],ot=Ge.format,dt=Ge.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re);let He=Ou(Ge);if(He.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-j&&te>=0&&te<=R.height-ee&&z.readPixels(W,te,j,ee,Ee.convert(ot),Ee.convert(dt),Ce)}finally{let Ge=H!==null?$.get(H).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,W,te,j,ee,Ce,Ue,Re=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe)if(W>=0&&W<=R.width-j&&te>=0&&te<=R.height-ee){T.bindFramebuffer(z.FRAMEBUFFER,Oe);let Ge=R.textures[Re],ot=Ge.format,dt=Ge.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re);let He=Ou(Ge);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.bufferData(z.PIXEL_PACK_BUFFER,Ce.byteLength,z.STREAM_READ),z.readPixels(W,te,j,ee,Ee.convert(ot),Ee.convert(dt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let tn=H!==null?$.get(H).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,tn);let Ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await td(z,Ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ce),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Et),z.deleteSync(Ft),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,te=0){let j=Math.pow(2,-te),ee=Math.floor(R.image.width*j),Ce=Math.floor(R.image.height*j),Ue=W!==null?W.x:0,Re=W!==null?W.y:0;re.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,Ue,Re,ee,Ce),T.unbindTexture()},this.copyTextureToTexture=function(R,W,te=null,j=null,ee=0,Ce=0){let Ue,Re,Oe,Ge,ot,dt,He,Et,tn,Ft=R.isCompressedTexture?R.mipmaps[Ce]:R.image;if(te!==null)Ue=te.max.x-te.min.x,Re=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,Ge=te.min.x,ot=te.min.y,dt=te.isBox3?te.min.z:0;else{let Kt=Math.pow(2,-ee);Ue=Math.floor(Ft.width*Kt),Re=Math.floor(Ft.height*Kt),R.isDataArrayTexture?Oe=Ft.depth:R.isData3DTexture?Oe=Math.floor(Ft.depth*Kt):Oe=1,Ge=0,ot=0,dt=0}j!==null?(He=j.x,Et=j.y,tn=j.z):(He=0,Et=0,tn=0);let Pt=Ee.convert(W.format),Tn=Ee.convert(W.type),Ne;W.isData3DTexture?(re.setTexture3D(W,0),Ne=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),Ne=z.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),Ne=z.TEXTURE_2D),T.activeTexture(z.TEXTURE0),T.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);let Dn=T.getParameter(z.UNPACK_ROW_LENGTH),_t=T.getParameter(z.UNPACK_IMAGE_HEIGHT),Jn=T.getParameter(z.UNPACK_SKIP_PIXELS),Ei=T.getParameter(z.UNPACK_SKIP_ROWS),es=T.getParameter(z.UNPACK_SKIP_IMAGES);T.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),T.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),T.pixelStorei(z.UNPACK_SKIP_ROWS,ot),T.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);let Js=R.isDataArrayTexture||R.isData3DTexture,Tt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){let Kt=$.get(R),ts=$.get(W),Dt=$.get(Kt.__renderTarget),ns=$.get(ts.__renderTarget);T.bindFramebuffer(z.READ_FRAMEBUFFER,Dt.__webglFramebuffer),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let $s=0;$s<Oe;$s++)Js&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(R).__webglTexture,ee,dt+$s),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(W).__webglTexture,Ce,tn+$s)),z.blitFramebuffer(Ge,ot,Ue,Re,He,Et,Ue,Re,z.DEPTH_BUFFER_BIT,z.NEAREST);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ee!==0||R.isRenderTargetTexture||$.has(R)){let Kt=$.get(R),ts=$.get(W);T.bindFramebuffer(z.READ_FRAMEBUFFER,C),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let Dt=0;Dt<Oe;Dt++)Js?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.__webglTexture,ee,dt+Dt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Kt.__webglTexture,ee),Tt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ts.__webglTexture,Ce,tn+Dt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ts.__webglTexture,Ce),ee!==0?z.blitFramebuffer(Ge,ot,Ue,Re,He,Et,Ue,Re,z.COLOR_BUFFER_BIT,z.NEAREST):Tt?z.copyTexSubImage3D(Ne,Ce,He,Et,tn+Dt,Ge,ot,Ue,Re):z.copyTexSubImage2D(Ne,Ce,He,Et,Ge,ot,Ue,Re);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Tt?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ne,Ce,He,Et,tn,Ue,Re,Oe,Pt,Tn,Ft.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Ne,Ce,He,Et,tn,Ue,Re,Oe,Pt,Ft.data):z.texSubImage3D(Ne,Ce,He,Et,tn,Ue,Re,Oe,Pt,Tn,Ft):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ce,He,Et,Ue,Re,Pt,Tn,Ft.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ce,He,Et,Ft.width,Ft.height,Pt,Ft.data):z.texSubImage2D(z.TEXTURE_2D,Ce,He,Et,Ue,Re,Pt,Tn,Ft);T.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t),T.pixelStorei(z.UNPACK_SKIP_PIXELS,Jn),T.pixelStorei(z.UNPACK_SKIP_ROWS,Ei),T.pixelStorei(z.UNPACK_SKIP_IMAGES,es),Ce===0&&W.generateMipmaps&&z.generateMipmap(Ne),T.unbindTexture()},this.initRenderTarget=function(R){$.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){k=0,O=0,H=null,T.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Wv=new fs(-1,1,1,-1,0,1),gu=class extends rt{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}},Xv=new gu,vs=class{constructor(e){this._mesh=new Ae(Xv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Wv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var gc=class extends Wn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vi.clone(e.uniforms),this.material=new ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ea=class extends Wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xc=class extends Wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gc(Or),this.copyPass.material.blending=jn,this.timer=new Uo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ea!==void 0&&(o instanceof ea?n=!0:o instanceof xc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vc=class extends Wn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new le}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Hd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Hr=class i extends Wn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,o,{type:hn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Jt(r,o,{type:hn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Jt(r,o,{type:hn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Hd;this.highPassUniforms=vi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vi.clone(Or.uniforms),this.blendMaterial=new ct({uniforms:this.copyUniforms,vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,premultipliedAlpha:!0,blending:bt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new le,this._oldClearAlpha=1,this._basic=new vt,this._fsQuad=new vs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ct({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Hr.BlurDirectionX=new ae(1,0);Hr.BlurDirectionY=new ae(0,1);var ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var yc=class extends Wn{constructor(){super(),this.isOutputPass=!0,this.uniforms=vi.clone(ta.uniforms),this.material=new Ar({name:ta.name,uniforms:this.uniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader}),this._fsQuad=new vs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ho&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Xn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new rt,c=0;for(let h=0;h<i.length;++h){let d=i[h],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0,d=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=zd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][f]);let p=zd(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function zd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new xt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){let _=h.getComponent(f,p);a.setComponent(f+d,p,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var ln=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Sn=(i,e,t)=>i+(e-i)*t,Fe=(i,e,t)=>{let n=ln((t-i)/(e-i));return n*n*(3-2*n)},Gd=i=>(i=ln(i),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2),yi=(i,e,t,n,s)=>Fe(e,t,i)*(1-Fe(n,s,i));function Rt(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var zr=class{constructor(e){this.t=e.map(t=>t[0]),this.v=e.map(t=>t[1]),this.vec=typeof e[0][1]!="number"}at(e,t){let{t:n,v:s}=this,r=n.length;if(e<=n[0])return this.vec?t.copy(s[0]):s[0];if(e>=n[r-1])return this.vec?t.copy(s[r-1]):s[r-1];let o=0;for(;e>n[o+1];)o++;let a=n[o],l=n[o+1],c=l-a,h=(e-a)/c,d=h*h,f=d*h,u=2*f-3*d+1,p=f-2*d+h,_=-2*f+3*d,m=f-d,g=y=>y<=0||y>=r-1?null:[y-1,y+1,n[y+1]-n[y-1]],M=g(o),w=g(o+1);if(!this.vec){let y=M?(s[M[1]]-s[M[0]])/M[2]*c:0,v=w?(s[w[1]]-s[w[0]])/w[2]*c:0;return u*s[o]+p*y+_*s[o+1]+m*v}return t.set(0,0,0).addScaledVector(s[o],u).addScaledVector(s[o+1],_),M&&t.addScaledVector(kd.subVectors(s[M[1]],s[M[0]]),p*c/M[2]),w&&t.addScaledVector(kd.subVectors(s[w[1]],s[w[0]]),m*c/w[2]),t}},kd=new P,dn=(i,e,t)=>new P(i,e,t),Ct=i=>new le(i);function en(i,e,t={}){let n=i.map(r=>{let o=r.index?r.toNonIndexed():r;o.attributes.uv||o.setAttribute("uv",new xt(new Float32Array(o.attributes.position.count*2),2));for(let a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);return o}),s=new Ae(Xn(n,!1),e);return s.castShadow=!!t.cast,s.receiveShadow=!!t.receive,s}function Ve(i,{x:e=0,y:t=0,z:n=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1}={}){let h=new it().compose(new P(e,t,n),new zt().setFromEuler(new Wt(s,r,o)),new P(a,l,c));return i.applyMatrix4(h)}var Vd=1,Wd=i=>{Vd=i};function _n(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Bn(i,{srgb:e=!0,repeat:t=!1}={}){let n=new Qn(i);return e&&(n.colorSpace=sn),t&&(n.wrapS=n.wrapT=Vi),n.anisotropy=Vd,n}function Sc(i,e=2){let t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,[r,o]=_n(t,n),a=o.createImageData(t,n),l=a.data,c=(h,d)=>s[((d+n)%n*t+(h+t)%t)*4]/255;for(let h=0;h<n;h++)for(let d=0;d<t;d++){let f=c(d+1,h-1)+2*c(d+1,h)+c(d+1,h+1)-(c(d-1,h-1)+2*c(d-1,h)+c(d-1,h+1)),u=c(d-1,h+1)+2*c(d,h+1)+c(d+1,h+1)-(c(d-1,h-1)+2*c(d,h-1)+c(d+1,h-1)),p=-f*e,_=u*e,m=1,g=Math.hypot(p,_,m),M=(h*t+d)*4;l[M]=(p/g*.5+.5)*255,l[M+1]=(_/g*.5+.5)*255,l[M+2]=(m/g*.5+.5)*255,l[M+3]=255}return o.putImageData(a,0,0),Bn(r,{srgb:!1,repeat:!0})}function xu(i,e,t,n,s,r,o,a){let l=Rt(o);for(let c=0;c<n;c++)i.globalAlpha=r*(.4+l()*.6),i.fillStyle=a[Math.floor(l()*a.length)],i.beginPath(),i.arc(l()*e,l()*t,s*(.3+l()),0,Math.PI*2),i.fill();i.globalAlpha=1}function Ec({base:i=[236,228,250],seed:e=7}={}){let s=Rt(e),[r,o]=_n(512),[a,l]=_n(512);o.fillStyle=`rgb(${i.map(h=>h-34).join(",")})`,o.fillRect(0,0,512,512),l.fillStyle="#000",l.fillRect(0,0,512,512);let c=512/8;for(let h=0;h<8;h++){let u=h%2*128/2;for(let p=-1;p<4;p++){let _=p*128+u+3,m=h*c+3,g=122,M=c-6,w=(s()-.5)*26,y=s()<.18?[-6,-10,4]:[0,0,0],v=o.createLinearGradient(_,m,_+g*.3,m+M);v.addColorStop(0,`rgb(${i.map((b,x)=>Math.round(b+w+8+y[x])).join(",")})`),v.addColorStop(1,`rgb(${i.map((b,x)=>Math.round(b+w-10+y[x])).join(",")})`),o.fillStyle=v,Mc(o,_,m,g,M,7),o.fill();let S=l.createRadialGradient(_+g/2,m+M/2,4,_+g/2,m+M/2,g*.62);S.addColorStop(0,"#fff"),S.addColorStop(1,"#9a9a9a"),l.fillStyle=S,Mc(l,_,m,g,M,9),l.fill()}}return xu(o,512,512,2600,1.6,.16,e+1,["#8a7aa8","#ffffff","#6d5f8a"]),xu(l,512,512,2600,1.4,.25,e+2,["#000","#fff"]),{map:Bn(r,{repeat:!0}),normalMap:Sc(a,2.2)}}function Mc(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function bc(i,e=3){let r=Rt(e),[o,a]=_n(512),[l,c]=_n(512),h=new le(i);a.fillStyle="#"+h.clone().multiplyScalar(.55).getHexString(),a.fillRect(0,0,512,512),c.fillStyle="#000",c.fillRect(0,0,512,512);let d=512/8,f=512/10;for(let u=-1;u<=10;u++)for(let p=-1;p<=8;p++){let _=p*d+(u%2?d/2:0)+d/2,m=u*f,g=.85+r()*.3,M=a.createLinearGradient(0,m,0,m+f*1.6);M.addColorStop(0,"#"+h.clone().multiplyScalar(1.15*g).getHexString()),M.addColorStop(.7,"#"+h.clone().multiplyScalar(.95*g).getHexString()),M.addColorStop(1,"#"+h.clone().multiplyScalar(.62*g).getHexString());let w=v=>{v.beginPath(),v.moveTo(_-d/2,m),v.lineTo(_-d/2,m+f*.9),v.quadraticCurveTo(_-d/2,m+f*1.6,_,m+f*1.62),v.quadraticCurveTo(_+d/2,m+f*1.6,_+d/2,m+f*.9),v.lineTo(_+d/2,m),v.closePath()};a.fillStyle=M,w(a),a.fill(),a.strokeStyle="rgba(0,0,0,0.25)",a.lineWidth=2,w(a),a.stroke();let y=c.createLinearGradient(0,m,0,m+f*1.6);y.addColorStop(0,"#666"),y.addColorStop(1,"#fff"),c.fillStyle=y,w(c),c.fill()}return{map:Bn(o,{repeat:!0}),normalMap:Sc(l,1.6)}}function Xd(i=11){let t=Rt(i),[n,s]=_n(512),[r,o]=_n(512);s.fillStyle="#4a4560",s.fillRect(0,0,512,512),o.fillStyle="#000",o.fillRect(0,0,512,512);let a=9,l=512/a;for(let c=0;c<a;c++)for(let h=-1;h<=a;h++){let d=l*(.78+t()*.14),f=l*(.72+t()*.14),u=h*l+c%2*l/2+l/2+(t()-.5)*6,p=c*l+l/2+(t()-.5)*6,_=150+t()*50,m=s.createRadialGradient(u-d*.15,p-f*.2,2,u,p,d*.6);m.addColorStop(0,`rgb(${_+12},${_+6},${_+30})`),m.addColorStop(1,`rgb(${_-40},${_-44},${_-20})`),s.fillStyle=m,Mc(s,u-d/2,p-f/2,d,f,14),s.fill();let g=o.createRadialGradient(u,p,2,u,p,d*.6);g.addColorStop(0,"#fff"),g.addColorStop(1,"#555"),o.fillStyle=g,Mc(o,u-d/2,p-f/2,d,f,14),o.fill()}return xu(s,512,512,1600,1.4,.18,i+3,["#000","#fff"]),{map:Bn(n,{repeat:!0}),normalMap:Sc(r,2.5)}}function qd(i=5){let t=Rt(i),[n,s]=_n(512),[r,o]=_n(512);s.fillStyle="#3c7a3a",s.fillRect(0,0,512,512),o.fillStyle="#808080",o.fillRect(0,0,512,512);for(let a=0;a<260;a++){let l=t()*512,c=t()*512,h=20+t()*60,d=s.createRadialGradient(l,c,0,l,c,h),f=t()<.5?"70,140,62":"42,98,52";d.addColorStop(0,`rgba(${f},0.35)`),d.addColorStop(1,`rgba(${f},0)`),s.fillStyle=d;for(let u of[-512,0,512])for(let p of[-512,0,512])s.save(),s.translate(u,p),s.fillRect(l-h,c-h,h*2,h*2),s.restore()}s.lineCap="round";for(let a=0;a<9e3;a++){let l=t()*512,c=t()*512,h=3+t()*6,d=-Math.PI/2+(t()-.5)*.9,f=t();s.strokeStyle=f<.5?`rgba(120,190,100,${.25+t()*.3})`:`rgba(20,60,30,${.2+t()*.3})`,s.lineWidth=1+t(),s.beginPath(),s.moveTo(l,c),s.lineTo(l+Math.cos(d)*h,c+Math.sin(d)*h),s.stroke(),o.strokeStyle=f<.5?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)",o.lineWidth=1.5,o.beginPath(),o.moveTo(l,c),o.lineTo(l+Math.cos(d)*h,c+Math.sin(d)*h),o.stroke()}return{map:Bn(n,{repeat:!0}),normalMap:Sc(r,1.2)}}function Tc(){let[e,t]=_n(256);t.fillStyle="#a3103d",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,170,200,0.22)",t.lineWidth=3;for(let n=-256;n<=256*2;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n+256,256),t.stroke(),t.beginPath(),t.moveTo(n,256),t.lineTo(n+256,0),t.stroke();t.fillStyle="rgba(255,215,120,0.35)";for(let n=0;n<=256;n+=64)for(let s=0;s<=256;s+=64)t.beginPath(),t.arc(s,n,4,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(s+32,n+32,3,0,Math.PI*2),t.fill();return Bn(e,{repeat:!0})}function qn(i=2){let[t,n]=_n(128),s=n.createImageData(128,128),r=s.data;for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=Math.hypot(a-64+.5,o-64+.5)/64,c=Math.pow(Math.max(0,1-l),i),h=(o*128+a)*4;r[h]=r[h+1]=r[h+2]=255,r[h+3]=c*255}return n.putImageData(s,0,0),Bn(t,{srgb:!1})}function ys(){let[e,t]=_n(128);t.translate(128/2,128/2);let n=t.createRadialGradient(0,0,0,0,0,128/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(-128/2,-128/2,128,128),t.fillStyle="#fff";for(let s=0;s<2;s++)t.save(),t.rotate(s*Math.PI/2),t.beginPath(),t.moveTo(0,-128/2),t.quadraticCurveTo(3,-3,128/2,0),t.quadraticCurveTo(3,3,0,128/2),t.quadraticCurveTo(-3,3,-128/2,0),t.quadraticCurveTo(-3,-3,0,-128/2),t.fill(),t.restore();return Bn(e,{srgb:!1})}function wc(){let[t,n]=_n(64,128),s=()=>{n.beginPath(),n.moveTo(4,126),n.lineTo(4,64/2),n.arc(64/2,64/2,64/2-4,Math.PI,0),n.lineTo(60,126),n.closePath()},r=n.createLinearGradient(0,0,0,128);return r.addColorStop(0,"#fff3c4"),r.addColorStop(.6,"#ffc65a"),r.addColorStop(1,"#ff9a3c"),n.fillStyle=r,s(),n.fill(),n.strokeStyle="#5a3a1c",n.lineWidth=5,s(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(64/2,6),n.lineTo(64/2,126),n.moveTo(4,128*.55),n.lineTo(60,128*.55),n.stroke(),Bn(t)}function Yd(){let e=Rt(21),[t,n]=_n(256),s=n.createRadialGradient(256*.45,256*.42,0,256/2,256/2,256/2);s.addColorStop(0,"#fffdf2"),s.addColorStop(.85,"#f3ecd6"),s.addColorStop(1,"rgba(243,236,214,0)"),n.fillStyle=s,n.beginPath(),n.arc(256/2,256/2,256/2-2,0,Math.PI*2),n.fill(),n.save(),n.beginPath(),n.arc(256/2,256/2,256/2-4,0,Math.PI*2),n.clip();for(let r=0;r<14;r++){let o=256*(.2+e()*.6),a=256*(.2+e()*.6),l=256*(.04+e()*.12),c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(190,180,170,0.45)"),c.addColorStop(1,"rgba(190,180,170,0)"),n.fillStyle=c,n.fillRect(o-l,a-l,l*2,l*2)}return n.restore(),Bn(t)}function kr(i="#5b2fb0",e="#ff7eb3"){let[s,r]=_n(256,640),o=()=>{r.beginPath(),r.moveTo(0,0),r.lineTo(256,0),r.lineTo(256,640),r.lineTo(256/2,530),r.lineTo(0,640),r.closePath()},a=r.createLinearGradient(0,0,256,0),l=new le(i);a.addColorStop(0,"#"+l.clone().multiplyScalar(.7).getHexString()),a.addColorStop(.5,i),a.addColorStop(1,"#"+l.clone().multiplyScalar(.7).getHexString()),r.fillStyle=a,o(),r.fill(),r.save(),o(),r.clip(),r.strokeStyle="#f6c548",r.lineWidth=22,o(),r.stroke(),r.strokeStyle="#fff0b0",r.lineWidth=4,r.beginPath(),r.moveTo(24,24),r.lineTo(232,24),r.lineTo(232,600),r.lineTo(256/2,500),r.lineTo(24,600),r.closePath(),r.stroke(),r.restore(),r.save(),r.translate(256/2,200),r.fillStyle="#f6c548",r.strokeStyle="#a8740f",r.lineWidth=5,r.lineJoin="round",r.beginPath(),r.moveTo(-70,40),r.lineTo(-80,-40),r.lineTo(-40,-5),r.lineTo(0,-60),r.lineTo(40,-5),r.lineTo(80,-40),r.lineTo(70,40),r.closePath(),r.fill(),r.stroke(),r.fillStyle="#fff6d0";for(let[c,h]of[[-80,-40],[0,-60],[80,-40]])r.beginPath(),r.arc(c,h,9,0,Math.PI*2),r.fill();return r.fillStyle="#e53950",r.beginPath(),r.arc(0,12,11,0,Math.PI*2),r.fill(),r.fillStyle="#4fa8ff",r.beginPath(),r.arc(-40,18,8,0,Math.PI*2),r.arc(40,18,8,0,Math.PI*2),r.fill(),r.restore(),r.save(),r.translate(256/2,340),r.fillStyle=e,r.strokeStyle="#fff0b0",r.lineWidth=5,r.beginPath(),r.moveTo(0,50),r.bezierCurveTo(-90,-10,-40,-70,0,-25),r.bezierCurveTo(40,-70,90,-10,0,50),r.fill(),r.stroke(),r.restore(),Bn(s)}function Zd(){let[e,t]=_n(64),n=t.createRadialGradient(64*.5,64*.7,2,64*.5,64*.5,64*.55);return n.addColorStop(0,"#ffffff"),n.addColorStop(1,"#d8d8d8"),t.fillStyle=n,t.beginPath(),t.moveTo(64/2,60),t.bezierCurveTo(4,64*.6,8,6,64/2,10),t.bezierCurveTo(56,6,60,64*.6,64/2,60),t.fill(),Bn(e,{srgb:!1})}function Jd(i,e=512){return new Promise((t,n)=>{let s=new Image;s.onload=()=>{let[r,o]=_n(e);o.drawImage(s,0,0,e,e);let a=Bn(r);t(a)},s.onerror=n,s.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i)})}function $d(i=9){let t=Rt(i),[n,s]=_n(512);s.translate(512/2,512/2),s.globalCompositeOperation="lighter";for(let r=0;r<46;r++){let o=t()*Math.PI*2,a=.012+t()*.05,l=512*(.3+t()*.2),c=s.createLinearGradient(0,0,Math.cos(o)*l,Math.sin(o)*l);c.addColorStop(0,`rgba(255,255,255,${.25+t()*.35})`),c.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=c,s.beginPath(),s.moveTo(0,0),s.lineTo(Math.cos(o-a)*l,Math.sin(o-a)*l),s.lineTo(Math.cos(o+a)*l,Math.sin(o+a)*l),s.closePath(),s.fill()}return Bn(n,{srgb:!1})}function En(i,e,{closed:t=!1,smooth:n=!0,seg:s,radial:r=10}={}){let o=i.map(c=>c.isVector3?c:new P(c[0],c[1],c[2]||0)),a;if(n)a=new Fn(o,t,"centripetal");else{a=new Tr;for(let c=0;c<o.length-1;c++)a.add(new Fs(o[c],o[c+1]));t&&a.add(new Fs(o[o.length-1],o[0]))}return new qi(a,s||Math.max(8,o.length*8),e,r,t)}function Gr(i,e,t,n,s,r=24,o=0){let a=[];for(let l=0;l<=r;l++){let c=n+(s-n)*l/r;a.push(new P(i+Math.cos(c)*t,e+Math.sin(c)*t,o))}return a}function vu(i,e,t,n,s,r=1,o=0,a=40){let l=[];for(let c=0;c<=a;c++){let h=c/a,d=s+r*h*n*Math.PI*2,f=t*Math.pow(1-h*.82,1.15);l.push(new P(i+Math.cos(d)*f,e+Math.sin(d)*f,o))}return l}function Kd(i,e,t=.02,n=12){let s=new It(i.map(r=>new ae(r[0],r[1])));return new Cn(s,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:n})}function Ki(i,e,t=.02,n=16){return new Cn(i,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:n})}function Vr(i){let e=new It,t=i/2;return e.moveTo(0,-.95*t),e.bezierCurveTo(-1.05*t,-.15*t,-.95*t,.85*t,-.42*t,.85*t),e.bezierCurveTo(-.18*t,.85*t,-.02*t,.65*t,0,.5*t),e.bezierCurveTo(.02*t,.65*t,.18*t,.85*t,.42*t,.85*t),e.bezierCurveTo(.95*t,.85*t,1.05*t,-.15*t,0,-.95*t),e}function Ac(i,e=.45){let t=[];for(let n=0;n<10;n++){let s=Math.PI/2+n*Math.PI/5,r=n%2?i*e:i;t.push(new ae(Math.cos(s)*r,Math.sin(s)*r))}return new It(t)}function na(i,e){let t=new It,n=i/2;return t.moveTo(-n,0),t.lineTo(-n*1.08,e),t.lineTo(-n*.5,e*.52),t.lineTo(0,e*1.2),t.lineTo(n*.5,e*.52),t.lineTo(n*1.08,e),t.lineTo(n,0),t.closePath(),t}function Ms(i,e,t,{flat:n=.55,center:s=new P,seg:r=28,radial:o=8,tipRound:a=.18,rootRound:l=.12}={}){let c=new Fn(i,!1,"centripetal"),h=[],d=[],f=[],u=new P,p=new P,_=new P,m=new P,g=new P;for(let w=0;w<=r;w++){let y=w/r;c.getPointAt(y,u),c.getTangentAt(y,p),_.subVectors(u,s),m.copy(_).addScaledVector(p,-_.dot(p)).normalize(),g.crossVectors(p,m).normalize();let v=e+(t-e)*y;y>1-a&&(v*=Math.sqrt(Math.max(0,1-Math.pow((y-(1-a))/a,2)))),y<l&&(v*=.55+.45*Math.sin(y/l*Math.PI/2)),v=Math.max(v,5e-4);for(let S=0;S<=o;S++){let b=S/o*Math.PI*2;h.push(u.x+(Math.cos(b)*g.x*v+Math.sin(b)*m.x*v*n),u.y+(Math.cos(b)*g.y*v+Math.sin(b)*m.y*v*n),u.z+(Math.cos(b)*g.z*v+Math.sin(b)*m.z*v*n)),d.push(S/o,y)}}for(let w=0;w<r;w++)for(let y=0;y<o;y++){let v=w*(o+1)+y,S=v+o+1;f.push(v,S,v+1,S,S+1,v+1)}let M=new rt;return M.setAttribute("position",new Le(h,3)),M.setAttribute("uv",new Le(d,2)),M.setIndex(f),M.computeVertexNormals(),M}function Yt(i,e,t=e){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*e,n.getY(s)*t);return i}var pt={};function Qd(){return pt.gold=new Qe({color:"#ffcf6a",metalness:1,roughness:.24}),pt.goldDeep=new Qe({color:"#f0b445",metalness:1,roughness:.32}),pt.ruby=_u("#ff2d55"),pt.sapphire=_u("#3d8bff"),pt.emerald=_u("#2fe08a"),pt.pearl=new Xt({color:"#fff3ea",roughness:.35,sheen:1,sheenColor:"#ffd6f0",sheenRoughness:.4}),pt}function _u(i){return new Xt({color:i,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,emissive:i,emissiveIntensity:.15,ior:2.2,specularIntensity:1,envMapIntensity:1.4})}var jd=[{pr:1,msaa:2,shadow:0,bloom:!0},{pr:1.5,msaa:4,shadow:1024,bloom:!0},{pr:2,msaa:4,shadow:2048,bloom:!0}];function qv(){let i=(e,t)=>{let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");s.fillStyle="#1c3c78",s.strokeStyle="#1c3c78",s.lineWidth=7,s.lineCap="round";for(let o of[88,168])e||t?(s.beginPath(),s.arc(o,t?148:136,16,t?Math.PI*1.15:.15,t?Math.PI*1.85:Math.PI-.15,!1),s.stroke()):(s.beginPath(),s.ellipse(o,140,15,19,0,0,Math.PI*2),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(o+5,132,5,0,7),s.fill(),s.fillStyle="#1c3c78");s.strokeStyle="#c93d66",s.beginPath(),s.arc(128,172,t?24:18,.2,Math.PI-.2),s.stroke();let r=new Qn(n);return r.colorSpace=sn,r};return{open:i(!1,!1),blink:i(!0,!1),laugh:i(!1,!0)}}async function ep(i){if(!i)return qv();let e={};for(let t of Object.keys(i)){let n=await Jd(i[t],512);n.premultiplyAlpha=!0,e[t]=n}return e}async function tp(i={}){let e=document.createElement("canvas");e.className="k3d-canvas";let t=new dc({canvas:e,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});t.toneMapping=xi,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=ks,Wd(Math.min(8,t.capabilities.getMaxAnisotropy())),Qd(),pt.goldDouble=pt.gold.clone(),pt.goldDouble.side=gt;let n=await Promise.all([ep(i.faces&&i.faces.yoovy),ep(i.faces&&i.faces.googy)]),s=new _c(t,new Jt(16,16,{type:hn})),r=new vc(new zn,new Zt);s.addPass(r);let o=new Hr(new ae(16,16),.6,.5,1);s.addPass(o),s.addPass(new yc);let a=new Map,l=1,c=2,h=0,d=0,f=null,u={canvas:e,renderer:t,composer:s,bloom:o,faces:{yoovy:n[0],googy:n[1]},get px(){return l},get tier(){return c},get show(){return f},get width(){return h},get height(){return d},texture(p,_){return a.has(p)||a.set(p,_()),a.get(p)},isShared(p){for(let _ of a.values())if(_===p||_&&(_.map===p||_.normalMap===p))return!0;for(let _ of n)for(let m in _)if(_[m]===p)return!0;return!1},setTier(p){c=p;let _=jd[p];l=Math.min(window.devicePixelRatio||1,_.pr),s.renderTarget1.samples=_.msaa,s.renderTarget2.samples=0,s.renderTarget1.dispose(),s.renderTarget2.dispose(),t.setPixelRatio(l),s.setPixelRatio(l),o.enabled=_.bloom,f&&f.onTier&&f.onTier(_),h&&(t.setSize(h,d,!1),s.setSize(h,d))},resize(p,_){h=Math.max(2,p|0),d=Math.max(2,_|0),t.setSize(h,d,!1),s.setSize(h,d),f&&f.onResize&&f.onResize(h/d)},use(p){f=p,r.scene=p.scene,r.camera=p.camera,p.onTier&&p.onTier(jd[c]),h&&p.onResize&&p.onResize(h/d)},render(){s.render()},dispose(){for(let p of a.values())for(let _ of[p,p&&p.map,p&&p.normalMap])_&&_.isTexture&&_.dispose();for(let p of n)for(let _ in p)p[_].dispose();a.clear(),s.dispose&&s.dispose(),t.dispose(),t.forceContextLoss(),e.remove()}};return u.resize(i.width||640,i.height||360),u.setTier(i.tier??2),u}function Rc(i,e){let t=Object.values(pt);e.traverse(n=>{n.geometry&&n.geometry.dispose();let s=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of s)if(!t.includes(r)){for(let o in r)r[o]&&r[o].isTexture&&!i.isShared(r[o])&&r[o].dispose();r.dispose()}}),e.environment&&e.environment.dispose&&e.environment.dispose()}var Ss=new P(-.34,.36,-.87).normalize(),Yv=`
float hash3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise3(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}`;function np(){let i=new Ye;i.name="sky";let e={uZenith:{value:Ct("#070a2a")},uMid:{value:Ct("#1d1652")},uHorizon:{value:Ct("#5a2c78")},uGlow:{value:Ct("#ff9a5a")},uMoonDir:{value:Ss},uFlash:{value:0},uFlashColor:{value:new le(1,1,1)}},t=new Ae(new je(1e3,48,24),new ct({uniforms:e,side:qt,depthWrite:!1,vertexShader:`varying vec3 vDir;
            void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`uniform vec3 uZenith, uMid, uHorizon, uGlow, uMoonDir, uFlashColor; uniform float uFlash; varying vec3 vDir;
            ${Yv}
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
            }`}));t.renderOrder=-10,t.frustumCulled=!1,i.add(t);let n=Rt(42),s=1700,r=new Float32Array(s*3),o=new Float32Array(s*3);for(let u=0;u<s;u++){let p;do p=new P(n()*2-1,n()*2-1,n()*2-1);while(p.lengthSq()>1||p.lengthSq()<.01);p.normalize(),p.y<.03&&(p.y=Math.abs(p.y)+.03),p.normalize().multiplyScalar(940),r.set([p.x,p.y,p.z],u*3);let _=Math.pow(n(),3.2);o.set([.8+_*2.8,n()*6.28,.6+n()*2.2],u*3)}let a=new rt;a.setAttribute("position",new xt(r,3)),a.setAttribute("info",new xt(o,3));let l={uTime:{value:0},uPx:{value:1},uFade:{value:1}},c=new mi(a,new ct({uniforms:l,transparent:!0,depthWrite:!1,blending:bt,vertexShader:`attribute vec3 info; uniform float uTime, uPx; varying float vA;
            void main() {
                vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww;
                float tw = 0.6 + 0.4 * sin(uTime * info.z + info.y);
                vA = tw * clamp(info.x / 2.0, 0.35, 1.0);
                gl_PointSize = info.x * uPx * (0.85 + 0.25 * tw);
            }`,fragmentShader:`uniform float uFade; varying float vA;
            void main() { vec2 q = gl_PointCoord - 0.5; float r = length(q) * 2.0;
                float a = smoothstep(1.0, 0.0, r); a *= a;
                gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA * a * uFade * 1.6, 1.0); }`}));c.renderOrder=-9,c.frustumCulled=!1,i.add(c);let h=Ss.clone().multiplyScalar(900),d=new on(new Qt({map:Yd(),color:new le(1.6,1.55,1.4),fog:!1,depthWrite:!1}));d.position.copy(h),d.scale.setScalar(64),d.renderOrder=-8;let f=new on(new Qt({map:qn(2.6),color:Ct("#8fa2ff"),fog:!1,depthWrite:!1,blending:bt,opacity:.55}));return f.position.copy(h).multiplyScalar(.99),f.scale.setScalar(300),f.renderOrder=-8,i.add(f,d),{group:i,uniforms:e,update(u,p,_){i.position.copy(p.position),l.uTime.value=u,l.uPx.value=_}}}function ip(i){let e=new zn,t=new Ae(new je(60,32,16),new ct({side:qt,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; void main() { vec3 d = normalize(vDir);
            vec3 c = mix(vec3(0.16, 0.08, 0.2), vec3(0.025, 0.035, 0.11), smoothstep(-0.05, 0.6, d.y));
            c = mix(c, vec3(0.04, 0.03, 0.05), smoothstep(0.0, -0.3, d.y));
            gl_FragColor = vec4(c, 1.0); }`}));e.add(t);let n=(o,a,l,c,h,d)=>{let f=new Ae(new mt(o,a),new vt({color:l,side:gt}));f.position.set(c,h,d),f.lookAt(0,0,0),e.add(f)};n(40,10,new le(3.2,2,.8),0,5,-48),n(26,12,new le(2.4,1.5,.7),0,10,46),n(12,12,new le(1.3,1.45,2.4),-26,34,-26),n(16,22,new le(1.5,.55,1.1),-48,6,8),n(16,22,new le(.8,.6,1.8),48,6,-8),n(30,4,new le(3.5,3,2.2),0,40,0);let s=new _s(i),r=s.fromScene(e,.035);return s.dispose(),e.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),r}var Je={halfW:3.1,spring:4.6,top:9.5,depth:2.4,towerX:7},$t=[2.5,4.3];function sp(i){let e=new Ye;e.name="gate";let t=new It;t.moveTo(-40,0),t.lineTo(-Je.halfW,0),t.lineTo(-Je.halfW,Je.spring),t.absarc(0,Je.spring,Je.halfW,Math.PI,0,!0),t.lineTo(Je.halfW,0),t.lineTo(40,0),t.lineTo(40,Je.top),t.lineTo(-40,Je.top),t.closePath();let n=new Cn(t,{depth:Je.depth,bevelEnabled:!1,curveSegments:40});n.translate(0,0,-Je.depth/2),Yt(n,.25);let s=[n];s.push(Yt(Ve(new Gt(80,.32,Je.depth+.36),{y:Je.top-.1}),20,.1));for(let A=-39;A<=39;A+=2.2)Math.abs(Math.abs(A)-Je.towerX)<2.9||s.push(Yt(Ve(new Gt(1.15,1.2,Je.depth+.1),{x:A,y:Je.top+.6}),.3,.3));let r=Kd([[-.55,0],[.55,0],[.75,1.1],[-.75,1.1]],.3,.04);s.push(Yt(Ve(r,{y:Je.spring+Je.halfW-.35,z:Je.depth/2-.05}),.25));let o=[],a=[],l=[];for(let A of[-1,1]){let I=A*Je.towerX,L=.5,F=2.1,C=13.6;o.push(Yt(Ve(new ut(F,F+.18,C,48,1),{x:I,y:C/2,z:L}),3.4,3.4)),o.push(Yt(Ve(new ut(F+.38,F,.7,48,1),{x:I,y:C+.35,z:L}),3.6,.2));for(let U=0;U<14;U++){let k=U/14*Math.PI*2;o.push(Yt(Ve(new Gt(.62,.95,.5),{x:I+Math.cos(k)*(F+.2),y:C+1.15,z:L+Math.sin(k)*(F+.2),ry:-k+Math.PI/2}),.2,.25))}a.push(Yt(Ve(new At(F+.62,6.6,48,1,!0),{x:I,y:C+.75+3.3,z:L}),7,3.2)),l.push(Ve(new jt(F+.58,.1,10,64),{x:I,y:C+.8,z:L,rx:Math.PI/2})),l.push(Ve(new je(.24,20,14),{x:I,y:C+.75+6.6+.12,z:L})),l.push(Ve(new ut(.035,.035,1.5,8),{x:I,y:C+.75+6.6+.9,z:L}))}e.add(en(s,i.stone,{cast:!0,receive:!0})),e.add(en(o,i.stone,{cast:!0,receive:!0})),e.add(en(a,i.roofPurple,{cast:!0}));let c=new mt(.62,1.24);for(let A of[-1,1])for(let I of[6.4,10.4]){let L=new Ae(c,i.window);L.position.set(A*Je.towerX,I,.5+2.1+.04),e.add(L)}let h=(A,I)=>[new P(-A,0,I),...Gr(0,Je.spring,A,Math.PI,0,48,I),new P(A,0,I)];l.push(En(h(Je.halfW+.16,Je.depth/2+.02),.13,{smooth:!1,seg:200,radial:12})),l.push(En(h(Je.halfW+.62,Je.depth/2+.02),.06,{smooth:!1,seg:200,radial:8}));for(let A=0;A<=16;A++){let I=Math.PI-A/16*Math.PI,L=Je.halfW+.39;l.push(Ve(new je(.07,12,8),{x:Math.cos(I)*L,y:Je.spring+Math.sin(I)*L,z:Je.depth/2+.04}))}let d=Ki(na(.7,.42),.08,.02);l.push(Ve(d,{y:Je.spring+Je.halfW+.05,z:Je.depth/2+.26})),e.add(en(l,pt.gold,{cast:!0}));let f=new Ae(new je(.09,16,12),pt.ruby);f.position.set(0,Je.spring+Je.halfW+.2,Je.depth/2+.36),e.add(f);let u=Jv(i);e.add(u.left.pivot,u.right.pivot);let p=new It;p.moveTo(-Je.halfW,0),p.lineTo(-Je.halfW,Je.spring),p.absarc(0,Je.spring,Je.halfW,Math.PI,0,!0),p.lineTo(Je.halfW,0),p.closePath();let _=new vt({color:new le(1,.8,.5),transparent:!0,depthWrite:!1,fog:!1}),m=new Ae(new Xi(p,32),_);m.position.z=-.75,m.renderOrder=2,e.add(m);let g=new Qt({map:qn(1.8),color:Ct("#ffd08a"),blending:bt,depthWrite:!1,fog:!1,opacity:0}),M=new on(g);M.position.set(0,3.8,-.9),M.scale.set(16,13,1),e.add(M);let w=new vt({map:$d(),color:Ct("#ffe2a8"),blending:bt,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),y=new Ae(new mt(1,1),w);y.position.set(0,3.8,-.95),y.scale.setScalar(26),e.add(y);let v=[];for(let A of[-1,1]){let I=Zv(i);I.group.position.set(A*3.95,3.15,Je.depth/2+.38),e.add(I.group);let L=new Yi(Ct("#ffa64a"),9,15,1.5);L.position.set(A*3.95,3.25,Je.depth/2+.75),e.add(L),v.push({...I,light:L,phase:A*1.7})}let S=[],b=[kr("#5b2fb0","#ff7eb3"),kr("#c2185b","#ffd54f")];for(let A of[-1,1]){let I=new mt(.86,3.3,1,14);I.translate(0,-1.65,0);let L=new Qe({map:b[A<0?0:1],side:gt,alphaTest:.5,roughness:.75}),F=new Ae(I,L);F.position.set(A*4.42,8.95,Je.depth/2+.06),F.castShadow=!0,e.add(F);let C=new Ae(new ut(.035,.035,1.1,8),pt.gold);C.rotation.z=Math.PI/2,C.position.set(A*4.42,8.97,Je.depth/2+.08),e.add(C),S.push({mesh:F,base:I.attributes.position.array.slice(),phase:A})}let x=new mt(90,46,1,1);Yt(x,30,15);let E=new Ae(x,i.cobbles);return E.rotation.x=-Math.PI/2,E.position.set(0,.02,23-1.3),E.receiveShadow=!0,e.add(E),{group:e,doors:u,update(A){let I=Gd((A-$t[0])/($t[1]-$t[0])),L=A>$t[0]-.25&&A<$t[0]?Math.sin(A*70)*.004:0,F=I*1.78+L;u.left.pivot.rotation.y=F,u.right.pivot.rotation.y=-F;let C=.55+.12*Math.sin(A*3.1)+.06*Math.sin(A*7.3),U=Fe($t[0]-.05,$t[0]+.45,A),k=Fe($t[0]+.25,$t[0]+.75,A),O=Math.min(.75,C+U*.5)*(1-k);_.color.setRGB(1.8*O,1.3*O,.62*O),_.opacity=1-k,m.visible=k<1;let H=yi(A,$t[0]-.1,$t[0]+.5,$t[0]+.7,$t[0]+1.2);g.opacity=.16+.08*Math.sin(A*2.3)*(1-U)+H*.3,M.visible=A<$t[0]+1.6,w.opacity=H*.45,y.rotation.z=A*.12,y.visible=H>.001;for(let B of v){let G=.9+.06*Math.sin(A*2.6+B.phase)+.04*Math.sin(A*4.3+B.phase*2);B.light.intensity=9*G,B.flame.scale.set(1,.9+.2*G,1),B.glowMat.opacity=.55*G}for(let B of S){let G=B.mesh.geometry.attributes.position;for(let D=0;D<G.count;D++){let J=B.base[D*3+1],Y=B.base[D*3],ue=-J/3.3;G.setZ(D,ue*.11*Math.sin(A*2.2+J*2.1+B.phase)+ue*ue*.05*Math.sin(A*3.7+Y*3))}G.needsUpdate=!0,B.mesh.geometry.computeVertexNormals()}u.update(A)}}}function Zv(i){let e=new Ye,t=[];t.push(En([[0,-.05,-.38],[0,.18,-.36],[0,.4,-.18],[0,.42,0]],.035,{radial:8})),t.push(Ve(new At(.23,.2,6),{y:.36})),t.push(Ve(new je(.05,10,8),{y:.5})),t.push(Ve(new At(.18,.14,6),{y:-.27,rx:Math.PI})),t.push(Ve(new ut(.2,.2,.04,6),{y:.25})),t.push(Ve(new ut(.19,.19,.04,6),{y:-.2}));for(let a=0;a<6;a++){let l=a/6*Math.PI*2;t.push(Ve(new ut(.014,.014,.46,6),{x:Math.cos(l)*.19,y:.02,z:Math.sin(l)*.19}))}e.add(en(t,pt.gold,{cast:!0}));let n=new Ae(new ut(.175,.175,.44,6),i.lanternGlass);n.position.y=.02,e.add(n);let s=new Ae(new je(.06,12,10),i.flame);s.scale.set(1,1.6,1),s.position.y=-.02,e.add(s);let r=new Qt({map:qn(2),color:Ct("#ffb05a"),blending:bt,depthWrite:!1,opacity:.5}),o=new on(r);return o.scale.setScalar(2.2),o.position.y=.02,e.add(o),{group:e,flame:s,glowMat:r}}function Jv(i){let e=Je.halfW-.05,t=Je.halfW,n=Je.spring,s=Math.sqrt(e*e-.01),r=new It;r.moveTo(.05,.02),r.lineTo(Je.halfW-.012,.02),r.lineTo(Je.halfW-.012,n+s),r.absarc(t,n,e,Math.atan2(s,-.012),Math.PI,!1),r.lineTo(.05,.02);let o=new Cn(r,{depth:.2,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,curveSegments:40}),a=.235,l=[],c=e-.11,h=Je.halfW-.12,d=Math.sqrt(c*c-(t-h)*(t-h)),f=[new P(t-c,.13,a),new P(h,.13,a),new P(h,n+d,a),...Gr(t,n,c,Math.atan2(d,h-t),Math.PI,40,a),new P(t-c,.13,a)];l.push(En(f,.055,{smooth:!1,seg:160,radial:8}));let u=(b,x,E,A)=>[[b,x],[E,x],[E,A],[b,A],[b,x]].map(I=>new P(I[0],I[1],a));l.push(En(u(.42,.55,2.72,2.55),.04,{smooth:!1,seg:80,radial:8})),l.push(En(u(.3,2.82,2.84,2.95),.03,{smooth:!1,seg:60,radial:6}));let p=1.57,_=1.55;l.push(Ve(Ki(Vr(.62),.05,.02),{x:p,y:_,z:a-.01}));for(let b of[-1,1])l.push(En(vu(p+b*.72,_+.12,.42,1.25,b>0?Math.PI*.9:Math.PI*.1,b,a),.028,{seg:64,radial:6})),l.push(En(vu(p+b*.72,_-.42,.26,1.1,b>0?Math.PI*1.1:-Math.PI*.1,-b,a),.024,{seg:70,radial:6}));for(let b=.5;b<2.75;b+=.32)l.push(Ve(new je(.045,10,8),{x:b,y:.33,z:a})),l.push(Ve(new je(.04,10,8),{x:b,y:2.885,z:a+.02}));let m=1.62,g=4.6,M=(b,x)=>b>.32&&b<h-.12&&x>3.12&&Math.hypot(b-t,x-n)<c-.14;for(let b=0;b<13;b++){let x=-Math.PI*.32+b/12*Math.PI*1.64,E=.95;for(;M(m+Math.cos(x)*(E+.04),g+Math.sin(x)*(E+.04))&&E<3;)E+=.04;E<1.05||(l.push(En([[m+Math.cos(x)*.95,g+Math.sin(x)*.95,a],[m+Math.cos(x)*E,g+Math.sin(x)*E,a]],.026,{smooth:!1,seg:4,radial:6})),l.push(Ve(new je(.05,10,8),{x:m+Math.cos(x)*E,y:g+Math.sin(x)*E,z:a})))}l.push(Ve(new jt(.2,.032,10,32),{x:2.68,y:2.32,z:a+.05})),l.push(Ve(new ut(.09,.09,.04,16),{x:2.68,y:2.55,z:a+.02,rx:Math.PI/2}));let w=en(l,pt.gold).geometry,y=b=>{let x=new Ye;x.position.set(b*Je.halfW,0,-.42);let E=new Ye;E.scale.x=b<0?1:-1;let A=new Ae(o,i.enamel);A.castShadow=A.receiveShadow=!0;let I=new Ae(w,pt.gold);I.castShadow=!0,E.add(A,I),x.add(E);let L=new Ye;L.position.set(b<0?m:-m,g,a);let F=[];F.push(new jt(.8,.075,14,72)),F.push(new jt(.66,.03,8,64));let C=b<0?[[[-.3,.36,.04],[0,.02,.04]],[[.3,.36,.04],[0,.02,.04]],[[0,.02,.04],[0,-.4,.04]]]:[[...Gr(0,0,.36,.75,Math.PI*2-.12,40,.04),new P(.36,.04,.04),new P(.1,.04,.04)]];for(let H of C){F.push(En(H,.062,{smooth:!1,seg:H.length*6,radial:10}));let B=H[0],G=H[H.length-1];for(let D of[B,G])F.push(Ve(new je(.062,12,10),{x:D.x??D[0],y:D.y??D[1],z:.04}))}F.push(Ve(Ki(na(.66,.4),.07,.02),{y:.86,z:-.03})),L.add(en(F,pt.gold,{cast:!0}));let U=new Ae(new ut(.72,.72,.05,64),i.enamelBright);U.rotation.x=Math.PI/2,U.position.z=-.005,L.add(U);let k=[[0,1.08,pt.ruby,.075],[-.22,1,pt.sapphire,.05],[.22,1,pt.sapphire,.05]];for(let[H,B,G,D]of k){let J=new Ae(new je(D,16,12),G);J.position.set(H,B,.07),L.add(J)}for(let[H,B]of[[-.356,1.26],[0,1.34],[.356,1.26]]){let G=new Ae(new je(.045,12,10),pt.pearl);G.position.set(H,B,.035),L.add(G)}x.add(L);let O=new on(new Qt({map:ys(),color:Ct("#fff4d0"),blending:bt,depthWrite:!1,opacity:0}));return O.position.set(b<0?m-.3:-m+.3,g+.5,a+.2),x.add(O),{pivot:x,glint:O}},v=y(-1),S=y(1);return{left:v,right:S,update(b){for(let[x,E]of[[v,1.35],[S,1.75]]){let A=yi(b,E,E+.25,E+.3,E+.65);x.glint.material.opacity=A,x.glint.scale.setScalar(.2+A*1.3),x.glint.material.rotation=b*2,x.glint.position.x=(x===v?m:-m)+(b-E-.3)*1.4}}}}var Qi={front:-63,terrace:1.6};function Cc(i){let e=new Ye;e.name="castle";let t=Qi.terrace,n=[],s=[],r=[],o=[],a=[],l=[],c=[],h=(D,J,Y,ue,me,Pe,K=0)=>n.push(Yt(Ve(new Gt(D,J,Y),{x:ue,y:me,z:Pe,ry:K}),Math.max(D,Y)/4,J/4)),d=(D,J,Y,ue,me=1.5,Pe=.75,K=.7)=>{for(let ne=D;ne<=J+1e-6;ne+=me)n.push(Yt(Ve(new Gt(Pe,Pe*1.1,K),{x:ne,y:Y+Pe*.55,z:ue}),.2,.2))},f=(D,J,Y,ue,me=.9,Pe=1.8,K=1)=>{let ne=Ve(new mt(me,Pe),{x:D,y:J,z:Y,ry:ue});a.push(ne),l.push(K)};h(46,t,27,0,t/2,-76.5);let u=6;for(let D=0;D<u;D++){let J=t*(u-D)/u;h(10,J,.52,0,J/2,Qi.front+.26+D*.52),c.push(Ve(new Gt(3,.03,.5),{y:J+.012,z:Qi.front+.26+D*.52}))}c.push(Ve(new Gt(3,.03,5.2),{y:t+.012,z:Qi.front-2.6}));for(let D of[-1,1]){let J=D*5.3,Y=D*22.5,ue=Qi.front+.15;o.push(En([[J,t+.8,ue],[Y,t+.8,ue]],.06,{smooth:!1,seg:4,radial:8})),o.push(En([[J,t+.2,ue],[Y,t+.2,ue]],.035,{smooth:!1,seg:4,radial:6}));for(let me=J;Math.abs(me)<=22.6;me+=D*.55)o.push(Ve(new ut(.035,.05,.6,8),{x:me,y:t+.5,z:ue}));for(let me of[J,D*11,Y])o.push(Ve(new je(.13,14,10),{x:me,y:t+.95,z:ue}))}let p={w:18,h:10,d:10,z:-73},_=p.z+p.d/2;h(p.w,p.h,p.d,0,t+p.h/2,p.z),h(p.w+.5,.4,p.d+.5,0,t+p.h,p.z),d(-p.w/2+.4,p.w/2-.4,t+p.h+.2,_+.05);for(let D of[-1,1])for(let J=p.z-p.d/2+.6;J<_;J+=1.5)n.push(Yt(Ve(new Gt(.7,.82,.75),{x:D*(p.w/2-.1),y:t+p.h+.61,z:J}),.2,.2));let m=new It;m.moveTo(-1.6,0),m.lineTo(-1.6,2.9),m.absarc(0,2.9,1.6,Math.PI,0,!0),m.lineTo(1.6,0),m.closePath();let g=new Ae(new Xi(m,24),new vt({color:new le(1.35,.92,.46)}));g.position.set(0,t,_+.02),e.add(g);let M=[new P(-1.72,0,0),...Gr(0,2.9,1.72,Math.PI,0,40),new P(1.72,0,0)].map(D=>D.add(new P(0,t,_+.08)));o.push(En(M,.13,{smooth:!1,seg:120,radial:10})),o.push(Ve(Ki(na(1.2,.7),.12,.03),{y:t+4.75,z:_+.02})),h(5.6,.3,1.6,0,t+5.6,_+.75),o.push(En([[-2.7,t+6.5,_+1.5],[2.7,t+6.5,_+1.5]],.05,{smooth:!1,seg:4}));for(let D=-2.65;D<=2.66;D+=.33)o.push(Ve(new ut(.03,.04,.75,8),{x:D,y:t+6.12,z:_+1.5}));for(let D of[t+3,t+7.6])for(let J of[-7.2,-5,5,7.2])f(J,D,_+.03,0);for(let D of[-1.8,0,1.8])f(D,t+7.9,_+.03,0,.8,1.5,1.15);let w=[kr("#5b2fb0","#ff7eb3"),kr("#c2185b","#ffd54f")],y=[];for(let D of[-1,1]){let J=new mt(1.5,5.4,1,14);J.translate(0,-2.7,0);let Y=new Ae(J,new Qe({map:w[D<0?0:1],side:gt,alphaTest:.5,roughness:.75}));Y.position.set(D*3.4,t+9.6,_+.08),e.add(Y),o.push(En([[D*3.4-.95,t+9.62,_+.12],[D*3.4+.95,t+9.62,_+.12]],.05,{smooth:!1,seg:4})),y.push({mesh:Y,base:J.attributes.position.array.slice(),phase:D*1.3})}let v={w:12,h:5,d:8,z:-74.5};h(v.w,v.h,v.d,0,t+p.h+v.h/2,v.z),d(-v.w/2+.4,v.w/2-.4,t+p.h+v.h,v.z+v.d/2+.05);for(let D of[-3.6,-1.2,1.2,3.6])f(D,t+p.h+2.4,v.z+v.d/2+.03,0,.8,1.6);let S=[],b=(D,J,Y,ue,me,Pe,K,ne)=>{let pe=ue;n.push(Yt(Ve(new ut(Y,Y*1.05,pe,40,1),{x:D,y:pe/2,z:J}),2*Math.PI*Y/4,pe/4)),n.push(Yt(Ve(new ut(Y+.35,Y,.6,40,1),{x:D,y:pe+.3,z:J}),2*Math.PI*Y/4,.15));let De=Math.max(8,Math.round(Y*6));for(let ze=0;ze<De;ze++){let et=ze/De*Math.PI*2;n.push(Yt(Ve(new Gt(.55,.8,.45),{x:D+Math.sin(et)*(Y+.18),y:pe+.95,z:J+Math.cos(et)*(Y+.18),ry:et}),.15,.2))}Pe.push(Yt(Ve(new At(Y+.55,me,40,1,!0),{x:D,y:pe+.65+me/2,z:J}),Math.round(Y*2.4),me/2.2)),o.push(Ve(new jt(Y+.52,.08,8,56),{x:D,y:pe+.68,z:J,rx:Math.PI/2}));let ve=pe+.65+me;o.push(Ve(new je(.2,16,12),{x:D,y:ve+.1,z:J})),o.push(Ve(new At(.07,.5,10),{x:D,y:ve+.5,z:J})),o.push(Ve(new ut(.03,.03,1.8,6),{x:D,y:ve+1,z:J})),S.push({x:D,y:ve+1.75,z:J,color:K,len:1.1+Y*.25});for(let[ze,et]of ne)for(let V of et)f(D+Math.sin(V)*(Y+.03),ze,J+Math.cos(V)*(Y+.03),V,.62,1.25)},x=Math.PI/3,E=.6;b(0,-74.5,2.7,t+p.h+v.h+10,11,r,"#FFD54F",[[t+p.h+v.h+3,[-E,0,E]],[t+p.h+v.h+7,[-E,0,E]]]);for(let D of[-1,1]){b(D*9.6,-68.2,2.1,t+14.5,7.5,s,"#ff7eb3",[[t+4,[0,D*x]],[t+8.5,[0]],[t+12,[0,D*x]]]),b(D*15.6,-72.5,2.5,t+11.5,8,r,"#FFD54F",[[t+4.5,[D*.3,D*1]],[t+8.5,[D*.3]]]),b(D*6.2,-80.5,2.2,t+20,9,s,"#ff7eb3",[[t+14,[D*.5]],[t+17.5,[0,D*.8]]]),b(D*21.5,-71.5,1.5,t+8,4.5,s,"#9fd4ff",[[t+5,[D*.4]]]),h(5,8.5,4,D*12.6,t+4.25,-70.3),d(D>0?10.6:-14.6,D>0?14.6:-10.6,t+8.5,-68.25);for(let Y of[D*11.6,D*13.6])f(Y,t+4.5,-68.27,0,.7,1.4);h(5,6,3,D*18.6,t+3,-71.8),d(D>0?16.8:-20.4,D>0?20.4:-16.8,t+6,-70.25);let J=(Y,ue,me,Pe,K,ne,pe)=>{n.push(Yt(Ve(new ut(Pe,Pe*.6,K,24,1),{x:Y,y:ue+K/2,z:me}),1.2,K/4)),pe.push(Yt(Ve(new At(Pe+.25,ne,24,1,!0),{x:Y,y:ue+K+ne/2,z:me}),3,ne/2.2)),o.push(Ve(new jt(Pe+.22,.05,6,32),{x:Y,y:ue+K+.02,z:me,rx:Math.PI/2})),o.push(Ve(new je(.11,12,8),{x:Y,y:ue+K+ne+.06,z:me}))};J(D*8.4,t+p.h-1.2,_-.3,.8,3.4,2.6,r),J(D*5.6,t+p.h+v.h-.9,v.z+v.d/2-.2,.62,2.6,2,s)}e.add(en(n,i.castleStone,{cast:!0,receive:!0})),e.add(en(s,i.roofPink,{cast:!0})),e.add(en(r,i.roofPurple,{cast:!0})),e.add(en(o,pt.gold,{cast:!0})),e.add(en(c,i.carpet,{receive:!0}));let A=en(a,i.window).geometry,I=new Float32Array(A.attributes.position.count*3),L=0;l.forEach((D,J)=>{let Y=D*(.75+.5*(J*.6180339%1));for(let ue=0;ue<6;ue++,L++)I.set([Y,Y*.92,Y*.85],L*3)}),A.setAttribute("color",new xt(I,3));let F=new Ae(A,i.windowLit);e.add(F);let C=[];for(let D of S){let J=new mt(D.len,D.len*.55,10,2);J.translate(D.len/2,0,0),C.push(J)}let U=en(C,new Qe({vertexColors:!0,side:gt,roughness:.7}),{cast:!0}),k=U.geometry.attributes.position,O=120,H=new Float32Array(k.count*6),B=new Float32Array(k.count*3);S.forEach((D,J)=>{let Y=new le(D.color);for(let ue=J*O;ue<(J+1)*O;ue++)H.set([k.getX(ue),k.getY(ue),D.x,D.y,D.z,D.len],ue*6),B.set([Y.r,Y.g,Y.b],ue*3)}),U.geometry.setAttribute("color",new xt(B,3)),e.add(U);let G=new on(new Qt({map:qn(2),color:Ct("#ffb85c"),blending:bt,depthWrite:!1,opacity:.28}));return G.position.set(0,t+2.4,_+1.2),G.scale.set(8,6,1),e.add(G),{group:e,update(D){for(let J=0;J<k.count;J++){let Y=H[J*6],ue=H[J*6+1],me=H[J*6+2],Pe=H[J*6+3],K=H[J*6+4],ne=H[J*6+5],pe=Y/ne,De=Math.sin(Y*4.2-D*7+me)*.16*pe;k.setXYZ(J,me+Y*Math.cos(De*.6),Pe+ue-pe*pe*.08,K+De)}k.needsUpdate=!0,U.geometry.computeVertexNormals();for(let J of y){let Y=J.mesh.geometry.attributes.position;for(let ue=0;ue<Y.count;ue++){let me=J.base[ue*3+1],Pe=J.base[ue*3],K=-me/5.4;Y.setZ(ue,K*.18*Math.sin(D*1.8+me*1.4+J.phase)+K*K*.08*Math.sin(D*3.1+Pe*2.5))}Y.needsUpdate=!0,J.mesh.geometry.computeVertexNormals()}}}}var ia=new P;function ni(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ia.copy(e),ia[n]=0,ia.normalize();let c=.5*o/(o+a),h=1-ia.angleTo(i)/l;return Math.sign(ia[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Wr=class i extends Gt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,_=new P,m=.5/o;for(let g=0,M=0;g<d.length;g+=3,M+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),u[M+0]=ni(_,c,"z","y",r,n),u[M+1]=1-ni(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),u[M+0]=1-ni(_,c,"z","y",r,n),u[M+1]=1-ni(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),u[M+0]=1-ni(_,c,"x","z",r,e),u[M+1]=ni(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),u[M+0]=1-ni(_,c,"x","z",r,e),u[M+1]=1-ni(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),u[M+0]=1-ni(_,c,"x","y",r,e),u[M+1]=1-ni(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),u[M+0]=ni(_,c,"x","y",r,e),u[M+1]=1-ni(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Pc=Array.from({length:10},(i,e)=>-5-6*e),$v=2.3;function rp(i,e){let t=Math.max(0,Math.abs(i)-24)+Math.max(0,-96-e)*.9+Math.max(0,e-34)*.6,n=7+5*Math.sin(i*.031+e*.017)*Math.cos(e*.043-i*.012)+3*Math.sin(i*.09+1.3)*Math.sin(e*.07);return(1-Math.exp(-t/26))*n}function op(i){let e=new Ye;e.name="grounds";let t=Rt(77),n=new mt(520,520,110,110);n.rotateX(-Math.PI/2);let s=n.attributes.position;for(let q=0;q<s.count;q++)s.setY(q,rp(s.getX(q),s.getZ(q)));n.computeVertexNormals(),Yt(n,520/7);let r=new Ae(n,i.grass);r.receiveShadow=!0,e.add(r);let o=-1.2-Qi.front,a=(-1.2+Qi.front)/2,l=new Gt(3,.04,o);Yt(l,1,o/3);let c=new Ae(l,i.carpet);c.position.set(0,.03,a),c.receiveShadow=!0,e.add(c);let h=[];for(let q of[-1,1])h.push(Ve(new Gt(.09,.05,o),{x:q*1.52,y:.033,z:a}));e.add(en(h,new Qe({color:"#e3ad45",metalness:.35,roughness:.55}),{receive:!0}));let d=Pc.length*2,f=new it,u=new zt,p=new P,_=new P(1,1,1),m=new Ot(new ut(.05,.07,2.3,10),i.iron,d),g=new Ot(new ut(.15,.2,.26,12),i.iron,d),M=new Ot(new ut(.2,.08,.16,16,1,!0),pt.goldDouble,d),w=new Ot(new At(.12,.22,12),pt.gold,d),y=new vt({color:new le(1.75,1.02,.45)}),v=new Ot(new je(.17,18,12),y,d);m.castShadow=g.castShadow=M.castShadow=!0;let S=[];Pc.forEach((q,se)=>[-1,1].forEach((fe,xe)=>{let Te=se*2+xe,Be=fe*$v;S.push(new P(Be,2.5,q)),m.setMatrixAt(Te,f.compose(p.set(Be,1.15,q),u,_)),g.setMatrixAt(Te,f.compose(p.set(Be,.13,q),u,_)),M.setMatrixAt(Te,f.compose(p.set(Be,2.36,q),u,_)),w.setMatrixAt(Te,f.compose(p.set(Be,2.78,q),u,_)),v.setMatrixAt(Te,f.compose(p.set(Be,2.52,q),u,_)),v.setColorAt(Te,new le(1,1,1))})),v.name="orbs",e.add(m,g,M,w,v);let b=new rt;b.setAttribute("position",new Le(S.flatMap(q=>[q.x,2.52,q.z]),3)),b.setAttribute("bright",new Le(new Float32Array(d),1));let x={uMap:{value:qn(2.4)},uScale:{value:170},uColor:{value:Ct("#ffbe6a")}},E=new mi(b,new ct({uniforms:x,transparent:!0,depthWrite:!1,blending:bt,vertexShader:`attribute float bright; uniform float uScale; varying float vB;
            void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
                vB = bright * smoothstep(1.0, 5.0, -mv.z); gl_PointSize = min(uScale * 1.7 / -mv.z, 140.0); }`,fragmentShader:`uniform sampler2D uMap; uniform vec3 uColor; varying float vB;
            void main() { float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(uColor * a * vB * 0.45, 1.0); }`}));E.frustumCulled=!1,E.name="halos",e.add(E);let A=[];for(let q of S)A.push(Ve(new mt(4.2,4.2),{x:q.x,y:.06,z:q.z,rx:-Math.PI/2}));let I=en(A,i.pool).geometry,L=new Float32Array(I.attributes.position.count*3);I.setAttribute("color",new xt(L,3));let F=new Ae(I,i.pool);F.renderOrder=1,F.name="pools",e.add(F);let C=[];for(let q=0;q<Pc.length-1;q++)for(let se of[-1,1])C.push([se*3.2,Pc[q]-3]);let U=new Ot(new ut(.34,.26,.5,16),i.pot,C.length),k=new Ot(new jt(.34,.04,8,24),pt.gold,C.length),O=new Ot(new ut(.05,.06,.9,8),i.trunk,C.length),H=new Ot(new Gn(.5,3),i.leaf,C.length*2);U.castShadow=O.castShadow=H.castShadow=!0,C.forEach(([q,se],fe)=>{U.setMatrixAt(fe,f.compose(p.set(q,.25,se),u,_)),k.setMatrixAt(fe,f.compose(p.set(q,.5,se),u.setFromEuler(new Wt(Math.PI/2,0,0)),_)),u.identity(),O.setMatrixAt(fe,f.compose(p.set(q,.9,se),u,_)),H.setMatrixAt(fe*2,f.compose(p.set(q,1.55,se),u,new P(1,1,1))),H.setMatrixAt(fe*2+1,f.compose(p.set(q,2.25,se),u,new P(.6,.6,.6)))}),e.add(U,k,O,H);let B=[];for(let q=-3;q>Qi.front+3;q-=6.5)for(let se of[-1,1])B.push([se*4.7,q-2.6]);let G=new Ot(new Wr(.95,.95,5.2,3,.3),i.hedge,B.length);G.castShadow=G.receiveShadow=!0,B.forEach(([q,se],fe)=>G.setMatrixAt(fe,f.compose(p.set(q,.47,se),u,_))),e.add(G);let D=[],J=["#ff6fa5","#ffffff","#ffd54f","#c9a4ff","#ff9ec7","#7fd4ff"].map(q=>new le(q));for(let[q,se]of B)for(let fe=0;fe<16;fe++)D.push([q-Math.sign(q)*(.68+t()*.3),se+(t()-.5)*5,J[Math.floor(t()*J.length)]]);let Y=new Ot(new Gn(.075,0),i.flower,D.length);D.forEach(([q,se,fe],xe)=>{Y.setMatrixAt(xe,f.compose(p.set(q,.12+t()*.1,se),u,new P(1,.7,1))),Y.setColorAt(xe,fe)}),e.add(Y);let ue=[],me=(q,se,fe,xe,Te)=>{for(let Be=0;Be<q;Be++)ue.push([(t()<.5?-1:1)*(se+t()*(fe-se)),xe+t()*(Te-xe),t()])};me(46,9,60,-58,-6),me(26,26,70,-110,-60),me(22,12,55,6,40);let Pe=ue.filter(q=>q[2]<.55),K=ue.filter(q=>q[2]>=.55),ne=new ut(.18,.28,2.4,8),pe=en([Ve(new Gn(1.6,2),{y:3.4}),Ve(new Gn(1.2,2),{x:.9,y:2.9,z:.3}),Ve(new Gn(1.15,2),{x:-.8,y:3,z:-.2})],i.tree).geometry,De=en([Ve(new At(1.7,2.6,12),{y:2.2}),Ve(new At(1.35,2.3,12),{y:3.6}),Ve(new At(.95,2,12),{y:4.9})],i.pine).geometry,ve=new Ot(ne,i.trunk,ue.length),ze=new Ot(pe,i.tree,Pe.length),et=new Ot(De,i.pine,K.length);ve.castShadow=ze.castShadow=et.castShadow=!0;let V=0,Q=0;ue.forEach(([q,se,fe],xe)=>{let Te=.8+fe*7.31%1*.7,Be=rp(q,se);ve.setMatrixAt(xe,f.compose(p.set(q,Be+1.1*Te,se),u,new P(Te,Te,Te)));let z=new zt().setFromEuler(new Wt(0,fe*20,0));fe<.55?ze.setMatrixAt(V++,f.compose(p.set(q,Be,se),z,new P(Te,Te,Te))):et.setMatrixAt(Q++,f.compose(p.set(q,Be,se),z,new P(Te,Te*1.15,Te)))}),e.add(ve,ze,et);let ie=(q,se,fe,xe,Te)=>{let z=[],ft=[],st=Rt(xe),N=[st()*6,st()*6,st()*6];for(let Z=0;Z<=220;Z++){let $=Z/220*Math.PI*2,re=se+(fe-se)*(.5+.25*Math.sin($*3+N[0])+.15*Math.sin($*7+N[1])+.1*Math.sin($*17+N[2])),ge=Math.sin($)*q,_e=Math.cos($)*q-60;z.push(ge,-5,_e,ge,re,_e)}for(let Z=0;Z<220;Z++){let $=Z*2;ft.push($,$+1,$+2,$+1,$+3,$+2)}let T=new rt;return T.setAttribute("position",new Le(z,3)),T.setIndex(ft),T.computeVertexNormals(),new Ae(T,new Io({color:Te,side:gt}))};return e.add(ie(230,18,52,3,"#2a2350"),ie(330,40,90,8,"#231c45")),{group:e,update(q){let se=b.attributes.bright,fe=new le;for(let xe=0;xe<d;xe++){let Te=xe>>1,z=.12+.88*Fe(2.85+Te*.16,3.25+Te*.16,q)*(.94+.06*Math.sin(q*9+xe*1.7));se.setX(xe,z),v.setColorAt(xe,fe.setScalar(.25+.75*z));for(let ft=0;ft<6;ft++)L.set([z,z,z],(xe*6+ft)*3)}se.needsUpdate=!0,v.instanceColor.needsUpdate=!0,I.attributes.color.needsUpdate=!0}}}var sa={googy:{hair:"#F2B53A",hairLight:"#FFE08A",dress:"#FF7EB3",dressLight:"#FFA6CB",dressDark:"#E85C98",shoes:"#E0407F",cape:"#C2185B",capeSheen:"#ff8fc0",lining:"#ff6fae"},yoovy:{hair:"#EDC66B",hairLight:"#FFF0C0",shirt:"#8E6CEF",shirtDark:"#7353D6",skirt:"#4A7BD0",skirtDark:"#3A64B0",shoes:"#8E6CEF",cape:"#5E35B1",capeSheen:"#b79bff",lining:"#9b7bff"}},ap="#FFDBC4",Kv=new P(0,-1,0),Qv={googy:{R:.25,headY:.735,headScale:[1,.97,.96],shoulder:[.122,.47],arm:.185,armR:.03,hand:.041,hip:[.058,.24],leg:.16,legR:.037,cape:{topY:.495,botY:.06,topR:.118,botR:.3,span:[1.72,1.5]},crown:{r:.135,h:.115,tilt:-.14,y:.225}},yoovy:{R:.24,headY:.905,headScale:[.96,1.02,.95],shoulder:[.126,.632],arm:.215,armR:.03,hand:.039,hip:[.06,.345],leg:.25,legR:.037,cape:{topY:.655,botY:.065,topR:.122,botR:.31,span:[1.72,1.5]},crown:{r:.13,h:.11,tilt:.1,y:.23}}};function vn(i,e="#ffffff",t=.72){return new Xt({color:i,roughness:t,sheen:.5,sheenColor:e,sheenRoughness:.5})}function yu(i,e=48){let t=new Os(i.slice().reverse().map(([n,s])=>new ae(n,s)),e);return t.rotateY(Math.PI),t}var Nt=(i,e,t=!0)=>{let n=new Ae(i,e);return n.castShadow=t,n},ii=(i,e,t,n,s,r=1,o=1,a=1,l=20)=>{let c=Nt(new je(i,l,Math.max(8,l*.7|0)),e);return c.position.set(t,n,s),c.scale.set(r,o,a),c},Li=(i,e,t=1)=>new P(Math.sin(i)*Math.cos(e)*t,Math.sin(e)*t,Math.cos(i)*Math.cos(e)*t);function lp(i,e,t){let n=new je(1,96,64);n.rotateY(-Math.PI/2);let s=n.attributes.position,r=new P;for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o).normalize();let a=Fe(-.1,.42,r.z),l=Sn(t,e(r.x),a),c=Fe(l-.03,l+.03,r.y),h=Sn(.9,i,c);s.setXYZ(o,r.x*h,r.y*h,r.z*h)}return n.computeVertexNormals(),n}var cp=i=>e=>{if(e<=i[0][0])return i[0][1];for(let t=0;t<i.length-1;t++){let[n,s]=i[t],[r,o]=i[t+1];if(e<=r){let a=(e-n)/(r-n),l=a*a*(3-2*a);return s+(o-s)*l}}return i[i.length-1][1]},ra=(i,e,t)=>{let n=Math.sqrt(Math.max(.02,1-i*i-e*e));return new P(i,e,n).normalize().multiplyScalar(t)};function jv(){let i=[],e=[[-1.05,-.12],[-.86,.2],[-.55,.42],[-.2,.46],[.15,.44],[.45,.55],[.64,.68],[.84,.36],[1.05,-.12]];i.push(lp(1.07,cp(e.map(([s,r])=>[s,r+.05])),-.5));let t=Li(.62,1.12,1);[[-.92,.16],[-.72,.33],[-.48,.43],[-.24,.47],[0,.46],[.22,.46],[.42,.53]].forEach(([s,r],o)=>{let a=ra(s,r,1.075),l=t.clone().lerp(a,.55).normalize().multiplyScalar(1.12),c=t.clone().add(new P(-.04*o,.02,0)).normalize().multiplyScalar(.98);i.push(Ms([c,l,a,ra(s*1.02,r-.06,1.06)],.15,.1,{flat:.42,seg:22,tipRound:.35}))});for(let[s,r]of[[.84,.36],[.98,.1]]){let o=ra(s,r,1.07),a=t.clone().lerp(o,.5).normalize().multiplyScalar(1.1);i.push(Ms([t.clone().multiplyScalar(.98),a,o,ra(s+.02,r-.08,1.06)],.13,.1,{flat:.42,seg:18,tipRound:.35}))}for(let s=0;s<=14;s++){let r=Math.PI*(.5+s/14),o=Math.sin(r),a=Math.cos(r),l=[Li(r,.8,.95),Li(r,.28,1.075),Li(r,-.3,1.075),new P(o*1.04,-.95,a*.98),new P(o*1,-1.42,a*.92),new P(o*.97,-1.78,a*.88)];i.push(Ms(l,.24,.18,{flat:.5,seg:30,tipRound:.22}))}for(let s of[-1,1])for(let[r,o]of[[1.2,.2],[1.38,.17]]){let a=s*r,l=Math.sin(a),c=Math.cos(a),h=[Li(a,.6,.97),Li(a,.08,1.08),new P(l*1.06,-.5,c*1),new P(l*1,-1.05,.46),new P(l*.96,-1.6,.44)];i.push(Ms(h,o,o*.8,{flat:.5,seg:28,tipRound:.4}))}return Xn(i,!1)}function ey(){let i=[],e=[[-1.05,-.05],[-.8,.5],[-.42,.38],[.12,.45],[.62,.7],[.86,.42],[1.05,-.05]];i.push(lp(1.09,cp(e.map(([r,o])=>[r,o+.06])),-.42));let t=Li(.68,1.05,1),n=[[[.5,.86,1.12],[.3,.62,1.14],[.14,.43,1.09],[.04,.42,1.07]],[[.3,.92,1.12],[-.05,.72,1.15],[-.36,.38,1.1],[-.48,.38,1.07]],[[.1,.96,1.12],[-.42,.82,1.15],[-.78,.52,1.12],[-.92,.22,1.09]],[[.7,.8,1.1],[.84,.5,1.12],[.94,.22,1.1],[.98,.02,1.08]]];for(let r of n){let o=[t.clone().multiplyScalar(.98),...r.map(([a,l,c])=>ra(a,l,c))];i.push(Ms(o,.19,.13,{flat:.45,seg:26,tipRound:.35}))}let s=(r,o,a,l,c)=>{let h=Math.sin(r),d=Math.cos(r),f=[Li(r,.82,.96),Li(r,.3,1.09)];for(let p=1;p<=5;p++){let _=-.25*p*o,m=1.1+a*Math.sin(p*1.7+l)+c*p*.02;f.push(new P(h*m,_+.1,d*m*(p>2?.96:1)))}let u=f[f.length-1];return f.push(new P(u.x*1.04,u.y-.07,u.z*1.04)),f.push(new P(u.x*1.1,u.y-.04,u.z*1.1)),f};for(let r=0;r<=15;r++){let o=Math.PI*(.47+1.06*r/15);i.push(Ms(s(o,1.02+.04*Math.sin(r*2.3),.07,r*1.3,1),.22,.17,{flat:.55,seg:34,tipRound:.2}))}for(let r of[-1,1])for(let[o,a,l]of[[1.15,.19,.4],[1.33,.2,2.1]]){let c=r*o,h=s(c,1,.08,l,1);h.forEach((d,f)=>{f>2&&(d.z=Math.max(d.z,.3+.02*f))}),i.push(Ms(h,a,a*.8,{flat:.55,seg:32,tipRound:.22}))}return Xn(i,!1)}function ty(){let i=new je(1.004,56,40,Math.PI/2-1.3,2.6,.38,2),e=i.attributes.position,t=i.attributes.uv;for(let n=0;n<e.count;n++)t.setXY(n,.5+e.getX(n)/2,.5+e.getY(n)/2);return i}function ny(i,e){let t=new Ye,n=150,s=[],r=[];for(let d=0;d<=n;d++){let f=d/n*Math.PI*2,u=Math.pow(.5+.5*Math.cos(5*f),5),p=i.h*(.5+.78*u);s.push(Math.sin(f)*i.r,0,Math.cos(f)*i.r,Math.sin(f)*i.r*1.13,p,Math.cos(f)*i.r*1.13)}for(let d=0;d<n;d++){let f=d*2;r.push(f,f+2,f+1,f+1,f+2,f+3)}let o=new rt;o.setAttribute("position",new Le(s,3)),o.setIndex(r),o.computeVertexNormals(),t.add(Nt(o,pt.goldDouble));let a=(d,f,u)=>{let p=Nt(new jt(f,u,8,64),pt.gold);p.rotation.x=Math.PI/2,p.position.y=d,t.add(p)};a(.004,i.r*1.01,.011),a(i.h*.42,i.r*1.075,.006);let l=[],c={ruby:[],sapphire:[],emerald:[]};for(let d=0;d<5;d++){let f=d/5*Math.PI*2;l.push(new je(.014,12,9).translate(Math.sin(f)*i.r*1.13,i.h*1.3,Math.cos(f)*i.r*1.13));let u=new je(d===0?.02:.014,14,10);u.scale(1,1,.6),u.rotateY(f),u.translate(Math.sin(f)*i.r*1.07,i.h*.22,Math.cos(f)*i.r*1.07),c[d===0?"ruby":d%2?"sapphire":"emerald"].push(u)}t.add(Nt(Xn(l),pt.pearl,!1));for(let d in c)t.add(Nt(Xn(c[d]),pt[d],!1));let h=Nt(new je(i.r*.98,24,12,0,Math.PI*2,0,Math.PI/2),vn(e,"#ffffff",.8));return h.scale.y=.75,h.position.y=i.h*.25,t.add(h),t.add(ii(.016,pt.gold,0,i.h*.25+i.r*.74,0,1,1,1,12)),t}function iy(i,e,t){let r=new mt(1,1,26,16),o=r.attributes.position,a=(F,C,U)=>{for(let k=0;k<=16;k++){let O=k/16,H=Math.pow(O,1.5),B=Sn(i.span[0],i.span[1],O);for(let G=0;G<=26;G++){let D=(G/26-.5)*2*B,J=Sn(i.topR,i.botR,Math.pow(O,.8))+.013*O*Math.sin(D*6+.6),Y=Math.sin(D)*J,ue=-Math.cos(D)*J-.012,me=Sn(i.topY,i.botY,O);ue-=H*(C*.08+.016*Math.sin(F*4.1+D*1.7-O*2.6)+U*.12),Y+=H*.011*Math.sin(F*3.3+O*2.2+D),me+=H*U*.06,o.setXYZ(k*27+G,Y,me,ue)}}o.needsUpdate=!0,r.computeVertexNormals()};if(a(0,0,0),r.attributes.normal.getZ(229)>0){let F=r.index.array;for(let C=0;C<F.length;C+=3){let U=F[C];F[C]=F[C+2],F[C+2]=U}r.computeVertexNormals()}let c=Nt(r,vn(e.cape,e.capeSheen,.78));c.material.sheenRoughness=.32;let h=Nt(r,new Xt({color:e.lining,roughness:.35,metalness:.1,sheen:.6,sheenColor:"#ffffff",sheenRoughness:.3,side:qt})),d=new Ye;d.add(c,h);let f=new je(1,14,10),u=53,p=new Ot(f,t.ermine,u),_=new Ot(f,t.ermine,15),m=new Ot(new je(1,10,8),t.ermineTail,6);p.castShadow=_.castShadow=!0,d.add(p,_,m);let g=new it,M=new zt,w=new P,y=new P,v=new P,S=(F,C,U)=>U.fromBufferAttribute(o,F*27+C),b=F=>{for(let C=0;C<u;C++){let U=C/2,k=Math.floor(U),O=Math.min(26,k+1);S(16,k,w),S(16,O,y),w.lerp(y,U-k),w.y+=.008,v.set(.032,.028,.032).multiplyScalar(1+.16*Math.sin(C*2.7)),p.setMatrixAt(C,g.compose(w,M.identity(),v))}for(let C=0;C<15;C++){let U=Math.round(C/14*26);S(0,U,w),w.multiplyScalar(1.02),w.y+=.006,v.setScalar(.03+.004*Math.sin(C*1.9)),_.setMatrixAt(C,g.compose(w,M.identity(),v))}for(let C=0;C<6;C++){let U=Math.round((C+.5)/6*26);S(16,U,w),w.y+=.004;let k=w.clone().setY(0).normalize();w.addScaledVector(k,.022),v.set(.008,.016,.008),m.setMatrixAt(C,g.compose(w,M.identity(),v))}p.instanceMatrix.needsUpdate=_.instanceMatrix.needsUpdate=m.instanceMatrix.needsUpdate=!0};b(0);let x=new P,E=new P;S(0,0,x),S(0,26,E);let A=new P(0,i.topY-.03,i.topR+.035),I=Nt(new qi(new Fn([x,A,E]),24,.007,6),pt.goldDeep);d.add(I);let L=ii(.02,t.brooch,0,i.topY-.028,i.topR+.045,1,1,.5,14);return d.add(L),{group:d,update(F,C,U){a(F,C,U),b(F)}}}function oa(i,e,t,{royal:n=!0}={}){let s=sa[i],r=Qv[i],o=i==="yoovy",a=new Ye,l=new Ye;a.add(l);let c=t.skin;if(o){let C=vn(s.shirt,"#c9b6ff"),U=vn(s.skirt,"#a9c6ff");l.add(Nt(yu([[0,.69],[.05,.69],[.088,.672],[.116,.642],[.124,.6],[.12,.54],[.115,.5],[.116,.47],[0,.47]]),C));let k=yu([[0,.5],[.118,.5],[.15,.45],[.178,.395],[.198,.35],[.204,.335],[.19,.33],[0,.33]],96),O=k.attributes.position;for(let D=0;D<O.count;D++){let J=O.getX(D),Y=O.getY(D),ue=O.getZ(D),me=Fe(.5,.34,Y),Pe=Math.atan2(J,ue),K=1+.07*me*(Math.abs(Math.sin(Pe*8))-.5);O.setX(D,J*K),O.setZ(D,ue*K)}k.computeVertexNormals(),l.add(Nt(k,U));let H=Nt(new jt(.119,.013,8,48),vn(s.shirtDark,"#c9b6ff"));H.rotation.x=Math.PI/2,H.position.y=.497,l.add(H);let B=Nt(new jt(.052,.012,8,32),vn(s.shirtDark,"#c9b6ff"));B.rotation.x=Math.PI/2,B.position.y=.688,l.add(B);for(let D of[-1,1])l.add(ii(.062,vn(s.shirtDark,"#c9b6ff"),D*.112,.636,0,1,.82,.92));let G=Nt(Ki(Vr(.07),.012,.006),t.brooch);G.position.set(0,.585,.118),l.add(G)}else{let C=vn(s.dress,"#ffc2dc"),U=vn(s.dressLight,"#ffe0ee");l.add(Nt(yu([[0,.53],[.05,.53],[.086,.512],[.11,.486],[.118,.455],[.112,.405],[.118,.372],[.15,.322],[.186,.27],[.206,.236],[.212,.224],[.19,.218],[0,.218]]),C));let k=[];for(let B=0;B<22;B++){let G=B/22*Math.PI*2,D=new je(.021,10,7);D.scale(1,.7,1),D.translate(Math.sin(G)*.205,.226,Math.cos(G)*.205),k.push(D)}l.add(Nt(Xn(k),vn(s.dressDark,"#ffc2dc"),!1));let O=Nt(new jt(.056,.017,10,32),vn("#ffffff","#ffffff"));O.rotation.x=Math.PI/2,O.position.y=.522,O.scale.z=.7,l.add(O);for(let B of[-1,1])l.add(ii(.069,U,B*.112,.476,0,1,.9,.92));let H=Nt(Ki(Ac(.04),.012,.006),t.brooch);H.position.set(0,.42,.112),l.add(H)}let h=o?[.66,.74]:[.5,.57],d=Nt(new ut(.04,.044,h[1]-h[0],16),t.skinShade);d.position.y=(h[0]+h[1])/2,l.add(d);let f=[],u=[];for(let C of[-1,1]){let U=new Ye;U.position.set(C*r.shoulder[0],r.shoulder[1],0);let k=Nt(new Rn(r.armR,r.arm,6,14),c);k.position.y=-(r.arm/2+r.armR*.4);let O=ii(r.hand,c,0,-(r.arm+r.armR*1.2),.004,1,1.05,.92,16);U.add(k,O),l.add(U),f.push(U);let H=new Ye;H.position.set(C*r.hip[0],r.hip[1],0);let B=Nt(new Rn(r.legR,r.leg,6,14),c);B.position.y=-(r.leg/2+r.legR);let G=Nt(new ut(r.legR*1.12,r.legR*1.12,.05,16),t.sock);G.position.y=-(r.leg+r.legR)+.06;let D=-(r.leg+r.legR*2)+.02;H.add(B,G),o?(H.add(ii(.052,t.sneaker,0,D,.022,1,.62,1.5,18)),H.add(ii(.055,vn(s.shoes,"#d8c8ff",.6),0,D-.016,.024,1.02,.25,1.52,18))):(H.add(ii(.05,vn(s.shoes,"#ffc2dc",.4),0,D,.022,1,.64,1.45,18)),H.add(ii(.012,t.sock,0,D+.026,.06,1.6,.5,1,10))),l.add(H),u.push(H)}let p=new Ye;p.position.y=r.headY,p.scale.set(r.R*r.headScale[0],r.R*r.headScale[1],r.R*r.headScale[2]),l.add(p),p.add(Nt(new je(1,48,36),c));let _=new Qe({map:e.open,transparent:!0,roughness:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,premultipliedAlpha:!0,emissive:"#ffffff",emissiveMap:e.open,emissiveIntensity:.14}),m=new Ae(ty(),_);m.renderOrder=1,p.add(m);let g=Nt(o?jv():ey(),t["hair_"+i]);if(g.receiveShadow=!0,p.add(g),o){let C=new Ye,U=new jt(1.105,.07,12,72,Math.PI+.5);U.rotateZ(-.25);let k=Nt(U,t.pink);C.add(k),C.rotation.x=.42;let O=new Ye,H=new At(.17,.3,14);for(let G of[-1,1]){let D=Nt(H,t.pink);D.rotation.z=G*Math.PI/2,D.position.x=G*.15,D.scale.set(1,1,.45),O.add(D)}O.add(ii(.08,t.pinkDark,0,0,0,1,1,.8,12));let B=.62;O.position.set(Math.cos(B)*1.12,Math.sin(B)*1.12,0),O.rotation.z=B-Math.PI/2+.3,C.add(O),p.add(C)}else{let C=new Ye;for(let k=0;k<5;k++){let O=k/5*Math.PI*2;C.add(ii(.13,t.pink,Math.cos(O)*.14,Math.sin(O)*.14,0,1,1,.5,14))}C.add(ii(.085,t.yellow,0,0,.04,1,1,.7,12));let U=Li(1,.78,1.13);C.position.copy(U),C.lookAt(U.clone().multiplyScalar(2)),p.add(C)}let M=[],w=null;if(n){let C=ny(r.crown,s.cape);C.scale.set(1/(r.R*r.headScale[0]),1/(r.R*r.headScale[1]),1/(r.R*r.headScale[2]));let U=new Ye;U.rotation.z=r.crown.tilt,U.add(C),C.position.y=r.crown.y/(r.R*r.headScale[1])-.02,p.add(U);for(let k=0;k<3;k++){let O=new on(new Qt({map:t.sparkleTex,color:"#fff3c8",blending:bt,depthWrite:!1,opacity:0})),H=(k-1)*1.25;O.position.set(Math.sin(H)*r.crown.r*1.13,r.crown.h*1.3,Math.cos(H)*r.crown.r*1.13),C.add(O),M.push(O)}w=iy(r.cape,s,t),l.add(w.group)}let y=new Ae(new mt(.75,.75),t.blob);y.rotation.x=-Math.PI/2,y.position.y=.012,a.add(y);let v=new zt,S=new zt,b=new zt,x=new Wt,E=new P,A=new P,I=o?.62:.5,L="open",F=C=>{C!==L&&e[C]&&(L=C,_.map=_.emissiveMap=e[C])};return{root:a,head:p,D:r,who:i,update(C,U){a.position.set(U.x,U.y||0,U.z),a.rotation.y=U.turn||0;let k=U.dist/I*Math.PI*2,O=U.walk;l.position.y=(U.jump||0)+O*.012*(1-Math.cos(k*2)),l.rotation.z=O*.035*Math.sin(k)+(U.sway||0),l.rotation.y=O*.06*Math.sin(k),l.rotation.x=O*.05+(U.lean||0);let H=U.squash||0;l.scale.set(1+H*.5,1-H,1+H*.5),p.rotation.z=O*.03*Math.sin(k+.6)+(U.tilt||0),p.rotation.x=-.04+(U.nod||0),p.rotation.y=U.look||0,u[0].rotation.x=-Math.sin(k)*.48*O,u[1].rotation.x=Math.sin(k)*.48*O;for(let B=0;B<2;B++){let G=B?1:-1,D=f[B],J=(B?-1:1)*Math.sin(k)*.42*O;v.setFromEuler(x.set(J,0,G*(.1+.03*Math.sin(C*1.3+B)+(U.armOut||0)))),U.hold&&U.holdSide===G&&(E.copy(U.holdTarget).sub(A.set(G*r.shoulder[0],r.shoulder[1]+l.position.y,0)).normalize(),S.setFromUnitVectors(Kv,E),v.slerp(S,U.hold));let Y=U.wave&&G===U.waveSide,ue=Y?U.wave:U.cheer||0;if(ue>0){let me=Y?.42*Math.sin(C*11):.12*Math.sin(C*9+B*1.5);b.setFromEuler(x.set(.5,0,G*((Y?2.2:2.3)+me))),v.slerp(b,ue)}D.quaternion.copy(v)}F(U.face||"open"),M.forEach((B,G)=>{let D=[10.55,11.25,12.15,13.05].map(Y=>Y+G*.21+(o?0:.11)),J=Math.max(...D.map(Y=>Math.max(0,1-Math.abs(C-Y)/.22)));B.material.opacity=J,B.scale.setScalar(.04+J*.14),B.material.rotation=C*1.5+G}),w&&w.update(C,O+Math.max(0,U.jumpVel||0)*.3,(U.jump||0)*3)}}}function Ic(){let i=(e,t)=>new Xt({color:e,roughness:.45,sheen:.6,sheenColor:t,sheenRoughness:.35,clearcoat:.35,clearcoatRoughness:.35,specularIntensity:.8});return{skin:new Xt({color:ap,roughness:.55,sheen:.5,sheenColor:"#ffb8a0",sheenRoughness:.6,emissive:ap,emissiveIntensity:.1}),skinShade:new Xt({color:"#F4C3A6",roughness:.6}),hair_yoovy:i(sa.yoovy.hair,sa.yoovy.hairLight),hair_googy:i(sa.googy.hair,sa.googy.hairLight),sock:vn("#ffffff","#ffffff",.8),sneaker:vn("#ffffff","#ffffff",.5),pink:vn("#FF6FA5","#ffd0e4",.5),pinkDark:vn("#E0407F","#ffd0e4",.5),yellow:vn("#FFD54F","#fff3c0",.5),brooch:new Qe({color:"#FFD54F",metalness:.5,roughness:.45,emissive:"#7a5200",emissiveIntensity:.15}),ermine:new Xt({color:"#ffffff",roughness:1,sheen:1,sheenColor:"#ffffff",sheenRoughness:.9,emissive:"#ffffff",emissiveIntensity:.08}),ermineTail:new Qe({color:"#1d1a26",roughness:.9}),blob:new vt({map:sy(),transparent:!0,depthWrite:!1,opacity:.55}),sparkleTex:ys()}}function sy(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(10,5,20,0.85)"),t.addColorStop(.5,"rgba(10,5,20,0.4)"),t.addColorStop(1,"rgba(10,5,20,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Qn(i)}var aa=[[4.75,-11,31,-100,"peony","#ffd866","#fff6d0"],[5.15,12,35,-98,"peony","#ff6fae","#ffd0e6"],[5.55,0,41,-106,"ring","#7fe3ff","#ffffff"],[5.95,-20,34,-96,"willow","#ffc046","#fff0b0"],[6.35,17,30,-94,"heart","#ff5ca8","#ffc2de"],[6.75,-4,38,-102,"peony","#c9a4ff","#ffffff"],[7.1,22,40,-104,"glitter","#fff4dc","#ffd866"],[7.5,-16,28,-96,"peony","#ffd866","#ff9a4a"],[7.95,8,34,-100,"ring","#ff6fae","#ffffff"],[8.45,-6,40,-102,"peony","#7fe3ff","#c9f4ff"],[8.95,18,32,-96,"willow","#ffc046","#fff0b0"],[9.45,-12,34,-98,"heart","#ff5ca8","#ffc2de"],[9.85,4,28,-94,"peony","#c9a4ff","#ffe2ff"],[10.35,0,36,-96,"heart","#ff4f9e","#ffd0e6"],[10.6,-18,32,-100,"peony","#ffd866","#fff6d0"],[10.75,18,32,-100,"peony","#7fe3ff","#ffffff"],[11,-8,42,-104,"ring","#c9a4ff","#ffffff"],[11.2,8,42,-104,"ring","#ffd866","#ffffff"],[11.45,-22,38,-98,"willow","#ffc046","#fff0b0"],[11.6,22,38,-98,"willow","#ffc046","#fff0b0"],[11.9,0,45,-106,"glitter","#fff4dc","#ffd866"],[12.2,-12,29,-94,"peony","#ff6fae","#ffd0e6"],[12.35,12,29,-94,"peony","#ffd866","#ff9a4a"]],hp=.95;function up(){let i=Rt(1234),e=5,t=[],n=[],s=[],r=[],o=(M,w,y,v,S,b,x)=>{for(let E=0;E<e;E++)t.push(M[0],M[1],M[2]),n.push(w.x,w.y,w.z),s.push(y,v,E*x,S),r.push(b.r,b.g,b.b)};for(let[M,w,y,v,S,b,x]of aa){let E=Ct(b),A=Ct(x),I=[w,y,v],L={peony:170,ring:110,heart:150,willow:130,glitter:150}[S];for(let F=0;F<L;F++){let C;if(S==="ring"){let O=F/L*Math.PI*2,H=.35;C=new P(Math.cos(O),Math.sin(O)*Math.cos(H),Math.sin(O)*Math.sin(H)).multiplyScalar(25+i()*1.5)}else if(S==="heart"){let O=F/L*Math.PI*2,H=Math.sin(O);C=new P(16*H*H*H,13*Math.cos(O)-5*Math.cos(2*O)-2*Math.cos(3*O)-Math.cos(4*O),(i()-.5)*2).multiplyScalar(1.55+i()*.06)}else{let O=i()*2-1,H=i()*Math.PI*2,B=Math.sqrt(1-O*O),G=S==="willow"?17+i()*3:23+i()*4;C=new P(B*Math.cos(H),O,B*Math.sin(H)).multiplyScalar(G)}let U=S==="willow"?3.1+i()*.5:S==="glitter"?2.2+i()*.5:1.8+i()*.4;o(I,C,M,U,S==="willow"?1.6:S==="heart"?.25:.8,i()<.75?E:A,S==="willow"?.07:.04)}}let a=new rt;a.setAttribute("position",new Le(t,3)),a.setAttribute("aVel",new Le(n,3)),a.setAttribute("aInfo",new Le(s,4)),a.setAttribute("aColor",new Le(r,3));let l={uTime:{value:0},uScale:{value:300}},c=new mi(a,new ct({uniforms:l,transparent:!0,depthWrite:!1,blending:bt,vertexShader:`attribute vec3 aVel, aColor; attribute vec4 aInfo; uniform float uTime, uScale;
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
                gl_FragColor = vec4(vColor * a, 1.0); }`}));c.frustumCulled=!1;let h=[],d=[],f=[];for(let[M,w,y,v]of aa)for(let S=0;S<12;S++)h.push(w*.75,3,v+6),d.push(w,y,v),f.push(M-hp,S*.022,i()*6.28);let u=new rt;u.setAttribute("position",new Le(h,3)),u.setAttribute("aTo",new Le(d,3)),u.setAttribute("aInfo",new Le(f,3));let p=new mi(u,new ct({uniforms:l,transparent:!0,depthWrite:!1,blending:bt,vertexShader:`attribute vec3 aTo, aInfo; uniform float uTime, uScale; varying float vA;
            void main() {
                float t = (uTime - aInfo.x - aInfo.y) / ${hp.toFixed(2)};
                if (t < 0.0 || t > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
                float e = 1.0 - (1.0 - t) * (1.0 - t);
                vec3 p = mix(position, aTo, e) + vec3(sin(t * 18.0 + aInfo.z) * 0.25, 0.0, 0.0);
                vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
                float tail = aInfo.y / 0.022;
                vA = (1.0 - tail / 12.0) * (0.6 + 0.4 * sin(uTime * 50.0 + tail));
                gl_PointSize = uScale * 0.55 * (1.0 - tail * 0.06) / -mv.z;
            }`,fragmentShader:`varying float vA;
            void main() { float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r);
                gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * a * a * vA * 2.5, 1.0); }`}));p.frustumCulled=!1;let _=new Ye;_.add(c,p);let m=new Yi("#ffffff",0,0,.6);_.add(m);let g=new le;return{group:_,light:m,update(M,w){l.uTime.value=M,l.uScale.value=950*w;let y=0,v=0,S=new le(0,0,0);for(let[b,x,E,A,,I]of aa){let L=M-b;if(L<0||L>1.2)continue;let F=Math.exp(-L*4.5)*Fe(0,.05,L);v+=F,S.add(g.set(I).multiplyScalar(F)),F>y&&(y=F,m.position.set(x,E*.7,A+20))}return m.intensity=v*14,v>0&&m.color.copy(S.multiplyScalar(1/v)),{flash:Math.min(1,v),color:m.color}}}}function fp(){let i=Rt(99),e=[],t=[],n=[],s=(l,c,h,d,f,u,p,_)=>{for(let m=0;m<l;m++)e.push(c+i()*(h-c),d+i()*(f-d),u+i()*(p-u)),t.push(i()*6.28,.5+i(),.6+i()*.8,i()),n.push(_)};s(260,-7,7,.3,9.5,.6,7,0),s(220,-9,9,.2,4,-50,-4,1);let r=new rt;r.setAttribute("position",new Le(e,3)),r.setAttribute("aInfo",new Le(t,4)),r.setAttribute("aKind",new Le(n,1));let o={uTime:{value:0},uScale:{value:60},uMap:{value:ys()},uDust:{value:1},uFlies:{value:0}},a=new mi(r,new ct({uniforms:o,transparent:!0,depthWrite:!1,blending:bt,vertexShader:`attribute vec4 aInfo; attribute float aKind; uniform float uTime, uScale, uDust, uFlies;
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
                gl_FragColor = vec4(vC * a, 1.0); }`}));return a.frustumCulled=!1,{group:a,update(l,c){o.uTime.value=l,o.uScale.value=60*c,o.uDust.value=1-Fe(3.4,4.2,l),o.uFlies.value=Fe(3,4.5,l)}}}function dp(i,e){let t=Rt(555),n=520,s=[],r=[],o=[],a=[],l=[],c=[],h=["#ff5c9a","#ff8fbd","#ffd54f","#ffffff","#c9a4ff","#ff3d7f","#ffe9a8"].map(p=>Ct(p));for(let p=0;p<n;p++){let _=i.x+(t()-.5)*7,m=i.z+(t()-.5)*6,g=4.5+t()*3.5,M=e+t()*2.4,w=.55+t()*.45,y=2+t()*4,v=t()*100,S=h[Math.floor(t()*h.length)],b=t()<.6?1:0,x=b?.09:.06,E=b?.11:.035,A=[[-x,-E,0,0],[x,-E,1,0],[x,E,1,1],[-x,E,0,1]];for(let[L,F,C,U]of A)s.push(L,F,0),r.push(C,U),o.push(_,g,m),a.push(M,w,y,v+b*1e3),l.push(S.r,S.g,S.b);let I=p*4;c.push(I,I+1,I+2,I,I+2,I+3)}let d=new rt;d.setAttribute("position",new Le(s,3)),d.setAttribute("uv",new Le(r,2)),d.setAttribute("aStart",new Le(o,3)),d.setAttribute("aInfo",new Le(a,4)),d.setAttribute("aColor",new Le(l,3)),d.setIndex(c);let f={uTime:{value:0},uMap:{value:Zd()}},u=new Ae(d,new ct({uniforms:f,transparent:!0,depthWrite:!1,side:gt,vertexShader:`attribute vec3 aStart, aColor; attribute vec4 aInfo; uniform float uTime;
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
                gl_FragColor = vec4(vC, a * vA); }`}));return u.frustumCulled=!1,{group:u,update(p){f.uTime.value=p}}}var Mu=14,mp=13.35,pn=10.35,gp=10.75,xp=new zr([[0,dn(0,3,23)],[2.4,dn(0,2.6,11)],[3.3,dn(0,2.85,6.4)],[4.05,dn(0,2.9,.4)],[5.3,dn(.5,4.8,-6.5)],[7.1,dn(1.7,7.6,-12)],[8.8,dn(1.9,3.3,-18.6)],[10.3,dn(.35,.82,-25)],[13.8,dn(-.6,.92,-24.6)]]),_p=new zr([[0,dn(0,6.6,0)],[2.4,dn(0,4.1,0)],[3.3,dn(0,3.8,-6)],[4.05,dn(0,4,-24)],[5.3,dn(0,9.5,-64)],[7.1,dn(0,11.5,-64)],[8.8,dn(0,3,-33)],[10.3,dn(0,1.02,-28.6)],[13.8,dn(0,1.26,-28.6)]]),vp=new zr([[0,40],[4,44],[8,42],[10.3,38],[13.8,36]]),Yn=[4,9.7,10.3],ry=1.05,oy=-28.6,yp=i=>{let e=Math.min(Math.max(i-Yn[0],0),Yn[1]-Yn[0]),t=ln(i-Yn[1],0,Yn[2]-Yn[1]),n=Yn[2]-Yn[1];return ry*(e+t-t*t/(2*n))},ay=yp(99),ly=oy-ay,pp={yoovy:-.27,googy:.27},cy=(i,e)=>e.some(t=>i>t&&i<t+.13);function Su(i,e){let t=i==="yoovy",n=yp(e),s=ly+n,r=e<Yn[1]?e>Yn[0]?1:0:1-ln((e-Yn[1])/(Yn[2]-Yn[1])),o=1-Fe(pn-.05,pn+.2,e),a=yi(e,pn,pn+.28,12,12.4),l=Fe(12.05,12.45,e),c=e-(pn+.18),d=c>0&&c<.5?.13*4*(c/.5)*(1-c/.5):0,f=c>0&&c<.5?1-2*c/.5:0,u=yi(e,pn+.08,pn+.16,pn+.16,pn+.26)*.06+yi(e,pn+.66,pn+.72,pn+.74,pn+.86)*.08,p=(t?1:-1)*.42*yi(e,8.5,8.9,9.3,9.7),_=e>pn-.05&&e<12.6?"laugh":cy(e,t?[5.7,7.9,10,13]:[6.3,8.4,12.9])?"blink":"open",m=Fe(pn,pn+.4,e);return{x:pp[i]*(1+.38*m),turn:(t?-.22:.22)*m,z:s,walk:r,dist:n,hold:o,holdSide:t?1:-1,holdTarget:new P(-pp[i],.44,.06),cheer:a,wave:l,waveSide:t?-1:1,jump:d,jumpVel:f,squash:u,look:p,face:_,tilt:(t?-.05:.06)*Fe(10.6,11.2,e),nod:.06*yi(e,12.5,12.8,13,13.4)}}var Mp={length:Mu,handoff:mp,gates:$t[0],cheer:pn,title:gp,bursts:aa.map(i=>i[0])};function hy(i){let e=i.texture("stone",()=>Ec()),t=()=>new Qe({map:e.map,normalMap:e.normalMap,normalScale:new ae(.9,.9),roughness:.86}),n=t();n.onBeforeCompile=l=>{l.uniforms.uUp={value:new le(1,.62,.32).multiplyScalar(.32)},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY;
uniform vec3 uUp;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uUp * diffuseColor.rgb * (1.0 - smoothstep(1.5, 20.0, vWY));`)},n.customProgramCacheKey=()=>"castle-uplit";let s=(l,c)=>{let h=i.texture(l,()=>bc(c));return new Xt({map:h.map,normalMap:h.normalMap,roughness:.48,clearcoat:.4,clearcoatRoughness:.25})},r=Xd(),o=i.texture("grass",()=>qd()),a=i.texture("window",()=>wc());return{stone:t(),castleStone:n,roofPink:s("shinglesPink","#e2559a"),roofPurple:s("shinglesPurple","#7a4ae0"),cobbles:new Qe({map:r.map,normalMap:r.normalMap,roughness:.72,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),grass:new Qe({map:o.map,normalMap:o.normalMap,roughness:.95,color:"#c8dcc0"}),carpet:new Xt({map:i.texture("carpet",()=>Tc()),roughness:.9,sheen:.7,sheenColor:"#c8204f",sheenRoughness:.5}),window:new vt({map:a,transparent:!0,color:new le(2.3,1.85,1.3)}),windowLit:new vt({map:a,transparent:!0,vertexColors:!0,color:new le(2.3,1.85,1.3)}),enamel:new Xt({color:"#2546c9",roughness:.3,metalness:.05,clearcoat:1,clearcoatRoughness:.06}),enamelBright:new Xt({color:"#3a6bff",roughness:.3,metalness:.05,clearcoat:1,clearcoatRoughness:.05}),lanternGlass:new Qe({color:"#ffcf80",emissive:"#ffae42",emissiveIntensity:2.4,transparent:!0,opacity:.88,roughness:.2}),flame:new vt({color:new le(4.5,2.8,1.2)}),iron:new Qe({color:"#2c2840",metalness:.7,roughness:.42}),pot:new Qe({color:"#f4eefc",roughness:.45}),trunk:new Qe({color:"#5a3d2b",roughness:.9}),leaf:new Qe({color:"#2f7040",roughness:.8,normalMap:o.normalMap,normalScale:new ae(1.4,1.4)}),hedge:new Qe({color:"#2a6338",roughness:.85,normalMap:o.normalMap,normalScale:new ae(1.6,1.6)}),tree:new Qe({color:"#2a5546",roughness:.9}),pine:new Qe({color:"#1f463e",roughness:.9}),flower:new Qe({color:"#ffffff",roughness:.6,emissive:"#ffffff",emissiveIntensity:.08}),pool:new vt({map:qn(1.5),color:"#ffb35c",transparent:!0,blending:bt,depthWrite:!1,vertexColors:!0,opacity:.38}),...Ic()}}function Eu(i=.65){let e=new Ae(new mt(2,2),new ct({transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`varying vec2 vUv; void main() { vec2 q = vUv - 0.5; float v = clamp(1.0 - dot(q, q) * 1.25, 0.0, 1.0);
            gl_FragColor = vec4(0.0, 0.0, 0.0, ${i.toFixed(2)} * (1.0 - v)); }`}));return e.frustumCulled=!1,e.renderOrder=999,e}async function Sp(i){let{renderer:e,bloom:t}=i,n=new zn;n.fog=new Ns(Ct("#2b1c52"),.0042);let s=new Zt(40,16/9,.25,2500),r=hy(i),o=ip(e);n.environment=o.texture,n.environmentIntensity=.42;let a=np();n.add(a.group);let l=sp(r);n.add(l.group);let c=Cc(r);n.add(c.group);let h=op(r);n.add(h.group);let d=up();n.add(d.group),d.group.name="fireworks";let f=fp();n.add(f.group),f.group.name="motes";let u=oa("yoovy",i.faces.yoovy,r),p=oa("googy",i.faces.googy,r);n.add(u.root,p.root),u.root.name="yoovy",p.root.name="googy",n.add(Eu());let _=dp(new P(0,0,-28.6),pn+.1);n.add(_.group),_.group.name="shower";let m=new zs(Ct("#5a6cc0"),Ct("#2a1838"),.35),g=new ds(Ct("#b9c6ff"),1.25);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),g.shadow.camera.left=-11,g.shadow.camera.right=11,g.shadow.camera.top=11,g.shadow.camera.bottom=-11,g.shadow.camera.near=1,g.shadow.camera.far=140,g.shadow.bias=-4e-4,g.shadow.normalBias=.02,g.shadow.radius=3;let M=new No(Ct("#ffd6a0"),0,60,.34,.7,1.2);M.position.set(4.5,9.5,-14),M.target.position.set(0,.7,-29);let w=new ds(Ct("#ffb070"),0);w.position.set(.5,6,-40),w.target.position.set(0,0,-28);let y=new Yi(Ct("#ffc77a"),0,30,1.6);y.position.set(0,3.2,-3.2),n.add(m,g,g.target,M,M.target,w,w.target,y);let v=new P,S=new P,b=new P,x=new P(0,1,0).cross(Ss).normalize(),E=Ss.clone().cross(x),A=L=>{let F=i.px;e.shadowMap.autoUpdate=!0,xp.at(L,v),_p.at(L,S);let C=vp.at(L),U=s.aspect,k=Math.tan(C*Math.PI/360)*16/9,O=U>=16/9?1:.5+.5*Fe(.45,16/9,U),H=Math.max(Math.tan(C*Math.PI/360),Math.min(k*O/U,Math.tan(28*Math.PI/180)));s.fov=Math.atan(H)*360/Math.PI,s.position.copy(v),s.lookAt(S),s.updateProjectionMatrix(),a.update(L,s,F),l.update(L),c.update(L),h.update(L),f.update(L,F),_.update(L);let B=d.update(L,F);a.uniforms.uFlash.value=B.flash*.18,a.uniforms.uFlashColor.value.copy(B.color),u.update(L,Su("yoovy",L)),p.update(L,Su("googy",L));let G=Fe($t[0],$t[0]+.8,L),D=yi(L,$t[0],$t[0]+.45,$t[0]+.7,$t[0]+1.3);y.intensity=D*40+G*6,M.intensity=G*30,w.intensity=G*2.2,m.intensity=.35+B.flash*.25,e.toneMapping=xi,e.toneMappingExposure=1+D*.12,b.copy(u.root.position).x+=.27,b.multiplyScalar(Fe(3.4,4.6,L));let J=22/g.shadow.mapSize.x,Y=Math.round(b.dot(x)/J)*J,ue=Math.round(b.dot(E)/J)*J,me=b.dot(Ss),Pe=b.set(0,0,0).addScaledVector(x,Y).addScaledVector(E,ue).addScaledVector(Ss,me);g.target.position.copy(Pe),g.position.copy(Pe).addScaledVector(Ss,70),t.threshold=1,t.radius=.5,t.strength=.6+D*.25,i.render()},I={scene:n,camera:s,onTier(L){L.shadow&&g.shadow.mapSize.set(L.shadow,L.shadow),g.castShadow=!!L.shadow},onResize(L){s.aspect=L},draw:A,play(L,{onTime:F}={}){i.use(I),L.appendChild(i.canvas);let C=0,U=!1,k=0,O=0,H=0,B=0,G=0,D=()=>{let Y=L.clientWidth||innerWidth,ue=L.clientHeight||innerHeight;i.canvas.width===Math.floor(Y*e.getPixelRatio())&&i.canvas.height===Math.floor(ue*e.getPixelRatio())||(i.resize(Y,ue),A(G))};D(),A(0),window.addEventListener("resize",D);let J=Y=>{if(U)return;k||(k=Y);let ue=(Y-k)/1e3;G=Math.min(ue,Mu),A(G),F&&F(ue),B&&ue>.8&&(H++,Y-B>45&&O++),B=Y,H===30&&(O>20&&i.tier>0&&(i.setTier(i.tier-1),A(G)),H=O=0),C=requestAnimationFrame(J)};return C=requestAnimationFrame(J),{stop(){U=!0,cancelAnimationFrame(C),window.removeEventListener("resize",D)},still(){A(G);let Y=document.createElement("canvas");return Y.width=i.canvas.width,Y.height=i.canvas.height,Y.getContext("2d").drawImage(i.canvas,0,0),Y}}},fits(){i.use(I);let L=e.getContext(),F=new Uint8Array(4),C=()=>L.readPixels(0,0,1,1,L.RGBA,L.UNSIGNED_BYTE,F);for(let U=i.tier;U>=0;U--){i.setTier(U),A(10.8),C();let k=performance.now();if(A(6.3),C(),A(11.4),C(),(performance.now()-k)/2<(U?24:42))return!0}return!1},renderAt(L,F,C){i.use(I),F&&C&&i.resize(F,C),A(L)},release(){Rc(i,n),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null)}};return i.use(I),A(0),e.compileAsync&&await e.compileAsync(n,s),I}var bu={x0:-48,x1:48,z0:-100,z1:72},Es=[{key:"castle",x:0,z:-49,r:5.4,h:7.6,stop:[0,-42.6]},{key:"math",x:4.9,z:-37,r:3.3,h:6.3,stop:[1.9,-34.2]},{key:"hebrew",x:-4.9,z:-27,r:3.2,h:4.8,stop:[-1.9,-24.2]},{key:"reading",x:4.8,z:-17,r:3.1,h:4.2,stop:[1.9,-14.3]},{key:"english",x:-5.1,z:-7,r:3.3,h:5.6,stop:[-1.9,-4.2]},{key:"geography",x:4.9,z:3,r:3.2,h:6.6,stop:[1.9,5.8]},{key:"biology",x:-4.9,z:13,r:3.2,h:3.2,stop:[-1.9,15.8]},{key:"memory",x:6.3,z:23,r:3,h:3.6,stop:[1.8,25.6]},{key:"puzzle",x:-3,z:33.5,r:3.2,h:4.4,stop:[-3,33.5]},{key:"chess",x:4.9,z:43.5,r:3.3,h:3,stop:[1.8,46.2]}],Xr=i=>Es.find(e=>e.key===i),si={x:-3,z:33.5,ax:.399,az:.917,half:2.9,rise:.95},Lc=class{constructor(e,t=.25){let n=new Fn(e.map(r=>new P(r[0],0,r[1])),!1,"centripetal"),s=Math.max(8,Math.round(n.getLength()/t));this.pts=n.getSpacedPoints(s).map(r=>[r.x,r.z]),this.len=[0];for(let r=1;r<this.pts.length;r++)this.len.push(this.len[r-1]+Math.hypot(this.pts[r][0]-this.pts[r-1][0],this.pts[r][1]-this.pts[r-1][1]));this.length=this.len[this.len.length-1],this.rows=new Map;for(let r=0;r<this.pts.length-1;r++){let o=Math.floor(Math.min(this.pts[r][1],this.pts[r+1][1])),a=Math.floor(Math.max(this.pts[r][1],this.pts[r+1][1]));for(let l=o;l<=a;l++)this.rows.has(l)||this.rows.set(l,[]),this.rows.get(l).push(r)}}at(e){let{pts:t,len:n}=this;e=Math.min(this.length,Math.max(0,e));let s=0,r=n.length-1;for(;r-s>1;){let h=s+r>>1;n[h]<=e?s=h:r=h}let o=(e-n[s])/Math.max(1e-6,n[r]-n[s]),a=t[s],l=t[r],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1;return{x:a[0]+(l[0]-a[0])*o,z:a[1]+(l[1]-a[1])*o,tx:(l[0]-a[0])/c,tz:(l[1]-a[1])/c}}near(e,t,n=4){let s=null,r=new Set;for(let o=Math.floor(t-n);o<=Math.floor(t+n);o++){let a=this.rows.get(o);if(a)for(let l of a){if(r.has(l))continue;r.add(l);let c=this.pts[l],h=this.pts[l+1],d=h[0]-c[0],f=h[1]-c[1],u=d*d+f*f||1,p=Math.min(1,Math.max(0,((e-c[0])*d+(t-c[1])*f)/u)),_=Math.hypot(e-c[0]-d*p,t-c[1]-f*p);_<=n&&(!s||_<s.d)&&(s={d:_,s:this.len[l]+Math.sqrt(u)*p})}}return s}project(e,t){let n=1/0,s=0;for(let r=0;r<this.pts.length;r++){let o=Math.hypot(this.pts[r][0]-e,this.pts[r][1]-t);o<n&&(n=o,s=this.len[r])}return s}},yn=si,bn=new Lc([[0,-45.4],[0,-42.6],[.9,-38.2],[1.9,-34.2],[.4,-29.2],[-1.9,-24.2],[-.3,-19.2],[1.9,-14.3],[.3,-9.2],[-1.9,-4.2],[-.2,.8],[1.9,5.8],[.3,10.8],[-1.9,15.8],[-.2,20.6],[1.8,25.6],[-.9,28.6],[yn.x-yn.ax*(yn.half+.6),yn.z-yn.az*(yn.half+.6)],[yn.x,yn.z],[yn.x+yn.ax*(yn.half+.6),yn.z+yn.az*(yn.half+.6)],[-.6,40.4],[1.8,46.2],[3,48.2]]);for(let i of Es)i.s=bn.project(i.stop[0],i.stop[1]);var bs=bn.project(yn.x,yn.z),Dc=new Lc([[14.5,27.6],[9,29.9],[3,31.3],[yn.x,yn.z],[-8.5,36.2],[-13.5,37.3],[-19.5,39.6],[-27,40.6]],.4);var Ts=new le;function ri(i,e){let t=i.attributes.position.count,n=new Float32Array(t*3);if(typeof e=="function"){let s=i.attributes.position;for(let r=0;r<t;r++){let o=e(s.getX(r),s.getY(r),s.getZ(r));Ts.set(o),n[r*3]=Ts.r,n[r*3+1]=Ts.g,n[r*3+2]=Ts.b}}else{Ts.set(e);for(let s=0;s<t;s++)n[s*3]=Ts.r,n[s*3+1]=Ts.g,n[s*3+2]=Ts.b}return i.setAttribute("color",new xt(n,3)),i}var uy=new it,fy=new zt,dy=new Wt,py=new P,my=new P;function qr(i,{x:e=0,y:t=0,z:n=0,rx:s=0,ry:r=0,rz:o=0,s:a=1,sx:l=1,sy:c=1,sz:h=1}={}){return i.applyMatrix4(uy.compose(py.set(e,t,n),fy.setFromEuler(dy.set(s,r,o)),my.set(a*l,a*c,a*h)))}var Mt=(i,e,t)=>ri(t?qr(i,t):i,e),oi=(i,e,t,n,s)=>Mt(new Gt(i,e,t),n,s),Zn=(i,e,t,n,s,r,o=3)=>Mt(new Wr(i,e,t,o,Math.min(n,i/2,e/2,t/2)),s,r),mn=(i,e,t,n,s,r=20,o=!1)=>Mt(new ut(i,e,t,r,1,o),n,s),la=(i,e,t,n,s=20)=>Mt(new At(i,e,s),t,n),Mi=(i,e,t,n=18)=>Mt(new je(i,n,Math.max(8,Math.round(n*.7))),e,t),Mn=(i,e,t,n=2)=>Mt(new Gn(i,n),e,t),Fc=(i,e,t,n,s=32)=>Mt(new jt(i,e,10,s),t,n),Ep=(i,e,t,n=28)=>Mt(new Os(i.map(([s,r])=>new ae(s,r)),n),e,t);function Yr(i,e,t,n,s=.04,r=10){let o=new Cn(i,{depth:e,bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:r});return o.translate(0,0,-e/2),Mt(o,t,n)}function Bc(i,e,t,{closed:n=!1,radial:s=8,seg:r}={}){let o=i.map(l=>l.isVector3?l:new P(l[0],l[1],l[2])),a=new qi(new Fn(o,n,"centripetal"),r||Math.max(6,o.length*6),e,s,n);return ri(a,t)}function Di(i,e,t=1,n=null){let s=i.attributes.position,r=Rt(t),o=new Map;for(let a=0;a<s.count;a++){let l=s.getX(a),c=s.getY(a),h=s.getZ(a),d=Math.round(l*1e3)+"_"+Math.round(c*1e3)+"_"+Math.round(h*1e3),f=o.get(d);f===void 0&&(f=1+(r()-.5)*2*e,o.set(d,f)),!(n!==null&&c<=n)&&s.setXYZ(a,l*f,c*(1+(f-1)*.5),h*f)}return i.computeVertexNormals(),i}function Ut(i,e,{cast:t=!0,receive:n=!0}={}){let s=i.map(o=>{let a=o.index?o.toNonIndexed():o;a.attributes.uv||a.setAttribute("uv",new xt(new Float32Array(a.attributes.position.count*2),2)),a.attributes.normal||a.computeVertexNormals(),a.attributes.color||ri(a,"#ffffff");for(let l of Object.keys(a.attributes))["position","normal","uv","color"].includes(l)||a.deleteAttribute(l);return a}),r=new Ae(Xn(s,!1),e);return r.castShadow=t,r.receiveShadow=n,r}function Nc(i,e,t){let n=i*374761393+e*668265263+t*144665|0;return n=(n^n>>>13)*1274126177|0,((n^n>>>16)>>>0)/4294967296}function ca(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Nc(n,s,t),h=Nc(n+1,s,t),d=Nc(n,s+1,t),f=Nc(n+1,s+1,t);return(c+(h-c)*a+(d-c)*l+(c-h-d+f)*a*l)*2-1}function ws(i,e,t=0,n=3){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*ca(i*o,e*o,t+l*17),a+=r,r*=.5,o*=2.03;return s/a}function Tu(i,e,t,{srgb:n=!0}={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Qn(s);return n&&(r.colorSpace=sn),r.anisotropy=4,r}var Uc=class{constructor(e=2048,t=1024){this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.cells=new Map,this.x=0,this.y=0,this.row=0,this.texture=new Qn(this.canvas),this.texture.colorSpace=sn,this.texture.anisotropy=4,this.material=new Qe({map:this.texture,roughness:.75,alphaTest:.4,side:gt})}cell(e,t,n,s){if(this.cells.has(e))return this.cells.get(e);let r=4,o=this.canvas.width,a=this.canvas.height;if(this.x+t+r>o&&(this.x=0,this.y+=this.row+r,this.row=0),this.y+n>a)throw new Error("Atlas: the sheet is full ("+e+")");let l=this.x,c=this.y;this.ctx.save(),this.ctx.translate(l,c),this.ctx.beginPath(),this.ctx.rect(0,0,t,n),this.ctx.clip(),s(this.ctx,t,n),this.ctx.restore(),this.x+=t+r,this.row=Math.max(this.row,n);let h={u0:l/o,v0:1-(c+n)/a,u1:(l+t)/o,v1:1-c/a,w:t,h:n};return this.cells.set(e,h),this.texture.needsUpdate=!0,h}glyph(e,{color:t="#ffffff",bg:n=null,size:s=128,scale:r=.74,stroke:o=null,font:a="'Varela Round', 'Fredoka', 'Arial Rounded MT Bold', Arial, sans-serif"}={}){return this.cell("g:"+e+t+n+s+o,s,s,(l,c,h)=>{if(n){let _=c*.2;l.fillStyle=n,l.beginPath(),l.moveTo(_,0),l.arcTo(c,0,c,h,_),l.arcTo(c,h,0,h,_),l.arcTo(0,h,0,0,_),l.arcTo(0,0,c,0,_),l.closePath(),l.fill()}l.font=`700 ${Math.round(h*r)}px ${a}`,l.textAlign="center",l.textBaseline="alphabetic";let d=l.measureText(e),f=d.actualBoundingBoxAscent||h*r*.7,u=d.actualBoundingBoxDescent||0,p=h/2+(f-u)/2;o&&(l.lineWidth=h*.07,l.strokeStyle=o,l.lineJoin="round",l.strokeText(e,c/2,p)),l.fillStyle=t,l.fillText(e,c/2,p)})}card(e,t,n,s){let r=new mt(t,n),o=r.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,e.u0+o.getX(a)*(e.u1-e.u0),e.v0+o.getY(a)*(e.v1-e.v0));return s?qr(r,s):r}mesh(e){let t=new Ae(Xn(e.map(n=>n.index?n.toNonIndexed():n),!1),this.material);return t.castShadow=!1,t.receiveShadow=!1,t}sprite(e,t,n="#ffffff",s={}){let r=this.texture.clone();r.repeat.set(e.u1-e.u0,e.v1-e.v0),r.offset.set(e.u0,e.v0),r.needsUpdate=!0;let o=new on(new Qt({map:r,color:n,transparent:!0,depthWrite:!1,...s}));return o.scale.set(t*e.w/e.h,t,1),o}};var ji=.5,qs=(i,e,t,n,s,r)=>Math.hypot((i-t)/s,(e-n)/r);function ha(i,e){return{forest:1-Fe(.75,1.2,qs(i,e,-10.5,-27,9.5,8.5)),desert:1-Fe(.78,1.12,qs(i,e,14.5,3.2,13.2,8.4)),rocky:1-Fe(.7,1.2,qs(i,e,-7.8,13.2,6.4,5)),mountain:Math.max(Fe(9.5,19,i)*Fe(-24,-33,e),Fe(-60,-72,e)),island:1-Fe(.35,1,qs(i,e,6.3,23,3.6,3.2))}}function wu(i,e){let t=ws(i*.06,e*.06,11),n=ws(i*.21,e*.21,23),s=ha(i,e),r=.66+.26*t+.06*n,o=1-Math.abs(ws(i*.075+3.1,e*.075+9.7,37)),a=Fe(-11,-22,i)*Fe(-34,-46,e);r+=s.mountain*(1.4+3.2*o*o),r+=a*(1-s.mountain)*(.8+3*o),r=Sn(r,2.9,1-Fe(.5,1,qs(i,e,0,-49.5,10.5,9.5))),r+=s.desert*.6*(.5+.5*ca(i*.24+e*.1,e*.32,5)),r+=s.rocky*.22*ca(i*.7,e*.7,9);let l=-17.5+2.6*Math.sin(e*.085+.6)+1.2*Math.sin(e*.21+2),c=16.5+2.2*Math.sin(e*.09+1.3)+1.2*Math.sin(e*.19),h=Fe(l+3,l-3,i);h=Math.max(h,1-Fe(.7,1.15,qs(i,e,-13.5,-6.4,9.2,5.6))),h=Math.max(h,Fe(c-3,c+3,i)*Fe(9,17,e)),h=Math.max(h,1-Fe(.68,1.12,qs(i,e,10.2,23.2,8.6,6.4))),h=Math.max(h,Fe(58.5,64,e+1.5*Math.sin(i*.11))),r=Sn(r,-1.8,h),r=Math.max(r,-1.2+2*s.island);let d=Dc.near(i,e,3);return d&&(r=Sn(r,Math.min(r,-.9),1-Fe(.75,2.1,d.d))),r}var Tp=Es.filter(i=>["math","hebrew","reading","geography","biology","chess"].includes(i.key));for(let i of Tp)i.pad=Math.max(.5,wu(i.x,i.z));function bp(i,e,t){for(let n of Tp){let s=Math.hypot(i-n.x,e-n.z);if(s<n.r*1.3)return Sn(n.pad,t,Fe(n.r*.8,n.r*1.3,s))}return t}function gy(){let i=Rt(71),e=Tu(512,512,(t,n)=>{t.fillStyle="#e9e9e9",t.fillRect(0,0,n,n);for(let s=0;s<220;s++){let r=i()*n,o=i()*n,a=18+i()*54,l=i()<.5,c=t.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,l?"rgba(170,170,170,0.16)":"rgba(255,255,255,0.30)"),c.addColorStop(1,l?"rgba(150,150,150,0)":"rgba(255,255,255,0)"),t.fillStyle=c;for(let h of[-n,0,n])for(let d of[-n,0,n])t.save(),t.translate(h,d),t.fillRect(r-a,o-a,a*2,a*2),t.restore()}t.lineCap="round";for(let s=0;s<7e3;s++){let r=i()*n,o=i()*n,a=2+i()*5,l=-Math.PI/2+(i()-.5)*1.1;t.strokeStyle=i()<.5?`rgba(255,255,255,${.2+i()*.3})`:`rgba(110,110,110,${.18+i()*.25})`,t.lineWidth=1+i()*1.2,t.beginPath(),t.moveTo(r,o),t.lineTo(r+Math.cos(l)*a,o+Math.sin(l)*a),t.stroke()}});return e.wrapS=e.wrapT=Vi,e.anisotropy=8,e}function xy(){let i=Rt(29),e=Tu(256,512,(t,n,s)=>{t.clearRect(0,0,n,s);let r=t.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(176,140,90,0)"),r.addColorStop(.07,"rgba(176,140,90,0.85)"),r.addColorStop(.13,"rgba(232,204,150,1)"),r.addColorStop(.87,"rgba(232,204,150,1)"),r.addColorStop(.93,"rgba(176,140,90,0.85)"),r.addColorStop(1,"rgba(176,140,90,0)"),t.fillStyle=r,t.fillRect(0,0,n,s),t.globalCompositeOperation="source-atop";for(let o=0;o<150;o++){let a=i()*n,l=i()*s,c=16+i()*26,h=12+i()*18,d=Math.round(215+i()*34);t.fillStyle=`rgba(${d},${Math.round(d*.87)},${Math.round(d*.63)},0.75)`;for(let f of[-s,0,s])t.beginPath(),t.ellipse(a,l+f,c/2,h/2,i()*.6,0,7),t.fill()}for(let o=0;o<4;o++)t.fillStyle="rgba(255,250,236,0.96)",t.beginPath(),t.ellipse(n/2+(i()-.5)*10,(o+.5)*s/4,15,23,(i()-.5)*.5,0,7),t.fill(),t.strokeStyle="rgba(190,160,110,0.55)",t.lineWidth=3,t.stroke();t.globalCompositeOperation="source-over"});return e.wrapT=Vi,e.anisotropy=8,e}function wp(){let{x0:i,x1:e,z0:t,z1:n}=bu,s=Math.round((e-i)/ji),r=Math.round((n-t)/ji),o=new Float32Array((s+1)*(r+1)),a=.25,l=Math.ceil(bn.length/a)+1,c=new Float32Array(l),h=new Float32Array(l);for(let H=0;H<l;H++){let B=bn.at(H*a);c[H]=bp(B.x,B.z,wu(B.x,B.z))}for(let H=0;H<l;H++){let B=0,G=0;for(let D=-8;D<=8;D++){let J=H+D;J>=0&&J<l&&Math.abs(J*a-bs)>si.half&&(B+=Math.max(.46,c[J]),G++)}h[H]=G?B/G:.5}let d=h[Math.round((bs-si.half-.5)/a)],f=H=>{let B=Math.abs(H-bs);if(B<si.half+.5){let Y=ln(B/si.half);return d+.06+si.rise*(1-Y*Y)*Fe(si.half+.5,si.half-.2,B)}let G=ln(H/a,0,l-1),D=Math.floor(G),J=Math.min(l-1,D+1);return h[D]+(h[J]-h[D])*(G-D)};for(let H=0;H<=r;H++){let B=t+H*ji;for(let G=0;G<=s;G++){let D=i+G*ji,J=bp(D,B,wu(D,B)),Y=Math.abs(D)<9?bn.near(D,B,2.6):null;Y&&Math.abs(Y.s-bs)>si.half-.2&&(J=Sn(f(Y.s),J,Fe(.95,2.6,Y.d))),o[H*(s+1)+G]=J}}let u=(H,B)=>{let G=ln((H-i)/ji,0,s-1e-4),D=ln((B-t)/ji,0,r-1e-4),J=Math.floor(G),Y=Math.floor(D),ue=G-J,me=D-Y,Pe=Y*(s+1)+J;return o[Pe]*(1-ue)*(1-me)+o[Pe+1]*ue*(1-me)+o[Pe+s+1]*(1-ue)*me+o[Pe+s+2]*ue*me},p=new mt(e-i,n-t,s,r);p.rotateX(-Math.PI/2),p.translate((i+e)/2,0,(t+n)/2);let _=p.attributes.position,m=new Float32Array(_.count*3),g=new Float32Array(_.count),M=new le,w=new le,y={grassA:new le("#6fc043"),grassB:new le("#93d658"),grassC:new le("#b4dc5a"),forest:new le("#3f9140"),sandA:new le("#f6d792"),sandB:new le("#eebd6c"),beach:new le("#f8e6b4"),rocky:new le("#bda88f"),rockA:new le("#7c86b0"),rockB:new le("#98a1c6"),snow:new le("#ffffff"),bed:new le("#d9c48e")};for(let H=0;H<=r;H++)for(let B=0;B<=s;B++){let G=H*(s+1)+B,D=i+B*ji,J=t+H*ji,Y=o[G];_.setY(G,Y);let ue=o[H*(s+1)+Math.min(s,B+1)]-o[H*(s+1)+Math.max(0,B-1)],me=o[Math.min(r,H+1)*(s+1)+B]-o[Math.max(0,H-1)*(s+1)+B],Pe=Math.hypot(ue,me)/(2*ji),K=ha(D,J),ne=ws(D*.33,J*.33,51)*.5+.5,pe=ws(D*.09,J*.09,61)*.5+.5;M.copy(y.grassA).lerp(y.grassB,.3+ne*.4).lerp(y.grassC,Fe(.5,.95,pe)*.45),M.lerp(y.forest,K.forest*.85),M.lerp(w.copy(y.sandA).lerp(y.sandB,ca(D*.24+J*.1,J*.32,5)*.5+.5),K.desert),M.lerp(y.rocky,K.rocky*.9),M.lerp(y.beach,Math.max(1-Fe(.2,.5,Y),K.island*(1-Fe(.2,1,Y)*0)));let De=Math.max(K.mountain*Fe(1.7,3,Y),Fe(.7,1.15,Pe)*Fe(1.2,2.2,Y));M.lerp(w.copy(y.rockA).lerp(y.rockB,pe),De),g[G]=(1-De)*(1-.6*Math.max(K.desert,K.rocky,1-Fe(.2,.5,Y))),M.lerp(y.bed,Fe(0,-.6,Y)*.6),m[G*3]=M.r,m[G*3+1]=M.g,m[G*3+2]=M.b}p.setAttribute("color",new xt(m,3)),p.setAttribute("aGrain",new xt(g,1)),p.computeVertexNormals();let v=p.attributes.uv;for(let H=0;H<v.count;H++)v.setXY(H,_.getX(H)/7,_.getZ(H)/7);let S=new Qe({vertexColors:!0,map:gy(),roughness:.94,metalness:0});S.onBeforeCompile=H=>{H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
attribute float aGrain;
varying float vGrain;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGrain = aGrain;`),H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
varying float vGrain;`).replace("#include <map_fragment>",`#ifdef USE_MAP
	diffuseColor *= mix(vec4(1.0), texture2D(map, vMapUv), vGrain);
#endif`)},S.customProgramCacheKey=()=>"ground-grain";let b=new Ae(p,S);b.receiveShadow=!0,b.castShadow=!1,b.name="ground";let x=.92,E=[],A=[],I=[],L=[],F=Math.ceil(bn.length/.3);for(let H=0;H<=F;H++){let B=Math.min(bn.length,H*.3),G=bn.at(B),D=f(B)+.05;E.push(G.x+G.tz*x,D,G.z-G.tx*x,G.x-G.tz*x,D,G.z+G.tx*x),A.push(0,B/3.2,1,B/3.2);let J=Fe(0,1.2,B)*Fe(bn.length,bn.length-1.6,B);if(L.push(1,1,1,J,1,1,1,J),H<F){let Y=H*2;I.push(Y,Y+1,Y+2,Y+1,Y+3,Y+2)}}let C=new rt;C.setAttribute("position",new Le(E,3)),C.setAttribute("uv",new Le(A,2)),C.setAttribute("color",new Le(L,4)),C.setIndex(I),C.computeVertexNormals();let U=new Ae(C,new Qe({map:xy(),vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,side:gt}));U.receiveShadow=!0,U.renderOrder=1,U.name="road";let k=new Uint8Array((s+1)*(r+1));for(let H=0;H<k.length;H++)k[H]=Math.round(ln((o[H]+2)/6)*255);let O=new Us(k,s+1,r+1,Dr,Pn);return O.magFilter=O.minFilter=cn,O.needsUpdate=!0,{ground:b,road:U,heightAt:u,roadY:f,heightMap:O}}function Ap(i){let{x0:e,x1:t,z0:n,z1:s}=bu,r=vi.merge([be.fog,{uHeight:{value:null},uTime:{value:0},uOrigin:{value:new ae(e,n)},uSize:{value:new ae(t-e,s-n)},uShallow:{value:new le("#5fe0d8")},uDeep:{value:new le("#1f86d6")},uFoam:{value:new le("#ffffff")},uSunDir:{value:new P(0,1,0)},uGlint:{value:1}}]);r.uHeight.value=i;let o=new ct({uniforms:r,fog:!0,vertexShader:`varying vec3 vWorld;
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
            }`}),a=new Ae(new mt(900,900,1,1),o);return a.rotation.x=-Math.PI/2,a.position.set(0,0,-10),a.name="water",{mesh:a,uniforms:r}}var _y=`
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { return vnoise(p) * 0.5 + vnoise(p * 2.03 + 7.1) * 0.3 + vnoise(p * 4.1 + 3.3) * 0.2; }`;function Rp(){let i={uZenith:{value:new le},uHorizon:{value:new le},uGlow:{value:new le},uCloud:{value:new le},uSunDir:{value:new P(0,1,0)},uTime:{value:0},uStars:{value:0}},e=new Ae(new je(800,40,20),new ct({uniforms:i,side:qt,depthWrite:!1,fog:!1,vertexShader:`varying vec3 vDir;
            void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`uniform vec3 uZenith, uHorizon, uGlow, uCloud, uSunDir; uniform float uTime, uStars; varying vec3 vDir;
            ${_y}
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
            }`}));return e.renderOrder=-10,e.frustumCulled=!1,e.name="sky",{dome:e,uniforms:i}}function Cp(i,e){let t=new zn,n=new Ae(new je(60,32,16),new ct({side:qt,uniforms:{uZenith:{value:new le(e.zenith)},uHorizon:{value:new le(e.horizon)},uGround:{value:new le(e.bounce)}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uZenith, uHorizon, uGround; varying vec3 vDir; void main() { vec3 d = normalize(vDir);
            vec3 c = mix(uHorizon, uZenith, smoothstep(0.0, 0.7, d.y));
            c = mix(c, uGround, smoothstep(0.02, -0.25, d.y));
            gl_FragColor = vec4(c, 1.0); }`}));t.add(n);let s=new Ae(new mt(26,26),new vt({color:new le(e.sun).multiplyScalar(e.envSun),side:gt}));s.position.copy(e.sunDir).multiplyScalar(50),s.lookAt(0,0,0),t.add(s);let r=new _s(i),o=r.fromScene(t,.04);return r.dispose(),t.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),o}var Ln=Math.PI*2;function vy(i){let e=(o,a,l=0,c=0)=>{let h=new It;return h.moveTo(l-o/2,c-a/2),h.lineTo(l+o/2,c-a/2),h.lineTo(l+o/2,c+a/2),h.lineTo(l-o/2,c+a/2),h.closePath(),h};if(i==="-")return[e(.9,.3)];if(i==="=")return[e(.9,.3*.85,0,.24),e(.9,.3*.85,0,-.24)];if(i===":"){let o=a=>{let l=new It;return l.absarc(0,a,.17,0,Ln,!1),l};return[e(.95,.3*.85),o(.4),o(-.4)]}let n=new It,s=.48,r=.3/2;return n.moveTo(-r,-s),n.lineTo(r,-s),n.lineTo(r,-r),n.lineTo(s,-r),n.lineTo(s,r),n.lineTo(r,r),n.lineTo(r,s),n.lineTo(-r,s),n.lineTo(-r,r),n.lineTo(-s,r),n.lineTo(-s,-r),n.lineTo(-r,-r),n.closePath(),[n]}function Oc(i,e,t,n){let s=i==="x"?Math.PI/4:0;return vy(i==="x"?"+":i).map(r=>{let o=new Cn(r,{depth:.3,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2,curveSegments:14});return o.translate(0,0,-.15),s&&o.rotateZ(s),o.scale(e,e,e),Mt(o,t,n)})}function Pp(i,e,t,n=null){let s=new mt(i,e,8,2);if(s.translate(i/2,0,0),n){let a=s.attributes.uv;for(let l=0;l<a.count;l++)a.setXY(l,n.u0+a.getX(l)*(n.u1-n.u0),n.v0+a.getY(l)*(n.v1-n.v0))}let r=new Ae(s,t),o=s.attributes.position.array.slice();return r.userData.wave=(a,l=0)=>{let c=s.attributes.position;for(let h=0;h<c.count;h++){let d=o[h*3],f=d/i;c.setZ(h,Math.sin(d*5.5-a*6+l)*.09*f*(i/.8))}c.needsUpdate=!0},r}function Zr(i,e,t,n=0){return[mn(.14*t,.2*t,1.3*t,"#8a5a3c",{x:i,y:n+.65*t,z:e},8),Mn(.95*t,"#4fae4a",{x:i,y:n+1.95*t,z:e}),Mn(.7*t,"#63c257",{x:i+.55*t,y:n+1.6*t,z:e+.2*t}),Mn(.68*t,"#58b84f",{x:i-.5*t,y:n+1.65*t,z:e-.15*t}),Mn(.5*t,"#7ed068",{x:i+.1*t,y:n+2.55*t,z:e+.1*t})]}function Hc(i,e,t,n=0){return[mn(.11*t,.16*t,.9*t,"#7a4e32",{x:i,y:n+.45*t,z:e},8),la(1*t,1.5*t,"#2f8f5a",{x:i,y:n+1.35*t,z:e},10),la(.8*t,1.35*t,"#38a064",{x:i,y:n+2.15*t,z:e},10),la(.56*t,1.2*t,"#49b271",{x:i,y:n+2.95*t,z:e},10)]}function yy(i){let e=new Ye,t=Cc(i.castleMats);t.group.position.set(0,0,76.5);let n=new Ye;return n.scale.setScalar(.19),n.add(t.group),e.add(n),t.group.traverse(s=>{s.isMesh&&s.castShadow&&(s.receiveShadow=!0)}),{group:e,update(s){t.update(s)}}}function My(i){let e=new Ye,t=Rt(101),n=(h,d,f,u,p,_)=>{let m=new At(h,d,11,6);return m.translate(0,d/2,0),Di(m,.13,p,.001),ri(m,(g,M,w)=>{let y=M/d,v=.07*Math.sin(Math.atan2(w,g)*4+p);return y>_+v?"#ffffff":y<.16?"#79b356":y>.45?"#8f9ccb":"#7d8abb"}),qr(m,{x:f,z:u})},s=[n(2.35,4.7,.1,-.4,3,.62),n(1.6,3.1,-1.75,-.2,8,.7),n(1.25,2.2,1.75,-.9,13,.76)];for(let[h,d,f]of[[-2.5,1.2,.42],[2.5,.6,.36],[1.2,1.9,.25]])s.push(Di(Mn(f,"#8f97b4",{x:h,y:f*.5,z:d},1),.2,5+h));e.add(Ut(s,i.mats.rock));let r=[];for(let h=0;h<15;h++){let d=.25+h*.22,f=2.35*(1-d/4.7)+.06,u=Math.sin(h*.85)*.75;r.push(Mi(.085,"#fff8e6",{x:.1+Math.sin(u)*f,y:d,z:-.4+Math.cos(u)*f,sy:.5},8))}r.push(mn(.035,.035,1.25,"#7a5a3a",{x:.1,y:4.7+.5,z:-.4},6)),r.push(Mi(.07,"#ffd54f",{x:.1,y:4.7+1.15,z:-.4},8)),e.add(Ut(r,i.mats.paint));let o=[...Oc("+",1,"#ffa726",{x:-1.95,y:.56,z:2,ry:.35,rz:.08}),...Oc("x",.95,"#29b6f6",{x:.15,y:.52,z:2.55,ry:-.1,rz:-.06}),...Oc("-",.95,"#66bb6a",{x:2.05,y:.26,z:1.85,ry:-.4})];e.add(Ut(o,i.mats.gloss));let a=[["=","#ef5350",-1.7,3.5,.9,.62],[":","#ab47bc",1.75,3.1,.7,.66],["+","#f06fa7",.5,5.4,1.1,.5]].map(([h,d,f,u,p,_],m)=>{let g=Ut(Oc(h,_,d),i.mats.gloss,{receive:!1});return g.position.set(f,u,p),g.userData={y:u,phase:m*2.1},e.add(g),g}),l=i.atlas.cell("flag-plus",128,96,(h,d,f)=>{h.fillStyle="#ef5350",h.fillRect(0,0,d,f),h.fillStyle="#ffffff",h.fillRect(d/2-9,18,18,f-36),h.fillRect(d/2-30,f/2-9,60,18)}),c=Pp(.8,.56,i.atlas.material,l);return c.position.set(.13,4.7+.82,-.4),e.add(c),{group:e,update(h){c.userData.wave(h);for(let d of a)d.position.y=d.userData.y+.16*Math.sin(h*1.3+d.userData.phase),d.rotation.y=.5*Math.sin(h*.7+d.userData.phase)}}}function Sy(i){let e=new Ye,t=[...Hc(-1.75,-.7,1.45),...Zr(1.3,-.9,1.5),...Hc(2.35,.5,1),...Zr(-.6,-1.9,1.15),...Zr(-2.5,.9,.85)];for(let[r,o,a]of[[.55,1.9,1],[1.05,2.3,.7],[-1.5,1.9,.8]]){t.push(mn(.09*a,.12*a,.34*a,"#fff3e0",{x:r,y:.17*a,z:o},8));let l=new je(.3*a,14,8,0,Ln,0,Math.PI/2);t.push(Mt(l,"#e53935",{x:r,y:.32*a,z:o,sy:.8}));for(let[c,h]of[[.4,.5],[2.4,.7],[4.3,.45],[1.2,1.15]])t.push(Mi(.045*a,"#ffffff",{x:r+Math.sin(c)*Math.sin(h)*.29*a,y:.32*a+Math.cos(h)*.24*a,z:o+Math.cos(c)*Math.sin(h)*.29*a},6))}t.push(mn(.06,.07,1.25,"#8a5a3c",{x:-.35,y:.62,z:1.55},8)),t.push(Zn(1.35,.56,.1,.05,"#d7a064",{x:-.35,y:1.2,z:1.6})),e.add(Ut(t,i.mats.paint));let n=i.atlas.cell("sign-abg",256,128,(r,o,a)=>{r.font="700 92px 'Varela Round', 'Fredoka', Arial, sans-serif",r.textAlign="center",r.textBaseline="middle",r.direction="rtl",r.fillStyle="#5a3a1e",r.fillText("\u05D0\u05D1\u05D2",o/2,a/2+6)});e.add(i.atlas.mesh([i.atlas.card(n,1.2,.6,{x:-.35,y:1.2,z:1.66})]));let s=[["\u05D0","#ffca28",.75,2.05,.45],["\u05D1","#ff8a65",2.05,1.95,-.2],["\u05D2","#81c784",-1.05,1.6,-.75],["\u05D3","#f48fb1",1.45,1.35,.75]].map(([r,o,a,l,c],h)=>{let d=new Ye;d.position.set(a,l+.75,c);let f=Ut([Zn(.52,.52,.09,.06,o,{y:-.75}),mn(.012,.012,.5,"#6d4c33",{y:-.26},5)],i.mats.paint,{receive:!1}),u=i.atlas.glyph(r,{color:"#ffffff",size:128,stroke:"rgba(90,58,30,0.55)"}),p=i.atlas.mesh([i.atlas.card(u,.44,.44,{y:-.75,z:.052}),i.atlas.card(u,.44,.44,{y:-.75,z:-.052,ry:Math.PI})]);return d.add(f,p),d.userData.phase=h*1.7,e.add(d),d});return{group:e,update(r){for(let o of s)o.rotation.z=.2*Math.sin(r*1.5+o.userData.phase),o.rotation.y=.35*Math.sin(r*.8+o.userData.phase*1.3)}}}function Ey(i){let e=new Ye,t=new Ye;t.position.set(0,.55,-.2),t.rotation.x=.42,e.add(t);let n=2.3,s=3,r=f=>.16+.26*Math.pow(1-f,1.6)+.05*Math.sin(f*Math.PI),o=[];for(let f of[-1,1]){let u=new It;u.moveTo(0,0),u.lineTo(n,0),u.lineTo(n,r(1));for(let _=9;_>=0;_--)u.lineTo(n*_/10,r(_/10));u.closePath();let p=new Cn(u,{depth:s,bevelEnabled:!1});if(p.translate(0,0,-s/2),f<0){p=p.toNonIndexed(),p.scale(-1,1,1);let _=p.attributes.position.array;for(let m=0;m<_.length;m+=9)for(let g=0;g<3;g++){let M=_[m+g];_[m+g]=_[m+6+g],_[m+6+g]=M}p.computeVertexNormals()}o.push(ri(p,f<0?"#f3ead6":"#efe4cc"))}o.push(Zn(2*n+.36,.14,s+.3,.06,"#9c5bd6",{y:-.07})),o.push(mn(.11,.11,s+.3,"#8048bd",{y:.02,rx:Math.PI/2},10)),o.push(oi(.26,.02,s*.55,"#ef5350",{x:.2,y:r(.09)+.02,z:s*.24})),o.push(oi(.26,.02,.75,"#e53935",{x:.2,y:r(.09)-.3,z:s/2+.07,rx:Math.PI/2-.25})),t.add(Ut(o,i.mats.paint));let a=f=>i.atlas.cell("page"+f,256,256,(u,p,_)=>{u.strokeStyle="#c4b08a",u.lineWidth=9,u.lineCap="round";for(let m=0;m<7;m++){let g=40+m*30,M=m===3||m===6?.55:1;u.beginPath(),u.moveTo(p-26,g),u.lineTo(p-26-(p-52)*M,g),u.stroke()}f>0&&(u.fillStyle="#ffd54f",u.beginPath(),u.arc(64,208,26,0,Ln),u.fill(),u.fillStyle="#f06fa7",u.beginPath(),u.arc(150,214,18,0,Ln),u.fill())}),l=[];for(let f of[-1,1]){let u=a(f),p=new mt(n*.86,s*.86,10,1);p.rotateX(-Math.PI/2);let _=p.attributes.position,m=p.attributes.uv;for(let g=0;g<_.count;g++){let M=(_.getX(g)+n*.43)/(n*.86)*.86+.07;_.setX(g,f*n*M),_.setY(g,r(M)+.012),m.setXY(g,u.u0+(f>0?m.getX(g):1-m.getX(g))*(u.u1-u.u0),u.v0+m.getY(g)*(u.v1-u.v0))}p.computeVertexNormals(),l.push(p)}t.add(i.atlas.mesh(l));let c=[];[["#7e57c2",1.25,.26,.9,.1],["#ef5350",1.1,.22,.82,-.25],["#29b6f6",1.15,.2,.86,.3],["#ffb300",.95,.2,.75,-.1]].reduce((f,[u,p,_,m,g])=>(c.push(Zn(p,_,m,.04,u,{x:-2.35,y:f+_/2,z:1.5,ry:g})),c.push(oi(p*.96,_*.62,m*.96,"#fff8e7",{x:-2.35+.03,y:f+_/2,z:1.5+.03,ry:g})),f+_),0),e.add(Ut(c,i.mats.paint));let h=[["\u05D0","#9c5bd6",-.9],["\u05D1","#f06fa7",.2],["\u05D2","#29b6f6",1],["\u05D3","#ffb300",-.2]].map(([f,u,p],_)=>{let m=i.atlas.sprite(i.atlas.glyph(f,{color:"#ffffff",size:128,stroke:"rgba(255,255,255,0.0)"}),.62,u);return m.userData={x:p,phase:_/4},e.add(m),m}),d=[0,1,2].map(f=>{let u=new on(new Qt({map:i.sparkle,color:"#ffe082",transparent:!0,depthWrite:!1,blending:bt}));return u.userData={x:-1.3+f*1.3,phase:f/3+.15},e.add(u),u});return{group:e,update(f){for(let u of h){let p=(f*.16+u.userData.phase)%1;u.position.set(u.userData.x+.25*Math.sin(p*6+u.userData.phase*9),1.5+p*2.6,.3-p*.5),u.material.opacity=Math.min(1,p*5)*(1-Math.max(0,p-.7)/.3)}for(let u of d){let p=(f*.22+u.userData.phase)%1;u.position.set(u.userData.x,1.3+p*2.2,.5);let _=Math.sin(p*Math.PI);u.scale.setScalar(.15+.4*_),u.material.opacity=_,u.material.rotation=f+u.userData.phase*5}}}}function by(i){let e=new Ye,t=i.heightAt(i.land.x+.5,i.land.z-.5),n=[];for(let[x,E,A,I]of[[.5,-.5,1.5,.5],[1.5,.2,.8,.55],[-.5,-1.1,.75,.5],[.2,.6,.6,.5],[1.4,-1.3,.6,.6]])n.push(Di(Mn(A,"#9c9aa3",{x,y:.02,z:E,sy:I},1),.16,20+x*7));e.add(Ut(n,i.mats.rock));let s=[],r=.5,o=-.5,a=.62,l=new ut(.42,.62,3.1,24,12);ri(l,(x,E)=>{let A=(E+1.55)/3.1;return A>.2&&A<.38||A>.6&&A<.78?"#e53935":"#ffffff"}),s.push(qr(l,{x:r,y:a+1.55,z:o})),s.push(mn(.64,.6,.12,"#546e7a",{x:r,y:a+3.16,z:o},24)),s.push(Fc(.6,.02,"#455a64",{x:r,y:a+3.42,z:o,rx:Math.PI/2},24));for(let x=0;x<8;x++)s.push(mn(.015,.015,.22,"#455a64",{x:r+Math.sin(x/8*Ln)*.6,y:a+3.32,z:o+Math.cos(x/8*Ln)*.6},5));s.push(la(.5,.5,"#e53935",{x:r,y:a+4.02,z:o},20)),s.push(Mi(.07,"#ffd54f",{x:r,y:a+4.3,z:o},8)),s.push(Zn(.3,.5,.08,.04,"#6d4c41",{x:r,y:a+.3,z:o+.6}));for(let x=0;x<6;x++)if(s.push(oi(.2,.05,.62,"#b98a5e",{x:-.9-x*.27,y:.2,z:1.15})),x%2===0)for(let E of[-.26,.26])s.push(mn(.04,.04,.5,"#8a5a3c",{x:-.9-x*.27,y:0,z:1.15+E},6));e.add(Ut(s,i.mats.paint));let c=[],h=[];[["A","#ef5350",1.75,.6,1.55,.3],["B","#ffb300",2.4,.26,1.35,-.2],["C","#42a5f5",2.05,.75,1.42,.5]].forEach(([x,E,A,I,L,F],C)=>{let k=i.heightAt(i.land.x+2.08,i.land.z+1.45)-t,O=k+(C===2?.25+.5:.25);c.push(Zn(.5,.5,.5,.06,E,{x:C===2?2.08:A,y:O,z:C===2?1.45:L,ry:F}));let H=i.atlas.glyph(x,{color:"#ffffff",size:128,font:"'Fredoka', 'Varela Round', Arial, sans-serif"}),B=C===2?2.08:A,G=C===2?1.45:L;h.push(i.atlas.card(H,.5*.8,.5*.8,{x:B+Math.sin(F)*(.5/2+.005),y:O,z:G+Math.cos(F)*(.5/2+.005),ry:F})),h.push(i.atlas.card(H,.5*.8,.5*.8,{x:B,y:O+.5/2+.005,z:G,rx:-Math.PI/2,rz:F}))}),e.add(Ut(c,i.mats.gloss)),e.add(i.atlas.mesh(h));let d=new Ae(new ut(.3,.3,.44,16),new vt({color:new le(2.2,1.9,1)}));d.position.set(r,a+3.52,o);let f=new on(new Qt({map:i.glow,color:"#ffe9a0",transparent:!0,depthWrite:!1,blending:bt,opacity:.7}));f.position.copy(d.position),f.scale.setScalar(1.9);let u=new Ye;u.position.copy(d.position);let p=new At(.55,4.2,12,1,!0);p.translate(0,-2.1,0),p.rotateZ(Math.PI/2);let _=new vt({color:"#fff3c0",transparent:!0,opacity:i.look.beam,depthWrite:!1,blending:bt,side:gt});for(let x of[0,Math.PI]){let E=new Ae(p,_);E.rotation.y=x,u.add(E)}e.add(d,f,u);let m=new Ye,g=new je(.8,20,10,0,Ln,Math.PI/2,Math.PI/2),M=[Mt(g,"#e0553f",{sx:1,sy:.55,sz:.42}),oi(1.5,.05,.6,"#fff3e0",{y:0,sx:1,sz:1}),mn(.03,.035,1.75,"#7a5a3a",{x:.05,y:.87},6)],w=new It;w.moveTo(0,0),w.lineTo(.85,0),w.lineTo(0,1.4),w.closePath(),M.push(Yr(w,.02,"#ffffff",{x:.1,y:.25},0));let y=new It;y.moveTo(0,0),y.lineTo(-.6,0),y.lineTo(0,1.05),y.closePath(),M.push(Yr(y,.02,"#fff3e0",{x:0,y:.3},0)),m.add(Ut(M,i.mats.paint,{receive:!1}));let v=i.atlas.cell("sail-abc",128,64,(x,E,A)=>{x.font="700 50px 'Fredoka', 'Varela Round', Arial, sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillStyle="#1e88e5",x.fillText("ABC",E/2,A/2+3)});m.add(i.atlas.mesh([i.atlas.card(v,.56,.28,{x:.36,y:.5,z:.014}),i.atlas.card(v,.56,.28,{x:.36,y:.5,z:-.014,ry:Math.PI})]));let S=Pp(.32,.18,new Qe({color:"#ffc83d",side:gt,roughness:.7}));S.position.set(.07,1.66,0),m.add(S),m.position.set(-3.3,-t+.02,.4),m.rotation.y=.5,e.add(m);let b=[0,1,2].map(x=>{let E=new Ye,A=new mt(.34,.1);A.translate(.17,0,0);let I=i.mats.white,L=new Ae(A,I),F=new Ae(A,I);return F.scale.x=-1,E.add(L,F),E.userData={l:L,r:F,phase:x*2.1,rad:1.6+x*.5,h:4.6+x*.35},e.add(E),E});return{group:e,y:t,update(x){u.rotation.y=x*.9,m.position.y=-t+.02+.05*Math.sin(x*1.6),m.rotation.z=.07*Math.sin(x*1.25),m.rotation.x=.04*Math.sin(x*1.7+1),S.userData.wave(x);for(let E of b){let A=E.userData,I=x*.5+A.phase;E.position.set(-1.6+Math.cos(I)*A.rad,A.h+.15*Math.sin(x*.9+A.phase),.2+Math.sin(I)*A.rad),E.rotation.y=-I-Math.PI/2;let L=.55*Math.sin(x*7+A.phase);A.l.rotation.z=L,A.r.rotation.z=-L}}}}var Au={castle:yy,math:My,hebrew:Sy,reading:Ey,english:by};function Ty(i){let e=new Ye,t=i.atlas,n=[],s=(v,S,b)=>{let x="#4caf63",E=[];E.push(Mt(new Rn(.3*b,1.7*b,6,12),x,{x:v,y:1.15*b,z:S}));for(let[A,I,L]of[[-1,.95,.7],[1,1.25,.55]])E.push(Mt(new Rn(.17*b,.4*b,4,10),x,{x:v+A*.42*b,y:I*b,z:S,rz:Math.PI/2})),E.push(Mt(new Rn(.17*b,L*b,4,10),x,{x:v+A*.66*b,y:(I+L/2+.08)*b,z:S}));return E.push(Mi(.1*b,"#ff7eb3",{x:v,y:2.34*b,z:S},8)),E};n.push(...s(1.7,-.5,1.1),...s(-2.3,-.6,.55),...s(2.6,1.5,.45));let r=-.95,o=.75;n.push(mn(.06,.075,2.5,"#8a5a3c",{x:r,y:1.25,z:o},8)),n.push(Mi(.1,"#8a5a3c",{x:r,y:2.52,z:o},8));let a=v=>{let S=new It;S.moveTo(-.72,-.23),S.lineTo(.5,-.23),S.lineTo(.78,0),S.lineTo(.5,.23),S.lineTo(-.72,.23),S.closePath();let b=new Cn(S,{depth:.08,bevelEnabled:!1});return b.translate(0,0,-.04),v<0&&b.rotateY(Math.PI),b};n.push(Mt(a(1),"#e6a15a",{x:r+.62,y:2.1,z:o+.05})),n.push(Mt(a(-1),"#dc9550",{x:r-.6,y:1.5,z:o+.05})),n.push(mn(.04,.05,1.7,"#8a5a3c",{x:.7,y:.85,z:1.9},6)),e.add(Ut(n,i.mats.paint)),e.add(Ut([Mt(new At(1.6,1.8,4,1),"#ecc77e",{x:-.7,y:.9,z:-2.1,ry:Math.PI/4+.3})],i.mats.rock));let l=(v,S)=>t.cell("flag-"+v,96,64,(b,x,E)=>{S(b,x,E),b.strokeStyle="rgba(0,0,0,0.25)",b.lineWidth=2,b.strokeRect(1,1,x-2,E-2)}),c={il:l("il",(v,S,b)=>{v.fillStyle="#fff",v.fillRect(0,0,S,b),v.fillStyle="#0038b8",v.fillRect(0,7,S,9),v.fillRect(0,b-16,S,9),v.strokeStyle="#0038b8",v.lineWidth=3,v.lineJoin="miter";for(let x of[1,-1]){v.beginPath();for(let E=0;E<3;E++){let A=-Math.PI/2*x+E*Ln/3;v[E?"lineTo":"moveTo"](S/2+Math.cos(A)*12,b/2+Math.sin(A)*12)}v.closePath(),v.stroke()}}),jp:l("jp",(v,S,b)=>{v.fillStyle="#fff",v.fillRect(0,0,S,b),v.fillStyle="#d32f2f",v.beginPath(),v.arc(S/2,b/2,17,0,Ln),v.fill()}),fr:l("fr",(v,S,b)=>{["#1e4fb8","#ffffff","#e53935"].forEach((x,E)=>{v.fillStyle=x,v.fillRect(E*S/3,0,S/3+1,b)})}),it:l("it",(v,S,b)=>{["#2e9b4f","#ffffff","#e53935"].forEach((x,E)=>{v.fillStyle=x,v.fillRect(E*S/3,0,S/3+1,b)})})},h=[t.card(c.il,.42,.28,{x:r+.36,y:2.1,z:o+.095}),t.card(c.jp,.42,.28,{x:r+.86,y:2.1,z:o+.095}),t.card(c.fr,.42,.28,{x:r-.86,y:1.5,z:o+.095}),t.card(c.it,.42,.28,{x:r-.36,y:1.5,z:o+.095})],d=new P(r,2.5,o),f=new P(.7,1.68,1.9),u=["#e53935","#ffd54f","#1e88e5","#43a047","#ffffff","#8e24aa","#ff9800"],p=[],_=[];for(let v=0;v<=8;v++){let S=v/8;p.push(new P().lerpVectors(d,f,S).setY(wy(d.y,f.y,S)-.36*Math.sin(S*Math.PI)))}for(let v=0;v<7;v++){let S=p[v+1].clone().lerp(p[v],.5),b=new It;b.moveTo(-.11,0),b.lineTo(.11,0),b.lineTo(0,-.26),b.closePath();let x=new Xi(b);_.push(Mt(x,u[v],{x:S.x,y:S.y,z:S.z,ry:Math.atan2(f.x-d.x,f.z-d.z)+Math.PI/2}))}e.add(t.mesh(h)),e.add(Ut([Bc(p,.012,"#7a5a3a",{radial:4}),..._],i.mats.flat,{receive:!1}));let m=new Ye,g=["#e53935","#ffffff","#1e88e5","#ffd54f"],M=new je(1,24,16),w=M.attributes.position;for(let v=0;v<w.count;v++){let S=w.getY(v);if(S<0){let b=1+S*.45;w.setX(v,w.getX(v)*b),w.setZ(v,w.getZ(v)*b),w.setY(v,S*1.3)}}M.computeVertexNormals(),ri(M,(v,S,b)=>g[Math.floor((Math.atan2(b,v)+Math.PI)/Ln*12)%4]);let y=[M,mn(.2,.17,.26,"#a1683a",{y:-1.95},10),Fc(.2,.025,"#7a5a3a",{y:-1.82,rx:Math.PI/2},12)];for(let v=0;v<4;v++){let S=v/4*Ln+.4;y.push(mn(.01,.01,.62,"#7a5a3a",{x:Math.cos(S)*.2,y:-1.52,z:Math.sin(S)*.2},4))}return m.add(Ut(y,i.mats.paint,{receive:!1})),m.position.set(.5,5,-1),e.add(m),{group:e,update(v){m.position.y=5+.2*Math.sin(v*.8),m.position.x=.5+.25*Math.sin(v*.33),m.rotation.y=v*.12}}}var wy=(i,e,t)=>i+(e-i)*t;function Ay(i){let e=new Ye,t=[],n=new je(2.55,14,9,0,Ln,0,Math.PI/2);Di(n,.12,31,.02),ri(n,(c,h)=>h>1.7?"#a39488":"#8f8178"),t.push(qr(n,{sy:.92,z:-.3}));for(let c=0;c<=6;c++){let h=Math.PI*(c/6),d=1.28;t.push(Di(Mn(.36+.05*(c%2),"#7c6f69",{x:Math.cos(h)*d,y:.15+Math.sin(h)*d*1.05,z:1.92-.25*Math.sin(h)},1),.18,40+c))}for(let[c,h,d]of[[-2.2,1.5,.8],[2.3,1.3,.95],[-1.3,2.5,.5],[1.5,2.5,.42],[2.8,.2,.6]])t.push(Mt(new At(.24,d,6),"#8f8178",{x:c,y:d/2,z:h}));e.add(Ut(t,i.mats.rock));let s=new Ae(new je(1.12,20,14),new vt({color:"#1d1233"}));s.scale.set(1,1.12,.42),s.position.set(0,.62,1.84),e.add(s);let r=(c,h,d,f,u)=>{let p=Rt(u),_=[];for(let g=0;g<5;g++){let M=.5+p()*.75,w=.11+p()*.08,y=d+(p()-.5)*.6,v=f+(p()-.5)*.4,S=(p()-.5)*.7,b=g%2?c:h,x=new ut(w,w,M,6);x.translate(0,M/2,0);let E=new At(w,w*1.8,6);E.translate(0,M+w*.9,0),_.push(Mt(x,b,{x:y,z:v,rz:S,rx:(p()-.5)*.4}),Mt(E,b,{x:y,z:v,rz:S}))}return Ut(_,new Qe({vertexColors:!0,roughness:.25,emissive:h,emissiveIntensity:i.look.crystal,flatShading:!0}),{receive:!1})},o=[r("#7fe8dc","#3fc8c0",-2,2,61),r("#ffa6d0","#f06fa7",2.05,2,67),r("#7fe8dc","#3fc8c0",.9,2.75,71)];e.add(...o);let a=new Ae((()=>{let c=new Cn(Vr(1.05),{depth:.26,bevelEnabled:!0,bevelThickness:.11,bevelSize:.1,bevelSegments:4,curveSegments:20});return c.translate(0,0,-.13),c})(),new Xt({color:"#ff3d63",roughness:.25,clearcoat:.8,clearcoatRoughness:.15,emissive:"#ff1f4b",emissiveIntensity:.45}));a.position.set(0,1,2.12),a.castShadow=!0;let l=new on(new Qt({map:i.glow,color:"#ff7a9c",transparent:!0,depthWrite:!1,blending:bt,opacity:.55}));return l.position.set(0,1,2),l.scale.setScalar(3),e.add(l,a),{group:e,update(c){let h=c*1.15%1,d=Math.exp(-Math.pow((h-.08)/.06,2))+.7*Math.exp(-Math.pow((h-.3)/.07,2));a.scale.setScalar(1+.13*d),l.material.opacity=.4+.3*d,l.scale.setScalar(2.8+.6*d)}}}function Ry(i){let e=new Ye,t=i.atlas,n=i.heightAt(i.land.x,i.land.z),s=[],r=[[.95,0,-.5],[1.05,.9,-.52],[1.3,1.8,-.56],[1.72,2.6,-.62]].map(u=>new P(...u));s.push(Bc(r,.15,"#9a6b45",{radial:8,seg:14}));for(let u=1;u<6;u++){let p=new Fn(r).getPoint(u/6.2);s.push(Fc(.165,.025,"#84583a",{x:p.x,y:p.y,z:p.z,rx:Math.PI/2-.2},10))}let o=r[3];for(let u=0;u<7;u++){let p=u/7*Ln+.3,_=1.55+.25*Math.sin(u*2.3),m=new mt(.5,_,2,7);m.translate(0,_/2,0);let g=m.attributes.position;for(let M=0;M<g.count;M++){let w=g.getY(M)/_,y=g.getX(M);g.setX(M,y*(1-w*.85)*(.4+Math.sin(w*Math.PI)*.9)),g.setZ(M,Math.abs(y)*.5),g.setY(M,_*(w*.55-.72*w*w)+.02),g.setZ(M,g.getZ(M)+_*.8*w)}m.computeVertexNormals(),s.push(Mt(m,u%2?"#43a853":"#5cbf63",{x:o.x,y:o.y,z:o.z,ry:p}))}s.push(Mi(.13,"#7a4e32",{x:o.x-.12,y:o.y-.12,z:o.z+.1},8),Mi(.13,"#8a5a3c",{x:o.x+.12,y:o.y-.14,z:o.z+.05},8));for(let[u,p,_]of[[-2.45,.95,.3],[-3,1.25,.27],[-3.55,1.1,.3]])s.push(mn(_,_*1.1,.16,"#b9b4ac",{x:u,y:-n+.02,z:p},10));s.push(Yr(Ac(.22,.5),.06,"#ff8a65",{x:.35,y:.06,z:1.35,rx:-Math.PI/2,rz:.4},.02)),s.push(Mt(new je(.14,10,6,0,Ln,0,Math.PI/2),"#f8bbd0",{x:-1.25,y:.02,z:1.2})),e.add(Ut(s,i.mats.paintTwoSided));let a=t.cell("card-back",128,176,(u,p,_)=>{u.fillStyle="#7e57c2",u.fillRect(0,0,p,_),u.strokeStyle="#ffffff",u.lineWidth=7,u.strokeRect(9,9,p-18,_-18),u.font="700 104px 'Fredoka', 'Varela Round', Arial, sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillStyle="#ffffff",u.fillText("?",p/2,_/2+8)}),l=(u,p)=>t.cell("card-"+u,128,176,(_,m,g)=>{_.fillStyle="#fffdf6",_.fillRect(0,0,m,g),_.strokeStyle="#7e57c2",_.lineWidth=7,_.strokeRect(9,9,m-18,g-18),_.translate(m/2,g/2),p(_)}),c=l("star",u=>{u.fillStyle="#ffc107",u.beginPath();for(let p=0;p<10;p++){let _=-Math.PI/2+p*Math.PI/5,m=p%2?19:44;u[p?"lineTo":"moveTo"](Math.cos(_)*m,Math.sin(_)*m)}u.closePath(),u.fill()}),h=l("heart",u=>{u.fillStyle="#ec407a",u.beginPath(),u.moveTo(0,38),u.bezierCurveTo(-64,-6,-30,-52,0,-18),u.bezierCurveTo(30,-52,64,-6,0,38),u.fill()}),d=[],f=[];return[[a,-1.25,-.15,-.3],[c,-.3,.1,.12],[h,.55,.35,.34],[a,-.75,.95,-.12]].forEach(([u,p,_,m],g)=>{let v=.5+(g===3?-.05:0);d.push(Zn(.82,1.12,.07,.035,u===a?"#7e57c2":"#fffdf6",{x:p,y:v,z:_,ry:m,rx:-.32}));let S=new P(0,0,1).applyEuler(new Wt(-.32,m,0,"XYZ"));f.push(t.card(u,.82*.98,1.12*.98,{x:p+S.x*.037,y:v+S.y*.037,z:_+S.z*.037,ry:m,rx:-.32}))}),e.add(Ut(d,i.mats.paint)),e.add(t.mesh(f)),{group:e,y:n}}function Cy(i){let e=new Ye,t=si,n=t.half,s=u=>i.roadY(bs+u),r=Math.atan2(t.ax,t.az),o=[],a=14;for(let u=0;u<a;u++){let p=-n-.35+(2*n+.7)*u/a,_=-n-.35+(2*n+.7)*(u+1)/a,m=(p+_)/2,g=s(p),M=s(_),w=Math.atan2(M-g,_-p);o.push(oi(2.3,.2,(_-p)/Math.cos(w)+.02,"#dccdb0",{y:(g+M)/2-.08,z:m,rx:-w})),o.push(oi(2.42,.08,(_-p)/Math.cos(w)+.02,"#c4b393",{y:(g+M)/2-.2,z:m,rx:-w}))}let l=["#ef5350","#ffa726","#ffee58","#66bb6a","#29b6f6","#7e57c2","#ec407a"],c=[];for(let u=0;u<7;u++){let p=-n+.42+(2*n-.84)*u/6,_=s(p)-.24,m=_+.75;c.push(Zn(2,m,.78,.08,l[u],{y:_-m/2,z:p}));for(let g of[-1,1])c.push(Mi(.2,l[u],{x:g*1.02,y:_-.42,z:p,sx:.7},10))}for(let u of[-1,1]){let p=[];for(let _=0;_<=6;_++){let m=-n-.2+(2*n+.4)*_/6,g=s(m);o.push(mn(.05,.06,.62,"#8a5a3c",{x:u*1.08,y:g+.3,z:m},6)),o.push(Mi(.075,"#a8743e",{x:u*1.08,y:g+.64,z:m},6)),p.push(new P(u*1.08,g+.5,m))}o.push(Bc(p,.028,"#a8743e",{radial:5,seg:30}))}e.add(Ut(o,i.mats.paint),Ut(c,i.mats.gloss)),e.rotation.y=r;let h=()=>{let u=new It,p=.5,_=.17;return u.moveTo(-p,-p),u.lineTo(-_,-p),u.absarc(0,-p+.1,_,Math.PI*1.2,Math.PI*1.8-Ln,!0),u.lineTo(p,-p),u.lineTo(p,-_),u.absarc(p+.1,0,_,Math.PI*1.2,Math.PI*.8-Ln,!1),u.lineTo(p,p),u.lineTo(_,p),u.absarc(0,p+.1,_,-Math.PI*.2,Math.PI*1.2,!1),u.lineTo(-p,p),u.lineTo(-p,_),u.absarc(-p+.1,0,_,Math.PI*.8,-Math.PI*.8,!0),u.lineTo(-p,-p),u},d=[["#ef5350",-1.3,3,-.6,.85],["#ffca28",.9,3.6,.3,.7],["#29b6f6",.2,2.7,1.5,.75]].map(([u,p,_,m,g],M)=>{let w=Ut([Yr(h(),.2,u,{s:g},.05,12)],i.mats.gloss,{receive:!1});return w.position.set(p,_,m),w.userData={y:_,phase:M*2.2},e.add(w),w}),f=bn.at(bs);return{group:e,y:0,x:f.x,z:f.z,update(u){for(let p of d)p.position.y=p.userData.y+.18*Math.sin(u*1.1+p.userData.phase),p.rotation.y=u*.5+p.userData.phase,p.rotation.z=.25*Math.sin(u*.7+p.userData.phase)}}}function Py(i){let e=new Ye,t=[],n=[],s=6,r=.68,o=s*r/2;t.push(Zn(s*r+.5,.3,s*r+.5,.08,"#7a5230",{y:.15}));for(let b=0;b<s;b++)for(let x=0;x<s;x++)t.push(oi(r,.05,r,(b+x)%2?"#7fbf7a":"#f6ecd2",{x:-o+(b+.5)*r,y:.32,z:-o+(x+.5)*r}));let a=(b,x)=>({x:-o+(b+.5)*r,z:-o+(x+.5)*r}),l="#fff8ea",c="#4b3766",h=(b,x,E,A=1)=>n.push(Ep(b.map(([I,L])=>[I*A,L*A]),x,{...E,y:.345},24)),d=[[0,0],[.3,0],[.31,.06],[.26,.1],[.2,.14]],f=[...d,[.13,.5],[.11,.9],[.2,.98],[.2,1.04],[.12,1.08],[.17,1.3],[.2,1.42],[.1,1.46],[0,1.47]],u=[...d,[.16,.5],[.15,.85],[.22,.9],[.22,1.1],[0,1.1]],p=[...d,[.1,.42],[.08,.6],[.15,.64],[.1,.7],[.15,.82],[.13,.94],[.06,1],[0,1.01]],_=[...d,[.11,.5],[.09,.82],[.17,.88],[.1,.94],[.15,1.1],[.12,1.28],[.04,1.4],[.06,1.46],[0,1.5]],m=a(1,1);h(f,l,m,1.25),n.push(oi(.07,.3,.07,l,{x:m.x,y:.345+1.47*1.25+.12,z:m.z}),oi(.22,.07,.07,l,{x:m.x,y:.345+1.47*1.25+.15,z:m.z})),m=a(4,0),h(u,l,m,1.15);for(let b=0;b<4;b++)n.push(oi(.12,.14,.12,l,{x:m.x+Math.cos(b*Math.PI/2+.78)*.2,y:.345+1.1*1.15+.06,z:m.z+Math.sin(b*Math.PI/2+.78)*.2}));m=a(0,4),h(p,l,m,1.05),m=a(3,2),h(_,c,m,1.15),m=a(5,4),h(p,c,m,1.05),m=a(2,4),h([...d,[.2,.2],[0,.2]],c,m,1.25);let g=new It,M=(b,x)=>[(b-50)/62,(79-x)/62];g.moveTo(...M(70,79)),g.lineTo(...M(31,79));let w=(b,x,E)=>g.bezierCurveTo(...M(...b),...M(...x),...M(...E));w([30,68],[35,60],[44,54]),w([47,52],[48,49],[46,47]),w([40,49],[33,51],[27,50]),w([20,49],[18,43],[21,39]),w([26,32],[34,24],[40,19]),g.lineTo(...M(39,9)),g.lineTo(...M(47,15)),w([50,13],[53,12],[57,12]),w([70,13],[79,27],[79,45]),w([79,60],[73,69],[70,79]),n.push(Yr(g,.3,c,{x:m.x,y:.345+.22,z:m.z,ry:-.5,s:1.25},.05,14)),e.add(Ut(n,i.mats.gloss));let y="#3f9a4f";t.push(Zn(s*r+1.9,.75,.6,.22,y,{y:.37,z:-o-.95})),t.push(Zn(.6,.75,s*r+.7,.22,y,{x:o+.95,y:.37,z:-.3})),t.push(Zn(.6,.75,s*r*.55,.22,y,{x:-o-.95,y:.37,z:-o*.5-.1}));let v=Rt(88),S=["#ff7eb3","#ffd54f","#ffffff","#c9a4ff","#ff9e80"];for(let b=0;b<26;b++){let x=v(),E=b%3,A=E===0?(x-.5)*(s*r+1.6):E===1?o+.95+(v()-.5)*.4:-o-.95+(v()-.5)*.4,I=E===0?-o-.95+(v()-.5)*.4:E===1?(x-.5)*(s*r+.4)-.3:-o*.5-.1+(x-.5)*s*r*.5;t.push(Mn(.085,S[b%5],{x:A,y:.76+v()*.04,z:I,sy:.7},0))}for(let[b,x]of[[o+.95,o+.35],[-o-.95,.75]])t.push(mn(.07,.09,.5,"#8a5a3c",{x:b,y:.25,z:x},6),Mn(.5,"#4fae4a",{x:b,y:.85,z:x}),Mn(.3,"#63c257",{x:b,y:1.4,z:x}));return e.add(Ut(t,i.mats.paint)),{group:e}}Object.assign(Au,{geography:Ty,biology:Ay,memory:Ry,puzzle:Cy,chess:Py});var Iy=Math.PI*2,As=i=>Xn(i.map(e=>{let t=e.index?e.toNonIndexed():e;return t.attributes.uv||t.setAttribute("uv",new xt(new Float32Array(t.attributes.position.count*2),2)),t}),!1);function Ip(i){let e=new Ye;e.name="scenery";let t=Rt(2024),{heightAt:n}=i,s=(S,b,x)=>{if(n(S,b)<.42)return!1;let E=bn.near(S,b,x+.5);if(E&&E.d<x||Dc.near(S,b,2.6))return!1;for(let A of Es)if(Math.hypot(S-A.x,b-A.z)<A.r+.9)return!1;return!0},r={tree:[],pine:[],bush:[],rock:[],cactus:[],flower:[],blossom:[]};for(let S=0;S<2600;S++){let b=-34+t()*68,x=-64+t()*124,E=n(b,x),A=ha(b,x),I=t(),L=.75+t()*.6;if(E>5.2)continue;if(A.mountain>.35){A.mountain<.8&&I<.4&&s(b,x,2.4)?r.pine.push([b,E,x,L*1.1]):I<.5&&s(b,x,2)&&r.rock.push([b,E,x,L]);continue}if(A.forest>.4){I<.75&&s(b,x,2.6)&&r[I<.4?"tree":"pine"].push([b,E,x,L*1.05]);continue}if(A.desert>.5){I<.1&&s(b,x,2.2)?r.cactus.push([b,E,x,L]):I<.2&&s(b,x,1.6)&&r.rock.push([b,E,x,L*.8]);continue}if(A.rocky>.5){I<.35&&s(b,x,1.8)&&r.rock.push([b,E,x,L]);continue}let F=ws(b*.11,x*.11,77)>.12;if(I<(F?.36:.05)){if(s(b,x,2.7)){let C=t();r[C<.62?"tree":C<.86?"pine":"blossom"].push([b,E,x,L*.9])}}else I<.42?s(b,x,1.5)&&r.bush.push([b,E,x,L]):I<.47?s(b,x,1.5)&&r.rock.push([b,E,x,L*.6]):s(b,x,1.25)&&r.flower.push([b,E,x,L])}let o=new it,a=new zt,l=new Wt,c=new P,h=new P,d=new le,f=(S,b,x,{shade:E=.12,cast:A=!0,sink:I=0,tilt:L=0}={})=>{if(!S.length)return;let F=new Ot(b,x,S.length);S.forEach(([C,U,k,O],H)=>{a.setFromEuler(l.set((t()-.5)*L,t()*Iy,(t()-.5)*L)),F.setMatrixAt(H,o.compose(c.set(C,U-I*O,k),a,h.set(O,O*(.9+t()*.2),O)));let B=1+(t()-.5)*2*E;F.setColorAt(H,d.setRGB(B*(1+(t()-.5)*E),B,B*(1+(t()-.5)*E)))}),F.castShadow=A,F.receiveShadow=!0,e.add(F)};f(r.tree,As(Zr(0,0,1)),i.mats.paint),f(r.pine,As(Hc(0,0,.95)),i.mats.paint),f(r.blossom,As(Zr(0,0,1).map((S,b)=>b?ri(S,["#ff9ec4","#ffb7d5","#ff8fba","#ffd0e4"][b-1]):S)),i.mats.paint,{shade:.06}),f(r.bush,As([Mn(.42,"#4aa648",{x:-.3,y:.3,sy:.8}),Mn(.5,"#5ab850",{x:.12,y:.38,z:.1,sy:.85}),Mn(.36,"#3f9a44",{x:.52,y:.26,z:-.12,sy:.8})]),i.mats.paint),f(r.rock,As([Di(Mn(.55,"#a6a3ac",{y:.22,sy:.7},1),.2,3),Di(Mn(.32,"#96939d",{x:.5,y:.14,z:.2,sy:.7},1),.2,7)]),i.mats.rock,{shade:.08}),f(r.cactus,As([Mt(new Rn(.18,.75,4,10),"#4caf63",{y:.55}),Mt(new Rn(.1,.2,4,8),"#4caf63",{x:.25,y:.55,rz:Math.PI/2}),Mt(new Rn(.1,.32,4,8),"#4caf63",{x:.4,y:.78}),Mt(new Rn(.1,.18,4,8),"#4caf63",{x:-.24,y:.42,rz:Math.PI/2}),Mt(new Rn(.1,.26,4,8),"#4caf63",{x:-.38,y:.62})]),i.mats.paint,{shade:.06});let u=[];for(let S=0;S<2400&&u.length<70;S++){let b=-44+t()*88,x=-96+t()*74,E=ha(b,x),A=.75+t()*.75+(E.mountain-.6)*.8;E.mountain<.6||u.some(I=>Math.hypot(I[0]-b,I[2]-x)<2.1*(A+I[3]))||u.push([b,n(b,x)-.5,x,A])}let p=new At(2.6,4.6,11,6);p.translate(0,2.3,0),Di(p,.14,17,.001),ri(p,(S,b,x)=>{let E=b/4.6,A=.07*Math.sin(Math.atan2(x,S)*4);return E>.58+A?"#ffffff":E>.3?"#8f9ccb":"#7d8abb"}),f(u,As([p]),i.mats.rock,{shade:.05});let _=["#ff7eb3","#ffd54f","#ffffff","#c9a4ff","#ff9e80","#8fd3ff"].map(S=>new le(S)),m=[];for(let[S,,b]of r.flower)for(let x=0;x<5;x++){let E=S+(t()-.5)*1.1,A=b+(t()-.5)*1.1;m.push([E,n(E,A),A,Math.floor(t()*_.length)])}let g=new Ot(new Gn(.09,0),new Qe({roughness:.6}),m.length);m.forEach(([S,b,x,E],A)=>{g.setMatrixAt(A,o.compose(c.set(S,b+.1,x),a.identity(),h.set(1,.75,1))),g.setColorAt(A,_[E])}),g.receiveShadow=!0,e.add(g);let w=As([[0,0,0,1],[.95,-.1,.1,.72],[-.9,-.12,-.1,.68],[.35,.32,-.05,.62],[-.4,.2,.3,.55]].map(([S,b,x,E])=>Mn(E,"#ffffff",{x:S,y:b*1.2,z:x,sy:.62},2))),y=new Qe({color:"#ffffff",roughness:1,emissive:"#dfeaff",emissiveIntensity:i.look.cloudGlow,transparent:!0,opacity:.93,fog:!1}),v=[];for(let S=0;S<9;S++){let b=new Ae(w,y),x=S%2?1:-1;b.userData={x:(t()-.5)*80,z:-58+S*13.5+t()*5,y:8.5+t()*3.5,speed:.18+t()*.2,lane:x*(22+t()*12)},b.scale.setScalar(2.1+t()*1.6),b.castShadow=!1,e.add(b),v.push(b)}return{group:e,update(S){for(let b of v){let x=b.userData,E=(x.x+S*x.speed+40)%80-40;b.position.set(x.lane+E*.12,x.y+.2*Math.sin(S*.3+x.z),x.z+E*.3)}}}}var zc=2.25,Ru=.3;function Lp(i,e){let t=Ic();t.skin.emissiveIntensity=.04;let n=["yoovy","googy"].map(m=>{let g=oa(m,i.faces[m],t,{royal:!1});return g.root.scale.setScalar(zc),g.root.traverse(M=>{M.isMesh&&(M.castShadow=!1)}),g.side=m==="yoovy"?-1:1,g.blink=2+Math.random()*3,g}),s=new Ye;s.name="sisters";for(let m of n)s.add(m.root);let r=0,o=0,a=0,l=-1,c=1,h=0,d=0,f=-10,u=0,p=null,_=new P;return{group:s,get walking(){return l>=0},get s(){return r},go(m,g,M){let w=Xr(m);if(w){if(M||Math.abs(w.s-r)<.05){r=o=a=w.s,l=-1,d=0;return}o=r,a=w.s,l=g,c=ln(Math.abs(a-o)/13,.75,2.4)}},update(m,g){let M=0,w=1;if(l>=0){let F=ln((m-l)/c),C=F*F*(3-2*F),U=r;r=Sn(o,a,C),h+=Math.abs(r-U)/zc,w=a>=o?1:-1,M=Fe(0,.12,F)*Fe(1,.86,F),F>=1&&(l=-1,f=m)}let y=bn.at(r),v=e(r)+.06,b=(l>=0?Math.atan2(y.tx*w,y.tz*w):0)-d;b=Math.atan2(Math.sin(b),Math.cos(b)),d+=b*Math.min(1,g*9);let x=Math.cos(d),E=-Math.sin(d),A=(m-f)/.5,I=A>0&&A<1?.1*4*A*(1-A):0;l<0&&m>u&&(p={kind:Math.random()<.5?"wave":"look",who:Math.random()<.5?0:1,at:m},u=m+5+Math.random()*5);let L=p?(m-p.at)/1.7:2;return L>1&&(p=null),n.forEach((F,C)=>{F.blink-=g;let U="open";F.blink<.13&&(U="blink"),F.blink<0&&(F.blink=2.2+Math.random()*3.5),(I>0||p&&p.kind==="wave"&&p.who===C)&&(U="laugh");let k=p?Fe(0,.18,L)*Fe(1,.8,L):0;F.update(m,{x:y.x+x*F.side*Ru*zc,y:v,z:y.z+E*F.side*Ru*zc,turn:d+(l<0?-F.side*.16:0),walk:M,dist:h,hold:M,holdSide:-F.side,holdTarget:_.set(-F.side*Ru,.44,.06),jump:I,squash:-.012*Math.sin(m*2.1+C*1.7),wave:p&&p.kind==="wave"&&p.who===C?k:0,waveSide:F.side,look:p&&p.kind==="look"?-F.side*.5*k:0,cheer:I>0?Fe(0,.3,A)*Fe(1,.7,A):0,face:U})}),l>=0||I>0||!!p}}}var Ys=Math.PI/180,Ly={day:{zenith:"#3b8de8",horizon:"#cfeaff",glow:"#fff1cc",cloud:"#ffffff",bounce:"#86b45c",sun:"#ffedc8",sunDir:new P(-.56,.66,.5).normalize(),sunPower:3,envSun:5,hemiSky:"#cfe2ff",hemiGround:"#8d86b8",hemiPower:.5,envPower:.36,fog:"#c9e2f5",fogDensity:.0028,exposure:1,bloom:[.18,.55,1.1],stars:0,shallow:"#62e2d6",deep:"#2389d8",glint:1,vignette:.3,beam:.05,crystal:.35,cloudGlow:.35,windows:[1.35,1.12,.85]}},kc=34,Dy=16.5,Ny=34,Uy=60,Zs=-44.5,Cu=40;async function Dp(i,e={}){let{renderer:t,bloom:n}=i,s=e.breath||(()=>new Promise(V=>setTimeout(V,0))),r=Ly.day,o=new zn;o.fog=new Ns(new le(r.fog),r.fogDensity);let a=new Zt(kc,1,1,1600),l=wp();o.add(l.ground,l.road),await s();let c=Ap(l.heightMap);o.add(c.mesh);let h=Rp();o.add(h.dome);let d=Cp(t,r);o.environment=d.texture,o.environmentIntensity=r.envPower,o.add(Eu(r.vignette)),await s();let f=i.texture("stone",()=>Ec()),u=i.texture("window",()=>wc()),p=(V,Q)=>{let ie=i.texture(V,()=>bc(Q));return new Xt({map:ie.map,normalMap:ie.normalMap,roughness:.5,clearcoat:.35,clearcoatRoughness:.3})},_=new le(...r.windows),m={look:r,stage:i,heightAt:l.heightAt,roadY:l.roadY,atlas:new Uc(2048,1024),sparkle:ys(),glow:qn(2),mats:{paint:new Qe({vertexColors:!0,roughness:.78}),gloss:new Xt({vertexColors:!0,roughness:.3,clearcoat:.6,clearcoatRoughness:.25}),rock:new Qe({vertexColors:!0,roughness:.95,flatShading:!0}),white:new Qe({color:"#ffffff",roughness:.8,side:gt}),paintTwoSided:new Qe({vertexColors:!0,roughness:.8,side:gt}),flat:new Qe({vertexColors:!0,roughness:.8,side:gt})},castleMats:{castleStone:new Qe({map:f.map,normalMap:f.normalMap,normalScale:new ae(.9,.9),roughness:.86}),roofPink:p("shinglesPink","#e2559a"),roofPurple:p("shinglesPurple","#7a4ae0"),carpet:new Qe({map:i.texture("carpet",()=>Tc()),roughness:.9}),window:new vt({map:u,transparent:!0,color:_}),windowLit:new vt({map:u,transparent:!0,vertexColors:!0,color:_})}},g=[];for(let V of Es){let Q=Au[V.key];if(!Q)continue;m.land=V;let ie=Q(m);ie.group.position.set(ie.x??V.x,ie.y??l.heightAt(V.x,V.z),ie.z??V.z),ie.group.name="land-"+V.key,o.add(ie.group),g.push({L:V,...ie}),await s()}let M=Ip(m);o.add(M.group),await s();let w=Lp(i,l.roadY);o.add(w.group),await s();let y=new zs(new le(r.hemiSky),new le(r.hemiGround),r.hemiPower),v=new ds(new le(r.sun),r.sunPower);v.castShadow=!0,v.shadow.autoUpdate=!1,v.shadow.bias=-7e-4,v.shadow.normalBias=.06,v.shadow.radius=2.2,o.add(y,v,v.target);let S=V=>{let Q=new P(0,0,-2);v.target.position.copy(Q),v.position.copy(Q).addScaledVector(r.sunDir,150),v.updateMatrixWorld(),v.target.updateMatrixWorld();let ie=new it().lookAt(v.position,Q,new P(0,1,0)).invert();ie.multiply(new it().makeTranslation(-v.position.x,-v.position.y,-v.position.z));let q=new Kn,se=new P;for(let xe of[-30,30])for(let Te of[-1,13])for(let Be of[-68,62])q.expandByPoint(se.set(xe,Te,Be).applyMatrix4(ie));let fe=v.shadow.camera;fe.left=q.min.x,fe.right=q.max.x,fe.bottom=q.min.y,fe.top=q.max.y,fe.near=Math.max(1,-q.max.z-5),fe.far=-q.min.z+5,fe.updateProjectionMatrix(),v.shadow.map&&v.shadow.mapSize.x!==V&&(v.shadow.map.dispose(),v.shadow.map=null),v.shadow.mapSize.set(V,V),v.shadow.needsUpdate=!0},b=V=>{let Q=g.find(ie=>ie.L.key===V);return Q?Q.group.position.y:.6},x={x:0,y:.6,z:Zs,d:50,pitch:46*Ys,shift:0},E={scroll:0,focus:null,inset:0},A=1,I=0,L=()=>ln(Dy/2/(Math.tan(kc*Ys/2)*A),Ny,Uy),F=()=>{if(E.focus){let Q=E.focus,ie=Math.tan(kc*Ys/2),q=ln(1-E.inset/Math.max(1,i.height),.25,1),se=.8*Q.h+1.1*Q.r,fe=2.3*Q.r+1.6,xe=Math.max(se/(2*ie*q),fe/(2*ie*A));return{x:Q.x*.72,y:b(Q.key)+Q.h*.36,z:Q.z+.5,d:ln(xe,15,46),pitch:38*Ys,shift:E.inset/2}}let V=Sn(Zs,Cu,E.scroll);return{x:0,y:.6,z:V,d:L(),pitch:Sn(40,47,Fe(Zs,Zs+16,V))*Ys,shift:0}},C=(V,Q)=>{let ie=F(),q=Q?1:1-Math.exp(-V*(E.focus?5.5:14)),se=!1;for(let fe in ie)x[fe]+=(ie[fe]-x[fe])*q,Math.abs(ie[fe]-x[fe])>(fe==="pitch"?5e-4:fe==="shift"?.4:.004)&&(se=!0);return se},U=()=>{a.position.set(x.x,x.y+x.d*Math.sin(x.pitch),x.z+x.d*Math.cos(x.pitch)),a.lookAt(x.x,x.y,x.z),x.shift>.5?a.setViewOffset(i.width,i.height,0,x.shift,i.width,i.height):a.view&&a.clearViewOffset(),a.updateProjectionMatrix(),a.updateMatrixWorld()},k=new Map,O=(V=0)=>{I+=V,U(),h.dome.position.copy(a.position),h.uniforms.uTime.value=I,c.uniforms.uTime.value=I;for(let ie of g){ie.update&&ie.update(I);let q=k.get(ie.L.key);if(q!==void 0){let se=(I-q)/.45;se>=1?(k.delete(ie.L.key),ie.group.scale.setScalar(1)):ie.group.scale.setScalar(1+.07*Math.sin(se*Math.PI)*(1-se*.5))}}M.update(I);let Q=w.update(I,V);return t.toneMapping=xi,t.toneMappingExposure=r.exposure,n.strength=r.bloom[0],n.radius=r.bloom[1],n.threshold=r.bloom[2],i.render(),Q||k.size>0};h.uniforms.uZenith.value.set(r.zenith),h.uniforms.uHorizon.value.set(r.horizon),h.uniforms.uGlow.value.set(r.glow),h.uniforms.uCloud.value.set(r.cloud),h.uniforms.uSunDir.value.copy(r.sunDir),h.uniforms.uStars.value=r.stars,c.uniforms.uShallow.value.set(r.shallow),c.uniforms.uDeep.value.set(r.deep),c.uniforms.uSunDir.value.copy(r.sunDir),c.uniforms.uGlint.value=r.glint;let H=new P,B=new P,G=V=>(V.project(a),{x:(V.x*.5+.5)*i.width,y:(-V.y*.5+.5)*i.height,z:V.z}),D=V=>{let Q=V.L,ie=V.group.position.y,q=Q.key==="castle"?G(H.set(Q.x,ie+Q.h+1.4,Q.z-1.2)):G(H.set(Q.x+Math.sign(Q.x)*.5,ie,Q.z+Q.r*.95)),se=G(H.set(Q.x,ie+1.3,Q.z)),fe=G(B.set(Q.x+Q.r,ie+1.3,Q.z));return{key:Q.key,x:q.x,y:q.y,above:Q.key==="castle",cx:se.x,cy:se.y,r:Math.abs(fe.x-se.x),seen:se.z<1&&se.y>-80&&se.y<i.height+80}},J=0,Y=!1,ue=0,me=0,Pe=0,K=0,ne=null,pe=null,De=!0,ve=()=>{if(!pe)return;let V=pe.clientWidth,Q=pe.clientHeight;!V||!Q||V===i.width&&Q===i.height||(i.resize(V,Q),C(0,!0),O(0),ne&&ne())},ze=V=>{if(!Y)return;J=requestAnimationFrame(ze);let Q=Math.min(.1,(V-ue)/1e3);ue=V;let ie=C(Q);if(!ie&&!De&&V-me<31)return;let q=Math.min(.1,(V-me)/1e3);me&&q>.045&&(ie||De)&&Pe++,++K>=40&&(Pe>26&&i.tier>0&&i.setTier(i.tier-1),K=Pe=0),me=V,De=O(q),ne&&ne()},et={scene:o,camera:a,onTier(V){S(V.shadow||1024)},onResize(V){A=V,a.aspect=V},attach(V,Q={}){pe=V,ne=Q.onFrame||null,i.use(et),v.shadow.needsUpdate=!0,i.canvas.parentNode!==V&&V.appendChild(i.canvas);let ie=V.clientWidth||innerWidth,q=V.clientHeight||innerHeight;(ie!==i.width||q!==i.height)&&i.resize(ie,q),C(0,!0),O(0),ne&&ne(),Y||(Y=!0,ue=me=performance.now(),K=Pe=0,J=requestAnimationFrame(ze),window.addEventListener("resize",ve))},detach(){Y=!1,cancelAnimationFrame(J),window.removeEventListener("resize",ve)},get attached(){return Y},step(V=1/60){C(V),De=O(V),ne&&ne()},metrics(){let V=L();return{pxPerUnit:i.height/2/(V*Math.tan(kc*Ys/2))*Math.sin(47*Ys),range:Cu-Zs}},setScroll(V,Q){E.scroll=ln(V),Q&&C(0,!0)},scrollOf(V){let Q=Xr(V);return Q?ln((Q.z+3-Zs)/(Cu-Zs)):0},focus(V,Q=0){E.focus=V?Xr(V):null,E.inset=Q},walkTo(V,Q){w.go(V,I,Q),De=!0},bounce(V){k.set(V,I),De=!0},spots(){return g.map(D)},pick(V,Q){let ie=null,q=1;for(let se of g){let fe=D(se),xe=Math.hypot(V-fe.cx,Q-fe.cy)/(fe.r*1.08);fe.seen&&xe<q&&(q=xe,ie=fe.key)}return ie},fits(){i.use(et);let V=t.getContext(),Q=new Uint8Array(4),ie=()=>V.readPixels(0,0,1,1,V.RGBA,V.UNSIGNED_BYTE,Q);for(let q=i.tier;q>=0;q--){i.setTier(q),E.scroll=.4,C(0,!0),O(0),ie();let se=performance.now();if(E.scroll=.6,C(0,!0),O(.016),ie(),E.scroll=.2,C(0,!0),O(.016),ie(),(performance.now()-se)/2<(q?26:45))return!0}return!1},info(){let V=t.info;return{calls:V.render.calls,triangles:V.render.triangles,geometries:V.memory.geometries,textures:V.memory.textures,tier:i.tier}},renderAt({scroll:V=0,focus:Q=null,inset:ie=0,w:q,h:se,t:fe,at:xe=null}={}){i.use(et),q&&se&&i.resize(q,se),E.scroll=V,E.focus=Q?Xr(Q):null,E.inset=ie,fe!==void 0&&(I=fe),xe&&w.go(xe,I,!0),C(0,!0),O(0)},release(){et.detach(),Rc(i,o),v.shadow.map&&(v.shadow.map.dispose(),v.shadow.map=null)}};return i.use(et),w.go(e.at||"castle",0,!0),C(0,!0),O(0),t.compileAsync&&await t.compileAsync(o,a),et}var Ni=null,Gc=null,ai=null,Ht=null,ua=null;function Fy(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}window.Kingdom3D={supported:Fy,start(i){return Gc||(Gc=tp(i).then(e=>(Ni=e,e))),Gc.then(()=>{})},get canvas(){return Ni?Ni.canvas:null},get tier(){return Ni?Ni.tier:-1},film:{timeline:Mp,get ready(){return!!ai},async prepare(){ai||(ai=await Sp(Ni))},fits(){return ai.fits()},play(i,e){return ai.play(i,e)},renderAt(i,e,t){ai.renderAt(i,e,t)},release(){ai&&(ai.release(),ai=null)}},world:{get ready(){return!!Ht},prepare(i){return ua||(ua=Dp(Ni,i).then(e=>{Ht=e})),ua},fits(){return Ht.fits()},attach(i,e){Ht.attach(i,e)},detach(){Ht&&Ht.detach()},get attached(){return!!Ht&&Ht.attached},step(i){Ht.step(i)},metrics(){return Ht.metrics()},setScroll(i,e){Ht.setScroll(i,e)},scrollOf(i){return Ht.scrollOf(i)},focus(i,e){Ht.focus(i,e)},walkTo(i,e){Ht.walkTo(i,e)},bounce(i){Ht.bounce(i)},spots(){return Ht.spots()},pick(i,e){return Ht.pick(i,e)},info(){return Ht.info()},renderAt(i){Ht.renderAt(i)},release(){Ht&&(Ht.release(),Ht=null),ua=null}},dispose(){ai&&(ai.release(),ai=null),Ht&&(Ht.release(),Ht=null),ua=null,Ni&&(Ni.dispose(),Ni=null),Gc=null}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
