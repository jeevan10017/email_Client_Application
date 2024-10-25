import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { getEmails, toggleEmailBookmark, setEmailAsRead } from '../store/emailSlice';
import { useNavigate } from 'react-router-dom';
import './EmailList.css';
import { FaBookmark } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const EmailList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { emails, loading, error } = useSelector((state) => state.emails);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); 
  const emailsPerPage = 10;
  const [isListVisible, setIsListVisible] = useState(true);
  const location = useLocation();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);


  useEffect(() => {
    if (searchTerm) {
      NProgress.start();
    }
  const handler = setTimeout(() => {
    setDebouncedSearchTerm(searchTerm); 
    NProgress.done(); 
  }, 1000);

  return () => {
    clearTimeout(handler); 
    NProgress.done(); 
  };
}, [searchTerm]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (emails.length === 0) {
      dispatch(getEmails());
    }

    if (location.pathname === '/emails') {
      setIsListVisible(true);
    }
  }, [dispatch, emails.length, location.pathname]);

  const handleEmailClick = (id) => {
    NProgress.start();
    setTimeout(() => {
      dispatch(setEmailAsRead(id));
      setIsListVisible(false);
      navigate(`/emails/${id}`);
      NProgress.done();
    }, 500);
  };

  const handleBookmarkToggle = (id, e) => {
    NProgress.start();
    setTimeout(() => {
      e.stopPropagation(); 
      dispatch(toggleEmailBookmark(id));
      NProgress.done();
    }, 0);
  };

  const handleClearFilter = () => {
    NProgress.start();
    setTimeout(() => {
      setFilter('all');
      NProgress.done();
    }, 0);
  };


  const filteredEmails = emails.filter((email) => {
  const matchesFilter = filter === 'all' || 
    (filter === 'read' && email.isRead) || 
    (filter === 'unread' && !email.isRead) || 
    (filter === 'favorites' && email.isBookmarked);
  
  const matchesSearch = email.subject.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || 
                        email.sender.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
  
  return matchesFilter && matchesSearch;
});
  const handleFilterChange = (newFilter) => {
    NProgress.start();
    setTimeout(() => {
      setFilter(newFilter);
      NProgress.done();
    }, 500);
  };

  const indexOfLastEmail = currentPage * emailsPerPage;
  const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
  const currentEmails = filteredEmails.slice(indexOfFirstEmail, indexOfLastEmail);
  const totalPages = Math.ceil(filteredEmails.length / emailsPerPage);

  const handlePageChange = (pageNumber) => {
    NProgress.start();
    setCurrentPage(pageNumber);
    dispatch(getEmails(pageNumber));
    NProgress.done();
  };

  if (isSmallScreen && location.pathname !== '/emails') {
    return null;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="email-list-container">

       <div className="pagination-and-search">
        
        <span className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by subject or sender"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </span>
        <span className="pagination">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)} className="arrow">
              <IoIosArrowBack />
            </button>
          )}
          <span className="page-info">{currentPage}</span>
          {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)} className="arrow">
              <IoIosArrowForward />
            </button>
          )}
        </span>
        
      </div>
      

      <div className="filter-bar">
        <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => handleFilterChange('read')} className={filter === 'read' ? 'active' : ''}>Read</button>
        <button onClick={() => handleFilterChange('unread')} className={filter === 'unread' ? 'active' : ''}>Unread</button>
        <button onClick={() => handleFilterChange('favorites')} className={filter === 'favorites' ? 'active' : ''}>Bookmarked</button>
        <button onClick={handleClearFilter} className="clear-button">Clear</button>
      </div>


      <div className={`email-list ${isListVisible ? 'visible' : 'hidden'}`}>
        {currentEmails.length > 0 ? (
          currentEmails.map((email) => (
            <div key={email.id} className={`email-item ${email.isRead ? 'read' : 'unread'}`} onClick={() => handleEmailClick(email.id)}>
              <div className="email-content">
              <div className="bookmark">
                     
                     <FaBookmark className={`bookmark-icon ${email.isBookmarked ? 'bookmarked' : ''}`} onClick={(e) => handleBookmarkToggle(email.id, e)} />
                   </div>
                <div className='align-profile'>
                  <span className="profile-photo1">{email.sender[0].toUpperCase()}</span>
                  <div>
                    <h3>{email.subject}</h3>
                    <div className="email-info">{email.sender}</div>
                   
                  </div>
                </div>
                <p>{email.body.slice(0, 120)}...</p>
                <div className="date-info">{new Date(email.createdAt).toLocaleString()}   </div>
                
              </div>
            </div>
          ))
        ) : (
          <div className='er'>No emails found </div>
        )}
      </div>
    </div>
  );
};

export default EmailList;
