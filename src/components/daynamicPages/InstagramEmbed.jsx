import React, { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "340px",
        height: "400px",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/mayiservices.in"
        data-instgrm-version="12"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
