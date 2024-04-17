import { LoginForm } from '@/components/auth/login-form';
import HomePage from '../components/pages/home/Home'
import { checkAuth } from "@/server/auth";

export default async function Home() {
  await checkAuth();
  
  return (
    <HomePage />
  );
}
