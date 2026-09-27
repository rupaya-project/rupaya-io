import { Header, Footer } from "@/components/site-chrome";

export const metadata = {
  title: "Pivot statement",
  description:
    "Rupaya is rebuilding RUPX as the reputation bond for autonomous AI agents on Base — skin in the game where x402 and ERC-8004 deliberately don't provide it.",
  alternates: { canonical: "/pivot-statement" },
};

export default function PivotStatement() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 px-6 py-16 sm:px-10 sm:py-20">
        <p className="font-mono text-xs text-brass">pivot</p>
        <h1 className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-paper sm:text-4xl">
          Rupaya is rebuilding RUPX as the reputation bond for autonomous AI
          agents.
        </h1>
        <p className="mt-5 max-w-[62ch] leading-relaxed text-mist">
          We&rsquo;re not the South Asia payments project we used to be.
          That positioning is retired, along with the chains and contracts
          that carried it. What&rsquo;s kept is the name and the ticker —
          everything else is a clean rebuild with a narrower job.
        </p>

        <div className="mt-14 max-w-[62ch] space-y-10">
          <div>
            <h2 className="font-serif text-xl text-paper">
              The gap we&rsquo;re building for
            </h2>
            <p className="mt-3 leading-relaxed text-mist">
              <span className="font-mono text-sm text-paper">x402</span>, the
              HTTP-402 payment standard backed by Coinbase, lets agents pay
              each other per request, in stablecoins, onchain — live, and
              already carrying real volume.
            </p>
            <p className="mt-3 leading-relaxed text-mist">
              <span className="font-mono text-sm text-paper">ERC-8004</span>,
              live on mainnet since January 2026, gives agents a portable
              onchain identity and reputation registry — roughly 24,000
              agents registered as of early 2026.
            </p>
            <p className="mt-3 leading-relaxed text-mist">
              Together they give agents a way to pay and a way to be
              identified. Neither gives them anything to lose — a
              bad-reputation identity can be abandoned and replaced for
              free.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">RUPX&rsquo;s job</h2>
            <p className="mt-3 leading-relaxed text-mist">
              A stake an agent puts up against its ERC-8004 identity. Good
              behavior earns it back, plus rewards. Bad, flagged behavior
              gets it slashed, onchain, publicly. That&rsquo;s the entire
              thesis: skin in the game for agents, nothing more.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Where it runs</h2>
            <p className="mt-3 leading-relaxed text-mist">
              Base. Coinbase&rsquo;s own agent tooling (AgentKit, CDP managed
              wallets) and x402 are native there. RUPX is deployed fresh on
              Base, owned by a Safe multisig from day one.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">
              What we&rsquo;re not claiming yet
            </h2>
            <ul className="mt-3 list-none space-y-2 leading-relaxed text-mist">
              <li>— No working product exists yet.</li>
              <li>— No audit, integration, or grant has been secured.</li>
              <li>— No liquidity exists, and none will be added until there&rsquo;s real capital to seed and lock it properly.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">What comes next</h2>
            <p className="mt-3 leading-relaxed text-mist">
              A minimal, open-source demo: two or more agents register on
              ERC-8004, stake RUPX, transact over x402, and one gets slashed
              on purpose so the mechanism is shown working — publicly, with
              a Basescan link and a public repo. Nothing else gets promised
              until that exists.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
