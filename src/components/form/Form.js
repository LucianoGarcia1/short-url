import LinkCurto from "../api/api.js";
import themes from "../themes/themes.js";
import copy from "../copy/copy.js";

function Form(){
  return(
    <div className="Form">
        <div className="temas">
            <button onClick={themes}><ion-icon name="moon-outline"></ion-icon></button>
        </div>

        <form className="content">
            <label>
                Alias
                <input type="text" className="alias" required="required"/>
            </label>
            <label>
                Url
                <input type="url" className="link" required/>
            </label>

            <div className="btns">
                <button type="button" onClick={LinkCurto}>Encurtar</button>
            </div>       
        </form>

        <div className="link-encurtado">
            <h2>Seu LinkCurto</h2>
            <a id="shortLy" className="shortLink" target="_blank"></a>

            <div className="copiar">
                <button onClick={copy} className="copy"><ion-icon name="copy-outline"></ion-icon></button>

                <button onClick={()=>{window.location.reload()}}><ion-icon name="reload-outline"></ion-icon></button>
            </div>
        </div>   
    </div>
  );
}

export default Form;