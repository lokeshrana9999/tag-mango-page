import { ConfettiHeader } from './ConfettiHeader';
import { FeedPost } from './FeedPost';
import { SubscriberPost } from './SubscriberPost';
import imgFrame237827 from "@/assets/55da0fffa11de259c802bcbee77cdaeb424f72da.png";
import imgAvatar1 from "@/assets/a8cb2087e1ef996deca15111fb23f9e4fb85f8d3.png";
import imgAvatar2 from "@/assets/8abfc3a4ba6679822afacf7f361b9af4b910b0f2.png";
import imgAvatar3 from "@/assets/1770c5a7403cac810324d62124f213964ba0e950.png";
import { Avatar, AvatarImage } from "./ui/avatar";

interface FeedSectionProps {
  selectedDay: number;
}

export function FeedSection({ selectedDay }: FeedSectionProps) {
  return (
    <div className="space-y-6" style={{
      maxWidth: '640px',
    }}>
      {/* Your Submission Section */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm">
        <ConfettiHeader />
        
        <div className="relative mt-[-45px] z-[11] bg-white rounded-[24px] dark:bg-[#2B292D]">
          <FeedPost
            author="Ashraf Idrishi"
            timeAgo="1s"
            content="Today's challenge workout completed—feeling stronger already"
            image={imgFrame237827}
            likes={18}
            comments={10}
            isYourPost={true}
          />
        </div>
      </div>

      {/* See What Others Shared */}
      <div className="bg-white dark:bg-[#2B292D] rounded-3xl pt-6 px-3 pb-3 shadow-sm">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-[#211f26] dark:text-white mb-2 flex flex-wrap items-center justify-center gap-x-1">
            <span>See what others</span>
            <span className="inline-flex items-center -space-x-2 shrink-0">
              <Avatar size={24} className="border-2 border-white dark:border-gray-900">
                <AvatarImage src={imgAvatar1} alt="" />
              </Avatar>
              <Avatar size={24} className="border-2 border-white dark:border-gray-900">
                <AvatarImage src={imgAvatar2} alt="" />
              </Avatar>
              <Avatar size={24} className="border-2 border-white dark:border-gray-900">
                <AvatarImage src={imgAvatar3} alt="" />
              </Avatar>
            </span>
            <span>shared</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            85+ participants already completed
          </p>
        </div>

        <SubscriberPost />
      </div>
    </div>
  );
}
