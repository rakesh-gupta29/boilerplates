import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <ul className=" list-none grid gap-3">
      <ListItem text="back to home" href="/" icon="/assets/icons/home.svg" />
      <ListItem text="Courses" href="/courses" icon="/assets/icons/home.svg" />
      <ListItem text="resume" href="/resume" icon="/assets/icons/home.svg" />
      <ListItem
        text="challenge"
        href="/challenges"
        icon="/assets/icons/home.svg"
      />
      <ListItem
        text="paid internships"
        href="/paid-internships"
        icon="/assets/icons/home.svg"
      />
      {/* <Link href="/">Back to home</Link>

      <Link href="courses">Courses</Link>
      <Link href="resume">Resume</Link>
      <Link href="challenges">Challenges</Link>
      <Link href="courses">Courses</Link>
      <Link href="paid-internships">paid internships</Link> */}
    </ul>
  );
}

type IListItem = {
  text: string;
  icon: string;
  href: string;
};
function ListItem({ href, icon, text }: IListItem) {
  return (
    <li>
      <Link href={href} className="flex items-center gap-2 ">
        <img className="h-5 w-5" src={icon} alt={text} />
        {text}
      </Link>
    </li>
  );
}
