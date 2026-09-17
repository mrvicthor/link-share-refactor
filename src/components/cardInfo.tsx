import type { User } from "@/domain/user";
import CardLink from "./cardLink";

type Props = {
  user: User | undefined;
};

const CardInfo = ({ user }: Props) => {
  const fullName = `${user?.firstName} ${user?.lastName}`;
  const links = user?.links;

  return (
    <section className="p-8 md:bg-white rounded-lg w-87.25 absolute top-32 md:top-56 left-[50%] translate-x-[-50%] z-40 flex flex-col gap-y-4 items-center md:shadow-soft">
      <div className="h-26 w-26 overflow-hidden rounded-full border-4 border-[#633cff]">
        <img src={`${user?.profilePicture}`} alt="profile picture" />
      </div>
      <h1 className="font-bold text-2xl capitalize">{fullName}</h1>
      <p className="text-[#737373]">{user?.email}</p>
      <ul className="space-y-4 mt-8 h-52 overflow-y-auto">
        {links?.map((link) => (
          <CardLink platform={link.platform} url={link.url} key={link.id} />
        ))}
      </ul>
    </section>
  );
};

export default CardInfo;
