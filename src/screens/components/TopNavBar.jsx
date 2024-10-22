import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './topnavbar.css';

const TopNavBar = ({
  className = '',
  peersCartWidth,
  peersCartHeight,
  contentRightHeight,
  contentRightWidth,
}) => {
  const peersCartStyle = useMemo(() => {
    return {
      width: peersCartWidth,
      height: peersCartHeight,
    };
  }, [peersCartWidth, peersCartHeight]);

  const contentRightStyle = useMemo(() => {
    return {
      height: contentRightHeight,
      width: contentRightWidth,
    };
  }, [contentRightHeight, contentRightWidth]);

  return (
    <header className={`top-nav-bar ${className}`}>
      <div className="content-left">
        <div className="content-left-inner">
          <img
            className="logo-1-icon"
            loading="lazy"
            alt=""
            src="/logo-11@2x.png"
          />
          <a className="peerscart" style={peersCartStyle} />
        </div>
      </div>
      <div className="bell-wrapper">
        <img className="bell-icon" alt="" src="/bell.svg" />
      </div>
      <div className="content-right" style={contentRightStyle}>
        <img
          className="question-icon"
          loading="lazy"
          alt=""
          src="/question.svg"
        />
      </div>
      <div className="profile">
        <div className="child">
          <img className="profile-icon" alt="" src="/profile@2x.png" />
          <div className="source">Chelsea</div>
        </div>
        <div className="switch">
          <img className="caretdown-icon" alt="" src="/caretdown.svg" />
        </div>
      </div>
    </header>
  );
};

TopNavBar.propTypes = {
  className: PropTypes.string,
  peersCartWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  peersCartHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  contentRightHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  contentRightWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TopNavBar;