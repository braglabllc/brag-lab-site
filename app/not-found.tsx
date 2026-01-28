import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container-pad py-20">
      <div className="card p-10 text-center">
        <div className="kicker">404</div>
        <h1 className="h2 mt-3">That page isn’t here.</h1>
        <p className="p mt-4">But your next Brag Lab moment absolutely can be.</p>
        <Link className="btn btn-primary no-underline mt-8 inline-flex" href="/">Back Home</Link>
      </div>
    </main>
  );
}
