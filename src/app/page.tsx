"use client"
import Login from "./components/Login/page";
import { useAppSelector } from "./stores/store";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username)
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
  const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Login />
      <h1>
        UserName:{username}
      </h1>

      {isAuth && isModerator && <h1>
        Moderator user
      </h1>}
    </div>
  );
}
