import CircleOfFifths from "./components/CircleOfFifths";

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
    <div className=" w-full min-h-screen h-[100vh]  ">
      <CircleOfFifths />
      {/* <CircleOfFifths/> */}
    </div>
  );
}

export default App;
