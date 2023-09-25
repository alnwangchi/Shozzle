import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'next-share';

interface ShareButtonsProps {
  pathname: string;
  title: string;
  summary?: string;
}

const DOMAIN_URL = 'https://shozzle.dev';

const ShareButtons = (props: ShareButtonsProps) => {
  const { pathname, title, summary } = props;

  const url = `${DOMAIN_URL}${pathname}`;

  return (
    <div className="next-share__ShareButton flex space-x-1">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={30} round />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title} summary={summary}>
        <LinkedinIcon size={30} round />
      </LinkedinShareButton>
      <LineShareButton url={url} title={title}>
        <LineIcon size={30} round />
      </LineShareButton>
    </div>
  );
};

export default ShareButtons;
