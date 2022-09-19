import { db } from "./firebaseConfig";
import { useState, useEffect } from "react";
import picture from "../Assets/Calendar.jpg";

const Gym = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    //setIsShown((current) => !current);

    // 👇️ or simply set it to true
    setIsShown1(false);
    setIsShown2(false);
    setIsShown(true);
  };

  const handleClick1 = (event) => {
    //setIsShown1((current) => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown1(true);
  };

  const handleClick2 = (event) => {
    //setIsShown2((current) => !current);
    setIsShown(false);
    setIsShown1(false);
    setIsShown2(true);
  };

  const clickBack = (event) => {
    setIsShown(false);
    setIsShown1(false);
    setIsShown2(false);
  };

  return (
    <div className="container2">
      <div className="col-1">
        <button onClick={handleClick}>Inschrijven Cursussen</button>
        {/* 👇️ show elements on click */}
        {/* {isShown && (
            <div>
              <h2>Some content here</h2>
            </div>
          )} */}

        {/* 👇️ show component on click */}
        {isShown && <Cursus />}

        <button onClick={handleClick1}>Personal Trainers</button>
        {isShown1 && <PT />}

        <button onClick={handleClick2}>Abonnement Opzeggen</button>
        {isShown2 && <Info />}
      </div>
      <button onClick={clickBack}>BACK_BUTTON</button>
    </div>
  );
};

function Cursus() {
  return (
    <div className="content">
      <h2 className="box-title">Cursussen</h2>
      <img className="img_container2" src={picture} alt="Picture" />
    </div>
  );
}

function PT() {
  return (
    <div className="content">
      <h2 className="box-title">Personal Trainers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
        mauris sodales, accumsan augue nec, faucibus lacus. Praesent vel sem
        quam. Aliquam congue tempus ex, nec euismod ex maximus sit amet. Sed
        rutrum suscipit odio nec vehicula. Pellentesque ac nibh felis. Curabitur
        ac fermentum justo. Etiam mauris quam, commodo sed orci ac, gravida
        suscipit diam. Quisque vel justo pretium, volutpat sem sit amet,
        volutpat metus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Praesent sollicitudin justo eu
        elit elementum, vel pretium purus bibendum. Maecenas id nisl egestas,
        mattis libero quis, mollis neque. Pellentesque magna mauris, imperdiet
        cursus lectus ut, auctor gravida nunc. Aenean non velit ultricies,
        malesuada lorem at, sagittis velit. Nam commodo congue nunc, quis
        ultrices ante suscipit vel. Fusce gravida arcu sed risus bibendum
        lobortis.
        <br></br>
        <br></br>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Vivamus fringilla, dui eget efficitur tempus, magna nunc
        condimentum lorem, quis auctor neque augue a felis. Vestibulum laoreet
        odio eu elit iaculis, a bibendum libero ornare. Sed aliquam arcu a nulla
        fermentum laoreet. Maecenas lacinia sem eget purus lacinia, ut rutrum
        lacus laoreet. Donec cursus urna vel orci feugiat congue. Phasellus
        vestibulum quis erat quis semper. Sed interdum luctus nulla.
      </p>
    </div>
  );
}

function Info() {
  return (
    <div className="content">
      <h2 className="box-title">Information</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium
        porttitor luctus. Ut at pellentesque velit. Phasellus tincidunt posuere
        orci, vel congue elit maximus nec. Curabitur rutrum, enim quis finibus
        auctor, odio arcu accumsan justo, ac venenatis turpis ante sit amet
        erat. Nunc interdum pharetra lacus, nec aliquam eros molestie non.
        Integer rhoncus, turpis ac luctus interdum, odio tortor condimentum
        nisi, a ornare justo enim eget nisl. In ac elementum justo, in
        scelerisque leo. Nulla et elit mollis, dignissim urna sed, pharetra
        nisi. Duis nisi libero, blandit vitae congue sit amet, condimentum sed
        nisl. Cras lorem quam, iaculis vitae tincidunt et, bibendum nec tortor.
        Curabitur ut nunc vitae libero luctus feugiat. Vivamus feugiat ultrices
        arcu vel congue. Aenean at vestibulum dolor, eu ullamcorper ex. Cras
        eleifend sodales nisi, quis tempus quam tempus vitae. Aliquam erat
        volutpat.
        <br></br>
        <br></br>
        In gravida eleifend magna, quis porttitor nulla vehicula non. Nunc a
        porta est. In sit amet pharetra sapien, a posuere nunc. Suspendisse in
        lacinia dui. Maecenas eget finibus justo. Mauris congue rutrum turpis,
        vitae rhoncus tellus aliquam et. Nunc tempus nibh tellus, eget facilisis
        lectus molestie vel. Nam scelerisque magna vel erat congue, a porta
        sapien consequat. In scelerisque condimentum luctus. Curabitur at
        vestibulum ex, sed pharetra risus. Duis iaculis dolor sit amet eleifend
        ullamcorper.
      </p>
    </div>
  );
}

export default Gym;
