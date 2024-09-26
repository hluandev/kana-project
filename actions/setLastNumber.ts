"use server";

import { cookies } from "next/headers";

export async function setLastNumber(id: any) {
  cookies().set("lastNumber", id.toString());
}
