"use client"
import Link from "next/link";
import VortexMandalaSmokeEffect from "./components/Mandalas/VortexMandalasSmokeEffect";
import SmokeEffectIndividual from "./components/SmokeEffects/SmokeEffectIndividual";
import { Button } from "./components/ui/button";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <VortexMandalaSmokeEffect />
      <SmokeEffectIndividual isVisible={true} />
      <div className="border gradient-background2 rounded-lg p-6 gap-4 z-10 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 text-white">AI Interview Scheduler</h1>
        <p className="text-lg mb-8 text-white">Welcome to the AI Interview Scheduler</p>
        <Link href={'/dashboard'}>
          <Button>Dashboard</Button>
        </Link>

      </div>


    </div>
  );
}
