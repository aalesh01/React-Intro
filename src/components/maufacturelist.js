const Manulist = () => {
    let os = ["Samsung", "HTC", "Micromax", "Apple"];

    return (

        os.map((element, id) => {
            return <li key={id}>{element}</li>
        })
    );
}
export default Manulist;