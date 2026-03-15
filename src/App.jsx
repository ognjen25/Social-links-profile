function App() {

  return (
    <section class="bg-grey-800 min-h-144.75 max-w-72 m-auto p-spacing-300 flex gap-spacing-300 flex-col place-items-center">
      
      <img class="max-w-22 rounded-full" src="./src/assets/images/avatar-jessica.jpeg" alt="avatar_pic"
        loading="lazy" />
      
      <div class="text-center w-full">
        <h1 class="text_preset_1">Jessica Randall</h1>
        <h3 class="text_preset_2_bold text-green">London, United Kingdom</h3>
        <p class="text_preset_2 mt-spacing-300">"Front-end developer and avid reader."</p>
      </div>
      
      <ul>
        <li>
          <p>GitHub</p>
        </li>
        <li>
          <p>Frontend Mentor</p>
        </li>
        <li>
          <p>LinkedIn</p>
        </li>
        <li>
          <p>Twitter</p>
        </li>
        <li>
          <p>Instagram</p>
        </li>
      </ul>
    </section>
  )
}

export default App
