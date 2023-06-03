import React, {useState} from "react";

import style from './Header.module.css';

export function Header() {
    const [isCollapse, setIsCollapse] = useState(true);


    return (
        <header
            className={[
                style.header,
                (isCollapse ? null : style.uncollapsed)
            ].join(' ')}

            onClick={(event) => {
                if (!event.target.className.includes(style.header))
                    return;

                if (isCollapse === true)
                    return;

                setIsCollapse(!isCollapse)
            }}
        >

            <div
                className={style.headerContainer}
            >
                <a
                    href='/'
                    className={style.logo}
                >
                    <img
                        src="https://static.tildacdn.com/tild3334-6463-4634-b736-626564356364/1.png"
                        alt='logo'
                    />
                </a>
                <nav>
                    <a href="#faq">Часто задаваемые вопросы</a>
                    <a href="#contacts">Контакты</a>
                    <button>
                        Проверить статус заявки
                    </button>
                    <button
                        className={style.checkStatusModal}
                    >
                        Связаться
                    </button>
                </nav>
                <button
                    className={style.serviceButton}
                    onClick={() => {
                        setIsCollapse(!isCollapse)
                    }}
                >
                    <div/>
                    <div/>
                    <div/>
                </button>

            </div>
        </header>)
}