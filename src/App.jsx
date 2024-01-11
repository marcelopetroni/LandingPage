import './App.css'

function App() {

  return (
    <div className="app-container">
      <link href="https://db.onlinewebfonts.com/c/d642a55bac4df71e7c87a9394df80363?family=Cera+Round+Pro+DEMO+Regular" rel="stylesheet"/>
      <header>
        <nav>
          <img width="35" height="35" src="https://img.icons8.com/external-obivous-color-kerismaker/48/external-brand-seo-color-obivous-color-kerismaker.png" alt="external-brand-seo-color-obivous-color-kerismaker"/>
          <h1>Project Site</h1>
          <a href="#section1" className = "info">About</a>
          <a href="#section2" className = "info">Pricing</a>
          <a href="#section3" className = "info">Suport</a>
          <a href="#section4" className = "sign-in">Sign in</a>
        </nav>
      </header>
      <main>
      <section id = "section1">
          <h2 className='first-title'>The project</h2>
          <div className="description">Lorem ipsum dolor sit amet. Ut repellat unde est quia sunt a rerum aliquam sit 
              necessitatibus commodi qui praesentium porro sit velit amet? Aut accusamus perspiciatis est quasi 
              corrupti eos distinctio porro 33 illum voluptatem? Ex ipsum totam ut ipsum facilis eos exercitationem 
              eaque sit ducimus doloribus vel ipsum molestiae ex fugiat voluptatem. Eos quibusdam enim non consectetur 
              quidem ut consequuntur voluptates non deleniti voluptate qui sint quae. Et nisi ipsum et odio deserunt ex 
              omnis amet et quod consequatur eum quas assumenda. Vel excepturi adipisci id omnis soluta et optio rerum? 
              Ut error similique eos dolorem ducimus et blanditiis nihil in voluptas deserunt sit laborum quia. 
              Non rerum sint aut temporibus saepe aut expedita dolores qui internos voluptatum eos asperiores dolores 
              quo eaque amet?
          </div>

          <h2>What we expect from you</h2>
          <div className="description">Lorem ipsum dolor sit amet. Ut repellat unde est quia sunt a rerum aliquam sit 
              necessitatibus commodi qui praesentium porro sit velit amet? Aut accusamus perspiciatis est quasi 
              corrupti eos distinctio porro 33 illum voluptatem? Ex ipsum totam ut ipsum facilis eos exercitationem 
              eaque sit ducimus doloribus vel ipsum molestiae ex fugiat voluptatem. Eos quibusdam enim non consectetur 
              quidem ut consequuntur voluptates non deleniti voluptate qui sint quae. Et nisi ipsum et odio deserunt ex 
              omnis amet et quod consequatur eum quas assumenda. Vel excepturi adipisci id omnis soluta et optio rerum? 
              Ut error similique eos dolorem ducimus et blanditiis nihil in voluptas deserunt sit laborum quia. 
              Non rerum sint aut temporibus saepe aut expedita dolores qui internos voluptatum eos asperiores dolores 
              quo eaque amet?
          </div>

      </section>
      <section id = "section2">
          <div className="card shadow" id = "free"><h2>Free Plan</h2>
            <p>Lorem ipsum dolor sit amet. Ut repellat unde est quia sunt a rerum aliquam sit 
              necessitatibus commodi qui praesentium porro sit velit amet? Aut accusamus perspiciatis est quasi. Qui placeat voluptate sed quod quam sed quia eveniet ea dolor consectetur et nemo fuga et maiores nisi. Est dolorem autem. </p>
            <h4> PRICE PLAN: $0 </h4>
          </div>
          <div className="card shadow"><h2>Pro Plan</h2><p>Lorem ipsum dolor sit amet. Ut repellat unde est quia sunt a rerum aliquam sit 
              necessitatibus commodi qui praesentium porro sit velit amet? Aut accusamus perspiciatis est quasi. Qui placeat voluptate sed quod quam sed quia eveniet ea dolor consectetur et nemo fuga et maiores nisi. Est dolorem autem. </p>
                <h4> PRICE PLAN: $20 </h4>
              </div>
          <div className="card shadow">
            <h2>Plus Plan</h2>
            <p>Lorem ipsum dolor sit amet. Ut repellat unde est quia sunt a rerum aliquam sit 
              necessitatibus commodi qui praesentium porro sit velit amet? Aut accusamus perspiciatis est quasi. Qui placeat voluptate sed quod quam sed quia eveniet ea dolor consectetur et nemo fuga et maiores nisi. Est dolorem autem. </p>
            <h4> PRICE PLAN: $40 </h4>
          </div>
      </section>
      <section id = "section3">
          <h1>CONTACT INFORMATION:</h1>
          <h3>E-mail adress: somethingHere@lorem.com</h3>
          <h3>Adress: Lorem ipsum street, 6th ave.</h3>
          <h3>Telephone: 9999-99999</h3>
          <h2>How to get here:</h2>
              <div className="description2">Lorem ipsum dolor sit amet. Ut repellat unde est quia sunt a rerum aliquam sit 
                  necessitatibus commodi qui praesentium porro sit velit amet? Aut accusamus perspiciatis est quasi 
                  corrupti eos distinctio porro 33 illum voluptatem? Ex ipsum totam ut ipsum facilis eos exercitationem 
                  eaque sit ducimus doloribus vel ipsum molestiae ex fugiat voluptatem. Eos quibusdam enim non consectetur 
                  quidem ut consequuntur voluptates non deleniti voluptate qui sint quae. Et nisi ipsum et odio deserunt ex 
                  omnis amet et quod consequatur eum quas assumenda. Vel excepturi adipisci id omnis soluta et optio rerum? 
                  Ut error similique eos dolorem ducimus et blanditiis nihil in voluptas deserunt sit laborum quia. 
                  Non rerum sint aut temporibus saepe aut expedita dolores qui internos voluptatum eos asperiores dolores 
                  quo eaque amet?
              </div>
      </section>
      <section id = "section4">
        <h2>Sign in:</h2>
        <div className='field'>
          <label>Username</label>
          <input type="text"/>
        </div>
        
        <div className='field'>
          <label>Password</label>
          <input type="text"/>
          <button>Submit</button>
        </div>
      </section>
      </main>
    </div>
  )
}

export default App
