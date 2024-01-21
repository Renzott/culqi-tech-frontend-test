"use client";

import LoginStep from "@/components/Steps/LoginStep";
import useStepStore from "@/store/stepStore";
import Navigator from "@/components/Navigator";
import TokenStep from "@/components/Steps/TokenStep";
import GetCardStep from "@/components/Steps/GetCardStep";

// create a steps system
export default function Home() {

  const { step } = useStepStore();

  return (
    <>
      {step === 0 && <LoginStep />}
      {step === 1 && <TokenStep />}
      {step === 2 && <GetCardStep />}
      <Navigator />
    </>
  );
  
}