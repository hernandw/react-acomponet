import './App.css';
import Testimonios from './componente/Testimonios'

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonios 
      name='Shawn Wang'
      image='shawn'
      country='Singapore'
      position='Software Engineer'
      business='Amazon'
      testimony={["It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. ",<b>freeCodeCamp changed my life.</b>]}
      />
       <Testimonios 
      name='Sarah Chima'
      image='sarah'
      country='Nigeria'
      position='Software Engineer'
      business='ChatDesk'
      testimony={[<b>freeCodeCamp was the gateway to my career</b>, " as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."]}
      />
      <Testimonios 
      name='Emma Bostian'
      image='emma'
      country='Sweden'
      position='Software Engineer'
      business='Spotify'
      testimony={["I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on ", <b>freeCodeCamp gave me the skills</b>, " and confidence I needed to land my dream job as a software engineer at Spotify."]}
      />
      
      </div>
    </div>
  );
}

export default App;
