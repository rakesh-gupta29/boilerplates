import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-neutral-950 min-h-screen grid place-content-center text-white text-xl  gap-10 text-center">
      <div>
        <Link href="resume/preview">Preview </Link>
      </div>
      <div className="d">
        download already built resume will take to /resume/preview. genereate
        the pdf on client side and user can download this.
      </div>
      <div className="d">
        <h3>multi step form to build the resume with help of input fields </h3>
      </div>
      <div className="d">save and next</div>
      clicks the last stage and I save the data inside of the database.
      <div>
        after the form is submitted, the post api will return all the payload
        and that will be shown on the preview page
      </div>
      <div>
        we are going to use something to generate the resume on client side and
        then make the user download it.
      </div>
      <div className="d">
        he will then to taken to a /resume/preview page so that he can see the
        resume and download
      </div>
    </div>
  );
}
