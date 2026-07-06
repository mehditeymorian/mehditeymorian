import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertex = `
uniform float uTime;
varying float vElev;
// hash-based value noise
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i+vec2(0.0,0.0)), hash(i+vec2(1.0,0.0)), u.x),
             mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for(int i=0;i<4;i++){ v += a*noise(p); p *= 2.0; a *= 0.5; }
  return v;
}
void main(){
  vec3 pos = position;
  float t = uTime * 0.12;
  float e = fbm(pos.xy * 0.35 + vec2(t, t*0.6));
  pos.z += e * 2.4;
  vElev = e;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

const fragment = `
uniform vec3 uAccent;
varying float vElev;
void main(){
  float a = 0.18 + vElev * 0.7;
  gl_FragColor = vec4(uAccent, a);
}
`

export function TerrainMesh({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uAccent: { value: new THREE.Color('#78e1c3') } }),
    [],
  )
  useFrame((_, delta) => {
    if (mat.current && !reducedMotion) mat.current.uniforms.uTime.value += delta
  })
  return (
    <mesh rotation={[-Math.PI / 2.35, 0, 0]} position={[0, -1.2, 0]}>
      <planeGeometry args={[36, 24, 120, 80]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        wireframe
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}
