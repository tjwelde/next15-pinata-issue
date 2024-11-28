'use client'

import { useEffect } from "react";

export function Test() {
  useEffect(() => {
    ;(async () => {
      await fetch('/api/hello')
    }
    )()
  }, [])

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}