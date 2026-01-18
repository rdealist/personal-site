export const vertexShader = `
varying vec2 vUv;
varying float vNoise;

void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;
}
`;

export const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uScale;

varying vec2 vUv;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    // Normalize coordinates and correct aspect ratio
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;
    
    // Dynamic fluid effect
    float time = uTime * 0.2;
    float noise = snoise(st * 2.0 - time);
    
    // Create two main fluid blobs (Abstract Koi forms)
    vec2 pos1 = vec2(
        sin(time * 0.8) * 0.4 + 0.8,
        cos(time * 0.5) * 0.3 + 0.5
    );
    
    vec2 pos2 = vec2(
        cos(time * 0.7) * 0.4 + 0.8,
        sin(time * 0.6) * 0.3 + 0.5
    );
    
    // Draw lighter/etherial connection strands
    vec2 pos3 = vec2(
        sin(time * 0.3) * 0.6 + 0.5,
        cos(time * 0.4) * 0.5 + 0.5
    );

    // Calculate distance fields
    float dist1 = length(st - pos1);
    float dist2 = length(st - pos2);
    float dist3 = length(st - pos3);
    
    // Mix shapes
    float shape1 = smoothstep(0.45, 0.0, dist1 + noise * 0.15);
    float shape2 = smoothstep(0.40, 0.0, dist2 - noise * 0.1);
    float shape3 = smoothstep(0.6, 0.0, dist3 + noise * 0.2); // Larger, fainter blob
    
    // Color mixing logic
    vec3 color = mix(uColor1, uColor2, shape1);
    
    // Combine shapes for alpha
    // Shape 3 contributes less to alpha but connects the other two
    float alpha = max(shape1, shape2) * 0.5 + (shape3 * 0.1);
    
    // Add glow/bloom
    float glow = exp(-dist1 * 2.5) * 0.4 + exp(-dist2 * 2.5) * 0.4;
    
    gl_FragColor = vec4(color + glow * 0.5, alpha);
}
`;
