import '../styles/style.css'

export default function SinglePost() {
    return (
        <div className="blog">
            <article className="container">
                <h1>Hur fixar du med hemsidan?</h1>
                <br />
                <br />
                <br />

                <img 
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80" 
                    alt="" 
                />
                <br />
                <br />

                <p>
                    Vill du göra en "skiss" över hur din hemsida ska se ut rekommenderar jag
                    <a href="http://figma.com" target="_blank">Figma</a>där du kan kan designa hemsidan
                    innan du bygger den. Googla bara efter figma tutorials.
                </p>
                <p>
                    Vill du istället göra din hemsida själv kan du googla wordpress eller wix de erbjuder
                    tjänster för att göra sin egna websida.
                </p>
                <br />

                <h2>Fonts</h2>
                <p>
                    Är själva text typen och du kan hitta fonts på<a href="https://fonts.google.com/" target="_blank">Google fonts</a>och
                    där bör du söka efter populärast och ta något med många styles. Det är generelt inte bra att ha för många fonts (max 3st)
                    men kan va bra att bara ha en.
                </p>
                <p>
                    Hos<a href="https://fontjoy.com/" target="_blank">Fontjoy</a> kan du kolla hur olika fonts ser
                    ut tillsammans om du behöver insperation och vill ha någon unik font.
                </p>
                <br />

                <h3>Font weight</h3>
                <p>
                    Detta är själva tjockleken på texten och te.x titeln och vanliga texten bör vara annolunda
                    så man får mer kontrast.
                </p>

                <br />
                <h2>Skriva en blogg</h2>
                <p>
                    Börja googla efter "bästa blog" eller något liknade för att hitta
                    hur andra personer gjort bloggar. Kolla hur flera olika gjort sen så
                    välj en niche för din blog.
                </p>
                <br />

                <h3>Namn</h3>
                <p>
                    Googla efter "köp domän" och kolla vilka lediga domäns som finns.
                    Du kan sedan köpa en som har en årlig kostnad på ca 130kr för en .se domän.
                    .com brukar vara lite billigare och kosta 90kr om du nu vill ha en sån istället.
                </p>
                <br />

                <h3>Title</h3>
                <p>
                    Välj en titel som lockar. Sedan googlar du på titeln och ser hur andra har skrivit sina bloggar.
                    Du vet nu mer hur du ska göra. Googla annars blogg titlar.
                </p>
            </article>
        </div>
    )
}
