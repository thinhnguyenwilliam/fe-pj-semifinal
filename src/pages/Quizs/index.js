import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../services/TopicServices";
import { getListQuestions } from "../../services/QuestionService";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/AnswerService";

const Quiz = () => {
    const params = useParams();
    //console.log(params.id);//params là 1 object, lấy id trên browser URL

    const navigate=useNavigate();


    const [dataTopic, setdataTopic] = useState();//kg có thì dataTopic là undefined
    const [dataQuestion, setdataQuestion] = useState();

    useEffect(() => { //dùng call API để vẽ giao diện
        const fetchAPI = async () => {
            const resultTopic = await getTopic(params.id);//truyền id vào là cái params(id)
            //console.log(result);
            setdataTopic(resultTopic);

            const resultQuestion = await getListQuestions(params.id);
            setdataQuestion(resultQuestion);

        }

        fetchAPI();
    }, []);
    //console.log(dataTopic);
    //console.log(dataQuestion);


    const handleSubmit= async (event)=>{
        event.preventDefault();
        const UserID=getCookie("id");
        const data={
            userId: parseInt(UserID),
            topicId:parseInt(params.id),
            answers:[]
        }

        
        // console.log(event);
        

        for(let i=0;i<event.target.elements.length;i++)
        {
            // console.log(event.target.elements[i]);
            // console.log(event.target.elements[i].checked);
            // console.log("--------------------");
            if(event.target.elements[i].checked ===true)//viết tắt if(event.target.elements[i].checked)
            {
                const name=event.target.elements[i].name;
                const value=event.target.elements[i].value;
                data.answers.push({
                    questionId:parseInt(name),
                    answer:parseInt(value)
                });
            }
        }

        //console.log(data);
        const result=await createAnswer(data);
        //console.log(result);
        navigate(`/result/${result.id}`);
    }



    return (
        <>
            {dataTopic && <h2>Bài Quiz chủ đề: {dataTopic.name} </h2>}

            {dataQuestion && (
                <div className="form-quiz">
                    <form onSubmit={handleSubmit}>
                        {dataQuestion.map((item, indexItem) => (
                            <div className="form-quiz__item" key={indexItem}>
                                <p>Câu {indexItem + 1}: {item.question}</p>

                                {item.answers.map((answer, indexAnswer) => (
                                    <div key={indexAnswer}>
                                        {/* đưa lên id câu hỏi và id câu trả lời */}
                                        <input type="radio" 
                                            name={item.id}
                                            value={indexAnswer}
                                            id={`quiz-${item.id}-${indexAnswer}`}
                                        />
                                        {/* thuộc tính for(In JSX:htmlFor) của label phải bằng thuộc tính id của ô input đề khi nhấp vào chữ vẫn tick vào ô được 
                                        thêm id duy nhất cho ô input*/}
                                        <label htmlFor={`quiz-${item.id}-${indexAnswer}`}>{answer}</label>
                                    </div>
                                ))}
                            </div>
                        ))}


                        <button>Nộp bài</button>
                    </form>
                </div>
            )}
        </>
    );
}
export default Quiz;