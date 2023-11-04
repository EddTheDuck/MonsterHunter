export default function FilterOptions ({optionArr}: any, select: string){
    console.log(select)
    return optionArr.map((option: any) => {
        return(
            <option>
                {option}
            </option>
        )
    })
}
