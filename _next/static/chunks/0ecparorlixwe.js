(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in r)Object.defineProperty(a,o,{enumerable:!0,get:r[o]});let n=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:a}=e,r=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:a&&(c=t+(~a.indexOf(":")?`[${a}]`:a),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let h=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),h&&"?"!==h[0]&&(h="?"+h),o=o.replace(/[?#]/g,encodeURIComponent),h=h.replace("#","%23"),`${r}${c}${o}${h}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(71645);function o(e,t){let a=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=a.current;e&&(a.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(a.current=n(e,r)),t&&(o.current=n(t,r))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},73668,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return n}});let r=e.r(18967),o=e.r(52817);function n(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),a=new URL(e,t);return a.origin===t&&(0,o.hasBasePath)(a.pathname)}catch(e){return!1}}},84508,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={default:function(){return v},useLinkStatus:function(){return x}};for(var o in r)Object.defineProperty(a,o,{enumerable:!0,get:r[o]});let n=e.r(90809),i=e.r(43476),s=n._(e.r(71645)),l=e.r(95057),c=e.r(8372),h=e.r(18581),d=e.r(18967),u=e.r(5550);e.r(33525);let p=e.r(88540),f=e.r(91949),m=e.r(73668),g=e.r(9396);function v(t){var a,r;let o,n,v,[x,b]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:j,as:T,children:k,prefetch:A=null,passHref:C,replace:R,shallow:S,scroll:M,onClick:_,onMouseEnter:P,onTouchStart:I,legacyBehavior:E=!1,onNavigate:N,transitionTypes:L,ref:O,unstable_dynamicOnHover:F,...D}=t;o=k,E&&("string"==typeof o||"number"==typeof o)&&(o=(0,i.jsx)("a",{children:o}));let B=s.default.useContext(c.AppRouterContext),U=!1!==A,q=!1!==A?null===(r=A)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,$="string"==typeof(a=T||j)?a:(0,l.formatUrl)(a);if(E){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let W=E?n&&"object"==typeof n&&n.ref:O,Y=s.default.useCallback(e=>(null!==B&&(w.current=(0,f.mountLinkInstance)(e,$,B,q,U,b)),()=>{w.current&&((0,f.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,f.unmountPrefetchableInstance)(e)}),[U,$,B,q,b]),z={ref:(0,h.useMergedRef)(Y,W),onClick(t){E||"function"!=typeof _||_(t),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!B||t.defaultPrevented||function(t,a,r,o,n,i,l){if("u">typeof window){let c,{nodeName:h}=t.currentTarget;if("A"===h.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(a)){o&&(t.preventDefault(),location.replace(a));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(a,o?"replace":"push",!1===n?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,r.current,l)})}}(t,$,w,R,M,N,L)},onMouseEnter(e){E||"function"!=typeof P||P(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),B&&U&&(0,f.onNavigationIntent)(e.currentTarget,!0===F)},onTouchStart:function(e){E||"function"!=typeof I||I(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),B&&U&&(0,f.onNavigationIntent)(e.currentTarget,!0===F)}};return(0,d.isAbsoluteUrl)($)?z.href=$:E&&!C&&("a"!==n.type||"href"in n.props)||(z.href=(0,u.addBasePath)($)),v=E?s.default.cloneElement(n,z):(0,i.jsx)("a",{...D,...z,children:o}),(0,i.jsx)(y.Provider,{value:x,children:v})}e.r(84508);let y=(0,s.createContext)(f.IDLE_LINK_STATUS),x=()=>(0,s.useContext)(y);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},18566,(e,t,a)=>{t.exports=e.r(76562)},73478,e=>{"use strict";var t=e.i(43476),a=e.i(22016),r=e.i(18566),o=e.i(71645);e.s(["SiteNav",0,function(){let e=(0,r.usePathname)(),[n,i]=(0,o.useState)(!1),[s,l]=(0,o.useState)("light");return(0,o.useEffect)(()=>{let e="dark"===document.documentElement.dataset.theme?"dark":"light",t=requestAnimationFrame(()=>l(e));return()=>cancelAnimationFrame(t)},[]),(0,t.jsxs)("header",{className:"site-header",children:[(0,t.jsxs)(a.default,{href:"/",className:"brand-mark","aria-label":"Jace Wong — home",onClick:()=>i(!1),children:[(0,t.jsx)("span",{children:"JW"}),(0,t.jsx)("i",{"aria-hidden":"true"})]}),(0,t.jsx)("nav",{className:n?"main-nav is-open":"main-nav",children:[{label:"Index",href:"/"},{label:"Writing",href:"/blog"}].map(r=>{let o="/blog"===r.href?e.startsWith("/blog"):"/"===e&&"/"===r.href;return(0,t.jsx)(a.default,{href:r.href,className:o?"is-active":void 0,onClick:()=>i(!1),children:(0,t.jsx)("span",{children:r.label})},r.label)})}),(0,t.jsxs)("div",{className:"nav-actions",children:[(0,t.jsxs)("button",{className:"theme-toggle",type:"button",onClick:function(){let e="light"===s?"dark":"light";l(e),document.documentElement.dataset.theme=e,localStorage.setItem("jace-theme",e)},"aria-label":`Switch to ${"light"===s?"dark":"light"} mode`,children:[(0,t.jsx)("span",{className:"theme-orbit","aria-hidden":"true",children:(0,t.jsx)("i",{})}),(0,t.jsx)("span",{children:"light"===s?"Nocturne":"Daylight"})]}),(0,t.jsxs)("button",{className:n?"menu-toggle is-open":"menu-toggle",type:"button",onClick:()=>i(e=>!e),"aria-label":"Toggle navigation","aria-expanded":n,children:[(0,t.jsx)("i",{}),(0,t.jsx)("i",{})]})]})]})}])},31713,e=>{"use strict";var t=e.i(43476),a=e.i(22016),r=e.i(71645);let o=`
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,n=`
  precision highp float;

  uniform vec2 u_resolution;
  uniform vec2 u_pointer;
  uniform float u_time;

  #define PI 3.14159265359

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(
        mix(hash31(i), hash31(i + vec3(1.0, 0.0, 0.0)), f.x),
        mix(hash31(i + vec3(0.0, 1.0, 0.0)), hash31(i + vec3(1.0, 1.0, 0.0)), f.x),
        f.y
      ),
      mix(
        mix(hash31(i + vec3(0.0, 0.0, 1.0)), hash31(i + vec3(1.0, 0.0, 1.0)), f.x),
        mix(hash31(i + vec3(0.0, 1.0, 1.0)), hash31(i + vec3(1.0, 1.0, 1.0)), f.x),
        f.y
      ),
      f.z
    );
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise3(p);
      p = p * 2.03 + vec3(13.1, 7.7, 5.3);
      amplitude *= 0.5;
    }
    return value;
  }

  mat2 rotate2d(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  vec3 rotateY(vec3 p, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  }

  void main() {
    vec2 frag = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv = frag - 0.5;
    uv.x *= u_resolution.x / u_resolution.y;

    vec2 pointer = (u_pointer - 0.5) * 2.0;
    float time = u_time * 0.12;

    vec3 color = mix(
      vec3(0.004, 0.006, 0.012),
      vec3(0.009, 0.018, 0.038),
      smoothstep(-0.55, 0.5, uv.y)
    );

    vec2 gridFrequency = vec2(24.0, 15.0);
    vec2 gridCell = fract(frag * gridFrequency);
    vec2 gridDistance = min(gridCell, 1.0 - gridCell);
    float gridLine = 1.0 - smoothstep(0.0, 0.035, min(gridDistance.x, gridDistance.y));
    float gridFade = smoothstep(0.0, 0.25, frag.y) * smoothstep(1.0, 0.56, frag.y);
    color += vec3(0.035, 0.10, 0.24) * gridLine * gridFade * 0.28;

    float nebula = fbm(vec3(uv * 1.55 + vec2(time * 0.018, 0.0), time * 0.025));
    float nebulaMask = smoothstep(0.48, 0.86, nebula) * smoothstep(0.8, -0.25, length(uv));
    color += vec3(0.055, 0.07, 0.16) * nebulaMask * 0.55;

    vec2 starGrid = (uv + vec2(4.0)) * vec2(190.0, 135.0);
    vec2 starCell = floor(starGrid);
    vec2 starPoint = fract(starGrid) - 0.5;
    float starRandom = hash21(starCell);
    float star = smoothstep(0.048, 0.0, length(starPoint));
    star *= smoothstep(0.992, 1.0, starRandom);
    star *= 0.62 + 0.38 * sin(time * 2.0 + starRandom * 20.0);
    color += vec3(0.72, 0.8, 1.0) * star;

    vec2 center = vec2(pointer.x * 0.017, 0.115 + pointer.y * 0.012);
    float radius = min(0.245, (u_resolution.x / u_resolution.y) * 0.47);
    vec2 fromCenter = uv - center;
    float sphereDistance = length(fromCenter) / radius;

    vec2 ringSpace = rotate2d(-0.08 + pointer.x * 0.015) * fromCenter;
    float ringRadius = length(ringSpace / vec2(1.82, 0.32)) / radius;
    float broadRing = smoothstep(1.76, 1.67, ringRadius) * smoothstep(1.12, 1.2, ringRadius);
    float ringTexture = 0.52 + 0.48 * sin(ringRadius * 116.0 + noise3(vec3(ringSpace * 26.0, time)) * 7.0);
    float ringAlpha = broadRing * (0.05 + ringTexture * 0.10);
    float rearRing = ringAlpha * step(0.0, ringSpace.y);
    color = mix(color, vec3(0.33, 0.48, 0.72), rearRing * smoothstep(0.92, 1.08, sphereDistance));

    float outerAtmosphere = exp(-max(sphereDistance - 1.0, 0.0) * 18.0);
    outerAtmosphere *= smoothstep(1.35, 1.0, sphereDistance);
    vec3 atmosphereColor = mix(
      vec3(0.20, 0.38, 0.95),
      vec3(0.49, 0.92, 0.98),
      clamp(fromCenter.y / radius + 0.45, 0.0, 1.0)
    );
    color += atmosphereColor * outerAtmosphere * 0.22 * step(1.0, sphereDistance);

    if (sphereDistance < 1.0) {
      vec2 sphereXY = fromCenter / radius;
      float sphereZ = sqrt(max(0.0, 1.0 - dot(sphereXY, sphereXY)));
      vec3 normal = normalize(vec3(sphereXY, sphereZ));

      normal = rotateY(normal, time * 0.23 + pointer.x * 0.12);
      normal.xy = rotate2d(-pointer.y * 0.045) * normal.xy;

      float largeCloud = fbm(normal * 2.15 + vec3(time * 0.045, 0.0, 0.0));
      float detailCloud = fbm(normal * 6.4 - vec3(time * 0.028, 0.0, 0.0));
      float terrain = smoothstep(0.44, 0.68, largeCloud * 0.72 + detailCloud * 0.34);
      float oceanVein = smoothstep(0.42, 0.72, fbm(normal * 4.1 + vec3(4.0, 1.0, time * 0.025)));
      float polar = smoothstep(0.52, 0.88, abs(normal.y));

      vec3 deepOcean = vec3(0.014, 0.026, 0.095);
      vec3 litOcean = vec3(0.035, 0.19, 0.40);
      vec3 mineral = vec3(0.22, 0.16, 0.48);
      vec3 cloud = vec3(0.50, 0.78, 0.96);

      vec3 albedo = mix(deepOcean, litOcean, oceanVein * 0.68);
      albedo = mix(albedo, mineral, terrain * 0.78);
      albedo = mix(albedo, cloud, smoothstep(0.62, 0.82, detailCloud) * 0.48);
      albedo = mix(albedo, vec3(0.58, 0.78, 0.93), polar * 0.28);

      vec3 lightDirection = normalize(vec3(-0.62, 0.48, 0.72));
      float diffuse = max(dot(normal, lightDirection), 0.0);
      float softLight = smoothstep(-0.20, 0.68, dot(normal, lightDirection));
      float fresnel = pow(1.0 - sphereZ, 2.7);
      float specular = pow(max(dot(reflect(-lightDirection, normal), vec3(0.0, 0.0, 1.0)), 0.0), 34.0);

      vec3 planetColor = albedo * (0.075 + diffuse * 0.88);
      planetColor *= 0.42 + softLight * 0.72;
      planetColor += atmosphereColor * fresnel * (0.34 + softLight * 0.5);
      planetColor += vec3(0.65, 0.84, 1.0) * specular * 0.48;

      float cityNoise = hash31(floor(normal * 180.0));
      float city = step(0.985, cityNoise) * terrain * smoothstep(0.48, -0.08, diffuse);
      planetColor += vec3(1.0, 0.62, 0.24) * city * 0.9;

      float edge = smoothstep(1.0, 0.985, sphereDistance);
      color = mix(color, planetColor, edge);

      float frontRing = ringAlpha * step(ringSpace.y, 0.0);
      color = mix(color, vec3(0.44, 0.62, 0.88), frontRing * 0.34);
    }

    float vignette = smoothstep(0.92, 0.18, length(uv * vec2(0.78, 1.0)));
    color *= 0.64 + vignette * 0.48;
    color = pow(color, vec3(0.88));

    gl_FragColor = vec4(color, 1.0);
  }
`;function i(e,t,a){let r=e.createShader(t);return r?(e.shaderSource(r,a),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))?r:(e.deleteShader(r),null):null}function s(){let e=(0,r.useRef)(null),[a,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let a=t.getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"high-performance"});if(!a)return void s(!0);let r=i(a,a.VERTEX_SHADER,o),l=i(a,a.FRAGMENT_SHADER,n);if(!r||!l)return void s(!0);let c=a.createProgram();if(!c)return;if(a.attachShader(c,r),a.attachShader(c,l),a.linkProgram(c),!a.getProgramParameter(c,a.LINK_STATUS))return void s(!0);let h=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,h),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);let d=a.getAttribLocation(c,"a_position"),u=a.getUniformLocation(c,"u_resolution"),p=a.getUniformLocation(c,"u_pointer"),f=a.getUniformLocation(c,"u_time"),m={x:.5,y:.5,targetX:.5,targetY:.5},g=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v=0,y=performance.now();function x(e){let a=t.getBoundingClientRect();m.targetX=(e.clientX-a.left)/a.width,m.targetY=1-(e.clientY-a.top)/a.height}return t.addEventListener("pointermove",x),v=requestAnimationFrame(function e(r){let o,n,i,s;o=t.getBoundingClientRect(),n=Math.min(window.devicePixelRatio||1,1.7),i=Math.max(1,Math.floor(o.width*n)),s=Math.max(1,Math.floor(o.height*n)),(t.width!==i||t.height!==s)&&(t.width=i,t.height=s,a.viewport(0,0,i,s)),m.x+=(m.targetX-m.x)*.035,m.y+=(m.targetY-m.y)*.035,a.useProgram(c),a.bindBuffer(a.ARRAY_BUFFER,h),a.enableVertexAttribArray(d),a.vertexAttribPointer(d,2,a.FLOAT,!1,0,0),a.uniform2f(u,t.width,t.height),a.uniform2f(p,m.x,m.y),a.uniform1f(f,g?12:(r-y)/1e3),a.drawArrays(a.TRIANGLES,0,6),g||(v=requestAnimationFrame(e))}),()=>{cancelAnimationFrame(v),t.removeEventListener("pointermove",x),a.deleteBuffer(h),a.deleteProgram(c),a.deleteShader(r),a.deleteShader(l)}},[]),(0,t.jsxs)("div",{className:a?"planet-field is-fallback":"planet-field",children:[(0,t.jsx)("canvas",{ref:e,"aria-hidden":"true"}),(0,t.jsx)("div",{className:"planet-fallback","aria-hidden":"true"})]})}function l({text:e,className:a="",auto:r=!1,delay:o=0}){return(0,t.jsx)("span",{className:`reveal-words ${r?"is-visible is-auto":""} ${a}`.trim(),"data-reveal-words":r?void 0:"","aria-label":e,style:{"--reveal-delay":`${o}ms`},children:e.split(" ").map((e,a)=>(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"word-clip","aria-hidden":"true",children:(0,t.jsx)("span",{style:{"--word-index":a},children:e})})," "]},`${e}-${a}`))})}function c(){return(0,t.jsxs)("footer",{className:"site-footer",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(a.default,{href:"/",className:"footer-signature",children:"Jace Wong"}),(0,t.jsx)("p",{children:"AI · Technology · Reading"})]}),(0,t.jsxs)("div",{className:"footer-links",children:[(0,t.jsx)(a.default,{href:"/blog",children:"Writing"}),(0,t.jsx)("a",{href:"https://github.com/JaceWong-ai",target:"_blank",rel:"noreferrer",children:"GitHub ↗"})]}),(0,t.jsxs)("p",{className:"footer-meta",children:["© ",new Date().getFullYear()]})]})}var h=e.i(73478);let d=["∞","λ","∑","π","∇","φ","0","1","⌁","·"];function u(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t,a,r=e.current;if(!r)return;let o=r.getContext("2d");if(!o)return;let n=(t=0x1f2e3d4c,a=()=>(t=1664525*t+0x3c6ef35f>>>0)/0x100000000,Array.from({length:1080},()=>{let e=a();return{phase:a()*Math.PI*2,offset:(a()-.5)*(.3+1.7*a()),size:.7+2.05*a(),speed:9e-5+12e-5*a(),alpha:.3+.7*a(),color:a(),glyph:e>.86?d[Math.floor(a()*d.length)]:null,shape:a()}})),i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s={x:0,y:0,targetX:0,targetY:0},l=1,c=1,h=0,u=!0,p=performance.now();function f(){let e=r.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,1.65);l=Math.max(1,e.width),c=Math.max(1,e.height),r.width=Math.max(1,Math.floor(l*t)),r.height=Math.max(1,Math.floor(c*t)),o.setTransform(t,0,0,t,0,0)}function m(e){s.targetX=e.clientX/window.innerWidth-.5,s.targetY=e.clientY/window.innerHeight-.5}return f(),window.addEventListener("resize",f),window.addEventListener("pointermove",m,{passive:!0}),h=requestAnimationFrame(function e(t){if(!u)return;let a=i?9e3:t-p;s.x+=(s.targetX-s.x)*.025,s.y+=(s.targetY-s.y)*.025,o.clearRect(0,0,l,c),o.globalCompositeOperation="lighter";let r=.5*l+18*s.x,d=.32*c+10*s.y,f=Math.min(.42*l,540),m=Math.min(.2*c,154),g=o.createLinearGradient(r-f,d,r+f,d);g.addColorStop(0,"rgba(85, 128, 255, 0)"),g.addColorStop(.28,"rgba(92, 151, 255, 0.18)"),g.addColorStop(.55,"rgba(224, 239, 255, 0.32)"),g.addColorStop(.8,"rgba(137, 105, 255, 0.16)"),g.addColorStop(1,"rgba(90, 120, 255, 0)"),o.beginPath();for(let e=0;e<=260;e+=1){let t=e/260*Math.PI*2,a=r+Math.sin(t)*f,n=d+Math.sin(t)*Math.cos(t)*m;0===e?o.moveTo(a,n):o.lineTo(a,n)}o.strokeStyle=g,o.lineWidth=1,o.stroke(),n.forEach((e,t)=>{let n=e.phase+a*e.speed,i=Math.sin(n),s=Math.sin(n)*Math.cos(n),l=Math.cos(n)*f,c=Math.cos(2*n)*m,h=Math.hypot(l,c)||1,u=.5+.5*Math.cos(n+.55),p=(16+(1-u)*42)*e.offset,g=r+i*f+-c/h*p+.65*Math.sin(6e-4*a+t),v=d+s*m+l/h*p*.62+.45*Math.cos(55e-5*a+.7*t),y=.72+.28*Math.sin(.002*a+1.73*t),x=e.alpha*(.34+1.02*u)*y,b=e.color<.54?`rgba(205, 229, 255, ${x})`:e.color<.82?`rgba(112, 174, 255, ${.9*x})`:`rgba(167, 126, 255, ${.82*x})`;if(o.fillStyle=b,o.strokeStyle=b,e.glyph){let t=6+e.size*(1.55+2.05*u);o.font=`${t}px "SFMono-Regular", "Geist Mono", monospace`,o.textAlign="center",o.textBaseline="middle",o.shadowColor=b,o.shadowBlur=6+9*u,o.fillText(e.glyph,g,v),o.shadowBlur=0;return}let w=e.size*(.62+1.28*u);e.shape>.82?(o.lineWidth=Math.max(.5,.45*w),o.beginPath(),o.moveTo(g-l/h*w*2.4,v),o.lineTo(g+l/h*w*2.4,v),o.stroke()):e.shape>.5?o.fillRect(g,v,1.45*w,.75*w):(o.beginPath(),o.arc(g,v,Math.max(.42,.48*w),0,2*Math.PI),o.fill())}),o.globalCompositeOperation="source-over",i||(h=requestAnimationFrame(e))}),()=>{u=!1,cancelAnimationFrame(h),window.removeEventListener("resize",f),window.removeEventListener("pointermove",m)}},[]),(0,t.jsx)("div",{className:"symbol-stream","aria-hidden":"true",children:(0,t.jsx)("canvas",{ref:e})})}let p=[{slug:"the-edge-is-a-moving-agreement",number:"001",title:"The edge is a moving agreement",dek:"What looks like a technical limit is often a temporary agreement between tools, language, and imagination.",category:"Artificial Intelligence",date:"July 24, 2026",readingTime:"6 min",accent:"violet",blocks:[{type:"paragraph",text:"We talk about the edge of artificial intelligence as if it were a coastline: a clean division between what machines can do and what remains ours. But coastlines move. The tide changes, the map is redrawn, and what seemed permanent turns out to be a temporary arrangement."},{type:"paragraph",text:"The most interesting work in AI does not begin with asking whether a model can cross a benchmark. It begins by noticing that the benchmark itself encodes yesterday’s imagination. A capability is not only discovered; it is also invited into existence by the quality of the question, the shape of the interface, and the patience of the person exploring it."},{type:"heading",text:"A boundary is a prompt"},{type:"paragraph",text:"Every boundary says two things at once: stop here, and look closer. The first is operational. The second is philosophical. In practice, progress comes from learning to hear both."},{type:"quote",text:"The edge is not where intelligence ends. It is where our description of intelligence becomes insufficient."},{type:"paragraph",text:"This is why I am drawn to systems that leave room for surprise. Reliability matters; so does legibility. But after those foundations, there should still be a door through which the unexpected can enter. A useful tool answers the question. A generative tool quietly changes the person asking it."},{type:"heading",text:"Work at the border"},{type:"paragraph",text:"To work at the border is to resist two easy stories: that AI is merely automation, and that it is an autonomous destiny. It is neither. It is a medium—one whose consequences depend on what we choose to notice, reward, and build around it."},{type:"paragraph",text:"The edge moves when tools improve. More importantly, it moves when our questions do. That is the frontier worth paying attention to."}]},{slug:"abstraction-is-a-form-of-leverage",number:"002",title:"Abstraction is a form of leverage",dek:"Every useful abstraction hides detail. The art is deciding what can disappear without losing the truth.",category:"Technology & Mathematics",date:"July 24, 2026",readingTime:"6 min",accent:"amber",blocks:[{type:"paragraph",text:"A line of code can move a machine because layers of difficult detail have already been compressed beneath it. A mathematical symbol can hold an entire family of relationships in a single mark. Abstraction gives thought leverage: it lets a small gesture act on a much larger structure."},{type:"paragraph",text:"But every abstraction is also a decision about what not to see. An interface hides an implementation. A model hides variation. A theorem hides the failed paths that made the proof possible. What disappears is often what makes the abstraction useful—and sometimes what makes it dangerous."},{type:"heading",text:"Mathematics as technology"},{type:"paragraph",text:"Mathematics is not only a language for describing the world. It is a technology for making patterns portable. Once a relation can be named, it can travel between physics, computation, economics, and any other domain willing to preserve its structure."},{type:"quote",text:"An abstraction is powerful when it forgets the right things."},{type:"paragraph",text:"This is why notation matters. Good notation does more than shorten an explanation; it changes which thoughts are easy to have. The distance between an idea and an implementation often depends on whether we have found the right representation."},{type:"heading",text:"The cost of elegance"},{type:"paragraph",text:"Elegant systems create the feeling that complexity has vanished. It has not. It has been moved. The responsible builder keeps track of where it went, who now carries it, and which edge cases were excluded to make the center feel simple."},{type:"paragraph",text:"The goal is not to avoid abstraction; thinking without it is impossible. The goal is to move fluently between the clean surface and the difficult machinery beneath it—to know when the map is enough, and when the terrain is asking to be seen."}]},{slug:"reading-against-the-machine",number:"003",title:"Reading against the machine",dek:"In an age of instant synthesis, slow reading becomes a way to preserve intellectual texture.",category:"Reading & Thought",date:"July 24, 2026",readingTime:"5 min",accent:"cyan",blocks:[{type:"paragraph",text:"A machine can now summarize in seconds what takes us hours to read. This is useful. It is also a temptation to mistake the transfer of information for the formation of thought."},{type:"paragraph",text:"A summary gives us the shape of an argument. Reading gives us its weather: the hesitation, the rhythm, the examples that refuse to compress, the sentence that alters the meaning of the one before it. Information survives compression better than experience does."},{type:"heading",text:"Friction has a function"},{type:"paragraph",text:"The difficulty of a book is not always a defect waiting to be optimized away. Sometimes friction is the mechanism. It slows the mind enough for unfamiliar structures to take hold."},{type:"quote",text:"To read slowly is to let another mind change the pace of your own."},{type:"paragraph",text:"This does not make AI the enemy of reading. The better relationship is asymmetric: use machines to widen the field, then choose where to go deep without them. Let synthesis reveal the map; let attention decide where to walk."},{type:"heading",text:"Keep the long path"},{type:"paragraph",text:"The future will make many cognitive shortcuts abundant. That abundance increases the value of knowing when not to take one. A person who can move quickly and still choose slowness holds an unusual advantage."},{type:"paragraph",text:"I read not because information is scarce, but because interiority is. The long path leaves traces that no summary can reproduce."}]}];e.s(["default",0,function(){return(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("is-visible")})},{threshold:.12});return document.querySelectorAll("[data-reveal]").forEach(t=>e.observe(t)),()=>e.disconnect()},[]),(0,t.jsxs)("main",{className:"home-v2",children:[(0,t.jsxs)("section",{className:"home-hero",children:[(0,t.jsx)(s,{}),(0,t.jsx)(u,{}),(0,t.jsx)(h.SiteNav,{}),(0,t.jsxs)("div",{className:"home-hero-copy",children:[(0,t.jsxs)("div",{className:"home-introduction",children:[(0,t.jsxs)("h1",{children:[(0,t.jsx)(l,{text:"Essays and experiments",auto:!0}),(0,t.jsx)("br",{}),(0,t.jsx)(l,{text:"on intelligence.",auto:!0,delay:240})]}),(0,t.jsx)("p",{children:"Hi, I'm Jace, and this is my blog. I write about AI, software, mathematics, and the books that shape how I think."})]}),(0,t.jsxs)("div",{className:"home-notebook",children:[(0,t.jsx)("p",{children:"Each piece aims to make difficult ideas easier to explore through clear writing, visualizations, and small interactive experiments."}),(0,t.jsxs)(a.default,{href:"/blog",children:["Read the essays ",(0,t.jsx)("span",{children:"↘"})]})]})]}),(0,t.jsxs)("div",{className:"home-scroll-note","aria-hidden":"true",children:[(0,t.jsx)("span",{children:"Scroll"}),(0,t.jsx)("i",{})]})]}),(0,t.jsxs)("section",{className:"home-writing",id:"writing",children:[(0,t.jsxs)("header",{"data-reveal":!0,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Writing"}),(0,t.jsx)("span",{children:"AI · Technology · Reading"})]}),(0,t.jsx)("h2",{children:"Latest essays"}),(0,t.jsx)(a.default,{href:"/blog",children:"All writing ↗"})]}),(0,t.jsx)("div",{className:"home-posts",children:p.map(e=>(0,t.jsxs)(a.default,{href:`/blog/${e.slug}`,className:`home-post accent-${e.accent}`,"data-reveal":!0,children:[(0,t.jsx)("span",{className:"home-post-number",children:e.number}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:e.category}),(0,t.jsx)("h3",{children:e.title})]}),(0,t.jsxs)("div",{className:"home-post-meta",children:[(0,t.jsx)("span",{children:e.date}),(0,t.jsx)("span",{children:e.readingTime}),(0,t.jsx)("i",{children:"↗"})]})]},e.slug))})]}),(0,t.jsx)(c,{})]})}],31713)}]);