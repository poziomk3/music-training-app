import CircleOfFifths from "./components/CircleOfFifths";
import PianoBoard from "./components/PianoBoard";

function App() {
  // const obj1= useFrequency({
  //   hz: 400,
  //   type:"center",
  //   gain: 10/ 100,
  //   oscillator:"sine"
  // })
  // const obj2 = useFrequency({
  //   hz: 1950,
  //   type:"center",
  //   gain: 10/ 100,
  //   oscillator:"sine"
  // })

  return (
    <div className=" w-full min-h-screen  bg-red-200 ">
      {/* <CircleOfFifths /> */}
      <CircleOfFifths/>
     
     <div className="flex">{Array(3).fill(0).map((item,index)=><PianoBoard key={index}/>)}</div>
      
    </div>
  );
}

export default App;
