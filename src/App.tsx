import { Container } from "@/components/layout/Container";

function App() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] py-16">
      <Container>
        <div className="rounded-[var(--radius-lg)] bg-white p-8 shadow-[var(--shadow-md)]">
          <h1>Ruby Soho</h1>

          <p className="mt-4">
            Our first production-quality layout primitive.
          </p>
        </div>
      </Container>
    </main>
  );
}

export default App;