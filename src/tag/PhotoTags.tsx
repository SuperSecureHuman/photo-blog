import PhotoTag from '@/tag/PhotoTag';
import { isTagFavs } from '.';
import FavsTag from './FavsTag';
import { EntityLinkExternalProps } from '@/components/primitives/EntityLink';

export default function PhotoTags({
  tags,
  contrast,
  prefetch,
}: {
  tags: string[]
} & EntityLinkExternalProps) {
  return (
    <div className="flex flex-col">
      {tags.map(tag =>
        <>
          {isTagFavs(tag)
            ? <FavsTag key={tag} {...{ contrast, prefetch }} />
            : <PhotoTag key={tag} {...{ tag, contrast, prefetch }} />}
        </>)}
    </div>
  );
}
