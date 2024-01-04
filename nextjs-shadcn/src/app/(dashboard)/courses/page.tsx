import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-neutral-950 min-h-screen grid place-content-center text-white text-xl text-center">
      <div className="d">
        <Link href="/courses/hash-of-course">
          take me a details of the course
        </Link>
      </div>
      <h1>
        view of all courses user has opted for in form of card which when
        clicked, will be taking to the details of the course.
      </h1>
    </div>
  );
}
