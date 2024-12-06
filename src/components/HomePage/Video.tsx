"use client";
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // YouTube video ID
  const videoId = '25RdTDN2Trg';

  // Disable scrolling on the body when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling again
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up the effect
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="max-w-[1440px] w-11/12 lg:w-10/12 pt-20 md:pt-24 xl:pt-40 mx-auto">
        {/* Thumbnail with Icon */}
        <div
          className="relative mx-auto bg-cover bg-center h-screen lg:h-[754px] xl:h-[854px] cursor-pointer rounded-2xl"
          onClick={toggleModal}
          style={{
            backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`, // YouTube video thumbnail
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative px-5 py-5 animate-scaleColorChange bg-primary bg-opacity-80 rounded-full flex justify-center items-center cursor-pointer">
              <FaPlay className="text-white text-2xl" />
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed top-1/2 bottom-1/2 -translate-y-1/2 inset-0 bg-black bg-opacity-70 h-full z-[999] flex items-center justify-center"
            onClick={toggleModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl  bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <button
                onClick={toggleModal}
                className="absolute top-3 right-3 text-primary text-3xl font-bold focus:outline-none"
              >
                ✖
              </button>

              <div className="relative pt-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&fs=0&modestbranding=1&rel=0`}
                  title="Project Overview Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Video;
