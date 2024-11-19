"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/app/_components/loading/loading";
function Replace({ get }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(get);
  }, [get]);
  return (
    <Loading />
  );


}
export default Replace;