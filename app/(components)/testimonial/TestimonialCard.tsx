import userPlaceholder from "@/app/assets/user.jpg";
import Image from "next/image";

type Props = {
  testimonial: string;
  username: string;
  userRole: string;
  userCompany: string;
  tags: string[];
};

const TestimonialCard = ({
  testimonial,
  username,
  userRole,
  userCompany,
  tags,
}: Props) => {
  return (
    <div className="text-center flex flex-col gap-16 min-w-full carousel-box">
      <p className="text-4xl md:text-5xl">"{testimonial}"</p>
      <div className="grid place-items-center gap-8">
        <div className="rounded-full overflow-hidden">
          <Image src={userPlaceholder} alt="user profile" className="size-14" />
        </div>
        <div className="grid gap-2 text-lg">
          <span>{username}</span>
          <span className="text-zinc-500">
            {userRole} at {userCompany}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-90 self-center md:self-end mt-4 md:mt-14 mb-4 gap-2">
        {tags.map((tag, idx) => (
          <div
            key={idx}
            className="text-sm px-2 border border-zinc-500 text-zinc-500 rounded-full"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
