'use client'
import { useEffect, useState } from 'react'

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    if (text === 'Copied') {
      const t = setTimeout(() => setText('Copy'), 2000)
      return () => clearTimeout(t)
    }
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors hover:text-zinc-300"
      type="button"
    >
      <span>{text}</span>
      <span>URL</span>
    </button>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-neutral-950 to-transparent [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute right-4 top-24">
        <CopyButton />
      </div>
      <main className="prose prose-invert mt-24 pb-20 prose-h4:prose-base prose-h1:text-xl prose-h1:font-bold prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-bold prose-h3:text-base prose-h3:font-bold prose-h4:font-bold prose-h5:text-base prose-h5:font-bold prose-h6:text-base prose-h6:font-bold prose-strong:font-bold max-w-none">
        {children}
      </main>
    </>
  )
}
