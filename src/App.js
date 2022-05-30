import "./styles.css";
import logo from "./+vantage.png";
import { supabase } from "./client";
import { useState, useEffect } from "react";
import Auth from "./Auth";
import Account from "./Account";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <img src={logo} alt={"Logo we spent too much time on"} height="300" />

        <h1>Let's Roll Some Dice!</h1>
        <h6> version:send halp pls</h6>
      </header>

      <main>
        <p id="demo"> Regular: </p>
        <p id="demo2"> Advantage: </p>
        <p id="demo3"> Disadvantage: </p>

        <div>
          <button
            onClick={() =>
              (document.getElementById("demo").innerHTML =
                "Regular: " + Math.floor(Math.random() * 20 + 1))
            }
          >
            Regular:{" "}
          </button>
        </div>

        <div>
          <button onClick={adRoll}> Advantage </button>
        </div>

        <div>
          <button onClick={disRoll}> Disadvantage </button>
        </div>
      </main>

      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </div>
    </div>
  );

  function disRoll() {
    let x = Math.floor(Math.random() * 20 + 1);
    let y = Math.floor(Math.random() * 20 + 1);
    let min = Math.min(x, y);
    const rollSet = [x, y, "Final " + min];
    document.getElementById("demo3").innerHTML = "Disadvantage: " + rollSet;
  }

  function adRoll() {
    let x = Math.floor(Math.random() * 20 + 1);
    let y = Math.floor(Math.random() * 20 + 1);
    let max = Math.max(x, y);
    const rollSet = [x, y, "Final " + max];
    document.getElementById("demo2").innerHTML = "Advantage: " + rollSet;
  }
}
