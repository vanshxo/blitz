"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import ASCIIText from "@/components/ASCIITEXT";



export default function AnimatedSequence() {
  const [stage, setStage] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Stage 0: "blitz is cooking" for 3 seconds
    const timer1 = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setStage(1)
        setFadeOut(false)
      }, 500)
    }, 1500)

    // Stage 1: "dream?" for 2 seconds
    const timer2 = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setStage(2)
        setFadeOut(false)
      }, 500)
    }, 5000)

    // Stage 2: "NIGHTMARE!!!" for 3 seconds
    const timer3 = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setStage(3)
        setFadeOut(false)
      }, 500)
    }, 8000)

    // Stage 3: "WAKE UP TO REALITY" with "SEE YOU SOON" for 2 seconds
    const timer4 = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setStage(4)
        setFadeOut(false)
      }, 500)
    }, 11000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          stage === 0 ? "bg-cover bg-center opacity-100" : "bg-black opacity-100"
        }`}
        style={{
          backgroundImage: stage === 0 ? "url('https://blitzschlag.co.in/assets/blitz_home-D2_40pfA.jpg')" : "none",
        }}
      />

      {/* Final image (only visible at stage 4) */}
      {stage === 4 && (
        <div className="absolute inset-0 flex items-center justify-center animate-scaleDown">
          <Image
            src="/PHOTO-2025-03-31-19-57-29-removebg-preview.png"
            alt="Final image"
            width={800}
            height={600}
            className="max-h-screen object-contain"
          />
        </div>
      )}

      {/* Text content (hidden at stage 4) */}
      {stage < 4 && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {stage === 0 && <h1 className="text-5xl md:text-7xl font-bold text-white text-center">blitz is cooking</h1>}

          {stage === 1 && 
 <div className="flex items-center justify-center min-h-screen w-4 overflow-visible">
 <ASCIIText text="Dream?" enableWaves={true} asciiFontSize={8} planeBaseHeight={2} />
</div>

}

          {stage === 2 && (
            <h1 className="text-5xl md:text-7xl font-bold text-red-600 text-center animate-pulse">NIGHTMARE!!!</h1>
          )}

          {stage === 3 && (
            <>
              <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-4">WAKE UP TO REALITY</h1>
              <p className="text-2xl md:text-3xl font-medium text-white text-center">SEE YOU SOON</p>
            </>
          )}
        </div>
      )}
      <audio autoPlay>
        <source src="/untitledbg.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

