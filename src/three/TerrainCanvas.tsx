import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { TerrainMesh } from './TerrainMesh'
import { usePrefersReducedMotion } from '../lib/motion'

export function TerrainCanvas({ className }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.01 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Pause the loop when offscreen or under reduced motion; render one static frame otherwise.
  const frameloop = reduced || !visible ? 'demand' : 'always'

  return (
    <div ref={wrap} className={className} aria-hidden="true">
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.5]}
        camera={{ position: [0, 3.4, 9], fov: 42 }}
        gl={{ antialias: true, powerPreference: 'low-power' }}
        onCreated={({ gl }) => gl.setClearColor('#060b0a', 0)}
      >
        <TerrainMesh reducedMotion={reduced} />
      </Canvas>
    </div>
  )
}
