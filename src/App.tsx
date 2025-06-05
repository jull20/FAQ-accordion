import { useState } from 'react'
import './css/App.css'

export default function App() {
  return (
    <main className="main">
      <div className="mainContainer">
        <Header/>
        <FAQList/>
      </div>
    </main>
  )
}

function Header(){
  return (
    <div className="header">
      <div className="starContainer"><img src="icon-star.svg" alt="icon-star"/></div>
      <h1 className="title">FAQs</h1>
    </div>
  )
}

function FAQList(){
  const [activeIndex, setActiveIndex] = useState(1);

  interface questionData {
    id: number;
    question: string;
    answer: string;
    hr: boolean;
  }
  let itemsData: questionData[] = [
    {
      id: 1, hr: true,
      question: "What is Frontend Mentor, and how will it help me?", answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
    },
    {
      id: 2, hr: true,
      question: "Is Frontend Mentor free?", answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
    },
    {
      id: 3, hr: true,
      question: "Can I use Frontend Mentor projects in my portfolio?", answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
    },
    {
      id: 4,  hr: false,
      question: "How can I get help if I'm stuck on a challenge?", answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
    },
  ];
  
  return (
    <div className="faqList">
      {
        itemsData.map(obj => {
          return (
            <>
              <FAQItem 
                key={obj.id}
                isActive={activeIndex==obj.id} 
                handle={() => setActiveIndex( (activeIndex == obj.id) ? 0 : obj.id)}
                question={obj.question}
                answer={obj.answer}
              />
              {
                (obj.hr) ? <hr className='hrLine'/> : <></>
              }
              
            </>
          )
        })
      }
    </div>
  )
}

type FAQItemProps = {
  isActive: boolean;
  handle: () => void;
  question: string;
  answer: string;
}

function FAQItem({isActive, handle, question, answer}:FAQItemProps){
  return(
      <div className="faqItem" onClick={handle}>
        <div className="questionContainer">
          <h2 className='question'>{question}</h2>
          <button className='btn'>
            {
              (isActive) ? <img src="icon-minus.svg" alt="icon-minus" /> : <img src="icon-plus.svg" alt="icon-plus" />
            }
          </button>
        </div>
        <p className={'answer' + ((isActive) ? "" : " hidden")}>
          {answer}
        </p>
      </div>
  )
}