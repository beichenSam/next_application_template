"use client";

import Error from "next/error";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error
          statusCode={404}
          displayName="Next-Template"
          title="your page is not found"
        />
      </body>
    </html>
  );
}
