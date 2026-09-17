import FormBoard from "@/components/formBoard";
import Phone from "@/components/phone";

const WelcomeScreen = () => {
  return (
    <section className="mx-auto md:max-w-7xl md:px-6 grid welcome-screen gap-6 overflow-hidden">
      <section className="bg-white rounded-md hidden lg:block">
        <Phone />
      </section>
      <section className="bg-white rounded-md">
        <FormBoard />
      </section>
    </section>
  );
};

export default WelcomeScreen;
