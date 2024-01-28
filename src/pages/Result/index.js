import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getListAnswerByID } from "../../services/AnswerService";
import { getListQuestions } from "../../services/QuestionService";
import "./result.scss";
import { getTopic } from "../../services/TopicServices";


const Result = () => {
    const params = useParams();

    const [dataResult, setdataResult] = useState();

    const [dataInfo, setdataInfo] = useState();

    useEffect(() => {
        const fetchAPI = async () => {
            const dataAnswer = await getListAnswerByID(params.id);
            const dataQuestion = await getListQuestions(dataAnswer.topicId);

            const dataFinal = [];
            for (let i = 0; i < dataQuestion.length; i++) {
                const questionID = dataQuestion[i].id;
                const objectAnswer = dataAnswer.answers.find(item => item.questionId === questionID);

                // Check if objectAnswer is defined before accessing its answer property
                const answer = objectAnswer ? objectAnswer.answer : undefined;

                dataFinal.push({
                    ...dataQuestion[i],
                    answer: answer
                });
            }
            setdataResult(dataFinal);

            //thông tin chung
            const infoTopic = await getTopic(dataAnswer.topicId);
            let counterTrue = 0;
            let counterChuaLam = 0;//chưa làm mặc định làm sai
            //console.log(dataFinal);

            for (const x of dataFinal) {
                if (x.correctAnswer === x.answer)
                    ++counterTrue;

                if (!x.answer)
                    ++counterChuaLam;
            }


            const infoFinal = {
                ...infoTopic,
                countAnswerTrue: counterTrue,
                countCauChuaLam: counterChuaLam, // Corrected variable name here
                countAll: dataFinal.length,
                countAnswerFalse: dataFinal.length - counterTrue,
                percentTrue: counterTrue / dataFinal.length * 100
            };

            //console.log(infoFinal);
            setdataInfo(infoFinal);
        }

        fetchAPI();
    }, []);

    return (
        <>
            {dataInfo && (
                <>
                    <h2>Kết quả chủ đề: {dataInfo.name}</h2>
                    <div>Chưa làm: <strong>{dataInfo.countCauChuaLam}</strong></div> {/* Corrected variable name here */}
                    <div>Đúng: <strong>{dataInfo.countAnswerTrue}</strong></div>
                    <div>Sai: <strong>{dataInfo.countAnswerFalse}</strong></div>
                    <div>Tổng số câu: <strong>{dataInfo.countAll}</strong></div>
                    <div>Tỷ lệ đúng: <strong>{dataInfo.percentTrue}%</strong></div>
                </>
            )}

            {dataResult && (
                <div className="result">
                    {dataResult.map((item, indexItem) => (
                        <div className="result__item" key={indexItem}>
                            <p>
                                Câu {indexItem + 1}: {item.question}

                                {item.correctAnswer === item.answer ? (<>
                                    <span className="result__tag result__tag--true">Đúng</span>
                                </>) : (<>
                                    <span className="result__tag result__tag--false">Sai</span>
                                </>)}
                            </p>

                            {item.answers.map((answerItem, indexAnswer) => {
                                let checkedFlag = false;
                                let className_them = "";
                                if (indexAnswer === item.answer) {
                                    checkedFlag = true;
                                    className_them = "result__item--selected";
                                }

                                if (indexAnswer === item.correctAnswer)
                                    className_them = "result__item--result";


                                return (
                                    <div key={indexAnswer}>
                                        {/* disabled: kg cho chọn lại vì đây là trang kết quả, nó có màu xám xám */}
                                        <input type="radio" checked={checkedFlag} disabled />
                                        <label className={className_them}>{answerItem}</label>
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            )}


            {dataInfo && (
                <Link to={`/quiz/${dataInfo.id}`}>
                    <button>Làm lại</button>
                </Link>
            )}
        </>
    );
}

export default Result;

