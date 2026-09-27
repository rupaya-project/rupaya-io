import Link from "next/link";
import { Header, Footer, StatusRow } from "@/components/site-chrome";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <section className="px-6 py-16 sm:px-10 sm:py-24">
          <p className="seal font-mono text-xs text-brass">pre-bond · Base</p>
          <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.15] text-paper sm:text-5xl">
            Agents can already pay each other. They still have nothing to
            lose.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-mist">
            RUPX is the stake that gives them one — a reputation bond an AI
            agent locks against its onchain identity, paid back for good
            behavior and slashed, publicly, for bad.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm">
            <Link href="/pivot-statement" className="text-paper underline">
              Read the pivot statement
            </Link>
            <a
              href="https://github.com/rupaya-project"
              className="text-mist underline"
            >
              View the repo
            </a>
          </div>
        </section>

        <div className="rule">
          <StatusRow label="contract" value="pending" tone="pending" />
          <StatusRow label="demo" value="in development" tone="pending" />
          <StatusRow label="audit" value="none" tone="none" />
          <StatusRow label="liquidity" value="none, by design" tone="none" />
        </div>

        <section className="rule-b px-6 py-16 sm:px-10 sm:py-20">
          <h2 className="font-serif text-2xl text-paper">What this is</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-mist">
            Rupaya is being rebuilt from the ground up. The original 2014
            chain and a later Arbitrum RUPX contract have both been
            retired — no swap, no migration, no implied continuity. What&rsquo;s
            kept is the name and the ticker.
          </p>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-mist">
            The new RUPX is a fresh deploy on Base, owned by a Safe multisig
            from day one. An agent stakes it against its ERC-8004 identity.
            Good behavior earns it back, plus rewards. Bad, flagged behavior
            gets it slashed — onchain, publicly.
          </p>
          <Link
            href="/sunset-notice"
            className="mt-5 inline-block font-mono text-sm text-paper underline"
          >
            Read the sunset notice for the old chain and old contract
          </Link>
        </section>

        <section className="rule-b px-6 py-16 sm:px-10 sm:py-20">
          <h2 className="font-serif text-2xl text-paper">The mechanism</h2>
          <div className="mt-8 flex flex-col gap-0 sm:flex-row sm:items-stretch">
            {[
              {
                k: "register",
                v: "an agent takes an ERC-8004 identity",
              },
              {
                k: "stake",
                v: "it locks RUPX against that identity to be marked bonded",
              },
              {
                k: "bonded",
                v: "counterparties check bonded status before transacting",
              },
              {
                k: "resolve",
                v: "good behavior returns the stake plus reward — bad behavior gets it slashed",
              },
            ].map((step, i) => (
              <div
                key={step.k}
                className="flex-1 border-slate py-6 sm:border-l sm:px-6 sm:py-0 sm:first:border-l-0 sm:first:pl-0"
              >
                <p className="font-mono text-xs text-brass">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-serif text-base text-paper">
                  {step.k}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {step.v}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-mist">
            The slashing trigger — who or what decides a flag is real — is
            the open question. It isn&rsquo;t designed yet. A public demo is
            what forces a real answer instead of a hand-wavy one.
          </p>
        </section>

        <section className="px-6 py-16 sm:px-10 sm:py-20">
          <h2 className="font-serif text-2xl text-paper">Follow the build</h2>
          <p className="mt-5 max-w-[58ch] leading-relaxed text-mist">
            Weekly, real updates for at least the first quarter — commits,
            decisions, and dead ends included.
          </p>
          <div className="mt-6 flex flex-col gap-2 font-mono text-sm text-paper">
            <a href="https://github.com/rupaya-project" className="underline">
              github.com/rupaya-project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
