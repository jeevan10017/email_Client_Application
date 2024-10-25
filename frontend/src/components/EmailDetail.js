import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmailById, toggleEmailBookmark } from '../store/emailSlice';
import './EmailDetail.css';
import { FaBookmark, FaArrowLeft } from 'react-icons/fa';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const EmailDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { emailDetail, loading, error } = useSelector((state) => state.emails);
  
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    NProgress.start();
    dispatch(getEmailById(id));
    NProgress.done();
  }, [dispatch, id]);

  const handleBookmarkToggle = async (e) => {
    NProgress.start();
    e.stopPropagation();
  
    await dispatch(toggleEmailBookmark(id));
    if (emailDetail) {
      const updatedEmailDetail = { ...emailDetail, isBookmarked: !emailDetail.isBookmarked };
      dispatch({ type: 'emails/updateEmailDetail', payload: updatedEmailDetail });
    }
    NProgress.done();
  };
  
  

  const handleBack = () => {
    navigate('/emails');
  };

  if (loading) return <div className='er'>Loading...</div>;
  if (error) return <div className='er'>Error: {error}</div>;
  if (!emailDetail) return <div className='er'>No email found</div>;

  return (
    <div className="email-detail-container">
      {isSmallScreen && (
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back 
        </button>
      )}

      <div className="email-detail-header">
        <div className="profile-bg">
          <div className="profile-photo">{emailDetail.sender[0].toUpperCase()}</div>
        </div>
        <div className="header-content">
          <h2>{emailDetail.subject || 'No Subject'}</h2>
          <div className="email-info1">
            <p>{emailDetail.sender || 'Unknown Sender'}</p>
            <p>{new Date(emailDetail.createdAt).toLocaleString()}</p>
          </div>
        </div>
        <FaBookmark 
          className={`bookmark-icon ${emailDetail.isBookmarked ? 'bookmarked' : ''}`}
          onClick={handleBookmarkToggle} 
        />
      </div>

      <div className="email-detail-body">
        <p>{emailDetail.body || 'No content available'}</p>
      </div>
    </div>
  );
};

export default EmailDetail;
