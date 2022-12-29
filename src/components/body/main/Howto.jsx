import React from "react";

const Howto = () => {
  return (
    <div>
      <h2>
        <b>Setting Up</b>
      </h2>
      <br />
      <p>
        If you're new here, follow these steps to get your game up and running!
      </p>
      <ul>
        <li>
          Register your account here: <a href="signup">Sign up page.</a>
        </li>
        <li>Confirm your email address in the followup email.</li>
        <li>
          Download and install the Wings client, which can be downloaded here**:{" "}
          <a
            href="https://cdn.discordapp.com/attachments/787567400429944843/934886769537724426/Wings_Installer_Jan_2022.7z.torrent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download torrent
          </a>
        </li>
        <li>
          Once you have installed the client and registered your account, you're
          all set to play!
        </li>
      </ul>
      <p>
        <i>
          **You'll need a torrent application in order to download it, we
          generally would suggest uTorrent or BitTorrent, as these are the two
          most well-known programs for this. The installer comes pre-loaded with
          basically everything you need to get started right away!
        </i>
      </p>
      <p>
        If you require additional help getting everything up and running, feel
        free to visit our Discord channels for{" "}
        <a
          href="https://discord.gg/wWZK9S7sbP"
          target="_blank"
          rel="noopener noreferrer"
        >
          #installation-help
        </a>{" "}
        and{" "}
        <a
          href="https://discord.gg/4SkmZk3bA2"
          target="_blank"
          rel="noopener noreferrer"
        >
          #tech-support.
        </a>{" "}
      </p>
      <p>Individual Downloads</p>
      <br />
      <h2>
        <b>Supplementary Material</b>
      </h2>
      <p>
        Below are additional things that more veteran private server players may
        need.
      </p>
      <ul>
        <li>
          <a
            href="https://cdn.discordapp.com/attachments/787567400429944843/852351859444285480/Switchbatter.bat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Switch .bat for private servers to retail.
          </a>
        </li>
        <li>
          <a
            href="https://cdn.discordapp.com/attachments/787567400429944843/863235757066158090/Switch_1.bat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Switch .bat for switching between private servers.
          </a>
        </li>
        <li>
          <a
            href="https://www.wingsxi.com/dl/wingsloader.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Standalone download for the Wingsloader.exe
          </a>
        </li>
      </ul>
      <h2>
        <b>Video Tutorials</b>
      </h2>
      <br />
      <p>
        We've also made a few video tutorials to help players get their client
        set up. You can also find these (and probably many more like them) in
        our Discord in the{" "}
        <a
          href="https://discord.gg/jnF8yRrcES"
          target="_blank"
          rel="noopener noreferrer"
        >
          #video-tutorials
        </a>{" "}
        channel.
      </p>
      <ul>
        <li>
          <button
            type="button"
            className="btn btn-link"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Adjusting your settings to improve quality of life.
          </button>
          -Gweivyth
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <b>Adjusting your settings to improve quality of life.</b>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ratio ratio-16x9">
                  <iframe
                    id="yt-video"
                    src="https://www.youtube.com/embed/sNxAXdeQDGw"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-backdrop="true"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a
            href="https://youtu.be/_4dAFWyRx8g"
            target="_blank"
            rel="noopener noreferrer"
          >
            Setting up Ashenbub's HD packs.
          </a>{" "}
          -Ashenbubs
        </li>
        <li>
          <a
            href="https://youtu.be/6s7JeYQfX0Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            Switching between private servers? No problem!
          </a>{" "}
          -Gweivyth
        </li>
        <li>
          <a
            href="https://youtu.be/NRtgM8HPTiI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ashita, and everything you ever wanted to know about it.
          </a>{" "}
          -Gweivyth
        </li>
      </ul>
    </div>
  );
};

export default Howto;
