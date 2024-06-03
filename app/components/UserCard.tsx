import Image from "next/image";
import { User } from "../model/user.model";
import Link from "next/link";
import fb from "../../public/facebook.svg";
import insta from "../../public/instagram.svg";
import twitter from "../../public/twitter.svg";

interface Prop {
  user: User;
}

const UserCard = ({ user }: Prop) => {
  return (
    <div className="rounded-xl shadow-lg ">
      <Image src={user.image} alt="user" width={238} height={231} className="w-full rounded-t-xl" />
      <div className="text-center p-5">
        <h5 className="text-lg font-bold">{user.name}</h5>
        <p className="text-sm text-lightgrey-color mb-3">{user.profession}</p>
        <div className="flex items-center justify-center text-lightgreen-color">
          <Link href={user.facebook}>
            <Image src={fb} alt="fb" width={24} height={24} />
          </Link>
          <Link href={user.instagram} className="mx-3">
            <Image src={insta} alt="fb" width={24} height={24} />
          </Link>
          <Link href={user.twitter}>
            <Image src={twitter} alt="fb" width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
