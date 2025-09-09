import Link from 'next/link';

export default function Page() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Homeownership, made simple.</h1>
        <p>Get a quick estimate, explore your options, and start your online mortgage—no hidden fees, no unnecessary steps.</p>
        <div style={{display:'flex', gap:'.75rem', marginTop:'1rem'}}>
          <Link href="/start" className="btnPrimary">Get started</Link>
          <Link href="/mortgage-calculator" className="btnOutline">Try the calculator</Link>
        </div>
      </section>

      <section className="grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
        <div className="card">
          <h3>Fast, online application</h3>
          <p>Finish most of your mortgage online with helpful guidance along the way.</p>
        </div>
        <div className="card">
          <h3>Transparent rates & fees</h3>
          <p>See real numbers up front so you can make confident decisions.</p>
        </div>
        <div className="card">
          <h3>Support when you need it</h3>
          <p>Talk to a human anytime during your application.</p>
        </div>
      </section>
    </div>
  )
}
