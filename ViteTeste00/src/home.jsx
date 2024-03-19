import Graficos from "./Graficos"

export const Home = () =>{
    return(
        <>
        <Graficos text="Graficos de linha" color="#ff6961" whatChart='line'/>
        <Graficos text="Graficos de area" color="#77dd77" whatChart='Area'/>
        <Graficos text="Graficos de pizza" color="#fdfd96" whatChart='pie'/>
        <Graficos text="Graficos de barra" color="#84b6f4" whatChart='barra'/>
        </>
    )
}