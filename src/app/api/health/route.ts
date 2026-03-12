import { NextResponse } from "next/server";

export async function GET() {
  let dbHost = null;
  if (process.env.DATABASE_URL) {
    try {
      const url = new URL(
        process.env.DATABASE_URL.replace(/^postgresql:/, "postgres:")
      );
      dbHost = url.hostname;
    } catch {
      dbHost = "(parse error)";
    }
  }
  return NextResponse.json({
    ok: true,
    schema: process.env.DATABASE_SCHEMA,
    dbHost,
  });
}
