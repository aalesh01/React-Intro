const OSlist = () => {
    let os = ["Android", "Blackberry", "iPhone", "Windows Phone"];

    return(
        
           os.map((element,id)=>{
               return <li key={id}>{element}</li>
           })
    );
}
export default OSlist;