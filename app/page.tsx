"use client";

import { useRouter } from "next/navigation";

import { AluraQuizLogo } from "./_components/AluraquizLogo";
import { Footer } from "./_components/Footer";
import { Card } from "./_components/Card";

import pageStyles from "./page.module.css";

export default function Page() {
  const router = useRouter();

  return (
    <main className={pageStyles.screen} style={{ flex: 1 }}>
      <section className={pageStyles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px"
          }}
        >
          <AluraQuizLogo />
        </div>

        <Card
          headerTitle="Teste suas habilidades" children={""}        >
          <p style={{ marginBottom: "32px" }}>
            Teste os seus conhecimentos sobre o universo literário!
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const name = "Mario";
              router.push(`/game?player=${name}`)
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <input
                type="text"
                placeholder="Diga seu nome de bookstan :)"
                name="playerName"
              />
            </div>
            <button>
              Vamos jogar!
            </button>
          </form>
        </Card>
        <Footer />
      </section>
    </main>
  )
}