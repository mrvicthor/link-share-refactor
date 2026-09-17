import phoneLogo from "@/assets/images/illustration-phone-mockup.svg";
import { useUserContext } from "@/hooks/useUser";
import { LinksList } from "./linksList";

const Phone = () => {
  const { user } = useUserContext();

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="flex justify-center h-full">
      {user ? (
        <div className="phone-container relative top-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="308"
            height="500"
            fill="none"
            viewBox="0 0 308 632"
          >
            <path
              stroke="#737373"
              d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
            />
            <path
              fill="#fff"
              stroke="#737373"
              d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
            />
          </svg>
          <LinksList />
          {user && user.profilePicture ? (
            <div className="absolute h-20 w-20 overflow-hidden top-14 rounded-full left-[50%] -translate-x-[50%] border-2 border-purple-500">
              <img
                src={`${user.profilePicture}`}
                alt={`${user.firstName}-image`}
                width="500"
                height="500"
                loading="lazy"
                className="rounded-full"
              />
            </div>
          ) : (
            <div className="absolute bg-[#d9d9d9] opacity-50 h-24 w-24 top-25 rounded-full left-[50%] translate-x-[-50%]" />
          )}
          {user ? (
            <p className="absolute top-38 left-[50%] translate-x-[-50%] font-medium capitalize">
              {fullName}
            </p>
          ) : (
            <div className="absolute bg-[#d9d9d9] h-3 w-31.25 opacity-50 top-40 rounded-full left-[50%] translate-x-[-50%]" />
          )}
          {user ? (
            <p className="absolute top-46 rounded-full left-[50%] translate-x-[-50%] text-sm text-[#737373] opacity-50">
              {user.email}
            </p>
          ) : (
            <div className="absolute bg-[#d9d9d9] h-2 w-19.25 opacity-50 top-48 rounded-full left-[50%] translate-x-[-50%]" />
          )}
        </div>
      ) : (
        <img
          src={phoneLogo}
          alt="phone image"
          className="w-76.75 h-120 mt-24"
        />
      )}
    </div>
  );
};

export default Phone;
