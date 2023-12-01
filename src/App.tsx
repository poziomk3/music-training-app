import Triangle from "./components/Triangle";

function App() {
  return (
    <div className="bg-red-200 w-full h-screen flex justify-center items-center overflow-hidden">
      
      <div className="relative ">
      
        {Array(12)
          .fill(0)
          .map(
            (item, index) => (
             
              <div key={index} 

                style={{ transformOrigin:"bottom", top:0, left:0, transform:`translate(-50%,-100%) rotate(${5+index *30}deg)  `, transitionDuration:'300ms'  }}
              className='absolute   w-[100px] z-[1]   ' 
              >
                <div className="hover:scale-125 duration-300  w-[20px]  scale-[.80]">
                  <div className="w-[100px] "><Triangle /></div>
                  
                </div>
              </div>
            )
           
          )}
      </div>
      <div className="absolute w-[100px] aspect-square bg-blue-700 rounded-full z-20  "/>
     
    </div>
  );
}

export default App;
