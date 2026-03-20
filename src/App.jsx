import avatar from './assets/images/avatar-jessica.jpeg';

function App() {

  return (
    <section className="bg-grey-800 min-h-144.75 max-w-72 m-500 rounded-xl p-300 flex gap-300 flex-col justify-baseline place-items-center">
      
      <img className="max-w-22 rounded-full" src={avatar} alt="avatar_pic"
        loading="lazy" />
      
      <div className="text-center w-full">
        <h1 className="text_preset_1">Jessica Randall</h1>
        <h3 className="text_preset_2_bold text-green">London, United Kingdom</h3>
        <p className="text_preset_2">"Front-end developer and avid reader."</p>
      </div>
      
      <ul className="text_preset_2_bold text-center w-full ">
        <li className="list_elements">
          <p className="block w-full">GitHub</p>
        </li>
        <li className="list_elements">
          <p className="block w-full">Frontend Mentor</p>
        </li>
        <li className="list_elements">
          <p className="block w-full">LinkedIn</p>
        </li>
        <li className="list_elements">
          <p className="block w-full">Twitter</p>
        </li>
        <li className="list_elements">
          <p className="block w-full">Instagram</p>
        </li>
      </ul>
    </section>
  )
}

export default App
