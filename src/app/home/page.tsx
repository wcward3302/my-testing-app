import Link from "next/link";

export default function Home() {
  return (
    <main>

      <div id="topBar" className="div1">
        <h1>Cybersecurity Assessment</h1> 
        <Link href="/">
          <button>Logout</button>
        </Link> 
      </div>

      <div>
          <div id="questionBox" className="div1">
              <Link href="/email">
                <button className="btn px-4 py-4">Email</button>
              </Link> 

              <Link href="/text">
                <button>text</button>
              </Link>

              <Link href="/ad">
                <button>Ads</button>
              </Link>
          </div>
        </div>
    </main>
  );
}
