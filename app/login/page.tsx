import { LoginForm } from "@/components/auth/login-form";

export default function Page() {
  return (
    <div className="bg-background h-screen">
      <div className="flex justify-center items-center pt-40">
        <h1 className="font-bold text-7xl">
          Card <span className="text-emerald-500">Collector</span>
        </h1>
      </div>
      <div className="flex justify-center items-center pt-8">
        <h2 className="font-bold text-xl">
          A site where you can track your collected cards.
        </h2>
        </div>
      <img src="/assets/black.png"></img>
      <LoginForm/>
    </div>
  );
}
