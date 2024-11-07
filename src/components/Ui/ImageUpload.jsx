import React, { useEffect, useRef, useState } from "react";
import { UploadIcon } from "../../assets/icons/upload";
import { CloseIcon } from "../../assets/icons/close";

const ImageUpload = (props) => {
  
  const filePikerRef = useRef();
  const [File, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!File) {
      return;
    }
    const fileReader = new FileReader();
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(File.type)) {
      fileReader.readAsDataURL(File);
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
    } else {
      // File type is not allowed, handle the case accordingly
    }
  }, [File]);

  const ImageHandler = () => {
    filePikerRef.current.click();
  };

  const fileChangeHndler = (e) => {
    let pickedFile;
    let fileIsValid = isValid;

    if (e?.target?.files && e?.target?.files.length === 1) {
      pickedFile = e?.target?.files[0];
      setFile(pickedFile);
      setIsValid(true);
      props?.onChange(pickedFile);
      fileIsValid = true;
      return;
    } else {
      fileIsValid = false;
      setIsValid(false);
    }
    props?.onChange(props?.id, pickedFile, fileIsValid);
  };

  const ClearFile = () => {
    setFile([]);
    setPreviewUrl("");
  };
  return (
    <div className="flex-col  justify-center align-center p-2   m-2 rounded-md bg-white ">
      <input
        type="file"
        id={props?.id}
        accept=".jpg,.png,.jpeg"
        ref={filePikerRef}
        onChange={fileChangeHndler}
        className="cursor-pointer hidden"
      />

      <div className={`${props?.center && "justify-center"} gap-x-3 flex justify-center align-center sm:flex-row `}>
        <button className=" border-dashed rounded-xl flex-col justify-center align-center item-center p-4 hover:text-blue-600 " onClick={ImageHandler}>
          <UploadIcon className="hover:text-blue-600"/>
        </button>
          {/* {!previewUrl && <p>Pick 
            Image
          </p>} */}
       
        <div>
          {previewUrl && (
            <div>
              <button
                className=" absolute   border border-solid rounded-lg bg-white m-1  "
                onClick={ClearFile}
              >
                <CloseIcon width="15px" height="15"  />
              </button>
              <img
                src={previewUrl}
                alt="preview"
                className="object-fill border border-solid p-1 rounded "
                width="100px"
                height="15vh"
              />
            </div>
          )}
        </div>
        
      </div>
      {isValid&& !isValid && <p>{props?.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
