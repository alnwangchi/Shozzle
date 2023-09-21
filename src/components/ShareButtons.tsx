import React from 'react';
import FacebookShareButton from 'react-share/lib/FacebookShareButton';
import FacebookIcon from 'react-share/lib/FacebookIcon';
import LineShareButton from 'react-share/lib/LineShareButton';
import LineIcon from 'react-share/lib/LineIcon';
import LinkedinShareButton from 'react-share/lib/LinkedinShareButton';
import LinkedinIcon from 'react-share/lib/LinkedinIcon';

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
    <div className="flex space-x-1">
      <FacebookShareButton
        url={url}
        quote={title}
        className="circle-btn animation-1 flex self-end shrink-0"
      >
        <span className="icon">
          <FacebookIcon size={30} round iconFillColor="#101010" />
        </span>
        <div className="circle-bg" />
      </FacebookShareButton>
      <LineShareButton
        url={url}
        title={title}
        className="circle-btn animation-1 flex self-end shrink-0"
      >
        <span className="icon">
          <LineIcon size={30} round iconFillColor="#101010" />
        </span>
        <div className="circle-bg" />
      </LineShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={summary}
        className="circle-btn animation-1 flex self-end shrink-0"
      >
        <span className="icon">
          <LinkedinIcon size={30} round iconFillColor="#101010" />
        </span>
        <div className="circle-bg" />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
