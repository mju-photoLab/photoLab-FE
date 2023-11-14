import { useRef } from "react";
import axios from "axios";

const ImageUpload = () => {
  const imageInput = useRef();

  const saveFileImage = async () => {
    try {
      const formData = new FormData();
      formData.append('multipartFiles', imageInput.current.files[0]);

      Array.from(imageInput.current.files).forEach((file, index) => {
        formData.append('multipartFiles', file);
      });

      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5OTg2NzU2NywiZW1haWwiOiJnYW5naG8zMjRAZ21haWwuY29tIn0.2vI9VjVOL1ZsuMucXvw9tuaEP8WetCQSnSrZQs23LSG2OzJ_ozo-XJGSVCtUX-kF1w6DQrrWbFJPn_Ixea1unw';

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      };

      const response = await axios.post('http://localhost:8080/api/admin/photos/newCompetitionPhoto', formData, config);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" ref={imageInput} multiple />
      <button onClick={saveFileImage}>이미지 업로드</button>
    </div>
  );
};

export default ImageUpload;