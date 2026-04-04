'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

interface TypewriterProps {
  words: string[]
  delay?: number
}

export function Typewriter({ words, delay = 2000 }: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, Math.max(reverse ? 75 : 150, parseInt((Math.random() * 350).toString())))

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, delay])

  return (
    <span className="inline-block min-w-[1ch]">
      {words[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[0.9em] bg-current ml-1 align-middle"
      />
    </span>
  )
}
