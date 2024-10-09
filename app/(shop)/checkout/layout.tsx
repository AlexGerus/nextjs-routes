import { Suspense } from 'react';

export default function CheckoutLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>123</nav>
      <Suspense fallback={<p>Loading feed...</p>}>
        <h1>123213123</h1>
      </Suspense>
      {children}
    </section>
  );
}