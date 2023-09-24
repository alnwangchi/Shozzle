import React from 'react';
import * as ReactShare from 'react-share';

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
      <ReactShare.FacebookShareButton
        url={url}
        quote={title}
        className="circle-btn animation-1 flex self-end shrink-0"
      >
        <span className="icon">
          <ReactShare.FacebookIcon size={30} round iconFillColor="#101010" />
        </span>
        <div className="circle-bg" />
      </ReactShare.FacebookShareButton>
      <ReactShare.LineShareButton
        url={url}
        title={title}
        className="circle-btn animation-1 flex self-end shrink-0"
      >
        <span className="icon">
          <ReactShare.LineIcon size={30} round iconFillColor="#101010" />
        </span>
        <div className="circle-bg" />
      </ReactShare.LineShareButton>
      <ReactShare.LinkedinShareButton
        url={url}
        title={title}
        summary={summary}
        className="circle-btn animation-1 flex self-end shrink-0"
      >
        <span className="icon">
          <ReactShare.LinkedinIcon size={30} round iconFillColor="#101010" />
        </span>
        <div className="circle-bg" />
      </ReactShare.LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
