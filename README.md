Next.js breaks on dev environment when using `await params` on the root layout and we use parallel routes inside a route with dynamic parameters.

This issue happens on `next dev` only. It doesn't show up on `next build` or `next start`.

## Steps to Reproduce

1. Create a root layout under a dynamic segment (eg. locale): `app/[locale]/layout.tsx`
2. Inside that layout, use `await params` to get the locale
3. Create a parallel route inside a dynamic segment (eg. `app/[locale]/@navbarActions/posts/[id]`)
4. Run `next dev` and navigate to a page that uses the parallel route (you need to refresh the page manually, it won't break on client-side navigation): [http://localhost:3000/en/posts/1](http://localhost:3000/en/posts/1)

## Expected Behavior

The page should load without errors or it should be consistent between `next dev` and `next build`.

## Workaround

Adding a root layout with Suspense before the dynamic `[locale]` segment fixes the issue.
