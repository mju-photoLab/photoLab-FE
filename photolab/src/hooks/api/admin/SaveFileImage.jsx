import axios from "axios";

const saveFileImage = async ({imageInput, competitiontitle, competitioncontent, awardCount}) => {
  try {
    const formData = new FormData();
    formData.append('multipartFiles', imageInput.files[0]);

    Array.from(imageInput.files).forEach((file, index) => {
      formData.append('multipartFiles', file);
    });

    const competitionDetails = {
      competitionTitle: competitiontitle,
      competitionContent: competitioncontent,
      awardCount: awardCount,
    };
    formData.append('registerCompetitionRequest', JSON.stringify(competitionDetails))

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5OTg3MjMyNSwiZW1haWwiOiJnYW5naG8zMjRAZ21haWwuY29tIn0.tLs46ObJtGK7sCu-CQEm4AsnctiUYo4ocw9vFpm653ZGbu6dz5K2ix4rAsfzmLUsQsirBIOYOFuYOQ7brW9PUQ';

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    };  
    const response = await axios.post('http://localhost:8080/api/admin/photos/newCompetitionPhoto', formData, config);
    return response.data;
  } 
  catch (error) {
    console.error('Error uploading image:', error);
    throw error; 
  }
};

export default saveFileImage ;