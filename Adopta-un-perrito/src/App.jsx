import { Header, MyCard, Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header background="#dcdcdc" TituloHeader="Adopta un Perrito" />
      <div className="contenido">
        <MyCard
          image="https://www.unotv.com/uploads/2022/07/perro-01-112553.jpg"
          title="BRIDA"
          petText="[EN ADOPCIÓN URGENTE‼️] Ella es BRIDA, nuestra pequeña rescatada que ha tenido tantos cambios y quien sufrió maltrato en sus primeros meses de vida 😪Su actual adoptante ya no puede tenerla por diversos problemas."
          colorBadge="danger"
          textBadge="Adoptar"
        />
        <MyCard
          image="https://i.pinimg.com/originals/70/83/ae/7083ae3d0c026219aa57f5014a265ab3.jpg"
          title="ROLLO"
          petText="[EN ADOPCIÓN] Este amoroso perrito es una dulzura y vivía amarrado con un alambre en su cuello. Su rescatista logró sacarlo de ahí y está listo para su nueva y responsable familiar."
          colorBadge="secondary"
          textBadge="Adoptar"
        />
        <MyCard
          image="https://www.rockandpop.cl/wp-content/uploads/2020/07/5a693aa16fa2dcf21c5ca3809c90a147-768x432.jpg"
          title="POGO"
          petText="[EN ADOPCIÓN] Esta guagua es un belleza ❤️"
          colorBadge="primary"
          textBadge="Adoptar"
        />
        <MyCard
          image="https://i0.wp.com/masperros.cl/wp-content/uploads/2019/04/Imagen-Qu%C3%A9-debo-saber-antes-de-adoptar-a-un-perro.jpg?fit=724%2C500&ssl=1"
          title="MAGNUS"
          petText="[EN ADOPCIÓN] Esta bebé de orejitas colorinas ❤️ es MAGNUS. Fue rescatada en el campo. Ahí la dejaron en un río y adentro de un saco junto a sus dos hermanos😔 Tuvieron la suerte de no morir ahogados."
          colorBadge="primary"
          textBadge="Adoptar"
        />
        <MyCard
          image="https://media-front.elmostrador.cl/2017/08/perro-700x467.jpg"
          title="LUKAS"
          petText="[EN ADOPCIÓN] Este bebé rubio colorín es LUKAS ❤️ Fue rescatado de una fábrica de ladrillos en donde 4 de sus amigos fueron envenenados 😔 Luke se salvó solo porque siguió al guardia a otro lugar."
          colorBadge="secondary"
          textBadge="Adoptar"
        />
        <MyCard
          image="https://www.bunko.pet/__export/1678985502502/sites/debate/img/2023/03/16/perro_callejero_sonriendo.jpg_423682103.jpg"
          title="MILAGROS"
          petText="[EN ADOPCIÓN URGENTE] Esta carita dice tanto 😔❤️ Alguien se enamore de ella y quiera al fin darle un hogar.
          Su dueña se tuvo que mudar y a ella la dejó abandonada en la casa, y los actuales residentes le están buscando familia."
          colorBadge="danger"
          textBadge="Adoptar"
        />
        <MyCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIDl5iT_If43lTGKEH7svjtjxPFK78iB0GQ&usqp=CAU"
          title="KAI"
          petText="[EN ADOPCIÓN] Si buscas una perrita pequeña y menudita... ¡ella ES! Su nombre en KAI y le encanta correr, pasear y regalonear ❤️"
          colorBadge="warning"
          textBadge="Adoptar"
        />
        <MyCard
          image="https://www.capitalqueretaro.com.mx/wp-content/uploads/2018/07/perros-callejeros.jpg"
          title="COCO Y OSO"
          petText="[EN ADOPCIÓN] Estos babys hermosos ❤️ son una hembra y macho. Buscan familias responsables."
          colorBadge="warning"
          textBadge="Adoptar"
        />
      </div>
      <Footer description="Somos una fundación sin fines de lucro, dedicada al rescate y búsqueda de hogar de animales domésticos; especialmente Perros y Gatos"></Footer>
    </>
  );
}

export default App;
