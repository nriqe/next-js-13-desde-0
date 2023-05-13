"use client";

import React from "react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <p>Somethig went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
