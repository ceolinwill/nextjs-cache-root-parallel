import { Suspense } from "react";

export default function Layout({
  children,
  navbarActions,
}: LayoutProps<"/[locale]/posts">) {
  return (
    <Suspense>
      {navbarActions}
      {children}
    </Suspense>
  );
}
