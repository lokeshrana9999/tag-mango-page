import imgAvatar from "@/assets/27547db06df34a8ad36d31f5955f6ce92fb6f216.png";
import { Avatar, AvatarImage } from "./ui/avatar";
import { ReactionBar } from "./ReactionBar";

interface FeedPostProps {
  author: string;
  timeAgo: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  isYourPost?: boolean;
}

export function FeedPost({ author, timeAgo, content, image, likes, comments, isYourPost }: FeedPostProps) {
  return (
    <article className="space-y-4" >


      {/* Author Info */}

      <div className="pt-3 px-3 pb-0">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar size={48}>
              <AvatarImage src={imgAvatar} alt={author} />
            </Avatar>
            <div>
              <h3 className="font-semibold text-base text-[#211f26] dark:text-white">{author}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{timeAgo}</p>
            </div>
          </div>
          <button className="p-2  rounded-full mt-[-5px] mr-[-5px]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <circle cx="6" cy="12" r="1.5" fill="#211F26" className="dark:fill-white" />
              <circle cx="12" cy="12" r="1.5" fill="#211F26" className="dark:fill-white" />
              <circle cx="18" cy="12" r="1.5" fill="#211F26" className="dark:fill-white" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <p className="text-[14px] text-[#211f26] dark:text-white leading-relaxed mt-[12px] pl-[5px]">
          {content}
        </p>
      </div>


      {/* Image */}
      <div className="overflow-hidden bg-gray-100 dark:bg-gray-800 max-h-[307px] grid place-items-center justify-items-stretch items-center justify-stretch content-center mb-[0px]">
        <img src={image} alt="" className="w-full object-cover" />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-[18px] py-[12px] pb-4 h-[56px]">
        <ReactionBar likes={likes} />
        <button className="text-sm text-gray-600 dark:text-white hover:underline">
          {comments} Comments
        </button>
      </div>
    </article>
  );
}
