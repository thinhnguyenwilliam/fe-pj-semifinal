import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getListAnswerByUserID } from "../../services/AnswerService";
import { getTopic } from "../../services/TopicServices";
import { Link } from "react-router-dom";

const Answer=()=>{
    const [dataAnswer, setdataAnswer]=useState();


    useEffect(()=>{
        const fetchAPI= async ()=>{
            const userID=getCookie("id");
            const answerByUserID=await getListAnswerByUserID(userID);
            //console.log(answerByUserID);

            const datafinal=[];
            for (const iterator of answerByUserID) 
            {
                const topic=await getTopic(iterator.topicId);
                //console.log(topic);
                datafinal.push({
                    answerId:iterator.id,
                    topicName:topic.name
                });
            }

            //console.log(datafinal);
            setdataAnswer(datafinal);
        }   

        fetchAPI();
    },[]);


    return(
        <>
            <h2>Danh sách các bài làm luyện tập</h2>
            {dataAnswer && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên chủ đề</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswer.map((item,index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.topicName}</td>
                                <td>
                                    <Link to={"/result/" + item.answerId}>
                                        <button className="button">
                                            Xem lại kết quả
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
export default Answer;