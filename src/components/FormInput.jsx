function FormInput({label, type, name, placeholder, }) {
  return (
    <label className="form-control w-full ">
    <div className="label">
    <span className="label-text">{label}</span>
  </div>
  <input name={name} type={type} placeholder={ placeholder} className="input input-bordered w-full " />
  
</label>
  )
}

export default FormInput