import React from 'react';

class SectionQuestions extends React.Component{
    state = {
        open:false
    };
    handleRollup = (selector)=>{
        if(this.state.open===selector){
            this.setState(()=>({open:false}))
        }else {
            this.setState(()=>({open: selector}))
        }
    };

    render() {
           return (
               <section className="section-top postprint__top">
                   <div className="container">
                       <div className="section-container section-container--question">
                           <h1 className="section__title">Часто задаваемые вопросы</h1>
                           <div className="section-block__container section-block__container__question">
                               <div className={`section-block section-block--question ${this.state.open===1?'open':'closed'}`}>
                                   <div className={`section-block__header section-block__header__question ${this.state.open===1?'':'closed'}`} onClick={()=>{this.handleRollup(1)}}>
                                       <div className={`open-icon ${this.state.open===1?'up':''}`} >
                                           <div className={`arrows down ${this.state.open===1?'up':''}`}></div>
                                       </div>
                                       <div className="section-block__title section-block__title__postprint">
                                           <div>Что такое СМYК?</div>
                                       </div>
                                   </div>
                                   <div className="section-block__content">
                                       <div className={`section-block__item__description section-block__item__description--question ${this.state.open===1?'open':'closed'}`}>
                                           Это цветовая схема, которая используется в полиграфии для стандартной триадной печати Cyan, Magenta, Yellow и Black для точного соответствия цветов макета готовому изделию.
                                       </div>
                                   </div>
                               </div>

                               <div className={`section-block section-block--question ${this.state.open===2?'open':'closed'}`}>
                                   <div className={`section-block__header section-block__header__question ${this.state.open===2?'':'closed'}`} onClick={()=>{this.handleRollup(2)}}>
                                       <div className={`open-icon ${this.state.open===2?'up':''}`} >
                                           <div className={`arrows down ${this.state.open===2?'up':''}`}></div>
                                       </div>
                                       <div className="section-block__title section-block__title__postprint">
                                           <div>Как вы печатаете?</div>
                                       </div>
                                   </div>
                                   <div className="section-block__content">
                                       <div className={`section-block__item__description section-block__item__description--question ${this.state.open===2?'open':'closed'}`}>
                                           Небольшие тиражи до формата А3 включительно печатаем на цифровой листовой машине.
                                           Большие тиражи - от 500 оттисков формата А3 и больше печатаем на рулонной офсетной машине.
                                           Изделия, напечатанные разными способами, отличаются.
                                       </div>
                                   </div>
                               </div>

                               <div className={`section-block section-block--question ${this.state.open===3?'open':'closed'}`}>
                                   <div className={`section-block__header section-block__header__question ${this.state.open===3?'':'closed'}`} onClick={()=>{this.handleRollup(3)}}>
                                       <div className={`open-icon ${this.state.open===3?'up':''}`} >
                                           <div className={`arrows down ${this.state.open===3?'up':''}`}></div>
                                       </div>
                                       <div className="section-block__title section-block__title__postprint">
                                           <div>Как я получу наклейки?</div>
                                       </div>
                                   </div>
                                   <div className="section-block__content">
                                       <div className={`section-block__item__description section-block__item__description--question ${this.state.open===3?'open':'closed'}`}>
                                           При выборе квадратных или прямоугольных наклеек размером больше, чем 40х40 мм порезка делается на гильотине, поэтому вы получите стопку наклеек.
                                           Если размер меньше 40х40 мм, или форма не прямоугольная (квадратная), тогда контуры наклеек будут прорезаны на специальной машине - плоттере. Тираж будет отгружен в листах.

                                           Если получать тираж в листах вам будет неудобно, укажите в комментарии, и листы будут порезаны на гильотине.
                                       </div>
                                   </div>
                               </div>

                               <div className={`section-block section-block--question ${this.state.open===4?'open':'closed'}`}>
                                   <div className={`section-block__header section-block__header__question ${this.state.open===4?'':'closed'}`} onClick={()=>{this.handleRollup(4)}}>
                                       <div className={`open-icon ${this.state.open===4?'up':''}`} >
                                           <div className={`arrows down ${this.state.open===4?'up':''}`}></div>
                                       </div>
                                       <div className="section-block__title section-block__title__postprint">
                                           <div>Можно ли напечатать на клеевой основе наклейки?</div>
                                       </div>
                                   </div>
                                   <div className="section-block__content">
                                       <div className={`section-block__item__description section-block__item__description--question ${this.state.open===4?'open':'closed'}`}>
                                           Да, в нашей типографии есть возможность сделать обратные стикеры, мы с удовольствием сделаем вам образец и покажем примеры наших работ.
                                       </div>
                                   </div>
                               </div>

                               <div className={`section-block section-block--question ${this.state.open===5?'open':'closed'}`}>
                                   <div className={`section-block__header section-block__header__question ${this.state.open===5?'':'closed'}`} onClick={()=>{this.handleRollup(5)}}>
                                       <div className={`open-icon ${this.state.open===5?'up':''}`} >
                                           <div className={`arrows down ${this.state.open===5?'up':''}`}></div>
                                       </div>
                                       <div className="section-block__title section-block__title__postprint">
                                           <div>Как быстро вы изготовите мой заказ?</div>
                                       </div>
                                   </div>
                                   <div className="section-block__content">
                                       <div className={`section-block__item__description section-block__item__description--question ${this.state.open===5?'open':'closed'}`}>
                                           Стандартный срок печати тиража не превышает четырех рабочих дней.
                                           Срочный тираж напечатаем за 2 рабочих дня.
                                           Мы всегда стараемся идти навстречу нашим клиентам. Если вам нужно "на вчера", с нами можно договориться о печати на выходных или ночью.
                                       </div>
                                   </div>
                               </div>

                               <div className={`section-block section-block--question ${this.state.open===6?'open':'closed'}`}>
                                   <div className={`section-block__header section-block__header__question ${this.state.open===6?'':'closed'}`} onClick={()=>{this.handleRollup(6)}}>
                                       <div className={`open-icon ${this.state.open===6?'up':''}`} >
                                           <div className={`arrows down ${this.state.open===6?'up':''}`}></div>
                                       </div>
                                       <div className="section-block__title section-block__title__postprint">
                                           <div>Какой размер бумаги/пленки для печати?</div>
                                       </div>
                                   </div>
                                   <div className="section-block__content">
                                       <div className={`section-block__item__description section-block__item__description--question ${this.state.open===6?'open':'closed'}`}>
                                           Поле запечатки для пленки и бумаги составляет 300х440 мм, для рулонных материалов ширина составляет 330 мм
                                       </div>
                                   </div>
                               </div>

                               <div className={`section-block section-block--question ${this.state.open===7?'open':'closed'}`}>
                                   <div className={`section-block__header section-block__header__question ${this.state.open===7?'':'closed'}`} onClick={()=>{this.handleRollup(7)}}>
                                       <div className={`open-icon ${this.state.open===7?'up':''}`} >
                                           <div className={`arrows down ${this.state.open===7?'up':''}`}></div>
                                       </div>
                                       <div className="section-block__title section-block__title__postprint">
                                           <div>У меня нет макета или он не соответствует вашим требованиям.</div>
                                       </div>
                                   </div>
                                   <div className="section-block__content">
                                       <div className={`section-block__item__description section-block__item__description--question ${this.state.open===7?'open':'closed'}`}>
                                           Если у вас нет макета, мы можем разработать индивидуальный дизайн наклеек.
                                           У нас трудится три дизайнера, один иллюстратор. Мы готовы справиться с любой поставленной задачей.
                                           Обратитесь к нашим менеджерам и расскажите какие наклейки вас интересуют.
                                           Если ваш макет не соответствует требованиям, укажите в комментарии, мы приведем его в чувство.
                                       </div>
                                   </div>
                               </div>

                               <div className={`section-block section-block--question ${this.state.open===9?'open':'closed'}`}>
                                   <div className={`section-block__header section-block__header__question ${this.state.open===9?'':'closed'}`} onClick={()=>{this.handleRollup(9)}}>
                                       <div className={`open-icon ${this.state.open===9?'up':''}`} >
                                           <div className={`arrows down ${this.state.open===9?'up':''}`}></div>
                                       </div>
                                       <div className="section-block__title section-block__title__postprint">
                                           <div>Есть ли у вас доставка по СНГ, миру?</div>
                                       </div>
                                   </div>
                                   <div className="section-block__content">
                                       <div className={`section-block__item__description section-block__item__description--question ${this.state.open===9?'open':'closed'}`}>
                                           Да, мы отправим ваш заказ удобным способом, будь это курьерская служба или рейсовый автобус.
                                       </div>
                                   </div>
                               </div>

                           </div>
                       </div>
                   </div>
                   <div className="section-bg__top postprint__bg"></div>
               </section>
           )
        }
}

export default SectionQuestions;