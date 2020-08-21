import React, { useRef } from "react";
import Cropper from "cropperjs";
import testImage from "./1584.jpg";
import "./App.css";
import "/Users/juanramirezcastaneda/DevelopmentProjects/cropper-test/node_modules/cropperjs/dist/cropper.css"

function App() {
  let srcImage = useRef(null);

  function activateCropper() {
    const cropper = new Cropper(srcImage.current);
    console.log(cropper);
  }

  return (
    <div>
      <section>
        <div style={{ width: "821px", height: "497px" }}>
          <div className={"cropper-wrap-box"}>
            <div
              className={"cropper-canvas"}
              style={{
                width: "993.41px",
                height: "558.793px",
                transform: "translateX(-91.07px) translateY(-91.07px)",
              }}
            >
              <img
                src={testImage}
                ref={srcImage}
                style={{ width: '993.41px', height: '558.793px', transform: 'none'}}
                alt="highresolution"
              />
            </div>
          </div>
        </div>

        <input
          type="button"
          value="Activate Cropper"
          onClick={activateCropper}
        />
      </section>
    </div>
  );
}

export default App;
