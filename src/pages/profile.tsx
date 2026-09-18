import Details from "@/components/details.tsx";
import phoneLogo from "@/assets/images/illustration-phone-mockup.svg";
import { useUserContext } from "../hooks/useUser";
import { ProfileForm } from "@/components/form/profileForm";

const Profile = () => {
  const { user } = useUserContext();
  return (
    <section className="mx-auto max-w-7xl md:px-6 grid welcome-screen gap-6">
      <section className="bg-white rounded-md hidden lg:block">
        {!user ? (
          <img src={phoneLogo} alt="" className="w-76.75 h-120 mt-24" />
        ) : (
          <Details user={user} />
        )}
      </section>
      <section className="bg-white rounded-md">
        <div className="pt-8">
          <h1 className="font-bold text-2xl capitalize px-6 md:px-10">
            profile details
          </h1>
          <p className="text-[#737373] text-sm mt-4 opacity-80 w-full px-6 md:px-10">
            Add your details to add a personal touch to your profile
          </p>
          <ProfileForm />
        </div>
      </section>
    </section>
  );
};

export default Profile;
