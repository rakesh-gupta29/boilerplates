// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Edit2Icon } from "lucide-react";

// interface Detail {
//   name: string;
//   age: string;
//   salutation: string;
//   email: string;
//   gender: string;
//   phone: string;
//   phoneCountry: string;
//   id: string;
// }

// interface Props {
//   type: "adult" | "infant" | "child";
//   updateDetails: (id: string) => void;
//   details: Detail;
// }
// export default function PassengerCard({ details, type, updateDetails }: Props) {
//   const { name, age, gender, phone, phoneCountry, salutation, email, id } =
//     details;

//   return (
//     <>
//       <article className="border-1 max-w-lg flex  gap-4  bg-slate-100 items-start border-solid border-neutral-200 px-5 py-6 rounded-md">
//         <Badge variant="primary" className="capitalize mt-2">
//           {type}
//         </Badge>
//         <div className="flex flex-col gap-2 flex-1 pl-4  ">
//           <h4 className="scroll-m-20 text-2xl   line-clamp-1 font-semibold tracking-tight">
//             {name}
//           </h4>
//           <p className="leading-none font-medium text-black  text-opacity-80">
//             {age}, {gender}
//           </p>
//         </div>
//         <div className="mt-2">
//           <Button
//             type="button"
//             onClick={() => updateDetails(id)}
//             size="icon"
//             className="h-9 w-9 bg-neutral-300 outline-neutral-300 hover:bg-neutral-200"
//           >
//             <Edit2Icon className="h-4 w-4 stroke-neutral-800" />
//           </Button>
//         </div>
//       </article>
//     </>
//   );
// }

export default function Card() {
  return "this is the card";
}
