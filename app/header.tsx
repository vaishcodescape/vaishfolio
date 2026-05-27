import Link from "next/link"

export function Header() {
  return (
    <header className="py-8 flex items-center justify-between">
      <Link href="/">
        <p className="text-sm text-zinc-100 transition-colors hover:text-zinc-300">/</p>
      </Link>
    </header>
  )
}
