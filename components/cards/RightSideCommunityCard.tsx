import Image from "next/image";
import Link from "next/link";


interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
}

function RightSideCommunityCard({ id, name, username, imgUrl}: Props) {
  return (
    <article className='community-card'>
      <div className='flex flex-wrap items-center gap-3'>
        <Link href={`/communities/${id}`} className='relative h-12 w-12'>
          <Image
            src={imgUrl}
            alt='community_logo'
            fill
            className='rounded-full object-cover'
          />
        </Link>

        <div>
          <Link href={`/communities/${id}`}>
            <h4 className='text-base-semibold text-light-1'>{name}</h4>
          </Link>
          <p className='text-small-medium text-gray-1'>@{username}</p>
        </div>
      </div>

    </article>
  );
}

export default RightSideCommunityCard;