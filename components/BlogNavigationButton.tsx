"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface BlogNavigationButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
}

export default function BlogNavigationButton({ href, children, className, loadingText = "Loading..." }: BlogNavigationButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        startTransition(() => {
          router.push(href);
        });
      }}
      disabled={isPending}
    >
      {isPending ? loadingText : children}
    </button>
  );
}
