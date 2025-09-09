"use.client";
import Calculator from "@components/Calculator";

// export const metadata = { title: 'Mortgage Calculator — Better Replica' }

export default function Page({ searchParams }) {
  const taxes = Number(searchParams?.taxes ?? 265);
  const zip = String(searchParams?.zip ?? "421005");
  return (
    <div className="container">
      <section className="hero">
        <h1>Mortgage Calculator</h1>
        <p>
          Estimate your monthly payment including principal & interest, property
          taxes, insurance, and HOA dues.
        </p>
      </section>
      <Calculator initialTaxes={taxes} initialZip={zip} />
    </div>
  );
}
