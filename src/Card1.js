import './App.css';
import Card from "antd/es/card/Card";
import {List} from "antd";
import {useState} from "react";

const Card1 = () => {
    const [id, setId] = useState(1)
    console.log(id)

    const selectId = (key) => {
        setId(key)
        console.log(data[id].actions.length)
        console.log(id)
    }

    const data = [
        {id: 0, title: "", actions: []},
        {id: 1, title: "Станок не работает", actions: [2, 16, 21, 29]},

        {id: 2, title: "Станок сломан", actions: [3, 7, 10, 14]},
        {id: 3, title: "Перегрелся двигатель", actions: [4, 5, 6]},

        {id: 4, title: "Заменить двигатель", actions: []},
        {id: 5, title: "Охладить", actions: []},
        {id: 6, title: "Отдать в ременот", actions: []},
        {id: 7, title: "Сломался резец", actions: [8, 9]},
        {id: 8, title: "Заменить резец", actions: []},
        {id: 9, title: "Восстановить", actions: []},
        {id: 10, title: "Вышел из строя контроллер", actions: [11, 12, 13]},
        {id: 11, title: "Провести диагностику на месте", actions: []},
        {id: 12, title: "Передать местной службе", actions: []},
        {id: 13, title: "Передать сторонней организации", actions: []},
        {id: 14, title: "Износ подшипника", actions: [15]},
        {id: 15, title: "Заменить", actions: []},

        {id: 16, title: "Нет заготовок", actions: [17, 19, 20]},
        {id: 17, title: "Не оформлен заказ", actions: [18]},
        {id: 18, title: "Оформить заказ", actions: []},
        {id: 19, title: "Не оказалось на складе", actions: [18]},
        {id: 20, title: "Заготовки не того типа", actions: [18]},

        {id: 21, title: "Нет электропитания", actions: [22, 23, 24, 25, 26]},
        {id: 22, title: "Отключен рубильник", actions: [27]},
        {id: 23, title: "Поврежден кабель питания", actions: [27]},
        {id: 24, title: "Аавария в цехе", actions: [27]},
        {id: 25, title: "Авария на заводе", actions: [27]},
        {id: 26, title: "Авария на подстанции", actions: [28]},
        {id: 27, title: "Вызвать бригаду электриков", actions: []},
        {id: 28, title: "Принять к сведению, ожидать восстановления", actions: []},

        {id: 29, title: "Нет рабочего", actions: [30, 31, 32, 33]},
        {id: 30, title: "Обеденный перерыв", actions: [34]},
        {id: 31, title: "Рабочий отдыхает", actions: [34]},
        {id: 32, title: "Рабочий болен", actions: [35]},
        {id: 33, title: "Рабочий в отпуске", actions: [36]},
        {id: 34, title: "Ожидать окончания", actions: []},
        {id: 35, title: "Подменить на время болезни рабочего", actions: []},
        {id: 36, title: "Заменить на время отпуска", actions: []}
    ]

    return (
        <div className="App">
            <header className="App-header">
                <Card
                    title={data[id].title}
                    bordered={false}
                    style={{width: 300,}}>
                    <List size="small">
                        {data[id].actions.map(num => {
                            return (
                                <List.Item className="list"
                                           key={data[num].id}
                                           onClick={() => selectId(data[num].id)}>{data[num].title}</List.Item>
                            )
                        })}
                    </List>
                </Card>
            </header>
        </div>
    );
}
export default Card1;
