import '../styles/style.css';

export default function Home() {
    return (
        <div>
            <div className="background1">
                <div className="home-header-container">
                    <div className="home-header">
                        <img
                            //Byt ut länken mot en annan bild.
                            src="https://www.pngfind.com/pngs/b/683-6837737_minecraft-hearts-png.png" 
                            alt="" 
                        />
                        <div className="content">
                            <h2>Välkommen till emmas hemsida</h2>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta adipisci delectus alias quibusdam natus tenetur ex dignissimos, voluptate eius!
                            </p>
                            <br />
                            <form action="" className="form-subscribe">
                                <input type="text" placeholder="name"/>
                                <input type="text" placeholder="email"/>
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-container">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur debitis at molestiae iste magni quo expedita? Aperiam, corporis libero? Accusamus, quasi obcaecati. Dolore alias sint est atque? Nihil blanditiis, ipsum, molestias dolorum, iure nulla laborum eius velit impedit enim ab nostrum rerum doloremque tempore repellendus maxime qui explicabo ex quaerat reprehenderit quo nesciunt consequatur incidunt. Beatae nemo omnis quae doloribus voluptas esse velit! Sunt eos in incidunt, adipisci itaque suscipit!
                </p>
            </div>
        </div>
    )
}
