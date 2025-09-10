import React, { useState } from "react";

function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const shortenUrl = async () => {
    if (!url) {
      setError("Please enter a valid URL");
      return;
    }
    setError("");
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await response.json();

      if (data.ok) {
        setShortUrl(data.result.full_short_link);
      } else {
        setError("Failed to shorten URL. Try again.");
      }
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>🔗 URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter your URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={styles.input}
      />
      <button onClick={shortenUrl} style={styles.button}>
        Shorten
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {shortUrl && (
        <p>
          Shortened URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    padding: "10px",
    width: "300px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default Home;
