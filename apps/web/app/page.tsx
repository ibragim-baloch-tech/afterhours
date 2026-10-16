export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Planned first launch: Islamabad–Rawalpindi
      </p>

      <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
        Discover. Connect.{" "}
        <span className="bg-accent px-2 text-accent-foreground">Go live.</span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
        Find things to do, meet people who enjoy them, and spend less time
        scrolling and more time out with others.
      </p>

      <section
        aria-labelledby="status-heading"
        className="mt-16 max-w-xl rounded-lg border border-border bg-surface p-6"
      >
        <h2 id="status-heading" className="text-base font-semibold">
          Current status
        </h2>
        <p className="mt-2 text-muted">
          AFTERHOURS is under construction. No events are listed yet, and no
          accounts can be created.
        </p>
      </section>
    </div>
  );
}