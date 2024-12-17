"use client"

import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

// import Login from "./components/Login/page";
// import { useAppSelector } from "./stores/store";

export default function Home() {
  // const username = useAppSelector((state) => state.authReducer.value.username)
  // const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
  // const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)
  return (
    <div >
      <AddTaskForm />
    </div>
  );
}
