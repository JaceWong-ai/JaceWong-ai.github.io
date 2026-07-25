(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});let o=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:a}=e,r=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:a&&(c=t+(~a.indexOf(":")?`[${a}]`:a),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let h=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),h&&"?"!==h[0]&&(h="?"+h),n=n.replace(/[?#]/g,encodeURIComponent),h=h.replace("#","%23"),`${r}${c}${n}${h}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return n}});let r=e.r(71645);function n(e,t){let a=(0,r.useRef)(null),n=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=a.current;e&&(a.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(a.current=o(e,r)),t&&(n.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},73668,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),n=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),a=new URL(e,t);return a.origin===t&&(0,n.hasBasePath)(a.pathname)}catch(e){return!1}}},84508,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={default:function(){return v},useLinkStatus:function(){return x}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});let o=e.r(90809),i=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),h=e.r(18581),u=e.r(18967),d=e.r(5550);e.r(33525);let p=e.r(88540),f=e.r(91949),m=e.r(73668),g=e.r(9396);function v(t){var a,r;let n,o,v,[x,b]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:j,as:k,children:A,prefetch:T=null,passHref:_,replace:R,shallow:S,scroll:C,onClick:I,onMouseEnter:N,onTouchStart:P,legacyBehavior:E=!1,onNavigate:L,transitionTypes:O,ref:M,unstable_dynamicOnHover:D,...F}=t;n=A,E&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let U=s.default.useContext(c.AppRouterContext),q=!1!==T,B=!1!==T?null===(r=T)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,W="string"==typeof(a=k||j)?a:(0,l.formatUrl)(a);if(E){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(n)}let Y=E?o&&"object"==typeof o&&o.ref:M,z=s.default.useCallback(e=>(null!==U&&(w.current=(0,f.mountLinkInstance)(e,W,U,B,q,b)),()=>{w.current&&((0,f.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,f.unmountPrefetchableInstance)(e)}),[q,W,U,B,b]),$={ref:(0,h.useMergedRef)(z,Y),onClick(t){E||"function"!=typeof I||I(t),E&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!U||t.defaultPrevented||function(t,a,r,n,o,i,l){if("u">typeof window){let c,{nodeName:h}=t.currentTarget;if("A"===h.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(a)){n&&(t.preventDefault(),location.replace(a));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(a,n?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,r.current,l)})}}(t,W,w,R,C,L,O)},onMouseEnter(e){E||"function"!=typeof N||N(e),E&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&q&&(0,f.onNavigationIntent)(e.currentTarget,!0===D)},onTouchStart:function(e){E||"function"!=typeof P||P(e),E&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&q&&(0,f.onNavigationIntent)(e.currentTarget,!0===D)}};return(0,u.isAbsoluteUrl)(W)?$.href=W:E&&!_&&("a"!==o.type||"href"in o.props)||($.href=(0,d.addBasePath)(W)),v=E?s.default.cloneElement(o,$):(0,i.jsx)("a",{...F,...$,children:n}),(0,i.jsx)(y.Provider,{value:x,children:v})}e.r(84508);let y=(0,s.createContext)(f.IDLE_LINK_STATUS),x=()=>(0,s.useContext)(y);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},18566,(e,t,a)=>{t.exports=e.r(76562)},73478,e=>{"use strict";var t=e.i(43476),a=e.i(22016),r=e.i(18566),n=e.i(71645);e.s(["SiteNav",0,function(){let e=(0,r.usePathname)(),[o,i]=(0,n.useState)(!1),[s,l]=(0,n.useState)("light");return(0,n.useEffect)(()=>{let e="dark"===document.documentElement.dataset.theme?"dark":"light",t=requestAnimationFrame(()=>l(e));return()=>cancelAnimationFrame(t)},[]),(0,t.jsxs)("header",{className:"site-header",children:[(0,t.jsxs)(a.default,{href:"/",className:"brand-mark","aria-label":"Jace Wong — home",onClick:()=>i(!1),children:[(0,t.jsx)("span",{children:"JW"}),(0,t.jsx)("i",{"aria-hidden":"true"})]}),(0,t.jsx)("nav",{className:o?"main-nav is-open":"main-nav",children:[{label:"Index",href:"/"},{label:"Writing",href:"/blog"},{label:"About",href:"/#about"}].map(r=>{let n="/blog"===r.href?e.startsWith("/blog"):"/"===e&&"/"===r.href;return(0,t.jsx)(a.default,{href:r.href,className:n?"is-active":void 0,onClick:()=>i(!1),children:(0,t.jsx)("span",{children:r.label})},r.label)})}),(0,t.jsxs)("div",{className:"nav-actions",children:[(0,t.jsxs)("button",{className:"theme-toggle",type:"button",onClick:function(){let e="light"===s?"dark":"light";l(e),document.documentElement.dataset.theme=e,localStorage.setItem("jace-theme",e)},"aria-label":`Switch to ${"light"===s?"dark":"light"} mode`,children:[(0,t.jsx)("span",{className:"theme-orbit","aria-hidden":"true",children:(0,t.jsx)("i",{})}),(0,t.jsx)("span",{children:"light"===s?"Nocturne":"Daylight"})]}),(0,t.jsxs)("button",{className:o?"menu-toggle is-open":"menu-toggle",type:"button",onClick:()=>i(e=>!e),"aria-label":"Toggle navigation","aria-expanded":o,children:[(0,t.jsx)("i",{}),(0,t.jsx)("i",{})]})]})]})}])},31713,e=>{"use strict";var t=e.i(43476),a=e.i(22016),r=e.i(71645);let n=`
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,o=`
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
    float ringAlpha = broadRing * (0.18 + ringTexture * 0.24);
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
`;function i(e,t,a){let r=e.createShader(t);return r?(e.shaderSource(r,a),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))?r:(e.deleteShader(r),null):null}function s(){let e=(0,r.useRef)(null),[a,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let a=t.getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"high-performance"});if(!a)return void s(!0);let r=i(a,a.VERTEX_SHADER,n),l=i(a,a.FRAGMENT_SHADER,o);if(!r||!l)return void s(!0);let c=a.createProgram();if(!c)return;if(a.attachShader(c,r),a.attachShader(c,l),a.linkProgram(c),!a.getProgramParameter(c,a.LINK_STATUS))return void s(!0);let h=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,h),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);let u=a.getAttribLocation(c,"a_position"),d=a.getUniformLocation(c,"u_resolution"),p=a.getUniformLocation(c,"u_pointer"),f=a.getUniformLocation(c,"u_time"),m={x:.5,y:.5,targetX:.5,targetY:.5},g=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v=0,y=performance.now();function x(e){let a=t.getBoundingClientRect();m.targetX=(e.clientX-a.left)/a.width,m.targetY=1-(e.clientY-a.top)/a.height}return t.addEventListener("pointermove",x),v=requestAnimationFrame(function e(r){let n,o,i,s;n=t.getBoundingClientRect(),o=Math.min(window.devicePixelRatio||1,1.7),i=Math.max(1,Math.floor(n.width*o)),s=Math.max(1,Math.floor(n.height*o)),(t.width!==i||t.height!==s)&&(t.width=i,t.height=s,a.viewport(0,0,i,s)),m.x+=(m.targetX-m.x)*.035,m.y+=(m.targetY-m.y)*.035,a.useProgram(c),a.bindBuffer(a.ARRAY_BUFFER,h),a.enableVertexAttribArray(u),a.vertexAttribPointer(u,2,a.FLOAT,!1,0,0),a.uniform2f(d,t.width,t.height),a.uniform2f(p,m.x,m.y),a.uniform1f(f,g?12:(r-y)/1e3),a.drawArrays(a.TRIANGLES,0,6),g||(v=requestAnimationFrame(e))}),()=>{cancelAnimationFrame(v),t.removeEventListener("pointermove",x),a.deleteBuffer(h),a.deleteProgram(c),a.deleteShader(r),a.deleteShader(l)}},[]),(0,t.jsxs)("div",{className:a?"planet-field is-fallback":"planet-field",children:[(0,t.jsx)("canvas",{ref:e,"aria-hidden":"true"}),(0,t.jsx)("div",{className:"planet-fallback","aria-hidden":"true"})]})}function l(){return(0,t.jsxs)("footer",{className:"site-footer",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(a.default,{href:"/",className:"footer-signature",children:"Jace Wong"}),(0,t.jsx)("p",{children:"AI, ideas, and long horizons."})]}),(0,t.jsxs)("div",{className:"footer-links",children:[(0,t.jsx)(a.default,{href:"/blog",children:"Writing"}),(0,t.jsx)("a",{href:"https://github.com/JaceWong-ai",target:"_blank",rel:"noreferrer",children:"GitHub ↗"})]}),(0,t.jsxs)("p",{className:"footer-meta",children:["© ",new Date().getFullYear()," · Made with attention"]})]})}var c=e.i(73478);let h=[{slug:"the-edge-is-a-moving-agreement",number:"001",title:"The edge is a moving agreement",dek:"What looks like a technical limit is often a temporary agreement between tools, language, and imagination.",category:"Artificial Intelligence",date:"July 24, 2026",readingTime:"6 min",accent:"violet",blocks:[{type:"paragraph",text:"We talk about the edge of artificial intelligence as if it were a coastline: a clean division between what machines can do and what remains ours. But coastlines move. The tide changes, the map is redrawn, and what seemed permanent turns out to be a temporary arrangement."},{type:"paragraph",text:"The most interesting work in AI does not begin with asking whether a model can cross a benchmark. It begins by noticing that the benchmark itself encodes yesterday’s imagination. A capability is not only discovered; it is also invited into existence by the quality of the question, the shape of the interface, and the patience of the person exploring it."},{type:"heading",text:"A boundary is a prompt"},{type:"paragraph",text:"Every boundary says two things at once: stop here, and look closer. The first is operational. The second is philosophical. In practice, progress comes from learning to hear both."},{type:"quote",text:"The edge is not where intelligence ends. It is where our description of intelligence becomes insufficient."},{type:"paragraph",text:"This is why I am drawn to systems that leave room for surprise. Reliability matters; so does legibility. But after those foundations, there should still be a door through which the unexpected can enter. A useful tool answers the question. A generative tool quietly changes the person asking it."},{type:"heading",text:"Work at the border"},{type:"paragraph",text:"To work at the border is to resist two easy stories: that AI is merely automation, and that it is an autonomous destiny. It is neither. It is a medium—one whose consequences depend on what we choose to notice, reward, and build around it."},{type:"paragraph",text:"The edge moves when tools improve. More importantly, it moves when our questions do. That is the frontier worth paying attention to."}]},{slug:"attention-is-a-portfolio",number:"002",title:"Attention is a portfolio",dek:"Before we allocate capital, we allocate awareness. The first portfolio compounds into the second.",category:"Philosophy × Investing",date:"July 24, 2026",readingTime:"5 min",accent:"amber",blocks:[{type:"paragraph",text:"Investing is usually described as the allocation of capital under uncertainty. The definition is accurate, but incomplete. Long before money moves, attention does. We decide which changes deserve observation, which ideas deserve study, and which signals deserve patience."},{type:"paragraph",text:"Seen this way, attention is the first portfolio. It has positions, concentrations, opportunity costs, and a time horizon. It can be diversified until it means nothing, or concentrated until the world outside the thesis disappears."},{type:"heading",text:"What compounds before money"},{type:"paragraph",text:"A well-placed hour rarely announces its return. Reading a difficult book, following a technical shift, or understanding a company from first principles may look unproductive for a long time. Then one day, several quiet observations connect. The return arrives all at once, but the compounding did not."},{type:"quote",text:"What we repeatedly notice becomes the world we are capable of acting in."},{type:"paragraph",text:"This is also why the loudest information is so expensive. It does not merely consume time; it changes the composition of the portfolio. A day spent reacting is a day not spent building a view."},{type:"heading",text:"Conviction without closure"},{type:"paragraph",text:"Good investing needs conviction, but conviction is not the same as certainty. It is a willingness to act while keeping the model revisable. The same is true of a life of ideas: commit deeply, update honestly, and never confuse consistency with truth."},{type:"paragraph",text:"Capital follows attention. The more important question is whether our attention is already invested in the future we claim to believe in."}]},{slug:"reading-against-the-machine",number:"003",title:"Reading against the machine",dek:"In an age of instant synthesis, slow reading becomes a way to preserve intellectual texture.",category:"Reading & Thought",date:"July 24, 2026",readingTime:"5 min",accent:"cyan",blocks:[{type:"paragraph",text:"A machine can now summarize in seconds what takes us hours to read. This is useful. It is also a temptation to mistake the transfer of information for the formation of thought."},{type:"paragraph",text:"A summary gives us the shape of an argument. Reading gives us its weather: the hesitation, the rhythm, the examples that refuse to compress, the sentence that alters the meaning of the one before it. Information survives compression better than experience does."},{type:"heading",text:"Friction has a function"},{type:"paragraph",text:"The difficulty of a book is not always a defect waiting to be optimized away. Sometimes friction is the mechanism. It slows the mind enough for unfamiliar structures to take hold."},{type:"quote",text:"To read slowly is to let another mind change the pace of your own."},{type:"paragraph",text:"This does not make AI the enemy of reading. The better relationship is asymmetric: use machines to widen the field, then choose where to go deep without them. Let synthesis reveal the map; let attention decide where to walk."},{type:"heading",text:"Keep the long path"},{type:"paragraph",text:"The future will make many cognitive shortcuts abundant. That abundance increases the value of knowing when not to take one. A person who can move quickly and still choose slowness holds an unusual advantage."},{type:"paragraph",text:"I read not because information is scarce, but because interiority is. The long path leaves traces that no summary can reproduce."}]}],u=["AI systems","Philosophy of technology","Reading & learning","Investing"];e.s(["default",0,function(){return(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("is-visible")})},{threshold:.12});return document.querySelectorAll("[data-reveal]").forEach(t=>e.observe(t)),()=>e.disconnect()},[]),(0,t.jsxs)("main",{className:"home-v2",children:[(0,t.jsxs)("section",{className:"home-hero",children:[(0,t.jsx)(s,{}),(0,t.jsx)(c.SiteNav,{}),(0,t.jsxs)("div",{className:"home-hero-copy",children:[(0,t.jsxs)("div",{className:"home-introduction",children:[(0,t.jsx)("p",{className:"home-name",children:"Jace Wong"}),(0,t.jsxs)("h1",{children:["AI, systems, and the",(0,t.jsx)("br",{}),"questions around them."]}),(0,t.jsx)("p",{children:"I build with artificial intelligence and study how it changes the way we think, decide, and create."})]}),(0,t.jsxs)("div",{className:"home-notebook",children:[(0,t.jsx)("p",{children:"This is my public notebook—essays, research notes, and ideas in progress across technology, philosophy, reading, and capital."}),(0,t.jsxs)(a.default,{href:"/blog",children:["Read the writing ",(0,t.jsx)("span",{children:"↗"})]})]})]}),(0,t.jsxs)("div",{className:"home-scroll-note","aria-hidden":"true",children:[(0,t.jsx)("span",{children:"Scroll"}),(0,t.jsx)("i",{})]})]}),(0,t.jsxs)("section",{className:"home-writing",id:"writing",children:[(0,t.jsxs)("header",{"data-reveal":!0,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Selected writing"}),(0,t.jsx)("span",{children:"Essays & notes"})]}),(0,t.jsx)("h2",{children:"Ideas, made public."}),(0,t.jsx)(a.default,{href:"/blog",children:"View all ↗"})]}),(0,t.jsx)("div",{className:"home-posts",children:h.map(e=>(0,t.jsxs)(a.default,{href:`/blog/${e.slug}`,className:`home-post accent-${e.accent}`,"data-reveal":!0,children:[(0,t.jsx)("span",{className:"home-post-number",children:e.number}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:e.category}),(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("span",{children:e.dek})]}),(0,t.jsxs)("div",{className:"home-post-meta",children:[(0,t.jsx)("span",{children:e.readingTime}),(0,t.jsx)("i",{children:"↗"})]})]},e.slug))})]}),(0,t.jsxs)("section",{className:"home-about",id:"about",children:[(0,t.jsxs)("div",{className:"home-about-label","data-reveal":!0,children:[(0,t.jsx)("span",{children:"About"}),(0,t.jsx)("i",{})]}),(0,t.jsxs)("div",{className:"home-about-copy","data-reveal":!0,children:[(0,t.jsxs)("h2",{children:["I work with AI.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"I think beyond the model."})]}),(0,t.jsx)("p",{children:"I'm Jace Wong, an AI practitioner interested in the systems behind intelligence and the human choices around it. My work and writing follow one question: what becomes possible—and what becomes important—when intelligence is abundant?"})]}),(0,t.jsx)("div",{className:"home-focus","data-reveal":!0,children:u.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:String(a+1).padStart(2,"0")}),(0,t.jsx)("p",{children:e})]},e))})]}),(0,t.jsxs)("section",{className:"home-contact",id:"connect",children:[(0,t.jsx)("p",{"data-reveal":!0,children:"Connect"}),(0,t.jsxs)("div",{"data-reveal":!0,children:[(0,t.jsx)("h2",{children:"Elsewhere on the web."}),(0,t.jsxs)("a",{href:"https://github.com/JaceWong-ai",target:"_blank",rel:"noreferrer",children:["GitHub ",(0,t.jsx)("span",{children:"↗"})]})]})]}),(0,t.jsx)(l,{})]})}],31713)}]);