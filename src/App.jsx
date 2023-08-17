import data from "./data.json";
import Accordion from "./components/Accordion.jsx";

const App = () => {

  return (
    <>
      <div className="min-h-screen w-full flex justify-center bg-slate-800">
        <div className="w-[700px]">
          {data?.map((item, id) => {
             const {question, answer} = item;
             return (
                <Accordion
                   key={id}
                   question={question}
                   answer={answer}
                />
             )
          })}
        </div>
      </div>
    </>
  )
}
export default App;

