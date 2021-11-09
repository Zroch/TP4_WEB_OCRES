import React from "react";
import './App.css';

const profileinfo = [
    {
        prenom: "Lucas", 
        nom: "Lescrot",
        photo: "img/lucas.jpg",
        post: "Hâte de retourner en vacances",
    },
    {
        prenom: "Alexis",
        nom: "Fyouf",
        photo: "img/alexis.jpg",
        post: "J'aime trop l'école",
    },
    {
        prenom: "Clément",
        nom: "Constandeux",
        photo: "img/clement.jpg",
        post: "Ouaf Ouaf",
    }
  ];
  

  function Profilebutton(props){
    return(
      <button className="buttonstyle" id="haut" onClick={props.onclick} >{props.name} </button>
    )
  }
  
  
  class Profile extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        backgroundColour: this.getRandomColourString(),
        compteur : 0
      }
      this.changeStyle = this.changeStyle.bind(this);
    }
  
    getRandomColourString() {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return `rgba(${red},${green},${blue}, 0.3)`;
    }
  
    changeStyle() {
      this.setState({
        backgroundColour: this.getRandomColourString(),
      })
    }
    handleClick = () => {
        this.setState({ compteur : this.state.compteur + 1});
      }
  
    render(){
      return(
        <div>
        <div className="backgroundstyle" style={{'background-color': this.state.backgroundColour}}>
          <img src={this.props.photo} alt="" height="200px" className="img"/>
            <div>
                <p className="txt">Prenom: {this.props.prenom}</p>
            </div>
            <div>
              <p className="txt">Nom: {this.props.nom}</p>
            </div>
          </div>
          <div>
            <button className="buttonstyle" id="milieu" onClick={this.changeStyle}>Change style</button>
          </div>
        
        <div>
            <p className="txt">"{this.props.post}"</p>
        </div>
        <div>
            <button className="buttonstyle" id="bas" onClick = {this.handleClick}>C'est super !</button>
            {this.state.compteur}
        </div>
        </div>
  
      )
    }
  }
   

  
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        activeprofile: 0
      }
      this.handleclick = this.handleclick.bind(this);
    } 
    handleclick(index){
      console.log(index)
      this.setState({activeprofile:index})
    }
    
    render(){

    return (

      <div className="App">
        <header>
          <h1 className = "titre">Facebok</h1>
          {profileinfo.map((profil, index)=>
          <Profilebutton onclick={()=>this.handleclick(index)} name={profil.prenom} key={index}></Profilebutton>)}
        </header>

        <main>
            
            <Profile prenom={profileinfo[this.state.activeprofile].prenom} 
            nom={profileinfo[this.state.activeprofile].nom} 
            photo={profileinfo[this.state.activeprofile].photo}
            post={profileinfo[this.state.activeprofile].post}>
            </Profile>
            
        </main>
      </div>
    );
    }
  }
  
  
  export default App;