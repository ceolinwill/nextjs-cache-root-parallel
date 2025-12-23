import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1>Posts Page</h1>
      <Link href="/en/posts/first-post" className="underline text-blue-600">
        Go to First Post
      </Link>
    </div>
  );
}
