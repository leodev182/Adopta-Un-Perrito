import { BarNav } from "../barnav/BarNav";
export const Header = ({ background, TituloHeader }) => {
  // console.log("working");
  return (
    <>
      <div
        style={{
          height: "10vh",
          marginBottom: "60px",
          background: background ? background : "lightgreen",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "20%",
            paddingLeft: "10px",
          }}
        >
          <img
            src="https://lirp.cdn-website.com/4fe36726/dms3rep/multi/opt/2432382-logo_ea-16790-640w.png"
            alt="Logo"
            style={{
              width: "30%",
            }}
          />
        </div>
        <div>
          <h1
            style={{
              color: "white",
            }}
          >
            {TituloHeader}
          </h1>
        </div>
        <div
          style={{
            width: "25%",
          }}
        >
          <BarNav
            linkIg="https://www.instagram.com/adoptaaunperritochile/?hl=es"
            homeIg="Home Instagram"
          />
        </div>
      </div>
    </>
  );
};
