import React from "react";

export default function Page() {
  return (
    <div className="bg-neutral-950 min-h-screen grid place-content-center text-white text-xl  gap-10 text-center">
      a preview page for seeing the current data of the profile.
      <div className="d">
        edit button. will take to a form on the route /profile/edit to change
        the details. will have options to change the things. will have a sidebar
        to change different things. lijke name, email, password, phone and other
        data that is in the profile.
      </div>
    </div>
  );
}
