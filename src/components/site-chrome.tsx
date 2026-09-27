import Link from "next/link";
import { RupayaMark } from "./rupaya-mark";

export function Header() {
  return (
    <header className="rule-b flex items-center justify-between px-6 py-5 sm:px-10">
      <Link href="/" className="flex items-center gap-3 text-white">
        <RupayaMark className="h-9 w-auto" />
        <span className="font-brand text-2xl font-semibold tracking-tight">
          Rupaya
        </span>
      </Link>
      <nav className="flex gap-6 font-mono text-xs text-mist">
        <Link href="/pivot-statement" className="hover:text-paper">
          pivot
        </Link>
        <Link href="/sunset-notice" className="hover:text-paper">
          sunset notice
        </Link>
        <a
          href="https://github.com/rupaya-project"
          className="hover:text-paper"
        >
          repo
        </a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="rule mt-auto px-6 py-8 sm:px-10">
      <p className="max-w-[60ch] font-mono text-xs leading-relaxed text-mist">
        Right now: mobay and the founding engineer decide. No governance
        theater — there is no token holder vote to point to until there are
        actual holders and actual decisions worth handing them.
      </p>
    </footer>
  );
}

export function StatusRow({
  label,
  value,
  tone = "pending",
}: {
  label: string;
  value: string;
  tone?: "pending" | "live" | "none";
}) {
  const dot =
    tone === "live" ? "bg-brass" : tone === "none" ? "bg-rust" : "bg-mist";
  return (
    <div className="rule-b flex items-center justify-between px-6 py-4 font-mono text-xs sm:px-10">
      <span className="text-mist">{label}</span>
      <span className="flex items-center gap-2 text-paper">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        {value}
      </span>
    </div>
  );
}
