"use client";
import { redirect } from "next/navigation";
import { CheckApiToken } from "@/app/_functions/check-api-token";
import Loading from "@/app/_components/loading/loading";
const Redirect = ({ get }) => {
  let promiseB = CheckApiToken();
  if (promiseB === null || promiseB.data.stateUser === "error-network") {
    return (
      <Loading />
    )
  }
  if (promiseB.data.stateUser !== "ok-auth") {
    return redirect("/");
  }
}
export default Redirect;