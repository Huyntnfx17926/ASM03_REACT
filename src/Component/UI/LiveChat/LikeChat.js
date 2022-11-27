import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faUser,
  faPaperPlane,
  faPaperclip,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

function LiveChat() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <>
      <div
        style={{
          width: "33rem",
          height: "33rem",
          border: "1px solid black",
          position: "fixed",
          borderRadius: "7px",
          right: "120px",
          bottom: "100px",
          boxShadow: " 10px #888888",
          display: show ? "block" : "none",
          backgroundColor: "white",
          animation: "scaleUp 0.5s",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid black",
            padding: "10px",
            height: "12%",
          }}
        >
          <h5 style={{ display: "initial", fontSize: "1.8rem" }}>
            Customer Support
          </h5>
          <div
            style={{
              backgroundColor: "#DDDDDD",
              float: "right",
              padding: "5px",
            }}
          >
            let's Chat App
          </div>
        </div>
        <div style={{ height: "76%", borderBottom: "1px solid black" }}>
          <div
            style={{
              float: "right",
              backgroundColor: "#3399FF",
              margin: "5px 80px 5px 40px",
              padding: "5px",
              color: "white",
              display: "block",
              fontSize: "1.5rem",
            }}
          >
            xin chào{" "}
          </div>
          <div
            style={{
              float: "right",
              backgroundColor: "#3399FF",
              margin: "5px 80px 5px 80px",
              padding: "5px",
              color: "white",
              display: "block",
              fontSize: "1.5rem",
            }}
          >
            làm thế nào để xem các sản phẩm
          </div>
          <div style={{ display: "inline-block" }}>
            <FontAwesomeIcon
              icon={faUser}
              style={{
                border: "1px solid ",
                float: "left",
                padding: "5px",
                fontSize: "15px",
                margin: "5px",
                backgroundColor: "#EEEEEE",
                borderRadius: "5px",
              }}
            />
            <div
              style={{
                float: "left",
                backgroundColor: "#EEEEEE",
                margin: "5px 190px 5px 10px",
                padding: "5px",
                color: "black",
                display: "inline-block",
                fontSize: "1.5rem",
              }}
            >
              ADMIN: chào bạn
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              style={{
                border: "1px solid ",
                float: "left",
                padding: "5px",
                fontSize: "15px",
                margin: "5px",
                backgroundColor: "#EEEEEE",
                borderRadius: "5px",
              }}
            />
            <div
              style={{
                float: "left",
                backgroundColor: "#EEEEEE",
                margin: "5px 20px 5px 10px",
                padding: "5px",
                color: "black",
                display: "inline-block",
                fontSize: "1.5rem",
                width: "80%",
              }}
            >
              ADMIN: bạn có thể vào mục Shop để xem các sản phẩm
            </div>
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <FontAwesomeIcon
            icon={faUser}
            style={{
              border: "1px solid ",
              padding: "5px",
              fontSize: "15px",
              marginTop: "5px",
              marginLeft: "5px ",
              backgroundColor: "#EEEEEE",
              borderRadius: "5px",
            }}
          />
          <input
            style={{
              margin: "5px",
              width: "220px",
              fontSize: "1.5rem",
              border: "none",
            }}
            placeholder="Enter Message!"
          />
          <FontAwesomeIcon icon={faPaperclip} />
          <FontAwesomeIcon icon={faFaceSmile} style={{ margin: "0px 10px" }} />
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>

      <button
        style={{
          border: "1px solid black",
          borderRadius: "20px",
          position: "fixed",
          bottom: "30px",
          right: "30px",
          boxShadow: "5px 5px 18px #888888",
          backgroundColor: "white",
        }}
        onClick={toggle}
      >
        <FontAwesomeIcon
          icon={faMessage}
          style={{ fontSize: "25px", color: "black", padding: "5px" }}
        />
      </button>
    </>
  );
}

export default LiveChat;
