import { useParams } from "react-router";
import { useUserContext } from "@/hooks/useUser.ts";
import Notification from "@/components/notification";
import CardInfo from "@/components/cardInfo";
import { NotificationProvider } from "@/context/notificationProvider";
import PreviewHeader from "@/components/previewHeader";

const Preview = () => {
  const { id } = useParams();
  console.log({ id });
  const { user } = useUserContext();

  return (
    <NotificationProvider>
      <section className="relative">
        <div className="md:bg-[#633cff] px-6 pt-6 h-89.25 md:rounded-b-3xl">
          {user ? <PreviewHeader /> : null}
        </div>
        <CardInfo user={user} />
        <Notification message="The link has been copied to your clipboard!" />
      </section>
    </NotificationProvider>
  );
};

export default Preview;
