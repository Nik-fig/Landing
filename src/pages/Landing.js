// import from '../modals/CheckStatusModal';
// import from '../modals/NewRequestModal';
//
import {Header} from '../components/Header/Header';
import {Footer} from '../components/Footer/Footer';
import {Question} from '../components/Question/Question';

import {showAlert} from '../utils/showAlert'

const questions = [
    {
        question: 'Question1',
        answer: 'Answer1',
    },
    {
        question: 'Question2',
        answer: 'Answer1',
    },
    {
        question: 'Question1',
        answer: 'Answer1',
    },
]

export function Landing() {

    return (
        <>
            <Header/>
            <section>
                <h1>
                    Платформа лояльности и управления потребительским опытом
                </h1>
                <button
                    onClick={() => {
                        showAlert('he')
                    }}
                >
                    Оставить заявку
                </button>
                <img
                    src="/static/phone_example.png"
                    alt="phone example"
                />
            </section>

            <a name="faq"/>
            <section>
                <h1>
                    Часто задаваемые вопросы
                </h1>
                <div>
                    {questions.map((item, index) =>
                        <Question
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    )}
                </div>
            </section>

            <a name="contacts"/>
            <section>
                <h1>
                    Контакты
                </h1>
                <span>
                    myMail@mail.ru
                </span>
                <span>
                    +7 (999) 999-99-99
                </span>
                <div>
                    te@
                </div>
            </section>
            <Footer/>
        </>
    );
}

