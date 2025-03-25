import EventForm from "@/components/shared/EventForm";
import { getUserId } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";

const CreateEvent = async () => {
  const { sessionClaims, userId } = auth();

  // const userId = sessionClaims?.userId as string;
  let dbUserId = undefined;
  if (userId !== null) {
    dbUserId = await getUserId(userId);
    // console.log(dbUserId);
  }

  if(dbUserId === undefined) return null;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={dbUserId as string} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
