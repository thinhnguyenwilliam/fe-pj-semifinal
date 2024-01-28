import { useEffect, useState } from "react";
import { getListTopics } from "../../services/TopicServices";
import { Link } from "react-router-dom";

const Topic = () => {
    const [data, setdata] = useState([]);


    useEffect(() => { //dùng call API để vẽ giao diện
        const fetchAPI = async () => {
            const result = await getListTopics();
            //console.log(result);

            setdata(result);
        }

        fetchAPI();
    }, []);
    //console.log(data);


    return (
        <>
            <h2>Danh sách chủ đề ôn luyện</h2>
            {data.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên chủ đề</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={"/quiz/" + item.id}>
                                        <button className="button">
                                            Làm bài
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
export default Topic;