import { LoginForm } from '@/components/auth/login-form';
import HomePage from '../components/pages/home/Home'
import { checkAuth, getServerAuthSession } from "@/server/auth";
import { getClient } from '@/arke/getClient';
import { IMember } from '@/types/member';

export default async function Home() {
 const client = getClient()
 await checkAuth();
 const session = await getServerAuthSession()
 const userResponse = await client.unit.get<IMember>(session?.user?.arke_id as string, session?.user?.id as string);
 const user = userResponse.data.content

  return (
    <HomePage user={user}/>
  );
}
