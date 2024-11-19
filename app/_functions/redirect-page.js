"use client";
import { redirect } from "next/navigation";
import { CheckApiToken } from "./check-api-token";
import Loading from "../_components/loading/loading";
const RedirectPage = ({ get }) => {
  let promiseB = CheckApiToken();
  if (promiseB === null || promiseB.data.stateUser === "error-network") {
    return (
      <Loading />
    )
  }
  if (promiseB.data.stateUser === "ok-auth") {
    return redirect("/");
  }
}
export default RedirectPage;