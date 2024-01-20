"use client"
import { RouteEnum } from "@/enums/route.enum";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    console.log('this is my nigger don');
    router.push(RouteEnum.HOME);
  }, []);

  return <>mansoor</>;
}
