export function Hero() {
    return (
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="rounded-full border px-3 py-1 text-sm font-medium">
              Tech Marketplace
            </span>
  
            <h1 className="mt-6 text-5xl font-bold tracking-tight">
              Build Your
              <br />
              Dream Setup
            </h1>
  
            <p className="mt-6 text-lg text-gray-600">
              Discover laptops, smartphones, keyboards,
              monitors, and accessories from trusted sellers.
            </p>
  
            <div className="mt-8 flex gap-4">
              <button className="rounded-lg bg-black px-6 py-3 text-white">
                Shop Now
              </button>
  
              <button className="rounded-lg border px-6 py-3">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }