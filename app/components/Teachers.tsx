import Image from "next/image";
import user1 from "../../public/user-cover-1.png";
import user2 from "../../public/user-cover-2.png";
import user3 from "../../public/user-cover-3.png";
import user4 from "../../public/user-cover-4.png";

import Link from "next/link";
import UserCard from "./UserCard";

const Teachers = () => {
  const teachersInfo = [
    {
      id: 1,
      name: "Julian Jameson",
      image: user1,
      profession: "Profession",
      facebook: "https://www.facebook.com/arifulsajib347",
      instagram: "https://www.instagram.com/arifulsajib347",
      twitter: "https://www.twitter.com/arifulsajib347"
    },
    {
      id: 2,
      name: "Julian Jameson",
      image: user2,
      profession: "Profession",
      facebook: "https://www.facebook.com/arifulsajib347",
      instagram: "https://www.instagram.com/arifulsajib347",
      twitter: "https://www.twitter.com/arifulsajib347"
    },
    {
      id: 3,
      name: "Julian Jameson",
      image: user3,
      profession: "Profession",
      facebook: "https://www.facebook.com/arifulsajib347",
      instagram: "https://www.instagram.com/arifulsajib347",
      twitter: "https://www.twitter.com/arifulsajib347"
    },
    {
      id: 4,
      name: "Julian Jameson",
      image: user4,
      profession: "Profession",
      facebook: "https://www.facebook.com/arifulsajib347",
      instagram: "https://www.instagram.com/arifulsajib347",
      twitter: "https://www.twitter.com/arifulsajib347"
    }
  ];

  return (
    <section className="bg-white px-8 lg:px-[195px] py-12 lg:py-32">
      <p className="text-sm font-bold text-lightgreen-color">Team</p>
      <h1 className="text-xl lg:text-2xl font-bold text-deepblue-color my-3">Get Quality Education</h1>
      <p className="text-sm text-lightgrey-color w-2/4 mb-20">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {teachersInfo.map((teacher) => (
          <UserCard key={teacher.id} user={teacher} />
        ))}
      </div>
    </section>
  );
};

export default Teachers;
