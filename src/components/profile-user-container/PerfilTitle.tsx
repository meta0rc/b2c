export const PerfilTitle = (props: any) => {
    return(
        <div className="containerProfile user-id-profile">
        <h1 style={{marginBottom: '10px'}}>
            Buscando pelo Serviço de {props.job}?
        </h1>
        <p>
            Aqui na BIA, você pode encontrar diversos profissionais capacitados para resolver os seus problemas neste setor.
        </p>
    </div>
    )
}