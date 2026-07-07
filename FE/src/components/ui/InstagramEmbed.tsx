import { cn } from '../../lib/utils';

/**
 * Instagram's /embed page wraps the media in white chrome (profile header,
 * "View more on Instagram" footer) that can't be styled cross-origin.
 * Crop to the media instead: reels render at 4:5 below a ~54px header, so an
 * oversized, slightly zoomed iframe inside a 4:5 overflow-hidden box shows
 * only the video. The zoom absorbs a few px of header-height variance.
 */
export const InstagramEmbed = ({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) => (
  <div className={cn('relative aspect-[4/5] overflow-hidden bg-black', className)}>
    <iframe
      src={url}
      title={title}
      scrolling="no"
      loading="lazy"
      allow="encrypted-media"
      className="absolute left-0 w-full border-0 bg-black scale-[1.08]"
      style={{ top: '-54px', height: 'calc(100% + 54px)' }}
    />
  </div>
);
