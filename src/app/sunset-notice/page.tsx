import { Header, Footer } from "@/components/site-chrome";

export const metadata = {
  title: "Sunset notice",
  description:
    "Rupaya is retiring three generations of its own blockchain and legacy RUPX contracts. No swap, no claims process, no implied continuity.",
  alternates: { canonical: "/sunset-notice" },
};

export default function SunsetNotice() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 px-6 py-16 sm:px-10 sm:py-20">
        <p className="font-mono text-xs text-rust">notice</p>
        <h1 className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-paper sm:text-4xl">
          Rupaya is retiring three generations of its own blockchain, plus
          legacy RUPX contracts.
        </h1>
        <p className="mt-5 max-w-[62ch] leading-relaxed text-mist">
          None of it is being migrated. A new RUPX, on Base, takes over the
          name and ticker with a different purpose and no technical link to
          any predecessor.
        </p>

        <div className="mt-14 max-w-[62ch] space-y-10">
          <div>
            <h2 className="font-serif text-xl text-paper">
              1. The original chain (2014–2018 era)
            </h2>
            <p className="mt-3 leading-relaxed text-mist">
              Launched as a Scrypt PoW/PoS coin, later adding Dash-style
              masternodes. All-time trading high was roughly $0.43 in March
              2018; activity has been negligible since.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">
              2. The TomoChain/Viction-based rebuild
            </h2>
            <p className="mt-3 leading-relaxed text-mist">
              A second, unrelated codebase forked from TomoChain/Viction —
              masternode/PoSV consensus, EVM-compatible. Development was
              effectively dormant after 2021; the last release was a
              masternode block-production bugfix with no substantive
              follow-up.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">
              3. A direct go-ethereum fork running Clique PoA
            </h2>
            <p className="mt-3 font-mono text-xs text-mist">chain ID 499</p>
            <p className="mt-3 leading-relaxed text-mist">
              A third, separate rebuild — registered publicly on chain-list
              services, with its own explorer and validator set. The most
              recent of the three chains, worked on into late 2024, and the
              hardest to keep running: a permissioned proof-of-authority
              validator set needs someone actively operating it, and upkeep
              stopped once that stopped happening. The explorer is no longer
              reachable.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">
              4. The Arbitrum RUPX contract
            </h2>
            <p className="mt-3 font-mono text-xs text-mist">
              0x09aA4Df0DC59F8E2a78b25D45bF4A1F4903fc747
            </p>
            <p className="mt-3 leading-relaxed text-mist">
              Deployed under the Rupaya name with no documented connection
              to any of the three chains above. Third-party trackers list a
              100,000,000 max supply; on-chain data currently shows the
              deployed token as &ldquo;Bridged RUPX (BRUPX)&rdquo; with a
              total supply near 1,020,895 and 5 holders. We&rsquo;re not
              asserting either figure as authoritative here — the practical
              point is the same regardless: this contract won&rsquo;t
              receive support going forward.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">
              What is not happening
            </h2>
            <ul className="mt-3 list-none space-y-2 leading-relaxed text-mist">
              <li>— No token swap or migration mechanism from any predecessor.</li>
              <li>— No claims process. Holding any legacy coin or token entitles you to nothing on the new one.</li>
              <li>— No implied continuity of value, roadmap, or team.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">
              What holders should do
            </h2>
            <p className="mt-3 leading-relaxed text-mist">
              Nothing is required. There is no action to take, no form, no
              deadline. Treat coins or tokens from any of the chains or
              contracts above as retired, unsupported legacy assets.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
