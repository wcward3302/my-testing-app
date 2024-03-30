import Link from "next/link";

export default function Home() {
  return (
    <main>

      <div id="topBar" className="div1">
        <h1>Cybersecurity Assessment</h1> 
      </div>

      <div>
          <div id="questionBox" className="div1">
              <Link href="/home">
                <button className="btn px-4 py-4">Skip to home</button>
              </Link> 
          </div>
        </div>
    </main>
  );
}
