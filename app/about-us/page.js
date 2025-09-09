export const metadata = { title: 'About Us — Better Replica' }

export default function Page() {
  return (
    <div className="container">
      <section className="hero">
        <h1>About Us</h1>
        <p>We’re building a streamlined, transparent mortgage experience for everyone. This is a demo project inspired by Better.com for educational purposes.</p>
      </section>

      <section className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        <div className="card">
          <h3>Our mission</h3>
          <p>Make home financing simple, fair, and accessible—powered by great UX and modern technology.</p>
        </div>
        <div className="card">
          <h3>Our approach</h3>
          <p>Start with customer needs, eliminate friction with automation, and provide human help when it matters.</p>
        </div>
      </section>
    </div>
  )
}
