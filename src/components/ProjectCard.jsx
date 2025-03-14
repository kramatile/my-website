import React, { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ imageUrl, title, description, links }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Truncate description for preview (e.g., 100 characters)
  const previewText = description && description.length > 100 
    ? `${description.substring(0, 100)}...` 
    : description || "No description provided.";

    var image = new Image();
    var url_image = imageUrl;
    image.src = url_image;

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      {/* Preview Card */}
      <div 
        className="project-card" 
        onClick={handleToggleFullScreen} 
        role="button" 
        tabIndex={0} 
        onKeyPress={(e) => e.key === "Enter" && handleToggleFullScreen()}
      >
        <div className="project-image">
          {imageUrl && image.width > 0 ? (
            <img src={imageUrl} alt={`${title} preview`} loading="lazy" />
          ) : (
            <div className="image-placeholder">No Image Available</div>
          )}
        </div>
        <div className="project-content">
          <h3 className="project-title">{title || "Untitled Project"}</h3>
          <p className="project-description">{previewText}</p>
        </div>
        <div className="project-links">
          {links && links.length > 0 ? (
            links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={link.label || "Project link"}
                onClick={(e) => e.stopPropagation()} // Prevent full-screen trigger on link click
              >
                {link.icon ? (
                  <img src={link.icon} alt={`${link.label} icon`} className="link-icon" />
                ) : (
                  link.label || "Link"
                )}
              </a>
            ))
          ) : (
            <span className="no-links">No links available</span>
          )}
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isFullScreen && (
        <div className="project-modal" onClick={handleToggleFullScreen}>
          <div 
            className="project-modal-content" 
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button 
              className="modal-close" 
              onClick={handleToggleFullScreen}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="modal-image">
              {imageUrl && image.width > 0 ? (
                <img src={imageUrl} alt={`${title} full view`} />
              ) : (
                <div className="image-placeholder">No Image Available</div>
              )}
            </div>
            <div className="modal-content">
              <h2 className="modal-title">{title || "Untitled Project"}</h2>
              <p className="modal-description">
                {description || "No description provided."}
              </p>
              <div className="modal-links">
                {links && links.length > 0 ? (
                  links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                      aria-label={link.label || "Project link"}
                    >
                      {link.icon ? (
                        <img src={link.icon} alt={`${link.label} icon`} className="link-icon" />
                      ) : (
                        link.label || "Link"
                      )}
                    </a>
                  ))
                ) : (
                  <span className="no-links">No links available</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;