import { Button, Card } from "@palanikannan1437/rc4-ui";

const CARD_CONTENT = [
  {
    title: "Caching Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    cta: "Read More",
  },
  {
    title: "Running Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    cta: "Read More",
  },
  {
    title: "Configuration Options",
    href: "https://turbo.build/repo/docs/reference/configuration",
    cta: "Read More",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="mx-auto w-auto px-4 pt-8 pb-8 sm:pt-8 lg:px-8">
          <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
            <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text px-2 text-transparent">
              RC4Community
            </span>
            Demo
          </h1>
          <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
            <Button />
          </div>
          <div className="mt-12 grid grid-cols-1 place-content-evenly gap-4 sm:grid-cols-3">
            {CARD_CONTENT.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
