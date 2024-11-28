import { NextResponse } from "next/server";
import pinataSDK from '@pinata/sdk'

export async function GET(request: Request): Promise<Response> {

  new pinataSDK({})

  return NextResponse.json(
    {}
  )
}