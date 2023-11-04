import FilterOptions from "./FilterOptions"

export default function  FilterSelect ({filterObj}: any) {
    const keysArr = Object.keys(filterObj)
    return keysArr.map((key) => {
        return( 
        <div className="form-control w-full max-w-xs">
          <label className="label">
              <span className="label-text">Select {key}</span>
          </label>
          <select className="select select-bordered">
              <FilterOptions optionArr={filterObj[key]}
              select={key}
              />
              
          </select>
        </div>
        )
    }) 
  }
  

